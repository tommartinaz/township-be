const knex = require("../db/knex");

module.exports = {
  createCrate(req, res) {
    knex("products")
      .select("id as product_id")
      .where("product_name", req.body.product_name)
      .then((results) => {
        const { product_id } = results[0];
        const { product_name, ...rest } = req.body;
        knex("crates")
          .insert(
            {
              id: knex.fn.uuid(),
              product_id,
              ...rest,
            },
            "*"
          )
          .then((results) => res.json(results[0]));
      });
  },
  fetchCrates(req, res) {
    knex("crates")
      .select()
      .then((results) => res.json(results));
  },
  fetchCrateByProductId(req, res) {
    knex("crates")
      .select()
      .where("product_id", req.params.productId)
      .then((results) => res.json(results));
  },
};
