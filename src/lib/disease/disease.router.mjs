import {
  getDiseasesImpl,
  getDiseaseByIdImpl,
  removeDiseaseImpl,
  createDiseaseImpl,
  updateDiseaseImpl,
} from './disease.controller.mjs';

export default (router) => {
  router.route('/diseases')
    .get(getDiseasesImpl);

  router.route('/disease')
    .post(createDiseaseImpl);

  router.route('/disease/:id')
    .put(updateDiseaseImpl)
    .get(getDiseaseByIdImpl)
    .delete(removeDiseaseImpl);
};
