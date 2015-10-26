
/** TESTING THE REALMS OF JS PAIN */

function Ressource(type, rate, baseCost, upgradeCost, factor) {
  this.type=type;                 // type of new ressource
  this.baseCost = baseCost;       // base cost of upgrades
  this.upgradeCost = upgradeCost; // actual upgrade cost
  this.rate = rate;               // rate of auto gain
  this.credit = 0;                // player credit
  this.level = 1;                 // industry level

  this.perClick = 5000;
  this.factor = factor;

  var self = this;
  /* functions */
  this.getInfo = function() {
    alert("TYPE:  " + this.type + "," +
          "BASECOST:  " + this.baseCost + "," +
          "RATE:  " + this.rate + "," +
          "UPGRADECOST: "+ this.upgradeCost );
  }

  /** Increase Credit by given amount (decrease if negative) */
  this.addCredit = function(amount) {
      self.credit += amount;
  }

  /** Increase credit by doing something useful, like clicking a button */
  $('#' + self.type + '-mine').click (function() {
      self.addCredit(self.perClick);
      updateView();
  });




/** Upgrade player level --> rise credit per second */
  $('#' + self.type + '-upgrade').click(function() {
    if(self.credit >= self.upgradeCost) {
      self.rate = self.rate*1.2 + self.level*0.0001;
      self.addCredit(-self.upgradeCost);
      /* level up */
      self.level++;
      /* increase base cost */
      self.baseCost+=0.001*self.level*self.baseCost;
      self.upgradeCost = Math.floor(self.baseCost*(Math.pow(self.factor,self.level)));
      updateView();
    }
  });



}


/** GAME OBJECT */
// Holds resource objects and manages game loop
function Game(){
  this.ressources = new Array();
  this.wood = new Ressource("wood", 0.0012, 50, 71, 1.35);
  this.wool = new Ressource("wool", 0.0009, 50, 47, 1.29);
  this.stone = new Ressource("stone", 0.0011, 50, 89, 1.36);
  this.steel = new Ressource("steel", 0.00075, 50, 123, 1.46);
  this.ressources.push(this.wood, this.wool, this.stone, this.steel);

  /* MAIN LOOP */
  // TODO unchain game logic and view update
  // TODO implement a clever game loop
  this.loop = function() {window.setInterval("updateData()", 100);};


}

var mainGame = new Game();
mainGame.loop();

// draw ressources as often as possible
requestAnimationFrame(updateView);

/** Update the Data presented in the view */
function updateView() {

for(var i = 0; i < mainGame.ressources.length; i++) {

        var res = mainGame.ressources[i];
        $('#'+ res.type).html(thousandSep(parseInt(res.credit)));
        $('#' + res.type + '-upd').html('+' + thousandSep(Math.floor(res.rate * 36000)) + '/h');
        $('#' + res.type + '-level').html(res.level);
        $('#' + res.type + '-cost').html(thousandSep(parseInt(res.upgradeCost)));
        $('#' + res.type + '-perClick').html(res.perClick);
  }


  requestAnimationFrame(updateView);
}

/** Update the Data in the model */
function updateData() {
  for(var i = 0; i < mainGame.ressources.length; i++) {
    mainGame.ressources[i].addCredit(mainGame.ressources[i].rate);
  }
}


function unlockAchievement(data) {
  alert ("Achievement unlocked!");
}



/** Introduces decimal dots as separator for large numbers **/
function thousandSep(val) {
  return String(val).split("").reverse().join("")
                .replace(/(\d{3}\B)/g, "$1.")
                .split("").reverse().join("");
              }
