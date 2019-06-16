const colors = ["#54494A", "#DB2763", "#F1F7ED", "#1AD7EA", "#FF5666"];

const numBalls = 400;
const balls = [];

for (let i = 0; i < numBalls; i++) {
	let ball = document.createElement("div");
	ball.classList.add("ball");
	ball.style.background = colors[Math.floor(Math.random() * colors.length)];
	ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
	ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
	ball.style.transform = `scale(${Math.random()})`;
	ball.style.width = `${Math.random()}em`;
	ball.style.height = ball.style.width;

	balls.push(ball);
	document.body.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
	let to = {
		x: Math.random() * (i % 2 === 0 ? -30 : 30),
		y: Math.random() * 30
	};

    // comment for a commit

	let anim = el.animate(
		[
			{ transform: "translate(0, 0)" },
			{ transform: `translate(${to.x}rem, ${to.y}rem)` }
		],
		{
			duration: (Math.random() + 1) * 800, // random duration
			direction: "alternate",
			fill: "both",
			iterations: Infinity,
			easing: "ease-in-out"
		}
	);
});
