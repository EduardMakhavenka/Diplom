import connection from 'typeorm';
import mongodb from 'mongodb';
import Question from '../../db/models/Question.mjs';

export function getQuestions() {
  const questionRepository = connection.getRepository(Question);
  return questionRepository.find();
}

export function getQuestionById(id) {
  const questionRepository = connection.getRepository(Question);
  return questionRepository.findOne(id);
}

export function removeQuestion(question) {
  const questionRepository = connection.getRepository(Question);
  questionRepository.findOneAndDelete(question);
}

export function createQuestion(question) {
  const questionRepository = connection.getRepository(Question);
  questionRepository.insertOne(question);
}

export function updateQuestion(id, question) {
  const questionRepository = connection.getRepository(Question);
  questionRepository.updateOne({ _id: mongodb.ObjectID(id) }, { $set: question }, { $upsert: false });
}
