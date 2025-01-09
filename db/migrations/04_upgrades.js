exports.up = (knex) =>
  knex.schema.createTable("upgrades", (t) => {
    t.string("id").primary();
    t.string("factory_id");
    t.integer("level");
    t.integer("bronze");
    t.integer("silver");
    t.integer("gold");
    t.integer("platinum");
    t.boolean("reduces_time");
  });

exports.down = (knex) => knex.schema.dropTable("upgrades");
