import {
  getDiseases,
  getDiseaseById,
  removeDisease,
  createDisease,
  updateDisease,
} from './disease.action.mjs';

export async function getDiseasesImpl(req, res) {
  try {
    const diseases = await getDiseases();
    res.status(200).json({
      diseases,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getDiseaseByIdImpl(req, res) {
  try {
    const disease = await getDiseaseById(req.params.id);
    res.status(200).json({
      disease,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function removeDiseaseImpl(req, res) {
  try {
    const disease = await getDiseaseById(req.params.id);
    await removeDisease(disease);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createDiseaseImpl(req, res) {
  try {
    await createDisease(req.body);
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

export async function updateDiseaseImpl(req, res) {
  try {
    await updateDisease(req.params.id, req.body);
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
