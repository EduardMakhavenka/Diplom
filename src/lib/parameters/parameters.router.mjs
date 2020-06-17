import {
  getParametersImpl,
  createParametersImpl,
} from './parameters.controller.mjs';

export default (router) => {
  router.route('/parameters')
    .get(getParametersImpl);

  router.route('/parameters')
    .post(createParametersImpl);
};
