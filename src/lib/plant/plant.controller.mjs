import {
  getPlants,
  getPlant,
  getPlantById,
  removePlant,
  createPlant,
  updatePlant,
} from './plant.action.mjs';

export async function getPlantsByParametersImpl(req, res) {
  try {
    //console.log(req.body);  
    const content = JSON.parse(req.body.items);
    //console.log(content);
    const plant = await getPlant(content);
    //console.log(plant);
    res.status(200).json({
      plant,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getPlantsImpl(req, res) {
  try {
    const plants = await getPlants();
    res.status(200).json({
      plants,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getPlantByIdImpl(req, res) {
  try {
    const plant = await getPlantById(req.params.id);
    res.status(200).json({
      plant,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function removePlantImpl(req, res) {
  try {
    const answer = await getPlantById(req.params.id);
    await removePlant(answer);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createPlantImpl(req, res) {
  try {
    const plant = req.body;
    plant.createdat = Date.now();
    await createPlant(plant);
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

export async function updatePlantImpl(req, res) {
  try {
    await updatePlant(req.params.id, req.body);
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
