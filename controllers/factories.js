const knex = require("../db/knex");

module.exports = {
  createFactory(req, res) {
    const { town_name, ...rest } = req.body;
    knex("towns")
      .select("id")
      .where("town_name", town_name)
      .then((results) => {
        const { id } = results[0];
        knex("factories")
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
  fetchFactories(req, res) {
    knex("factories")
      .select()
      .orderBy([{ column: "priority" }, { column: "factory_name" }])
      .then((results) => res.json(results));
  },
  fetchFactoryById(req, res) {
    knex("factories")
      .select()
      .where("id", req.params.factoryId)
      .then((results) => res.json(results));
  },
  fetchFactoryByName(req, res) {
    console.log({ req: req.params });
    knex("factories")
      .select()
      .where("town_id", "=", req.params.townId)
      .then((results) => res.json(results));
  },
  updateFactoryById(req, res) {
    knex("factories")
      .where("id", req.params.factoryId)
      .update(req.body, "*")
      .then((results) => res.json(results[0]));
  },
};
