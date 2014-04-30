App.Player = DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team')
});

App.Player.FIXTURES = [
  {
    id: 1,
    name: "LaMarcus Aldridge",
    team: 1
  },
  {
    id: 2,
    name: "LeBron James",
    team: 3
  },
  {
    id: 3,
    name: "Kobe Bryant",
    team: 2
  },
  {
    id: 4,
    name: "Dwayne Wade",
    team: 3
  }
]
