exports.up = (knex) =>
  knex.schema.createTable("towns_expansions_m2m", (t) => {
    t.string("id").primary();
    t.string("town_id");
    t.string("expansion_id");
    t.boolean("completed");
  });

exports.down = (knex) => knex.schema.dropTable("towns_expansions_m2m");
