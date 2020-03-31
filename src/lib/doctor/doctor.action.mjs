import connection from 'typeorm';
import mongodb from 'mongodb';
import Doctor from '../../db/models/Doctor.mjs';

export function getDoctors() {
  const doctorRepository = connection.getRepository(Doctor);
  return doctorRepository.find();
}

export function getDoctorById(id) {
  const doctorRepository = connection.getRepository(Doctor);
  return doctorRepository.findOne(id);
}

export function removeDoctor(doctor) {
  const doctorRepository = connection.getRepository(Doctor);
  doctorRepository.findOneAndDelete(doctor);
}

export function createDoctor(doctor) {
  const doctorRepository = connection.getRepository(Doctor);
  doctorRepository.insertOne(doctor);
}

export function updateDoctor(id, doctor) {
  const doctorRepository = connection.getRepository(Doctor);
  doctorRepository.updateOne({ _id: mongodb.ObjectID(id) }, { $set: doctor }, { $upsert: false });
}

export function getDoctorByName(name) {
  const doctorRepository = connection.getRepository(Doctor);
  return doctorRepository.findOne({ name });
}
