import {DieCise} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["c"] = DieCise;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({id:"cise",name:"CyberHex"},true);
  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/fvtt-dsn-yoru/artwork/S1.png',
      'modules/fvtt-dsn-yoru/artwork/S2.png',
      'modules/fvtt-dsn-yoru/artwork/S3.png',
      'modules/fvtt-dsn-yoru/artwork/S4.png',
      'modules/fvtt-dsn-yoru/artwork/S5.png',
      'modules/fvtt-dsn-yoru/artwork/S6.png'
    ],/*
    bumpMaps:[
      'modules/fvtt-dsn-yoru/artwork/S1_bump.png',
      'modules/fvtt-dsn-yoru/artwork/S2_bump.png',
      'modules/fvtt-dsn-yoru/artwork/S3_bump.png',
      'modules/fvtt-dsn-yoru/artwork/S4_bump.png',
      'modules/fvtt-dsn-yoru/artwork/S5_bump.png',
      'modules/fvtt-dsn-yoru/artwork/S6_bump.png'
    ],*/
    system:"cise"
  });
});
