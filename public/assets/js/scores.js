//scores
let toSpells = document.getElementById('#toSpells');

if (toSpells !== null) {
	
	let chosenClass = document.getElementById('#chosenClass');
	if (chosenClass !== null) chosenClass = chosenClass.innerHTML;
	
	toSpells.addEventListener('click', () => {
		let cha = document.getElementById('#cha').value;
		let con = document.getElementById('#con').value;
		let dex = document.getElementById('#dex').value;
		let int = document.getElementById('#int').value;
		let str = document.getElementById('#str').value;
		let wis = document.getElementById('#wis').value;
		
		window.location.replace(`/class/spells/${chosenClass}?
		cha=${cha}&
		con=${con}&
		dex=${dex}&
		int=${int}&
		str=${str}&
		wis=${wis}`);
	});
	
}