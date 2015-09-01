module.exports = function (grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
			},
			build: {
				src: 'src/jquery.kenburns.js',
				dest:'src/jquery.kenburns.min.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				},
				devel: true
			},
			uses_defaults: 'src/jquery.kenburns.js',
			with_overrides: {
				options: {
					curly: false,
					undef: true
				},
				files: {
					src: ['src/jquery.kenburns.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('pack', 'uglify');

	// Default task(s).
	grunt.registerTask('default', 'jshint');
};