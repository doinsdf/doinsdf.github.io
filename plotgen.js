var finaltext
var plots = ["Quest", "Pursuit", "Rescue", "Escape", "Revenge", "Underdog",  "Discovery"];
var fantasycharacters = ["explorer", "archer", "assassin", "bookbinder", "princess", "prince", "knight", "peasant", "servant", "city guard", "sailor", "spy", "stonemason", "wandering traveler", "wizard", "mage", "king", "boy", "girl", "thief", "witch", "merchant", "bounty hunter", "dwarf", "queen"];
var fantasyrescues = ["princess", "prince","wizard", "mage", "king", "boy", "girl", "queen","king"];
var fantasyenemies = ["archer", "assassin", "princess", "prince", "knight", "merchant", "witch", "wizard", "warlock", "giant", "troll", "bounty hunter", "half-giant", "king", "queen", "gremlin", "dragon", "wyvern"];
var scificharacters = ["drifter", "gambler", "pilot", "cadet", "engineer", "captain", "police officer", "detective", "smuggler", "explorer", "asteroid miner", "geneticist", "asteroid miner"];
var realficharacters = ["app developer","bartender","blogger","bus driver","business coach","call center","cashier","child care provider","cleaner","coach","coder","comedian","companion for the elderly","construction worker","consultant","continuing education teacher","craft creator","customer service representative","data entry","delivery","dog walker","driveway sealer","driving and courier service","editor","event planner","fitness instructor","flea market seller","freelance writer","futures trader","graphic designer","grounds maintenance","home health worker","host/hostess","hotel front desk clerk","house cleaner","landscaper","lawnmower","lifeguard","mediator","medical billing service","medical transcriber","musical performer","mystery shopper","night school teacher","painter","party planner","personal coach","pet groomer","pet sitter","pet walker","photographer","programmer","proofreader","property manager","real estate agent","restaurant server","retail store worker","search engine evaluator","security guard","senior care provider","snow removal/plowing","social media manager","teaching music lessons","telemarketer","ticket sales","trader","transcription (medical or legal)","translator","travel agent","tutor","video editor","virtual assistant","waitstaff","warehouse worker","web designer","wedding photographer/videographer","wedding planner","weekend landscaper","writer"];
var historicaltimelines = ["Revolutionary War", "Civil war", "World War 1", "World War 2", "Cold War", "Chinese Communist Revolution", "Russian Revolution", "The rise of the Nazis", "Civil rights movement", "Vietnam war"];
var historyfemcharacters = ["nurse", "cook", "maid", "spy", "soldier", "girl", "spy", "teacher",];
var historymalecharacters = ["blacksmith", "candle maker", "apothecarie", "tailor", "wig maker", "gun smith", "gold smith", "farmer", "merchant", "soldier", "general", "lawyer", "boy", "spy", "soldier", "general", "captain", "sailor", "farmer", "surgeon", "spy"];
var trapplaces = ["Slaughterhouse","Abbey","Academy","Ale House","Alley","Aqueduct","Archway","Arena","Asylum","Aviary","Bakery","Bank","Bar","Barn","Bathhouse","Battle Ground","Black Market","Underground Market","Breakwater","Brewery","Bungalow","Burial Mound","Cabin","Castle","Catacomb","Cathedral","Causeway","Cellar","Cemetery","Chateau","Church","Circle of Stones","Circle of Wagons","Circus","Cistern","Citadel","City","Cliff Dwellings","Coach House","Coffeehouse","College","Colosseum","Cottage","Courthouse","Covered Walkway","Crypt","Dam","Den","Dike","Dock (boat, ship, airship)","Dockyard","Dome","Dugout, Pit-House","Dungeon","Embassy","Country","Realm","World","Estate","Fairgrounds","Ferry","Fighting Pit","Flotilla","Forge","Fortress","Gate House","Granary","Grove","Graveyard","Guard Post","City","Hangman's Tree","Harbor","Hedge Maze","Henge","Hideout","Hold","Home","Homestead","Inn","Jail","Keep","Labyrinth","Library","Lighthouse","Lodge","Manor","Marker","Mill","Mine","Monastery","Monolith","Monument","Mosque","Obelisk","Orchard","Orphanage","Outfitters","Outpost","Paddock","Palace","Palisade","Prison","Pyramid","Quarry","School","Sea Gate","Sea Wall","Sewer","Shack","Shelter","Ship Graveyard","Shipwreck","Shop","Shrine","Siege Tower","Tavern","Tea House","Temple","Tomb","Totem Pole","Town","Tree Town","Vault","Village","Vineyard"];
var mysterycharacters = ["detective", ""];
var herotraits = ["a bright", "a charming", "a friendly", "a kind", "a polite", "an antisocial", "a depressed", "a gloomy", "a heartbroken", "a lonely", "a moody"];
var underdogtraits = ["a weak", "a stupid", "an disliked", "a misunderstood", "a hopeless", "a frail", "an unpleasant", "a pessimistic", "a hated", "an unpopular", "a foolish", "an antisocial", "a depressed"];
var antiherotraits = ["an evil", "a disrespectful", "a thoughtless", "a spoiled", "an unhappy", "an arrogant"];
var villaintraits = ["an evil", "a thoughtless", "a powerful", "a corrupt", "an arrogant"];
var twists = ["The thing the protagonist is after is a red herring.","The narrator is not the person we thought they were.","A weakness of a character is actually their greatest strength.","A character’s strength defeats them.","A character’s weakness saves them.","The weakest character is the villain.","The strongest character is the first to die.","The smartest character is the first to be outwitted.","The most skilled character succumbs to the least skilled character. ","The protagonist is living two lives.","The antagonist is living two lives.","The first impression of a character is wrong.","What first seemed like a wrong first impression of a character ends up being right.","A surprising person ends up being the puppet master behind everything.","The conflict the protagonist was going through was a ruse concocted by their friends to help them with confidence or to overcome fear.","The conflict the protagonist was going through was a ruse concocted by former victims of their bullying.","The conflict the protagonist was going through was a practical joke.","The protagonist receiving help actually doesn’t want it.","The protagonist that doesn’t seem to want help actually does.","A gift is really a danger.","What seems like a dangerous object at first is actually a gift that helps the protagonist. ","The dead body isn’t dead.","The informant is actually the mastermind.","The supposed mastermind is actually a red herring.","An otherwise straightforward romantic comedy leads into horror territory.","A gigantic meteor streaks across the sky.","A terrible storm moves in, threatening all.","A stranger enters the story, informing the characters that they are all being watched. ","The goal achieved ends up making things worse.","The love interest is the antagonist.","An object has a special meaning.","A missing child planned their abduction to get back at their abusive parents.","The parent is really the grandparent. ","The narrator is the villain telling the hero’s story.  ","The narrator is the hero telling the villain’s story.","Your character is a superhero that lost their powers.","The opening hero is killed within the first act. ","The villain is a twin of the hero.","The hero is one of a triplet trio. ","Two villains are two of a triplet trio — the hero is the third.","The protagonist is both the hero and the villain. ","The supportive friend is the killer.","It is revealed that the hero has an unheroic past.","The villain is in love with the hero.   ","A supporting character is an intruder working for the villain.","The hero is related to the villain.","The villain is an evil clone of the hero.","The villain is revealed to have been right under the hero’s nose the whole time.","The strength of a character is actually their greatest weakness.","The hero must die to save everyone else.","The villain has a change of heart but has driven the hero too far over the edge and must stop them.  ","The villain ends up being revealed as the true hero.","The hero ends up being revealed as the true villain.","The hero and villain each live dual lives — one where they are the hero and another where they are the villain."];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomname() {
  var vowel = ['ai', 'ee', 'oa', 'ea', 'ou', 'oi', 'ie', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'à', 'ä', 'ó', 'õ', 'ê', 'ï', 'í', 'ù', 'û'];
  var vnoe = ['ai', 'ee', 'oa', 'ea', 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'à', 'ä', 'ó', 'õ', 'ï', 'í', 'ù', 'û'];
  var conso_be = ['kw', 'bl', 'br', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sl', 'sn', 'sw', 'tr', 'tw', 'wh', 'wr', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr'];
  var conso_bo = ['sh','sm', 'sk', 'sph', 'th', 'st', 'sp', 'ch'];
  var conso_en = ['ng', 'nd', 'rt', 'lp', 'ck', 'rb', 'lt', 'nk', 'lk', 'ff', 'll', 'ds', 'cs', 'tt'];
  var ven = ['aw', 'ay', 'ow', 'ia'];
  var conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var fantasyname = '';
  var fantasynametype = getRandomInt(7);
  if (fantasynametype == 0) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + ven[getRandomInt(ven.length)];
  } else if (fantasynametype == 1) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)];
  } else if (fantasynametype == 2) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)];
  } else if (fantasynametype == 3) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 4) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 5) {
    fantasyname = vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 6) {
    fantasyname = vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)]+conso_bo[getRandomInt(conso_bo.length)];
  } else if (fantasynametype == 7) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + vowel[getRandomInt(vowel.length)];
  }
  fantasyname = fantasyname.toString().toLowerCase();
  fantasyname = fantasyname.charAt(0).toUpperCase() + fantasyname.slice(1);
  return fantasyname
}
function aoran(i) {
	var a = false
	var vowels = ['a', 'e', 'i', 'o', 'u']
	if (vowels.includes(i[0])) {
	}
	else {
		a = true
	}
	if (a == true) {
		i = "a "+i
	} else if (a == false) {
		i = "an "+i
	}
	return(i)
}

