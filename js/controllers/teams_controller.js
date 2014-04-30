App.TeamsController = Ember.ArrayController.extend({
  actions: {
    createTeam: function() {
      var name = this.get('newTeam');
      if (!name.trim()) { return; }

      var team = this.store.createRecord('team', {
        name: name
      });

      this.set('newTeam', '');

      team.save();
    }
  }
})
