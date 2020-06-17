import connection from 'typeorm';
import Parameters from '../../db/models/Parameters.mjs';

export function getParameters() {
  const parametersRepository = connection.getRepository(Parameters);
  return parametersRepository.find();
}

export function removeParameters(parameters) {
  const parametersRepository = connection.getRepository(Parameters);
  parametersRepository.findOneAndDelete(parameters);
}

export function createParameters(parameters) {
  const parametersRepository = connection.getRepository(Parameters);
  parametersRepository.insertOne(parameters);
}
