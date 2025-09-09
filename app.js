// QuantumAI 2025 - Complete Application JavaScript

// Application Data
const appData = {
  vocabularyQuestions: {
    baby: [
      {"id": 1, "word": "cat", "definition": "A small furry animal that says meow", "correct": "cat", "options": ["dog", "cat", "bird", "fish"]},
      {"id": 2, "word": "red", "definition": "The color of an apple or strawberry", "correct": "red", "options": ["blue", "green", "red", "yellow"]},
      {"id": 3, "word": "big", "definition": "Large in size, opposite of small", "correct": "big", "options": ["big", "tiny", "short", "thin"]},
      {"id": 4, "word": "run", "definition": "To move quickly with your legs", "correct": "run", "options": ["walk", "run", "sit", "sleep"]},
      {"id": 5, "word": "happy", "definition": "Feeling joyful and cheerful", "correct": "happy", "options": ["sad", "angry", "happy", "tired"]},
      {"id": 6, "word": "book", "definition": "Object with pages that you read", "correct": "book", "options": ["book", "car", "tree", "ball"]},
      {"id": 7, "word": "water", "definition": "Clear liquid that you drink", "correct": "water", "options": ["milk", "juice", "water", "tea"]},
      {"id": 8, "word": "sun", "definition": "Bright star that lights up the day", "correct": "sun", "options": ["moon", "sun", "cloud", "rain"]},
      {"id": 9, "word": "house", "definition": "Building where people live", "correct": "house", "options": ["car", "house", "tree", "rock"]},
      {"id": 10, "word": "blue", "definition": "Color of the sky on a clear day", "correct": "blue", "options": ["red", "green", "blue", "purple"]},
      {"id": 11, "word": "dog", "definition": "Friendly pet that barks and wags tail", "correct": "dog", "options": ["cat", "bird", "dog", "fish"]},
      {"id": 12, "word": "small", "definition": "Little in size, opposite of big", "correct": "small", "options": ["huge", "small", "tall", "wide"]},
      {"id": 13, "word": "eat", "definition": "To put food in your mouth and chew", "correct": "eat", "options": ["sleep", "run", "eat", "jump"]},
      {"id": 14, "word": "cold", "definition": "Low temperature, opposite of hot", "correct": "cold", "options": ["warm", "hot", "cold", "cool"]},
      {"id": 15, "word": "car", "definition": "Vehicle with four wheels for transport", "correct": "car", "options": ["bike", "car", "boat", "plane"]},
      {"id": 16, "word": "green", "definition": "Color of grass and leaves", "correct": "green", "options": ["red", "blue", "green", "yellow"]},
      {"id": 17, "word": "bird", "definition": "Animal with wings that can fly", "correct": "bird", "options": ["dog", "cat", "bird", "fish"]},
      {"id": 18, "word": "hot", "definition": "High temperature, opposite of cold", "correct": "hot", "options": ["cold", "cool", "warm", "hot"]},
      {"id": 19, "word": "tree", "definition": "Large plant with trunk and branches", "correct": "tree", "options": ["flower", "grass", "tree", "bush"]},
      {"id": 20, "word": "milk", "definition": "White liquid that comes from cows", "correct": "milk", "options": ["water", "juice", "milk", "soda"]},
      {"id": 21, "word": "ball", "definition": "Round object used in games", "correct": "ball", "options": ["box", "ball", "cube", "stick"]},
      {"id": 22, "word": "fish", "definition": "Animal that lives and swims in water", "correct": "fish", "options": ["bird", "dog", "cat", "fish"]},
      {"id": 23, "word": "moon", "definition": "Bright object seen in the night sky", "correct": "moon", "options": ["sun", "star", "moon", "cloud"]},
      {"id": 24, "word": "hand", "definition": "Part of your body with five fingers", "correct": "hand", "options": ["foot", "head", "hand", "leg"]},
      {"id": 25, "word": "chair", "definition": "Furniture you sit on", "correct": "chair", "options": ["table", "bed", "chair", "door"]},
      {"id": 26, "word": "yellow", "definition": "Color of the sun and bananas", "correct": "yellow", "options": ["red", "blue", "green", "yellow"]},
      {"id": 27, "word": "shoe", "definition": "What you wear on your feet", "correct": "shoe", "options": ["hat", "shirt", "shoe", "sock"]},
      {"id": 28, "word": "rain", "definition": "Water that falls from clouds", "correct": "rain", "options": ["snow", "sun", "wind", "rain"]},
      {"id": 29, "word": "door", "definition": "What you open to enter a room", "correct": "door", "options": ["window", "wall", "door", "floor"]},
      {"id": 30, "word": "apple", "definition": "Red or green fruit that grows on trees", "correct": "apple", "options": ["orange", "banana", "apple", "grape"]}
    ],
    adult: [
      {"id": 31, "word": "magnificent", "definition": "Extremely beautiful or impressive", "correct": "magnificent", "options": ["ugly", "magnificent", "simple", "boring"]},
      {"id": 32, "word": "analyze", "definition": "To examine something in detail", "correct": "analyze", "options": ["ignore", "analyze", "destroy", "copy"]},
      {"id": 33, "word": "perspective", "definition": "A particular way of viewing things", "correct": "perspective", "options": ["perspective", "confusion", "ignorance", "blindness"]},
      {"id": 34, "word": "innovative", "definition": "Featuring new methods or ideas", "correct": "innovative", "options": ["traditional", "boring", "innovative", "outdated"]},
      {"id": 35, "word": "substantial", "definition": "Of considerable importance or size", "correct": "substantial", "options": ["minor", "substantial", "insignificant", "tiny"]},
      {"id": 36, "word": "elaborate", "definition": "Complex and detailed", "correct": "elaborate", "options": ["simple", "basic", "elaborate", "plain"]},
      {"id": 37, "word": "circumstances", "definition": "Conditions that affect a situation", "correct": "circumstances", "options": ["circumstances", "solutions", "problems", "answers"]},
      {"id": 38, "word": "efficient", "definition": "Working in a well-organized way", "correct": "efficient", "options": ["wasteful", "slow", "efficient", "careless"]},
      {"id": 39, "word": "contemporary", "definition": "Belonging to the present time", "correct": "contemporary", "options": ["ancient", "old", "contemporary", "prehistoric"]},
      {"id": 40, "word": "fundamental", "definition": "Essential or basic", "correct": "fundamental", "options": ["optional", "secondary", "fundamental", "unnecessary"]},
      {"id": 41, "word": "diverse", "definition": "Showing variety or differences", "correct": "diverse", "options": ["uniform", "same", "diverse", "identical"]},
      {"id": 42, "word": "authentic", "definition": "Genuine or real", "correct": "authentic", "options": ["fake", "false", "authentic", "artificial"]},
      {"id": 43, "word": "comprehensive", "definition": "Complete and including everything", "correct": "comprehensive", "options": ["partial", "incomplete", "comprehensive", "limited"]},
      {"id": 44, "word": "significant", "definition": "Important or meaningful", "correct": "significant", "options": ["trivial", "minor", "significant", "unimportant"]},
      {"id": 45, "word": "consistent", "definition": "Acting in the same way over time", "correct": "consistent", "options": ["erratic", "inconsistent", "consistent", "unpredictable"]},
      {"id": 46, "word": "adequate", "definition": "Satisfactory or acceptable", "correct": "adequate", "options": ["insufficient", "poor", "adequate", "lacking"]},
      {"id": 47, "word": "precise", "definition": "Exact and accurate", "correct": "precise", "options": ["vague", "approximate", "precise", "unclear"]},
      {"id": 48, "word": "dynamic", "definition": "Full of energy and activity", "correct": "dynamic", "options": ["static", "dull", "dynamic", "boring"]},
      {"id": 49, "word": "versatile", "definition": "Able to adapt to many functions", "correct": "versatile", "options": ["inflexible", "rigid", "versatile", "limited"]},
      {"id": 50, "word": "prominent", "definition": "Important or well-known", "correct": "prominent", "options": ["obscure", "unknown", "prominent", "hidden"]},
      {"id": 51, "word": "integrate", "definition": "To combine into a whole", "correct": "integrate", "options": ["separate", "divide", "integrate", "isolate"]},
      {"id": 52, "word": "optimize", "definition": "To make as effective as possible", "correct": "optimize", "options": ["worsen", "neglect", "optimize", "ignore"]},
      {"id": 53, "word": "strategic", "definition": "Relating to long-term planning", "correct": "strategic", "options": ["tactical", "immediate", "strategic", "spontaneous"]},
      {"id": 54, "word": "facilitate", "definition": "To make easier or help achieve", "correct": "facilitate", "options": ["hinder", "prevent", "facilitate", "obstruct"]},
      {"id": 55, "word": "sustainable", "definition": "Able to continue over time", "correct": "sustainable", "options": ["temporary", "brief", "sustainable", "short-term"]},
      {"id": 56, "word": "objective", "definition": "Not influenced by personal opinions", "correct": "objective", "options": ["subjective", "biased", "objective", "personal"]},
      {"id": 57, "word": "articulate", "definition": "To express clearly", "correct": "articulate", "options": ["mumble", "confuse", "articulate", "garble"]},
      {"id": 58, "word": "coherent", "definition": "Logical and well-organized", "correct": "coherent", "options": ["confused", "chaotic", "coherent", "disorganized"]},
      {"id": 59, "word": "cultivate", "definition": "To develop or improve", "correct": "cultivate", "options": ["neglect", "abandon", "cultivate", "destroy"]},
      {"id": 60, "word": "initiative", "definition": "The ability to act independently", "correct": "initiative", "options": ["passivity", "dependence", "initiative", "hesitation"]}
    ],
    boss: [
      {"id": 61, "word": "perseverance", "definition": "Persistence despite difficulties", "correct": "perseverance", "options": ["perseverance", "surrender", "giving-up", "quitting"]},
      {"id": 62, "word": "ameliorate", "definition": "To make better or improve", "correct": "ameliorate", "options": ["deteriorate", "ameliorate", "worsen", "damage"]},
      {"id": 63, "word": "ubiquitous", "definition": "Present everywhere simultaneously", "correct": "ubiquitous", "options": ["rare", "ubiquitous", "scarce", "absent"]},
      {"id": 64, "word": "paradigm", "definition": "A typical example or model", "correct": "paradigm", "options": ["paradigm", "exception", "anomaly", "deviation"]},
      {"id": 65, "word": "catalyst", "definition": "Something that causes change", "correct": "catalyst", "options": ["obstacle", "catalyst", "barrier", "hindrance"]},
      {"id": 66, "word": "ephemeral", "definition": "Lasting for a very short time", "correct": "ephemeral", "options": ["eternal", "permanent", "ephemeral", "lasting"]},
      {"id": 67, "word": "meticulous", "definition": "Extremely careful and precise", "correct": "meticulous", "options": ["careless", "sloppy", "meticulous", "reckless"]},
      {"id": 68, "word": "quintessential", "definition": "Most perfect example of a quality", "correct": "quintessential", "options": ["atypical", "unusual", "quintessential", "abnormal"]},
      {"id": 69, "word": "predilection", "definition": "A preference or special liking", "correct": "predilection", "options": ["aversion", "dislike", "predilection", "hatred"]},
      {"id": 70, "word": "aesthetic", "definition": "Concerned with beauty or art", "correct": "aesthetic", "options": ["practical", "functional", "aesthetic", "utilitarian"]},
      {"id": 71, "word": "nomenclature", "definition": "System of names used in science", "correct": "nomenclature", "options": ["nomenclature", "confusion", "disorder", "chaos"]},
      {"id": 72, "word": "juxtaposition", "definition": "Placing things side by side", "correct": "juxtaposition", "options": ["separation", "isolation", "juxtaposition", "distance"]},
      {"id": 73, "word": "serendipity", "definition": "Pleasant surprise or lucky discovery", "correct": "serendipity", "options": ["misfortune", "serendipity", "bad-luck", "disaster"]},
      {"id": 74, "word": "sophisticated", "definition": "Complex or refined", "correct": "sophisticated", "options": ["simple", "basic", "sophisticated", "primitive"]},
      {"id": 75, "word": "ambiguous", "definition": "Having more than one meaning", "correct": "ambiguous", "options": ["clear", "obvious", "ambiguous", "definite"]},
      {"id": 76, "word": "synthesize", "definition": "To combine elements into whole", "correct": "synthesize", "options": ["separate", "divide", "synthesize", "fragment"]},
      {"id": 77, "word": "unprecedented", "definition": "Never done before", "correct": "unprecedented", "options": ["common", "usual", "unprecedented", "typical"]},
      {"id": 78, "word": "intrinsic", "definition": "Belonging naturally to something", "correct": "intrinsic", "options": ["external", "foreign", "intrinsic", "artificial"]},
      {"id": 79, "word": "circumspect", "definition": "Careful to consider circumstances", "correct": "circumspect", "options": ["rash", "careless", "circumspect", "impulsive"]},
      {"id": 80, "word": "discernment", "definition": "Good judgment in understanding", "correct": "discernment", "options": ["confusion", "ignorance", "discernment", "blindness"]},
      {"id": 81, "word": "exacerbate", "definition": "To make a problem worse", "correct": "exacerbate", "options": ["improve", "help", "exacerbate", "solve"]},
      {"id": 82, "word": "magnanimous", "definition": "Generous in forgiving enemies", "correct": "magnanimous", "options": ["petty", "vindictive", "magnanimous", "spiteful"]},
      {"id": 83, "word": "pragmatic", "definition": "Dealing with things practically", "correct": "pragmatic", "options": ["idealistic", "impractical", "pragmatic", "unrealistic"]},
      {"id": 84, "word": "recalcitrant", "definition": "Stubbornly refusing to obey", "correct": "recalcitrant", "options": ["obedient", "compliant", "recalcitrant", "submissive"]},
      {"id": 85, "word": "vicarious", "definition": "Experienced through another person", "correct": "vicarious", "options": ["direct", "personal", "vicarious", "firsthand"]},
      {"id": 86, "word": "zenith", "definition": "The highest point reached", "correct": "zenith", "options": ["nadir", "bottom", "zenith", "lowest"]},
      {"id": 87, "word": "ostensible", "definition": "Appearing to be true but not necessarily", "correct": "ostensible", "options": ["genuine", "real", "ostensible", "authentic"]},
      {"id": 88, "word": "propensity", "definition": "Natural tendency to behave", "correct": "propensity", "options": ["aversion", "resistance", "propensity", "opposition"]},
      {"id": 89, "word": "sagacious", "definition": "Having keen mental discernment", "correct": "sagacious", "options": ["foolish", "unwise", "sagacious", "ignorant"]},
      {"id": 90, "word": "tremulous", "definition": "Shaking or quivering slightly", "correct": "tremulous", "options": ["steady", "stable", "tremulous", "firm"]}
    ]
  },
  grammarPuzzles: {
    baby: [
      {"id": 1, "sentence": "The cat is sleeping", "pieces": ["The", "cat", "is", "sleeping"], "correctOrder": ["The", "cat", "is", "sleeping"]},
      {"id": 2, "sentence": "I like pizza", "pieces": ["I", "like", "pizza"], "correctOrder": ["I", "like", "pizza"]},
      {"id": 3, "sentence": "Birds can fly", "pieces": ["Birds", "can", "fly"], "correctOrder": ["Birds", "can", "fly"]},
      {"id": 4, "sentence": "The dog is running", "pieces": ["The", "dog", "is", "running"], "correctOrder": ["The", "dog", "is", "running"]},
      {"id": 5, "sentence": "She has a book", "pieces": ["She", "has", "a", "book"], "correctOrder": ["She", "has", "a", "book"]},
      {"id": 6, "sentence": "We are happy", "pieces": ["We", "are", "happy"], "correctOrder": ["We", "are", "happy"]},
      {"id": 7, "sentence": "The sun is bright", "pieces": ["The", "sun", "is", "bright"], "correctOrder": ["The", "sun", "is", "bright"]},
      {"id": 8, "sentence": "I can swim", "pieces": ["I", "can", "swim"], "correctOrder": ["I", "can", "swim"]},
      {"id": 9, "sentence": "The ball is red", "pieces": ["The", "ball", "is", "red"], "correctOrder": ["The", "ball", "is", "red"]},
      {"id": 10, "sentence": "They like cookies", "pieces": ["They", "like", "cookies"], "correctOrder": ["They", "like", "cookies"]},
      {"id": 11, "sentence": "My mom is kind", "pieces": ["My", "mom", "is", "kind"], "correctOrder": ["My", "mom", "is", "kind"]},
      {"id": 12, "sentence": "The tree is tall", "pieces": ["The", "tree", "is", "tall"], "correctOrder": ["The", "tree", "is", "tall"]},
      {"id": 13, "sentence": "I have two hands", "pieces": ["I", "have", "two", "hands"], "correctOrder": ["I", "have", "two", "hands"]},
      {"id": 14, "sentence": "Fish live in water", "pieces": ["Fish", "live", "in", "water"], "correctOrder": ["Fish", "live", "in", "water"]},
      {"id": 15, "sentence": "The car is fast", "pieces": ["The", "car", "is", "fast"], "correctOrder": ["The", "car", "is", "fast"]},
      {"id": 16, "sentence": "I eat breakfast", "pieces": ["I", "eat", "breakfast"], "correctOrder": ["I", "eat", "breakfast"]},
      {"id": 17, "sentence": "The house is big", "pieces": ["The", "house", "is", "big"], "correctOrder": ["The", "house", "is", "big"]},
      {"id": 18, "sentence": "She drinks milk", "pieces": ["She", "drinks", "milk"], "correctOrder": ["She", "drinks", "milk"]},
      {"id": 19, "sentence": "The flower smells good", "pieces": ["The", "flower", "smells", "good"], "correctOrder": ["The", "flower", "smells", "good"]},
      {"id": 20, "sentence": "We go to school", "pieces": ["We", "go", "to", "school"], "correctOrder": ["We", "go", "to", "school"]},
      {"id": 21, "sentence": "The moon is round", "pieces": ["The", "moon", "is", "round"], "correctOrder": ["The", "moon", "is", "round"]},
      {"id": 22, "sentence": "I wear shoes", "pieces": ["I", "wear", "shoes"], "correctOrder": ["I", "wear", "shoes"]},
      {"id": 23, "sentence": "The baby is cute", "pieces": ["The", "baby", "is", "cute"], "correctOrder": ["The", "baby", "is", "cute"]},
      {"id": 24, "sentence": "Birds sing songs", "pieces": ["Birds", "sing", "songs"], "correctOrder": ["Birds", "sing", "songs"]},
      {"id": 25, "sentence": "I play games", "pieces": ["I", "play", "games"], "correctOrder": ["I", "play", "games"]},
      {"id": 26, "sentence": "The water is cold", "pieces": ["The", "water", "is", "cold"], "correctOrder": ["The", "water", "is", "cold"]},
      {"id": 27, "sentence": "She has long hair", "pieces": ["She", "has", "long", "hair"], "correctOrder": ["She", "has", "long", "hair"]},
      {"id": 28, "sentence": "The apple is sweet", "pieces": ["The", "apple", "is", "sweet"], "correctOrder": ["The", "apple", "is", "sweet"]},
      {"id": 29, "sentence": "We watch movies", "pieces": ["We", "watch", "movies"], "correctOrder": ["We", "watch", "movies"]},
      {"id": 30, "sentence": "The door is open", "pieces": ["The", "door", "is", "open"], "correctOrder": ["The", "door", "is", "open"]}
    ],
    adult: [
      {"id": 31, "sentence": "She has been studying English for three years", "pieces": ["She", "has been", "studying", "English", "for", "three years"], "correctOrder": ["She", "has been", "studying", "English", "for", "three years"]},
      {"id": 32, "sentence": "If I had known earlier, I would have helped", "pieces": ["If", "I had known", "earlier,", "I would have", "helped"], "correctOrder": ["If", "I had known", "earlier,", "I would have", "helped"]},
      {"id": 33, "sentence": "The project that we completed was very successful", "pieces": ["The project", "that", "we completed", "was", "very successful"], "correctOrder": ["The project", "that", "we completed", "was", "very successful"]},
      {"id": 34, "sentence": "Having finished her work, she went home", "pieces": ["Having finished", "her work,", "she", "went home"], "correctOrder": ["Having finished", "her work,", "she", "went home"]},
      {"id": 35, "sentence": "The book which I borrowed is fascinating", "pieces": ["The book", "which", "I borrowed", "is", "fascinating"], "correctOrder": ["The book", "which", "I borrowed", "is", "fascinating"]},
      {"id": 36, "sentence": "Although it was raining, we continued our journey", "pieces": ["Although", "it was raining,", "we continued", "our journey"], "correctOrder": ["Although", "it was raining,", "we continued", "our journey"]},
      {"id": 37, "sentence": "The manager expects all employees to arrive on time", "pieces": ["The manager", "expects", "all employees", "to arrive", "on time"], "correctOrder": ["The manager", "expects", "all employees", "to arrive", "on time"]},
      {"id": 38, "sentence": "Before making a decision, consider all the options", "pieces": ["Before", "making a decision,", "consider", "all the options"], "correctOrder": ["Before", "making a decision,", "consider", "all the options"]},
      {"id": 39, "sentence": "The solution we proposed has been implemented successfully", "pieces": ["The solution", "we proposed", "has been", "implemented", "successfully"], "correctOrder": ["The solution", "we proposed", "has been", "implemented", "successfully"]},
      {"id": 40, "sentence": "Neither the students nor the teacher understood the problem", "pieces": ["Neither", "the students", "nor", "the teacher", "understood", "the problem"], "correctOrder": ["Neither", "the students", "nor", "the teacher", "understood", "the problem"]},
      {"id": 41, "sentence": "The conference will be held unless there are complications", "pieces": ["The conference", "will be held", "unless", "there are", "complications"], "correctOrder": ["The conference", "will be held", "unless", "there are", "complications"]},
      {"id": 42, "sentence": "By the time you arrive, we will have finished", "pieces": ["By the time", "you arrive,", "we will have", "finished"], "correctOrder": ["By the time", "you arrive,", "we will have", "finished"]},
      {"id": 43, "sentence": "The research indicates that further investigation is needed", "pieces": ["The research", "indicates that", "further investigation", "is needed"], "correctOrder": ["The research", "indicates that", "further investigation", "is needed"]},
      {"id": 44, "sentence": "Despite facing many challenges, they achieved their goals", "pieces": ["Despite", "facing many challenges,", "they achieved", "their goals"], "correctOrder": ["Despite", "facing many challenges,", "they achieved", "their goals"]},
      {"id": 45, "sentence": "The method by which we solved this was innovative", "pieces": ["The method", "by which", "we solved this", "was", "innovative"], "correctOrder": ["The method", "by which", "we solved this", "was", "innovative"]},
      {"id": 46, "sentence": "While others hesitated, she took immediate action", "pieces": ["While", "others hesitated,", "she took", "immediate action"], "correctOrder": ["While", "others hesitated,", "she took", "immediate action"]},
      {"id": 47, "sentence": "The documents should be reviewed before the meeting", "pieces": ["The documents", "should be reviewed", "before", "the meeting"], "correctOrder": ["The documents", "should be reviewed", "before", "the meeting"]},
      {"id": 48, "sentence": "Having considered all factors, we made our decision", "pieces": ["Having considered", "all factors,", "we made", "our decision"], "correctOrder": ["Having considered", "all factors,", "we made", "our decision"]},
      {"id": 49, "sentence": "The team that performs best will receive recognition", "pieces": ["The team", "that", "performs best", "will receive", "recognition"], "correctOrder": ["The team", "that", "performs best", "will receive", "recognition"]},
      {"id": 50, "sentence": "Unless we act quickly, the opportunity will be lost", "pieces": ["Unless", "we act quickly,", "the opportunity", "will be lost"], "correctOrder": ["Unless", "we act quickly,", "the opportunity", "will be lost"]},
      {"id": 51, "sentence": "The presentation which was given yesterday impressed everyone", "pieces": ["The presentation", "which was given", "yesterday", "impressed", "everyone"], "correctOrder": ["The presentation", "which was given", "yesterday", "impressed", "everyone"]},
      {"id": 52, "sentence": "After completing the analysis, we discovered several trends", "pieces": ["After completing", "the analysis,", "we discovered", "several trends"], "correctOrder": ["After completing", "the analysis,", "we discovered", "several trends"]},
      {"id": 53, "sentence": "The candidate who demonstrates leadership will be selected", "pieces": ["The candidate", "who demonstrates", "leadership", "will be selected"], "correctOrder": ["The candidate", "who demonstrates", "leadership", "will be selected"]},
      {"id": 54, "sentence": "Since the weather improved, we decided to continue", "pieces": ["Since", "the weather improved,", "we decided", "to continue"], "correctOrder": ["Since", "the weather improved,", "we decided", "to continue"]},
      {"id": 55, "sentence": "The strategy that we developed proved to be effective", "pieces": ["The strategy", "that", "we developed", "proved to be", "effective"], "correctOrder": ["The strategy", "that", "we developed", "proved to be", "effective"]},
      {"id": 56, "sentence": "Although challenging, the project was completed on time", "pieces": ["Although", "challenging,", "the project", "was completed", "on time"], "correctOrder": ["Although", "challenging,", "the project", "was completed", "on time"]},
      {"id": 57, "sentence": "The results obtained exceeded our initial expectations", "pieces": ["The results", "obtained", "exceeded", "our initial", "expectations"], "correctOrder": ["The results", "obtained", "exceeded", "our initial", "expectations"]},
      {"id": 58, "sentence": "Before the deadline arrives, all tasks must be completed", "pieces": ["Before", "the deadline arrives,", "all tasks", "must be completed"], "correctOrder": ["Before", "the deadline arrives,", "all tasks", "must be completed"]},
      {"id": 59, "sentence": "The innovation that was introduced revolutionized the industry", "pieces": ["The innovation", "that was introduced", "revolutionized", "the industry"], "correctOrder": ["The innovation", "that was introduced", "revolutionized", "the industry"]},
      {"id": 60, "sentence": "Whenever problems arise, we address them systematically", "pieces": ["Whenever", "problems arise,", "we address them", "systematically"], "correctOrder": ["Whenever", "problems arise,", "we address them", "systematically"]}
    ],
    boss: [
      {"id": 61, "sentence": "Despite having worked diligently throughout the night, the project remained frustratingly incomplete", "pieces": ["Despite", "having worked diligently", "throughout the night,", "the project", "remained", "frustratingly incomplete"], "correctOrder": ["Despite", "having worked diligently", "throughout the night,", "the project", "remained", "frustratingly incomplete"]},
      {"id": 62, "sentence": "The sophisticated algorithm that the researchers developed revolutionized computational linguistics", "pieces": ["The sophisticated algorithm", "that", "the researchers developed", "revolutionized", "computational linguistics"], "correctOrder": ["The sophisticated algorithm", "that", "the researchers developed", "revolutionized", "computational linguistics"]},
      {"id": 63, "sentence": "Notwithstanding the unprecedented challenges that emerged during implementation, the team persevered", "pieces": ["Notwithstanding", "the unprecedented challenges", "that emerged", "during implementation,", "the team", "persevered"], "correctOrder": ["Notwithstanding", "the unprecedented challenges", "that emerged", "during implementation,", "the team", "persevered"]},
      {"id": 64, "sentence": "The paradigm shift which occurred in quantum mechanics fundamentally altered scientific understanding", "pieces": ["The paradigm shift", "which occurred", "in quantum mechanics", "fundamentally altered", "scientific understanding"], "correctOrder": ["The paradigm shift", "which occurred", "in quantum mechanics", "fundamentally altered", "scientific understanding"]},
      {"id": 65, "sentence": "Having meticulously analyzed the multifaceted implications, the committee reached a unanimous decision", "pieces": ["Having meticulously analyzed", "the multifaceted implications,", "the committee", "reached", "a unanimous decision"], "correctOrder": ["Having meticulously analyzed", "the multifaceted implications,", "the committee", "reached", "a unanimous decision"]},
      {"id": 66, "sentence": "The intricate methodology whereby researchers validated their hypothesis demonstrated exceptional rigor", "pieces": ["The intricate methodology", "whereby", "researchers validated", "their hypothesis", "demonstrated", "exceptional rigor"], "correctOrder": ["The intricate methodology", "whereby", "researchers validated", "their hypothesis", "demonstrated", "exceptional rigor"]},
      {"id": 67, "sentence": "Although the theoretical framework appeared comprehensive, practical implementation proved problematic", "pieces": ["Although", "the theoretical framework", "appeared comprehensive,", "practical implementation", "proved", "problematic"], "correctOrder": ["Although", "the theoretical framework", "appeared comprehensive,", "practical implementation", "proved", "problematic"]},
      {"id": 68, "sentence": "The serendipitous discovery that occurred during routine experimentation catalyzed groundbreaking research", "pieces": ["The serendipitous discovery", "that occurred", "during routine experimentation", "catalyzed", "groundbreaking research"], "correctOrder": ["The serendipitous discovery", "that occurred", "during routine experimentation", "catalyzed", "groundbreaking research"]},
      {"id": 69, "sentence": "Whereas conventional approaches yielded marginal results, innovative techniques produced remarkable outcomes", "pieces": ["Whereas", "conventional approaches", "yielded marginal results,", "innovative techniques", "produced", "remarkable outcomes"], "correctOrder": ["Whereas", "conventional approaches", "yielded marginal results,", "innovative techniques", "produced", "remarkable outcomes"]},
      {"id": 70, "sentence": "The unprecedented collaboration between interdisciplinary teams facilitated revolutionary advances in technology", "pieces": ["The unprecedented collaboration", "between", "interdisciplinary teams", "facilitated", "revolutionary advances", "in technology"], "correctOrder": ["The unprecedented collaboration", "between", "interdisciplinary teams", "facilitated", "revolutionary advances", "in technology"]},
      {"id": 71, "sentence": "Inasmuch as the evidence suggested multiple interpretations, researchers exercised considerable circumspection", "pieces": ["Inasmuch as", "the evidence suggested", "multiple interpretations,", "researchers exercised", "considerable circumspection"], "correctOrder": ["Inasmuch as", "the evidence suggested", "multiple interpretations,", "researchers exercised", "considerable circumspection"]},
      {"id": 72, "sentence": "The quintessential example that illustrates this phenomenon demonstrates the complexity of human cognition", "pieces": ["The quintessential example", "that illustrates", "this phenomenon", "demonstrates", "the complexity", "of human cognition"], "correctOrder": ["The quintessential example", "that illustrates", "this phenomenon", "demonstrates", "the complexity", "of human cognition"]},
      {"id": 73, "sentence": "Notwithstanding their initial skepticism, the scientific community eventually embraced the revolutionary theory", "pieces": ["Notwithstanding", "their initial skepticism,", "the scientific community", "eventually embraced", "the revolutionary theory"], "correctOrder": ["Notwithstanding", "their initial skepticism,", "the scientific community", "eventually embraced", "the revolutionary theory"]},
      {"id": 74, "sentence": "The sophisticated synthesis of disparate elements yielded an unprecedented comprehensive understanding", "pieces": ["The sophisticated synthesis", "of disparate elements", "yielded", "an unprecedented", "comprehensive understanding"], "correctOrder": ["The sophisticated synthesis", "of disparate elements", "yielded", "an unprecedented", "comprehensive understanding"]},
      {"id": 75, "sentence": "Although the methodology appeared straightforward, implementation required extraordinary attention to detail", "pieces": ["Although", "the methodology appeared", "straightforward,", "implementation required", "extraordinary attention", "to detail"], "correctOrder": ["Although", "the methodology appeared", "straightforward,", "implementation required", "extraordinary attention", "to detail"]},
      {"id": 76, "sentence": "The juxtaposition of contrasting methodologies illuminated previously unrecognized patterns in the data", "pieces": ["The juxtaposition", "of contrasting methodologies", "illuminated", "previously unrecognized", "patterns", "in the data"], "correctOrder": ["The juxtaposition", "of contrasting methodologies", "illuminated", "previously unrecognized", "patterns", "in the data"]},
      {"id": 77, "sentence": "Insofar as the preliminary findings suggested promising avenues, researchers intensified their investigation", "pieces": ["Insofar as", "the preliminary findings", "suggested promising avenues,", "researchers intensified", "their investigation"], "correctOrder": ["Insofar as", "the preliminary findings", "suggested promising avenues,", "researchers intensified", "their investigation"]},
      {"id": 78, "sentence": "The ephemeral nature of the phenomenon necessitated the development of specialized detection equipment", "pieces": ["The ephemeral nature", "of the phenomenon", "necessitated", "the development", "of specialized", "detection equipment"], "correctOrder": ["The ephemeral nature", "of the phenomenon", "necessitated", "the development", "of specialized", "detection equipment"]},
      {"id": 79, "sentence": "The meticulous calibration that preceded each experiment ensured the reliability of subsequent measurements", "pieces": ["The meticulous calibration", "that preceded", "each experiment", "ensured", "the reliability", "of subsequent measurements"], "correctOrder": ["The meticulous calibration", "that preceded", "each experiment", "ensured", "the reliability", "of subsequent measurements"]},
      {"id": 80, "sentence": "Whereas traditional interpretations emphasized singular causation, contemporary analysis reveals multifactorial complexity", "pieces": ["Whereas", "traditional interpretations", "emphasized singular causation,", "contemporary analysis", "reveals", "multifactorial complexity"], "correctOrder": ["Whereas", "traditional interpretations", "emphasized singular causation,", "contemporary analysis", "reveals", "multifactorial complexity"]},
      {"id": 81, "sentence": "The ubiquitous application of advanced computational techniques transformed previously intractable problems", "pieces": ["The ubiquitous application", "of advanced", "computational techniques", "transformed", "previously intractable", "problems"], "correctOrder": ["The ubiquitous application", "of advanced", "computational techniques", "transformed", "previously intractable", "problems"]},
      {"id": 82, "sentence": "Notwithstanding the considerable theoretical foundation, practical implementation encountered unforeseen complications", "pieces": ["Notwithstanding", "the considerable", "theoretical foundation,", "practical implementation", "encountered", "unforeseen complications"], "correctOrder": ["Notwithstanding", "the considerable", "theoretical foundation,", "practical implementation", "encountered", "unforeseen complications"]},
      {"id": 83, "sentence": "The intrinsic properties that characterize this material make it exceptionally suitable for specialized applications", "pieces": ["The intrinsic properties", "that characterize", "this material", "make it", "exceptionally suitable", "for specialized applications"], "correctOrder": ["The intrinsic properties", "that characterize", "this material", "make it", "exceptionally suitable", "for specialized applications"]},
      {"id": 84, "sentence": "Although the initial hypothesis appeared plausible, subsequent experimentation revealed significant methodological flaws", "pieces": ["Although", "the initial hypothesis", "appeared plausible,", "subsequent experimentation", "revealed", "significant methodological flaws"], "correctOrder": ["Although", "the initial hypothesis", "appeared plausible,", "subsequent experimentation", "revealed", "significant methodological flaws"]},
      {"id": 85, "sentence": "The unprecedented convergence of diverse disciplines catalyzed the emergence of entirely new research paradigms", "pieces": ["The unprecedented convergence", "of diverse disciplines", "catalyzed", "the emergence", "of entirely new", "research paradigms"], "correctOrder": ["The unprecedented convergence", "of diverse disciplines", "catalyzed", "the emergence", "of entirely new", "research paradigms"]},
      {"id": 86, "sentence": "Insofar as the evidence corroborated preliminary findings, researchers proceeded with cautious optimism", "pieces": ["Insofar as", "the evidence corroborated", "preliminary findings,", "researchers proceeded", "with cautious optimism"], "correctOrder": ["Insofar as", "the evidence corroborated", "preliminary findings,", "researchers proceeded", "with cautious optimism"]},
      {"id": 87, "sentence": "The sophisticated integration of theoretical frameworks with empirical validation established unprecedented methodological rigor", "pieces": ["The sophisticated integration", "of theoretical frameworks", "with empirical validation", "established", "unprecedented", "methodological rigor"], "correctOrder": ["The sophisticated integration", "of theoretical frameworks", "with empirical validation", "established", "unprecedented", "methodological rigor"]},
      {"id": 88, "sentence": "Although conventional wisdom suggested otherwise, innovative approaches yielded remarkably counterintuitive results", "pieces": ["Although", "conventional wisdom", "suggested otherwise,", "innovative approaches", "yielded", "remarkably counterintuitive results"], "correctOrder": ["Although", "conventional wisdom", "suggested otherwise,", "innovative approaches", "yielded", "remarkably counterintuitive results"]},
      {"id": 89, "sentence": "The meticulous documentation that accompanied each phase facilitated comprehensive retrospective analysis", "pieces": ["The meticulous documentation", "that accompanied", "each phase", "facilitated", "comprehensive", "retrospective analysis"], "correctOrder": ["The meticulous documentation", "that accompanied", "each phase", "facilitated", "comprehensive", "retrospective analysis"]},
      {"id": 90, "sentence": "Whereas previous investigations yielded inconclusive results, contemporary methodologies provided definitive clarification", "pieces": ["Whereas", "previous investigations", "yielded inconclusive results,", "contemporary methodologies", "provided", "definitive clarification"], "correctOrder": ["Whereas", "previous investigations", "yielded inconclusive results,", "contemporary methodologies", "provided", "definitive clarification"]}
    ]
  },
  timeRaceQuestions: [
    {"id": 1, "question": "What is the past tense of 'go'?", "options": ["went", "gone", "going", "goes"], "correct": 0, "difficulty": 1, "timeLimit": 10},
    {"id": 2, "question": "Which word means 'very angry'?", "options": ["happy", "furious", "calm", "sleepy"], "correct": 1, "difficulty": 1, "timeLimit": 10},
    {"id": 3, "question": "Complete: 'I ___ to school every day'", "options": ["goes", "go", "went", "going"], "correct": 1, "difficulty": 1, "timeLimit": 8},
    {"id": 4, "question": "What is the opposite of 'hot'?", "options": ["warm", "cold", "cool", "freezing"], "correct": 1, "difficulty": 1, "timeLimit": 8},
    {"id": 5, "question": "Which is correct: 'There ___ three apples'", "options": ["is", "are", "was", "been"], "correct": 1, "difficulty": 1, "timeLimit": 8},
    {"id": 6, "question": "What does 'ubiquitous' mean?", "options": ["rare", "everywhere", "hidden", "expensive"], "correct": 1, "difficulty": 2, "timeLimit": 12},
    {"id": 7, "question": "Choose the correct form: 'She ___ here for 3 years'", "options": ["lives", "has lived", "is living", "lived"], "correct": 1, "difficulty": 2, "timeLimit": 10},
    {"id": 8, "question": "What is a synonym for 'magnificent'?", "options": ["terrible", "splendid", "ordinary", "small"], "correct": 1, "difficulty": 2, "timeLimit": 10},
    {"id": 9, "question": "Which sentence is grammatically correct?", "options": ["He don't like it", "He doesn't likes it", "He doesn't like it", "He not like it"], "correct": 2, "difficulty": 2, "timeLimit": 12},
    {"id": 10, "question": "What does 'perseverance' mean?", "options": ["giving up", "persistence", "laziness", "confusion"], "correct": 1, "difficulty": 2, "timeLimit": 15},
    {"id": 11, "question": "Complete the conditional: 'If I ___ rich, I would travel'", "options": ["am", "was", "were", "be"], "correct": 2, "difficulty": 3, "timeLimit": 15},
    {"id": 12, "question": "What does 'ameliorate' mean?", "options": ["worsen", "improve", "ignore", "delay"], "correct": 1, "difficulty": 3, "timeLimit": 18},
    {"id": 13, "question": "Choose the correct passive form: 'They built the house'", "options": ["The house built", "The house was built", "The house is built", "The house been built"], "correct": 1, "difficulty": 3, "timeLimit": 15},
    {"id": 14, "question": "What is the meaning of 'serendipity'?", "options": ["bad luck", "planned event", "happy accident", "hard work"], "correct": 2, "difficulty": 3, "timeLimit": 20},
    {"id": 15, "question": "Complete: 'By tomorrow, I ___ the project'", "options": ["will finish", "will have finished", "would finish", "am finishing"], "correct": 1, "difficulty": 3, "timeLimit": 18},
    {"id": 16, "question": "What does 'circumspect' mean?", "options": ["careless", "cautious", "aggressive", "confused"], "correct": 1, "difficulty": 3, "timeLimit": 22},
    {"id": 17, "question": "Which is a gerund? 'I enjoy ___ books'", "options": ["read", "reading", "to read", "reads"], "correct": 1, "difficulty": 2, "timeLimit": 12},
    {"id": 18, "question": "What does 'pragmatic' mean?", "options": ["idealistic", "practical", "emotional", "theoretical"], "correct": 1, "difficulty": 3, "timeLimit": 20},
    {"id": 19, "question": "Choose the correct form: '___ he comes, we'll start'", "options": ["When", "If", "Unless", "Although"], "correct": 0, "difficulty": 2, "timeLimit": 12},
    {"id": 20, "question": "What is the superlative of 'good'?", "options": ["better", "gooder", "best", "most good"], "correct": 2, "difficulty": 2, "timeLimit": 10},
    {"id": 21, "question": "What does 'magnanimous' mean?", "options": ["selfish", "generous", "angry", "small"], "correct": 1, "difficulty": 3, "timeLimit": 25},
    {"id": 22, "question": "Complete: 'I wish I ___ studied harder'", "options": ["have", "had", "would", "could"], "correct": 1, "difficulty": 3, "timeLimit": 18},
    {"id": 23, "question": "What does 'vicarious' mean?", "options": ["direct", "personal", "through others", "alone"], "correct": 2, "difficulty": 3, "timeLimit": 25},
    {"id": 24, "question": "Choose correct subjunctive: 'I suggest he ___ earlier'", "options": ["comes", "come", "came", "coming"], "correct": 1, "difficulty": 3, "timeLimit": 20},
    {"id": 25, "question": "What does 'ostensible' mean?", "options": ["obvious", "hidden", "apparent", "real"], "correct": 2, "difficulty": 3, "timeLimit": 28},
    {"id": 26, "question": "Complete: 'Had I known, I ___ differently'", "options": ["would act", "would have acted", "will act", "acted"], "correct": 1, "difficulty": 3, "timeLimit": 22},
    {"id": 27, "question": "What does 'sagacious' mean?", "options": ["foolish", "wise", "young", "angry"], "correct": 1, "difficulty": 3, "timeLimit": 30},
    {"id": 28, "question": "Which shows correct inversion: 'Never ___ such beauty'", "options": ["I have seen", "have I seen", "I saw", "did I saw"], "correct": 1, "difficulty": 3, "timeLimit": 25},
    {"id": 29, "question": "What does 'tremulous' mean?", "options": ["steady", "shaking", "loud", "quiet"], "correct": 1, "difficulty": 3, "timeLimit": 32},
    {"id": 30, "question": "Complete advanced conditional: 'Were it not for your help, I ___ failed'", "options": ["would", "would have", "will have", "had"], "correct": 1, "difficulty": 3, "timeLimit": 35}
  ],
  stories: [
    {
      "id": 1,
      "title": "The Magic Garden",
      "content": "Once upon a time, there was a beautiful garden behind an old house. Every morning, the flowers would dance in the gentle breeze, and the trees would whisper secrets to each other. A young girl named Emma discovered this magical place and learned that if she took care of the garden, it would grant her one wish. Emma spent every day watering the plants, pulling weeds, and talking to the flowers. After a month of dedicated care, the garden sparkled with an ethereal light, and a gentle voice asked Emma what she wished for. Instead of wishing for something for herself, Emma wished for the garden to bring joy to everyone who visited it.",
      "questions": [
        {"id": 1, "question": "What would happen if Emma took care of the garden?", "options": ["Nothing", "It would grant her a wish", "The flowers would die", "She would get in trouble"], "correct": 1},
        {"id": 2, "question": "What did the trees do in the story?", "options": ["Dance", "Whisper secrets", "Sing songs", "Sleep"], "correct": 1},
        {"id": 3, "question": "How long did Emma care for the garden before it granted her wish?", "options": ["One week", "One month", "One year", "One day"], "correct": 1},
        {"id": 4, "question": "What did Emma wish for?", "options": ["Money", "Toys", "Garden to bring joy to others", "A new house"], "correct": 2}
      ]
    }
  ],
  babyGames: [
    {
      "id": 1,
      "name": "Color Match",
      "description": "Match colors with everyday objects",
      "type": "matching",
      "difficulty": "very easy",
      "instructions": "Click on objects that match the color shown",
      "questions": [
        {"question": "What color is this apple? 🍎", "options": ["Blue", "Red", "Green", "Yellow"], "correct": 1, "emoji": "🍎"},
        {"question": "What color is this banana? 🍌", "options": ["Red", "Blue", "Yellow", "Purple"], "correct": 2, "emoji": "🍌"},
        {"question": "What color is this grass? 🌱", "options": ["Green", "Orange", "Pink", "Black"], "correct": 0, "emoji": "🌱"},
        {"question": "What color is this sun? ☀️", "options": ["Purple", "Yellow", "Blue", "Green"], "correct": 1, "emoji": "☀️"},
        {"question": "What color is this ocean? 🌊", "options": ["Red", "Yellow", "Blue", "Brown"], "correct": 2, "emoji": "🌊"}
      ]
    },
    {
      "id": 2,
      "name": "Count the Animals",
      "description": "Learn numbers 1-10 with cute animals",
      "type": "counting",
      "difficulty": "very easy",
      "instructions": "Count the animals and click the correct number",
      "questions": [
        {"question": "How many cats? 🐱", "options": ["1", "2", "3", "4"], "correct": 0, "emoji": "🐱"},
        {"question": "How many dogs? 🐶🐶", "options": ["1", "2", "3", "4"], "correct": 1, "emoji": "🐶🐶"},
        {"question": "How many birds? 🐦🐦🐦", "options": ["2", "3", "4", "5"], "correct": 1, "emoji": "🐦🐦🐦"},
        {"question": "How many fish? 🐠🐠🐠🐠", "options": ["3", "4", "5", "6"], "correct": 1, "emoji": "🐠🐠🐠🐠"},
        {"question": "How many frogs? 🐸🐸🐸🐸🐸", "options": ["4", "5", "6", "7"], "correct": 1, "emoji": "🐸🐸🐸🐸🐸"}
      ]
    },
    {
      "id": 3,
      "name": "Letter Sounds",
      "description": "Learn alphabet sounds with phonics",
      "type": "phonics",
      "difficulty": "very easy",
      "instructions": "Click the letter that makes the sound you hear",
      "questions": [
        {"question": "What letter makes the 'Ah' sound?", "options": ["A", "B", "C", "D"], "correct": 0},
        {"question": "What letter makes the 'Buh' sound?", "options": ["A", "B", "C", "D"], "correct": 1},
        {"question": "What letter makes the 'Kuh' sound?", "options": ["A", "B", "C", "D"], "correct": 2},
        {"question": "What letter makes the 'Duh' sound?", "options": ["A", "B", "C", "D"], "correct": 3},
        {"question": "What letter makes the 'Eh' sound?", "options": ["E", "F", "G", "H"], "correct": 0}
      ]
    }
  ],
  learningResources: {
    platforms: [
      {
        "id": 1,
        "name": "Duolingo",
        "description": "Free gamified language learning with bite-sized lessons and streak tracking",
        "type": "Mobile App",
        "rating": 4.5,
        "features": ["Gamification", "Free", "Multiple Languages", "Progress Tracking"],
        "bestFor": "Beginners to Intermediate learners who enjoy game-like learning",
        "url": "https://duolingo.com"
      },
      {
        "id": 2,
        "name": "BBC Learning English",
        "description": "Comprehensive English learning with news, videos, and structured courses",
        "type": "Website",
        "rating": 4.7,
        "features": ["News-based Learning", "Video Content", "Grammar Focus", "Free Content"],
        "bestFor": "Intermediate to Advanced learners interested in British English",
        "url": "https://bbc.co.uk/learningenglish"
      },
      {
        "id": 3,
        "name": "Cambridge English",
        "description": "Official Cambridge exam preparation and certification resources",
        "type": "Website/Platform",
        "rating": 4.8,
        "features": ["Official Certification", "Exam Prep", "Academic Focus", "Global Recognition"],
        "bestFor": "Students preparing for official English proficiency exams",
        "url": "https://cambridgeenglish.org"
      },
      {
        "id": 4,
        "name": "FluentU",
        "description": "Learn English through authentic real-world videos with interactive subtitles",
        "type": "Platform",
        "rating": 4.3,
        "features": ["Real-world Videos", "Interactive Subtitles", "Contextual Learning", "Multiple Levels"],
        "bestFor": "Visual learners who want to learn through authentic content",
        "url": "https://fluentu.com"
      },
      {
        "id": 5,
        "name": "Grammarly",
        "description": "AI-powered writing assistant that helps improve grammar and writing skills",
        "type": "App/Extension",
        "rating": 4.6,
        "features": ["Writing Assistant", "Grammar Check", "Style Suggestions", "Real-time Feedback"],
        "bestFor": "Students and professionals looking to improve their writing",
        "url": "https://grammarly.com"
      }
    ],
    youtubeChannels: [
      {
        "id": 1,
        "name": "English with Lucy",
        "description": "British pronunciation, vocabulary, and grammar lessons with clear explanations",
        "subscribers": "5.2M",
        "rating": 4.8,
        "focus": ["British English", "Pronunciation", "Vocabulary", "Grammar"],
        "bestFor": "Students interested in British English pronunciation and accent",
        "url": "https://youtube.com/@EnglishwithLucy"
      },
      {
        "id": 2,
        "name": "EngVid",
        "description": "Free English video lessons covering grammar, vocabulary, and test preparation",
        "subscribers": "1.8M",
        "rating": 4.6,
        "focus": ["Grammar", "Test Prep", "Business English", "Academic English"],
        "bestFor": "Students preparing for English tests or needing comprehensive grammar review",
        "url": "https://youtube.com/@engvid"
      },
      {
        "id": 3,
        "name": "Learn English with TV Series",
        "description": "Learn through popular TV shows, movies, and entertainment content",
        "subscribers": "2.1M",
        "rating": 4.7,
        "focus": ["Entertainment", "Pop Culture", "Listening Skills", "Natural English"],
        "bestFor": "Students who enjoy learning through movies and TV shows",
        "url": "https://youtube.com/@LearnEnglishWithTVSeries"
      }
    ]
  }
};

