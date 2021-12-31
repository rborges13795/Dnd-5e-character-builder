//put in another file
let next1 = document.getElementById('#next1');
let next2 = document.getElementById('#next2');
let previous2 = document.getElementById('#previous2');
let page1 = document.getElementById('#page1:races');
let page2 = document.getElementById('#page2:classes');

//add 'previous' button display:none onload

next1.addEventListener('click', () => {
	if (page1.style.display == "block") {
		page1.style.display = "none";
		page2.style.display = "block"		
	}
});

next2.addEventListener('click', () => {
	if (page2.style.display == "block") {
		page2.style.display = "none";		
	}
});

previous2.addEventListener('click', () => {
	if (page2.style.display == "block") {
		page2.style.display = "none";
		page1.style.display = "block";		
	}
});

//page 2 | 

let select2 = document.getElementById('#selectClass');
let barbarian = document.getElementById('#barbarianBody');
let bard = document.getElementById('#bardBody');
let cleric = document.getElementById('#clericBody');
let druid = document.getElementById('#druidBody');
let fighter = document.getElementById('#fighterBody');
let monk = document.getElementById('#monkBody');
let paladin = document.getElementById('#paladinBody');
let ranger = document.getElementById('#rangerBody');
let rogue = document.getElementById('#rogueBody');
let sorcerer = document.getElementById('#sorcererBody');
let warlock = document.getElementById('#warlockBody');
let wizard = document.getElementById('#wizardBody');

select2.addEventListener('change', (classes) => {
	let choice = classes.target.value;
	
	if (choice == 'choose') {
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'barbarian') {
		barbarian.style.display = "block";
		bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'bard') {
		bard.style.display = "block";
		barbarian.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'cleric') {
		cleric.style.display = "block";
		barbarian.style.display = bard.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'druid') {
		druid.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = fighter.style.display = 
		monk.style.display = paladin.style.display = ranger.style.display = rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'fighter') {
		fighter.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		monk.style.display = paladin.style.display = ranger.style.display = rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'monk') {
		monk.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = paladin.style.display = ranger.style.display = rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'paladin') {
		paladin.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = ranger.style.display = rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'ranger') {
		ranger.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = rogue.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'rogue') {
		rogue.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		sorcerer.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'sorcerer') {
		sorcerer.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = warlock.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'warlock') {
		warlock.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = sorcerer.style.display = wizard.style.display = "none";
	}
	
	if (choice == 'wizard') {
		wizard.style.display = "block";
		barbarian.style.display = bard.style.display = cleric.style.display = druid.style.display = 
		fighter.style.display = monk.style.display = paladin.style.display = ranger.style.display = 
		rogue.style.display = sorcerer.style.display = warlock.style.display = "none";
	}
	
});

//page 1 | refactor to a smaller function

let select1 = document.getElementById('#selectRace');
let dragonborn = document.getElementById('#dragonbornBody');
let dwarf = document.getElementById('#dwarfBody');
let elf = document.getElementById('#elfBody');
let gnome = document.getElementById('#gnomeBody');
let halfElf = document.getElementById('#half-elfBody');
let halfOrc = document.getElementById('#half-orcBody');
let halfling = document.getElementById('#halflingBody');
let human = document.getElementById('#humanBody');
let tiefling = document.getElementById('#tieflingBody');

select1.addEventListener('change', (race) => {

	if (race.target.value == 'choose') {
		dwarf.style.display = "none";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		gnome.style.display = "none";
		halfElf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'dwarf') {
		dwarf.style.display = "block";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		gnome.style.display = "none";
		halfElf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'elf') {
		elf.style.display = "block";
		dwarf.style.display = "none";
		dragonborn.style.display = "none";
		gnome.style.display = "none";
		halfElf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'dragonborn') {
		dragonborn.style.display = "block";
		elf.style.display = "none";
		dwarf.style.display = "none";
		gnome.style.display = "none";
		halfElf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'gnome') {
		gnome.style.display = "block";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfElf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'half-elf') {
		halfElf.style.display = "block";
		gnome.style.display = "none";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'half-orc') {
		halfOrc.style.display = "block";
		halfElf.style.display = "none";
		gnome.style.display = "none";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'halfling') {
		halfling.style.display = "block";
		gnome.style.display = "none";
		elf.style.display = "none";
		halfElf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfOrc.style.display = "none";
		human.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'human') {
		human.style.display = "block";
		halfElf.style.display = "none";
		gnome.style.display = "none";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		tiefling.style.display = "none";
	}
	
	if (race.target.value == 'tiefling') {
		tiefling.style.display = "block";
		halfElf.style.display = "none";
		gnome.style.display = "none";
		elf.style.display = "none";
		dragonborn.style.display = "none";
		dwarf.style.display = "none";
		halfOrc.style.display = "none";
		halfling.style.display = "none";
		human.style.display = "none";
	}
});