function fantasy() {
	var hero = fantasycharacters[getRandomInt(fantasycharacters.length)]
	var friend = fantasycharacters[getRandomInt(fantasycharacters.length)]
	var enemy = fantasyenemies[getRandomInt(fantasyenemies.length)]
	var plot = plots[getRandomInt(plots.length)]
	var pron = ""
	var pos = ""
	var obj = ""
	var oobj = ""
	var ppos = ""
	var genders = [0,1]
	var gender
	var undertraits = underdogtraits[getRandomInt(underdogtraits.length)]
	undertraits[0] = undertraits[0].toUpperCase()
	var trait = herotraits[getRandomInt(herotraits.length)].toString()
	trait[0] = trait[0].toUpperCase()
  var boyheros = ["prince", "boy", "king", "wizard"]
  var girlheros = ["princess", "girl", "queen", "witch"]
  if (boyheros.includes(hero)) {
    gender = 1
  } else if (girlheros.includes(hero)) {
		gender = 0
  } else {
		gender = genders[getRandomInt(genders.length)]
  }
	if (gender == 0) {
		pron = "she"
		pos = "her"
		obj = "herself"
		oobj = "her"
		ppos = "hers"
  }
	else if (gender == 1) {
		pron = "he"
		pos = "his"
		obj = "himself"
		oobj = "him"
		ppos = "his"
  }
	if (plot == "Quest") {
		var holygrail = randomname()
		
		var reasonforgrail = [pron + " believes will give "+oobj+" power", pron + " believes is rightfully " + ppos, pron + " believes will help "+oobj+" accomplish "+pos+" goal", pron + " believes will help win a war", pron + " believes will save "+pos+" land"][getRandomInt(5)];
		var aftergrail = [aoran(trapplaces[getRandomInt(trapplaces.length)].toLowerCase())+" "+pron+" has heard about in fables", "a place of safety", "a place of rest", aoran(trapplaces[getRandomInt(trapplaces.length)].toLowerCase())+" where "+pron+" thinks "+pron+" will find answers", aoran(trapplaces[getRandomInt(trapplaces.length)].toLowerCase())+" that has deep connections to "+pos+" family", "a place that simply being in would make "+oobj+" rich", "a place "+pron+" can go to escape evil", pos+" mother", pos+" father", pos+" mother", pos+" sister", pos+" brother", pos+" friend", pos+" love interest", "a wise man that "+pron+" think has answers", ("a sword"+" "+reasonforgrail), ("a helmet"+" "+reasonforgrail), ("a shield"+" "+reasonforgrail), ("a staff"+" "+reasonforgrail), ("a club"+" "+reasonforgrail), ("a spear"+" "+reasonforgrail), ("a trident"+" "+reasonforgrail), ("a bow"+" "+reasonforgrail), aoran(trapplaces[getRandomInt(trapplaces.length)].toLowerCase())]
		var enemytrans = [" Guarding it is ", " Chasing "+oobj+" is ", " Someone else is after it too: ", " Standing in "+pos+" way is "][getRandomInt(4)];
		finaltext = (trait + " " + hero + " named " + randomname() + " embarks across the land on a search for " + holygrail + ", " + aftergrail[getRandomInt(aftergrail.length)] + "." + enemytrans + randomname() + ", " + villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)] + ".")
  } else if (plot == "Pursuit") {
		var chasedorby = [1,2][getRandomInt(2)]
		var villainexplain = ["who has already killed "+pos+" parents", "who has already killed "+pos+" sister", "who has already killed "+pos+" brother", "who has already killed "+pos+" father", "who has already killed "+pos+" mother", "who has already killed "+pos+" family", "who is after "+pos+" riches", "who is after "+pos+" knowledge", "who is after a secret only "+pron+" knows", "who is after an object "+pos+" possesses"]
    if (chasedorby == 1) {
      finaltext = trait + " " + hero + " named " + randomname() + " is being hunted by "+randomname() + ", " + villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)] + " " + villainexplain[getRandomInt(villainexplain.length)] + "."
    } else if (chasedorby == 2) {
      finaltext = trait + " " + hero + " named " + randomname() + " is determined to catch "+randomname() + ", " + villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)] + " " + villainexplain[getRandomInt(villainexplain.length)] + "."
    }
  } else if (plot == "Revenge") {
		var findorkill = ["find", "kill"][getRandomInt(2)]
		var whoretheyfinding = [villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)], pos+" mother", pos+" father", pos+" sister", pos+" brother", "a man "+pron+" was once friends with", "a woman "+pron+" was once friends with"][getRandomInt(7)];
		var reasonforrevenge = ["who has killed someone dear to "+oobj, "who has taken something of great value from "+oobj, "who has stolen gold from "+oobj][getRandomInt(3)];
		finaltext = trait + " " + hero + " named " + randomname() + " must "+ findorkill + " " + randomname() + ", " + whoretheyfinding + ", " + reasonforrevenge +"."
  } else if (plot == "Rescue") {
    var findorrescue = ["find", "find and rescue"][getRandomInt(2)]
    var rescue = fantasyrescues[getRandomInt(fantasyrescues.length)]
    var place = trapplaces[getRandomInt(trapplaces.length)]
    var trapadj = ["cursed", "haunted", "guarded by "+randomname()+", "+villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)]][getRandomInt(3)]
    if (trapadj == "cursed") {
      finaltext = trait + " " + hero + " named " + randomname() + " must "+findorrescue+" "+randomname()+", a "+rescue+" who has sent "+oobj+" a message seeking "+pos+" help. The "+rescue+" is trapped in a "+trapadj+" "+place.toLowerCase()+"."
    }
    if (trapadj == "haunted") {
      finaltext = trait + " " + hero + " named " + randomname() + " must "+findorrescue+" "+randomname()+", a "+rescue+" who has sent "+oobj+" a message seeking "+pos+" help. The "+rescue+" is trapped in a "+trapadj+" "+place.toLowerCase()+"."
    } else {
      if (trapadj != "cursed") {
        finaltext = trait + " " + hero + " named " + randomname() + " must "+findorrescue+" "+randomname()+", a "+rescue+" who has sent "+oobj+" a message seeking "+pos+" help. The "+rescue+" is trapped in a "+place.toLowerCase()+" that is "+trapadj+"."
      }
    }
  } else if (plot == "Escape") {
		var trapadj = randomname()+", "+villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)][getRandomInt(3)]
		var trapplaces = ["Slaughterhouse","Abbey","Academy","Ale House","Alley","Aqueduct","Archway","Arena","Asylum","Aviary","Bakery","Bank","Bar","Barn","Bathhouse","Battle Ground","Black Market","Underground Market","Breakwater","Brewery","Bungalow","Burial Mound","Cabin","Castle","Catacomb","Cathedral","Causeway","Cellar","Cemetery","Chateau","Church","Circle of Stones","Circle of Wagons","Circus","Cistern","Citadel","City","Cliff Dwellings","Coach House","Coffeehouse","College","Colosseum","Cottage","Courthouse","Covered Walkway","Crypt","Dam","Den","Dike","Dock (boat, ship, airship)","Dockyard","Dome","Dugout, Pit-House","Dungeon","Embassy","Country","Realm","World","Estate","Fairgrounds","Ferry","Fighting Pit","Flotilla","Forge","Fortress","Gate House","Granary","Grove","Graveyard","Guard Post","City","Hangman's Tree","Harbor","Hedge Maze","Henge","Hideout","Hold","Home","Homestead","Inn","Jail","Keep","Labyrinth","Library","Lighthouse","Lodge","Manor","Marker","Mill","Mine","Monastery","Monolith","Monument","Mosque","Obelisk","Orchard","Orphanage","Outfitters","Outpost","Paddock","Palace","Palisade","Prison","Pyramid","Quarry","School","Sea Gate","Sea Wall","Sewer","Shack","Shelter","Ship Graveyard","Shipwreck","Shop","Shrine","Siege Tower","Tavern","Tea House","Temple","Tomb","Totem Pole","Town","Tree Town","Vault","Village","Vineyard"]
		var reasonsfortrap = ["where "+pron+" has lived "+pos+" entire life", "where "+pron+" has lived for longer than "+pron+" can remember", "where "+pron+" has been brought because of a crime "+pron+" committed", "where "+pron+" has been trapped because of knowledge "+pron+" knew", "where "+pron+" has been trapped for reasons "+pron+" doesn't know"]
		finaltext = trait + " " + hero + " named " + randomname() + " must escape a " + ["cursed", "haunted", "magical"][getRandomInt(3)] + " " + trapplaces[getRandomInt(trapplaces.length)].toLowerCase() +" "+ reasonsfortrap[getRandomInt(reasonsfortrap.length)] + "."
  } else if (plot == "Underdog") {
		var villainorbetterhero = [0,1][getRandomInt(2)]
		var goal = ["save their village", "win their love interest, who is with someone else", "win their love interest back", "lead an army", "lead their village", "save their kingdom"][getRandomInt(6)]
		if (villainorbetterhero == 0) {
			finaltext = undertraits+" "+ hero + " named "+randomname()+" must "+goal+" but fails at every turn. Standing in their way is " + randomname()+", "+villaintraits[getRandomInt(villaintraits.length)] + " " + fantasyenemies[getRandomInt(fantasyenemies.length)] + "."
    } else {
			finaltext = undertraits +" "+ hero + " named "+randomname()+ " must "+goal+" but fails at every turn. There to do it better is " + randomname() +", "+herotraits[getRandomInt(herotraits.length)] + " " + fantasycharacters[getRandomInt(fantasycharacters.length)] + "."
    }
  } else if (plot == "Discovery") {
		var thing = ["knowledge", "a magic vase", "a magic lamp", "a magic sword", "a magic dagger", "a secret", "a helmet", "a sheild", "a potion", "information"]
		finaltext = trait + " " + hero + " named " + randomname() + " discovers " + thing[getRandomInt(thing.length)] + ["capable "]
  }
  document.getElementById("textfield").innerHTML = finaltext
}