import connection from 'typeorm';
import mongodb from 'mongodb';
import Answer from '../../db/models/Answer.mjs';

export function getAnswers() {
  const answerRepository = connection.getRepository(Answer);
  return answerRepository.find();
}

export function getAnswerById(id) {
  const answerRepository = connection.getRepository(Answer);
  return answerRepository.findOne(id);
}

export function removeAnswer(answer) {
  const answerRepository = connection.getRepository(Answer);
  answerRepository.findOneAndDelete(answer);
}

export function createAnswer(answer) {
  const answerRepository = connection.getRepository(Answer);
  answerRepository.insertOne(answer);
}

export function updateAnswer(id, answer) {
  const answerRepository = connection.getRepository(Answer);
  answerRepository.updateOne({ _id: mongodb.ObjectID(id) }, { $set: answer }, { $upsert: false });
}
