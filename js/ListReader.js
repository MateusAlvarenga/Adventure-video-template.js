// @ts-nocheck
var ListReader = function() {
  this.list_file = "videolist.json";
  this.listVideos = [];
  this.video = new Video();
};

ListReader.prototype.loadList = function() {
  var i;
  for (i = 0; i < data.length; i++) {
    this.listVideos[i] = new Video(
      data[i]["id"],
      data[i]["source"],
      data[i]["Tchose1"],
      data[i]["Tchose2"],
      data[i]["IdChose1"],
      data[i]["IdChose2"]
    );

    console.log(data[i]);
  }
};

ListReader.prototype.playFirst = function() {
  if (this.listVideos.length > 0) {
    this.video = this.listVideos[0];
    videoController.FirstVideo(
      this.video["source"],
      this.video["TChose1"],
      this.video["TChose2"]
    );
  } else {
    console.log("list of videos is empty");
  }
};

ListReader.prototype.play = function() {
  videoController.NextVideo(
    this.video["source"],
    this.video["TChose1"],
    this.video["TChose2"]
  );
};

ListReader.prototype.Chose1 = function() {
  this.video = this.listVideos[this.video["IdChose1"]];
  this.play();
};

ListReader.prototype.Chose2 = function() {
  this.video = this.listVideos[this.video["IdChose2"]];
  this.play();
};
