var ForagerBee = function() {
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
  this.job = 'find pollen';
};

ForagerBee.prototype = new Bee;
ForagerBee.prototype.forage = function () {
  this.treasureChest.push('treasure');
}
ForagerBee.prototype.constructor = ForagerBee;