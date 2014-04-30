App.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.resource('team', { path: '/teams/:team_id' });
  });
});

App.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

App.TeamRoute = Ember.Route.extend({
  model: function(params) {
    var team = this.get('team');
    return store.find('team', params.team_id);
  }
})
