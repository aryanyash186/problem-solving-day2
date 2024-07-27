function calculate(r) {
  this.r = r;
  this.area = function () {
    return Math.PI * this.r * this.r;
  };
}

export { calculate };
