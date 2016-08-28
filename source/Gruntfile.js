module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				options: {
					paths: ["less"],
					compress: true
				},
				files: {
					"../public/master-min.css": "less/master.less"
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['less/*.less', 'less/modules/*'],
				tasks: ['less']
			}
		}
	});

	// Load the plugins to be used
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Run tasks
	grunt.registerTask('default', ['less', 'watch']);
};
