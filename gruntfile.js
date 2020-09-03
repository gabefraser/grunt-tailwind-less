module.exports = function (grunt){
    require('jit-grunt')(grunt);
    
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourcemap: true
                },
                files: {
                    "stylesheets/css/styles.css": "stylesheets/less/styles.less"
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('tailwindcss'),
                    require('autoprefixer')({ overrideBrowserslist: 'last 3 versions' }),
                ]
            },
            dist: {
                src: 'stylesheets/css/styles.css'
            }
        },
        watch: {
            styles: {
                files: ['stylesheets/less/**/*.less', 'tailwind.config.js'],
                tasks: ['less', 'postcss'],
                options: {
                    nospawn: true
                }
            }
        },
    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-postcss');

    // Registering tasks
    grunt.registerTask('default', ['less', 'postcss']);
}