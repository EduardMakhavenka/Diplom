import answer from '../lib/answer/answer.router.mjs';
import disease from '../lib/disease/disease.router.mjs';
import doctor from '../lib/doctor/doctor.router.mjs';
import question from '../lib/question/question.router.mjs';
import parameters from '../lib/parameters/parameters.router.mjs';
import plant from '../lib/plant/plant.router.mjs';

const apis = [
  answer,
  disease,
  doctor,
  question,
  parameters,
  plant,
];

export default function initApi(router) {
  apis.forEach(api => api(router));
}
