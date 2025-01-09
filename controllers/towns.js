const knex = require("../db/knex");
const { up } = require("../db/migrations/02_factories");

module.exports = {
  createTown(req, res) {
    knex("towns")
      .insert(
        {
          id: knex.fn.uuid(),
          ...req.body,
        },
        "*"
      )
      .then((a) => res.json(a[0]));
  },
  fetchTowns(req, res) {
    knex("towns")
      .select()
      .orderBy("town_name")
      .then((results) => res.json(results));
  },
  updateTownById(req, res) {
    knex("towns")
      .where("id", req.params.townId)
      .update(req.body, "*")
      .then((results) => res.json(results[0]));
  },
};
