import {
  getDiseasesImpl,
  getDiseaseByIdImpl,
  removeDiseaseImpl,
  createDiseaseImpl,
  updateDiseaseImpl,
  getAllSymptomsImpl,
  getAllDiseasesTitlesImpl,
  getAllDiseasesByTitlesImpl,
  getAllDiseasesBySymptomsImpl,
} from './disease.controller.mjs';

export default (router) => {
  router.route('/diseases')
    .get(getDiseasesImpl);

  router.route('/disease/symptoms')
    .get(getAllSymptomsImpl);

  router.route('/disease/titles')
    .get(getAllDiseasesTitlesImpl);

  router.route('/disease')
    .post(createDiseaseImpl);

  router.route('/disease/byTitles')
    .post(getAllDiseasesByTitlesImpl);

  router.route('/disease/bySymptoms')
    .post(getAllDiseasesBySymptomsImpl);

  router.route('/disease/:id')
    .put(updateDiseaseImpl)
    .get(getDiseaseByIdImpl)
    .delete(removeDiseaseImpl);
};
