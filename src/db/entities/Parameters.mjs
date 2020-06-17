import typeorm from 'typeorm';
import Parameters from '../models/Parameters.mjs';

export default new typeorm.EntitySchema({
  name: 'Parameters',
  target: Parameters,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    lifeForm: {
      type: 'json',
    },
    shootType: {
      type: 'json',
    },
    shootLeafArrangement: {
      type: 'json',
    },
    shootLeafPlacement: {
      type: 'json',
    },
    shootsurface: {
      type: 'json',
    },
    shootappendages: {
      type: 'json',
    },
    leavestype: {
      type: 'json',
    },
    leafplateshape: {
      type: 'json',
    },
    leavesplatedivision: {
      type: 'json',
    },
    leavesplateordersofdifficulty: {
      type: 'json',
    },
    leavesplateattachment: {
      type: 'json',
    },
    leavesshareshape: {
      type: 'json',
    },
    leavessharedivision: {
      type: 'json',
    },
    leavestop: {
      type: 'json',
    },
    leavesedge: {
      type: 'json',
    },
    leavesbase: {
      type: 'json',
    },
    leavessurface: {
      type: 'json',
    },
    leavesappendage: {
      type: 'json',
    },
    inflorescence: {
      type: 'json',
    },
    flowerscobrmain: {
      type: 'json',
    },
    flowerscolorshades: {
      type: 'json',
    },
    flowerscolorspotsorstripes: {
      type: 'json',
    },
    flowerssize: {
      type: 'json',
    },
    flowersperianth: {
      type: 'json',
    },
    flowersthenumberofpetals: {
      type: 'json',
    },
    fruittupe: {
      type: 'json',
    },
    fruitcoloringwithshades: {
      type: 'json',
    },
    fruitappendages: {
      type: 'json',
    },
    bumpsconsistency: {
      type: 'json',
    },
    bumpsform: {
      type: 'json',
    },
    sporangia: {
      type: 'json',
    },
    habitat: {
      type: 'json',
    },
    relationtomoisture: {
      type: 'json',
    },
    attitudetonutrition: {
      type: 'json',
    },
    attitudetolight: {
      type: 'json',
    },
    relationtosubstrate: {
      type: 'json',
    },
    features: {
      type: 'json',
    },
  },
});
