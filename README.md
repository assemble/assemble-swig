# assemble-swig [![NPM version](https://badge.fury.io/js/assemble-swig.png)](http://badge.fury.io/js/assemble-swig)  [![Build Status](https://travis-ci.org/assemble/assemble-swig.png?branch=master)](https://travis-ci.org/assemble/assemble-swig)

> Assemble engine plugin for processing swig templates.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install assemble-swig --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('assemble-swig');
```

## The  Assemble  task
_Run this task with the `grunt swig` command._

### Overview
In your project's Gruntfile, add a section named `assemble` to the data object passed into `grunt.initConfig()`.

#### Usage Example

```js
grunt.initConfig({
  assemble: {
    options: {
      engine: 'swig'
    },
    site: {
      files: {
        '_gh_pages/': ['src/templates/**/*.swig']
      }
    }
  }
});
```
### Options

#### [options.engine](http://assemble.io/docs/options-engine.html)
Type: `String`

Specify the current engine for Assemble to use for processing templates.

```js
assemble: {
  options: {
    engine: 'swig'
  }
}
```

## Release History

 * 2013-08-07   v0.1.0   New Assemble engine plugin for swig templates.

***

Project authored by [Brian Woodward](https://github.com/doowb/).

_This file was generated on Wed Sep 11 2013 22:34:27._
