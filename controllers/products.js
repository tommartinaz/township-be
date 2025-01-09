const knex = require("../db/knex");
const { uuid } = require("lodash-uuid");

module.exports = {
  createProduct(req, res) {
    knex("factories")
      .select("id")
      .where("factory_name", req.body.factory_name)
      .then((results) => {
        const { id } = results[0];
        const { factory_name, ...rest } = req.body;
        knex("products")
          .insert(
            {
              id: knex.fn.uuid(),
              factory_id: id,
              ...rest,
            },
            "*"
          )
          .then((a) => res.json(a[0]));
      });
  },
  fetchProducts(req, res) {
    knex("products")
      .select()
      .orderBy("product_name")
      .then((results) => res.json(results));
  },
  fetchProductByName(req, res) {
    knex("products")
      .select("id")
      .where("product_name", "=", req.params.product_name);
  },
};
