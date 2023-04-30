module.exports = function(grunt) {

    grunt.initConfig({
  
      clean: {
        dist: ['dist/**']
      },
  
      copy: {
        main: {
          files: [
            { expand: true, cwd: 'src/', src: ['**'], dest: 'dist/' }
          ]
        }
      },
  
      cssmin: {
        target: {
          files: {
            'dist/css/style.min.css': ['src/css/*.css']
          }
        }
      },
  
      uglify: {
        my_target: {
          files: {
            'dist/js/app.min.js': ['src/js/*.js']
          }
        }
      }
  
    });
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify']);
  
  };
  