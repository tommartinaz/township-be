exports.up = (knex) =>
  knex.schema.createTable("crates", (t) => {
    t.string("id").primary();
    t.string("product_id");
    t.integer("plane_min");
    t.integer("plane_max");
  });

exports.down = (knex) => knex.schema.dropTable("crates");
