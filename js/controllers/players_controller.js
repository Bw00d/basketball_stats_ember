App.PlayersController = Ember.ArrayController.extend({
  actions: {
    createPlayer: function() {
      var name =  this.get('newPlayer');
      if (!name.trim()) { return; }

      var player = this.store.createRecord('player', {
        name: name
      });

      this.set('newPlayer', '')

      player.save();
    }
  }
})




