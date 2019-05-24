// @ts-ignore
var videoController = new VideoController("myVideo");
var listReader = new ListReader();
var optionsController = new OptionsController("options-group");
listReader.loadList();
listReader.playFirst();

console.log("list:" + listReader.listVideos);

document.onkeyup = function(e) {
  //key: space
  if (e.which == 32) {
    if (!videoController.IsPaused()) {
      videoController.pause();
    } else {
      videoController.play();
    }
    //key: p
  } else if (e.which == 80) {
    videoController.play();
    //key: r
  } else if (e.which == 82) {
    videoController.reload();
    //key o
  } else if (e.which == 79) {
    optionsController.toggle();
  }
};
