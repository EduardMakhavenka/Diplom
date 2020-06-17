import connection from 'typeorm';
import mongodb from 'mongodb';
import Disease from '../../db/models/Disease.mjs';

export function getDiseases() {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.find();
}

export function getDiseaseById(_id) {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.findOne(_id);
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

export function getAllSymptoms() {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.find({ select: ['symptoms'] });
}

export function getAllDiseasesTitles() {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.find({ select: ['name'] });
}

export function getAllDiseasesByTitle(name) {
  const diseaseRepository = connection.getRepository(Disease);
  return diseaseRepository.findOne({ name });
}

export function isSame(a, b) {
  if (a.length > b.length) {
    b = [a, a = b][0];
  }

  for (let i = 0, length = a.length; i < length; i++) {
    if (-1 === b.indexOf(a[i])) {
      return false;
    }
  }
  return true;
}
