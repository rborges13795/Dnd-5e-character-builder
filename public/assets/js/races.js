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
