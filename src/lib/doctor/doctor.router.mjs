import {
  getDoctorsImpl,
  getDoctorByIdImpl,
  removeDoctorImpl,
  createDoctorImpl,
  updateDoctorImpl,
  getDoctorByNameImpl,
} from './doctor.controller.mjs';

export default (router) => {
  router.route('/doctors')
    .get(getDoctorsImpl);

  router.route('/doctor')
    .post(createDoctorImpl);

  router.route('/doctor/:id')
    .put(updateDoctorImpl)
    .get(getDoctorByIdImpl)
    .delete(removeDoctorImpl);

  router.route('/doctor/:name')
    .get(getDoctorByNameImpl);
};
