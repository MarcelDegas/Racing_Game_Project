// OOP Racing Game example boilerplate code
//constructor
function Game() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.track = new Track();
    
}

// A starter Player constructor.
function Player(name, position) {
  //this.name = ...
  //this.position = ...
    this.count = 1
    
};

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
    var _this = this;
    this.countA = 1
    this.countB = 1
    //this always points to the calling object/ target object
    // UNLESS you are in an event handler
    $(document).keydown(function keyPress(event) {
        if (event.which === 65) { 
            _this.player1.moveToRight();
            _this.win1();
        };
         
        if (event.which === 76) {
            _this.player2.moveToLeft();
            _this.win2();
        };     
     })
}

Player.prototype.moveToRight = function() {
     this.count++;
     $("#a" + this.count).attr("class", "paint");
     console.log("count A is now:", this.count);
};

Player.prototype.moveToLeft = function() {
     this.count++;
     $("#b" + (33 - this.count)).attr("class", "paint");
     console.log("#b" + (33 - this.count));
 
};

Game.prototype.win1 = function() {
    if ($("#a32").hasClass("paint")) {
        alert("player 1 blasted yo ass!");
    } 
};
    
Game.prototype.win2 = function() {
    if ($("#b1").hasClass("paint")) {
        alert("player 1 blasted yo ass!");
    } 
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

$(document).ready(function() {       
    var gameOn = new Game();
    gameOn.init();
});
