var VideoController = function(tag) {
  this.id = tag;
  this.tag = $("#" + tag);
  this.source = $("#" + tag + " source");
};

VideoController.prototype.play = function() {
  this.tag.trigger("play");
  $('#top-painel').hide('slow');
};

VideoController.prototype.pause = function() {
  this.tag.trigger("pause");
  $('#top-painel').show('slow')
};

VideoController.prototype.reload = function() {
  if (confirm("deseja reiniciar ?"))
      this.tag.trigger("load");
};

VideoController.prototype.load = function() {
  
  this.tag.trigger("load");
};


VideoController.prototype.NextVideo = function(source) {
  this.source.attr("src", source);
  this.load();
  this.play();
};


VideoController.prototype.NextVideo = function(source, option1, option2) {
  this.source.attr("src", source);
  optionsController.setOptions(option1, option2);
  optionsController.hide();
  this.load();
  this.play();
};

VideoController.prototype.FirstVideo = function(source, option1, option2) {
  this.source.attr("src", source);
  optionsController.setOptions(option1, option2); 
  this.load();
 
};


VideoController.prototype.getSource = function() {
  return this.source.attr("src");
};

VideoController.prototype.IsPaused = function() {
  // @ts-ignore
  return document.getElementById(this.id).paused;
};
