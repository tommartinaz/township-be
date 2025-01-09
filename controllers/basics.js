const knex = require("../db/knex");

module.exports = {
  createBasic(req, res) {
    const { body } = req;
    const { town_name, ...rest } = body;
    knex("towns")
      .select("id", "town_name")
      .where("town_name", town_name)
      .then((results) => {
        const { id } = results[0];
        knex("basics")
          .insert(
            {
              id: knex.fn.uuid(),
              town_id: id,
              ...rest,
            },
            "*"
          )
          .then((a) => res.json(a[0]));
      });
  },
  fetchBasics(req, res) {
    knex("basics")
      .select()
      .orderBy("name")
      .then((results) => res.json(results));
  },
  fetchBasicsByTownId(req, res) {
    knex("basics")
      .select()
      .where("town_id", "=", req.params.townId)
      .then((results) => res.json(results));
  },
  updateBasicById(req, res) {
    console.log({ req: req.params });
    knex("basics")
      .where("id", req.params.id)
      .update(req.body, "*")
      .then((results) => res.json(results[0]));
  },
};
