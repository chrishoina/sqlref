oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @chrishoina/sqlref
$ sqlref COMMAND
running command...
$ sqlref (--version)
@chrishoina/sqlref/0.0.0 darwin-x64 node-v19.4.0
$ sqlref --help [COMMAND]
USAGE
  $ sqlref COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sqlref hello PERSON`](#sqlref-hello-person)
* [`sqlref hello world`](#sqlref-hello-world)
* [`sqlref help [COMMANDS]`](#sqlref-help-commands)
* [`sqlref plugins`](#sqlref-plugins)
* [`sqlref plugins:install PLUGIN...`](#sqlref-pluginsinstall-plugin)
* [`sqlref plugins:inspect PLUGIN...`](#sqlref-pluginsinspect-plugin)
* [`sqlref plugins:install PLUGIN...`](#sqlref-pluginsinstall-plugin-1)
* [`sqlref plugins:link PLUGIN`](#sqlref-pluginslink-plugin)
* [`sqlref plugins:uninstall PLUGIN...`](#sqlref-pluginsuninstall-plugin)
* [`sqlref plugins:uninstall PLUGIN...`](#sqlref-pluginsuninstall-plugin-1)
* [`sqlref plugins:uninstall PLUGIN...`](#sqlref-pluginsuninstall-plugin-2)
* [`sqlref plugins update`](#sqlref-plugins-update)

## `sqlref hello PERSON`

Say hello

```
USAGE
  $ sqlref hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/chrishoina/sqlref/blob/v0.0.0/dist/commands/hello/index.ts)_

## `sqlref hello world`

Say hello world

```
USAGE
  $ sqlref hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ sqlref hello world
  hello world! (./src/commands/hello/world.ts)
```

## `sqlref help [COMMANDS]`

Display help for sqlref.

```
USAGE
  $ sqlref help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sqlref.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `sqlref plugins`

List installed plugins.

```
USAGE
  $ sqlref plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sqlref plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `sqlref plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sqlref plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ sqlref plugins add

EXAMPLES
  $ sqlref plugins:install myplugin 

  $ sqlref plugins:install https://github.com/someuser/someplugin

  $ sqlref plugins:install someuser/someplugin
```

## `sqlref plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sqlref plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sqlref plugins:inspect myplugin
```

## `sqlref plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sqlref plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ sqlref plugins add

EXAMPLES
  $ sqlref plugins:install myplugin 

  $ sqlref plugins:install https://github.com/someuser/someplugin

  $ sqlref plugins:install someuser/someplugin
```

## `sqlref plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ sqlref plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ sqlref plugins:link myplugin
```

## `sqlref plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sqlref plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sqlref plugins unlink
  $ sqlref plugins remove
```

## `sqlref plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sqlref plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sqlref plugins unlink
  $ sqlref plugins remove
```

## `sqlref plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sqlref plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sqlref plugins unlink
  $ sqlref plugins remove
```

## `sqlref plugins update`

Update installed plugins.

```
USAGE
  $ sqlref plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
