'use strict';

const mongoose = require('mongoose');

const _schema = {
    name : {type: String},
    attack : {type: Number, default : 0},
    defense : {type: Number},
    rankOff: {type: Number },
    rankDef: {type: Number},
    hp: {type: Number},
    porcentOff: {type: Number},
    porcentDef: {type: Number},
    basicAtk : {type: String},
    damage: {type: Number},
    chargeAtk : {type: String},
    chargeDamage: { type: Number},
    gynDamage: { type: Number },
    minCp: {type: Number},
    maxCp: {type: Number},
    tank: {type: Number},
    gymOff: {type: Number},
    gymDef: {type: Number},
    numberDex: {type: Number},
    types: []
};
const PokemonSchema = new mongoose.Schema(_schema);

module.exports = PokemonSchema;
