module.exports = function (grunt) {
  require("jit-grunt")(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          "style.css": "style.less", // destination file and source file
        },
      },
    },
    watch: {
      styles: {
        files: ["**/*.less"], // which files to watch
        tasks: ["less"],
        options: {
          nospawn: true,
        },
      },
    },
  });

  grunt.registerTask("default", ["less", "watch"]);
};
