/*
 * assemble-swig
 * https://github.com/assemble/assemble-swig
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */


var swig = require('swig');
var _ = require('lodash');

var partials = {};
var instance = new swig.Swig();

// '>' tag, emulating partials
var parse = function (str, line, parser, types, stack, options) {
  return true;
};
var compile = function (compiler, args, content, parents, options, blockName) {
  return '' +
          '_output += _swig.compile(_ext._assemble_partials[' + args[0] + '], {})();';
};
var ends  = false; // does not require end tag
var block = false; // not sure about this one.

instance.setTag('>', parse, compile, ends, block);
instance.setExtension('_assemble_partials', partials);

var plugin = function() {
  'use strict';

  var init = function(options) {
    var curated = _(options.swig).pick(
      'autoescape',
      'varControls',
      'tagControls',
      'cmtControls',
      'locals',
      'cache'
    );

    _(curated).each(function (v, k) {
      instance.options[k] = v;
    });
  };

  var compile = function(src, options, callback) {
     var tmpl;
    try {
      tmpl = instance.compile(src, options);
    } catch(ex) {
      callback(ex, null);
    }
    callback(null, tmpl);
  };

  var render = function(tmpl, options, callback) {
    var content;
    try {
      if(typeof tmpl === 'string') {
        tmpl = instance.compile(tmpl, options);
      }
      content = tmpl(options);
    } catch (ex) {
      callback(ex, null);
    }
    callback(null, content);
  };

  var registerFunctions = function(helperFunctions) {
    if(!_(helperFunctions).isEmpty()) {
      _(helperFunctions).each(function(fn, key) {
        instance.setFilter(key, fn);
      });
    }
  };

  var registerPartial = function(filename, content) {
    partials[filename] = content;
  };

  return {
    init: init,
    compile: compile,
    render: render,
    registerFunctions: registerFunctions,
    registerPartial: registerPartial,
    swig: instance
  };
};

module.exports = exports = plugin();