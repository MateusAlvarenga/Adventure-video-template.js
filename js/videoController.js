// @ts-nocheck

//constructor
var VideoController = function(tag) {
    this.id = tag;
    this.tag = $("#" + tag);
    this.source = $("#" + tag + " source");
};

//play the video
VideoController.prototype.play = function() {
    this.tag.trigger("play");

    toppainel.hide();
};

//pause the video
VideoController.prototype.pause = function() {
    this.tag.trigger("pause");
    toppainel.show();
};

//restart the video
VideoController.prototype.reload = function() {
    if (confirm("deseja reiniciar ?")) this.tag.trigger("load");
};

//refresh the video dom
VideoController.prototype.load = function() {
    this.tag.trigger("load");
};

//not used anymore
VideoController.prototype.NextVideo = function(source) {
    this.source.attr("src", source);
    this.load();
    this.play();
};

//method called everytime the video is changed
VideoController.prototype.NextVideo = function(source, option1, option2) {
    this.source.attr("src", source);
    optionsController.setOptions(option1, option2);
    optionsController.hide();
    this.load();
    this.play();
};

//method to play the frist video when the app is opened 
VideoController.prototype.FirstVideo = function(source, option1, option2) {
    this.source.attr("src", source);
    optionsController.setOptions(option1, option2);
    this.load();
};

//get src 
VideoController.prototype.getSource = function() {
    return this.source.attr("src");
};

//return a boolean if the video is paused  = true
VideoController.prototype.IsPaused = function() {
    // @ts-ignore
    return document.getElementById(this.id).paused;
};

//skip x secconds in video forward
VideoController.prototype.advance = function(time) {
    this.tag[0].currentTime = this.tag[0].currentTime + time;
};
//skip x secconds in video backward
VideoController.prototype.regress = function(time) {
    this.tag[0].currentTime = this.tag[0].currentTime - time;
};

//starts the count to user chose his path
VideoController.prototype.initcount = function(countTime) {
    console.log("Count started...", "countTime:" + countTime);
    var increments = countTime / 100;
    var finalize = countTime * 100;

    var interval = setInterval(function() {
        bar1.set(bar1.value + increments);
        console.log(bar1.value);
    }, countTime);


    setTimeout(function() {
        clearInterval(interval);
        console.log('finaliza...');

        listReader.Chose1();
    }, finalize);

};

//limit time to start the count
//@checkTime: the amount of time between each scan in sec.
//@limit: the time the video will play, before starting the count
VideoController.prototype.TimeCheck = function(checkTime, limit, countTime) {
    console.log('Time check started...', "checkTime:" + checkTime, "limit:" + limit);
    var self = this;
    var count;
    var interval = setInterval(function() {
        count = self.tag[0].duration - self.tag[0].currentTime;

        if (count <= limit) {
            console.log("count started");
            clearInterval(interval);
            optionsController.show();
            bar1.set(0);
            optionsController.button1.addClass('active');
            self.initcount(countTime);
        } else {
            console.log("count:" + count);
        }


    }, checkTime);
};