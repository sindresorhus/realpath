import path from 'path';
import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(path.basename(await execa.stdout('./cli.js', ['fixture.js'])), 'test.js');
});
