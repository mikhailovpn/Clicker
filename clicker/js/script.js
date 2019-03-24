var mine = $('.mine');
var coinsContainer = $('.coins-counter');
var pickaxeLevel1Counter = $('.pick-axe-level-1-counter');
var pickaxeLevel1Icon = $('.pick-axe-level-1-icon');
var coinsCounter = 0;
var coinsMultiplexer = 1;
var pickAxe1Price = 50;

function onLoad(){
  pickaxeLevel1Icon.onclick = addPickAxe1;
  mine.onclick = addCoin;

  return false;
}

function $(selector) {
  return document.querySelector(selector);
}

function addCoin() {
  coinsCounter +=coinsMultiplexer;
  coinsContainer.textContent = coinsCounter;
  return false;
}

function addPickAxe1() {
  addPickAxe(1, pickAxe1Price);
  pickAxe1Price *= 3;
  return false;
}

function addPickAxe(pickAxeCapacity, pickAxePrice) {
  if (coinsCounter > pickAxePrice) {
    coinsCounter -= pickAxePrice;
    coinsMultiplexer += pickAxeCapacity;
    pickaxeLevel1Counter.textContent++;
  }
  else {
    alert('Not enough coins');
  }
  return false;
}
