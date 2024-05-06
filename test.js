import path from 'node:path';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['_fixture.js']);
	t.is(path.basename(stdout), 'test.js');
});

test('--no-symlinks', async t => {
	const {stdout} = await execa('./cli.js', ['--no-symlinks', '_fixture.js']);
	t.is(path.basename(stdout), '_fixture.js');
});

test('--relative-to', async t => {
	const {stdout} = await execa('./cli.js', ['_fixture_nested/file.txt', '--relative-to', '_fixture_nested']);
	t.is(stdout, 'file.txt');
});

test('--no-symlinks with --relative-to', async t => {
	const {stdout} = await execa('./cli.js', ['--no-symlinks', '--relative-to', '_symlink_nested', '_symlink_nested/symlink']);
	t.is(stdout, 'symlink');
});
