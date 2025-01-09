exports.up = (knex) =>
  knex.schema.createTable("towns_buildings_m2m", (t) => {
    t.string("id").primary();
    t.string("town_id");
    t.string("building_id");
    t.boolean("completed");
  });

exports.down = (knex) => knex.schema.dropTable("towns_buildings_m2m");
