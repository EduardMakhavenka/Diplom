import typeorm from 'typeorm';
import Plant from '../models/Plant.mjs';

export default new typeorm.EntitySchema({
  name: 'Plant',
  target: Plant,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    lifeForm: {
      type: 'string',
    },
    shootType: {
      type: 'string',
    },
    shootLeafArrangement: {
      type: 'string',
    },
    shootLeafPlacement: {
      type: 'string',
    },
    shootsurface: {
      type: 'string',
    },
    shootappendages: {
      type: 'string',
    },
    leavestype: {
      type: 'string',
    },
    leafplateshape: {
      type: 'string',
    },
    leavesplatedivision: {
      type: 'string',
    },
    leavesplateordersofdifficulty: {
      type: 'string',
    },
    leavesplateattachment: {
      type: 'string',
    },
    leavesshareshape: {
      type: 'string',
    },
    leavessharedivision: {
      type: 'string',
    },
    leavestop: {
      type: 'string',
    },
    leavesedge: {
      type: 'string',
    },
    leavesbase: {
      type: 'string',
    },
    leavessurface: {
      type: 'string',
    },
    leavesappendage: {
      type: 'string',
    },
    inflorescence: {
      type: 'string',
    },
    flowerscobrmain: {
      type: 'string',
    },
    flowerscolorshades: {
      type: 'string',
    },
    flowerscolorspotsorstripes: {
      type: 'string',
    },
    flowerssize: {
      type: 'string',
    },
    flowersperianth: {
      type: 'string',
    },
    flowersthenumberofpetals: {
      type: 'string',
    },
    fruittupe: {
      type: 'string',
    },
    fruitcoloringwithshades: {
      type: 'string',
    },
    fruitappendages: {
      type: 'string',
    },
    bumpsconsistency: {
      type: 'string',
    },
    bumpsform: {
      type: 'string',
    },
    sporangia: {
      type: 'string',
    },
    habitat: {
      type: 'string',
    },
    relationtomoisture: {
      type: 'string',
    },
    attitudetonutrition: {
      type: 'string',
    },
    attitudetolight: {
      type: 'string',
    },
    relationtosubstrate: {
      type: 'string',
    },
    features: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    createdat: {
      type: 'string',
    },
    photo: {
      type: 'string',
    },
  },
});
