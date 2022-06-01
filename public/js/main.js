"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const land_vehicle_js_1 = __importDefault(require("./land-vehicle.js"));
const air_vehicle_js_1 = __importDefault(require("./air-vehicle.js"));
const water_vehicle_js_1 = __importDefault(require("./water-vehicle.js"));
const vehicles = [
    new land_vehicle_js_1.default({
        tires: ['Brand1', 'Brand2', 'Brand3'],
    }, {
        brand: 'Vehicle1',
        model: 'Model1',
        year: 2015,
    }),
    new land_vehicle_js_1.default({
        tires: ['Brand1', 'Brand2', 'Brand3'],
    }, {
        brand: 'Vehicle2',
        model: 'Model2',
        year: 2010,
    }),
    new air_vehicle_js_1.default({
        maxAltitude: 9000,
    }, {
        brand: 'Jet1',
        model: 'JetModel1',
        year: 2015,
    }),
    new air_vehicle_js_1.default({
        maxAltitude: 7000,
    }, {
        brand: 'Jet2',
        model: 'JetModel2',
        year: 2012,
    }),
    new water_vehicle_js_1.default({
        maxDepth: 50,
    }, {
        brand: 'Water1',
        model: 'WaterModel1',
        year: 2011,
    }),
    new water_vehicle_js_1.default({
        maxDepth: 90,
    }, {
        brand: 'Water2',
        model: 'WaterModel2',
        year: 2021,
    }),
];
vehicles.forEach((v) => console.log(v.toString()));
//# sourceMappingURL=main.js.map