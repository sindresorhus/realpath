'use strict';
var path = require('path');
var childProcess = require('child_process');
var test = require('ava');

test(function (t) {
	t.plan(2);

	childProcess.execFile('node', ['cli.js', 'fixture.js'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(path.basename(stdout.trim()) === 'test.js');
	});
});
