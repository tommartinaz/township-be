/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: knex.fn.uuid(),
      product_name: "Apple",
      level: 80,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cacao",
      level: 25,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Carrot",
      level: 4,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coffee Plant",
      level: 72,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cork Oak",
      level: 38,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Corn",
      level: 3,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cotton",
      level: 9,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jasmine",
      level: 67,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lavendar",
      level: 97,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint",
      level: 50,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Plant",
      level: 75,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pepper",
      level: 43,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pine Tree",
      level: 18,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Potato",
      level: 22,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rice",
      level: 56,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rose",
      level: 61,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rubber Tree",
      level: 29,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Silk",
      level: 31,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Soybean",
      level: 90,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Strawberry",
      level: 13,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sugarcane",
      level: 7,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tea Plant",
      level: 84,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tomato",
      level: 15,
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wheat",
      level: 1,
    },
  ]);
};
