exports.up = (knex) =>
  knex.schema.createTable("factories", (t) => {
    t.string("id").primary();
    t.string("factory_name");
    t.integer("town_level");
    t.integer("cost");
    t.integer("min_population");
    t.boolean("produces_products");
    t.boolean("can_upgrade");
    t.integer("priority");
  });

exports.down = (knex) => knex.schema.dropTable("factories");
