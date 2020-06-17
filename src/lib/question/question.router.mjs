import {
  getQuestionsImpl,
  getQuestionByIdImpl,
  removeQuestionImpl,
  createQuestionImpl,
  updateQuestionImpl,
} from './question.controller.mjs';

export default (router) => {
  router.route('/questions')
    .get(getQuestionsImpl);

  router.route('/question')
    .post(createQuestionImpl);

  router.route('/questions/:id')
    .put(updateQuestionImpl)
    .get(getQuestionByIdImpl)
    .delete(removeQuestionImpl);
};
