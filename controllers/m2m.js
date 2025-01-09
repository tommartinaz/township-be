const knex = require("../db/knex");

module.exports = {
  createTownBuilding(req, res) {
    knex("towns_buildings_m2m")
      .insert(
        {
          id: knex.fn.uuid(),
          town_id: req.body.town_id,
          building_id: req.body.building_id,
          completed: false,
        },
        "*"
      )
      .then((a) => res.json(a[0]));
  },
  fetchTownBuildingsByTownId(req, res) {
    knex("towns_buildings_m2m")
      .select()
      .where("town_id", req.params.townId)
      .then((results) => res.json(results));
  },
  createTownFactory(req, res) {
    knex("towns_factories_m2m")
      .insert(
        {
          id: knex.fn.uuid(),
          town_id: req.body.town_id,
          factory_id: req.body.factory_id,
          completed: false,
          level: 1,
        },
        "*"
      )
      .then((a) => res.json(a[0]));
  },
  fetchTownFactoriesByTownId(req, res) {
    knex("towns_factories_m2m")
      .select()
      .where("town_id", req.params.townId)
      .then((results) => res.json(results));
  },
  createTownExpansion(req, res) {
    knex("towns_expansions_m2m")
      .insert(
        {
          id: knex.fn.uuid(),
          town_id: req.body.town_id,
          expansion_id: req.body.expansion_id,
          completed: false,
        },
        "*"
      )
      .then((a) => res.json(a[0]));
  },
  fetchTownExpansionsByTownId(req, res) {
    knex("towns_expansions_m2m")
      .select()
      .where("town_id", req.params.townId)
      .then((results) => res.json(results));
  },
};
