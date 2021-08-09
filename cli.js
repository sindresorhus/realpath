#!/usr/bin/env node
import process from 'node:process';
import path from 'node:path';
import realpath from 'fs.realpath';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ realpath <filepath>

	Example
	  $ realpath ../unicorn
	  /Users/sindresorhus/dev/unicorn
`, {
	importMeta: import.meta,
});

let filePath = cli.input[0];

if (!filePath) {
	console.error('Please specify a file path');
	process.exit(1);
}

filePath = path.resolve(filePath);

try {
	console.log(realpath.realpathSync(filePath));
} catch (error) {
	if (error.code === 'ENOENT') {
		console.log(filePath);
		process.exit();
	}

	console.error(error.message);
	process.exit(1);
}
