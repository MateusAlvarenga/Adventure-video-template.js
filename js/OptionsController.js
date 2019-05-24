var OptionsController = function(tag) {
  this.tag = $("#" + tag);
  this.button1 = $("#" + tag + " button:eq(0)");
  this.button2 = $("#" + tag + " button:eq(1)");
};

OptionsController.prototype.show = function() {
  this.tag.css('display','grid');
  this.tag.show("slow");
};

OptionsController.prototype.hide = function() {
  
  this.tag.hide("slow");
};

OptionsController.prototype.toggle = function() {
  this.tag.css('display','grid');
  this.tag.toggle("slow");
  
};

OptionsController.prototype.setOptions = function(option1, option2) {
  this.button1.html(option1);
  this.button2.html(option2);
};
OptionsController.prototype.setOption1 = function(option) {
  this.button1.html(option);
};
OptionsController.prototype.setOption2 = function(option) {
  this.button2.html(option);
};
