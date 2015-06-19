#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var meow = require('meow');

var cli = meow({
	help: [
		'Usage',
		'  $ realpath <filepath>',
		'',
		'Example',
		'  $ realpath ../unicorn',
		'  /Users/sindresorhus/dev/unicorn'
	]
});

var filepath = cli.input[0];

if (!filepath) {
	console.error('Please supply a filepath');
	process.exit(1);
}

filepath = path.resolve(filepath);

try {
	console.log(fs.realpathSync(filepath));
} catch (err) {
	if (err.code === 'ENOENT') {
		console.log(filepath);
		return;
	}

	console.error(err.message);
	process.exit(1);
}
