/*Configured to lint, update css, compile to built.js and refresh the browser*/

module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascripts/main.js'],
        dest: '../dist/app.js'
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$", "require", "XMLHttpRequest", "module" ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": false},
        reporter: require('jshint-stylish')
      },
      files: ['../javascripts/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../scss/styles.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          base: '../',
          hostname: 'localhost',
          port: 3000,
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      javascripts: {
        files: ['../javascripts/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'connect', 'watch']);
};