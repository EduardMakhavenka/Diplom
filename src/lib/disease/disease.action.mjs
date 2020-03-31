import connection from 'typeorm';
import mongodb from 'mongodb';
import Disease from '../../db/models/Disease.mjs';

export function getDiseases() {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.find();
}

export function getDiseaseById(id) {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.findOne(id);
}

export function removeDisease(disease) {
  const diseaseRepository = connection.getRepository(Disease);
  diseaseRepository.findOneAndDelete(disease);
}

export function createDisease(disease) {
  const diseaseRepository = connection.getRepository(Disease);
  diseaseRepository.insertOne(disease);
}

export function updateDisease(id, disease) {
  const diseaseRepository = connection.getRepository(Disease);
  diseaseRepository.updateOne({ _id: mongodb.ObjectID(id) }, { $set: disease }, { $upsert: false });
}
