//noSpells
let noSpellsToSummary = document.getElementById('#noSpellsToSummary');

if (noSpellsToSummary !== null) {
	noSpellsToSummary.addEventListener('click', () => {
		window.location.replace(`/summary`)
	});
}

//spells
let toSummary = document.getElementById('#toSummary');

if (toSummary !== null) {
	
	let classCantrip = document.getElementById("#selectClassCantrip");
	let classSpells = document.getElementById("#selectClassSpells");
	let spells = [];
	let cantrip = [];
	
	toSummary.addEventListener('click', () => {
		
		if (classCantrip !== null && classSpells !== null) {
			let cantripMaxLength = document.getElementById("#cantripMaxLength").innerHTML;
			cantrip = [...classCantrip.selectedOptions].map(option => option.value);
			
			if (cantrip[0] == 'choose') alert("You need to choose a Cantrip");
			
			if (cantrip[0] !== 'choose' && cantrip.length < cantripMaxLength) {
				alert(`You need to choose at least ${cantripMaxLength} cantrips`);
			}
			
			if (cantrip[0] !== 'choose' && cantrip.length > cantripMaxLength) {
				alert(`you can only choose a maximum of ${cantripMaxLength} cantrips`);
			}
			
			let spellsMaxLength = document.getElementById("#spellsMaxLength").innerHTML;
			spells = [...classSpells.selectedOptions].map(option => option.value);
			
			if (spells[0] == 'choose') alert("You need to choose a Spell");
			
			if (spells[0] !== 'choose' && spells.length < spellsMaxLength) {
				alert(`You need to choose at least ${spellsMaxLength} spells`);
			}
			
			if (spells[0] !== 'choose' && spells.length > spellsMaxLength) {
				alert(`you can only choose a maximum of ${spellsMaxLength} spells`);
			}
			
			let requiredLength = (spells.length == spellsMaxLength && cantrip.length == cantripMaxLength);
			let spellsAndCantripChosen = (spells[0] !== 'choose' && cantrip[0] !== 'choose');
			
			if (requiredLength && spellsAndCantripChosen) {
				window.location.replace(`/summary?spells=${spells}&cantrip=${cantrip}`);
			}
		}
	});
}