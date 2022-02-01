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