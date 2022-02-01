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