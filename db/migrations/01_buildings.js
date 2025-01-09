exports.up = (knex) =>
  knex.schema.createTable("buildings", (t) => {
    t.string("id").primary();
    t.string("building_name");
    t.string("type");
    t.integer("glass");
    t.integer("bricks");
    t.integer("slabs");
    t.integer("drills");
    t.integer("electric_saws");
    t.integer("jackhammers");
    t.integer("town_level");
    t.integer("population_increase");
    t.integer("cost");
    t.integer("max_population_increase");
  });

exports.down = (knex) => knex.schema.dropTable("buildings");
