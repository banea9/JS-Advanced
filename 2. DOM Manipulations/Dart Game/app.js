function dart() {
	
	const points = [3, 5, 7, 11, 13, 15];
	const PLAYERS = {
		HOME: 'Home',
		AWAY: 'Away'
	};

	const scores = {
		[PLAYERS.HOME]: 0,
		[PLAYERS.AWAY]: 0
	};

	let playerTurn = PLAYERS.HOME;

	const updatePlayer = () => {
		playerTurn = playerTurn == PLAYERS.HOME
			? PLAYERS.AWAY
			: PLAYERS.HOME;
	};

	const updatePlayerScores = () => {
		Object.values(PLAYERS)
			.forEach(player =>
				document.getElementById(player)
					.firstElementChild
					.innerHTML = scores[player]
			);
		// document.getElementById(PLAYERS.HOME).firstElementChild.innerHTML = scores[PLAYERS.HOME];
		// document.getElementById(PLAYERS.AWAY).firstElementChild.innerHTML = scores[PLAYERS.AWAY];
	}
	const handleScore = function (score) {
		return (ev) => {

			scores[playerTurn] += score;
			updatePlayer()
			updatePlayerScores();
			ev.stopPropagation();
		}
	};

	[...document.querySelectorAll('#playBoard div')]
		.forEach((layer, index) => layer.addEventListener('click', handleScore(points[index])));


}