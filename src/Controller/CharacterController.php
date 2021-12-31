<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Dnd5eApi\Entity\Races;
use Dnd5eApi\Entity\Classes;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Entity\Character;
use Dnd5eApi\Entity\AbilityScores;

class CharacterController extends AbstractController
{

    const INDEX = 'index.html.twig';

    private $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function chooseRace(): Response
    {
        $session = $this->requestStack->getSession();
        $racesAll = new Races();
        $allRaces = $racesAll->allFirstCharUppercase();
        return $this->render(self::INDEX, [
            'races' => $allRaces
        ]);
    }

    public function raceChosen(string $race): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        $characterCreate = $this->saveRace($race, $character);
        $session->set('character', $characterCreate);
        $racesAll = new Races();
        $race = $racesAll->$race();
        $allRaces = $racesAll->allFirstCharUppercase();

        return $this->render(self::INDEX, [
            'race' => $race,
            'races' => $allRaces
        ]);
    }

    public function chooseClass(Request $request): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        
        if ($character->getRaceProficiencies() == [""] || $character->getRaceProficiencies() == null) {
            $raceProficiencies = $this->saveRaceProficiencies($character, $request);
            $session->set('character', $raceProficiencies);
        }
        
        $classesAll = new Classes();
        $classes = $classesAll->allFirstCharUppercase();

        return $this->render(self::INDEX, [
            'classes' => $classes
        ]);
    }

    // sanitize string received
    public function classChosen(string $class): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        $characterCreate = $this->saveClass($class, $character);
        $session->set('character', $characterCreate);
        $classesAll = new Classes();
        $class = $classesAll->$class();
        $allClasses = $classesAll->allFirstCharUppercase();

        return $this->render(self::INDEX, [
            'class' => $class,
            'classes' => $allClasses
        ]);
    }

    public function chooseAbilityScores(Request $request): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        $characterCreate = $this->getCharacter($character);
        
        if ($character->getClassProficiencies() == [""] || $character->getClassProficiencies() == null) {
            $classProficiencies = $this->saveClassProficiencies($characterCreate, $request);            
            $session->set('character', $classProficiencies);
        }
        
        $abilityScores = [];
        $scores = new AbilityScores();
        foreach ($scores->all() as $score) {
            $abilityScores[] = $scores->$score();
        }

        return $this->render(self::INDEX, [
            'scores' => $abilityScores,
            'chosenClass' => $character->getClass()
        ]);
    }

    public function chooseSpells(string $class, Request $request): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        
        $scores = $this->saveScores($character, $request);
        $session->set('character', $scores);
        
        $classesAll = new Classes();
        $class = $classesAll->$class();

        return $this->render(self::INDEX, [
            'class' => $class,
            'spells' => $class->getSpells(),
            'spellcasting' => $class->getSpellcasting()
        ]);
    }

    /*
     * public function chooseEquipment(string $class): Response
     * {
     * $session = $this->requestStack->getSession();
     * // add class spells to character
     * $classChosen = $class;
     * $classesAll = new Classes();
     * $class = $classesAll->$classChosen();
     *
     * return $this->render(self::INDEX, [
     * 'class' => $class,
     * 'equipment' => $class->getStartingEquipment(),
     * 'equipmentOptions' => $class->getStartingEquipmentOptions()
     * ]);
     * }
     */
    
    public function characterSummary(Request $request): Response
    {
        $session = $this->requestStack->getSession();
        $character = $session->get('character');
        
        if ($character->getCantrips() == [""] || $character->getCantrips() == null) {
            $scores = $this->saveSpells($character, $request);
            $session->set('character', $scores);
        }
        
        $races = new Races();
        $race = $character->getRace();
        $classes = new Classes();
        $class = $character->getClass();
        $charRace = $races->$race();
        $charClass = $classes->$class();
        
        return $this->render(self::INDEX, [
            'character' => $character,
            'charRace' => $charRace,
            'charClass' => $charClass
        ]);
    }
    
    private function getCharacter($character = null): Character
    {
        if ($character == null) {
            $character = new Character();
        }

        return $character;
    }
    
    private function saveRace(string $race, ?Character $character): Character 
    {
        $character = $this->getCharacter($character);
        $character->setRace($race);
        $character->setRaceProficiencies(null);
        
        return $character;
    }
    
    private function saveClass(string $class, ?Character $character): Character
    {
        $character = $this->getCharacter($character);
        $character->setClass($class);
        $character->setClassProficiencies(null);
        $character->setSpells(null);
        $character->setCantrips(null);
        return $character;
    }

    private function saveRaceProficiencies(?Character $character, Request $request): Character
    {
        $raceProficiencies = $request->query->get('raceProficiencies');
        if ($raceProficiencies !== null || $raceProficiencies !== "") {
            $raceProficiencies = str_replace('Skill: ', '', $raceProficiencies);
            $raceProficiencies = explode(',', $raceProficiencies);
            $character->setRaceProficiencies($raceProficiencies);
        }

        $languages = $request->query->get('language');

        if ($languages !== null) {
            $languages = explode(',', $languages);
            $character->setLanguages([
                'Common',
                ...$languages
            ]);
        }

        return $character;
    }

    private function saveClassProficiencies(?Character $character, Request $request): Character
    {
        $classProficiencies = $request->query->get('classProficiencies');
        if ($classProficiencies !== null || $classProficiencies !== "") {
            $classProficiencies = str_replace('Skill: ', '', $classProficiencies);
            $classProficiencies = explode(',', $classProficiencies);
            $character->setClassProficiencies($classProficiencies);
        }
        
        return $character;
    }

    private function saveScores(?Character $character, Request $request): Character
    {
        $str = $request->query->get('str');
        $dex = $request->query->get('dex');
        $con = $request->query->get('con');
        $int = $request->query->get('int');
        $wis = $request->query->get('wis');
        $cha = $request->query->get('cha');
        $abilityScores = [
            'Strength' => ['value' => $str, 'mod' => floor(($str - 10) / 2)],
            'Dexterity' => ['value' => $dex, 'mod' => floor(($dex - 10) / 2)],
            'Constitution' => ['value' => $con, 'mod' => floor(($con - 10) / 2)],
            'Intelligence' => ['value' => $int, 'mod' => floor(($int - 10) / 2)],
            'Wisdom' => ['value' => $wis, 'mod' => floor(($wis - 10) / 2)],
            'Charisma' => ['value' => $cha, 'mod' => floor(($cha - 10) / 2)],
        ];
        $character->setAbilityScores($abilityScores);
        
        return $character;
    }
    
    private function saveSpells(?Character $character, Request $request): Character
    {
        $classSpells = $request->query->get('spells');
        if ($classSpells !== null || $classSpells !== "") {
            $classSpells = explode(',', $classSpells);
            $character->setSpells($classSpells);
        }
        
        $classCantrip = $request->query->get('cantrip');
        if ($classCantrip !== null || $classCantrip !== "") {
            $classCantrip = explode(',', $classCantrip);
            $character->setCantrips($classCantrip);
        }
        
        return $character;
    }
    
    public static function getSubscribedServices(): array
    {}

}

