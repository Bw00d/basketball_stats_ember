App.Team = DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player')
});

App.Team.FIXTURES = [
  {
    id: 1,
    name: "Portland TrailBlazers"
  },
  {
    id: 2,
    name: "Los Angeles Lakers"
  },
  {
    id: 3,
    name: "Miami Heat"
  }
];
