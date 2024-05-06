#!/usr/bin/env node
import process from 'node:process';
import path from 'node:path';
import realpath from 'fs.realpath';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ realpath <filepath>

	Options
	  --relative-to=DIR  Print the resolved path relative to DIR
	  --no-symlinks, -s  Don't expand symlinks

	Example
	  $ realpath ../unicorn
	  $ realpath --no-symlinks /tmp/link
	  $ realpath --relative-to /Users/sindresorhus/dev ../unicorn
`, {
	importMeta: import.meta,
	flags: {
		relativeTo: {
			type: 'string',
		},
		symlinks: {
			type: 'boolean',
			default: true,
			shortFlag: 's',
			aliases: ['strip'],
		},
	},
});

let filePath = cli.input[0];

if (!filePath) {
	console.error('Please specify a file path');
	process.exit(1);
}

if (cli.flags.symlinks) {
	try {
		filePath = realpath.realpathSync(filePath);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
} else {
	filePath = path.resolve(filePath);
}

if (cli.flags.relativeTo) {
	const base = path.resolve(cli.flags.relativeTo);
	filePath = path.relative(base, filePath);
}

console.log(filePath);
