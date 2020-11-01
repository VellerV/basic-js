const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || !isFinite(+sampleActivity) || sampleActivity === ' ' || !Number.isInteger(sampleActivity))  return false;
  numActivity = Number(sampleActivity);
  k=0.693/HALF_LIFE_PERIOD;
  t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
  let v = Math.ceil(t);
  return v;
};
