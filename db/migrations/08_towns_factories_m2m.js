exports.up = (knex) =>
  knex.schema.createTable("towns_factories_m2m", (t) => {
    t.string("id").primary();
    t.string("town_id");
    t.string("factory_id");
    t.boolean("completed");
    t.integer("level");
  });

exports.down = (knex) => knex.schema.dropTable("towns_factories_m2m");
