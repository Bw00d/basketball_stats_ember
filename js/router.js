App.Router.map(function() {
  this.resource('teams', { path: '/' });
});

App.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});
