//change-page
window.changePage = (page) => {
	window.location.href= `/${page}`
}

//#selectRace
let select1 = document.getElementById('#selectRace');
if (select1 !== null) {
	select1.addEventListener('change', (race) => {
		let choice = race.target.value;
		if (choice !== 'choose') {
			window.location.replace(`/race/${choice}`);
		}
	});
}

//Choose-race-page
let toChosenRace = document.getElementById('#toChosenRace');


//Chosen-race-page
let toClass = document.getElementById('#toClass');
if (toClass !== null) {

	let selectRaceProficiencyOptions = document.getElementById('#selectProficiencyOptions');
	let selectLanguages = document.getElementById('#selectLanguages');
	let raceProfincieciesMaxLength = document.getElementById('#raceProficiencyLength');
	let standardLanguage = document.getElementById("#language");
	let raceProficiencies;
	let language = [];

	if (raceProfincieciesMaxLength !== null) {
		raceProfincieciesMaxLength = document.getElementById('#raceProficiencyLength').innerHTML;
	}

	if (standardLanguage !== null) standardLanguage = standardLanguage.innerHTML;

	toClass.addEventListener('click', () => {

		if (selectRaceProficiencyOptions !== null) {
			raceProficiencies = [...selectRaceProficiencyOptions.selectedOptions].map(option => option.value);

			if (raceProficiencies.length > raceProfincieciesMaxLength) {
				alert(`you can only choose a maximum of ${raceProfincieciesMaxLength} proficiencies`);
			}

			if (raceProficiencies.length < raceProfincieciesMaxLength) {
				alert(`you need to choose at least ${raceProfincieciesMaxLength} proficiencies`);
			}

			if (selectLanguages == null && raceProficiencies.length == raceProfincieciesMaxLength) {
				window.location.replace(`/class?raceProficiencies=${raceProficiencies}&language=${standardLanguage}`);
			}

		}

		if (selectLanguages !== null) {
			language = [...selectLanguages.selectedOptions].map(option => option.value);

			if (language[0] == 'choose') alert("You need to choose a language");

			if (language[0] !== 'choose' && language.length == 1 && raceProficiencies.length == raceProfincieciesMaxLength) {

				if (standardLanguage !== null) {
					window.location.replace(`/class?raceProficiencies=${raceProficiencies}&language=${language},${standardLanguage}`);
				}

				if (standardLanguage == null) {
					window.location.replace(`/class?raceProficiencies=${raceProficiencies}&language=${standardLanguage}`);
				}
			}
		}

		if (selectRaceProficiencyOptions == null && selectLanguages == null) {
			window.location.replace(`/class?raceProficiencies=&language=${standardLanguage}`);
		}

	});
}

//#selectClass
let select2 = document.getElementById('#selectClass');
if (select2 !== null) {
	select2.addEventListener('change', (classes) => {
		let choice = classes.target.value;
		if (choice !== 'choose') window.location.replace(`/class/${choice}`);
	});
}

//Choose-class-page
let toAbilityScores = document.getElementById('#toAbilityScores');

if (toAbilityScores !== null) {

	let selectClassProficiencyOptions1 = document.getElementById('#selectClassProficiencies1');
	let selectClassProficiencyOptions2 = document.getElementById('#selectClassProficiencies2');
	let selectClassProficiencyOptions3 = document.getElementById('#selectClassProficiencies3');
	let classProficiencies1 = [];
	let classProficiencies2 = [];
	let classProficiencies3 = [];
	let classProficiencyMaxLength1 = document.getElementById("#classProficiencyLength1");
	let classProficiencyMaxLength2 = document.getElementById("#classProficiencyLength2");
	let classProficiencyMaxLength3 = document.getElementById("#classProficiencyLength3");
	
	toAbilityScores.addEventListener('click', () => {
		
		if (selectClassProficiencyOptions1 !== null) {
			classProficiencyMaxLength1 = document.getElementById("#classProficiencyLength1").innerHTML;
			classProficiencies1 = [...selectClassProficiencyOptions1.selectedOptions].map(option => option.value);
			if (classProficiencies1[0] == 'choose' && selectClassProficiencyOptions3 == null) {
				alert('You need to choose a Skill');
			}
			
			if(classProficiencies1.length > classProficiencyMaxLength1) {
				alert(`you can only choose a maximum of ${classProficiencyMaxLength1} proficiencies`);
			}
			
			if(classProficiencies1.length < classProficiencyMaxLength1) {
				alert(`you need to choose at least ${classProficiencyMaxLength1} proficiencies`);
			}
			
			if (!classProficiencies1.includes('choose') && classProficiencies1.length == classProficiencyMaxLength1 && 
			selectClassProficiencyOptions2 == null) {
				window.location.replace(`/scores?classProficiencies=${classProficiencies1}`);
			}
			
		}
		
		if (selectClassProficiencyOptions2 !== null) {
			classProficiencyMaxLength2 = document.getElementById("#classProficiencyLength2").innerHTML;
			classProficiencies2 = [...selectClassProficiencyOptions2.selectedOptions].map(option => option.value);
			if (classProficiencies2[0] == 'choose' && selectClassProficiencyOptions3 == null) {
				alert('You need to choose a musical instrument');
			}
			
			if(classProficiencies2.length > classProficiencyMaxLength2) {
				alert(`you can only choose a maximum of ${classProficiencyMaxLength2} proficiencies`);
			}
			
			if(classProficiencies2.length < classProficiencyMaxLength2) {
				alert(`you need to choose at least ${classProficiencyMaxLength2} proficiencies`);
			}
			
			if (classProficiencies2[0] !== 'choose' && classProficiencies2.length == classProficiencyMaxLength2 && 
			selectClassProficiencyOptions3 == null) {
				window.location.replace(`/scores?classProficiencies=${classProficiencies1},${classProficiencies2}`);
			}
		}
		
		if (selectClassProficiencyOptions3 !== null) {
			classProficiencyMaxLength3 = document.getElementById("#classProficiencyLength3").innerHTML;
			classProficiencies3 = [...selectClassProficiencyOptions3.selectedOptions].map(option => option.value);
			
			if (classProficiencies1[0] == 'choose' && classProficiencies2[0] == 'choose') 
				alert('You need to choose a tool or a musical instrument');
			
			if (classProficiencies1[0] !== 'choose' && classProficiencies2[0] !== 'choose') 
				alert('You need to choose either a tool or a musical instrument');
			
			if (classProficiencies3[0] == 'choose') alert('You need to choose a Skill');
			
			if(classProficiencies3.length > classProficiencyMaxLength3) {
				alert(`you can only choose a maximum of ${classProficiencyMaxLength3} proficiencies`);
			}
			
			if(classProficiencies3.length < classProficiencyMaxLength3) {
				alert(`you need to choose at least ${classProficiencyMaxLength3} skills`);
			}
			
			if (classProficiencies3[0] !== 'choose' && classProficiencies3.length == classProficiencyMaxLength3
			&& classProficiencies1[0] !== 'choose' && classProficiencies1.length == classProficiencyMaxLength1
			&& classProficiencies2[0] == 'choose') {
				window.location.replace(`/scores?classProficiencies=${classProficiencies1},${classProficiencies3}`);
			}
			
			if (classProficiencies3[0] !== 'choose' && classProficiencies3.length == classProficiencyMaxLength3
			&& classProficiencies2[0] !== 'choose' && classProficiencies2.length == classProficiencyMaxLength2
			&& classProficiencies1[0] == 'choose') {
				window.location.replace(`/scores?classProficiencies=${classProficiencies2},${classProficiencies3}`);
			}
		}
		
	});
	
}

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

