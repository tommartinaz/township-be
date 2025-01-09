exports.up = (knex) =>
  knex.schema.createTable("expansions", (t) => {
    t.string("id").primary();
    t.string("type");
    t.integer("cost");
    t.integer("population");
    t.integer("expansion_number");
    t.integer("shovels");
    t.integer("axes");
    t.integer("saws");
    t.integer("time");
  });

exports.down = (knex) => knex.schema.dropTable("expansions");
