EmberApp.Router.map(function () {
  // Add your routes here
  this.route('search-results', {path: 'search/:term'});
  this.route('artist');
  this.route('song');
});