// Global Variables
let currentModule = '';
let currentLevel = '';
let currentQuestion = 0;
let score = 0;
let gameData = {};
let startTime = Date.now();
let grammarTimer = null;
let raceTimer = null;
let currentReadingStory = 0;
let readingAnswers = {};
let moduleProgress = {
  'match-learn': 0,
  'grammar-puzzle': 0,
  'time-race': 0,
  'tell-me-more': 0,
  'baby-games': 0,
  'link-learn': 0
};

// Utility Functions
function scrollToModules() {
  document.getElementById('modules-section').scrollIntoView({
    behavior: 'smooth'
  });
}

function updateProgress(moduleId, percentage) {
  moduleProgress[moduleId] = Math.max(moduleProgress[moduleId], percentage);
  
  // Update progress bar on dashboard
  const moduleCard = document.querySelector(`.module-${getModuleNumber(moduleId)}`);
  if (moduleCard) {
    const progressFill = moduleCard.querySelector('.progress-fill');
    const progressText = moduleCard.querySelector('.progress-text');
    if (progressFill) {
      progressFill.style.width = percentage + '%';
    }
    if (progressText) {
      progressText.textContent = Math.round(percentage) + '% Completado';
    }
  }
}

function getModuleNumber(moduleId) {
  const moduleMap = {
    'match-learn': 1,
    'grammar-puzzle': 2,
    'time-race': 3,
    'tell-me-more': 4,
    'baby-games': 5,
    'link-learn': 6
  };
  return moduleMap[moduleId] || 1;
}

