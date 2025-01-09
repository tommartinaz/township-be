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
      product_name: "Milk",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Egg",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wool",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Honeycomb",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bacon",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Down Feather",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Colorful Feather",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Seaweed",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Scallop",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pearls",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mushroom",
      factory_id: "52f830e7-f875-4bbb-b474-9a68ba2bad54",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wheat",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Corn",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Carrot",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sugarcane",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cotton",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Strawberry",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tomato",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pine Tree",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Potato",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cacao",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rubber Tree",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Silk",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cork Oak",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pepper",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rice",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rose",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jasmine",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coffee Plant",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Plant",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Apple",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tea Plant",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Soybean",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lavender",
      factory_id: "68509de1-e857-46a9-a44f-4637a2d6fcd5",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sushi Roll",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lobster Sushi",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Seaweed Shrimp Salad",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Scallop Sushi",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coconut Soup",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rice Noodles",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sea Salad",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mushroom Salad",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Sauce",
      factory_id: "a7ed7fcc-16e9-4843-a0b9-3155b1863476",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Backpack",
      factory_id: "98598fb5-3a9b-4946-ae85-e6f6c20d1045",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Woven Bag",
      factory_id: "98598fb5-3a9b-4946-ae85-e6f6c20d1045",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Small Handbag",
      factory_id: "98598fb5-3a9b-4946-ae85-e6f6c20d1045",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Suitcase",
      factory_id: "98598fb5-3a9b-4946-ae85-e6f6c20d1045",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Kid's Bag",
      factory_id: "98598fb5-3a9b-4946-ae85-e6f6c20d1045",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bread",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cookies",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bagel",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pizza",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Potato Bread",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Banana Bread",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Seafood Pizza",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mushroom Turnover",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Apple Strudel",
      factory_id: "cca339e4-fb88-45fe-b66a-ff2ffb494821",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Vitamin Cocktail",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Grape Fizz",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chocolate Smoothie",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Watermelon Fresh",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Iced Tea",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tropical Mix",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Apple Fresh",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint Iced Tea",
      factory_id: "692a100b-6d3a-4140-a7a1-2b756f7df118",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Summer Bouquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Vegetable Bouquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wedding Bouquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Candy Bouquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Flower Basket",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lavender Boquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tea and Coffee Bouquet",
      factory_id: "2a900570-66cb-45ac-9759-9e636ed61248",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Carrot Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Strawberry Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coffee Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chocolate Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wedding Cake",
      factory_id: "61e1e1af-2bdf-4004-b63c-ebed548cf6d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jelly Beans",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Toffee",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Candy Cane",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chocolate",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lollipop",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Honey Marshmallow",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint Candy",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jelly Fruit Slices",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chocolate Bar",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Green Tea Candy",
      factory_id: "0cf0a1e9-25be-4e82-9011-aa324fce1c89",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Espresso",
      factory_id: "6dc5c4c8-342a-4887-b383-a4f5d8590d3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cappuccino",
      factory_id: "6dc5c4c8-342a-4887-b383-a4f5d8590d3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Caffe Mocha",
      factory_id: "6dc5c4c8-342a-4887-b383-a4f5d8590d3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Hot Chocolate",
      factory_id: "6dc5c4c8-342a-4887-b383-a4f5d8590d3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coconut Latte",
      factory_id: "6dc5c4c8-342a-4887-b383-a4f5d8590d3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cream",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cheese",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Butter",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Yogurt",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peach Yogurt",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tofu",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plant Milk",
      factory_id: "3dd12391-bfa2-4145-8ed1-7faad6c4bc8c",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Puppet",
      factory_id: "9b4e731d-ae85-4efb-9ca5-3a18a52f751a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Porcelain Doll",
      factory_id: "9b4e731d-ae85-4efb-9ca5-3a18a52f751a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Fashion Doll",
      factory_id: "9b4e731d-ae85-4efb-9ca5-3a18a52f751a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rag Doll",
      factory_id: "9b4e731d-ae85-4efb-9ca5-3a18a52f751a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pillow",
      factory_id: "ce5d7004-0895-4169-ab88-8b6dcd94a6c4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Parka",
      factory_id: "ce5d7004-0895-4169-ab88-8b6dcd94a6c4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Down Quilt",
      factory_id: "ce5d7004-0895-4169-ab88-8b6dcd94a6c4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Robe and Slippers",
      factory_id: "ce5d7004-0895-4169-ab88-8b6dcd94a6c4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Milkshake",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cheeseburger",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sandwich",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "French Fries",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Baked Potato",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Fish Burger",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Fish and Chips",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Butter Crepes",
      factory_id: "dc613ff0-818b-4f6b-b846-ff6ee3e367b2",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Balloon",
      factory_id: "d7da5a7a-1bde-4ae2-9690-bd88cba9ee00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cotton Candy",
      factory_id: "d7da5a7a-1bde-4ae2-9690-bd88cba9ee00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Soap Bubbles",
      factory_id: "d7da5a7a-1bde-4ae2-9690-bd88cba9ee00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lei",
      factory_id: "d7da5a7a-1bde-4ae2-9690-bd88cba9ee00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Piñata",
      factory_id: "d7da5a7a-1bde-4ae2-9690-bd88cba9ee00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Dough",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Frozen Vegetables",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Dumplings",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Seafood Mix",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Frozen Fruit",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Packaged Meal",
      factory_id: "793a04a4-b501-40c9-949c-82f682357272",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ratatouille",
      factory_id: "e900639f-c84a-4903-be27-2add3f6d8620",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Profiteroles",
      factory_id: "e900639f-c84a-4903-be27-2add3f6d8620",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Salade Nicoise",
      factory_id: "e900639f-c84a-4903-be27-2add3f6d8620",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bouillabaisse",
      factory_id: "e900639f-c84a-4903-be27-2add3f6d8620",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Table",
      factory_id: "8a4adce4-906a-4ee5-96f7-421eb7d9b544",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chair",
      factory_id: "8a4adce4-906a-4ee5-96f7-421eb7d9b544",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Couch",
      factory_id: "8a4adce4-906a-4ee5-96f7-421eb7d9b544",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bed",
      factory_id: "8a4adce4-906a-4ee5-96f7-421eb7d9b544",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Floor Lamp",
      factory_id: "8a4adce4-906a-4ee5-96f7-421eb7d9b544",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Garden Tools",
      factory_id: "3795bcb5-e5a9-456c-b758-af2e32603dd6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Garden Gnome",
      factory_id: "3795bcb5-e5a9-456c-b758-af2e32603dd6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lawn Chair",
      factory_id: "3795bcb5-e5a9-456c-b758-af2e32603dd6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Planter",
      factory_id: "3795bcb5-e5a9-456c-b758-af2e32603dd6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Garden Hose",
      factory_id: "3795bcb5-e5a9-456c-b758-af2e32603dd6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Quiche",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Baked Lobster",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bacon and Eggs",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Fried Fish",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rice Casserole",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pancakes with Honey",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lobster Omelet",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Grilled Scallops",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Roast Meat",
      factory_id: "1b40b930-a26f-4af4-93f5-758089f07efa",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Hot Dog",
      factory_id: "fa5e3437-8594-4d18-b337-b54917c293d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Corn Dog",
      factory_id: "fa5e3437-8594-4d18-b337-b54917c293d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coney Dog",
      factory_id: "fa5e3437-8594-4d18-b337-b54917c293d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Carrot Sandwich",
      factory_id: "fa5e3437-8594-4d18-b337-b54917c293d4",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Scrub Brush",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Soap Dispenser",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Clothesline and Clothespins",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plunger",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Feather Duster",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rubber Gloves",
      factory_id: "23fffdc0-133c-49ac-8bb1-accd760fa8dd",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ice Cream Cone",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Popsicle",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Frozen Yogurt",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ice Cream Bar",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mint Chocolate Ice Cream",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pineapple Sorbet",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rose Sorbet",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Butter Parfait",
      factory_id: "b0bb1c8e-00ef-42fe-8e88-38a9f3e711a6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Olive Oil",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bruschetta",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pasta Arrabiata",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ravioli",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tiramisu",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lasagna",
      factory_id: "f046905b-f6c9-4105-8c75-9bf314f41dab",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Stawberry Jam",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peach Marmalade",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Watermelon Jam",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plum Jam",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Grape Jelly",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rose Jam",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Caramelized Mushrooms",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peanut Butter",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Apple Jam",
      factory_id: "375d431f-420b-48b6-8c6d-b6623a384ead",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pendant",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ring",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pearl Choker",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Earrings",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Diadem",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Feather Earrings",
      factory_id: "8da583a0-6719-42ba-a12e-8cfbad05abdc",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cup",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Frying Pan",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Teapot",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cutlery",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tea Ceremony Set",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Trivet Mat",
      factory_id: "392c27a9-77a9-43b0-9e5d-99639bdd0dad",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chili Sauce",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Burrito",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Nachos",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Taco",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bacon-wrapped Jalapeño Poppers",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Gazpacho",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Corn Soup",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mole Sauce",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mushroom Soup",
      factory_id: "dfbf063f-dbe6-4770-b112-83f08b1e2d80",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ukulele",
      factory_id: "2449cf61-cc85-4be0-883b-3cae2d955521",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Saxophone",
      factory_id: "2449cf61-cc85-4be0-883b-3cae2d955521",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Drum",
      factory_id: "2449cf61-cc85-4be0-883b-3cae2d955521",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Accordion",
      factory_id: "2449cf61-cc85-4be0-883b-3cae2d955521",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pan Flute",
      factory_id: "2449cf61-cc85-4be0-883b-3cae2d955521",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Paper",
      factory_id: "f1c0a4ec-f1b8-4b10-8312-2883c94f4cb8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Paper Towels",
      factory_id: "f1c0a4ec-f1b8-4b10-8312-2883c94f4cb8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wallpaper",
      factory_id: "f1c0a4ec-f1b8-4b10-8312-2883c94f4cb8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Book",
      factory_id: "f1c0a4ec-f1b8-4b10-8312-2883c94f4cb8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tea Bags",
      factory_id: "f1c0a4ec-f1b8-4b10-8312-2883c94f4cb8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Muffin",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Brownie",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cupcake",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Donut",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cheesecake",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Honey Gingerbread",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Key Lime Pie",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coconut Macaroons",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Caramel Apple",
      factory_id: "e6791987-4648-4a8c-9726-c05f991c9748",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Aromatherapy Candle",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Perfume",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Air Freshener",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Scented Soap",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jasmine Oil",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lotion",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Face Mask",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Toothpaste",
      factory_id: "6574a59a-50b9-44ae-bf77-cdf2cca14ef8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rubber Bone",
      factory_id: "2c5eacc3-8a1f-4f2d-a4b4-9f52129192b1",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Wind-up Mouse",
      factory_id: "2c5eacc3-8a1f-4f2d-a4b4-9f52129192b1",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cat Litter",
      factory_id: "2c5eacc3-8a1f-4f2d-a4b4-9f52129192b1",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Water Bowl",
      factory_id: "2c5eacc3-8a1f-4f2d-a4b4-9f52129192b1",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pet Bed",
      factory_id: "2c5eacc3-8a1f-4f2d-a4b4-9f52129192b1",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plastic Bottle",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Toys",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Ball",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Inflatable Boat",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Shuttlecock",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Modeling Clay",
      factory_id: "68558939-5a7a-43aa-b4bb-3e9f0889dc00",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rubber",
      factory_id: "6a1b3042-e688-4f30-a44c-d6943c4fe834",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plastic",
      factory_id: "6a1b3042-e688-4f30-a44c-d6943c4fe834",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Glue",
      factory_id: "6a1b3042-e688-4f30-a44c-d6943c4fe834",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Dumbbell",
      factory_id: "6a1b3042-e688-4f30-a44c-d6943c4fe834",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Flip Flops",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sandals",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sneakers",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Boots",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "High-Heeled Shoes",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Warm Boots",
      factory_id: "66a2ca24-a9b9-4d72-986b-8327d80efe3b",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Popcorn",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Corn Chips",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Granola",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Potato Chips",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Capae",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Glazed Bacon",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Puffed Rice",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Dried Mushrooms",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Salted Peanuts",
      factory_id: "528092cd-74dd-4a98-bcf9-50250598443a",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Eraser",
      factory_id: "e704692a-117a-4a2d-a421-abac285e6948",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sticky Notes",
      factory_id: "e704692a-117a-4a2d-a421-abac285e6948",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Bulletin Board",
      factory_id: "e704692a-117a-4a2d-a421-abac285e6948",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Highlighter Pen",
      factory_id: "e704692a-117a-4a2d-a421-abac285e6948",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sugar",
      factory_id: "2e4d5bad-b36d-4adb-a4d9-76729f5d8bc6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Syrup",
      factory_id: "2e4d5bad-b36d-4adb-a4d9-76729f5d8bc6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Caramel",
      factory_id: "2e4d5bad-b36d-4adb-a4d9-76729f5d8bc6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Honey Caramel",
      factory_id: "2e4d5bad-b36d-4adb-a4d9-76729f5d8bc6",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Shirt",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Sweater",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coat",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Hat",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Dress",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Suit",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Tyrolean Hat",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Gown",
      factory_id: "ceccb753-7c8f-461b-86bf-53232c800565",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Black Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Jasmine White Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Rose Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Butter Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Apple Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Milk Oolong Tea",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Chocolate Custard",
      factory_id: "1faa349f-7563-4f24-929a-cc1a75d0602e",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Cotton Fabric",
      factory_id: "34ff6012-a606-4d65-8d2c-a6ebc7847b1f",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Yarn",
      factory_id: "34ff6012-a606-4d65-8d2c-a6ebc7847b1f",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Silk Fabric",
      factory_id: "34ff6012-a606-4d65-8d2c-a6ebc7847b1f",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Nylon Thread",
      factory_id: "34ff6012-a606-4d65-8d2c-a6ebc7847b1f",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Falafel",
      factory_id: "2013056b-63a8-49ca-a546-7b63c3f0a427",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Miso Soup",
      factory_id: "2013056b-63a8-49ca-a546-7b63c3f0a427",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Vegan Cheesecake",
      factory_id: "2013056b-63a8-49ca-a546-7b63c3f0a427",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Soybean Hummus",
      factory_id: "2013056b-63a8-49ca-a546-7b63c3f0a427",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Peach",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Watermelon",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Plum",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Grapes",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Olives",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Key Lime",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Banana",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Coconut",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Pineapple",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Fish",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Shrimp",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Lobster",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Avocado",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Mango",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Aloe",
      factory_id: "af6b251a-d6e1-4c63-b5c1-4df5730ecbc8",
    },
    {
      id: knex.fn.uuid(),
      product_name: "Clay",
      factory_id: "99d41205-70e1-4d65-b9c6-44f565ab3806",
    },
  ]);
};
