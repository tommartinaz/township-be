const products = require("../controllers/products");
const factory = require("../controllers/factories");
const upgrades = require("../controllers/upgrades");
const crates = require("../controllers/crates");
const buildings = require("../controllers/buildings");
const expansions = require("../controllers/expansions");
const basics = require("../controllers/basics");
const towns = require("../controllers/towns");
const m2m = require("../controllers/m2m");

module.exports = (app) => {
  app.get("/api/products", products.fetchProducts);
  app.post("/api/products", products.createProduct);

  app.get("/api/factories", factory.fetchFactories);
  app.post("/api/factories", factory.createFactory);
  app.put("/api/factories/:factoryId", factory.updateFactoryById);
  app.get("/api/factories/:townId", factory.fetchFactoryByName);

  app.get("/api/upgrades", upgrades.fetchUpgrades);
  app.get("/api/upgrades/:townId", upgrades.fetchUpgradesByTownId);
  app.post("/api/upgrades", upgrades.createUpgrade);

  app.get("/api/crates", crates.fetchCrates);
  app.get("/api/crates/:productId", crates.fetchCrateByProductId);
  app.post("/api/crates", crates.createCrate);

  app.get("/api/buildings", buildings.fetchBuildings);
  app.get("/api/buildings/:townId", buildings.fetchBuildingsByTownId);
  app.post("/api/buildings", buildings.createBuilding);
  app.put("/api/buildings/:buildingId", buildings.updateBuildingById);

  app.post("/api/expansions", expansions.createExpansion);
  app.get("/api/expansions", expansions.fetchExpansions);
  app.get("/api/expansions/:townId", expansions.fetchExpansionByTownId);
  app.put("/api/expansions/:expansionId", expansions.updateExpansionById);

  app.get("/api/basics", basics.fetchBasics);
  app.get("/api/basics/:townId", basics.fetchBasicsByTownId);
  app.post("/api/basics", basics.createBasic);
  app.put("/api/basics/:id", basics.updateBasicById);

  app.get("/api/towns", towns.fetchTowns);
  app.post("/api/towns", towns.createTown);
  app.put("/api/towns/:townId", towns.updateTownById);

  app.post("/api/m2m/towns_buildings", m2m.createTownBuilding);
  app.get("/api/towns/:townId/buildings", m2m.fetchTownBuildingsByTownId);
  app.post("/api/m2m/towns_factories", m2m.createTownFactory);
  app.get("/api/towns/:townId/factories", m2m.fetchTownFactoriesByTownId);
  app.post("/api/m2m/towns_expansions", m2m.createTownExpansion);
  app.get("/api/towns/:townId/expansions", m2m.fetchTownExpansionsByTownId);
};
