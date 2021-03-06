document.addEventListener("deviceready", onDeviceReady, false);
//	100% of the browser window - see Boot.js for additional configuration
var game = new Phaser.Game("100%", "100%", Phaser.AUTO);
game.global = {
	//Global Vars 
}

//	Add the States your game has.
//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
game.state.add('Boot', TouchAndPlay.Boot);
game.state.add('Preloader', TouchAndPlay.Preloader);
game.state.add('MainMenu', TouchAndPlay.MainMenu);
game.state.add('Game', TouchAndPlay.Game);

Phaser.Device.onInitialized.add(function() {
	if(Phaser.Device.desktop || Phaser.Device.chrome) {
		window.onload = function() {
			document.dispatchEvent(new Event("deviceready"));
		};
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == Phaser.Keyboard.BACKSPACE) {
				document.dispatchEvent(new Event("backbutton"));
			}
		});
	}
});

function onDeviceReady() {
	// Now safe to use device APIs    
	//	Now start the Boot state.
	game.state.start('Boot');
}