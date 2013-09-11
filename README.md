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




## The  "assemble"  task
_Run this task with the `grunt swig` command._

### Overview
In your project's Gruntfile, add a section named `assemble` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  assemble: {
    options: {
      // Task-specific options go here
      engine: 'swig',
      swig: {
        varControls: ["<%=", "%>"]
      }
    },
    site: {
      options: {
        // Target-specific options go here
      },
      files: {
        // Target-specific file lists go here
      }
    }
  }
});
```
### Options

#### [options.engine](http://assemble.io/docs/options-engine.html)
Type: `String`

Specify the current engine for Assemble to use for processing templates.

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

## Related projects
* [assemble/assemble](https://github.com/assemble/assemble)
* [assemble/boilerplates](https://github.com/assemble/boilerplates)
* [assemble/boilerplate-site](https://github.com/assemble/boilerplate-site)
* [assemble/grunt-init-assemble](https://github.com/assemble/grunt-init-assemble)
* [assemble/generator-assemble](https://github.com/assemble/generator-assemble)
* [assemble/assemble-docs](https://github.com/assemble/assemble-docs)
* [assemble/grunt-init-helper](https://github.com/assemble/grunt-init-helper)
* [assemble/lodash-mixins](https://github.com/assemble/lodash-mixins)

## Release History

 * 2013-08-07   v0.1.0   New Assemble engine plugin for swig templates.

***

Project authored by [Brian Woodward](https://github.com/doowb/).

_This file was generated on Fri Aug 09 2013 00:52:14._
