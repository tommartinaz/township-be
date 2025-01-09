exports.up = (knex) =>
  knex.schema.createTable("basics", (t) => {
    t.string("id").primary();
    t.string("name");
    t.integer("level");
    t.integer("population");
    t.string("town_id");
  });

exports.down = (knex) => knex.schema.dropTable("basics");
