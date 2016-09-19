var Bee = function() {
  this.color = 'yellow';
  this.age = 5;
  this.job = 'keep on growing';
};

Bee.prototype = new Grub;
Bee.prototype.constructor = Bee;