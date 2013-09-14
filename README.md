# assemble-swig [![NPM version](https://badge.fury.io/js/assemble-swig.png)](http://badge.fury.io/js/assemble-swig)  [![Build Status](https://travis-ci.org/assemble/assemble-swig.png?branch=master)](https://travis-ci.org/assemble/assemble-swig)

> Assemble engine plugin for processing swig templates.

## Getting Started

```shell
npm install assemble-swig --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('assemble-swig');
```

## The "assemble" task
_Run this task with the `grunt assemble` command._

### Overview
In your project's Gruntfile, add a section named `assemble` to the data object passed into `grunt.initConfig()`.

#### Usage Example

```js
grunt.initConfig({
  assemble: {
    options: {
      engine: 'swig',
      swig: {
        varControls: ["<%=", "%>"]
      }
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

Specify `swig` as the current engine for processing templates:

```js
assemble: {
  options: {
    engine: 'swig'
  }
}
```


## Related projects

* [sublime-swig](https://github.com/jonschlinkert/sublime-swig) syntax highlight for Swig Templates, in Sublime Text.
* [sublime-monokai-extended](https://github.com/jonschlinkert/sublime-monokai-extended)
* [sublime-markdown-extended](https://github.com/jonschlinkert/sublime-markdown-extended)
* [assemble](http://github.com/assemble) (see the [live docs](http://assemble.io))
* [assemble-swig](http://github.com/assemble/assemble-swig)
* [assemble-swig-examples](http://github.com/assemble/assemble-swig-examples)



## Release History

 * 2013-08-07   v0.1.0   New Assemble engine plugin for swig templates.

***

Project authored by [Brian Woodward](https://github.com/doowb/).

_This file was generated on Wed Sep 11 2013 22:50:17._
