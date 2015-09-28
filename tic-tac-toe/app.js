var ticTacToe = {

	counter: 0,

	board:{	rowOne:{a:'', b:'', c:''},
			rowTwo:{a:'', b:'', c:''},
			rowThree:{a:'', b:'', c:''}
	},

	winner: '',

	playerOneWins: 0,
	playerOneLosses: 0,

	playerTwoWins: 0,
	playerTwoLooses: 0,

	computerPlayer: true,

	displayWinner: function(){
		var winnerDisplay = $('h1');
		var resetButton = $('<div class="reset">Reset</div>').fadeIn(2000)
		if( this.winner == 'TIE'){
				winnerDisplay.text("TIE!")
		}	else {
				winnerDisplay.text('THE WINNER IS "' + this.winner +'"');		
		}

		winnerDisplay.addClass('blink-me');
		$('.page').append(resetButton);
		this.addResetListner()
		this.updateScore()
	},

	addBlinkBoard: function(){
		$('.block').addClass('blink-board')
		setTimeout(function() {
       		$('.block').removeClass("blink-board");
   		}, 1500)
	},

	updateScore: function(){
		if (this.winner == "X") {
			this.playerOneWins += 1
			this.playerTwoLooses +=1
		}	else {
			this.playerTwoWins += 1
			this.playerOneLosses +=1
		}
		this.updateScoreView()
	},

	updateScoreView: function() {
		var playerOneWins = $('.one-wins') ,
			playerOneLosses = $('.one-looses') , 
			playerTwoWins = $('.two-wins') ,
			playerTwoLooses = $('.two-looses')

			playerOneWins.text(this.playerOneWins);
			playerOneLosses.text(this.playerOneLosses);
			playerTwoWins.text(this.playerTwoWins);
			playerTwoLooses.text(this.playerTwoLooses);
	},

	determineHorizantalWinner: function() {
		var rowOne = this.board.rowOne;
		var rowTwo = this.board.rowTwo;
		var rowThree = this.board.rowThree;

		if(rowOne.a == rowOne.b && rowOne.b == rowOne.c){
			this.winner = rowOne.a
		} else if(rowTwo.a == rowTwo.b && rowTwo.b == rowTwo.c){
			this.winner = rowTwo.a
		} else if(rowThree.a == rowThree.b && rowThree.b == rowThree.c){
			this.winner = rowThree.a
		}
	},

	determineVerticalWinner: function() {
		var rowOne = this.board.rowOne;
		var rowTwo = this.board.rowTwo;
		var rowThree = this.board.rowThree;

		if(rowOne.a == rowTwo.a && rowTwo.a == rowThree.a){
			this.winner = rowOne.a
		} else if(rowOne.b == rowTwo.b && rowTwo.b == rowThree.b){
			this.winner = rowOne.b
		} else if(rowOne.c == rowTwo.c && rowTwo.c == rowThree.c){
			this.winner = rowOne.c
		}
	},

	determineDiagonalWinner: function() {
		var rowOne = this.board.rowOne;
		var rowTwo = this.board.rowTwo;
		var rowThree = this.board.rowThree;

		if(rowOne.a == rowTwo.b && rowTwo.b == rowThree.c){
			this.winner = rowOne.a
		} else if(rowThree.a == rowTwo.b && rowTwo.b == rowOne.c){
			this.winner = rowThree.a
		} 
	},

	determineTie: function() {
		if (this.board.rowOne.a !== '' && 
			this.board.rowOne.b !== '' &&
			this.board.rowOne.c !== '' &&
			this.board.rowTwo.a !== '' &&
			this.board.rowTwo.b !== '' &&
			this.board.rowTwo.c !== '' &&
			this.board.rowThree.a !== '' &&
			this.board.rowThree.b !== '' &&
			this.board.rowThree.c !== '') {
				this.winner = "TIE";
				this.displayWinner();
		}
	},

	determineWinner: function(){
		this.determineHorizantalWinner();
		this.determineVerticalWinner();
		this.determineDiagonalWinner();
		this.determineTie();
	},

	addListners: function() {
		var oneA = $('.position-1a'),
			oneB = $('.position-1b'),
			oneC = $('.position-1c'),
			twoA = $('.position-2a'),
			twoB = $('.position-2b'),
			twoC = $('.position-2c'),
			threeA = $('.position-3a'),
			threeB = $('.position-3b'),
			threeC = $('.position-3c'),
			that = this;

		oneA.on('click', function() { 
			 if(that.board.rowOne.a == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					oneA.text("X");
					that.board.rowOne.a = "X"
				}else {
					oneA.text("O");
					that.board.rowOne.a = "O"
				}
			that.addBlinkBoard()	
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}
		});

		oneB.on('click', function() {
			if(that.board.rowOne.b == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					oneB.text("X");
					that.board.rowOne.b = "X"
				}else {
					oneB.text("O");
					that.board.rowOne.b = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

		oneC.on('click', function() {
			if(that.board.rowOne.c == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					oneC.text("X");
					that.board.rowOne.c = "X"
				}else {
					oneC.text("O");
					that.board.rowOne.c = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}

		}		
		});

		twoA.on('click', function() {
			if(that.board.rowTwo.a == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					twoA.text("X");	
					that.board.rowTwo.a = "X"
				}else {
					twoA.text("O");
					that.board.rowTwo.a = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

		twoB.on('click', function() {
			if(that.board.rowTwo.b == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					twoB.text("X");
					that.board.rowTwo.b = "X"
				}else {
					twoB.text("O");
					that.board.rowTwo.b = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

		twoC.on('click', function() {
			if(that.board.rowTwo.c == '' && that.winner == '') {
				if(that.counter % 2 === 0){
					twoC.text("X");
					that.board.rowTwo.c = "X"
				}else {
					twoC.text("O");
					that.board.rowTwo.c = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				
				that.compChosen()
			}
		}		
		});

		threeA.on('click', function() {
			if(that.board.rowThree.a == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					threeA.text("X");
					that.board.rowThree.a = "X"
				}else {
					threeA.text("O");
					that.board.rowThree.a = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

		threeB.on('click', function() {
			if(that.board.rowThree.b == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					threeB.text("X");
					that.board.rowThree.b = "X"
				}else {
					threeB.text("O");
					that.board.rowThree.b = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

		threeC.on('click', function() {
			if(that.board.rowThree.c == '' && that.winner == ''){
				if(that.counter % 2 === 0){
					threeC.text("X");
					that.board.rowThree.c = "X"
				}else {
					threeC.text("O");
					that.board.rowThree.c = "O"
				}
			that.addBlinkBoard()
			that.counter += 1
			that.determineWinner()
			if(that.winner != ''){
				that.displayWinner();
			}
			else{
				that.compChosen()
			}
		}		
		});

	},

	addResetListner: function() {
		var button = $('.reset'),
		    that = this,
		    oneA = $('.position-1a'),
		    oneB = $('.position-1b'),
		    oneC = $('.position-1c'),
		    twoA = $('.position-2a'),
		    twoB = $('.position-2b'),
		    twoC = $('.position-2c'),
		    threeA = $('.position-3a'),
		    threeB = $('.position-3b'),
		    threeC = $('.position-3c'),
		    title = $('h1')

		button.on('click', function() {
			that.counter = 0;
			that.board.rowOne.a = '';
			that.board.rowOne.b = '';
			that.board.rowOne.c = '';
			that.board.rowTwo.a = '';
			that.board.rowTwo.b = '';
			that.board.rowTwo.c = '';
			that.board.rowThree.a = '';
			that.board.rowThree.b = '';
			that.board.rowThree.c = '';
			that. winner = '';

			oneA.text('');
			oneB.text('');
			oneC.text('');
			twoA.text('');
			twoB.text('');
			twoC.text('');
			threeA.text('');
			threeB.text('');
			threeC.text('');


			$('.reset').remove()
			$('h1').removeClass("blink-me")
			title.text("Tic Tac Toe")
		})
	},

	addPermReset: function(){
		var permButton = $('.perm-reset'),
			that = this
			oneA = $('.position-1a'),
		    oneB = $('.position-1b'),
		    oneC = $('.position-1c'),
		    twoA = $('.position-2a'),
		    twoB = $('.position-2b'),
		    twoC = $('.position-2c'),
		    threeA = $('.position-3a'),
		    threeB = $('.position-3b'),
		    threeC = $('.position-3c')

		permButton.on('click', function() {
			that.counter = 0;
			that.board.rowOne.a = '';
			that.board.rowOne.b = '';
			that.board.rowOne.c = '';
			that.board.rowTwo.a = '';
			that.board.rowTwo.b = '';
			that.board.rowTwo.c = '';
			that.board.rowThree.a = '';
			that.board.rowThree.b = '';
			that.board.rowThree.c = '';

			oneA.text('');
			oneB.text('');
			oneC.text('');
			twoA.text('');
			twoB.text('');
			twoC.text('');
			threeA.text('');
			threeB.text('');
			threeC.text('');
		})
	},

	addPlayerListners: function(){
		var oneplayer = $('.oneplayer'),
			twoplayer = $('.twoplayer'),
			that = this;

		if (this.computerPlayer == true){
			oneplayer.addClass('on-click')
		} else {
			twoplayer.addClass('on-click')
		}

		oneplayer.on('click', function(){
			var playerTwoText = $('.player-2')
			playerTwoText.text('Computer')
			$('.input-two').remove();

			twoplayer.removeClass('on-click')
			oneplayer.addClass('on-click')
			that.computerPlayer = true
		})

		twoplayer.on('click', function(){
			var playerTwoText = $('.player-2')
			playerTwoText.text('')

			var playerTwoInput = $('<input class="input-two" placeholder="Enter Player-2 Name">')
			playerTwoText.after(playerTwoInput)
			that.addInputListners();

			oneplayer.removeClass('on-click')
			twoplayer.addClass('on-click')
			that.computerPlayer = false
		})
	},


	addInputListners: function() {
		$('.input-one').keypress(function(event) {
			if(event.keyCode == '13'){
				$('.player-1').text(event.target.value)
				$('.input-one').remove();
			}
		})

		$('.input-two').keypress(function(event) {
			if(event.keyCode == '13'){
				$('.player-2').text(event.target.value)
				$('.input-two').remove();
			}
		})
	},


	computer: function() {
		var random = Math.random()
		var that = this;
		if (this.board.rowOne.a !== '' && 
			this.board.rowOne.b !== '' &&
			this.board.rowOne.c !== '' &&
			this.board.rowTwo.a !== '' &&
			this.board.rowTwo.b !== '' &&
			this.board.rowTwo.c !== '' &&
			this.board.rowThree.a !== '' &&
			this.board.rowThree.b !== '' &&
			this.board.rowThree.c !== '') {
				this.winner = "TIE";
				this.displayWinner();
		}
		else if (random < .11){
			if(this.board.rowOne.a == ''){
				setTimeout(function(){
					$('.position-1a').text("O")
					that.counter +=1
				}, 2000)
			}	else{
				this.computer()
			}
		}	
		else if (random < .22){
			if(this.board.rowOne.b == '') {
				setTimeout(function(){
					$('.position-1b').text("O")
					that.counter += 1;
				}, 2000)
			}else{
				this.computer()
			}
		}
		else if (random < .33){
			if(this.board.rowOne.c == ''){
				setTimeout(function(){
					$('.position-1c').text("O")
					that.counter +=1
				},2000)
			}else{
				this.computer()
			}
		}
		else if (random < .44){
			if(this.board.rowTwo.a == ''){
				setTimeout(function(){
					$('.position-2b').text("O")
					that.counter +=1
				},2000)
			}else {
				this.computer()
			}
		}
		else if (random < .55){
			if(this.board.rowTwo.b == ''){
				setTimeout(function(){
					$('.position-2b').text("O")
					that.counter +=1
				},2000)
			}else {
				this.computer()
			}
		}
		else if (random < .66){
			if(this.board.rowTwo.c == ''){
				setTimeout(function(){
					$('.position-2c').text("O")
					that.counter +=1
				},2000)	
			}else {
				this.computer()
			}
		}
		else if (random < .77){
			if(this.board.rowThree.a == ''){
				setTimeout(function(){
					$('.position-3a').text("O")
					that.counter +=1
				},2000)
			}else {
				this.computer()
			}
		}
		else if (random < .88){
			if(this.board.rowThree.b == ''){
				setTimeout(function(){
					$('.position-3b').text("O")
					that.counter +=1
				},2000)
			}else {
				this.computer()
			}
		}
		else if (random << .99){
			if(this.board.rowThree.c == ''){
				setTimeout(function(){
					$('.position-3c').text("O")
					that.counter +=1
				},2000)
			}else {
				this.computer()
			}
		}
	},

	compChosen: function(){
		if (this.computerPlayer == true){
			this.computer();
		}
	},

	initializeGame: function(){
		this.addListners();
		this.addPlayerListners();
		this.addPermReset()
		this.addInputListners()
		$('.block').addClass('blink-board-opening')
		setTimeout(function() {
       		$('.block').removeClass("blink-board-opening");
   		}, 3000)
	}
}
ticTacToe.initializeGame();