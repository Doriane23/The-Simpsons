+import Avatar from "./Avatar";

function App() {
	return (
		<div>
			<Avatar
				firstName="Bart"
				lastName="Simpsons"
				image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
			/>
			<Avatar
				firstName="Homer"
				lastName="Simpsons"
				image="https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png"
			/>
		</div>
	);
}

export default App;
