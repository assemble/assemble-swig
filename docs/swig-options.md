# Options

## [options.engine](http://assemble.io/docs/options-engine.html)
Type: `String`

Specify the current engine for Assemble to use for processing templates.

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
