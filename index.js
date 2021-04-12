// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  let blocks 
  if (pickupLocation >= 42) {
    blocks = pickupLocation - 42;
  } else if (pickupLocation <= 42) {
    blocks = 42 - pickupLocation;
  } return blocks;
};

function distanceFromHqInFeet(startBlock) {
  distanceFromHqInBlocks(startBlock);
  return blocks;
  let feet;
  feet = blocks * 264;
  return feet;
}
