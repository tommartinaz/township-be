const knex = require("../db/knex");
const { uuid } = require("lodash-uuid");

module.exports = {
  createUpgrade(req, res) {
    knex("factories as f")
      .select("f.id", "t.id as town_id", "t.town_name")
      .join("towns as t", "t.id", "f.town_id")
      .where("factory_name", req.body.factory_name)
      .andWhere("t.town_name", req.body.town_name)
      .then((results) => {
        console.log({ results });
        const { id, town_id } = results[0];
        const { factory_name, town_name, ...rest } = req.body;
        console.log({ rest });
        knex("upgrades")
          .insert(
            {
              id: uuid(),
              factory_id: id,
              town_id,
              ...rest,
            },
            "*"
          )
          .then((a) => res.json(a[0]));
      });
  },
  fetchUpgrades(req, res) {
    knex("upgrades as u")
      .join("factories as f", "f.id", "u.factory_id")
      .select(
        "f.factory_name",
        "f.id as factoryId",
        "u.level",
        "bronze",
        "silver",
        "gold",
        "platinum",
        "f.priority as priority",
        "reduces_time"
      )
      .orderBy([{ column: "priority" }, { column: "f.factory_name" }])
      .then((results) => res.json(results));
  },
  fetchUpgradesByTownId(req, res) {
    console.log({ req: req.params });
    knex("upgrades as u")
      .join("factories as f", "f.id", "u.factory_id")
      .where("u.town_id", "=", req.params.townId)
      .select(
        "f.factory_name",
        "f.id as factoryId",
        "u.level",
        "bronze",
        "silver",
        "gold",
        "platinum",
        "priority"
      )
      .orderBy([{ column: "f.priority" }, { column: "f.factory_name" }])
      .then((results) => res.json(results));
  },
};
