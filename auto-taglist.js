/* 🧠 THE TAGGING BRAIN
   --------------------------------------------------
   Jen, this is your intuition engine. 
   Add your triggers below. 
   Format: "keyword": ["#Tag1", "#Tag2"]
*/

const tagDictionary = {

    // --- 👀 BASE FACIAL EXPRESSIONS ---
    "smile/smiles/smiled/smiling":
    ["#smile", "#Expression"],

    "laugh/laughs/laughed/laughing":
    ["#laugh", "#Sound", "#Expression"],

    "grin":
    ["#grin", "#Expression"],

    "giggle/giggles/giggling/giggled":
    ["#giggle", "#happy", "#Sound", "#Expression"],

    "smirk/smirked/smirking":
    ["#Confident", "#cocky", "#smirk", "#Expression"],

    "chuckle/chuckles/chuckled/chuckling":
    ["#chuckle", "#Sound", "#Expression"],


    // --- 😀 POSITIVE EXPRESSIONS ---
    "amuse/amused/amusement":
    ["#amused", "#Light", "#Emotion"],

    "delight/delighted":
    ["#delight", "#Joy", "#Emotion"],

    "welcoming":
    ["#friendly", "#warm", "#inviting", "#Emotion"],

    "genuine/genuinely/sincere": 
    ["#authentic", "#honest", "#open", "#heartfelt", "#sincere", "#earnest", "#real", "#Descriptors"],

    "warm/warmly":          
    ["#affectionate", "#tender", "#genuine", "#comforting", "#warm", "#Emotion"],

    "radiant/beaming":
    ["#joyful", "#delighted", "#Bright", "#Radiant", "#Beaming", "#Expression"],

    "tender/tenderly":
    ["#Gentle", "#Caring", "#Soft", "#Loving", "#Emotion"],

    "kind/kindly":
    ["#Benevolent", "#Welcoming", "#Compassionate", "#Gentle", "#Emotion"],
      
    "friendly":      
    ["#approachable", "#warm", "#Welcoming", "#Pleasant", "#friendly", "#Emotion"],


    // --- 😡 NEGATIVE EMOTION WORDS ---
    "dark/darkly": 
    ["#Malicious", "#Ominous", "#Threatening", "#Sinister", "#Descriptors"],

    "cold/coldly": 
    ["#Detached", "#Hostile", "#Unfeeling", "#Cruel", "#Descriptors"],

    "bitter/bitterly": 
    ["#Resentful", "#Pained", "#Cynical", "#Disappointed", "#Emotion"],

    "hollow": 
    ["#Insincere", "#Lifeless", "#Disconnected", "#Vacant", "#Descriptors"],

    "empty": 
    ["#Vacant", "#Emotionless", "#Lifeless", "#Void", "#Descriptors"],

    "tight/tightly": 
    ["#Uncomfortable", "#Stressed", "#Forced", "#Tense", "#Descriptors"],

    "tense": 
    ["#Anxious", "#Strained", "#Uncomfortable", "#Rigid", "#Emotion"],

    "strained": 
    ["#Forced", "#Difficult", "#Stressed", "#Uncomfortable", "#Descriptors"],

    "sad/sadly": 
    ["#Sorrowful", "#Melancholy", "#Unhappy", "#Downcast", "#Emotion"],

    "sorrowful": 
    ["#Grieving", "#Sad", "#Mournful", "#Pained", "#Emotion"],

    "melancholy": 
    ["#Sad", "#Wistful", "#Pensive", "#Nostalgic", "#Emotion"],

    "mournful": 
    ["#Grieving", "#Sad", "#Sorrowful", "#Heavy", "#Emotion"],


    // --- 🤥 DECEPTIVE/CUNNING WORDS ---
    "sly/slyly": 
    ["#Cunning", "#Clever", "#Deceptive", "#Mischievous", "#Descriptors"],

    "cunning": 
    ["#Calculating", "#Strategic", "#Manipulative", "#Scheming", "#Descriptors"],

    "crafty": 
    ["#Shrewd", "#Clever", "#Tactical", "#Devious", "#Descriptors"],

    "wily": 
    ["#Cunning", "#Clever", "#Sly", "#Tricky", "#Descriptors"],

    "calculating": 
    ["#Strategic", "#Deliberate", "#Cold", "#Analytical", "#Descriptors"],

    "shrewd": 
    ["#Astute", "#Clever", "#Perceptive", "#Sharp", "#Descriptors"],

    "scheming": 
    ["#Plotting", "#Manipulative", "#Devious", "#Calculating", "#Descriptors"],

    "devious": 
    ["#Deceitful", "#Cunning", "#Underhanded", "#Tricky", "#Descriptors"],


    // --- 🦁 POWER/DOMINANCE WORDS ---
    "predatory": 
    ["#Dominant", "#Dangerous", "#Intense", "#Hunting", "#Descriptors"],

    "menacing": 
    ["#Threatening", "#Dangerous", "#Hostile", "#Intimidating", "#Descriptors"],

    "threatening": 
    ["#Dangerous", "#Hostile", "#Aggressive", "#Menacing", "#Descriptors"],

    "ominous": 
    ["#Foreboding", "#Threatening", "#Dark", "#Sinister", "#Descriptors"],

    "sinister": 
    ["#Evil", "#Malicious", "#Dark", "#Threatening", "#Descriptors"],

    "malevolent": 
    ["#Evil", "#Malicious", "#Cruel", "#Harmful", "#Emotion"],

    "superior": 
    ["#Arrogant", "#Confident", "#Dismissive", "#Proud", "#Emotion"],

    "commanding": 
    ["#Authoritative", "#Powerful", "#Controlling", "#Assertive", "#Descriptors"],

    "dominant": 
    ["#Controlling", "#Powerful", "#Assertive", "#Alpha", "#Descriptors"],

    "intimidating": 
    ["#Threatening", "#Powerful", "#Frightening", "#Imposing", "#Descriptors"],


    // --- 💨 INTENSITY MODIFIER VERBS ---
    "curved": 
    ["#Subtle", "#Gentle", "#Delicate", "#Descriptors"],

    "touched": 
    ["#Gentle", "#Light", "#Barely-there", "#Descriptors"],

    "flickered": 
    ["#Brief", "#Fleeting", "#Subtle", "#Descriptors"],

    "tugged": 
    ["#Subtle", "#Restrained", "#Fighting", "#Descriptors"],

    "played": 
    ["#Subtle", "#Dancing", "#Fleeting", "#Descriptors"],

    "spread": 
    ["#Moderate", "#Visible", "#Growing", "#Descriptors"],

    "crossed": 
    ["#Visible", "#Clear", "#Deliberate", "#Descriptors"],

    "formed": 
    ["#Deliberate", "#Conscious", "#Visible", "#Descriptors"],

    "appeared": 
    ["#Sudden", "#Emerging", "#Visible", "#Descriptors"],

    "emerged": 
    ["#Gradual", "#Surfacing", "#Becoming", "#Descriptors"],

    "burst": 
    ["#Intense", "#Sudden", "#Explosive", "#Descriptors"],

    "exploded": 
    ["#Intense", "#Violent", "#Overwhelming", "#Descriptors"],

    "erupted": 
    ["#Intense", "#Sudden", "#Uncontrolled", "#Descriptors"],

    "twisted": 
    ["#Distorted", "#Unnatural", "#Sinister", "#Descriptors"],

    "slipped": 
    ["#Involuntary", "#Uncontrolled", "#Escaping", "#Descriptors"],

    "escaped": 
    ["#Involuntary", "#Unintended", "#Released", "#Descriptors"],


    // --- 😜 PLAYFUL ---
    "mischievous/mischievously": 
    ["#Playful", "#Cheeky", "#Teasing", "#Fun", "#Emotion"],

    "impish": 
    ["#Playful", "#Cheeky", "#Devilish", "#Spirited", "#Emotion"],

    "playful/playfully": 
    ["#Lighthearted", "#Fun", "#Spirited", "#Energetic", "#Emotion"],

    "cheeky": 
    ["#Bold", "#Sassy", "#Irreverent", "#Playful", "#Emotion"],

    "roguish": 
    ["#Charming", "#Mischievous", "#Daring", "#Rebellious", "#Emotion"],

    "devilish": 
    ["#Mischievous", "#Playful", "#Naughty", "#Impish", "#Emotion"],

    "teasing/teasingly": 
    ["#Playful", "#Provocative", "#Fun", "#Bantering", "#Emotion"],

    "spirited": 
    ["#Energetic", "#Lively", "#Enthusiastic", "#Vivacious", "#Emotion"],


    // --- 🫦 SENSUAL ---
    "sultry": 
    ["#Sensual", "#Alluring", "#Intimate", "#Suggestive", "#Descriptors"],

    "seductive/seductively": 
    ["#Alluring", "#Tempting", "#Intimate", "#Provocative", "#Descriptors"],

    "coy/coyly": 
    ["#Flirtatious", "#Shy", "#Playful", "#Teasing", "#Emotion"],

    "alluring": 
    ["#Captivating", "#Magnetic", "#Seductive", "#Attractive", "#Descriptors"],

    "beguiling": 
    ["#Enchanting", "#Captivating", "#Charming", "#Seductive", "#Descriptors"],

    "inviting": 
    ["#Welcoming", "#Suggestive", "#Open", "#Receptive", "#Descriptors"],

    "suggestive": 
    ["#Implicit", "#Provocative", "#Hinting", "#Intimate", "#Descriptors"],

    "provocative/provocatively": 
    ["#Bold", "#Challenging", "#Suggestive", "#Daring", "#Descriptors"],

    "sensual": 
    ["#Physical", "#Intimate", "#Pleasure", "#Arousing", "#Descriptors"],

    "flirtatious/flirty": 
    ["#Playful", "#Romantic", "#Teasing", "#Interested", "#Emotion"],


    // --- 🥺 UNCERTAINTY WORDS ---
    "hesitant/hesitantly": 
    ["#Uncertain", "#Cautious", "#Nervous", "#Unsure", "#Emotion"],

    "tentative/tentatively": 
    ["#Cautious", "#Uncertain", "#Careful", "#Timid", "#Emotion"],

    "wavering": 
    ["#Indecisive", "#Unstable", "#Conflicted", "#Weak", "#Descriptors"],

    "uncertain/uncertainly": 
    ["#Doubtful", "#Questioning", "#Anxious", "#Unsure", "#Emotion"],

    "cautious/cautiously": 
    ["#Careful", "#Wary", "#Guarded", "#Prudent", "#Emotion"],

    "timid/timidly": 
    ["#Shy", "#Fearful", "#Hesitant", "#Meek", "#Emotion"],

    "unsure": 
    ["#Doubtful", "#Uncertain", "#Hesitant", "#Questioning", "#Emotion"],

    "reluctant/reluctantly": 
    ["#Unwilling", "#Hesitant", "#Reserved", "#Resistant", "#Emotion"],


    // --- 😎 CONFIDENCE WORDS ---
    "smug/smugly": 
    ["#Self-satisfied", "#Arrogant", "#Superior", "#Pleased", "#Emotion"],

    "confident/confidently": 
    ["#Bold", "#Certain", "#Strong", "#Assured", "#Emotion"],

    "assured": 
    ["#Confident", "#Certain", "#Poised", "#Secure", "#Emotion"],

    "bold/boldly": 
    ["#Daring", "#Fearless", "#Audacious", "#Brave", "#Descriptors"],

    "brazen": 
    ["#Bold", "#Shameless", "#Audacious", "#Defiant", "#Descriptors"],

    "arrogant": 
    ["#Conceited", "#Superior", "#Haughty", "#Prideful", "#Emotion"],

    "conceited": 
    ["#Vain", "#Self-important", "#Arrogant", "#Egotistical", "#Emotion"],

    "proud/proudly": 
    ["#Satisfied", "#Dignified", "#Accomplished", "#Pleased", "#Emotion"],


    // --- 🫥 ARTIFICIAL/FORCED WORDS ---
    "forced": 
    ["#Insincere", "#Unnatural", "#Strained", "#Fake", "#Descriptors"],

    "plastic": 
    ["#Fake", "#Artificial", "#Superficial", "#Insincere", "#Descriptors"],

    "fake": 
    ["#False", "#Insincere", "#Pretend", "#Artificial", "#Descriptors"],

    "false": 
    ["#Untrue", "#Fake", "#Deceptive", "#Dishonest", "#Descriptors"],

    "artificial": 
    ["#Fake", "#Manufactured", "#Unnatural", "#Contrived", "#Descriptors"],

    "contrived": 
    ["#Forced", "#Unnatural", "#Artificial", "#Fabricated", "#Descriptors"],

    "mechanical/mechanically": 
    ["#Robotic", "#Automatic", "#Emotionless", "#Routine", "#Descriptors"],

    "automatic": 
    ["#Reflexive", "#Unconscious", "#Habitual", "#Mechanical", "#Descriptors"],

    "phony": 
    ["#Fake", "#False", "#Insincere", "#Fraudulent", "#Descriptors"],

    "insincere/insincerely": 
    ["#False", "#Dishonest", "#Fake", "#Disingenuous", "#Emotion"],


    // --- 😇 SOCIAL/POLITE WORDS ---
    "polite/politely": 
    ["#Formal", "#Respectful", "#Courteous", "#Proper", "#Descriptors"],

    "courteous": 
    ["#Polite", "#Respectful", "#Well-mannered", "#Civil", "#Descriptors"],

    "diplomatic/diplomatically": 
    ["#Tactful", "#Careful", "#Strategic", "#Political", "#Descriptors"],

    "gracious/graciously": 
    ["#Kind", "#Elegant", "#Generous", "#Courteous", "#Descriptors"],

    "civil": 
    ["#Polite", "#Courteous", "#Respectful", "#Proper", "#Descriptors"],

    "respectful/respectfully": 
    ["#Polite", "#Deferential", "#Courteous", "#Considerate", "#Emotion"],

    "formal/formally": 
    ["#Proper", "#Official", "#Reserved", "#Ceremonious", "#Descriptors"],


    // --- 📐 PHYSICAL DESCRIPTOR WORDS ---
    "crooked": 
    ["#Asymmetric", "#Quirky", "#Imperfect", "#Uneven", "#Descriptors"],

    "lopsided": 
    ["#Asymmetric", "#Tilted", "#Uneven", "#Off-center", "#Descriptors"],

    "slanted": 
    ["#Angled", "#Tilted", "#Diagonal", "#Askew", "#Descriptors"],

    "sharp/sharply": 
    ["#Cutting", "#Precise", "#Harsh", "#Pointed", "#Descriptors"],

    "razor": 
    ["#Sharp", "#Dangerous", "#Cutting", "#Precise", "#Descriptors"],

    "thin": 
    ["#Minimal", "#Weak", "#Slight", "#Fragile", "#Descriptors"],

    "weak/weakly": 
    ["#Feeble", "#Fragile", "#Faint", "#Powerless", "#Descriptors"],

    "faint/faintly": 
    ["#Barely-there", "#Weak", "#Subtle", "#Delicate", "#Descriptors"],

    "delicate": 
    ["#Fragile", "#Subtle", "#Gentle", "#Fine", "#Descriptors"],

    "slight/slightly": 
    ["#Small", "#Minimal", "#Subtle", "#Minor", "#Descriptors"],


    // --- 🤣 LAUGHTER INTENSITY WORDS ---
    "roared": 
    ["#Loud", "#Powerful", "#Uninhibited", "#Intense", "#Sound"],

    "thunderous": 
    ["#Loud", "#Booming", "#Powerful", "#Overwhelming", "#Sound"],

    "booming": 
    ["#Loud", "#Deep", "#Resonant", "#Powerful", "#Sound"],

    "bellowed": 
    ["#Loud", "#Deep", "#Forceful", "#Intense", "#Sound"],

    "howled": 
    ["#Loud", "#Unrestrained", "#Wild", "#Intense", "#Sound"],

    "guffawed": 
    ["#Loud", "#Hearty", "#Boisterous", "#Unrefined", "#Sound"],

    "cackled": 
    ["#Sharp", "#High-pitched", "#Gleeful", "#Wild", "#Sound"],

    "silent/silently": 
    ["#Quiet", "#Suppressed", "#Internal", "#Soundless", "#Sound"],

    "soundless": 
    ["#Silent", "#Quiet", "#Mute", "#Voiceless", "#Sound"],

    "gasping": 
    ["#Breathless", "#Struggling", "#Physical", "#Intense", "#Sound"],

    "breathless": 
    ["#Winded", "#Overwhelming", "#Intense", "#Gasping", "#Sound"],

    "wheezing": 
    ["#Struggling", "#Breathless", "#Physical", "#Strained", "#Sound"],


    // --- 🤓 KNOWLEDGE/AWARENESS WORDS ---
    "knowing/knowingly": 
    ["#Aware", "#Understanding", "#Perceptive", "#Informed", "#Emotion"],

    "perceptive": 
    ["#Insightful", "#Astute", "#Observant", "#Sharp", "#Descriptors"],

    "astute": 
    ["#Clever", "#Perceptive", "#Shrewd", "#Sharp", "#Descriptors"],

    "wise/wisely": 
    ["#Knowledgeable", "#Experienced", "#Judicious", "#Sage", "#Descriptors"],

    "understanding": 
    ["#Comprehending", "#Sympathetic", "#Aware", "#Insightful", "#Emotion"],

    "insightful": 
    ["#Perceptive", "#Discerning", "#Penetrating", "#Astute", "#Descriptors"],


    // --- 😌 RELIEF/GRATITUDE WORDS ---
    "relieved": 
    ["#Grateful", "#Eased", "#Unburdened", "#Thankful", "#Emotion"],

    "grateful/gratefully": 
    ["#Thankful", "#Appreciative", "#Relieved", "#Indebted", "#Emotion"],

    "thankful": 
    ["#Grateful", "#Appreciative", "#Blessed", "#Relieved", "#Emotion"],


    // --- 😠 MOCKERY/CONTEMPT WORDS ---
    "mocking/mockingly": 
    ["#Derisive", "#Scornful", "#Ridiculing", "#Contemptuous", "#Emotion"],

    "derisive/derisively": 
    ["#Mocking", "#Scornful", "#Contemptuous", "#Dismissive", "#Emotion"],

    "scornful/scornfully": 
    ["#Contemptuous", "#Disdainful", "#Mocking", "#Dismissive", "#Emotion"],

    "contemptuous": 
    ["#Disdainful", "#Scornful", "#Disrespectful", "#Arrogant", "#Emotion"],

    "sardonic": 
    ["#Mocking", "#Cynical", "#Sarcastic", "#Bitter", "#Descriptors"],

    "sarcastic/sarcastically": 
    ["#Ironic", "#Mocking", "#Cutting", "#Cynical", "#Descriptors"],

    "cynical/cynically": 
    ["#Skeptical", "#Pessimistic", "#Distrustful", "#Sarcastic", "#Emotion"],


    // --- 😖 NERVOUSNESS/ANXIETY WORDS ---
    "nervous/nervously": 
    ["#Anxious", "#Uneasy", "#Worried", "#Tense", "#Emotion"],

    "anxious/anxiously": 
    ["#Nervous", "#Worried", "#Stressed", "#Fearful", "#Emotion"],

    "uneasy": 
    ["#Uncomfortable", "#Nervous", "#Worried", "#Restless", "#Emotion"],

    "awkward/awkwardly": 
    ["#Uncomfortable", "#Clumsy", "#Self-conscious", "#Embarrassed", "#Descriptors"],

    "uncomfortable/uncomfortably": 
    ["#Uneasy", "#Awkward", "#Strained", "#Tense", "#Emotion"],

    "jittery": 
    ["#Nervous", "#Jumpy", "#Anxious", "#Restless", "#Descriptors"],

    "edgy": 
    ["#Tense", "#Nervous", "#Irritable", "#On-edge", "#Emotion"],


    // --- 😏 CHARM/APPEAL WORDS ---
    "charming/charmingly": 
    ["#Appealing", "#Charismatic", "#Delightful", "#Winning", "#Descriptors"],

    "captivating": 
    ["#Mesmerizing", "#Fascinating", "#Enchanting", "#Compelling", "#Descriptors"],

    "enchanting": 
    ["#Magical", "#Captivating", "#Charming", "#Bewitching", "#Descriptors"],

    "magnetic": 
    ["#Attractive", "#Compelling", "#Charismatic", "#Irresistible", "#Descriptors"],

    "winning": 
    ["#Charming", "#Appealing", "#Attractive", "#Successful", "#Descriptors"],

    "appealing": 
    ["#Attractive", "#Desirable", "#Pleasing", "#Charming", "#Descriptors"],


    // --- 🤗 WELCOMING/INVITING WORDS ---
    "hospitable": 
    ["#Welcoming", "#Generous", "#Warm", "#Friendly", "#Descriptors"],

    "embracing": 
    ["#Welcoming", "#Accepting", "#Inclusive", "#Open", "#Descriptors"],

    "receptive": 
    ["#Open", "#Welcoming", "#Accepting", "#Responsive", "#Emotion"],

    "inclusive": 
    ["#Welcoming", "#Accepting", "#Open", "#Embracing", "#Descriptors"],


    // --- 🥹 NOSTALGIA/LONGING WORDS ---
    "wistful/wistfully": 
    ["#Nostalgic", "#Longing", "#Melancholy", "#Yearning", "#Emotion"],

    "nostalgic": 
    ["#Wistful", "#Sentimental", "#Remembering", "#Longing", "#Emotion"],

    "longing": 
    ["#Yearning", "#Desiring", "#Wistful", "#Aching", "#Emotion"],

    "bittersweet": 
    ["#Mixed", "#Nostalgic", "#Sweet-and-sad", "#Complex", "#Emotion"],


    // --- 👀 EYE MOVEMENT & GAZE WORDS ---
    "observed/observing": 
    ["#Watchful", "#Attentive", "#Aware", "#Studying", "#Expression"],

    "noticed/noticing": 
    ["#Aware", "#Perceptive", "#Catching", "#Realizing", "#Expression"],

    "watched/watching": 
    ["#Observant", "#Focused", "#Tracking", "#Monitoring", "#Expression"],

    "studied/studying": 
    ["#Analytical", "#Careful", "#Examining", "#Focused", "#Expression"],

    "examined/examining": 
    ["#Scrutinizing", "#Investigating", "#Analyzing", "#Careful", "#Expression"],

    "scanned/scanning": 
    ["#Searching", "#Quick", "#Surveying", "#Sweeping", "#Expression"],

    "darted": 
    ["#Quick", "#Sudden", "#Nervous", "#Evasive", "#Descriptors"],

    "flicked": 
    ["#Quick", "#Brief", "#Casual", "#Sharp", "#Descriptors"],

    "swept": 
    ["#Quick", "#Broad", "#Surveying", "#Dismissive", "#Descriptors"],

    "peripheral": 
    ["#Indirect", "#Cautious", "#Sideways", "#Subtle", "#Descriptors"],

    "glanced": 
    ["#Brief", "#Quick", "#Casual", "#Fleeting", "#Expression"],

    "bloodshot": 
    ["#Exhausted", "#Strained", "#Emotional", "#Tired", "#Descriptors"],

    "red-rimmed": 
    ["#Tearful", "#Tired", "#Emotional", "#Strained", "#Descriptors"],

    "dilated": 
    ["#Intense", "#Aroused", "#Fear", "#Desire", "#Descriptors"],

    "wide": 
    ["#Surprised", "#Fearful", "#Alert", "#Open", "#Descriptors"],

    "widened": 
    ["#Shocked", "#Surprised", "#Fearful", "#Realization", "#Expression"],

    "lingered/lingering": 
    ["#Deliberate", "#Meaningful", "#Prolonged", "#Intent", "#Descriptors"],

    "held": 
    ["#Steady", "#Intense", "#Locked", "#Unwavering", "#Descriptors"],

    "locked": 
    ["#Fixed", "#Intense", "#Unbreaking", "#Connected", "#Descriptors"],

    "fixed": 
    ["#Steady", "#Focused", "#Unwavering", "#Determined", "#Descriptors"],

    "steady": 
    ["#Calm", "#Confident", "#Unwavering", "#Controlled", "#Descriptors"],

    "prolonged": 
    ["#Extended", "#Intense", "#Deliberate", "#Uncomfortable", "#Descriptors"],

    "furtive": 
    ["#Secretive", "#Guilty", "#Sneaky", "#Cautious", "#Descriptors"],

    "shifty": 
    ["#Untrustworthy", "#Nervous", "#Evasive", "#Suspicious", "#Descriptors"],

    "flickering": 
    ["#Uncertain", "#Nervous", "#Unstable", "#Fleeting", "#Descriptors"],

    "broken": 
    ["#Interrupted", "#Defeated", "#Unable", "#Avoidant", "#Descriptors"],

    "averted": 
    ["#Avoiding", "#Guilty", "#Shy", "#Uncomfortable", "#Expression"],

    "dropped": 
    ["#Submissive", "#Ashamed", "#Defeated", "#Avoiding", "#Expression"],

    "upward": 
    ["#Hopeful", "#Thinking", "#Praying", "#Exasperated", "#Expression"],

    "skyward": 
    ["#Hopeful", "#Pleading", "#Exasperated", "#Searching", "#Expression"],

    "heavenward": 
    ["#Praying", "#Pleading", "#Desperate", "#Reverent", "#Expression"],

    "downward": 
    ["#Ashamed", "#Sad", "#Submissive", "#Thoughtful", "#Expression"],

    "downcast": 
    ["#Sad", "#Defeated", "#Ashamed", "#Depressed", "#Expression"],

    "lowered": 
    ["#Submissive", "#Shy", "#Respectful", "#Avoiding", "#Expression"],

    "sideways": 
    ["#Suspicious", "#Sly", "#Indirect", "#Cautious", "#Expression"],

    "askance": 
    ["#Suspicious", "#Doubtful", "#Disapproving", "#Wary", "#Expression"],

    "sidelong": 
    ["#Sly", "#Flirtatious", "#Suspicious", "#Indirect", "#Expression"],

    "corner": 
    ["#Peripheral", "#Sneaky", "#Subtle", "#Indirect", "#Descriptors"],

    "over": 
    ["#Dismissive", "#Looking-beyond", "#Ignoring", "#Superior", "#Descriptors"],

    "past": 
    ["#Avoiding", "#Distant", "#Ignoring", "#Unfocused", "#Descriptors"],

    "through": 
    ["#Vacant", "#Distant", "#Unseeing", "#Detached", "#Descriptors"],

    "beyond": 
    ["#Distant", "#Unfocused", "#Dreaming", "#Looking-ahead", "#Descriptors"],


   // --- 👁️ PHYSICAL EYE DESCRIPTORS ---
    "narrowed": 
    ["#Suspicious", "#Focused", "#Angry", "#Squinting", "#Expression"],
    "squinted": 
    ["#Narrowed", "#Focused", "#Suspicious", "#Scrutinizing", "#Expression"],
    "hooded": 
    ["#Guarded", "#Mysterious", "#Seductive", "#Hidden", "#Descriptors"],
    "half-lidded": 
    ["#Sleepy", "#Seductive", "#Relaxed", "#Lazy", "#Descriptors"],
    "closed": 
    ["#Peaceful", "#Refusing", "#Resigned", "#Tired", "#Expression"],
    "shut": 
    ["#Closed", "#Refusing", "#Blocking", "#Tired", "#Expression"],
    "rolled": 
    ["#Exasperated", "#Dismissive", "#Annoyed", "#Sarcastic", "#Expression"],
    "crinkled": 
    ["#Smiling", "#Warm", "#Joyful", "#Aged", "#Expression"],
    "softened": 
    ["#Tender", "#Gentle", "#Warm", "#Mellowed", "#Expression"],
    "hardened": 
    ["#Cold", "#Determined", "#Harsh", "#Steely", "#Expression"],
    "lit": 
    ["#Bright", "#Excited", "#Joyful", "#Alive", "#Descriptors"],
    "sparkled/sparkling": 
    ["#Bright", "#Joyful", "#Excited", "#Lively", "#Descriptors"],
    "glittered/glittering": 
    ["#Shining", "#Excited", "#Bright", "#Tears", "#Descriptors"],
    "shone": 
    ["#Bright", "#Emotional", "#Glowing", "#Tears", "#Descriptors"],
    "gleamed/gleaming": 
    ["#Bright", "#Excited", "#Sharp", "#Predatory", "#Descriptors"],
    "glinted": 
    ["#Brief-shine", "#Sharp", "#Mischievous", "#Cold", "#Descriptors"],
    "flashed": 
    ["#Sudden", "#Brief", "#Descriptors"],
    "darkened": 
    ["#Angry", "#Sad", "#Dangerous", "#Clouded", "#Descriptors"],
    "clouded": 
    ["#Confused", "#Sad", "#Troubled", "#Unclear", "#Descriptors"],
    "dimmed": 
    ["#Sad", "#Tired", "#Fading", "#Losing-light", "#Descriptors"],
    "dulled": 
    ["#Lifeless", "#Tired", "#Depressed", "#Lost-shine", "#Descriptors"],
    "shadowed": 
    ["#Dark", "#Troubled", "#Mysterious", "#Pained", "#Descriptors"],
    "haunted": 
    ["#Troubled", "#Tormented", "#Scarred", "#Disturbed", "#Descriptors"],


   // --- 👁️ BLINKING & EYE MOVEMENTS ---
"blink/blinked/blinking": ["#Surprise", "#Processing", "#Reflexive", "#Expression"],
"wink/winked/winking": ["#Playful", "#Flirtatious", "#Secret", "#Expression"],
"stare/stared/staring": ["#Intense", "#Focused", "#Rude", "#Expression"],
"gaze/gazed/gazing": ["#Looking", "#Contemplative", "#Focused", "#Expression"],
"peer/peered/peering": ["#Curious", "#Scrutinizing", "#Looking-closely", "#Expression"],
"squint/squinted/squinting": ["#Suspicious", "#Focused", "#Bright-light", "#Expression"],

   // --- 👁️ INTENSITY/QUALITY MODIFIERS ---
    "intensely": 
    ["#Strong", "#Powerful", "#Extreme", "#Concentrated", "#Descriptors"],

    "deeply": 
    ["#Profound", "#Intense", "#Thoroughly", "#Completely", "#Descriptors"],

    "barely": 
    ["#Minimal", "#Slight", "#Hardly", "#Weak", "#Descriptors"],

    "openly": 
    ["#Honestly", "#Unguarded", "#Freely", "#Obviously", "#Descriptors"],

    "hungrily": 
    ["#Greedy", "#Desirous", "#Intense", "#Craving", "#Emotion"],

    "greedily": 
    ["#Covetous", "#Hungry", "#Selfish", "#Devouring", "#Descriptors"],


    // --- 🍂 EMOTIONAL STATE DESCRIPTORS ---
    "loving": 
    ["#Affectionate", "#Tender", "#Warm", "#Adoring", "#Emotion"],

    "affectionate": 
    ["#Loving", "#Tender", "#Warm", "#Caring", "#Emotion"],

    "admiring": 
    ["#Appreciative", "#Respectful", "#Impressed", "#Fond", "#Emotion"],

    "appreciative": 
    ["#Grateful", "#Admiring", "#Thankful", "#Recognizing", "#Emotion"],

    "joyful": 
    ["#Happy", "#Delighted", "#Bright", "#Cheerful", "#Emotion"],

    "delighted": 
    ["#Pleased", "#Happy", "#Joyful", "#Thrilled", "#Emotion"],

    "compassionate": 
    ["#Empathetic", "#Understanding", "#Kind", "#Caring", "#Emotion"],

    "empathetic": 
    ["#Understanding", "#Compassionate", "#Sensitive", "#Caring", "#Emotion"],

    "beaming": 
    ["#Radiant", "#Joyful", "#Bright", "#Glowing", "#Expression"],

    "hopeful": 
    ["#Optimistic", "#Yearning", "#Expectant", "#Wishing", "#Emotion"],

    "yearning": 
    ["#Longing", "#Desiring", "#Hopeful", "#Aching", "#Emotion"],

    "desire": 
    ["#Wanting", "#Craving", "#Lustful", "#Longing", "#Emotion"],

    "intimate": 
    ["#Close", "#Deep", "#Personal", "#Connected", "#Emotion"],

    "deep": 
    ["#Profound", "#Intense", "#Intimate", "#Meaningful", "#Descriptors"],

    "smoldering": 
    ["#Intense", "#Passionate", "#Heated", "#Burning", "#Expression"],

    "jealous": 
    ["#Envious", "#Possessive", "#Resentful", "#Insecure", "#Emotion"],

    "heartbroken": 
    ["#Devastated", "#Crushed", "#Shattered", "#Grieving", "#Emotion"],

    "pained": 
    ["#Hurt", "#Suffering", "#Anguished", "#Wounded", "#Emotion"],

    "tearful": 
    ["#Crying", "#Emotional", "#Wet", "#Brimming", "#Expression"],

    "misty": 
    ["#Tearful", "#Emotional", "#Foggy", "#Watery", "#Descriptors"],

    "watery": 
    ["#Tearful", "#Wet", "#Glistening", "#Brimming", "#Descriptors"],

    "brimming": 
    ["#Full", "#Tearful", "#About-to-overflow", "#Emotional", "#Descriptors"],

    "desperate": 
    ["#Pleading", "#Urgent", "#Frantic", "#Needy", "#Emotion"],

    "imploring": 
    ["#Begging", "#Pleading", "#Desperate", "#Beseeching", "#Expression"],

    "exhausted": 
    ["#Tired", "#Drained", "#Weary", "#Spent", "#Emotion"],

    "vacant": 
    ["#Empty", "#Blank", "#Hollow", "#Lifeless", "#Descriptors"],

    "vulnerable": 
    ["#Exposed", "#Defenseless", "#Open", "#Fragile", "#Emotion"],

    "lost": 
    ["#Confused", "#Directionless", "#Helpless", "#Bewildered", "#Emotion"],

    "apologetic": 
    ["#Sorry", "#Regretful", "#Remorseful", "#Contrite", "#Emotion"],

    "regretful": 
    ["#Sorry", "#Remorseful", "#Wishing-otherwise", "#Guilty", "#Emotion"],

    "resigned": 
    ["#Accepting", "#Defeated", "#Submissive", "#Giving-up", "#Emotion"],

    "accepting": 
    ["#Resigned", "#Submitting", "#Acquiescing", "#Peaceful", "#Emotion"],

    "guilt-ridden": 
    ["#Guilty", "#Ashamed", "#Remorseful", "#Burdened", "#Emotion"],

    "shamed": 
    ["#Humiliated", "#Embarrassed", "#Guilty", "#Mortified", "#Emotion"],

    "guilt": 
    ["#Remorse", "#Shame", "#Regret", "#Culpability", "#Emotion"],

    "shame": 
    ["#Embarrassment", "#Humiliation", "#Guilt", "#Disgrace", "#Emotion"],

    "pierced": 
    ["#Wounded", "#Hurt", "#Struck", "#Penetrated", "#Descriptors"],

    "wounded": 
    ["#Hurt", "#Injured", "#Damaged", "#Pained", "#Emotion"],

    "angry": 
    ["#Furious", "#Mad", "#Hostile", "#Wrathful", "#Emotion"],

    "hostile": 
    ["#Aggressive", "#Antagonistic", "#Unfriendly", "#Angry", "#Emotion"],

    "disapproving": 
    ["#Critical", "#Judging", "#Censuring", "#Frowning", "#Emotion"],

    "judging": 
    ["#Critical", "#Evaluating", "#Condemning", "#Disapproving", "#Emotion"],

    "disdain": 
    ["#Contempt", "#Scorn", "#Disgust", "#Disrespect", "#Emotion"],

    "contempt": 
    ["#Disdain", "#Scorn", "#Hatred", "#Disgust", "#Emotion"],

    "challenging": 
    ["#Defiant", "#Confrontational", "#Daring", "#Testing", "#Descriptors"],

    "defiant": 
    ["#Rebellious", "#Challenging", "#Resistant", "#Bold", "#Emotion"],

    "fierce": 
    ["#Intense", "#Aggressive", "#Passionate", "#Wild", "#Descriptors"],

    "blazing": 
    ["#Burning", "#Intense", "#Furious", "#Fiery", "#Descriptors"],

    "flashing": 
    ["#Sudden", "#Angry", "#Intense", "#Warning", "#Descriptors"],

    "fearful": 
    ["#Afraid", "#Scared", "#Anxious", "#Frightened", "#Emotion"],

    "startled": 
    ["#Surprised", "#Shocked", "#Alarmed", "#Jumped", "#Emotion"],

    "terrified": 
    ["#Petrified", "#Horrified", "#Scared", "#Panicked", "#Emotion"],

    "suspicious": 
    ["#Wary", "#Distrustful", "#Doubtful", "#Mistrustful", "#Emotion"],

    "wary": 
    ["#Cautious", "#Suspicious", "#Guarded", "#Alert", "#Emotion"],

    "panicked": 
    ["#Frantic", "#Terrified", "#Desperate", "#Frenzied", "#Emotion"],

    "wild": 
    ["#Frantic", "#Uncontrolled", "#Desperate", "#Chaotic", "#Descriptors"],

    "disgusted": 
    ["#Repulsed", "#Revolted", "#Sickened", "#Appalled", "#Emotion"],

    "repulsed": 
    ["#Disgusted", "#Revolted", "#Repelled", "#Nauseated", "#Emotion"],

    "envious": 
    ["#Jealous", "#Covetous", "#Resentful", "#Desiring", "#Emotion"],

    "covetous": 
    ["#Greedy", "#Envious", "#Desirous", "#Acquisitive", "#Descriptors"],

    "curious": 
    ["#Interested", "#Inquisitive", "#Wondering", "#Intrigued", "#Emotion"],

    "interested": 
    ["#Engaged", "#Curious", "#Attentive", "#Fascinated", "#Emotion"],

    "thoughtful": 
    ["#Pensive", "#Contemplative", "#Reflective", "#Considering", "#Emotion"],

    "pensive": 
    ["#Thoughtful", "#Contemplative", "#Reflective", "#Brooding", "#Emotion"],

    "confused": 
    ["#Puzzled", "#Bewildered", "#Perplexed", "#Lost", "#Emotion"],

    "puzzled": 
    ["#Confused", "#Perplexed", "#Baffled", "#Mystified", "#Emotion"],

    "intrigued": 
    ["#Curious", "#Fascinated", "#Interested", "#Captivated", "#Emotion"],

    "triumphant": 
    ["#Victorious", "#Successful", "#Proud", "#Winning", "#Emotion"],

    "confidence": 
    ["#Assured", "#Self-assured", "#Certain", "#Bold", "#Emotion"],

    "protective": 
    ["#Guarding", "#Defensive", "#Watchful", "#Shielding", "#Emotion"],

    "guarding": 
    ["#Protective", "#Watchful", "#Defensive", "#Vigilant", "#Descriptors"],

    "decisive": 
    ["#Determined", "#Clear", "#Resolute", "#Firm", "#Descriptors"],

    "clear": 
    ["#Focused", "#Certain", "#Sharp", "#Unclouded", "#Descriptors"],

    "piercing": 
    ["#Sharp", "#Intense", "#Penetrating", "#Cutting", "#Descriptors"],

    "sharp": 
    ["#Keen", "#Acute", "#Piercing", "#Intelligent", "#Descriptors"],

    "steely": 
    ["#Hard", "#Cold", "#Determined", "#Unflinching", "#Descriptors"],

    "hard": 
    ["#Cold", "#Unyielding", "#Harsh", "#Stern", "#Descriptors"],

    "bored": 
    ["#Disinterested", "#Unengaged", "#Apathetic", "#Indifferent", "#Emotion"],

    "disinterested": 
    ["#Uninterested", "#Apathetic", "#Detached", "#Neutral", "#Descriptors"],

    "indifferent": 
    ["#Apathetic", "#Uncaring", "#Detached", "#Neutral", "#Emotion"],

    "apathetic": 
    ["#Indifferent", "#Uncaring", "#Emotionless", "#Listless", "#Emotion"],

    "glazed": 
    ["#Unfocused", "#Blank", "#Distant", "#Vacant", "#Descriptors"],

    "unfocused": 
    ["#Distant", "#Vague", "#Blurry", "#Scattered", "#Descriptors"],

    "blank": 
    ["#Empty", "#Expressionless", "#Vacant", "#Hollow", "#Descriptors"],

    "distant": 
    ["#Far-away", "#Detached", "#Removed", "#Aloof", "#Descriptors"],

    "surprise": 
    ["#Shocked", "#Amazed", "#Startled", "#Astonished", "#Emotion"],

    "awe": 
    ["#Wonder", "#Amazement", "#Reverence", "#Overwhelming", "#Emotion"],

    "reverent": 
    ["#Respectful", "#Worshipful", "#Awed", "#Devout", "#Emotion"],

    "worshipful": 
    ["#Adoring", "#Reverent", "#Devoted", "#Idolizing", "#Descriptors"],

    "knowing": 
    ["#Understanding", "#Aware", "#Perceptive", "#Wise", "#Descriptors"],

    "understanding": 
    ["#Comprehending", "#Empathetic", "#Knowing", "#Aware", "#Emotion"],

    "awed": 
    ["#Amazed", "#Impressed", "#Overwhelmed", "#Stunned", "#Emotion"],

    "conflicted": 
    ["#Torn", "#Uncertain", "#Divided", "#Struggling", "#Emotion"],

    "torn": 
    ["#Conflicted", "#Divided", "#Uncertain", "#Split", "#Emotion"],

    "stormy": 
    ["#Turbulent", "#Emotional", "#Intense", "#Conflicted", "#Descriptors"],

    "turbulent": 
    ["#Chaotic", "#Stormy", "#Unsettled", "#Volatile", "#Descriptors"],



    // --- 🏃🏼 BODY LANGUAGE & GESTURES ---
"shrug/shrugged/shrugging": ["#Indifferent", "#Uncertain", "#Dismissive", "#Gesture"],
"nod/nodded/nodding": ["#Agreement", "#Acknowledgment", "#Gesture"],
"shake/shook/shaking": ["#Disagreement", "#Denial", "#Negative", "#Gesture"], // for head
"flinch/flinched/flinching": ["#Startled", "#Fear", "#Recoil", "#Gesture"],
"shiver/shivered/shivering": ["#Cold", "#Fear", "#Disgust", "#Physical"],
"tremble/trembled/trembling": ["#Fear", "#Nervous", "#Weak", "#Physical"],
"stiffen/stiffened/stiffening": ["#Tense", "#Alert", "#Defensive", "#Physical"],
"relax/relaxed/relaxing": ["#Calm", "#Ease", "#Comfortable", "#Physical"],
"tense/tensed/tensing": ["#Anxious", "#Alert", "#Stressed", "#Physical"],


    // --- 👄 BREATHING & VOICE ---
"gasp/gasped/gasping": ["#Shocked", "#Breathless", "#Surprised", "#Sound"],
"sigh/sighed/sighing": ["#Relief", "#Resignation", "#Tired", "#Sound"],
"groan/groaned/groaning": ["#Pain", "#Frustration", "#Annoyed", "#Sound"],
"moan/moaned/moaning": ["#Pain", "#Pleasure", "#Discomfort", "#Sound"],
"scream/screamed/screaming": ["#Fear", "#Anger", "#Intense", "#Sound"],
"yell/yelled/yelling": ["#Angry", "#Loud", "#Intense", "#Sound"],
"whisper/whispered/whispering": ["#Quiet", "#Secret", "#Intimate", "#Sound"],
"murmur/murmured/murmuring": ["#Soft", "#Indistinct", "#Gentle", "#Sound"],
"hiss/hissed/hissing": ["#Angry", "#Threatening", "#Quiet", "#Sound"],
"grunt/grunted/grunting": ["#Effort", "#Dismissive", "#Brief", "#Sound"],
"snort/snorted/snorting": ["#Dismissive", "#Amused", "#Contemptuous", "#Sound"],
"scoff/scoffed/scoffing": ["#Dismissive", "#Contemptuous", "#Mocking", "#Sound"],


    // --- 🥺 CRYING & TEARS ---
"cry/cried/crying": ["#Sad", "#Emotional", "#Tears", "#Expression"],
"weep/wept/weeping": ["#Grieving", "#Sad", "#Tears", "#Expression"],
"sob/sobbed/sobbing": ["#Crying", "#Intense", "#Sad", "#Sound"],
"sniffle/sniffled/sniffling": ["#Crying", "#Sad", "#Quiet", "#Sound"],
"wail/wailed/wailing": ["#Grieving", "#Loud", "#Desperate", "#Sound"],


    // --- 😐 FACIAL EXPRESSIONS (Non-smile/laugh) ---
"frown/frowned/frowning": ["#Disapproval", "#Sad", "#Concerned", "#Expression"],
"grimace/grimaced/grimacing": ["#Pain", "#Disgust", "#Discomfort", "#Expression"],
"scowl/scowled/scowling": ["#Angry", "#Disapproving", "#Hostile", "#Expression"],
"pout/pouted/pouting": ["#Sulking", "#Disappointed", "#Childish", "#Expression"],
"sneer/sneered/sneering": ["#Contemptuous", "#Mocking", "#Disdainful", "#Expression"],
"glare/glared/glaring": ["#Angry", "#Hostile", "#Intense", "#Expression"],
"gawk/gawked/gawking": ["#Staring", "#Rude", "#Amazed", "#Expression"],
"blush/blushed/blushing": ["#Embarrassed", "#Shy", "#Aroused", "#Expression"],
"pale/paled/paling": ["#Fear", "#Shocked", "#Sick", "#Expression"],
"flush/flushed/flushing": ["#Embarrassed", "#Angry", "#Hot", "#Expression"],

    // --- 🫴🏼 TOUCH & CONTACT ---
"touch/touched/touching": ["#Physical", "#Contact", "#Gentle", "#Action"],
"stroke/stroked/stroking": ["#Gentle", "#Affectionate", "#Sensual", "#Action"],
"caress/caressed/caressing": ["#Tender", "#Loving", "#Gentle", "#Action"],
"grab/grabbed/grabbing": ["#Forceful", "#Sudden", "#Aggressive", "#Action"],
"clutch/clutched/clutching": ["#Desperate", "#Tight", "#Fear", "#Action"],
"squeeze/squeezed/squeezing": ["#Pressure", "#Affection", "#Tight", "#Action"],
"pat/patted/patting": ["#Reassuring", "#Friendly", "#Gentle", "#Action"],
"slap/slapped/slapping": ["#Violent", "#Angry", "#Sharp", "#Action"],
"punch/punched/punching": ["#Violent", "#Angry", "#Forceful", "#Action"],
"embrace/embraced/embracing": ["#Affectionate", "#Loving", "#Holding", "#Action"],
"hug/hugged/hugging": ["#Affectionate", "#Comforting", "#Warm", "#Action"],
"kiss/kissed/kissing": ["#Affectionate", "#Romantic", "#Intimate", "#Action"],

    // --- 🙆🏼‍♂️ MOVEMENT & POSTURE ---
"lean/leaned/leaning": ["#Casual", "#Movement", "#Gesture"],
"slouch/slouched/slouching": ["#Tired", "#Relaxed", "#Poor-posture", "#Posture"],
"straighten/straightened/straightening": ["#Alert", "#Formal", "#Proper", "#Posture"],
"crouch/crouched/crouching": ["#Low", "#Hiding", "#Ready", "#Posture"],
"kneel/knelt/kneeling": ["#Submissive", "#Reverent", "#Low", "#Posture"],
"stand/stood/standing": ["#Upright", "#Alert", "#Formal", "#Posture"],
"sit/sat/sitting": ["#Resting", "#Relaxed", "#Stationary", "#Posture"],
"pace/paced/pacing": ["#Nervous", "#Thinking", "#Restless", "#Movement"],
"stride/strode/striding": ["#Confident", "#Purposeful", "#Fast", "#Movement"],
"stumble/stumbled/stumbling": ["#Clumsy", "#Unsteady", "#Awkward", "#Movement"],
"swagger/swaggered/swaggering": ["#Confident", "#Arrogant", "#Cocky", "#Movement"],

    // --- 🧠 MENTAL STATES ---
"dazed": ["#Confused", "#Stunned", "#Unfocused", "#Emotion"],
"stunned": ["#Shocked", "#Surprised", "#Frozen", "#Emotion"],
"numb": ["#Emotionless", "#Detached", "#Unfeeling", "#Emotion"],
"overwhelmed": ["#Excessive", "#Too-much", "#Struggling", "#Emotion"],
"focused": ["#Concentrated", "#Intent", "#Sharp", "#Emotion"],
"distracted": ["#Unfocused", "#Inattentive", "#Elsewhere", "#Emotion"],
"alert": ["#Aware", "#Watchful", "#Ready", "#Emotion"],
"drowsy": ["#Sleepy", "#Tired", "#Heavy", "#Emotion"],

    // --- KEY MISSING DESCRIPTORS ---
"rough/roughly": ["#Harsh", "#Coarse", "#Forceful", "#Descriptors"],
"gentle/gently": ["#Soft", "#Kind", "#Careful", "#Descriptors"],
"swift/swiftly": ["#Quick", "#Fast", "#Rapid", "#Descriptors"],
"slow/slowly": ["#Gradual", "#Deliberate", "#Unhurried", "#Descriptors"],
"abrupt/abruptly": ["#Sudden", "#Sharp", "#Unexpected", "#Descriptors"],
"hesitant": ["#Uncertain", "#Cautious", "#Reluctant", "#Descriptors"],
"eager/eagerly": ["#Enthusiastic", "#Excited", "#Keen", "#Descriptors"],
"reluctant": ["#Unwilling", "#Hesitant", "#Forced", "#Descriptors"],


    // --- TOUCH/TEXTURE ---
"soft/softly": ["#Gentle", "#Smooth", "#Pleasant", "#Sensory"],
"rough/roughly": ["#Coarse", "#Harsh", "#Abrasive", "#Sensory"],
"smooth/smoothly": ["#Silky", "#Even", "#Flowing", "#Sensory"],
"silky": ["#Smooth", "#Luxurious", "#Soft", "#Sensory"],
"velvety": ["#Soft", "#Rich", "#Luxurious", "#Sensory"],
"sticky": ["#Adhesive", "#Wet", "#Uncomfortable", "#Sensory"],
"slippery": ["#Smooth", "#Wet", "#Difficult-to-grasp", "#Sensory"],
"slick": ["#Smooth", "#Wet", "#Slippery", "#Sensory"],
"coarse": ["#Rough", "#Abrasive", "#Textured", "#Sensory"],
"gritty": ["#Rough", "#Sandy", "#Abrasive", "#Sensory"],
"prickly": ["#Sharp", "#Uncomfortable", "#Spiky", "#Sensory"],
"fuzzy": ["#Soft", "#Indistinct", "#Blurry", "#Sensory"],
"scratchy": ["#Rough", "#Irritating", "#Abrasive", "#Sensory"],
"slimy": ["#Wet", "#Disgusting", "#Slippery", "#Sensory"],
"greasy": ["#Oily", "#Slippery", "#Unpleasant", "#Sensory"],
"damp": ["#Moist", "#Wet", "#Humid", "#Sensory"],
"dry": ["#Parched", "#Arid", "#Rough", "#Sensory"],
"moist": ["#Damp", "#Wet", "#Humid", "#Sensory"],
"wet": ["#Soaked", "#Damp", "#Liquid", "#Sensory"],
"icy": ["#Cold", "#Frozen", "#Chilling", "#Sensory"],
"clammy": ["#Damp", "#Cold", "#Uncomfortable", "#Sensory"],
"crisp": ["#Fresh", "#Clean", "#Sharp", "#Sensory"],

    // --- TEMPERATURE ---
"hot": ["#Heated", "#Burning", "#Warm", "#Sensory"],
"cold": ["#Chilly", "#Freezing", "#Cool", "#Sensory"],
"warm": ["#Heated", "#Comfortable", "#Cozy", "#Sensory"],
"cool": ["#Fresh", "#Chilly", "#Refreshing", "#Sensory"],
"freezing": ["#Cold", "#Icy", "#Frigid", "#Sensory"],
"burning": ["#Hot", "#Painful", "#Intense", "#Sensory"],
"scorching": ["#Extremely-hot", "#Burning", "#Intense", "#Sensory"],
"sweltering": ["#Hot", "#Humid", "#Oppressive", "#Sensory"],
"chilly": ["#Cold", "#Cool", "#Uncomfortable", "#Sensory"],
"lukewarm": ["#Tepid", "#Moderate", "#Underwhelming", "#Sensory"],

    // --- SMELL ---
"sweet": ["#Pleasant", "#Sugary", "#Fragrant", "#Sensory"],
"bitter": ["#Unpleasant", "#Sharp", "#Acrid", "#Sensory"],
"sour": ["#Acidic", "#Tart", "#Sharp", "#Sensory"],
"pungent": ["#Strong", "#Sharp", "#Penetrating", "#Sensory"],
"acrid": ["#Harsh", "#Bitter", "#Burning", "#Sensory"],
"musty": ["#Stale", "#Damp", "#Old", "#Sensory"],
"fragrant": ["#Pleasant", "#Aromatic", "#Perfumed", "#Sensory"],
"aromatic": ["#Fragrant", "#Scented", "#Pleasant", "#Sensory"],
"rancid": ["#Spoiled", "#Foul", "#Disgusting", "#Sensory"],
"stale": ["#Old", "#Flat", "#Lifeless", "#Sensory"],
"fresh": ["#Clean", "#New", "#Crisp", "#Sensory"],
"rotten": ["#Decayed", "#Foul", "#Spoiled", "#Sensory"],
"earthy": ["#Natural", "#Soil-like", "#Grounded", "#Sensory"],
"floral": ["#Flowery", "#Perfumed", "#Sweet", "#Sensory"],
"smoky": ["#Burning", "#Hazy", "#Acrid", "#Sensory"],


    // --- TASTE ---
"savory": ["#Flavorful", "#Rich", "#Umami", "#Sensory"],
"bland": ["#Tasteless", "#Dull", "#Boring", "#Sensory"],
"spicy": ["#Hot", "#Pungent", "#Burning", "#Sensory"],
"tangy": ["#Sharp", "#Zesty", "#Acidic", "#Sensory"],
"salty": ["#Briny", "#Seasoned", "#Sharp", "#Sensory"],
"metallic": ["#Tinny", "#Blood-like", "#Unpleasant", "#Sensory"],
"zesty": ["#Tangy", "#Fresh", "#Sharp", "#Sensory"],

    // --- SOUND/HEARING ---
"loud": ["#Noisy", "#Booming", "#Deafening", "#Sound"],
"quiet": ["#Soft", "#Silent", "#Hushed", "#Sound"],
"deafening": ["#Extremely-loud", "#Overwhelming", "#Piercing", "#Sound"],
"piercing": ["#Sharp", "#Shrill", "#Painful", "#Sound"],
"shrill": ["#High-pitched", "#Piercing", "#Unpleasant", "#Sound"],
"melodic": ["#Musical", "#Pleasant", "#Harmonious", "#Sound"],
"harsh": ["#Grating", "#Unpleasant", "#Rough", "#Sound"],
"grating": ["#Irritating", "#Harsh", "#Unpleasant", "#Sound"],
"muffled": ["#Dampened", "#Indistinct", "#Quiet", "#Sound"],
"resonant": ["#Deep", "#Echoing", "#Rich", "#Sound"],
"rhythmic": ["#Patterned", "#Beat", "#Regular", "#Sound"],
"droning": ["#Monotonous", "#Continuous", "#Boring", "#Sound"],
"humming": ["#Buzzing", "#Vibrating", "#Low", "#Sound"],
"crackling": ["#Snapping", "#Popping", "#Sharp", "#Sound"],
"rustling": ["#Soft", "#Whispering", "#Movement", "#Sound"],
"thud/thudded/thudding": ["#Heavy", "#Dull", "#Impact", "#Sound"],
"clatter/clattered/clattering": ["#Noisy", "#Rattling", "#Chaotic", "#Sound"],
"creak/creaked/creaking": ["#Squeaking", "#Old", "#Strained", "#Sound"],
"crunch/crunched/crunching": ["#Breaking", "#Crushing", "#Crisp", "#Sound"],


    // --- FEELINGS/INTERNAL STATES - MISSING ---
"ache/ached/aching": ["#Pain", "#Dull", "#Persistent", "#Feeling"],
"throb/throbbed/throbbing": ["#Pulsing", "#Pain", "#Intense", "#Feeling"],
"tingle/tingled/tingling": ["#Prickling", "#Sensation", "#Electric", "#Feeling"],
"burn/burned/burning": ["#Hot", "#Pain", "#Intense", "#Feeling"],
"sting/stung/stinging": ["#Sharp", "#Pain", "#Brief", "#Feeling"],
"numb": ["#Emotionless", "#Detached", "#No-feeling", "#Feeling"],
"dizzy": ["#Disoriented", "#Spinning", "#Unsteady", "#Feeling"],
"nauseous": ["#Sick", "#Queasy", "#Uncomfortable", "#Feeling"],
"queasy": ["#Nauseous", "#Unsettled", "#Sick", "#Feeling"],
"lightheaded": ["#Dizzy", "#Faint", "#Woozy", "#Feeling"],
"suffocating": ["#Breathless", "#Trapped", "#Choking", "#Feeling"],
"hollow": ["#Empty", "#Void", "#Lacking", "#Feeling"],
"heavy": ["#Burdened", "#Weighed-down", "#Tired", "#Feeling"],
"weightless": ["#Light", "#Free", "#Floating", "#Feeling"],
"flutter/fluttered/fluttering": ["#Nervous", "#Excited", "#Quick", "#Feeling"],
"clench/clenched/clenching": ["#Tight", "#Tense", "#Gripping", "#Feeling"],
"knot/knotted/knotting": ["#Tense", "#Anxious", "#Twisted", "#Feeling"],
"race/raced/racing": ["#Fast", "#Panicked", "#Excited", "#Feeling"], // for heart
"pound/pounded/pounding": ["#Intense", "#Loud", "#Forceful", "#Feeling"], // for heart
"twist/twisted/twisting": ["#Uncomfortable", "#Anxious", "#Pain", "#Feeling"], // for stomach


    // --- FEELINGS/INTERNAL STATES - MISSING ---
"mutter/muttered/muttering": ["#Quiet", "#Indistinct", "#Complaining", "#Speech"],
"mumble/mumbled/mumbling": ["#Unclear", "#Soft", "#Indistinct", "#Speech"],
"stammer/stammered/stammering": ["#Stuttering", "#Nervous", "#Hesitant", "#Speech"],
"stutter/stuttered/stuttering": ["#Stammering", "#Nervous", "#Broken", "#Speech"],
"blurt/blurted/blurting": ["#Sudden", "#Uncontrolled", "#Impulsive", "#Speech"],
"drawl/drawled/drawling": ["#Slow", "#Lazy", "#Elongated", "#Speech"],
"snap/snapped/snapping": ["#Sharp", "#Angry", "#Quick", "#Speech"],
"bark/barked/barking": ["#Sharp", "#Commanding", "#Harsh", "#Speech"],
"snarl/snarled/snarling": ["#Angry", "#Threatening", "#Vicious", "#Speech"],
"growl/growled/growling": ["#Threatening", "#Low", "#Angry", "#Speech"],
"purr/purred/purring": ["#Smooth", "#Pleased", "#Sensual", "#Speech"],
"coo/cooed/cooing": ["#Soft", "#Soothing", "#Gentle", "#Speech"],
"rasp/rasped/rasping": ["#Rough", "#Harsh", "#Strained", "#Speech"],
"croak/croaked/croaking": ["#Hoarse", "#Rough", "#Weak", "#Speech"],
"shriek/shrieked/shrieking": ["#High-pitched", "#Loud", "#Alarmed", "#Speech"],
"squeal/squealed/squealing": ["#High-pitched", "#Excited", "#Loud", "#Speech"],
"squeak/squeaked/squeaking": ["#High-pitched", "#Small", "#Weak", "#Speech"],
"boom/boomed/booming": ["#Loud", "#Deep", "#Powerful", "#Speech"],
"bellow/bellowed/bellowing": ["#Loud", "#Forceful", "#Deep", "#Speech"],
"chirp/chirped/chirping": ["#Cheerful", "#Light", "#Pleasant", "#Speech"],
"drone/droned/droning": ["#Monotonous", "#Boring", "#Flat", "#Speech"],
"slur/slurred/slurring": ["#Unclear", "#Drunk", "#Lazy", "#Speech"],
"lisp/lisped/lisping": ["#Speech-impediment", "#Soft", "#Distinct", "#Speech"],

    // --- TONE DESCRIPTORS ---
"harsh": ["#Rough", "#Severe", "#Unkind", "#Tone"],
"gentle": ["#Soft", "#Kind", "#Tender", "#Tone"],
"stern": ["#Serious", "#Strict", "#Severe", "#Tone"],
"soft": ["#Gentle", "#Quiet", "#Tender", "#Tone"],
"firm": ["#Resolute", "#Strong", "#Unyielding", "#Tone"],
"flat": ["#Emotionless", "#Monotone", "#Dull", "#Tone"],
"monotone": ["#Flat", "#Emotionless", "#Boring", "#Tone"],
"lilting": ["#Melodic", "#Musical", "#Pleasant", "#Tone"],
"clipped": ["#Short", "#Abrupt", "#Controlled", "#Tone"],
"crisp": ["#Clear", "#Sharp", "#Precise", "#Tone"],
"breathy": ["#Soft", "#Sensual", "#Whispered", "#Tone"],
"husky": ["#Deep", "#Rough", "#Sexy", "#Tone"],
"nasal": ["#High", "#Whiny", "#Annoying", "#Tone"],
"shaky": ["#Trembling", "#Uncertain", "#Weak", "#Tone"],
"hoarse": ["#Rough", "#Strained", "#Raspy", "#Tone"],
"silky": ["#Smooth", "#Pleasant", "#Seductive", "#Tone"],
"gruff": ["#Rough", "#Deep", "#Harsh", "#Tone"],
"melodious": ["#Musical", "#Pleasant", "#Beautiful", "#Tone"],
"icy": ["#Cold", "#Hostile", "#Emotionless", "#Tone"],
"venomous": ["#Poisonous", "#Hateful", "#Malicious", "#Tone"],
"honeyed": ["#Sweet", "#Smooth", "#Seductive", "#Tone"],

    // --- PROXIMITY & DISTANCE ---
"close/closer/closest": ["#Near", "#Intimate", "#Together", "#Proximity"],
"near/neared/nearing": ["#Close", "#Approaching", "#Nearby", "#Proximity"],
"distant/distanced/distancing": ["#Far", "#Remote", "#Separated", "#Proximity"],
"apart": ["#Separated", "#Distance", "#Alone", "#Proximity"],
"together": ["#United", "#Close", "#Connected", "#Proximity"],
"separate/separated/separating": ["#Apart", "#Divided", "#Disconnected", "#Proximity"],
"approach/approached/approaching": ["#Coming-closer", "#Nearing", "#Advance", "#Movement"],
"retreat/retreated/retreating": ["#Backing-away", "#Withdrawal", "#Escape", "#Movement"],
"advance/advanced/advancing": ["#Moving-forward", "#Approaching", "#Aggressive", "#Movement"],
"withdraw/withdrew/withdrawing": ["#Pulling-back", "#Retreating", "#Avoiding", "#Movement"],
"press/pressed/pressing": ["#Push", "#Close", "#Insistent", "#Contact"],
"pull/pulled/pulling": ["#Draw", "#Attract", "#Force", "#Contact"],
"push/pushed/pushing": ["#Shove", "#Reject", "#Force", "#Contact"],
"corner/cornered/cornering": ["#Trapped", "#Intimidating", "#Blocking", "#Position"],
"block/blocked/blocking": ["#Obstruct", "#Prevent", "#Barrier", "#Position"],
"follow/followed/following": ["#Pursue", "#Track", "#Behind", "#Movement"],
"lead/led/leading": ["#Guide", "#Ahead", "#Directing", "#Movement"],
"chase/chased/chasing": ["#Pursue", "#Hunt", "#Follow", "#Movement"],
"flee/fled/fleeing": ["#Escape", "#Run", "#Avoid", "#Movement"],


    // --- PHYSICAL CONTACT & TOUCH ---
"cling/clung/clinging": ["#Desperate", "#Holding-tight", "#Attached", "#Contact"],
"cradle/cradled/cradling": ["#Gentle", "#Protective", "#Holding", "#Contact"],
"nestle/nestled/nestling": ["#Snuggle", "#Comfortable", "#Close", "#Contact"],
"cuddle/cuddled/cuddling": ["#Affectionate", "#Warm", "#Close", "#Contact"],
"snuggle/snuggled/snuggling": ["#Cozy", "#Affectionate", "#Close", "#Contact"],
"nuzzle/nuzzled/nuzzling": ["#Affectionate", "#Gentle", "#Intimate", "#Contact"],
"brush/brushed/brushing": ["#Light", "#Brief", "#Accidental", "#Contact"],
"graze/grazed/grazing": ["#Light", "#Barely-touching", "#Brief", "#Contact"],
"press/pressed/pressing": ["#Firm", "#Insistent", "#Against", "#Contact"],
"pin/pinned/pinning": ["#Trap", "#Hold-down", "#Dominant", "#Contact"],
"restrain/restrained/restraining": ["#Hold-back", "#Control", "#Limit", "#Contact"],
"release/released/releasing": ["#Let-go", "#Free", "#Liberate", "#Contact"],
"grip/gripped/gripping": ["#Hold", "#Tight", "#Control", "#Contact"],
"grasp/grasped/grasping": ["#Seize", "#Hold", "#Understand", "#Contact"],
"wrap/wrapped/wrapping": ["#Enclose", "#Surround", "#Cover", "#Contact"],
"entwine/entwined/entwining": ["#Interweave", "#Connected", "#Together", "#Contact"],
"intertwine/intertwined/intertwining": ["#Connected", "#Woven", "#Together", "#Contact"],
"tangle/tangled/tangling": ["#Messy", "#Intertwined", "#Complicated", "#Contact"],
"link/linked/linking": ["#Connect", "#Join", "#Together", "#Contact"],
"loop/looped/looping": ["#Circle", "#Around", "#Connected", "#Contact"],
"lace/laced/lacing": ["#Interweave", "#Thread", "#Connect", "#Contact"],
"thread/threaded/threading": ["#Weave", "#Through", "#Connect", "#Contact"],


    // --- GAZE & EYE CONTACT ---
"meet/met/meeting": ["#Connect", "#Encounter", "#Eyes", "#Gaze"], // for eyes meeting
"lock/locked/locking": ["#Fixed", "#Held", "#Intense", "#Gaze"], // for eye contact
"catch/caught/catching": ["#Notice", "#Intercept", "#Brief", "#Gaze"],
"avoid/avoided/avoiding": ["#Evade", "#Dodge", "#Refuse", "#Gaze"],
"seek/sought/seeking": ["#Search", "#Look-for", "#Desire", "#Gaze"],
"hold/held/holding": ["#Maintain", "#Keep", "#Steady", "#Gaze"],
"break/broke/breaking": ["#End", "#Interrupt", "#Stop", "#Gaze"],
"flicker/flickered/flickering": ["#Brief", "#Quick", "#Uncertain", "#Gaze"],
"linger/lingered/lingering": ["#Stay", "#Remain", "#Prolonged", "#Gaze"],
"dart/darted/darting": ["#Quick", "#Between", "#Nervous", "#Gaze"],
"roam/roamed/roaming": ["#Wander", "#Explore", "#Unfocused", "#Gaze"],
"trail/trailed/trailing": ["#Follow", "#Track", "#Move-along", "#Gaze"],
"rake/raked/raking": ["#Scan", "#Examine", "#Thorough", "#Gaze"],
"drag/dragged/dragging": ["#Slow", "#Deliberate", "#Heavy", "#Gaze"],
"track/tracked/tracking": ["#Follow", "#Monitor", "#Watch", "#Gaze"],


    // --- VERBAL INTERACTION ---
"interrupt/interrupted/interrupting": ["#Cut-off", "#Intrude", "#Rude", "#Speech"],
"interject/interjected/interjecting": ["#Insert", "#Add", "#Interrupt", "#Speech"],
"cut/cutting": ["#Interrupt", "#Sharp", "#Stop", "#Speech"], // cutting someone off
"silence/silenced/silencing": ["#Quiet", "#Stop", "#Suppress", "#Speech"],
"ignore/ignored/ignoring": ["#Disregard", "#Dismiss", "#Avoid", "#Interaction"],
"acknowledge/acknowledged/acknowledging": ["#Recognize", "#Accept", "#Notice", "#Interaction"],
"dismiss/dismissed/dismissing": ["#Reject", "#Wave-off", "#Disregard", "#Interaction"],
"confront/confronted/confronting": ["#Face", "#Challenge", "#Direct", "#Interaction"],
"challenge/challenged/challenging": ["#Question", "#Oppose", "#Test", "#Interaction"],
"question/questioned/questioning": ["#Ask", "#Doubt", "#Interrogate", "#Interaction"],
"answer/answered/answering": ["#Respond", "#Reply", "#Explain", "#Interaction"],
"respond/responded/responding": ["#React", "#Reply", "#Answer", "#Interaction"],
"retort/retorted/retorting": ["#Sharp-reply", "#Comeback", "#Quick", "#Speech"],
"rebuke/rebuked/rebuking": ["#Scold", "#Criticize", "#Reprimand", "#Speech"],
"scold/scolded/scolding": ["#Reprimand", "#Criticize", "#Harsh", "#Speech"],
"praise/praised/praising": ["#Compliment", "#Approve", "#Admire", "#Speech"],
"compliment/complimented/complimenting": ["#Praise", "#Flatter", "#Admire", "#Speech"],
"tease/teased/teasing": ["#Mock", "#Playful", "#Provoke", "#Speech"],
"mock/mocked/mocking": ["#Ridicule", "#Imitate", "#Scorn", "#Speech"],
"taunt/taunted/taunting": ["#Provoke", "#Mock", "#Challenge", "#Speech"],
"plead/pleaded/pleading": ["#Beg", "#Implore", "#Desperate", "#Speech"],
"beg/begged/begging": ["#Plead", "#Ask", "#Desperate", "#Speech"],
"demand/demanded/demanding": ["#Require", "#Insist", "#Command", "#Speech"],
"command/commanded/commanding": ["#Order", "#Direct", "#Authoritative", "#Speech"],
"order/ordered/ordering": ["#Command", "#Direct", "#Instruct", "#Speech"],
"request/requested/requesting": ["#Ask", "#Polite", "#Seek", "#Speech"],
"suggest/suggested/suggesting": ["#Propose", "#Recommend", "#Hint", "#Speech"],
"insist/insisted/insisting": ["#Demand", "#Firm", "#Persistent", "#Speech"],
"urge/urged/urging": ["#Push", "#Encourage", "#Insist", "#Speech"],
"encourage/encouraged/encouraging": ["#Support", "#Motivate", "#Positive", "#Speech"],
"discourage/discouraged/discouraging": ["#Dissuade", "#Demotivate", "#Negative", "#Speech"],
"warn/warned/warning": ["#Caution", "#Alert", "#Advise", "#Speech"],
"threaten/threatened/threatening": ["#Menace", "#Intimidate", "#Danger", "#Speech"],
"promise/promised/promising": ["#Vow", "#Guarantee", "#Commit", "#Speech"],
"swear/swore/swearing": ["#Vow", "#Curse", "#Promise", "#Speech"],
"vow/vowed/vowing": ["#Promise", "#Pledge", "#Commit", "#Speech"],
"confess/confessed/confessing": ["#Admit", "#Reveal", "#Truth", "#Speech"],
"admit/admitted/admitting": ["#Confess", "#Acknowledge", "#Accept", "#Speech"],
"deny/denied/denying": ["#Refuse", "#Reject", "#Contradict", "#Speech"],
"lie/lied/lying": ["#Deceive", "#False", "#Dishonest", "#Speech"],
"deceive/deceived/deceiving": ["#Trick", "#Mislead", "#Lie", "#Speech"],
"trick/tricked/tricking": ["#Deceive", "#Fool", "#Mislead", "#Interaction"],


    // --- EMOTIONAL DYNAMICS ---
"comfort/comforted/comforting": ["#Soothe", "#Reassure", "#Console", "#Interaction"],
"console/consoled/consoling": ["#Comfort", "#Soothe", "#Sympathize", "#Interaction"],
"reassure/reassured/reassuring": ["#Comfort", "#Calm", "#Support", "#Interaction"],
"soothe/soothed/soothing": ["#Calm", "#Comfort", "#Gentle", "#Interaction"],
"calm/calmed/calming": ["#Soothe", "#Pacify", "#Quiet", "#Interaction"],
"agitate/agitated/agitating": ["#Disturb", "#Upset", "#Provoke", "#Interaction"],
"provoke/provoked/provoking": ["#Incite", "#Challenge", "#Anger", "#Interaction"],
"irritate/irritated/irritating": ["#Annoy", "#Bother", "#Vex", "#Interaction"],
"annoy/annoyed/annoying": ["#Irritate", "#Bother", "#Pester", "#Interaction"],
"anger/angered/angering": ["#Enrage", "#Upset", "#Provoke", "#Interaction"],
"enrage/enraged/enraging": ["#Fury", "#Anger", "#Infuriate", "#Interaction"],
"infuriate/infuriated/infuriating": ["#Enrage", "#Anger", "#Provoke", "#Interaction"],
"upset/upsetting": ["#Disturb", "#Distress", "#Trouble", "#Interaction"],
"hurt/hurting": ["#Wound", "#Pain", "#Harm", "#Interaction"],
"wound/wounded/wounding": ["#Hurt", "#Injure", "#Damage", "#Interaction"],
"betray/betrayed/betraying": ["#Deceive", "#Disloyal", "#Backstab", "#Interaction"],
"abandon/abandoned/abandoning": ["#Leave", "#Desert", "#Forsake", "#Interaction"],
"protect/protected/protecting": ["#Guard", "#Shield", "#Defend", "#Interaction"],
"defend/defended/defending": ["#Protect", "#Support", "#Guard", "#Interaction"],
"shield/shielded/shielding": ["#Protect", "#Guard", "#Cover", "#Interaction"],
"support/supported/supporting": ["#Help", "#Assist", "#Back", "#Interaction"],
"oppose/opposed/opposing": ["#Resist", "#Against", "#Challenge", "#Interaction"],
"resist/resisted/resisting": ["#Oppose", "#Fight", "#Refuse", "#Interaction"],
"yield/yielded/yielding": ["#Submit", "#Give-in", "#Surrender", "#Interaction"],
"submit/submitted/submitting": ["#Yield", "#Surrender", "#Give-in", "#Interaction"],
"surrender/surrendered/surrendering": ["#Give-up", "#Yield", "#Defeat", "#Interaction"],
"dominate/dominated/dominating": ["#Control", "#Overpower", "#Rule", "#Interaction"],
"control/controlled/controlling": ["#Dominate", "#Manage", "#Command", "#Interaction"],
"manipulate/manipulated/manipulating": ["#Control", "#Influence", "#Deceive", "#Interaction"],
"influence/influenced/influencing": ["#Affect", "#Sway", "#Impact", "#Interaction"],
"persuade/persuaded/persuading": ["#Convince", "#Influence", "#Sway", "#Interaction"],
"convince/convinced/convincing": ["#Persuade", "#Assure", "#Prove", "#Interaction"],


    // --- POWER DYNAMICS ---
"tower/towered/towering": ["#Above", "#Dominating", "#Tall", "#Position"],
"loom/loomed/looming": ["#Threaten", "#Hover", "#Ominous", "#Position"],
"hover/hovered/hovering": ["#Linger", "#Close", "#Uncertain", "#Position"],
"crouch/crouched/crouching": ["#Low", "#Submissive", "#Ready", "#Position"],
"kneel/knelt/kneeling": ["#Submissive", "#Reverent", "#Lower", "#Position"],
"bow/bowed/bowing": ["#Respect", "#Submissive", "#Bend", "#Gesture"],
"cower/cowered/cowering": ["#Fear", "#Submissive", "#Cringe", "#Position"],
"shrink/shrank/shrinking": ["#Retreat", "#Fear", "#Small", "#Position"],
"flinch/flinched/flinching": ["#Recoil", "#Fear", "#Startled", "#Reaction"],
"recoil/recoiled/recoiling": ["#Pull-back", "#Fear", "#Disgust", "#Reaction"],
"advance/advanced/advancing": ["#Move-forward", "#Aggressive", "#Approach", "#Movement"],
"back/backed/backing": ["#Retreat", "#Away", "#Support", "#Movement"],
"face/faced/facing": ["#Confront", "#Turn-toward", "#Meet", "#Position"],
"turn/turned/turning": ["#Rotate", "#Change-direction", "#Away", "#Movement"],



    // --- RELATIONSHIP STATES ---
"trust/trusted/trusting": ["#Rely", "#Believe", "#Confidence", "#Relationship"],
"distrust/distrusted/distrusting": ["#Doubt", "#Suspect", "#Wary", "#Relationship"],
"respect/respected/respecting": ["#Admire", "#Honor", "#Esteem", "#Relationship"],
"disrespect/disrespected/disrespecting": ["#Insult", "#Slight", "#Rude", "#Relationship"],
"love/loved/loving": ["#Affection", "#Care", "#Adore", "#Relationship"],
"hate/hated/hating": ["#Despise", "#Loathe", "#Detest", "#Relationship"],
"fear/feared/fearing": ["#Afraid", "#Dread", "#Terror", "#Emotion"],
"admire/admired/admiring": ["#Respect", "#Appreciate", "#Look-up-to", "#Relationship"],
"despise/despised/despising": ["#Hate", "#Loathe", "#Scorn", "#Relationship"],
"cherish/cherished/cherishing": ["#Treasure", "#Value", "#Love", "#Relationship"],
"treasure/treasured/treasuring": ["#Value", "#Cherish", "#Prize", "#Relationship"],
"tolerate/tolerated/tolerating": ["#Endure", "#Allow", "#Accept", "#Relationship"],
"endure/endured/enduring": ["#Bear", "#Suffer", "#Withstand", "#Relationship"],
"obey/obeyed/obeying": ["#Follow", "#Submit", "#Comply", "#Relationship"],
"defy/defied/defying": ["#Resist", "#Challenge", "#Disobey", "#Relationship"],
"rival/rivaled/rivaling": ["#Compete", "#Oppose", "#Match", "#Relationship"],
"compete/competed/competing": ["#Rival", "#Contest", "#Vie", "#Relationship"],
"cooperate/cooperated/cooperating": ["#Work-together", "#Collaborate", "#Help", "#Relationship"],
"collaborate/collaborated/collaborating": ["#Cooperate", "#Work-together", "#Partner", "#Relationship"],


    // --- 🧑🏼‍💼 FORMAL TERMINOLOGIES ---
    "authentic/real/legit":
    ["#Authentic", "#Real", "#Legit", "#Official", "#Certified", "#Valid", "#Factual", "#Descriptors"],





    // --- BY ANATOMY - EXTERNAL ---
    "hair/strand/curls/mane/locks/wig/haircut/hairstyle/hairline":
    ["#hair", "#Parts"],

    "eyebrow/eyebrows":
    ["#eyebrow", "#Parts"],

    "eye/eyes":
    ["#eyes", "#Parts"],

    "nose/noses":
    ["#nose", "#Parts"],

    "lip/lips":
    ["#lips", "#Parts"],

    "mouth":
    ["#mouth", "#Parts"],

    "tongue":
    ["#tongue", "#Parts"],

    "cheek/cheeks":
    ["#cheek", "#Parts"],

    "ear/ears":
    ["#ears", "#Parts"],

    "teeth/tooth":
    ["#teeth", "#Parts"],

    "facial hair/beard/stubble/stubbles/goatee/bristles/vandyke/whiskers/moustache":
    ["#beard", "#stubble", "#Parts"],

    "jaw/jaws/jawbone":
    ["#jaw", "#Parts"],

    "neck":
    ["#neck", "#Parts"],

    "throat":
    ["#throat", "#Parts"],

    "shoulder/shoulders":
    ["#shoulder", "#Parts"],

    "chest/chests/bust":
    ["#chest", "#Parts"],

    "abs/abdominal/oblique/obliques":
    ["#abs", "#Parts"],

    "pelvis/V-line/pelvic":
    ["#pelvis", "#Parts"],

    "thigh/thighs":
    ["#thigh", "#Parts"],

    "leg/legs/glute/":
    ["#leg", "#limbs", "#Parts"],

    "calf/calves":
    ["#calf", "#Parts"],

    "knee/knees":
    ["#knee", "#Parts"],

    "ankle/ankles":
    ["#ankle", "#Parts"],

    "feet/foot":
    ["#feet", "#Parts"],

    "toe/toes":
    ["#toes", "#Parts"],

    "heel/heels":
    ["#heels", "#Parts"],

    "arm/arms/bicep/biceps/tricep/triceps":
    ["#arm", "#Parts"],

    "hand/hands":
    ["#hand", "#Parts"],

    "wrist/wrists":
    ["#wrist", "#Parts"],

    "palm/palms":
    ["#palm", "#Parts"],

    "finger/fingers":
    ["#fingers", "#Parts"],

    "thumb/thumbs":
    ["#fingers", "#Parts"],

    "nail/nails":
    ["#nails", "#Parts"],

    "elbow/elbows":
    ["#elbow", "#Parts"],

    "skin":
    ["#skin", "#Parts"],







    // --- NSFW - BODY PARTS ---

	"breast/breasts/bosom/bosoms/boob/boobs/globes":
	["#breast"],

	"nipple/nipples/tit/tits":
	["#nipples", "#nsfw"],

	"vagina/cunt/pussy/muff/folds":
	["#vagina", "#nsfw"],

	"penis/shaft/junk/dick/cock":
	["#penis", "#nsfw"],

	"clitoris/clit":
	["#clit", "#nsfw"],

	"cervix":
	["#cervix"],

	"anus/anal/rectum":
	["#anus", "#nsfw"],

	"balls":
	["#balls"],

	"foreskin":
	["#foreskin"],

	"cervix":
	["#cervix"],


    // --- NSFW - TERMINOLOGIES ---

	"sex/fucking/lust/sexting":
	["#sex", "#nsfw"],

	"foreplay":
	["#foreplay", "#nsfw"],

	"kink":
	["#kink", "#nsfw"],

	"boner/erection":
	["#boner", "#nsfw"],

	"horny/arousal":
	["#horny", "#sex", "#nsfw"],

	"release/semen/cum/cumming/ejaculate/ejaculation/orgasm/orgasms":
	["#release", "#nsfw"],

	"condom/fertility/protection":
	["#protection"],

	"dildo":
	["#dildo", "#nsfw"],

	"vibrator":
	["#vibrator", "#nsfw"],


    // --- NSFW - ACTIVITIES ---
	"masturbate/masturbation":
	["#masturbate", "#nsfw"],

	"blowjob":
	["#blowjob", "#oral", "#nsfw"],

	"handjob":
	["#handjob", "#nsfw"],

	"fingering":
	["#fingering", "#nsfw"],

	"spooning":
	["#spooning", "#nsfw"],


// --- 🎨 COLORS & VISUALS ---
    "red/crimson/scarlet/ruby/cherry": 
    ["#Red", "#Color", "#Visual"],

    "blue/azure/sapphire/cobalt/indigo": 
    ["#Blue", "#Color", "#Visual"],

    "green/emerald/jade/forest/olive": 
    ["#Green", "#Color", "#Visual"],

    "yellow/gold/golden/amber/blonde": 
    ["#Yellow", "#Gold", "#Color", "#Visual"],

    "black/onyx/jet/obsidian/coal": 
    ["#Black", "#Dark", "#Color", "#Visual"],

    "white/ivory/pale/snow/alabaster": 
    ["#White", "#Pale", "#Color", "#Visual"],

    "grey/gray/silver/slate/steel": 
    ["#Grey", "#Silver", "#Color", "#Visual"],

    "brown/brunette/chestnut/chocolate": 
    ["#Brown", "#Color", "#Visual"],

    "pink/rose/blush/coral": 
    ["#Pink", "#Color", "#Visual"],

    "purple/violet/lavender/plum": 
    ["#Purple", "#Color", "#Visual"],

    "orange/copper/rust": 
    ["#Orange", "#Color", "#Visual"],


    // --- 💡 LIGHTING & ATMOSPHERE ---
    "bright/brightly": 
    ["#Light", "#Intense", "#Visual", "#Atmosphere"],

    "dim/dimly": 
    ["#Dark", "#Obscured", "#Visual", "#Atmosphere"],

    "glow/glowing/glowed": 
    ["#Light", "#Radiant", "#Visual", "#Atmosphere"],

    "shine/shined/shining/shiny": 
    ["#Light", "#Reflective", "#Visual", "#Atmosphere"],

    "shadow/shadowy/shadows": 
    ["#Dark", "#Obscured", "#Visual", "#Atmosphere"],

    "hazy/haze": 
    ["#Unclear", "#Obscured", "#Visual", "#Atmosphere"],

    "clear": 
    ["#Sharp", "#Visible", "#Visual", "#Atmosphere"],

    "faded/fading": 
    ["#Old", "#Weak", "#Visual", "#Atmosphere"],

    "vibrant": 
    ["#Colorful", "#Intense", "#Visual", "#Atmosphere"],


// --- 🕰️ TIME OF DAY ---
    "morning/dawn/sunrise/daybreak": 
    ["#Time", "#Morning", "#Setting"],

    "noon/midday/lunchtime": 
    ["#Time", "#Day", "#Setting"],

    "afternoon": 
    ["#Time", "#Day", "#Setting"],

    "evening/dusk/sunset/twilight/sundown": 
    ["#Time", "#Evening", "#Setting"],

    "night/midnight/darkness/nocturnal": 
    ["#Time", "#Night", "#Setting"],

    "today/tonight/now/current": 
    ["#Time", "#Present", "#Setting"],

    "yesterday/past": 
    ["#Time", "#Past", "#Setting"],

    "tomorrow/future": 
    ["#Time", "#Future", "#Setting"],


    // --- 🗓️ SEASONS & WEATHER ---
    "spring/springtime": 
    ["#Season", "#Spring", "#Setting"],

    "summer/summertime": 
    ["#Season", "#Summer", "#Setting"],

    "autumn/fall": 
    ["#Season", "#Autumn", "#Setting"],

    "winter/wintertime": 
    ["#Season", "#Winter", "#Setting"],

    "rain/raining/rainy/storm/stormy": 
    ["#Weather", "#Rain", "#Atmosphere", "#Setting"],

    "snow/snowing/snowy/blizzard": 
    ["#Weather", "#Snow", "#Cold", "#Setting"],

    "sun/sunny/sunlight/sunshine": 
    ["#Weather", "#Sun", "#Light", "#Setting"],

    "wind/windy/breeze/breezy": 
    ["#Weather", "#Air", "#Atmosphere", "#Setting"],

    "cloud/cloudy/overcast/fog/foggy": 
    ["#Weather", "#Atmosphere", "#Setting"],


    // --- 🏠 VENUE: INTERIOR ---
    "home/house/apartment/flat": 
    ["#Location", "#Home", "#Setting"],

    "room/bedroom/chamber": 
    ["#Location", "#Private", "#Setting"],

    "kitchen/dining": 
    ["#Location", "#Food", "#Setting"],

    "bathroom/shower/bath": 
    ["#Location", "#Private", "#Hygiene", "#Setting"],

    "hall/hallway/corridor": 
    ["#Location", "#Interior", "#Setting"],

    "office/workplace/desk/cubicle": 
    ["#Location", "#Work", "#Setting"],

    "classroom/school/university/library": 
    ["#Location", "#Education", "#Setting"],

    "store/shop/market/mall": 
    ["#Location", "#Commercial", "#Setting"],

    "cafe/restaurant/diner/bistro": 
    ["#Location", "#Social", "#Food", "#Setting"],

    "bar/pub/club/tavern": 
    ["#Location", "#Social", "#Nightlife", "#Setting"],

    "hospital/clinic/ward": 
    ["#Location", "#Medical", "#Setting"],


    // --- 🌳 VENUE: EXTERIOR ---
    "city/urban/town/village": 
    ["#Location", "#Civilization", "#Setting"],

    "street/road/highway/path/alley": 
    ["#Location", "#Travel", "#Setting"],

    "park/garden/yard": 
    ["#Location", "#Nature", "#Leisure", "#Setting"],

    "forest/woods/trees/jungle": 
    ["#Location", "#Nature", "#Wild", "#Setting"],

    "beach/ocean/sea/coast/shore": 
    ["#Location", "#Nature", "#Water", "#Setting"],

    "river/lake/pond/stream": 
    ["#Location", "#Nature", "#Water", "#Setting"],

    "mountain/hill/cliff": 
    ["#Location", "#Nature", "#High", "#Setting"],

    "field/meadow/plains": 
    ["#Location", "#Nature", "#Open", "#Setting"],

// --- ⏰ TIME OF DAY ---
    "morning/dawn/sunrise/daybreak": 
    ["#Morning", "#Time", "#Light"],

    "noon/midday/lunch": 
    ["#Noon", "#Time", "#Bright"],

    "afternoon": 
    ["#Afternoon", "#Time", "#Day"],

    "evening/dusk/sunset/twilight/sundown": 
    ["#Evening", "#Time", "#Dim"],

    "night/midnight/darkness/nighttime": 
    ["#Night", "#Time", "#Dark"],

    "today/tomorrow/yesterday": 
    ["#Date", "#Time"],

    "now/current/moment": 
    ["#Present", "#Time"],

    "later/soon": 
    ["#Future", "#Time"],


    // --- 🏠 SETTING: HOME ---
    "home/house/apartment/flat": 
    ["#Home", "#Indoor", "#Setting"],

    "bedroom/bed/bedside": 
    ["#Bedroom", "#Home", "#Private", "#Setting"],

    "kitchen/stove/fridge": 
    ["#Kitchen", "#Home", "#Indoor", "#Setting"],

    "bathroom/shower/bath/toilet/mirror": 
    ["#Bathroom", "#Home", "#Private", "#Setting"],

    "living room/lounge/sofa/couch": 
    ["#LivingRoom", "#Home", "#Comfort", "#Setting"],

    "door/doorway/entrance/threshold": 
    ["#Entrance", "#Threshold", "#Setting"],

    "hall/hallway/corridor": 
    ["#Passage", "#Indoor", "#Setting"],

    "window/windows/sill": 
    ["#View", "#Boundary", "#Setting"],

    "floor/ceiling/wall/walls": 
    ["#Structure", "#Indoor", "#Setting"],


    // --- 🏙️ SETTING: PUBLIC & WORK ---
    "office/work/desk/cubicle": 
    ["#Work", "#Professional", "#Setting"],

    "studio/atelier": 
    ["#Creative", "#Work", "#Setting"],

    "cafe/coffee shop/bistro": 
    ["#Cafe", "#Public", "#Social", "#Setting"],

    "restaurant/diner": 
    ["#Restaurant", "#Public", "#Food", "#Setting"],

    "bar/pub/club": 
    ["#Nightlife", "#Public", "#Social", "#Setting"],

    "shop/store/market/supermarket": 
    ["#Commerce", "#Public", "#Setting"],

    "library/bookstore": 
    ["#Quiet", "#Public", "#Books", "#Setting"],

    "school/university/class/classroom": 
    ["#Education", "#Public", "#Setting"],

    "gym/court/field": 
    ["#Fitness", "#Public", "#Active", "#Setting"],

    "hospital/clinic": 
    ["#Medical", "#Public", "#Setting"],


    // --- 🌳 SETTING: NATURE & OUTDOORS ---
    "garden/yard/patio/balcony": 
    ["#Garden", "#Home", "#Outside", "#Setting"],

    "park/lawn/grass": 
    ["#Park", "#Nature", "#Public", "#Setting"],

    "forest/woods/tree/trees": 
    ["#Forest", "#Nature", "#Wild", "#Setting"],

    "beach/sea/ocean/sand/coast": 
    ["#Beach", "#Water", "#Nature", "#Setting"],

    "river/lake/stream/pond": 
    ["#Water", "#Nature", "#Setting"],

    "mountain/hill/cliff": 
    ["#Elevation", "#Nature", "#View", "#Setting"],

    "street/road/sidewalk/pavement/alley": 
    ["#Street", "#Urban", "#Transit", "#Setting"],

    "sky/cloud/clouds/sun/moon/star/stars": 
    ["#Sky", "#Nature", "#Atmosphere", "#Setting"],

    "rain/storm/snow/wind": 
    ["#Weather", "#Nature", "#Atmosphere", "#Setting"],




    "DONOTDELETETHIS":     ["#DONOTDELETETHIS"]
};



/* --- ⚙️ THE ENGINE (Precision & Variations Support) --- */
function generateSmartTags(text) {
    if (!text) return "";
    let suggestedTags = new Set(); 
    
    // Scan the dictionary
    for (const [key, tags] of Object.entries(tagDictionary)) {
        
        // 1. Split the key by "/" to handle variations like "grin/grins"
        const variations = key.split('/');
        
        // 2. Check for WHOLE WORD matches
        const matchFound = variations.some(trigger => {
            const cleanTrigger = trigger.trim();
            if (!cleanTrigger) return false;

            // 3. Word Boundary Check
            // The 'i' flag means "ignore case"
            const regex = new RegExp(`\\b${cleanTrigger}\\b`, 'i');
            
            return regex.test(text);
        });

        // 4. If found, add the tags
        if (matchFound) {
            tags.forEach(t => suggestedTags.add(t));
        }
    }
    
    return Array.from(suggestedTags).join(" ");
}
console.log("🧠 Brain Module Loaded (Precision Mode).");