// Navigation Functions
function openModule(moduleId) {
  console.log('Opening module:', moduleId);
  
  // Hide dashboard
  const dashboard = document.getElementById('dashboard');
  if (dashboard) {
    dashboard.classList.add('hidden');
  }
  
  // Show selected module
  const moduleElement = document.getElementById(moduleId);
  if (moduleElement) {
    moduleElement.classList.remove('hidden');
    currentModule = moduleId;
    
    // Initialize module-specific data
    initializeModule(moduleId);
  }
}

function goToDashboard() {
  console.log('Going to dashboard');
  
  // Hide all modules
  const modules = document.querySelectorAll('.module-container');
  modules.forEach(module => {
    module.classList.add('hidden');
  });
  
  // Show dashboard
  const dashboard = document.getElementById('dashboard');
  if (dashboard) {
    dashboard.classList.remove('hidden');
  }
  
  // Reset current module
  currentModule = '';
  resetModuleState();
}

function initializeModule(moduleId) {
  console.log('Initializing module:', moduleId);
  
  switch(moduleId) {
    case 'link-learn':
      loadResources();
      break;
    default:
      break;
  }
}

function resetModuleState() {
  currentLevel = '';
  currentQuestion = 0;
  score = 0;
  gameData = {};
  
  // Clear any active timers
  if (grammarTimer) {
    clearInterval(grammarTimer);
    grammarTimer = null;
  }
  if (raceTimer) {
    clearInterval(raceTimer);
    raceTimer = null;
  }
  
  // Reset all game containers to hidden state
  const gameContainers = document.querySelectorAll('.game-container');
  gameContainers.forEach(container => {
    container.classList.add('hidden');
  });
  
  const resultsContainers = document.querySelectorAll('.results-container');
  resultsContainers.forEach(container => {
    container.classList.add('hidden');
  });
  
  // Show difficulty selections where applicable
  const difficultySelections = document.querySelectorAll('.difficulty-selection');
  difficultySelections.forEach(selection => {
    selection.classList.remove('hidden');
  });
  
  // Show story selections for reading module
  const storySelections = document.querySelectorAll('.stories-selection');
  storySelections.forEach(selection => {
    selection.classList.remove('hidden');
  });
  
  // Show baby games grid
  const babyGamesGrid = document.querySelectorAll('.baby-games-grid');
  babyGamesGrid.forEach(grid => {
    grid.classList.remove('hidden');
  });
}

