const knex = require("../db/knex");

module.exports = {
  createExpansion(req, res) {
    const { town_name, ...rest } = req.body;
    knex("towns")
      .select("id")
      .where("town_name", town_name)
      .then((results) => {
        const { id } = results[0];
        knex("expansions")
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
  fetchExpansions(req, res) {
    knex("expansions")
      .select()
      .orderBy([
        { column: "type", order: "desc" },
        { column: "expansion_number", order: "asc" },
      ])
      .then((results) => res.json(results));
  },
  fetchExpansionByTownId(req, res) {
    knex("expansions")
      .select()
      .where("town_id", "=", req.params.townId)
      .then((results) => res.json(results));
  },
  updateExpansionById(req, res) {
    knex("expansions")
      .where("id", req.params.expansionId)
      .update(req.body, "*")
      .then((results) => res.json(results[0]));
  },
};
