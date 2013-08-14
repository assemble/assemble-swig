# Overview
In your project's Gruntfile, add a section named `assemble` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  assemble: {
    options: {
      // Task-specific options go here
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