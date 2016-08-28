module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		less: {
			development: {
				options: {
					paths: ["less"],
					compress: true
				},
				files: {
					"./public/master-min.css": "./source/less/master.less"
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ["./source/less/*.less", "./source/less/modules/*"],
				tasks: ["less"]
			}
		}
	});
	// Load the plugins to be used
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	// Run tasks
	grunt.registerTask("default", ["less", "watch"]);
};
