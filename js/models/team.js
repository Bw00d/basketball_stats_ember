App.Team = DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true})
});

App.Team.FIXTURES = [
  {
    id: 1,
    name: "Portland TrailBlazers",
    players: [1]
  },
  {
    id: 2,
    name: "Los Angeles Lakers",
    players: [3]
  },
  {
    id: 3,
    name: "Miami Heat",
    players: [2, 4]
  }
];
