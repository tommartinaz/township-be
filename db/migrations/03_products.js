exports.up = (knex) =>
  knex.schema.createTable("products", (t) => {
    t.string("id").primary();
    t.string("product_name");
    t.string("factory_id");
    t.integer("town_level");
  });

exports.down = (knex) => knex.schema.dropTable("products");
