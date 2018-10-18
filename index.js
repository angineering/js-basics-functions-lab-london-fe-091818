// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  if (block < hq) {
    return hq - block;
  }
  return block - hq;
}

function distanceFromHqInFeet(block) {
  const feetConversion = 264;
  return distanceFromHqInBlocks(block) * feetConversion;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetConversion = 264;
  if (startBlock < endBlock) {
    return  (endBlock - startBlock)*feetConversion;
  } else {
    return (startBlock - endBlock)*feetConversion;
  }
}


function calculatesFarePrice(start, destination) {
  
}
