import {
  getPlantsImpl,
  getPlantByIdImpl,
  removePlantImpl,
  createPlantImpl,
  updatePlantImpl,
  getPlantsByParametersImpl,
} from './plant.controller.mjs';

export default (router) => {
  router.route('/plants')
    .get(getPlantsImpl);

  router.route('/plant')
    .post(createPlantImpl);

  router.route('/plant/ByParameters')
    .post(getPlantsByParametersImpl);

  router.route('/plant/:id')
    .put(updatePlantImpl)
    .get(getPlantByIdImpl)
    .delete(removePlantImpl);
};