// MODULE 1: MATCH & LEARN
function startMatching(difficulty) {
  console.log('Starting matching game with difficulty:', difficulty);
  
  currentLevel = difficulty;
  currentQuestion = 0;
  score = 0;
  
  const questions = appData.vocabularyQuestions[difficulty];
  if (!questions || questions.length === 0) {
    console.error('No questions found for difficulty:', difficulty);
    return;
  }
  
  gameData = {
    questions: questions,
    answers: [],
    level: difficulty
  };
  
  // Hide difficulty selection and show game
  const difficultySelection = document.querySelector('#match-learn .difficulty-selection');
  const matchingGame = document.getElementById('matching-game');
  
  if (difficultySelection) {
    difficultySelection.classList.add('hidden');
  }
  
  if (matchingGame) {
    matchingGame.classList.remove('hidden');
    showMatchQuestion();
  }
}

function showMatchQuestion() {
  console.log('Showing match question:', currentQuestion);
  
  if (currentQuestion >= gameData.questions.length) {
    showMatchResults();
    return;
  }
  
  const question = gameData.questions[currentQuestion];
  
  // Update question display
  const wordElement = document.getElementById('current-word');
  const definitionElement = document.getElementById('word-definition');
  const scoreElement = document.getElementById('match-score');
  const counterElement = document.getElementById('question-counter');
  const levelElement = document.getElementById('current-level');
  
  if (wordElement) wordElement.textContent = question.word;
  if (definitionElement) definitionElement.textContent = question.definition;
  if (scoreElement) scoreElement.textContent = score;
  if (counterElement) counterElement.textContent = `${currentQuestion + 1}/30`;
  if (levelElement) levelElement.textContent = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
  
  // Create options
  const optionsContainer = document.getElementById('match-options');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = option;
      button.onclick = () => selectMatchOption(index, option === question.correct);
      optionsContainer.appendChild(button);
    });
  }
  
  // Hide next button initially
  const nextButton = document.getElementById('next-match-question');
  if (nextButton) {
    nextButton.classList.add('hidden');
  }
}

