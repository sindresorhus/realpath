import path from 'node:path';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['_fixture.js']);
	t.is(path.basename(stdout), 'test.js');
});
