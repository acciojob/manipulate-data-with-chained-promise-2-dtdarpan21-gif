//your JS code here. If required.
const output = document.getElementById("output");
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve,ms));
}

function manipulateData(){
	const arr = [1,2,3,4];

	return delay(3000)
	.then(()  => arr)
	.then(numbers => {
		const evenNumbers = numbers .filter(num => num% 2 ===0);

		return delay(1000).then(() => {
			output.textContent = evenNumbers;
			return evenNumbers
		});
	})
	.then(evenNumbers => {
		const doubledNumbers = evenNumbers.map(num => num*2);

		return delay(2000).then(() => {
			output.textContent = doubledNumbers;
			return doubledNumbers;
		});
	});
}
manipulateData();