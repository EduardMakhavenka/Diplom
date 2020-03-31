import typeorm from 'typeorm';
import Disease from '../models/Disease.mjs';

export default new typeorm.EntitySchema({
  name: 'Disease',
  target: Disease,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    createdAt: {
      type: 'double',
    },
    modifiedAt: {
      type: 'double',
    },
    symptoms: {
      type: 'json',
    },
    section: {
      type: 'string',
    },
  },
});