//summary
let summary = document.getElementById("#page:summary");

if (summary !== null) {
	
	//scores
	
	let modifiers = (number) => {
		return Math.floor((number - 10) / 2);
	}
	
	let str = document.getElementById("#str");
	let dex = document.getElementById("#dex");
	let con = document.getElementById("#con");
	let int = document.getElementById("#int");
	let wis = document.getElementById("#wis");
	let cha = document.getElementById("#cha");
	
	let strength = document.getElementById("#StrengthValue").innerHTML;
	let dexterity = document.getElementById("#DexterityValue").innerHTML;
	let constitution = document.getElementById("#ConstitutionValue").innerHTML;
	let intelligence = document.getElementById("#IntelligenceValue").innerHTML;
	let wisdom = document.getElementById("#WisdomValue").innerHTML;
	let charisma = document.getElementById("#CharismaValue").innerHTML;

	if (str !== null) document.getElementById("#StrengthValue").innerHTML = parseInt(strength) + parseInt(str.innerHTML);
	if (dex !== null) document.getElementById("#DexterityValue").innerHTML = parseInt(dexterity) + parseInt(dex.innerHTML);
	if (con !== null) document.getElementById("#ConstitutionValue").innerHTML = parseInt(constitution) + parseInt(con.innerHTML);
	if (int !== null) document.getElementById("#IntelligenceValue").innerHTML = parseInt(intelligence) + parseInt(int.innerHTML);
	if (wis !== null) document.getElementById("#WisdomValue").innerHTML = parseInt(wisdom) + parseInt(wis.innerHTML);
	if (cha !== null) document.getElementById("#CharismaValue").innerHTML = parseInt(charisma) + parseInt(cha.innerHTML);
	
	let strengthMod = document.getElementById("#StrengthMod").innerHTML;
	let dexterityMod = document.getElementById("#DexterityMod").innerHTML;
	let constitutionMod = document.getElementById("#ConstitutionMod").innerHTML;
	let intelligenceMod = document.getElementById("#IntelligenceMod").innerHTML;
	let wisdomMod = document.getElementById("#WisdomMod").innerHTML;
	let charismaMod = document.getElementById("#CharismaMod").innerHTML;
	
	document.getElementById("#StrengthMod").innerHTML = modifiers(document.getElementById("#StrengthValue").innerHTML);
	document.getElementById("#DexterityMod").innerHTML = modifiers(document.getElementById("#DexterityValue").innerHTML);
	document.getElementById("#ConstitutionMod").innerHTML = modifiers(document.getElementById("#ConstitutionValue").innerHTML); 
	document.getElementById("#IntelligenceMod").innerHTML = modifiers(document.getElementById("#IntelligenceValue").innerHTML);
	document.getElementById("#WisdomMod").innerHTML = modifiers(document.getElementById("#WisdomValue").innerHTML);
	document.getElementById("#CharismaMod").innerHTML = modifiers(document.getElementById("#CharismaValue").innerHTML);
	
	//hitPoints
	
	document.getElementById("#hitPoints").innerHTML = 
		parseInt(document.getElementById("#hitPointsRule").innerHTML) + parseInt(document.getElementById("#ConstitutionMod").innerHTML);
	
}



