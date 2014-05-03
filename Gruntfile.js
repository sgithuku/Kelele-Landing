// Generated on 2014-04-03 using generator-bedrock 0.1.3
'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    var yeomanConfig = {
        app: 'app',
        build: 'dist',
        tmp: '.tmp'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            sass: {
                files: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/styles/{,*/}{,*/}*.{scss,sass}'
                ],
                tasks: ['sass:server']
            },
            server: {
                options: {
                    livereload: true,
                },
                files: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/*.html',
                    '{<%= yeoman.tmp %>,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{<%= yeoman.tmp %>,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: true
            },
            server: {
                options: {
                    base: ['.','<%= yeoman.tmp %>', '<%= yeoman.app %>'],
                    debug: true
                }
            },
            build: {
                options: {
                    base: '<%= yeoman.build %>',
                    keepalive: true,
                    livereload: false
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            build: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.tmp %>',
                        '<%= yeoman.build %>/*',
                        '!<%= yeoman.build %>/.git*'
                    ]
                }]
            },
            server: '<%= yeoman.tmp %>'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        sass: {
            options: {
                includePaths: [
                    '<%= yeoman.app %>/styles/',
                    '<%= yeoman.app %>/bower_components/',
                    '<%= yeoman.app %>/bower_components/foundation/scss'
                ],
            },
            build: {
                files: {
                    '<%= yeoman.tmp %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            },
            server: {
                options: {
                    sourceComments: 'map',
                    sourceMap: '<%= yeoman.tmp %>/styles/main.css.map'
                },
                files: {
                    '<%= yeoman.tmp %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            }
        },
        filerev: {
            build: {
                src: [
                    '<%= yeoman.build %>/scripts/{,*/}*.js',
                    '<%= yeoman.build %>/styles/{,*/}*.css',
                    '<%= yeoman.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.build %>/styles/fonts/*'
                ]
            }
        },
        modernizr: {
            "devFile": "<%= yeoman.app %>/bower_components/modernizr/modernizr.js",
            "outputFile": "<%= yeoman.build %>/scripts/modernizr.js",
            "extra": {
                "shiv": true,
                "printshiv": false,
                "load": true,
                "mq": false,
                "cssclasses": true
            },
            "extensibility": {
                "addtest": false,
                "prefixed": false,
                "teststyles": false,
                "testprops": false,
                "testallprops": false,
                "hasevents": false,
                "prefixes": false,
                "domprefixes": false
            },
            "uglify": true,
            "tests": [],
            "parseFiles": true,
            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
            // You can override this by defining a "files" array below.
            // "files" : [],
            "matchCommunityTests": false,
            "customTests": []
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.build %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: [
                    '<%= yeoman.build %>',
                    '<%= yeoman.build %>/styles'
                ]
            },
            html: ['<%= yeoman.build %>/{,*/}*.html'],
            css: ['<%= yeoman.build %>/styles/{,*/}*.css']
        },
        imagemin: {
            build: {
                options: {
                    cache: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.build %>/images'
                }]
            }
        },
        htmlmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.build %>'
                }]
            }
        },
        uncss: {
            build: {
                options: {
                    stylesheets: ['../<%= yeoman.tmp %>/concat/styles/main.min.css']
                },
                src: ['<%= yeoman.app %>/index.html'],
                dest: '<%= yeoman.tmp %>/concat/styles/main.min.css'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                report: 'min'
            }
        },
        uglify: {
            options: {
                report: 'min',
                preserverComments: 'some'
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    dest: '<%= yeoman.build %>',
                    cwd: 'heroku',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        'styles/fonts/*'
                    ],
                    rename: function (dest, src) {
                        var path = require('path');
                        if (src === 'distpackage.json') {
                            return path.join(dest, 'package.json');
                        }
                        return path.join(dest, src);
                    }
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.build %>/images',
                    src: ['generated/*']
                }]
            }
        },
        shell: {
              'git-add-dist': {
                command: 'git add .'
              },
              'git-commit-build': {
                command: 'git commit -am"build"'
              },
              'heroku': {
                    command: 'git push heroku master'
                  }
          },
        concurrent: {
            build: [
                'sass:build',
                'imagemin',
                'htmlmin'
            ]
        },
        'gh-pages': {
            options: {
                // branch: 'master', // Publish to another branch
                // repo: 'ssh://git@example.com/other/repo.git', // Publish to another repository
                base: 'dist',
                clone: '<%= yeoman.tmp %>/gh-pages/repo'
            },
            src: '**'
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('build', [
        'clean:build',
        'useminPrepare',
        'concurrent:build',
        'concat',
        'uncss',
        'cssmin',
        'uglify',
        'copy:build',
        'filerev',
        'usemin',
        'shell:git-add-dist',
        'shell:git-commit-build'
    ]);

      // load the grunt-shell task:
      grunt.loadNpmTasks('grunt-shell');


    grunt.registerTask('heroku', ['build', 'shell:heroku']);

    grunt.registerTask('publish', function (target) {
        grunt.task.run('build');

        try {
            grunt.task.run('gh-pages');
        } catch (err) {
            grunt.fail.warn('You need to install `grunt-gh-pages` to publish to github. Try `npm install --save-dev grunt-gh-pages`.');
        }
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('serve', function(target) {
        if (target === 'build' || target === 'dist') {
            if (target === 'dist')
                grunt.log.warn('You should use `serve:build` task.');
            return grunt.task.run(['build', 'open', 'connect:build']);
        }

        grunt.task.run([
            'clean:server',
            'sass:server',
            'connect:server',
            'open:server',
            'watch'
        ]);
    });

    // grunt.registerTask('test', [
    //     'clean:server',
    //     'sass:server',
    //     'connect:test'
    // ]);
}
