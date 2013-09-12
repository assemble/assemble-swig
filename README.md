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




## Related projects
* [assemble/assemble](https://github.com/assemble/assemble)
* [assemble/dry](https://github.com/assemble/dry)
* [assemble/assemble-internal](https://github.com/assemble/assemble-internal)
* [assemble/assemble-less](https://github.com/assemble/assemble-less)
* [assemble/grunt-toc](https://github.com/assemble/grunt-toc)
* [assemble/handlebars-helpers](https://github.com/assemble/handlebars-helpers)
* [assemble/grunt-dry](https://github.com/assemble/grunt-dry)
* [assemble/boilerplates](https://github.com/assemble/boilerplates)
* [assemble/less-tests](https://github.com/assemble/less-tests)
* [assemble/boilerplate-site](https://github.com/assemble/boilerplate-site)
* [assemble/grunt-init-assemble](https://github.com/assemble/grunt-init-assemble)
* [assemble/generator-assemble](https://github.com/assemble/generator-assemble)
* [assemble/assemble-utils](https://github.com/assemble/assemble-utils)
* [assemble/task-manifest](https://github.com/assemble/task-manifest)
* [assemble/boilerplate-sitemap](https://github.com/assemble/boilerplate-sitemap)
* [assemble/assemble-package-manager](https://github.com/assemble/assemble-package-manager)
* [assemble/assemble-manifest](https://github.com/assemble/assemble-manifest)
* [assemble/assemble-handlebars](https://github.com/assemble/assemble-handlebars)
* [assemble/assemble-swig](https://github.com/assemble/assemble-swig)
* [assemble/boilerplate-book](https://github.com/assemble/boilerplate-book)
* [assemble/handlebars-helpers-examples](https://github.com/assemble/handlebars-helpers-examples)
* [assemble/glob-object](https://github.com/assemble/glob-object)
* [assemble/gruntjs.com](https://github.com/assemble/gruntjs.com)
* [assemble/grunt-assemble](https://github.com/assemble/grunt-assemble)
* [assemble/boilerplate-markdown](https://github.com/assemble/boilerplate-markdown)
* [assemble/assemble-docs](https://github.com/assemble/assemble-docs)
* [assemble/grunt-init-helper](https://github.com/assemble/grunt-init-helper)
* [assemble/lodash-mixins](https://github.com/assemble/lodash-mixins)
* [assemble/boilerplate-gist-blog](https://github.com/assemble/boilerplate-gist-blog)
* [assemble/grunt-convert](https://github.com/assemble/grunt-convert)

## Release History

 * 2013-08-07   v0.1.0   New Assemble engine plugin for swig templates.

***

Project authored by [Brian Woodward](https://github.com/doowb/).

_This file was generated on Wed Sep 11 2013 22:34:27._
