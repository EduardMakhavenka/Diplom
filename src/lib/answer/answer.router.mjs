import {
  getAnswersImpl,
  getAnswerByIdImpl,
  removeAnswerImpl,
  createAnswerImpl,
  updateAnswerImpl,
  getAnswersByQuestionIdImpl,
} from './answer.controller.mjs';

export default (router) => {
  router.route('/answers')
    .get(getAnswersImpl);

  router.route('/answer')
    .post(createAnswerImpl);

  router.route('/answer/question/:questionId')
    .get(getAnswersByQuestionIdImpl);

  router.route('/answer/:id')
    .put(updateAnswerImpl)
    .get(getAnswerByIdImpl)
    .delete(removeAnswerImpl);
};
