exports.up = (knex) =>
  knex.schema.createTable("towns", (t) => {
    t.string("id").primary();
    t.string("town_name");
  });

exports.down = (knex) => knex.schema.dropTable("towns");
