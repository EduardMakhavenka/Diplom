import {
  getParameters,
  createParameters,
} from './parameters.action.mjs';

export async function getParametersImpl(req, res) {
  try {
    const parameters = await getParameters();
    res.status(200).json({
      parameters: parameters[0],
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createParametersImpl(req, res) {
  try {
    const parameters = req.body;
    await createParameters(parameters);
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
