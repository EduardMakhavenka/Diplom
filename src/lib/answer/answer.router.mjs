import {
  getAnswersImpl,
  getAnswerByIdImpl,
  removeAnswerImpl,
  createAnswerImpl,
  updateAnswerImpl,
} from './answer.controller.mjs';

export default (router) => {
  router.route('/answers')
    .get(getAnswersImpl);

  router.route('/answer')
    .post(createAnswerImpl);

  router.route('/answer/:id')
    .put(updateAnswerImpl)
    .get(getAnswerByIdImpl)
    .delete(removeAnswerImpl);
};
