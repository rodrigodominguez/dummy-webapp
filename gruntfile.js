//Gruntfile
module.exports = function (grunt) {
  var webAppOutputPathJS = './WebApp/js/myapp.js';
  var webAppOutputPathCSS = './WebApp/css/mystyle.css';

  //Initializing the configuration object
  grunt.initConfig({
    bower: {
      install: {
      }
    },

    clean: {
      miclean: [
        "build/*",
        "neutered/*",
      ]
    },
    
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'js/*.js',
        'js/*/*.js',
        '!js/templates.js',
        '!js/libs/*'
      ]
    },

    neuter: {
      mineuter: {
        src: 'js/s1.js',
        dest: 'neutered/miapp.js'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      cdealsjs: {
        src: [
          //'bower_components/jquery/dist/jquery.js',
          //'libs/bootstrap/bootstrap.js',
          //'bower_components/jquery-timeago/jquery.timeago.js',
          //'bower_components/underscore/underscore.js',
          //'bower_components/backbone/backbone.js',
          //'bower_components/marked/lib/marked.js',
          //'bower_components/modernizer/modernizr.js',
          //'libs/spin/spin.js',
          //'libs/ladda/ladda.js',
          'js/s2.js',          
          'neutered/miapp.js'
          
        ],
        dest: 'build/miapp.js',
        //dest: webAppOutputPathJS
      }/*,
      dealscss: {
        src: [
          'libs/bootstrap/bootstrap.min.css',
          'bower_components/font-awesome/css/font-awesome.min.css',
          'libs/ladda/ladda-themeless.css'
        ],
        dest: webAppOutputPathCSS,
      }*/
    },

    uglify: {
      /*
      nope: {
      }
      */
      udealsjs: {
        files: {
          'miapp.min.js': ['build/miapp.js']
        }
      },
      /*
      dealscss: {
        files: {
          webAppOutputPathCSS: [webAppOutputPathCSS]
        }
      }
      */
    },

    watch: {
      deals: {
        files: [
          'js/*.js',
          'js/*/*.js',
        ],
        tasks: [
          'clean',
          'jshint',
          'neuter',
          'concat',
          'uglify'
        ]
      },
      grunt: {
        files: ['gruntfile.js'],
        tasks: [
          'clean',
          'jshint',
          'neuter',
          'concat',
          'uglify'
        ],
        options: {
          reload: true
        }
      }
    },
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-supervisor');
  grunt.loadNpmTasks('grunt-concurrent');

  // Task definition
  grunt.registerTask('default', [
    'bower',
    'clean',
    'jshint',
    'neuter',
    'concat',
    'uglify',
    'watch'
  ]);
};