function selectMatchOption(index, isCorrect) {
  console.log('Selected option:', index, 'Correct:', isCorrect);
  
  const buttons = document.querySelectorAll('#match-options .option-btn');
  const correctAnswer = gameData.questions[currentQuestion].correct;
  
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
    } else if (i === index && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  if (isCorrect) {
    score++;
  }
  
  gameData.answers.push({
    question: currentQuestion,
    correct: isCorrect,
    answer: buttons[index].textContent
  });
  
  // Show next button
  const nextButton = document.getElementById('next-match-question');
  if (nextButton) {
    nextButton.classList.remove('hidden');
  }
}

function nextMatchQuestion() {
  currentQuestion++;
  showMatchQuestion();
}

function showMatchResults() {
  console.log('Showing match results');
  
  const matchingGame = document.getElementById('matching-game');
  const matchResults = document.getElementById('match-results');
  
  if (matchingGame) {
    matchingGame.classList.add('hidden');
  }
  
  if (matchResults) {
    matchResults.classList.remove('hidden');
    
    // Update final score
    const finalScoreElement = document.getElementById('final-match-score');
    if (finalScoreElement) {
      finalScoreElement.textContent = score;
    }
    
    updateProgress('match-learn', (score / gameData.questions.length) * 100);
    createMatchCharts();
  }
}

