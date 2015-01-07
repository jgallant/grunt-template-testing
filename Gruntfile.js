module.exports = function(grunt) {

grunt.initConfig({
  sass: {
    dev: {
      src: ['sources/sass/*.scss'],
      dest: 'webroot/css/index.css',
    },
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['sources/sass/*.scss'],
      tasks: ['sass'],
    },
    livereload: {
      // Here we watch the files the sass task will compile to
      // These files are sent to the live reload server after sass compiles to them
      options: { livereload: true },
      files: ['webroot/**/*'],
    },
  },
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
};
