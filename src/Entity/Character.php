<?php
namespace App\Entity;

class Character
{
    private ?string $race = null;
    private ?string $class = null;
    private ?array $abilityScores = null;
    private ?array $raceProficiencies = null;
    private ?array $classProficiencies = null;
    private ?array $languages = null;
    private $equipment = null;
    private ?array $spells = null;
    private ?array $cantrip = null;

    public function getRace()
    {
        return $this->race;
    }
    
    public function setRace(?string $race)
    {
        $this->race = $race;
        return $this;
    }

    public function getClass()
    {
        return $this->class;
    }
    
    public function setClass(?string $class)
    {
        $this->class = $class;
        return $this;
    }
    
    public function getAbilityScores()
    {
        return $this->abilityScores;
    }
    
    public function setAbilityScores(?array $abilityScores)
    {
        $this->abilityScores = $abilityScores;
        return $this;
    }
    
    public function getAllChosenProficiencies()
    {
        $raceProf = $this->raceProficiencies;
        $classProf= $this->classProficiencies;
        if ($raceProf == null) {
            return [...$classProf];
        }
        if ($classProf == null) {
            return [...$raceProf];
        }
        
        return [...$raceProf, ...$classProf];
    }
    
    public function getRaceProficiencies()
    {
        return $this->raceProficiencies;
    }
    
    public function setRaceProficiencies(?array $raceProficiencies)
    {
        $this->raceProficiencies = $raceProficiencies;
        return $this;
    }
    
    public function getClassProficiencies()
    {
        return $this->classProficiencies;
    }
    
    public function setClassProficiencies(?array $classProficiencies)
    {
        $this->classProficiencies = $classProficiencies;
        return $this;
    }
    
    public function getLanguages()
    {
        return $this->languages;
    }
    
    public function setLanguages(?array $languages)
    {
        $this->languages = $languages;
        return $this;
    }
    
    public function getEquipment()
    {
        return $this->equipment;
    }
    
    public function setEquipment($equipment)
    {
        $this->equipment = $equipment;
        return $this;
    }
    
    public function getCantrips()
    {
        return $this->cantrip;
    }
    
    public function setCantrips(?array $cantrip)
    {
        $this->cantrip = $cantrip;
        return $this;
    }
    
    public function getSpells()
    {
        return $this->spells;
    }
    
    public function setSpells(?array $spells)
    {
        $this->spells = $spells;
        return $this;
    }
}