function createMatchCharts() {
  console.log('Creating match charts');
  
  try {
    // Performance by difficulty chart
    const ctx1 = document.getElementById('matchPerformanceChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Baby', 'Adult', 'Boss'],
          datasets: [{
            label: 'Porcentaje de Puntuación',
            data: currentLevel === 'baby' ? [(score/gameData.questions.length)*100, 0, 0] :
                  currentLevel === 'adult' ? [0, (score/gameData.questions.length)*100, 0] :
                  [0, 0, (score/gameData.questions.length)*100],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Rendimiento por Nivel de Dificultad',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
    
    // Progress chart
    const ctx2 = document.getElementById('matchProgressChart');
    if (ctx2) {
      const correctAnswers = gameData.answers.map((answer, index) => 
        gameData.answers.slice(0, index + 1).filter(a => a.correct).length
      );
      
      new Chart(ctx2.getContext('2d'), {
        type: 'line',
        data: {
          labels: gameData.answers.map((_, index) => `P${index + 1}`),
          datasets: [{
            label: 'Respuestas Correctas Acumuladas',
            data: correctAnswers,
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Progreso de Aprendizaje en el Tiempo',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating charts:', error);
  }
}

function resetMatchModule() {
  const matchResults = document.getElementById('match-results');
  const difficultySelection = document.querySelector('#match-learn .difficulty-selection');
  
  if (matchResults) {
    matchResults.classList.add('hidden');
  }
  
  if (difficultySelection) {
    difficultySelection.classList.remove('hidden');
  }
  
  resetModuleState();
}

// MODULE 2: GRAMMAR PUZZLE
function startGrammar(difficulty) {
  console.log('Starting grammar game with difficulty:', difficulty);
  
  currentLevel = difficulty;
  currentQuestion = 0;
  score = 0;
  
  const questions = appData.grammarPuzzles[difficulty];
  if (!questions || questions.length === 0) {
    console.error('No grammar questions found for difficulty:', difficulty);
    return;
  }
  
  gameData = {
    questions: questions,
    answers: [],
    times: [],
    level: difficulty
  };
  
  // Hide difficulty selection and show game
  const difficultySelection = document.querySelector('#grammar-puzzle .difficulty-selection');
  const grammarGame = document.getElementById('grammar-game');
  
  if (difficultySelection) {
    difficultySelection.classList.add('hidden');
  }
  
  if (grammarGame) {
    grammarGame.classList.remove('hidden');
    showGrammarQuestion();
  }
}

function showGrammarQuestion() {
  if (currentQuestion >= gameData.questions.length) {
    showGrammarResults();
    return;
  }
  
  startTime = Date.now();
  const question = gameData.questions[currentQuestion];
  
  // Start timer
  let seconds = 0;
  grammarTimer = setInterval(() => {
    seconds++;
    const timerElement = document.getElementById('grammar-timer');
    if (timerElement) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);
  
  const scoreElement = document.getElementById('grammar-score');
  const counterElement = document.getElementById('grammar-question-counter');
  
  if (scoreElement) {
    scoreElement.textContent = score;
  }
  if (counterElement) {
    counterElement.textContent = `${currentQuestion + 1}/30`;
  }
  
  // Shuffle pieces
  const shuffledPieces = [...question.pieces].sort(() => Math.random() - 0.5);
  
  const piecesContainer = document.getElementById('sentence-pieces');
  if (piecesContainer) {
    piecesContainer.innerHTML = '';
    
    shuffledPieces.forEach((piece, index) => {
      const pieceElement = document.createElement('div');
      pieceElement.className = 'sentence-piece';
      pieceElement.textContent = piece;
      pieceElement.draggable = true;
      pieceElement.dataset.piece = piece;
      
      pieceElement.addEventListener('dragstart', handleDragStart);
      pieceElement.addEventListener('dragend', handleDragEnd);
      piecesContainer.appendChild(pieceElement);
    });
  }
  
  const dropZone = document.getElementById('drop-zone');
  if (dropZone) {
    dropZone.innerHTML = '<div class="drop-hint"><span class="drop-icon">⬇️</span><p>Suelta las piezas aquí para formar la oración</p></div>';
    dropZone.classList.remove('has-pieces');
    
    // Remove old event listeners and add new ones
    const newDropZone = dropZone.cloneNode(true);
    dropZone.parentNode.replaceChild(newDropZone, dropZone);
    
    newDropZone.addEventListener('dragover', handleDragOver);
    newDropZone.addEventListener('drop', handleDrop);
    newDropZone.addEventListener('dragleave', handleDragLeave);
  }
  
  const checkButton = document.getElementById('check-grammar');
  const nextButton = document.getElementById('next-grammar');
  
  if (checkButton) checkButton.style.display = 'inline-block';
  if (nextButton) nextButton.classList.add('hidden');
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.piece);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  
  const piece = e.dataTransfer.getData('text/plain');
  const dropZone = e.currentTarget;
  
  // Create piece in drop zone
  const pieceElement = document.createElement('div');
  pieceElement.className = 'sentence-piece';
  pieceElement.textContent = piece;
  pieceElement.dataset.piece = piece;
  pieceElement.draggable = true;
  pieceElement.addEventListener('dragstart', handleDragStart);
  pieceElement.addEventListener('dragend', handleDragEnd);
  
  dropZone.appendChild(pieceElement);
  dropZone.classList.add('has-pieces');
  
  // Remove from original container
  const originalPiece = document.querySelector(`#sentence-pieces .sentence-piece[data-piece="${piece}"]`);
  if (originalPiece) {
    originalPiece.remove();
  }
}

function resetPuzzle() {
  const dropZone = document.getElementById('drop-zone');
  const piecesContainer = document.getElementById('sentence-pieces');
  
  if (dropZone && piecesContainer) {
    // Move all pieces back to original container
    const pieces = dropZone.querySelectorAll('.sentence-piece');
    pieces.forEach(piece => {
      piecesContainer.appendChild(piece);
    });
    
    dropZone.innerHTML = '<div class="drop-hint"><span class="drop-icon">⬇️</span><p>Suelta las piezas aquí para formar la oración</p></div>';
    dropZone.classList.remove('has-pieces');
  }
}

function checkGrammar() {
  const dropZone = document.getElementById('drop-zone');
  if (!dropZone) return;
  
  if (grammarTimer) {
    clearInterval(grammarTimer);
    grammarTimer = null;
  }
  
  const pieces = Array.from(dropZone.querySelectorAll('.sentence-piece'));
  const userSentence = pieces.map(piece => piece.textContent).join(' ');
  const correctSentence = gameData.questions[currentQuestion].sentence;
  
  const isCorrect = userSentence === correctSentence;
  const timeTaken = (Date.now() - startTime) / 1000;
  
  if (isCorrect) {
    score++;
    dropZone.style.border = '2px solid #22C55E';
    dropZone.style.background = 'rgba(34, 197, 94, 0.1)';
  } else {
    dropZone.style.border = '2px solid #EF4444';
    dropZone.style.background = 'rgba(239, 68, 68, 0.1)';
  }
  
  gameData.answers.push({
    question: currentQuestion,
    correct: isCorrect,
    userAnswer: userSentence,
    correctAnswer: correctSentence
  });
  
  gameData.times.push(timeTaken);
  
  const checkButton = document.getElementById('check-grammar');
  const nextButton = document.getElementById('next-grammar');
  
  if (checkButton) checkButton.style.display = 'none';
  if (nextButton) nextButton.classList.remove('hidden');
}

function nextGrammarQuestion() {
  currentQuestion++;
  showGrammarQuestion();
}

function showGrammarResults() {
  const grammarGame = document.getElementById('grammar-game');
  const grammarResults = document.getElementById('grammar-results');
  
  if (grammarGame) grammarGame.classList.add('hidden');
  if (grammarResults) {
    grammarResults.classList.remove('hidden');
    
    const finalScoreElement = document.getElementById('final-grammar-score');
    if (finalScoreElement) {
      finalScoreElement.textContent = score;
    }
    
    updateProgress('grammar-puzzle', (score / gameData.questions.length) * 100);
    createGrammarCharts();
  }
}

function createGrammarCharts() {
  try {
    // Grammar accuracy chart
    const ctx1 = document.getElementById('grammarAccuracyChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Correctas', 'Incorrectas'],
          datasets: [{
            data: [score, gameData.questions.length - score],
            backgroundColor: ['#1FB8CD', '#B4413C']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Precisión Gramatical',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          }
        }
      });
    }
    
    // Completion times chart
    const ctx2 = document.getElementById('grammarTimeChart');
    if (ctx2) {
      new Chart(ctx2.getContext('2d'), {
        type: 'bar',
        data: {
          labels: gameData.times.map((_, index) => `P${index + 1}`),
          datasets: [{
            label: 'Tiempo (segundos)',
            data: gameData.times,
            backgroundColor: '#FFC185'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Tiempo de Finalización por Pregunta',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating grammar charts:', error);
  }
}

function resetGrammarModule() {
  const grammarResults = document.getElementById('grammar-results');
  const difficultySelection = document.querySelector('#grammar-puzzle .difficulty-selection');
  
  if (grammarResults) grammarResults.classList.add('hidden');
  if (difficultySelection) difficultySelection.classList.remove('hidden');
  
  resetModuleState();
}

// MODULE 3: TIME RACE
function startTimeRace() {
  console.log('Starting time race');
  
  currentQuestion = 0;
  score = 0;
  gameData = {
    questions: appData.timeRaceQuestions,
    answers: [],
    times: [],
    stars: 0
  };
  
  const raceInfo = document.querySelector('#time-race .module-intro-header');
  const raceGame = document.getElementById('race-game');
  
  if (raceInfo) raceInfo.classList.add('hidden');
  if (raceGame) {
    raceGame.classList.remove('hidden');
    showRaceQuestion();
  }
}

function showRaceQuestion() {
  if (currentQuestion >= gameData.questions.length) {
    showRaceResults();
    return;
  }
  
  startTime = Date.now();
  const question = gameData.questions[currentQuestion];
  
  const questionNumElement = document.getElementById('race-question-num');
  const questionElement = document.getElementById('race-question');
  const starsElement = document.getElementById('race-stars');
  
  if (questionNumElement) questionNumElement.textContent = currentQuestion + 1;
  if (questionElement) questionElement.textContent = question.question;
  if (starsElement) starsElement.textContent = gameData.stars;
  
  const optionsContainer = document.getElementById('race-options');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = option;
      button.onclick = () => selectRaceOption(index, index === question.correct);
      optionsContainer.appendChild(button);
    });
  }
  
  // Start timer
  let timeLeft = question.timeLimit || 10;
  const timerElement = document.getElementById('race-timer');
  if (timerElement) timerElement.textContent = timeLeft;
  
  raceTimer = setInterval(() => {
    timeLeft--;
    if (timerElement) timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(raceTimer);
      raceTimer = null;
      selectRaceOption(-1, false); // Time's up
    }
  }, 1000);
  
  gameData.currentTimer = raceTimer;
}

function selectRaceOption(selectedIndex, isCorrect) {
  if (raceTimer) {
    clearInterval(raceTimer);
    raceTimer = null;
  }
  
  const timeTaken = (Date.now() - startTime) / 1000;
  const buttons = document.querySelectorAll('#race-options .option-btn');
  const correctIndex = gameData.questions[currentQuestion].correct;
  
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  if (isCorrect) {
    score++;
    // Calculate stars based on speed
    const stars = timeTaken <= 3 ? 3 : timeTaken <= 6 ? 2 : 1;
    gameData.stars += stars;
  }
  
  gameData.answers.push({
    question: currentQuestion,
    correct: isCorrect,
    selectedIndex,
    timeTaken
  });
  
  gameData.times.push(timeTaken);
  
  // Update stars display
  const starsElement = document.getElementById('race-stars');
  if (starsElement) starsElement.textContent = gameData.stars;
  
  setTimeout(() => {
    currentQuestion++;
    showRaceQuestion();
  }, 1500);
}

function showRaceResults() {
  const raceGame = document.getElementById('race-game');
  const raceResults = document.getElementById('race-results');
  
  if (raceGame) raceGame.classList.add('hidden');
  if (raceResults) {
    raceResults.classList.remove('hidden');
    
    const avgTime = gameData.times.reduce((a, b) => a + b, 0) / gameData.times.length;
    
    const finalStarsElement = document.getElementById('final-stars');
    const avgTimeElement = document.getElementById('avg-time');
    
    if (finalStarsElement) finalStarsElement.textContent = gameData.stars;
    if (avgTimeElement) avgTimeElement.textContent = avgTime.toFixed(2) + 's';
    
    updateProgress('time-race', (score / gameData.questions.length) * 100);
    createRaceCharts();
  }
}

function createRaceCharts() {
  try {
    // Response times chart
    const ctx1 = document.getElementById('raceTimeChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'line',
        data: {
          labels: gameData.times.map((_, index) => `P${index + 1}`),
          datasets: [{
            label: 'Tiempo de Respuesta (segundos)',
            data: gameData.times,
            borderColor: '#f97316',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Gráfico de Tiempos de Respuesta',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
    
    // Stars earned chart
    const ctx2 = document.getElementById('raceStarsChart');
    if (ctx2) {
      const cumulativeStars = [];
      let totalStars = 0;
      
      gameData.answers.forEach((answer) => {
        if (answer.correct) {
          const stars = answer.timeTaken <= 3 ? 3 : answer.timeTaken <= 6 ? 2 : 1;
          totalStars += stars;
        }
        cumulativeStars.push(totalStars);
      });
      
      new Chart(ctx2.getContext('2d'), {
        type: 'bar',
        data: {
          labels: gameData.answers.map((_, index) => `P${index + 1}`),
          datasets: [{
            label: 'Estrellas Acumuladas',
            data: cumulativeStars,
            backgroundColor: '#fbbf24'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Estrellas Ganadas en el Tiempo',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating race charts:', error);
  }
}

function resetRaceModule() {
  const raceResults = document.getElementById('race-results');
  const raceInfo = document.querySelector('#time-race .module-intro-header');
  
  if (raceResults) raceResults.classList.add('hidden');
  if (raceInfo) raceInfo.classList.remove('hidden');
  
  resetModuleState();
}

// MODULE 4: TELL ME MORE (Reading Comprehension)
function startReading(storyIndex) {
  console.log('Starting reading module with story:', storyIndex);
  
  currentReadingStory = storyIndex;
  readingAnswers = {};
  
  const story = appData.stories[storyIndex];
  if (!story) {
    console.error('Story not found:', storyIndex);
    return;
  }
  
  const storiesSelection = document.querySelector('.stories-selection');
  const readingGame = document.getElementById('reading-game');
  
  if (storiesSelection) storiesSelection.classList.add('hidden');
  if (readingGame) {
    readingGame.classList.remove('hidden');
    displayStory(story);
  }
}

function displayStory(story) {
  const storyTitleElement = document.getElementById('story-title');
  const storyTextElement = document.getElementById('story-text');
  
  if (storyTitleElement) storyTitleElement.textContent = story.title;
  if (storyTextElement) storyTextElement.textContent = story.content;
  
  // Create questions
  const questionsContainer = document.getElementById('questions-container');
  if (questionsContainer) {
    questionsContainer.innerHTML = '';
    
    story.questions.forEach((question, qIndex) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question-item';
      
      const questionTitle = document.createElement('h4');
      questionTitle.textContent = `${qIndex + 1}. ${question.question}`;
      questionDiv.appendChild(questionTitle);
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'question-options';
      
      question.options.forEach((option, oIndex) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'question-option';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectReadingAnswer(qIndex, oIndex);
        optionBtn.dataset.questionIndex = qIndex;
        optionBtn.dataset.optionIndex = oIndex;
        
        optionsDiv.appendChild(optionBtn);
      });
      
      questionDiv.appendChild(optionsDiv);
      questionsContainer.appendChild(questionDiv);
    });
  }
  
  // Update progress
  const progressFill = document.getElementById('reading-progress-fill');
  if (progressFill) {
    progressFill.style.width = '50%'; // Story read, questions pending
  }
}

function selectReadingAnswer(questionIndex, optionIndex) {
  readingAnswers[questionIndex] = optionIndex;
  
  // Update UI to show selection
  const questionOptions = document.querySelectorAll(`[data-question-index="${questionIndex}"]`);
  questionOptions.forEach(option => {
    option.classList.remove('selected');
  });
  
  const selectedOption = document.querySelector(`[data-question-index="${questionIndex}"][data-option-index="${optionIndex}"]`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  
  // Check if all questions answered
  const story = appData.stories[currentReadingStory];
  if (Object.keys(readingAnswers).length === story.questions.length) {
    const submitBtn = document.getElementById('submit-answers');
    if (submitBtn) {
      submitBtn.style.opacity = '1';
      submitBtn.disabled = false;
    }
  }
}

function submitReadingAnswers() {
  const story = appData.stories[currentReadingStory];
  let correctAnswers = 0;
  
  story.questions.forEach((question, index) => {
    if (readingAnswers[index] === question.correct) {
      correctAnswers++;
    }
  });
  
  score = correctAnswers;
  
  const readingGame = document.getElementById('reading-game');
  const readingResults = document.getElementById('reading-results');
  
  if (readingGame) readingGame.classList.add('hidden');
  if (readingResults) {
    readingResults.classList.remove('hidden');
    
    const finalScoreElement = document.getElementById('final-reading-score');
    if (finalScoreElement) {
      finalScoreElement.textContent = correctAnswers;
    }
    
    updateProgress('tell-me-more', (correctAnswers / story.questions.length) * 100);
    createReadingCharts();
  }
}

function createReadingCharts() {
  try {
    // Reading speed chart
    const ctx1 = document.getElementById('readingSpeedChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Inicio', 'Mitad', 'Final'],
          datasets: [{
            label: 'Palabras por Minuto',
            data: [150, 180, 200], // Simulated data
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Velocidad de Lectura Progresiva',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
    
    // Comprehension accuracy chart
    const ctx2 = document.getElementById('readingAccuracyChart');
    if (ctx2) {
      const story = appData.stories[currentReadingStory];
      new Chart(ctx2.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Correctas', 'Incorrectas'],
          datasets: [{
            data: [score, story.questions.length - score],
            backgroundColor: ['#8B5CF6', '#EF4444']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Precisión de Comprensión',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating reading charts:', error);
  }
}

function resetReadingModule() {
  const readingResults = document.getElementById('reading-results');
  const storiesSelection = document.querySelector('.stories-selection');
  
  if (readingResults) readingResults.classList.add('hidden');
  if (storiesSelection) storiesSelection.classList.remove('hidden');
  
  resetModuleState();
}

// MODULE 5: BABY GAMES
function startBabyGame(gameIndex) {
  console.log('Starting baby game:', gameIndex);
  
  currentQuestion = 0;
  score = 0;
  
  const game = appData.babyGames[gameIndex];
  if (!game) {
    console.error('Baby game not found:', gameIndex);
    return;
  }
  
  gameData = {
    game: game,
    answers: [],
    currentGameIndex: gameIndex
  };
  
  const babyGamesGrid = document.querySelector('.baby-games-grid');
  const babyGameContainer = document.getElementById('baby-game');
  
  if (babyGamesGrid) babyGamesGrid.classList.add('hidden');
  if (babyGameContainer) {
    babyGameContainer.classList.remove('hidden');
    
    const titleElement = document.getElementById('baby-game-title');
    if (titleElement) titleElement.textContent = game.name;
    
    showBabyQuestion();
  }
}

function showBabyQuestion() {
  if (currentQuestion >= gameData.game.questions.length) {
    showBabyResults();
    return;
  }
  
  const question = gameData.game.questions[currentQuestion];
  const gameContent = document.getElementById('baby-game-content');
  
  if (gameContent) {
    gameContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">${question.emoji || '🎯'}</div>
        <h3 style="color: white; font-size: 1.5rem; margin-bottom: 2rem;">${question.question}</h3>
        <div class="baby-options-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 400px; margin: 0 auto;">
          ${question.options.map((option, index) => `
            <button class="baby-option-btn" onclick="selectBabyAnswer(${index})" style="
              background: linear-gradient(135deg, #EC4899, #F472B6);
              color: white;
              border: none;
              padding: 1rem;
              border-radius: 15px;
              font-size: 1.1rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            ">${option}</button>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Update score display
  const scoreElement = document.getElementById('baby-score');
  const starsElement = document.getElementById('baby-stars-count');
  
  if (scoreElement) scoreElement.textContent = score;
  if (starsElement) starsElement.textContent = score;
}

function selectBabyAnswer(selectedIndex) {
  const question = gameData.game.questions[currentQuestion];
  const isCorrect = selectedIndex === question.correct;
  
  if (isCorrect) {
    score++;
  }
  
  gameData.answers.push({
    question: currentQuestion,
    correct: isCorrect,
    selectedIndex
  });
  
  // Show feedback
  const buttons = document.querySelectorAll('.baby-option-btn');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.style.background = 'linear-gradient(135deg, #22C55E, #34D399)';
    } else if (index === selectedIndex && !isCorrect) {
      btn.style.background = 'linear-gradient(135deg, #EF4444, #F87171)';
    }
  });
  
  // Show next button
  const nextButton = document.getElementById('baby-next');
  if (nextButton) {
    nextButton.classList.remove('hidden');
  }
  
  // Update score display
  const scoreElement = document.getElementById('baby-score');
  const starsElement = document.getElementById('baby-stars-count');
  
  if (scoreElement) scoreElement.textContent = score;
  if (starsElement) starsElement.textContent = score;
}

function nextBabyQuestion() {
  currentQuestion++;
  
  const nextButton = document.getElementById('baby-next');
  if (nextButton) {
    nextButton.classList.add('hidden');
  }
  
  showBabyQuestion();
}

function showBabyResults() {
  const babyGame = document.getElementById('baby-game');
  const babyResults = document.getElementById('baby-results');
  
  if (babyGame) babyGame.classList.add('hidden');
  if (babyResults) {
    babyResults.classList.remove('hidden');
    
    const finalScoreElement = document.getElementById('final-baby-score');
    if (finalScoreElement) {
      finalScoreElement.textContent = score;
    }
    
    updateProgress('baby-games', (score / gameData.game.questions.length) * 100);
    createBabyCharts();
  }
}

function createBabyCharts() {
  try {
    // Learning progress chart
    const ctx1 = document.getElementById('babyProgressChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Colores', 'Números', 'Letras'],
          datasets: [{
            label: 'Puntuación',
            data: [
              gameData.currentGameIndex === 0 ? score : Math.floor(Math.random() * 5),
              gameData.currentGameIndex === 1 ? score : Math.floor(Math.random() * 5),
              gameData.currentGameIndex === 2 ? score : Math.floor(Math.random() * 5)
            ],
            backgroundColor: ['#EC4899', '#F472B6', '#F59E0B']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Tu Progreso de Aprendizaje 🌟',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 5,
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
    
    // Favorite games chart
    const ctx2 = document.getElementById('babyFavoriteChart');
    if (ctx2) {
      new Chart(ctx2.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Colores 🎨', 'Números 🔢', 'Letras 🔤'],
          datasets: [{
            data: [30, 35, 35],
            backgroundColor: ['#EC4899', '#F472B6', '#F59E0B']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Tus Juegos Favoritos 😊',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating baby charts:', error);
  }
}

function resetBabyModule() {
  const babyResults = document.getElementById('baby-results');
  const babyGamesGrid = document.querySelector('.baby-games-grid');
  
  if (babyResults) babyResults.classList.add('hidden');
  if (babyGamesGrid) babyGamesGrid.classList.remove('hidden');
  
  resetModuleState();
}

// MODULE 6: LINK & LEARN
function loadResources() {
  console.log('Loading resources');
  loadPlatforms();
  loadYouTubeChannels();
}

function showTab(tabName) {
  console.log('Showing tab:', tabName);
  
  // Update tab buttons
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeTab = Array.from(tabButtons).find(btn => 
    btn.onclick && btn.onclick.toString().includes(tabName)
  );
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Show/hide tab content
  const platformsTab = document.getElementById('platforms-tab');
  const youtubeTab = document.getElementById('youtube-tab');
  
  if (tabName === 'platforms') {
    if (platformsTab) platformsTab.classList.remove('hidden');
    if (youtubeTab) youtubeTab.classList.add('hidden');
  } else if (tabName === 'youtube') {
    if (platformsTab) platformsTab.classList.add('hidden');
    if (youtubeTab) youtubeTab.classList.remove('hidden');
  }
}

function loadPlatforms() {
  const platformsGrid = document.getElementById('platforms-grid');
  if (!platformsGrid) return;
  
  platformsGrid.innerHTML = '';
  
  appData.learningResources.platforms.forEach((platform, index) => {
    const platformCard = createResourceCard(platform, index, 'platform');
    platformsGrid.appendChild(platformCard);
  });
}

function loadYouTubeChannels() {
  const youtubeGrid = document.getElementById('youtube-grid');
  if (!youtubeGrid) return;
  
  youtubeGrid.innerHTML = '';
  
  appData.learningResources.youtubeChannels.forEach((channel, index) => {
    const channelCard = createYouTubeCard(channel, index);
    youtubeGrid.appendChild(channelCard);
  });
}

function createResourceCard(resource, index, type) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  
  card.innerHTML = `
    <h4>${resource.name}</h4>
    <p>${resource.description}</p>
    <div class="resource-meta">
      <span class="resource-type">${resource.type}</span>
      <div class="resource-rating">
        <span class="rating-stars">${'⭐'.repeat(Math.floor(resource.rating))}</span>
        <span>${resource.rating}</span>
      </div>
    </div>
    <div class="resource-features">
      <div class="feature-tags">
        ${resource.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
    </div>
    <p><strong>Ideal para:</strong> ${resource.bestFor}</p>
    <div class="resource-actions">
      <button class="resource-btn" onclick="visitResource('${resource.url || '#'}', ${index}, '${type}')">
        Visitar Recurso
      </button>
    </div>
  `;
  
  return card;
}

function createYouTubeCard(channel, index) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  
  card.innerHTML = `
    <h4>${channel.name}</h4>
    <p>${channel.description}</p>
    <div class="resource-meta">
      <span class="resource-type">📺 YouTube</span>
      <div class="resource-rating">
        <span class="rating-stars">${'⭐'.repeat(Math.floor(channel.rating))}</span>
        <span>${channel.rating}</span>
      </div>
    </div>
    <div class="resource-features">
      <div class="feature-tags">
        ${channel.focus.map(focus => `<span class="feature-tag">${focus}</span>`).join('')}
      </div>
    </div>
    <p><strong>Suscriptores:</strong> ${channel.subscribers}</p>
    <p><strong>Ideal para:</strong> ${channel.bestFor}</p>
    <div class="resource-actions">
      <button class="resource-btn" onclick="visitResource('${channel.url || '#'}', ${index}, 'youtube')">
        Ver Canal
      </button>
    </div>
  `;
  
  return card;
}

function visitResource(url, index, type) {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
  
  // Track usage for statistics
  updateResourceStats(index, type);
}

function updateResourceStats(index, type) {
  // This would normally update usage statistics
  console.log(`Resource accessed: ${type} #${index}`);
}

function filterPlatforms() {
  const typeFilter = document.getElementById('platform-filter');
  const ratingFilter = document.getElementById('rating-filter');
  
  if (!typeFilter || !ratingFilter) return;
  
  const selectedType = typeFilter.value;
  const minRating = parseFloat(ratingFilter.value);
  
  const platformsGrid = document.getElementById('platforms-grid');
  if (!platformsGrid) return;
  
  platformsGrid.innerHTML = '';
  
  let filteredPlatforms = appData.learningResources.platforms;
  
  if (selectedType !== 'all') {
    filteredPlatforms = filteredPlatforms.filter(platform => 
      platform.type.toLowerCase().includes(selectedType.toLowerCase())
    );
  }
  
  if (minRating > 0) {
    filteredPlatforms = filteredPlatforms.filter(platform => 
      platform.rating >= minRating
    );
  }
  
  filteredPlatforms.forEach((platform, index) => {
    const platformCard = createResourceCard(platform, index, 'platform');
    platformsGrid.appendChild(platformCard);
  });
}

function sortYouTubeChannels() {
  const sortSelect = document.getElementById('youtube-sort');
  if (!sortSelect) return;
  
  const sortBy = sortSelect.value;
  let sortedChannels = [...appData.learningResources.youtubeChannels];
  
  switch (sortBy) {
    case 'rating':
      sortedChannels.sort((a, b) => b.rating - a.rating);
      break;
    case 'subscribers':
      sortedChannels.sort((a, b) => {
        const aNum = parseFloat(a.subscribers.replace(/[^\d.]/g, ''));
        const bNum = parseFloat(b.subscribers.replace(/[^\d.]/g, ''));
        return bNum - aNum;
      });
      break;
    case 'name':
      sortedChannels.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  
  const youtubeGrid = document.getElementById('youtube-grid');
  if (!youtubeGrid) return;
  
  youtubeGrid.innerHTML = '';
  
  sortedChannels.forEach((channel, index) => {
    const channelCard = createYouTubeCard(channel, index);
    youtubeGrid.appendChild(channelCard);
  });
}

function showResourceCharts() {
  const resourceCharts = document.getElementById('resource-charts');
  if (resourceCharts) {
    resourceCharts.classList.remove('hidden');
    createResourceCharts();
  }
}

function hideResourceCharts() {
  const resourceCharts = document.getElementById('resource-charts');
  if (resourceCharts) {
    resourceCharts.classList.add('hidden');
  }
}

function createResourceCharts() {
  try {
    // Resource popularity chart
    const ctx1 = document.getElementById('resourcePopularityChart');
    if (ctx1) {
      new Chart(ctx1.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Duolingo', 'BBC Learning', 'Cambridge', 'FluentU', 'Grammarly'],
          datasets: [{
            label: 'Accesos Mensuales',
            data: [1200, 950, 800, 650, 700],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Recursos Más Populares',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#fff'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }
    
    // Rating distribution chart
    const ctx2 = document.getElementById('resourceRatingChart');
    if (ctx2) {
      new Chart(ctx2.getContext('2d'), {
        type: 'pie',
        data: {
          labels: ['5 Estrellas', '4-4.9 Estrellas', '3-3.9 Estrellas', 'Menos de 3'],
          datasets: [{
            data: [40, 45, 10, 5],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Distribución de Calificaciones',
              color: '#fff'
            },
            legend: {
              labels: {
                color: '#fff'
              }
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating resource charts:', error);
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('QuantumAI 2025 initialized successfully!');
  
  // Initialize Link & Learn resources
  loadResources();
  
  // Add smooth scrolling
  document.documentElement.classList.add('scroll-smooth');
});