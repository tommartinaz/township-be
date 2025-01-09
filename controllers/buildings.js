const knex = require("../db/knex");

module.exports = {
  createBuilding(req, res) {
    const { town_name, ...rest } = req.body;
    knex("towns")
      .select("id")
      .where("town_name", town_name)
      .then((results) => {
        const { id } = results[0];
        knex("buildings")
          .insert(
            {
              ...rest,
              id: knex.fn.uuid(),
              town_id: id,
            },
            "*"
          )
          .then((a) => res.json(a[0]));
      });
  },
  fetchBuildings(req, res) {
    knex("buildings")
      .select()
      .orderBy("town_level")
      .then((results) => res.json(results));
  },
  fetchBuildingsByTownId(req, res) {
    knex("buildings")
      .select()
      .where("town_id", "=", req.params.townId)
      .then((results) => res.json(results));
  },
  updateBuildingById(req, res) {
    knex("buildings")
      .where("id", req.params.buildingId)
      .update(req.body, "*")
      .then((results) => res.json(results[0]));
  },
};
