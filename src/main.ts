import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Brand1', 'Brand2', 'Brand3'],
  }, {
    brand: 'Vehicle1',
    model: 'Model1',
    year: 2015,
  }),
  new LandVehicle({
    tires: ['Brand1', 'Brand2', 'Brand3'],
  }, {
    brand: 'Vehicle2',
    model: 'Model2',
    year: 2010,
  }),
  new AirVehicle({
    maxAltitude: 9000,
  }, {
    brand: 'Jet1',
    model: 'JetModel1',
    year: 2015,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'Jet2',
    model: 'JetModel2',
    year: 2012,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Water1',
    model: 'WaterModel1',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 90,
  }, {
    brand: 'Water2',
    model: 'WaterModel2',
    year: 2021,
  }),
];

vehicles.forEach((v) => console.log(v.toString()));
