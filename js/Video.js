var Video = function(id, source, TChose1, TChose2, IdChose1, IdChose2) {
  this.id = id;
  this.source = source;
  this.TChose1 = TChose1;
  this.TChose2 = TChose2;
  this.IdChose1 = IdChose1;
  this.IdChose2 = IdChose2;
};

Video.prototype.getId = function() {
  return this.id;
};

Video.prototype.getSource = function() {
  return this.source;
};

Video.prototype.getTchose1 = function() {
  return this.TChose1;
};

Video.prototype.getTChose2 = function() {
  return this.TChose2;
};

Video.prototype.getIdChose1 = function() {
  return this.IdChose1;
};

Video.prototype.getIdChose2 = function() {
  return this.IdChose2;
};

Video.prototype.setTchose2 = function(text) {
  this.TChose2 = text;
};
