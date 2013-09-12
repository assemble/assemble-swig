# Overview
In your project's Gruntfile, add a section named `assemble` to the data object passed into `grunt.initConfig()`.

## Usage Example

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