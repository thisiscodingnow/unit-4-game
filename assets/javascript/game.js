$(document).ready(function() {

var iNumberToGuess = 0;  var iTotalScore = 0;		var numWins = 0;  	var numLosses = 0;   
var iRubyRandom = 0;	 var iEmeraldRandom = 0;  	var iTopazRandom = 0 ; 	var iBerylRandom = 0;

var oGame = {
    
	randomNumber: function(iMin,iMax) {
		var iRandomNumber = Math.floor(Math.random() * (iMax - iMin + 1) + iMin); 
		return iRandomNumber ;
	} ,

	// initialize game AS WELL AS re-set current game
    play: function() {
		iTotalScore	= 0;
		iNumberToGuess = oGame.randomNumber(19, 120) ;
		$("#myScore").html("Your Total Score is: " + iTotalScore);
		$("#myNumber").html("The Number to Match is: " + iNumberToGuess);
		console.log("RESET - iTotalScore=", iTotalScore, "iNumberToGuess=", iNumberToGuess  );
		
		//get a DIFFERENT random value for EACH crystal
		iRubyRandom = oGame.randomNumber(1, 12) ;
		iEmeraldRandom = oGame.randomNumber(1, 12) ;
		iTopazRandom = oGame.randomNumber(1, 12) ;
		iBerylRandom = oGame.randomNumber(1, 12) ;
	} , // end function play
  	
	checkScore: function() {
		$("#myScore").html("Your Total Score is: " + iTotalScore);
		
		// check LOSS
		if (iTotalScore > iNumberToGuess) {
			// set $("#comments") color 
			console.log("LOSS - iTotalScore=", iTotalScore, "iNumberToGuess=", iNumberToGuess  );
			numLosses += 1 ;
			$("#numLosses").html("<b>Losses: </b>" + numLosses);
			$("#comments").html("Sorry Too High ~ All Numbers RE-SET ~ Try Again!!");
			alert("Sorry Too High ~ All Numbers Have Been RE-SET ~ Try Again!!");
			oGame.play();
		}
		
		// check WIN
		if (iTotalScore == iNumberToGuess) {
			console.log("WIN - iTotalScore=", iTotalScore, "iNumberToGuess=", iNumberToGuess  );
			numWins += 1 ;
			$("#numWins").html("<b>Wins:  </b>" + numWins);
			$("#comments").html("You WIN GENIUS ~ All Numbers RE-SET ~ Play Again!!");
			alert("You WIN GENIUS ~ All Numbers RE-SET ~ Play Again!!");
			oGame.play();
		} 
	} , // end function CheckScore
} ; // end oGame 

//MAIN
    oGame.play();
	
	$("#btnRuby").on("click", function() {
       iTotalScore += iRubyRandom ;
	   console.log("Total=", iTotalScore, "Number=", iNumberToGuess, "Ruby=", iRubyRandom, "iEmerald=", iEmeraldRandom,"Topaz=", iTopazRandom, "Beryl=", iBerylRandom );
	   oGame.checkScore() ; 
	}); 

	$("#btnEmerald").on("click", function() {
       iTotalScore += iEmeraldRandom ;
	   console.log("Total=", iTotalScore, "Number=", iNumberToGuess, "Ruby=", iRubyRandom, "iEmerald=", iEmeraldRandom,"Topaz=", iTopazRandom, "Beryl=", iBerylRandom );
	   oGame.checkScore() ;
    }); 
	
	$("#btnTopaz").on("click", function() {
       iTotalScore += iTopazRandom ;
	   console.log("Total=", iTotalScore, "Number=", iNumberToGuess, "Ruby=", iRubyRandom, "iEmerald=", iEmeraldRandom,"Topaz=", iTopazRandom, "Beryl=", iBerylRandom );
	   oGame.checkScore() ;
    });  
	
	$("#btnBeryl").on("click", function() {
       iTotalScore += iBerylRandom ;
	   console.log("Total=", iTotalScore, "Number=", iNumberToGuess, "Ruby=", iRubyRandom, "iEmerald=", iEmeraldRandom,"Topaz=", iTopazRandom, "Beryl=", iBerylRandom );
	   oGame.checkScore() ;
    }); 

}); // end doc ready

