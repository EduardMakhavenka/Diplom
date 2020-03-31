import typeorm from 'typeorm';
import Doctor from '../models/Doctor.mjs';

export default new typeorm.EntitySchema({
  name: 'Doctor',
  target: Doctor,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    name: {
      type: 'string',
    },
    surname: {
      type: 'string',
    },
    experience: {
      type: 'string',
    },
    photo: {
      type: 'string',
    },
    specialty: {
      type: 'string',
    },
    education: {
      type: 'string',
    },
  },
});
