import {
  getAnswers,
  getAnswerById,
  removeAnswer,
  createAnswer,
  updateAnswer,
} from './answer.action.mjs';

export async function getAnswersImpl(req, res) {
  try {
    const answers = await getAnswers();
    res.status(200).json({
      answers,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getAnswerByIdImpl(req, res) {
  try {
    const answer = await getAnswerById(req.params.id);
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

export async function removeAnswerImpl(req, res) {
  try {
    const answer = await getAnswerById(req.params.id);
    await removeAnswer(answer);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createAnswerImpl(req, res) {
  try {
    await createAnswer(req.body);
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

export async function updateAnswerImpl(req, res) {
  try {
    await updateAnswer(req.params.id, req.body);
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
