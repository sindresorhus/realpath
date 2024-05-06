# realpath

> Expands symbolic links and prints the resolved absolute filepath

Similar to coreutils [`realpath`](http://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html).

## Install

```sh
npm install --global realpath
```

## Usage

```
$ realpath --help

  Usage
    $ realpath <filepath>

  Options
    --relative-to=DIR  Print the resolved path relative to DIR
    --no-symlinks, -s  Don't expand symlinks

  Example
    $ realpath ../unicorn
    $ realpath --no-symlinks /tmp/link
    $ realpath --relative-to /Users/sindresorhus/dev ../unicorn
```
