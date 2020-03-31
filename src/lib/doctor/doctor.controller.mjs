import {
  getDoctors,
  getDoctorById,
  removeDoctor,
  createDoctor,
  updateDoctor,
  getDoctorByName,
} from './doctor.action.mjs';

export async function getDoctorsImpl(req, res) {
  try {
    const doctors = await getDoctors();
    res.status(200).json({
      doctors,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function getDoctorByIdImpl(req, res) {
  try {
    const doctor = await getDoctorById(req.params.id);
    res.status(200).json({
      doctor,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function removeDoctorImpl(req, res) {
  try {
    const doctor = await getDoctorById(req.params.id);
    await removeDoctor(doctor);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}

export async function createDoctorImpl(req, res) {
  try {
    await createDoctor(req.body);
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

export async function updateDoctorImpl(req, res) {
  try {
    await updateDoctor(req.params.id, req.body);
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

export async function getDoctorByNameImpl(req, res) {
  try {
    const doctor = await getDoctorByName(req.params.name);
    res.status(200).json({
      doctor,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
}
