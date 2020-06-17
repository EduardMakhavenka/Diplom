import {
  getQuestions,
  getQuestionById,
  removeQuestion,
  createQuestion,
  updateQuestion,
} from './question.action.mjs';

export async function getQuestionsImpl(req, res) {
  try {
    const questions = await getQuestions();
    res.status(200).json({
      questions,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getQuestionByIdImpl(req, res) {
  try {
    const answer = await getQuestionById(req.params.id);
    res.status(200).json({
      answer,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function removeQuestionImpl(req, res) {
  try {
    const question = await getQuestionById(req.params.id);
    await removeQuestion(question);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createQuestionImpl(req, res) {
  try {
    const question = req.body;
    question.createdAt = Date.now();
    await createQuestion(question);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
}

export async function updateQuestionImpl(req, res) {
  try {
    await updateQuestion(req.params.id, req.body);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
}
