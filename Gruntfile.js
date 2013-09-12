/*
 * assemble-swig
 * https://github.com/assemble/assemble-swig
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'lib/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('assemble-internal');

  // The default task that runs with the "grunt" command.
  grunt.registerTask('default', ['jshint', 'assemble-internal']);
};
