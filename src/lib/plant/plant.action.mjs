import connection from 'typeorm';
import mongodb from 'mongodb';
import Plant from '../../db/models/Plant.mjs';

export function getPlants() {
  const plantRepository = connection.getRepository(Plant);
  return plantRepository.find();
}

export function getPlant(plant) {
  const plantRepository = connection.getRepository(Plant);
  return plantRepository.find(plant);
}

export function getPlantById(id) {
  const plantRepository = connection.getRepository(Plant);
  return plantRepository.findOne(id);
}

export function removePlant(plant) {
  const plantRepository = connection.getRepository(Plant);
  plantRepository.findOneAndDelete(plant);
}

export function createPlant(plant) {
  const plantRepository = connection.getRepository(Plant);
  plantRepository.insertOne(plant);
}

export function updatePlant(id, plant) {
  const plantRepository = connection.getRepository(Plant);
  plantRepository.updateOne({ _id: mongodb.ObjectID(id) }, { $set: plant }, { $upsert: false });
}
