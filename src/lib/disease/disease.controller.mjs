import {
  getDiseases,
  getDiseaseById,
  removeDisease,
  createDisease,
  updateDisease,
  getAllSymptoms,
  getAllDiseasesTitles,
  getAllDiseasesByTitle,
  isSame,
} from './disease.action.mjs';

export async function getAllDiseasesBySymptomsImpl(req, res) {
  try {
    const { symptoms } = req.body;
    const allSymptoms = await getAllSymptoms();
    const idDiseases = [];
    const listSymptoms = [];
    for (let i = 0; i < symptoms.length; i++) {
      listSymptoms.push(symptoms[i].value);
    }
    for (let i = 0; i < allSymptoms.length; i++) {
      if (isSame(allSymptoms[i].symptoms, listSymptoms)) {
        idDiseases.push(allSymptoms[i]._id);
      }
    }
    const result = [];
    if (idDiseases.length > 0) {
      idDiseases.forEach(async (id, idx) => {
        let buff = await getDiseaseById(id);
        result.push(buff);
        if (idx + 1 === idDiseases.length) {
          res.status(200).json({
            diseases: result,
            success: true,
          });
        }
      });
    } else {
      res.status(200).json({
        diseases: [],
        success: true,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getAllDiseasesByTitlesImpl(req, res) {
  try {
    const { titles } = req.body;
    const result = [];
    titles.forEach(async (item, idx = 0) => {
      let disease = await getAllDiseasesByTitle(item.value);
      result.push(disease);
      if (idx + 1 === titles.length) {
        res.status(200).json({
          diseases: result,
          success: true,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getAllSymptomsImpl(req, res) {
  try {
    const symptoms = await getAllSymptoms();
    const setSymptoms = new Set();

    for (let i = 0; i < symptoms.length; i++) {
      const list = symptoms[i];
      for (const item of list.symptoms) {
        setSymptoms.add(item);
      }
    }
    const result = Array.from(setSymptoms);
    res.status(200).json({
      symptoms: result,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getAllDiseasesTitlesImpl(req, res) {
  try {
    const titles = await getAllDiseasesTitles();
    const setTitles = new Set();

    for (let i = 0; i < titles.length; i++) {
      const item = titles[i];
      setTitles.add(item.name);
    }
    const result = Array.from(setTitles);
    res.status(200).json({
      titles: result,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

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
