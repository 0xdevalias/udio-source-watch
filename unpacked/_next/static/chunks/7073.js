"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7073],
  {
    92299: function (e, a, t) {
      var o = t(57437),
        s = t(28814),
        n = t(2265),
        i = t(1657),
        r = t(55322);
      a.Z = (e) => {
        let {
            size: a = 20,
            color: t = "white",
            className: l,
            contentClassName: u,
            children: c,
          } = e,
          [g, d] = (0, n.useState)(!1),
          h = (0, n.useCallback)(() => {
            d(!g);
          }, [g]);
        return (0, o.jsx)(r.pn, {
          delayDuration: 300,
          children: (0, o.jsxs)(r.u, {
            open: g,
            onOpenChange: d,
            children: [
              (0, o.jsx)(r.aJ, {
                onClick: h,
                children: (0, o.jsx)(s.Z, { className: l, size: a, color: t }),
              }),
              (0, o.jsx)(r._v, {
                className: (0, i.cn)(["w-[400px] max-w-[75%]", u]),
                children: c,
              }),
            ],
          }),
        });
      };
    },
    87073: function (e, a, t) {
      t.r(a),
        t.d(a, {
          VISIBLE_TAG_INCREMENT: function () {
            return eS;
          },
          default: function () {
            return eL;
          },
          defaultPromptPlaceholder: function () {
            return eT;
          },
        });
      var o = t(57437);
      let s = [
          "a song about a late-night drive",
          "a song about a first kiss under the stars",
          "a song about a giant bear in the forest",
          "a song about breaking up at a coffee shop",
          "a song about losing a best friend",
          "a song about finding a forgotten letter",
          "a song about a ghost haunting its old house",
          "a song about dancing in the rain",
          "a song about sailing across the world",
          "a song about a secret garden",
          "a song about leaving home for the first time",
          "a song about cooking dinner for someone special",
          "a song about falling in love in a library",
          "a song about a lighthouse keeper's loneliness",
          "a song about a road trip with no destination",
          "a song about the day the sun didn't rise",
          "a song about a soldier coming home",
          "a song about waiting for a letter that never comes",
          "a song about a city that never sleeps",
          "a song about escaping from a castle",
          "a song about a child's first snow",
          "a song about growing old with someone you love",
          "a song about a magic potion gone wrong",
          "a song about a dragon who's afraid of fire",
          "a song about a queen without a kingdom",
          "a song about a pirate's last adventure",
          "a song about a summer fling that lasted",
          "a song about losing a pet",
          "a song about a garden in full bloom",
          "a song about a midnight conversation with the moon",
          "a song about a stolen kiss in a crowded room",
          "a song about saying goodbye at the airport",
          "a song about a painting that comes to life",
          "a song about a deal with the devil",
          "a song about a fading childhood memory",
          "a song about finding hope in the darkness",
          "a song about a wild west duel",
          "a song about a circus performer's dream",
          "a song about an unopened gift",
          "a song about walking through an abandoned city",
          "a song about a night under the northern lights",
          "a song about a treasure map with no X",
          "a song about a hero's sacrifice",
          "a song about the loneliness of space",
          "a song about a witch's garden",
          "a song about the return of spring",
          "a song about losing a twin",
          "a song about a dive bar romance",
          "a song about a forgotten childhood toy",
          "a song about a tree that remembers everything",
          "a song about falling out of love",
          "a song about a lie that broke everything",
          "a song about a clown's sorrow",
          "a song about a vow renewal",
          "a song about a snow globe's world",
          "a song about a fisherman's wife",
          "a song about a stolen art masterpiece",
          "a song about first time flying",
          "a song about watching the sunset alone",
          "a song about living off the grid",
          "a song about a love letter never sent",
          "a song about the last day of school",
          "a song about a haunted mirror",
          "a song about an old man feeding pigeons",
          "a song about a young queen's coronation",
          "a song about a detective falling for the suspect",
          "a song about a missing ship at sea",
          "a song about a dancer's last performance",
          "a song about moving to a new city alone",
          "a song about a hunt for a mythical beast",
          "a song about discovering a hidden talent",
          "a song about a bridesmaid's confession",
          "a song about a storm chaser's thrill",
          "a song about an astronaut's loneliness",
          "a song about a forbidden love affair",
          "a song about a heist gone wrong",
          "a song about a weeping willow's tale",
          "a song about a soldier's letter home",
          "a song about an affair to remember",
          "a song about a historic battle's unsung hero",
          "a song about a girl with glass wings",
          "a song about a day without technology",
          "a song about a mountain's ancient secret",
          "a song about dancing with a ghost",
          "a song about a second chance at love",
          "a song about a baker's early morning",
          "a song about a widow's first Christmas alone",
          "a song about a traveler's last journey",
          "a song about a phone call that changed everything",
          "a song about a world without color",
          "a song about a siren's love",
          "a song about a scientist's breakthrough",
          "a song about a miracle cure",
          "a song about a cup of coffee with an old friend",
          "a song about a bank robber's regret",
          "a song about a lantern festival's magic",
          "a song about a day in the life of a penny",
          "a song about a dreamer's biggest dream",
          "a song about a cat's nine lives",
          "a song about the key to an old mystery",
          "a song about a composer's last symphony",
          "a song about a race against time",
          "a song about a cowboy's love story",
          "a song about a stranger's act of kindness",
          "a song about a secret agent's dilemma",
          "a song about a farewell at dawn",
          "a song about a child's wonder at the zoo",
          "a song about a samurai's honor",
          "a song about a long lost friend's return",
          "a song about a scarecrow's silent wish",
          "a song about a photograph that sparks a journey",
          "a song about a teacher's lasting impact",
          "a song about a first love's innocence",
          "a song about a chameleon's color blues",
          "a song about an unsolved mystery",
          "a song about a love stronger than time",
          "a song about an artist's first gallery show",
          "a song about a spaceship's maiden voyage",
          "a song about a jester's tears",
          "a song about a firefly's light",
          "a song about a knight's quest for love",
          "a song about a black cat's bad luck",
          "a song about a mermaid's human wish",
          "a song about a gambler's last bet",
          "a song about a rainbow after the storm",
          "a song about a camper's encounter with wildlife",
          "a song about a swing at the old playground",
          "a song about a proposal under the stars",
          "a song about a grandmother's wisdom",
          "a song about a tailor's magical thread",
          "a song about a firefighter's bravery",
          "a song about a reunion of childhood friends",
          "a song about a wizard's lonely tower",
          "a song about a first day at a new job",
          "a song about a time traveler's love",
          "a song about a king's secret sadness",
          "a song about a scientist's forbidden experiment",
          "a song about a love potion mishap",
          "a song about a poet's unspoken words",
          "a song about a failed superhero",
          "a song about a day as a millionaire",
          "a song about a cursed mirror",
          "a song about a celebrity's unknown life",
          "a song about a guardian angel's vigil",
          "a song about a ghost town's last resident",
          "a song about a bridge between worlds",
          "a song about a star-crossed lovers' escape",
          "a song about a baker's secret ingredient",
          "a song about a surprise party gone wrong",
          "a song about a thief with a heart of gold",
          "a song about a marathon runner's final mile",
          "a song about a musician's forgotten melody",
          "a song about a vampire's longing for daylight",
          "a song about a genie's freedom",
          "a song about a farmer's drought-year hope",
          "a song about a mechanic's dream car",
          "a song about a nurse's night shift",
          "a song about a pilot's first solo flight",
          "a song about a teacher's secret past",
          "a song about a mother's sacrifice",
          "a song about a child's imaginary friend",
          "a song about a soldier's promise",
          "a song about a couple's dance in the dark",
          "a song about a dream of flying",
          "a song about a painter without sight",
          "a song about a city's hidden alleyways",
          "a song about a year in a minute",
          "a song about a lover's quarrel resolved",
          "a song about a father's advice",
          "a song about a refugee's journey",
          "a song about a watchmaker's timeless love",
          "a song about a singer's first performance",
          "a song about a quiet beach at dawn",
          "a song about a duel of fates",
          "a song about a con artist's biggest scam",
          "a song about a leap of faith",
          "a song about a lost civilization",
          "a song about a chess game with death",
          "a song about a mountain climber's triumph",
          "a song about an unexpected friendship",
          "a song about a love found online",
          "a song about a city slicker's day in the country",
          "a song about a detective's last case",
          "a song about a love letter in a bottle",
          "a song about a street artist's masterpiece",
          "a song about a gravedigger's tales",
          "a song about a lost dog's adventure home",
          "a song about a coffee shop love story",
          "a song about a ghost writer's confession",
          "a song about a soldier's return",
          "a song about a prisoner's dream of freedom",
          "a song about a chef's signature dish",
          "a song about a vigilante's justice",
          "a song about a long-distance relationship",
          "a song about a rebel's last stand",
          "a song about a scientist's discovery",
          "a song about a love triangle",
          "a song about a spy's hidden identity",
          "a song about a mistaken identity",
          "a song about a forged painting",
          "a song about a stolen diary",
          "a song about a hidden garden",
          "a song about a dragon slayer's fear",
          "a song about a life-saving decision",
          "a song about a hitchhiker's story",
          "a song about a firefighter's first day",
          "a song about an archaeologist's discovery",
          "a song about a road not taken",
          "a song about a singer's lost voice",
          "a song about a faded actor",
          "a song about a parent's pride",
          "a song about a blind date",
          "a song about a failed exam",
          "a song about a winter's tale",
          "a song about a summer crush",
          "a song about a haunted doll",
          "a song about a fortune teller's prophecy",
          "a song about a sudden storm",
          "a song about a historical romance",
          "a song about a birthday wish",
          "a song about a hero's downfall",
          "a song about a villain's regret",
          "a song about a time machine malfunction",
          "a song about a deal gone wrong",
          "a song about a heartbroken bartender",
          "a song about an alien encounter",
          "a song about a cursed book",
          "a song about a hidden treasure",
          "a song about a shipwreck survivor",
          "a song about a forgotten hero",
          "a song about a rejected proposal",
          "a song about a fading star",
          "a song about a broken promise",
          "a song about a secret society",
          "a song about a new year's resolution",
          "a song about a lost love letter",
          "a song about a world without music",
          "a song about a dog's loyalty",
          "a song about a cat's adventure",
          "a song about a young inventor's creation",
          "a song about a warrior's heart",
          "a song about a misunderstood monster",
          "a song about a farewell letter",
          "a song about a child's bravery",
          "a song about a midnight train to nowhere",
          "a song about a lonesome cowboy's journey",
          "a song about a dancer's dream in NYC",
          "a song about the last day on earth",
          "a song about a painter painting his masterpiece",
          "a song about a soldier questioning war",
          "a song about a first love at the retirement home",
          "a song about the magic of a bookstore",
          "a song about a city engulfed in fog",
          "a song about the secret life of a librarian",
          "a song about a couple renewing vows",
          "a song about a flower blooming in adversity",
          "a song about the struggle of addiction",
          "a song about a conversation with a stranger on a plane",
          "a song about a child's first bike ride",
          "a song about the joy of cooking with family",
          "a song about finding a message in a bottle",
          "a song about a grandparent's old war stories",
          "a song about the grief of losing a loved one",
          "a song about a mythical forest's enchantment",
          "a song about a journey to find oneself",
          "a song about a writer with writer's block",
          "a song about the thrill of a high-speed chase",
          "a song about the beauty of an eclipse",
          "a song about the colors of the aurora",
          "a song about life in a small town",
          "a song about the excitement of a carnival",
          "a song about a lie that led to adventure",
          "a song about the warmth of a winter cabin",
          "a song about a bond with a wild animal",
          "a song about living with a disability",
          "a song about the mystery of an old clock",
          "a song about an unbreakable sports record",
          "a song about a journey across the galaxy",
          "a song about a poet's muse",
          "a song about a lost ancient city",
          "a song about an escape from a dystopian society",
          "a song about a love that transcends time",
          "a song about the heartache of distance",
          "a song about the danger of vanity",
          "a song about a sacrifice for love",
          "a song about an unexpected hero",
          "a song about the struggle for equality",
          "a song about finding beauty in imperfection",
          "a song about the rush of a first performance",
          "a song about the calm after a storm",
          "a song about the thrill of the unknown",
          "a song about a friendship that endures",
          "a song about the loss of a childhood home",
          "a song about a couple's first dance at their wedding",
          "a song about the hope of a new beginning",
          "a song about the joy of a family reunion",
          "a song about a challenge that tests courage",
          "a song about the pain of unrequited love",
          "a song about the discovery of an ancient artifact",
          "a song about the wonder of the cosmos",
          "a song about the simplicity of life before technology",
          "a song about a disillusioned king",
          "a song about the quest for personal freedom",
          "a song about the end of a long journey",
          "a song about finding solace in nature",
          "a song about the wisdom of elders",
          "a song about the chaos of a stock market crash",
          "a song about the perseverance in the face of failure",
          "a song about the light of a full moon",
          "a song about the thrill of a secret romance",
          "a song about the beauty in the everyday",
          "a song about the return of a long-lost friend",
          "a song about the patience of waiting for spring",
          "a song about the warmth of a summer night",
          "a song about the legend of a haunted place",
          "a song about the nostalgia of an old song",
          "a song about the danger of ambition",
          "a song about the peace found in meditation",
          "a song about breaking free from societal expectations",
          "a song about the thrill of exploration",
          "a song about the sorrow of a broken family",
          "a song about the courage to start over",
          "a song about the magic of first snow",
          "a song about the emptiness of fame",
          "a song about a journey through the desert",
          "a song about the loyalty of an old friend",
          "a song about the mystery of a stranger's glance",
          "a song about overcoming personal demons",
          "a song about a childhood adventure",
          "a song about the heartbreak of saying goodbye",
          "a song about the rush of a crowd's cheer",
          "a song about a future utopian society",
          "a song about the thrill of a heist",
          "a song about the simplicity of a rural life",
          "a song about the energy of youth",
          "a song about the depth of a grandparent's advice",
          "a song about the awe of a child's birth",
          "a song about the struggle with identity",
          "a song about an oath between knights",
          "a song about a historic peace treaty",
          "a song about the history of a meaningful landmark",
          "a song about the intrigue of a covert operation",
          "a song about the sparkle of city lights",
          "a song about the trust between partners in crime",
          "a song about a sailor's relationship with the sea",
          "a song about the chill of a mountain peak",
          "a song about a craftsman's dedication",
          "a song about a quiet moment of contemplation",
          "a song about the thrill of a fast car",
          "a song about the elegance of a masquerade ball",
          "a song about the legacy of a ruler",
          "a song about the bond with a childhood pet",
          "a song about the excitement of a holiday",
          "a song about the wisdom gained from loss",
          "a song about the mystery behind a painting",
          "a song about a daring escape",
          "a song about the conflict between tradition and change",
          "a song about the pressure of competition",
          "a song about a moment of unexpected kindness",
          "a song about the discovery of a new passion",
          "a song about a curse that haunts a family",
          "a song about the anticipation before a journey",
          "a song about a moment of forgiveness",
          "a song about the struggle against oppression",
          "a song about the joy of a communal feast",
          "a song about a moment of clarity in chaos",
          "a song about the legend of an ancient hero",
          "a song about the bloom of a rare flower",
          "a song about the journey to enlightenment",
          "a song about the warmth of a community's embrace",
          "a song about the darkness of a villain's heart",
          "a song about the light found in darkness",
          "a song about the silence of a snow-covered landscape",
          "a song about the resilience of the human spirit",
          "a song about the bond formed in battle",
          "a song about the beauty of a fading sunset",
          "a song about the thrill of opening night",
          "a song about the discovery of inner strength",
          "a song about the serenity of a forest",
          "a song about an oath of loyalty",
          "a song about the struggle for survival in nature",
          "a song about the tension of a final showdown",
          "a song about the reunion of long-lost lovers",
          "a song about a walk through an ancient city",
          "a song about the last day of summer",
          "a song about a balloon's journey across skies",
          "a song about the life of a street artist",
          "a song about whispers in an old library",
          "a song about a farewell at the train station",
          "a song about the colors of autumn",
          "a song about the echoes of an empty cathedral",
          "a song about the thrill of a midnight swim",
          "a song about a phantom's lament",
          "a song about a journey on the silk road",
          "a song about the warmth of returning home",
          "a song about the joy of a harvest moon",
          "a song about the mystery of a locked diary",
          "a song about a reunion with a childhood nemesis",
          "a song about a dream of an underwater city",
          "a song about the agony of a wilted rose",
          "a song about the last rays of a setting sun",
          "a song about the magic in a child's giggle",
          "a song about the nostalgia of an old movie",
          "a song about the scent of rain on dry earth",
          "a song about a letter never received",
          "a song about a stroll under the cherry blossoms",
          "a song about the enchantment of a frosty morning",
          "a song about the longing for a lost world",
          "a song about the allure of the unknown",
          "a song about a mismatched duel of wits",
          "a song about the grief of a setting star",
          "a song about a pact with the ocean",
          "a song about the melody of a ancient flute",
          "a song about the wisdom of a lonely owl",
          "a song about the thrill of a cliffhanger",
          "a song about a summoner's last spell",
          "a song about a love transcending lifetimes",
          "a song about the secrets of a forbidden forest",
          "a song about an outcast's anthem",
          "a song about the radiance of a full moon",
          "a song about the curse of the midas touch",
          "a song about the sorrow in an old man's eyes",
          "a song about the dance of the northern lights",
          "a song about the freedom of a fallen leaf",
          "a song about the enchantment of a first snow",
          "a song about the legend of a forgotten king",
          "a song about the spirit of a wanderer",
          "a song about the shimmer of a shooting star",
          "a song about the whispers of ancestors",
          "a song about the battle of a lone knight",
          "a song about the magic of a hidden waterfall",
          "a song about the agony of a melted snowman",
          "a song about the myth of an uncharted land",
          "a song about the rebirth of a phoenix",
          "a song about the beauty of a collapsed star",
          "a song about the solitude of a night drive",
          "a song about the mystery of a midnight caller",
          "a song about the joy of a child's first word",
          "a song about a crumbling empire's final day",
          "a song about the serenade of a forgotten lover",
          "a song about the legend of a mystical unicorn",
          "a song about the secret life of a novelist",
          "a song about the despair of a queen bee",
          "a song about the humanity of a robot",
          "a song about the courage of a young shepherd",
          "a song about the adventure of a lifetime",
          "a song about the pain of a wilted friendship",
          "a song about the hope in a sunrise",
          "a song about the echoes of a time gone by",
          "a song about the journey to the edge of the world",
          "a song about a message sent across time",
          "a song about the last guardian of a sacred grove",
          "a song about the thrill of discovering a secret",
          "a song about a spirit's message in a dream",
          "a song about the warmth of a stranger's smile",
          "a song about the fate of a shooting star",
          "a song about the resilience of a dandelion",
          "a song about a painting that captures the soul",
          "a song about memories carried by the wind",
          "a song about the challenge of an unclimbed mountain",
          "a song about the whispers of old trees",
          "a song about the first breath of spring",
          "a song about the heartache of autumn's end",
          "a song about the serenity of a snow-covered field",
          "a song about the curse of an immortal life",
          "a song about the magic hidden in plain sight",
          "a song about the spectacle of a meteor shower",
          "a song about the loneliness of the moon",
          "a song about the bond of a constellation",
          "a song about the tale of a wandering bard",
          "a song about the tranquility of a hidden cove",
          "a song about the final stand of a fallen hero",
          "a song about the mystery of a closed bookshop",
          "a song about the colors of a fading day",
          "a song about a journey through the clouds",
          "a song about the legend of a cursed statue",
          "a song about the thrill of a hidden path",
          "a song about the echo of forgotten words",
          "a song about the longing for a star",
          "a song about the beauty of a moment paused",
          "a song about the adventure in a forgotten map",
          "a song about the whispers of a passing season",
          "a song about the secret of an ancient tree",
          "a song about the last dance of summer",
          "a song about the melody of falling leaves",
          "a song about the tale of an enchanted mirror",
          "a song about the legend of a lost ocean",
          "a song about the bond of twin flames",
          "a song about the glow of a distant galaxy",
          "a song about the challenge of a roaring river",
          "a song about the mystery of a stranger's glance",
          "a song about a farewell without words",
          "a song about the silence of a forgotten forest",
          "a song about the harmony of the cosmos",
          "a song about the whispers of the night sky",
          "a song about the passion of a stormy sea",
          "a song about the beauty in a beast's heart",
          "a song about the journey of a lone comet",
          "a song about the secrets held by the mountains",
          "a song about the last bloom of a dying flower",
          "a song about the legend of an ancient spell",
          "a song about the dance of fireflies at dusk",
          "a song about the reunion of soulmates",
          "a song about the wisdom of the ancient oaks",
          "a song about the tale of a ship lost at sea",
          "a song about the mystery of a hidden cave",
          "a song about the adventure of a night owl",
          "a song about the memories of a lazy river",
          "a song about the echo of a lost civilization",
          "a song about the journey back to oneself",
          "a song about the first light of dawn",
          "a song about the serenade of the ocean",
          "a song about the tale of a fallen star",
          "a song about the legend of a secret potion",
          "a song about the bond of a family's love",
          "a song about the scars of a warrior's heart",
          "a song about the whispers of a gentle rain",
          "a song about the fire of a dragon's breath",
          "a song about the grace of an eagle's flight",
          "a song about the journey of a feather in the wind",
          "a song about the warmth of a campfire story",
          "a song about the dreams of a sleeping city",
          "a song about the courage to face the darkness",
          "a song about the quest for a legendary sword",
          "a song about the mystery of a midnight feast",
          "a song about the beauty of a handwritten letter",
          "a song about the enchantment of a fairy dance",
          "a song about the heartache of a good goodbye",
          "a song about the secrets whispered by the shadows",
          "a song about the colors painted by the dusk",
          "a song about the magic found in a lover's eyes",
          "a song about the silence of a snowflake's descent",
          "a song about the journey to the heart's core",
          "a song about the signs left by the stars",
          "a song about the whispers of a forgotten melody",
          "a song about the legends carved in stone",
          "a song about the first sip of morning coffee",
          "a song about a road trip with old friends",
          "a song about late-night talks over the phone",
          "a song about growing up in a small town",
          "a song about the feeling of starting a new job",
          "a song about the peace found in gardening",
          "a song about the laughter at family dinners",
          "a song about the bittersweet end of a summer love",
          "a song about finding an old love letter",
          "a song about the thrill of learning to ride a bike",
          "a song about the comfort of a childhood blanket",
          "a song about the tension of waiting for exam results",
          "a song about the joy of a snow day",
          "a song about coming home after a long time",
          "a song about baking with grandma",
          "a song about the fear of making the first move",
          "a song about a night out with nowhere to go",
          "a song about the struggle of living far from family",
          "a song about the anxiety of social media",
          "a song about the quiet of a city at dawn",
          "a song about the frustration of traffic jams",
          "a song about the simplicity of picnics in the park",
          "a song about the experience of moving to a big city",
          "a song about the joy of finding money in old jeans",
          "a song about the regret of words left unsaid",
          "a song about the relief after a hard conversation",
          "a song about the warmth of a hug from a loved one",
          "a song about the sadness of an empty nest",
          "a song about the nervousness of a first date",
          "a song about the pride of a DIY project",
          "a song about the freedom of quitting a job",
          "a song about the challenge of keeping plants alive",
          "a song about the hope in a sunrise",
          "a song about the excitement of a thunderstorm",
          "a song about the mystery of a missed connection",
          "a song about the awkwardness of high school reunions",
          "a song about the peace of a solo hike",
          "a song about the passion of rediscovered hobbies",
          "a song about the nostalgia for vintage fashion",
          "a song about the energy of a live concert",
          "a song about the stress of apartment hunting",
          "a song about the joy of a first paycheck",
          "a song about the discomfort of growing pains",
          "a song about the beauty of a multicultural festival",
          "a song about the courage to change career paths",
          "a song about the tension of a competitive game night",
          "a song about the despair of a lost phone",
          "a song about the excitement of planning a trip",
          "a song about the contentment of a rest day",
          "a song about the innocence of childhood games",
          "a song about the thrill of a new relationship",
          "a song about the warmth of holiday traditions",
          "a song about the pain of a friendship drifting apart",
          "a song about the satisfaction of a clean home",
          "a song about the awe of a desert sunrise",
          "a song about the comfort of a favorite sweater",
          "a song about the chaos of a family road trip",
          "a song about the excitement of catching a flight",
          "a song about the serenity of early morning fishing",
          "a song about the joy of an unexpected day off",
          "a song about the frustration of untangling headphones",
          "a song about the surprise of an unplanned adventure",
          "a song about the nervous excitement of backstage",
          "a song about the relief of a cancelled plan",
          "a song about the confusion of adulting",
          "a song about the delight of a child's laughter",
          "a song about the struggle of a diet plan",
          "a song about the fear of losing memories",
          "a song about the rush of a first kiss",
          "a song about the discomfort of a bad haircut",
          "a song about the joy of a game-winning goal",
          "a song about the peace of a rainy day indoors",
          "a song about the thrill of a successful negotiation",
          "a song about the motivation of a morning run",
          "a song about the stress of holiday shopping",
          "a song about the chaos of a house party",
          "a song about the anticipation of a package delivery",
          "a song about the discomfort of a crowded elevator",
          "a song about the pride of cooking a perfect meal",
          "a song about the melancholy of a setting sun",
          "a song about the awkwardness of a first dance",
          "a song about the freedom of driving with no destination",
          "a song about the disappointment of a cancelled concert",
          "a song about the anticipation of meeting an online friend",
          "a song about the nostalgia of looking through old photos",
          "a song about the joy of a long-awaited reunion",
          "a song about the struggle of overcoming a bad habit",
          "a song about the surprise of finding forgotten cash",
          "a song about the beauty of a city skyline at night",
          "a song about the fear of a first solo trip",
          "a song about the excitement of meeting a hero",
          "a song about the thrill of a chase",
          "a song about the dutifulness of daily chores",
          "a song about the comfort of a lullaby",
          "a song about the isolation of a crowded city",
          "a song about the calmness of knitting",
          "a song about the exhilaration of skiing down a slope",
          "a song about the anxiety of a job interview",
          "a song about the pride of a presentation well done",
          "a song about the bittersweet feeling of a youth fading",
          "a song about the solidarity of marching for a cause",
          "a song about the confusion of choosing what to wear",
          "a song about the wonder of a child's curiosity",
          "a song about the fatigue of a night shift",
          "a song about the thrill of a hidden crush",
          "a song about the joy of skipping stones on a lake",
          "a song about the pain of letting go",
          "a song about the relief of reaching a destination",
          "a song about the frustration of a broken appliance",
          "a song about the surprise of an unexpected compliment",
          "a song about the contentment of morning rituals",
          "a song about the comfort of an old book",
          "a song about the joy of a Sunday brunch",
          "a song about the tenderness of a parent's advice",
          "a song about the rush of crowd surfing",
          "a song about the melancholy of a closed caf\xe9",
          "a song about the engagement of solving a puzzle",
          "a song about the motivation of a pep talk",
          "a song about the anticipation of a first performance",
          "a song about the helplessness of a traffic jam",
          "a song about the excitement of a DIY project completion",
          "a song about the pain of a bee sting",
          "a song about the contentment of a cat's purr",
          "a song about the inspiration of a sunrise hike",
          "a song about the relief of finding a lost item",
          "a song about the dread of a Monday morning",
          "a song about the satisfaction of a well-organized room",
          "a song about the curiosity of exploring a new city",
          "a song about the panic of a near-miss accident",
          "a song about the comfort of a familiar song",
          "a song about the tension of a close sports game",
          "a song about the joy of a successful repair",
          "a song about the stress of a difficult decision",
          "a song about the freedom of a bike ride",
          "a song about the challenge of learning a new language",
          "a song about the warmth of a campfire with friends",
        ],
        n = [
          "rock",
          "electronic",
          "pop",
          "jazz",
          "classical",
          "hip hop",
          "pop rock",
          "indie rock",
          "alternative rock",
          "folk",
          "punk",
          "blues",
          "experimental",
          "ambient",
          "synth-pop",
          "hard rock",
          "downtempo",
          "heavy metal",
          "house",
          "electro",
          "soul",
          "country",
          "folk rock",
          "melodic",
          "latin",
          "techno",
          "ballad",
          "reggae",
        ],
        i = () => s[Math.floor(Math.random() * s.length)],
        r = () => n[Math.floor(Math.random() * n.length)],
        l = () => ({ prompt: i(), tags: [r()] });
      var u = t(19213),
        c = t(18746),
        g = t(47281),
        d = t(53334),
        h = t(47082),
        f = t(97404),
        b = t(91980),
        m = t(24232),
        p = t(2265),
        x = t(56288),
        y = t(36408),
        v = t(73667),
        w = t(68203),
        j = (e) => {
          let { partialTag: a, currentTags: t } = e,
            o = (0, u.cC)("create-tag-search"),
            s = n.slice(0, 25).map((e) => ({ label: e, value: e }));
          return (0, v.a)({
            enabled:
              !!(null == a ? void 0 : a.length) ||
              !!(null == t ? void 0 : t.length),
            queryKey: y.Z5.forPartialAndCurrentTags(a, t),
            queryFn: async () => {
              if (!o) return { predictions: s, completions: [] };
              let e = await w.bL.post("/api/searchtags", {
                partialTag: a,
                currentTags: t,
              });
              return {
                predictions:
                  e.data.predictions.length > 0 ? e.data.predictions : s,
                completions: e.data.completions,
              };
            },
            refetchOnWindowFocus: !1,
            refetchOnMount: !1,
            refetchOnReconnect: !1,
            retry: !1,
            staleTime: 3e4,
            placeholderData: (e) => e || { predictions: s, completions: [] },
          });
        },
        k = t(23642),
        N = t(68062),
        _ = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            a = (0, k.Z)();
          return (0, v.a)({
            queryKey: y.YN.currentUserApiUsage(),
            queryFn: async () => (await (0, N.L9)()).data,
            refetchOnWindowFocus: !1,
            enabled: !!(null == a ? void 0 : a.id) && e,
          });
        },
        C = t(41100),
        z = t(38980),
        F = t(45722),
        S = t(76798),
        T = t(6771),
        Z = t(13581),
        L = () => {
          let { showOptions: e, setShowOptions: a } = (0, S.F)();
          return (0, o.jsx)(o.Fragment, {
            children: e
              ? (0, o.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-[-1000] h-screen w-screen bg-black/30",
                  onClick: () => a(!1),
                })
              : null,
          });
        },
        P = t(98998),
        D = t(37501),
        M = t(28814),
        I = t(77929),
        E = t(81805),
        A = (e) => {
          let {
            toastId: a,
            userApiUsage: t,
            toastType: s = "warning",
            toastMessage: n = "Amazing music is seconds away!",
          } = e;
          return (0, o.jsxs)(E.Z, {
            toastId: a,
            children: [
              (0, o.jsxs)(I.Cd, {
                className: "flex items-center space-x-2 text-lg",
                children: [
                  "error" === s
                    ? (0, o.jsx)(P.Z, {
                        className:
                          "my-auto mr-2 h-4 w-4 animate-pulse text-red-500",
                      })
                    : "warning" === s
                      ? (0, o.jsx)(P.Z, {
                          className:
                            "my-auto mr-2 h-4 w-4 animate-pulse text-orange-500",
                        })
                      : (0, o.jsx)(D.Z, {
                          className:
                            "my-auto mr-2 h-4 w-4 animate-pulse stroke-green-500",
                        }),
                  " ",
                  "error" === s ? "Error Generating" : "Creating Your Tracks",
                ],
              }),
              (0, o.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-between md:flex-row",
                children: [
                  (0, o.jsx)(I.X, { className: "md:ml-6", children: n }),
                  t &&
                    "new" !== t.tier &&
                    (0, o.jsx)(I.X, {
                      className: "mt-2 md:mt-0",
                      children: (0, o.jsxs)("div", {
                        className: "flex flex-col space-y-1",
                        children: [
                          (0, o.jsxs)("span", {
                            className: "flex items-center",
                            children: [
                              (0, o.jsx)(M.Z, {
                                className: "my-auto mr-2 h-4 w-4",
                              }),
                              t.daily_used,
                              " / ",
                              t.daily_throttle_limit,
                              " ",
                              "Daily Priority Generations",
                            ],
                          }),
                          (0, o.jsxs)("span", {
                            className: "flex items-center",
                            children: [
                              (0, o.jsx)(M.Z, {
                                className: "my-auto mr-2 h-4 w-4",
                              }),
                              t.monthly_used,
                              " / ",
                              t.monthly_limit,
                              " ",
                              "Monthly Generations",
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        q = t(85754),
        R = t(45179),
        O = t(78798),
        Y = t(47934),
        U = t(94845),
        G = t(1657);
      let W = p.forwardRef((e, a) => {
        let { className: t, ...s } = e;
        return (0, o.jsx)(U.fC, {
          className: (0, G.cn)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ...s,
          ref: a,
          children: (0, o.jsx)(U.bU, {
            className: (0, G.cn)(
              "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      });
      W.displayName = U.fC.displayName;
      var Q = t(49108),
        B = t(37805),
        H = t(31478);
      let K = 7 / 12;
      var V = (e) => {
          let { tagType: a, tagList: t, addSuggestedTags: s } = e,
            n = (0, p.useRef)(null),
            [i, r] = (0, p.useState)(!1),
            [l, u] = (0, p.useState)(!0),
            c = (0, p.useCallback)(() => {
              if (n.current) {
                let { scrollWidth: e, clientWidth: a } = n.current;
                n.current.scrollLeft = Math.min(
                  n.current.scrollLeft + a * K,
                  e - a
                );
              }
            }, []),
            g = (0, p.useCallback)(() => {
              n.current &&
                (n.current.scrollLeft = Math.max(
                  n.current.scrollLeft - n.current.clientWidth * K,
                  0
                ));
            }, []);
          return ((0, p.useEffect)(() => {
            let e = () => {
                if (!n.current) return;
                let {
                  scrollLeft: e,
                  scrollWidth: a,
                  clientWidth: t,
                } = n.current;
                0 === e ? r(!1) : r(!0), e + t === a ? u(!1) : u(!0);
              },
              a = n.current;
            return (
              null == a || a.addEventListener("scroll", e),
              () => (null == a ? void 0 : a.removeEventListener("scroll", e))
            );
          }, []),
          t)
            ? (0, o.jsxs)("div", {
                className: "relative flex max-w-full flex-grow items-center",
                children: [
                  i
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)("div", {
                            className: (0, G.cn)([
                              "pointer-events-none absolute left-0 hidden h-[40px] w-[200px] bg-gradient-to-l from-transparent to-black md:block",
                              "transition-opacity duration-500",
                              i ? "opacity-100" : "opacity-0",
                            ]),
                          }),
                          (0, o.jsx)("div", {
                            className: (0, G.cn)([
                              "absolute left-0 top-0 bg-gradient-to-l from-transparent to-black",
                              "transition-opacity duration-500",
                              i ? "opacity-100" : "opacity-0",
                            ]),
                            children: (0, o.jsx)(H.C, {
                              className:
                                "mr-2 hidden cursor-pointer bg-gray-light py-0 text-foreground hover:text-muted-foreground md:inline-flex",
                              onMouseDown: (e) => {
                                e.preventDefault(), g();
                              },
                              children: (0, o.jsx)(Q.Z, { className: "w-4" }),
                            }),
                          }),
                        ],
                      })
                    : null,
                  (0, o.jsx)("div", {
                    className: "max-w-full flex-grow",
                    children: (0, o.jsx)("div", {
                      ref: n,
                      className:
                        "flex overflow-x-auto scroll-smooth whitespace-nowrap rounded-lg",
                      style: { scrollbarWidth: "none" },
                      children: t.map((e) =>
                        (0, o.jsx)(
                          H.C,
                          {
                            className:
                              "mr-2 cursor-pointer bg-[#FFFFFF]/5 px-3 py-3 text-muted-foreground hover:text-muted-foreground md:bg-gray-light md:px-2.5 md:py-1",
                            onMouseDown: (t) => {
                              t.preventDefault(),
                                s([e.value]),
                                (0, Z.L9)(
                                  "Prediction" === a
                                    ? "Tag Prediction Click"
                                    : "Tag Completion Click",
                                  { tag: e.value }
                                );
                            },
                            children: e.label,
                          },
                          e.value
                        )
                      ),
                    }),
                  }),
                  l
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)("div", {
                            className: (0, G.cn)([
                              "pointer-events-none absolute right-0 hidden h-[40px] w-[200px] bg-gradient-to-r from-transparent to-black md:block",
                              "transition-opacity duration-500",
                              l ? "opacity-100" : "opacity-0",
                            ]),
                          }),
                          (0, o.jsx)("div", {
                            className: (0, G.cn)([
                              "absolute right-0 top-0 bg-gradient-to-r from-transparent to-black pl-8",
                              "transition-opacity duration-500",
                              l ? "opacity-100" : "opacity-0",
                            ]),
                            children: (0, o.jsx)(H.C, {
                              className:
                                "ml-3 hidden cursor-pointer bg-gray-light py-0 text-foreground hover:text-muted-foreground md:inline-flex",
                              onMouseDown: (e) => {
                                e.preventDefault(), c();
                              },
                              children: (0, o.jsx)(B.Z, { className: "w-4" }),
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              })
            : null;
        },
        X = t(91942),
        J = t(98642),
        $ = t(57976),
        ee = t(50661),
        ea = t(49578),
        et = t(23416),
        eo = t(20703);
      let es = (0, t(79740).I)();
      var en = (e) => {
          let { size: a = 48 } = e,
            t = (0, ee.V)(),
            {
              baseTrack: s,
              setBaseTrack: n,
              setSamplerOptionsItem: i,
            } = (0, z.QY)(),
            [r, l] = (0, p.useState)((null == s ? void 0 : s.prompt) || "");
          return (
            (0, p.useEffect)(() => {
              l((null == s ? void 0 : s.prompt) || "");
            }, [null == s ? void 0 : s.prompt]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("h1", {
                  className: "whitespace-nowrap text-sm text-muted-foreground",
                  children: "Original Prompt",
                }),
                (0, o.jsxs)("div", {
                  className: "flex w-full py-2",
                  children: [
                    (0, o.jsxs)(q.z, {
                      variant: "ghost",
                      className:
                        "absolute -top-1 right-0 flex h-8 flex-row py-0",
                      onClick: () => {
                        n(null), i("crop_start_time", void 0);
                      },
                      children: [
                        (0, o.jsx)(ea.Z, { className: "mr-2", size: 16 }),
                        "Create New",
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "relative flex-shrink-0",
                      children: (0, o.jsx)(eo.default, {
                        className: "rounded-sm",
                        src: (null == s ? void 0 : s.image_path) || es,
                        alt:
                          (null == s ? void 0 : s.title) || "base track icon",
                        width: a,
                        height: a,
                        sizes: "".concat(a, "px"),
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className:
                        "truncate-1-line flex flex-grow items-center rounded-md border border-input p-2 text-sm text-muted-foreground",
                      children: [
                        (0, o.jsx)("div", {
                          className: "truncate-1-line flex-grow ",
                          children: r,
                        }),
                        (0, o.jsx)("div", {
                          className: "ml-4 flex-shrink-0",
                          onClick: () => {
                            t.copy(r),
                              l("Copied!"),
                              setTimeout(() => {
                                l(r);
                              }, 1500);
                          },
                          children: (0, o.jsx)(et.Z, {
                            size: 16,
                            className: "cursor-pointer",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ei = t(92299),
        er = t(14270),
        el = t(29691),
        eu = () => {
          let e = (0, u.cC)("extension-trim"),
            [a, t] = (0, p.useState)(!1),
            {
              baseTrack: s,
              samplerOptions: n,
              setSamplerOptionsItem: i,
            } = (0, z.QY)();
          return (
            (0, p.useEffect)(() => {
              a || i("audio_conditioning_crop_seconds", void 0);
            }, [a]),
            (0, o.jsx)(o.Fragment, {
              children:
                e &&
                s &&
                (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsxs)(el.zF, {
                    onOpenChange: (e) => t(e),
                    children: [
                      (0, o.jsx)(el.wy, {
                        children: (0, o.jsxs)("div", {
                          className: " mt-2 flex items-center justify-between",
                          children: [
                            (0, o.jsx)(W, {
                              id: "bypass-settings",
                              checked: a,
                              onCheckedChange: (e) => {
                                t(e);
                              },
                              title: "Use Section Crop",
                              className: "mr-2",
                            }),
                            (0, o.jsx)("h1", {
                              className:
                                "mr-2 whitespace-nowrap text-sm text-muted-foreground",
                              children: "Select Section",
                            }),
                            (0, o.jsx)(ei.Z, {
                              children:
                                "Select a section of the song to crop before the extension process occurs. This is a non destructive operation that will not affect the original song.",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)(el.Fw, {
                        children: (0, o.jsx)("div", {
                          className: "mt-2",
                          children: (0, o.jsx)(er.Z, {
                            useTrim: !0,
                            height: 50,
                            track: s,
                            setPoints: (e, a) => {
                              i("audio_conditioning_crop_seconds", [e, a]);
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        ec = () => {
          let {
              baseTrack: e,
              samplerOptions: a,
              setSamplerOptions: t,
            } = (0, z.QY)(),
            [s, n] = (0, p.useState)("middle");
          if (
            !e ||
            ("precede" !== a.audio_conditioning_type &&
              "continuation" !== a.audio_conditioning_type)
          )
            return null;
          let i = [
            {
              arrow: (0, o.jsx)(X.Z, { className: "mr-2 h-5 w-5" }),
              title: "Before",
              placement: "Add Intro",
              checked: "precede" === a.audio_conditioning_type && "intro" === s,
              onClick: () => {
                t({
                  ...a,
                  audio_conditioning_type: "precede",
                  crop_start_time: 0,
                }),
                  n("intro"),
                  (0, Z.L9)("Select Extension Type", {
                    extensionType: "intro",
                    placement: "Pre-extension",
                  });
              },
            },
            {
              arrow: (0, o.jsx)(X.Z, { className: "mr-2 h-5 w-5" }),
              title: "Before",
              placement: "Add Section",
              checked:
                "precede" === a.audio_conditioning_type && "middle" === s,
              onClick: () => {
                t({
                  ...a,
                  audio_conditioning_type: "precede",
                  crop_start_time: 0.4,
                }),
                  n("middle"),
                  (0, Z.L9)("Select Extension Type", {
                    extensionType: "middle",
                    placement: "Pre-extension",
                  });
              },
            },
            {
              arrow: (0, o.jsx)(J.Z, { className: "mr-2 h-5 w-5" }),
              title: "After",
              placement: "Add Section",
              checked:
                "continuation" === a.audio_conditioning_type && "middle" === s,
              onClick: () => {
                t({
                  ...a,
                  audio_conditioning_type: "continuation",
                  crop_start_time: 0.4,
                }),
                  n("middle"),
                  (0, Z.L9)("Select Extension Type", {
                    extensionType: "middle",
                    placement: "Continuation",
                  });
              },
            },
            {
              arrow: (0, o.jsx)(J.Z, { className: "mr-2 h-5 w-5" }),
              title: "After",
              placement: "Add Outro",
              checked:
                "continuation" === a.audio_conditioning_type && "outro" === s,
              onClick: () => {
                t({
                  ...a,
                  audio_conditioning_type: "continuation",
                  crop_start_time: 0.9,
                }),
                  n("outro"),
                  (0, Z.L9)("Select Extension Type", {
                    extensionType: "outro",
                    placement: "Continuation",
                  });
              },
            },
          ];
          return (0, o.jsxs)("div", {
            className: "relative my-2",
            children: [
              (0, o.jsx)(en, { size: 40 }),
              (0, o.jsx)(eu, {}),
              (0, o.jsx)(Y.Z, { className: "mb-3 mt-3 " }),
              (0, o.jsx)("div", {
                className: "relative my-3 flex w-full flex-col",
                children: (0, o.jsx)("div", {
                  className:
                    "relative flex w-full flex-row items-center justify-between",
                  children: (0, o.jsx)("div", {
                    className: "flex flex-row items-center",
                    children: (0, o.jsx)("h1", {
                      className:
                        "whitespace-nowrap text-sm text-muted-foreground",
                      children: "Extension Placement",
                    }),
                  }),
                }),
              }),
              (0, o.jsx)("div", {
                className: "flex w-full flex-col items-center",
                children: (0, o.jsx)("div", {
                  className: "flex w-full items-center space-x-2",
                  children: (0, o.jsx)("div", {
                    className: "grid w-full grid-cols-2 gap-4 lg:grid-cols-4",
                    children: i.map((e) =>
                      (0, o.jsxs)(
                        "div",
                        {
                          className:
                            "flex h-[60px] flex-grow cursor-pointer items-center justify-center rounded-md p-3 text-sm ".concat(
                              e.checked
                                ? "border border-[var(--ring)] bg-gray-light"
                                : "bg-[#FFFFFF]/5 hover:border-[var(--ring)]"
                            ),
                          onClick: e.onClick,
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "relative flex w-full flex-col justify-start",
                              children: [
                                (0, o.jsxs)("div", {
                                  className:
                                    "flex items-center text-base font-medium",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className: "mr-2 w-4",
                                      children: e.arrow,
                                    }),
                                    e.placement,
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className:
                                    "truncate-1-line w-full whitespace-nowrap text-base  leading-5 text-muted-foreground",
                                  children: e.title,
                                }),
                              ],
                            }),
                            e.checked
                              ? (0, o.jsx)($.Z, {
                                  className: "",
                                  size: 16,
                                  color: "black",
                                  fill: "white",
                                })
                              : (0, o.jsx)(D.Z, {
                                  className: "",
                                  size: 16,
                                  color: "white",
                                }),
                          ],
                        },
                        "".concat(e.title, "-").concat(e.placement)
                      )
                    ),
                  }),
                }),
              }),
            ],
          });
        },
        eg = t(95200),
        ed = t(23444);
      let eh = [
        "Write lyrics suitable for a 30s clip — about 6 lines for most genres, fewer for slower songs, and more for faster ones.",
        "Add [Verse], [Bridge], and [Chorus] tags for additional control.",
        "[Drop] and [guitar solo] [sax solo] all do interesting things.",
        "If the model mispronounces a word, you can split it up into easier phonemes.",
        "Use between 200 and 350 characters for best results.",
      ];
      var ef = (e) => {
          let {
              settings: a,
              setSettings: t,
              lyricsType: s,
              setLyricsType: n,
            } = e,
            [i, r] = (0, p.useState)(0),
            { isMediumDevice: l } = (0, C.Z)(),
            { setLyricsFocus: u } = (0, S.F)(),
            c = (0, p.useCallback)(
              (e) => () => {
                n(e), (0, Z.L9)("Select Lyric Type", { lyricType: e });
              },
              [n]
            );
          (0, p.useEffect)(() => {
            "lyricInput" === s && r(Math.floor(Math.random() * eh.length));
          }, [s]);
          let g = (0, p.useCallback)(() => {
              r((i + 1) % eh.length);
            }, [i]),
            d = (0, p.useCallback)(() => {
              r((i - 1 + eh.length) % eh.length);
            }, [i]);
          return (0, o.jsxs)("div", {
            children: [
              (0, o.jsx)("h1", {
                className: "mb-2 text-sm text-muted-foreground",
                children: "Lyrics",
              }),
              (0, o.jsx)("div", {
                className: (0, G.cn)(
                  "grid grid-cols-3 items-center gap-x-4",
                  "lyricInput" === s ? "mb-3" : "mb-0 "
                ),
                children: [
                  {
                    title: "Custom",
                    description: "Write your own lyrics",
                    value: "lyricInput",
                  },
                  { title: "Instrumental", value: "instrumental" },
                  { title: l ? "Auto-generated" : "Auto", value: "infer" },
                ].map((e) =>
                  (0, o.jsxs)(
                    "div",
                    {
                      className: (0, G.cn)([
                        "relative flex h-[49px] cursor-pointer flex-row items-center justify-center overflow-hidden rounded-md border border-input px-4 md:justify-between",
                        s === e.value
                          ? "border-[var(--ring)] bg-create"
                          : "bg-[#FFFFFF]/5 hover:border-[var(--ring)]",
                      ]),
                      onClick: c(e.value),
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "relative flex w-full flex-row justify-center md:w-4/5 md:flex-col md:justify-start xl:flex-row xl:items-center xl:space-x-2",
                          children: [
                            (0, o.jsx)("div", {
                              className:
                                "text-sm font-medium text-white xl:text-base",
                              children: e.title,
                            }),
                            e.description
                              ? (0, o.jsx)("div", {
                                  className:
                                    "truncate-1-line hidden w-full whitespace-nowrap text-xs leading-5 text-muted-foreground lg:block",
                                  children: e.description,
                                })
                              : null,
                          ],
                        }),
                        s === e.value
                          ? (0, o.jsx)($.Z, {
                              className: "hidden lg:block",
                              size: 16,
                              color: "black",
                              fill: "white",
                            })
                          : (0, o.jsx)(D.Z, {
                              className: "hidden lg:block",
                              size: 16,
                              color: "white",
                            }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
              "lyricInput" === s
                ? (0, o.jsx)("div", {
                    className: "flex min-h-[150px] items-center md:h-auto",
                    children: (0, o.jsxs)("div", {
                      className:
                        "relative flex w-full flex-col items-start space-y-2 lg:flex-row lg:space-x-2",
                      children: [
                        (0, o.jsx)(ed.g, {
                          placeholder: "Write custom lyrics here",
                          className:
                            "min-h-[125px] w-full px-4 text-[16px] md:min-h-[150px] md:text-[14px] lg:w-2/3",
                          value: a.lyricInput,
                          onDrag: (e) => e.stopPropagation(),
                          onFocus: () => u(!0),
                          onBlur: () => u(!1),
                          onChange: (e) =>
                            t({ ...a, lyricInput: e.target.value }),
                        }),
                        (0, G.wb)(a.lyricInput || "") &&
                          (0, o.jsx)("p", {
                            className:
                              "mt-2 px-1 text-sm font-medium text-destructive md:hidden",
                            children:
                              "Use less than 350 characters for best results",
                          }),
                        (0, o.jsxs)("div", {
                          className: "relative w-full px-4 lg:w-1/3",
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "absolute right-4 top-2 flex items-center space-x-4",
                              children: [
                                (0, o.jsx)(Q.Z, {
                                  size: 16,
                                  className: "cursor-pointer",
                                  onClick: d,
                                }),
                                (0, o.jsx)(B.Z, {
                                  size: 16,
                                  className: "cursor-pointer",
                                  onClick: g,
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "my-2 flex flex-row items-center text-base text-muted-foreground",
                              children: [
                                (0, o.jsx)(eg.Z, {
                                  className: "mr-2",
                                  size: 16,
                                }),
                                "Lyrics Tip",
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "text-base text-muted-foreground",
                              children: eh[i],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : null,
              (0, G.wb)(a.lyricInput || "") &&
                (0, o.jsx)("p", {
                  className:
                    "mt-2 hidden px-1 text-sm font-medium text-destructive md:block",
                  children: "Use less than 350 characters for best results",
                }),
              (0, o.jsx)("div", { className: "flex h-[50vh] md:h-0" }),
            ],
          });
        },
        eb = () =>
          (0, o.jsx)(ei.Z, {
            children: (0, o.jsx)("div", {
              children:
                "Manual mode allows you to directly prompt the model without any prompt rewriting. By default, our system rewrites your prompts to improve the average output quality. If you are seeking specific sounds and want to interact directly with the model interface, we recommend using manual mode.",
            }),
          }),
        em = t(29456),
        ep = (e) => {
          let { userApiUsageData: a } = e;
          return (0, o.jsx)(o.Fragment, {
            children:
              a &&
              (0, o.jsxs)(em.zs, {
                openDelay: 200,
                children: [
                  (0, o.jsx)(em.Yi, {
                    children: (0, o.jsxs)("span", {
                      className:
                        "mr-5 flex cursor-pointer items-center text-xs",
                      children: [
                        a.monthly_used,
                        " / ",
                        a.monthly_limit,
                        " ",
                        "Monthly Generations",
                      ],
                    }),
                  }),
                  (0, o.jsx)(em.bZ, {
                    side: "top",
                    className: "w-80",
                    children: (0, o.jsxs)("div", {
                      className: "flex flex-col space-y-1",
                      children: [
                        (0, o.jsxs)("span", {
                          className: "flex items-center",
                          children: [
                            a.daily_used,
                            " /",
                            " ",
                            a.daily_throttle_limit,
                            " Daily Priority Generations",
                          ],
                        }),
                        (0, o.jsxs)("span", {
                          className: "flex items-center",
                          children: [
                            a.monthly_used,
                            " /",
                            " ",
                            a.monthly_limit,
                            " Monthly Generations",
                          ],
                        }),
                        (0, o.jsxs)("span", {
                          className: "flex items-center",
                          children: [
                            a.discretionary,
                            " Additional Generations",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          });
        },
        ex = t(26579);
      let ey = p.forwardRef((e, a) => {
        let { className: t, ...s } = e;
        return (0, o.jsxs)(ex.fC, {
          ref: a,
          className: (0, G.cn)(
            "relative flex w-full touch-none select-none items-center",
            t
          ),
          ...s,
          children: [
            (0, o.jsx)(ex.fQ, {
              className:
                "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
              children: (0, o.jsx)(ex.e6, {
                className: "absolute h-full bg-primary",
              }),
            }),
            (0, o.jsx)(ex.bU, {
              className:
                "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            }),
          ],
        });
      });
      ey.displayName = ex.fC.displayName;
      var ev = () => {
          let {
              samplerOptions: e,
              baseTrack: a,
              setSamplerOptions: t,
            } = (0, z.QY)(),
            { isMediumDevice: s } = (0, C.Z)();
          return "variation" === e.audio_conditioning_type && a
            ? (0, o.jsx)("div", {
                className:
                  "relative my-5 flex w-full space-x-3 md:items-center",
                children: (0, o.jsx)("div", {
                  className: "w-full",
                  children: (0, o.jsxs)("div", {
                    className:
                      "flex flex-col items-center md:flex-row md:space-x-4",
                    children: [
                      (0, o.jsx)("div", {
                        className:
                          "relative flex w-full flex-shrink-0 flex-col items-start md:w-1/2",
                        children: (0, o.jsx)(en, { size: s ? 57 : 40 }),
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "flex w-full flex-grow flex-col space-y-2 pt-3",
                        children: [
                          (0, o.jsx)("h1", {
                            className:
                              "whitespace-nowrap text-sm text-muted-foreground",
                            children: "Variance",
                          }),
                          (0, o.jsx)(ey, {
                            min: 0,
                            max: 1,
                            step: 0.01,
                            className: "w-full",
                            color: "bg-brand-accent",
                            value: [
                              void 0 !== e.audio_conditioning_similarity
                                ? 1 - e.audio_conditioning_similarity
                                : 0,
                            ],
                            onValueChange: (a) =>
                              t({
                                ...e,
                                audio_conditioning_similarity: 1 - a[0],
                              }),
                          }),
                          (0, o.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, o.jsx)("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Similar",
                              }),
                              (0, o.jsx)("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Different",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            : null;
        },
        ew = t(52235);
      let ej = 7 / 12;
      var ek = (e) => {
          let {
              partialTag: a = "",
              tagList: t,
              addSuggestedTags: s,
              containerStyle: n,
            } = e,
            i = (0, p.useRef)(null),
            [r, l] = (0, p.useState)(!1),
            [u, c] = (0, p.useState)(!0),
            { setShowTagCompletions: g } = (0, S.F)(),
            { isMediumDevice: d } = (0, C.Z)(),
            h = (0, p.useCallback)(() => {
              if (i.current) {
                let { scrollWidth: e, clientWidth: a } = i.current;
                i.current.scrollLeft = Math.min(
                  i.current.scrollLeft + a * ej,
                  e - a
                );
              }
            }, []),
            f = (0, p.useCallback)(() => {
              i.current &&
                (i.current.scrollLeft = Math.max(
                  i.current.scrollLeft - i.current.clientWidth * ej,
                  0
                ));
            }, []);
          (0, p.useEffect)(() => {
            let e = () => {
                if (!i.current) return;
                let {
                  scrollLeft: e,
                  scrollWidth: a,
                  clientWidth: t,
                } = i.current;
                0 === e ? l(!1) : l(!0), e + t === a ? c(!1) : c(!0);
              },
              a = i.current;
            return (
              null == a || a.addEventListener("scroll", e),
              () => (null == a ? void 0 : a.removeEventListener("scroll", e))
            );
          }, [null == i ? void 0 : i.current]);
          let b = null == t ? void 0 : t.filter((e) => e.value !== a);
          return (null == b ? void 0 : b.length)
            ? (0, o.jsxs)("div", {
                className:
                  "absolute z-10 flex w-full items-center overflow-x-auto bg-background pb-1",
                children: [
                  (0, o.jsx)("div", {
                    className: (0, G.cn)([
                      "absolute -z-10 h-full w-full bg-black/55",
                      n,
                    ]),
                  }),
                  (0, o.jsx)("div", {
                    className:
                      "absolute left-0 top-[2px] z-10 pl-4 pr-1 md:bg-black",
                    children: (0, o.jsx)("div", {
                      className:
                        "my-1 cursor-pointer rounded-full border border-input bg-black p-1",
                      onClick: () => g(!1),
                      children: (0, o.jsx)(ew.Z, { size: 16, fill: "white" }),
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "relative flex max-w-full flex-grow items-center",
                    children: [
                      r
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("div", {
                                className: (0, G.cn)([
                                  "pointer-events-none absolute left-0 hidden h-[40px] w-[250px] bg-gradient-to-l from-transparent to-black md:block",
                                  "transition-opacity duration-500",
                                  r ? "opacity-100" : "opacity-0",
                                ]),
                              }),
                              (0, o.jsx)("div", {
                                className: (0, G.cn)([
                                  "absolute left-[46px] top-[2px] py-1 pl-1 pr-4",
                                  "transition-opacity duration-500",
                                  r ? "opacity-100" : "opacity-0",
                                ]),
                                children: (0, o.jsx)(H.C, {
                                  className:
                                    "mr-2 hidden cursor-pointer rounded-full border border-input bg-black p-1 text-foreground hover:text-muted-foreground md:inline-flex",
                                  onMouseDown: (e) => {
                                    e.preventDefault(), f();
                                  },
                                  children: (0, o.jsx)(Q.Z, { size: 16 }),
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, o.jsx)("div", {
                        ref: i,
                        className:
                          "ml-[48px] flex max-h-[40px] w-full items-center gap-y-10 space-x-2 overflow-hidden overflow-x-auto scroll-smooth py-2 pr-5 md:mr-[48px]",
                        style: {
                          scrollbarWidth: "none",
                          width: d ? "calc(100% - 96px)" : "calc(100% - 48px)",
                        },
                        children: b.slice(0, 10).map((e) =>
                          (0, o.jsx)(
                            "button",
                            {
                              className:
                                "flex cursor-pointer items-center whitespace-nowrap rounded-full border border-input bg-black/90 px-4 py-1 text-sm text-muted-foreground focus:outline-none",
                              onMouseDown: (a) => {
                                a.preventDefault(),
                                  s([e.value]),
                                  (0, Z.L9)("Tag Completion Click", {
                                    tag: e.value,
                                  });
                              },
                              children: e.value.includes(a)
                                ? (0, o.jsxs)("span", {
                                    children: [
                                      e.value.slice(0, e.value.indexOf(a)),
                                      " " === e.value[e.value.indexOf(a) - 1]
                                        ? " "
                                        : "",
                                      (0, o.jsx)("span", {
                                        className: "font-bold underline",
                                        children: a,
                                      }),
                                      " " ===
                                      e.value[e.value.indexOf(a) + a.length]
                                        ? " "
                                        : "",
                                      e.value.slice(
                                        e.value.indexOf(a) + a.length
                                      ),
                                    ],
                                  })
                                : e.value,
                            },
                            e.value
                          )
                        ),
                      }),
                      u
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("div", {
                                className: (0, G.cn)([
                                  "pointer-events-none absolute right-0 hidden h-[40px] w-[200px] bg-gradient-to-r from-transparent to-black md:block",
                                  "transition-opacity duration-500",
                                  u ? "opacity-100" : "opacity-0",
                                ]),
                              }),
                              (0, o.jsx)("div", {
                                className: (0, G.cn)([
                                  "absolute right-0 top-[2px] py-1 pl-4 pr-4",
                                  "transition-opacity duration-500",
                                  u ? "opacity-100" : "opacity-0",
                                ]),
                                children: (0, o.jsx)(H.C, {
                                  className:
                                    "ml-3 hidden cursor-pointer rounded-full border border-input bg-black p-1 text-foreground hover:text-muted-foreground md:inline-flex",
                                  onMouseDown: (e) => {
                                    e.preventDefault(), h();
                                  },
                                  children: (0, o.jsx)(B.Z, { size: 16 }),
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null;
        },
        eN = (e) => {
          let {
              partialTag: a,
              showOptions: t,
              tagPredictions: s,
              tagCompletions: n,
              settings: i,
              setSettings: r,
              options: l,
              setOptions: c,
              addSuggestedTags: g,
              lyricsType: d,
              setLyricsType: h,
              resetAll: f,
              refocusPromptBar: b,
              userApiUsageData: m,
            } = e,
            { samplerOptions: p, setSamplerOptionsItem: x } = (0, z.QY)(),
            { showTagCompletions: y } = (0, S.F)(),
            { isLargeDevice: v } = (0, C.Z)(),
            w = (0, u.cC)("show-quota");
          return (0, o.jsxs)("div", {
            className:
              "absolute left-0 -mt-1 w-full rounded-b-lg bg-background transition duration-300 ease-in-out "
                .concat(t ? "opacity-100" : "opacity-0", " ")
                .concat(
                  t ? "block" : "hidden",
                  "  border-x border-b border-[var(--ring)] pb-4"
                ),
            children: [
              (null == n ? void 0 : n.length) && y
                ? (0, o.jsx)("div", {
                    className:
                      "absolute left-0 top-5 z-20 flex w-full items-center",
                    children: (0, o.jsx)(ek, {
                      partialTag: a,
                      tagList: n,
                      addSuggestedTags: (e) => {
                        g(e), b();
                      },
                    }),
                  })
                : null,
              (0, o.jsx)("div", {
                className:
                  "relative right-0 top-3 z-10 flex w-full flex-row justify-end px-4",
                children: (0, o.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    (0, o.jsx)(W, {
                      id: "bypass-settings",
                      checked: p.bypass_prompt_optimization,
                      onCheckedChange: (e) => {
                        x("bypass_prompt_optimization", e),
                          (0, Z.L9)("Select Manual Mode", { value: e });
                      },
                      title: p.bypass_prompt_optimization
                        ? "Infer musical style from prompt"
                        : "Use prompt exactly as given",
                    }),
                    (0, o.jsx)("label", {
                      htmlFor: "bypass-settings",
                      className: "text-sm text-muted-foreground",
                      children: "Manual Mode",
                    }),
                    (0, o.jsx)(eb, {}),
                    (0, o.jsx)("div", {}),
                  ],
                }),
              }),
              (0, o.jsxs)("div", {
                className: "relative w-full items-center px-4",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "truncate-1-line mb-2 max-w-[45%] text-sm text-muted-foreground",
                    children: v
                      ? (0, o.jsx)(o.Fragment, { children: "Suggested tags" })
                      : (0, o.jsx)("span", { children: "\xa0" }),
                  }),
                  (0, o.jsx)("div", {
                    className: "relative mb-3 mt-2 flex w-full items-center",
                    children: (null == s ? void 0 : s.length)
                      ? (0, o.jsx)(o.Fragment, {
                          children: (0, o.jsx)(V, {
                            tagType: "Prediction",
                            tagList: s,
                            addSuggestedTags: g,
                          }),
                        })
                      : null,
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between space-x-2",
                    children: [
                      (0, o.jsx)(ev, {}),
                      ("continuation" === p.audio_conditioning_type ||
                        "precede" === p.audio_conditioning_type) &&
                        (0, o.jsx)("div", {
                          className: "w-full",
                          children: (0, o.jsx)(ec, {}),
                        }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: "mt-4",
                    children: (0, o.jsx)(ef, {
                      settings: i,
                      setSettings: r,
                      lyricsType: d,
                      setLyricsType: h,
                    }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "px-4",
                children: (0, o.jsx)(Y.Z, { className: "mb-3 mt-4 " }),
              }),
              (0, o.jsxs)("div", {
                className: "flex w-full justify-between px-4",
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      (0, o.jsx)("div", {}),
                      w && m && (0, o.jsx)(ep, { userApiUsageData: m }),
                    ],
                  }),
                  (0, o.jsxs)(q.z, {
                    variant: "default",
                    onClick: f,
                    className:
                      "flex w-[105px] flex-row items-center space-x-2 bg-[#FFFFFF]/5 px-0 hover:bg-[#FFFFFF]/10",
                    children: [
                      (0, o.jsx)(O.Z, { size: 16, color: "white" }),
                      (0, o.jsx)("div", {
                        className: " text-sm text-white",
                        children: "Reset All",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        e_ = t(23441),
        eC = t(88584),
        ez = (e) => {
          let {
              tagPredictions: a,
              settings: t,
              setSettings: s,
              addSuggestedTags: n,
              lyricsType: i,
              setLyricsType: r,
              userApiUsageData: l,
            } = e,
            { samplerOptions: u, setSamplerOptionsItem: c } = (0, z.QY)();
          return (
            u.crop_start_time && (u.crop_start_time < 0.1 || u.crop_start_time),
            (0, o.jsx)("div", {
              className: "relative left-0 w-full bg-gray-light",
              children: (0, o.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, o.jsxs)("div", {
                    className: (0, G.cn)("relative w-full", "mb-4"),
                    children: [
                      (0, o.jsx)("div", {
                        className: "relative flex flex-col items-end",
                        children: (0, o.jsxs)("div", {
                          className: "flex w-full items-center justify-between",
                          children: [
                            l && "new" !== l.tier
                              ? (0, o.jsxs)("span", {
                                  className: " flex text-xs",
                                  children: [
                                    l.monthly_used,
                                    " /",
                                    " ",
                                    l.monthly_limit,
                                    " Monthly Generations",
                                  ],
                                })
                              : (0, o.jsx)("div", {}),
                            (0, o.jsxs)("span", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, o.jsx)(W, {
                                  id: "bypass-settings",
                                  checked: u.bypass_prompt_optimization,
                                  onCheckedChange: (e) => {
                                    c("bypass_prompt_optimization", e),
                                      (0, Z.L9)("Select Manual Mode", {
                                        value: e,
                                      });
                                  },
                                }),
                                (0, o.jsx)("label", {
                                  htmlFor: "bypass-settings",
                                  className: "text-sm ",
                                  children: "Manual Mode",
                                }),
                                (0, o.jsx)(eb, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (null == a ? void 0 : a.length)
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("h1", {
                                className:
                                  "truncate-1-line mb-3 max-w-full text-sm text-muted-foreground",
                                children: "Suggested tags",
                              }),
                              (0, o.jsx)("div", {
                                className: "mb-3 flex items-center",
                                children: (0, o.jsx)(V, {
                                  tagType: "Prediction",
                                  tagList: a,
                                  addSuggestedTags: n,
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, o.jsx)(ev, {}),
                  ("continuation" === u.audio_conditioning_type ||
                    "precede" === u.audio_conditioning_type) &&
                    (0, o.jsx)("div", {
                      className: "my-5 w-full",
                      children: (0, o.jsx)(ec, {}),
                    }),
                  (0, o.jsx)(ef, {
                    settings: t,
                    setSettings: s,
                    lyricsType: i,
                    setLyricsType: r,
                  }),
                ],
              }),
            })
          );
        },
        eF = (e) => {
          let {
              partialTag: a,
              promptSuggestion: t,
              settings: s,
              setSettings: n,
              inputCursorLocation: i,
              setInputCursorLocation: r,
              handleGenerate: l,
              generatePromptSuggestions: u,
              imageWidth: c,
              createText: g,
              createDisabled: d,
              addSuggestedTags: h,
              tagPredictions: m,
              tagCompletions: x,
              lyricsType: y,
              setLyricsType: v,
              resetAll: w,
            } = e,
            { openAuthModal: j } = (0, F.fI)(),
            N = (0, k.Z)(),
            C = (0, p.useRef)(null),
            z = (0, p.useRef)(null),
            {
              mobileDrawerOpen: T,
              setMobileDrawerOpen: L,
              lyricsFocus: P,
              showTagCompletions: D,
            } = (0, S.F)(),
            { data: M } = _(T),
            I = async () => {
              await l(!0), L(!1);
            },
            E = (0, p.useCallback)(() => {
              L(!1);
            }, [L]);
          (0, p.useEffect)(() => {
            P &&
              setTimeout(() => {
                if (z.current) {
                  let e =
                    z.current.scrollHeight / 2 - z.current.clientHeight / 2;
                  z.current.scrollTo(0, e);
                }
              }, 200);
          }, [P]);
          let A = () => {
            let e = C.current;
            e &&
              setTimeout(() => {
                e.focus();
              }, 200);
          };
          return (0, o.jsxs)("div", {
            className: "md:hidden",
            children: [
              (0, o.jsx)("div", {
                onClick: () => {
                  if (!N) {
                    j();
                    return;
                  }
                  L(!0);
                },
                className: "flex items-center justify-center",
                children: (0, o.jsx)("div", {
                  className: (0, G.cn)(
                    "absolute bottom-1 cursor-pointer rounded-full bg-brand-accent p-3",
                    N ? "" : "opacity-70"
                  ),
                  children: (0, o.jsx)("div", {
                    className: "cursor-pointer",
                    onClick: () => (0, Z.L9)("Click Mobile Create Button", {}),
                    children: (0, o.jsx)(eo.default, {
                      src: "/icons/create-icon.svg",
                      width: 32,
                      height: 32,
                      alt: "Create",
                    }),
                  }),
                }),
              }),
              (0, o.jsx)(eC.Z, {
                detent: "full-height",
                isOpen: T,
                onClose: E,
                children: (0, o.jsxs)(eC.Z.Container, {
                  children: [
                    (0, o.jsx)(eC.Z.Header, { className: "bg-create" }),
                    (0, o.jsxs)(eC.Z.Content, {
                      disableDrag: !0,
                      className: "bg-create",
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "flex w-full flex-row items-center justify-between bg-create p-4",
                          children: [
                            (0, o.jsxs)("div", {
                              className: "flex items-center space-x-4",
                              children: [
                                (0, o.jsx)(e_.Z, {
                                  size: 24,
                                  onClick: () => L(!1),
                                  className: "z-10 cursor-pointer",
                                }),
                                (0, o.jsx)("div", { children: "Create" }),
                                (0, o.jsx)(f.Z, {
                                  fill: "#808080",
                                  color: "#808080",
                                  size: 24,
                                  className: "",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              className: "flex flex-row items-center space-x-5",
                              children: [
                                (0, o.jsx)("button", {
                                  className:
                                    "ml-4 transition duration-300 ease-in-out hover:rotate-45 hover:scale-105",
                                  onClick: (e) => {
                                    e.preventDefault();
                                    let { prompt: a, tags: t } = u();
                                    (a = a + ", " + t.join(", ")),
                                      n({ ...s, prompt: a }),
                                      (0, Z.L9)("Randomize Prompt", {});
                                  },
                                  children: (0, o.jsx)(b.Z, {
                                    className: "h-6 w-6",
                                  }),
                                }),
                                (0, o.jsx)(q.z, {
                                  variant: "ghost",
                                  onClick: w,
                                  className:
                                    "flexflex-row items-center space-x-2 px-0",
                                  children: (0, o.jsx)(O.Z, { size: 24 }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "relative w-full",
                          children: [
                            (0, o.jsx)(ed.g, {
                              enterKeyHint: "send",
                              ref: C,
                              placeholder:
                                (null == t ? void 0 : t.prompt) || eT,
                              className:
                                "m-auto mb-1 h-full w-11/12 bg-gray-light px-2 py-2 text-[16px] md:text-[14px]",
                              value: s.prompt,
                              onDrag: (e) => e.stopPropagation(),
                              onSelect: (e) => {
                                r(e.target.selectionStart);
                              },
                              onChange: (e) => {
                                n({ ...s, prompt: e.target.value }),
                                  r(e.target.selectionStart);
                              },
                              onKeyDown: (e) => {
                                "Enter" === e.key && I(),
                                  "Tab" === e.key &&
                                    "" === s.prompt &&
                                    (e.preventDefault(),
                                    n({
                                      ...s,
                                      prompt:
                                        (null == t ? void 0 : t.prompt) || eT,
                                    }));
                              },
                            }),
                            (null == x ? void 0 : x.length) && D
                              ? (0, o.jsx)("div", {
                                  className:
                                    "absolute -bottom-1 left-0 flex w-full flex-col items-end",
                                  children: (0, o.jsx)(ek, {
                                    containerStyle: "bg-create opacity-75",
                                    partialTag: a,
                                    tagList: x,
                                    addSuggestedTags: (e) => {
                                      h(e), A();
                                    },
                                  }),
                                })
                              : null,
                          ],
                        }),
                        (0, o.jsx)(Y.Z, { className: "mb-5 mt-2 px-4" }),
                        (0, o.jsx)(eC.Z.Scroller, {
                          ref: z,
                          children: (0, o.jsx)("div", {
                            className: "flex justify-between",
                            children: (0, o.jsxs)("div", {
                              className: "relative w-full py-4",
                              children: [
                                (0, o.jsx)("div", {
                                  className: "px-4",
                                  children: (0, o.jsx)(ez, {
                                    partialTag: a,
                                    tagPredictions: m,
                                    settings: s,
                                    setSettings: n,
                                    addSuggestedTags: h,
                                    lyricsType: y,
                                    setLyricsType: v,
                                    userApiUsageData: M,
                                  }),
                                }),
                                (0, o.jsx)("div", {
                                  className: (0, G.cn)(
                                    "bottom-[10px] left-0 w-full px-4",
                                    "fixed"
                                  ),
                                  children: (0, o.jsx)("div", {
                                    className:
                                      "flex flex-row justify-between space-x-4",
                                    children: (0, o.jsx)(q.z, {
                                      className:
                                        "w-full rounded-[4px] bg-brand-accent py-4 text-white disabled:opacity-75",
                                      variant: "create",
                                      size: "custom",
                                      disabled: d || !N,
                                      onClick: I,
                                      children: g,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      let eS = 16,
        eT = "a song about...",
        eZ = (e) => {
          var a;
          let { drawer: t } = e,
            s = (0, k.Z)(),
            [n, i] = (0, p.useState)(!1),
            [r, m] = (0, p.useState)("infer"),
            [v, w] = (0, p.useState)(!1),
            [N, P] = (0, p.useState)(void 0),
            [D, M] = (0, p.useState)(Date.now()),
            { data: I, refetch: E } = _((0, u.cC)("show-quota")),
            {
              mobileDrawerOpen: O,
              showOptions: Y,
              setShowOptions: U,
              setShowTagCompletions: G,
            } = (0, S.F)(),
            W = (0, p.useRef)(!1),
            Q = (0, p.useRef)(null),
            B = (0, p.useRef)(null),
            {
              resetPromptBar: H,
              generateTrack: K,
              samplerOptions: V,
              generationSettings: X,
              setGenerationSettings: J,
              setSamplerOptions: $,
            } = (0, z.QY)(),
            ee = (0, h.NL)(),
            [ea, et] = (0, p.useState)(X),
            [eo, es] = (0, p.useState)(V),
            { openAuthModal: en } = (0, F.fI)(),
            { openWaitlistModal: ei } = (0, F.wc)(),
            [er] = (0, g.c)(ea, 200),
            [el] = (0, g.c)(eo, 200),
            [eu, ec] = (0, p.useState)(null),
            [eg] = (0, g.c)(eu, 200),
            { isMediumDevice: ed, isLargeDevice: eh } = (0, C.Z)(),
            ef = (0, u.cC)("disable-generations"),
            eb = (0, u.aS)("waitlist-iso-time-stamp-utc", ""),
            em = (0, p.useMemo)(() => {
              let e = new Date(eb);
              return (
                (null == s ? void 0 : s.created_at) &&
                "Invalid Date" !== e.toString() &&
                new Date(s.created_at) > e
              );
            }, [null == s ? void 0 : s.created_at, eb]),
            ep = () => (s ? !em || (ei(), !1) : (en(), !1)),
            ex = "2.75rem",
            ey = (0, p.useMemo)(() => {
              let e;
              switch (eo.audio_conditioning_type) {
                case "continuation":
                case "precede":
                  e = "Extend";
                  break;
                case "variation":
                  e = "Remix";
                  break;
                default:
                  e = "Create";
              }
              return e;
            }, [eo.audio_conditioning_type]),
            ev = () => {
              let e = Q.current;
              e &&
                setTimeout(() => {
                  e.focus();
                }, 100);
            },
            ew = async (e) => {
              i(!0), U(!1);
              try {
                var a;
                let t = ea.prompt;
                if (!t || "" === t.trim()) {
                  x.toast.error("Please enter a prompt or select tags", T.TQ);
                  return;
                }
                let s = { prompt: t };
                if (
                  ("instrumental" === r && (s.lyricInput = ""),
                  "lyricPrompt" === r &&
                    ea.lyricPrompt &&
                    (s.lyricPrompt = ea.lyricPrompt),
                  "lyricInput" === r && (s.lyricInput = ea.lyricInput),
                  (s.samplerOptions = V),
                  v)
                ) {
                  x.toast.message(
                    (0, o.jsxs)("div", {
                      children: [
                        Object.entries(s).map((e) => {
                          let a,
                            [t, s] = e;
                          return (
                            (a =
                              "string" == typeof s
                                ? s
                                : Array.isArray(s)
                                  ? s.join(", ")
                                  : "object" == typeof s && null !== s
                                    ? JSON.stringify(s)
                                    : String(s)),
                            (0, o.jsxs)("p", { children: [t, ": ", a] }, t)
                          );
                        }),
                        (0, o.jsxs)("p", { children: ["Lyrics Type: ", r] }),
                      ],
                    })
                  );
                  return;
                }
                let n = "success",
                  i = "Amazing music is seconds away!",
                  l = !1,
                  { data: u } = await E();
                if (ef) {
                  x.toast.custom(
                    (e) =>
                      (0, o.jsx)(A, {
                        toastId: e,
                        userApiUsage: u,
                        toastType: "error",
                        toastMessage:
                          "Generation is currently under maintenance. Please try again later.",
                      }),
                    {
                      position: "top-left",
                      duration: 2500,
                      style: e
                        ? {
                            top: "44px",
                            left: "-8px",
                            width: "calc((100vw - 1rem))",
                          }
                        : {
                            top: "44px",
                            left: ed ? "268px" : "-8px",
                            width: eh
                              ? "calc(0.75 * (100vw - 20.85rem))"
                              : ed
                                ? "calc(0.6 * (100vw - 19.9rem))"
                                : "calc((100vw - 1rem))",
                          },
                    }
                  );
                  return;
                }
                if (
                  (u &&
                    Number(u.concurrent_used || 0) >=
                      Number(u.concurrent_limit || 0) &&
                    ((i = "You can only make ".concat(
                      u.concurrent_limit,
                      " generations simultaneously. Please wait a few seconds and try again."
                    )),
                    (n = "error"),
                    (l = !0)),
                  u &&
                    0 >= Number(u.discretionary || 0) &&
                    Number(u.monthly_used || 0) >=
                      Number(u.monthly_limit || 0) &&
                    ((i =
                      "You have reached your monthly generation limit of ".concat(
                        u.monthly_limit,
                        "."
                      )),
                    (n = "error"),
                    (l = !0)),
                  (Number((null == u ? void 0 : u.daily_used) || 0) >=
                    Number(
                      (null == u ? void 0 : u.daily_throttle_limit) || 0
                    ) ||
                    (null == u ? void 0 : u.daily_throttled)) &&
                    ((i =
                      "You have reached your daily priority generation limit of ".concat(
                        null == u ? void 0 : u.daily_throttle_limit,
                        ". You can still generate tracks, but they may take longer to complete."
                      )),
                    (n = "warning")),
                  x.toast.custom(
                    (e) =>
                      (0, o.jsx)(A, {
                        toastId: e,
                        userApiUsage: u,
                        toastType: n,
                        toastMessage: i,
                      }),
                    {
                      position: "top-left",
                      duration: 2500,
                      style: e
                        ? {
                            top: "44px",
                            left: "-8px",
                            width: "calc((100vw - 1rem))",
                          }
                        : {
                            top: "44px",
                            left: ed ? "268px" : "-8px",
                            width: eh
                              ? "calc(0.75 * (100vw - 20.85rem))"
                              : ed
                                ? "calc(0.6 * (100vw - 19.9rem))"
                                : "calc((100vw - 1rem))",
                          },
                    }
                  ),
                  l)
                )
                  return;
                let { response: c } =
                  (await (null == B
                    ? void 0
                    : null === (a = B.current) || void 0 === a
                      ? void 0
                      : a.execute({ async: !0 }))) || {};
                (s.captchaToken = c),
                  M(Date.now()),
                  await K(s),
                  await ee.invalidateQueries({
                    queryKey: y.YN.currentUserApiUsage(),
                  });
              } catch (e) {
                x.toast.dismiss(),
                  x.toast.error(
                    "An error occurred while generating the track",
                    T.TQ
                  ),
                  console.error(e),
                  d.Tb(e);
              } finally {
                i(!1);
              }
            },
            ej = (0, p.useMemo)(
              () =>
                (function (e, a) {
                  let t = a || e.length,
                    o = [],
                    s = null,
                    n = 0,
                    i = 0,
                    r = "",
                    l = 0,
                    u = (e, a) => {
                      let r = e.length;
                      !",;.".includes(e) &&
                        (o.push(e.trim().toLowerCase()),
                        a <= t &&
                          a + r >= t &&
                          ((s = e.trim().toLowerCase()), (n = a), (i = r)));
                    };
                  for (let a = 0; a <= e.length; a++) {
                    let t = e[a] || "";
                    ",;.".includes(t) || a === e.length
                      ? ("" !== r && (u(r, l - r.length), (r = "")),
                        t && u(t, l))
                      : (r += t),
                      l++;
                  }
                  return {
                    parts: o,
                    cursorPart: s,
                    cursorPartPos: n,
                    cursorPartLen: i,
                  };
                })(ea.prompt, eu),
              [er.prompt, eg]
            ),
            ek = (e) => {
              let a = ea.prompt,
                t = ej.cursorPart || "",
                o = e.join(", ") + ", ";
              if ("" !== t && e.some((e) => e.includes(t)))
                ej.cursorPartPos + ej.cursorPartLen < a.length &&
                  (o = o.slice(0, -2)),
                  ej.cursorPartPos > 0 && (o = " " + o),
                  (a =
                    a.substring(0, ej.cursorPartPos) +
                    o +
                    a.substring(ej.cursorPartPos + ej.cursorPartLen));
              else {
                a.trim().endsWith(",") || "" == a.trim() || (a += ", ");
                let t = e.filter((e) => !ej.parts.includes(e));
                t.length > 0 && (a += t.join(", ") + ", ");
              }
              et({ ...ea, prompt: a });
            },
            { data: e_ } = j({
              partialTag: ej.cursorPart || "",
              currentTags: ej.parts.filter((e) => e !== ej.cursorPart),
            }),
            eC = async () => {
              ep() && (await ew());
            },
            ez = (0, p.useCallback)(() => {
              H(), m("infer");
            }, [H]);
          (0, p.useEffect)(() => {
            W.current || (P(l()), (W.current = !0));
          }, []),
            (0, p.useEffect)(() => {
              J(er);
            }, [er]),
            (0, p.useEffect)(() => {
              et(X);
            }, [X]),
            (0, p.useEffect)(() => {
              $(el);
            }, [el]),
            (0, p.useEffect)(() => {
              es(V);
            }, [V]),
            (0, p.useEffect)(() => {
              "variation" === V.audio_conditioning_type && m("lyricInput");
            }, [V.audio_conditioning_type]),
            (0, p.useEffect)(() => {
              Y && ev();
            }, [Y]),
            (0, p.useEffect)(() => {
              var e;
              (null == e_
                ? void 0
                : null === (e = e_.completions) || void 0 === e
                  ? void 0
                  : e.length) && G(!0);
            }, [null == e_ ? void 0 : e_.completions]);
          let eS = (0, p.useMemo)(() => {
            var e, a, t;
            return (
              (!(null === (e = ea.prompt) || void 0 === e
                ? void 0
                : e.length) &&
                (Y || O)) ||
              n ||
              ("lyricInput" === r &&
                !(null === (t = ea.lyricInput) || void 0 === t
                  ? void 0
                  : null === (a = t.trim()) || void 0 === a
                    ? void 0
                    : a.length))
            );
          }, [
            null === (a = ea.prompt) || void 0 === a ? void 0 : a.length,
            ea.lyricInput,
            Y,
            O,
            n,
            r,
          ]);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("form", {
                children: (0, o.jsx)(c.Z, {
                  sitekey: "2945592b-1928-43a9-8473-7e7fed3d752e",
                  ref: B,
                  size: "invisible",
                  theme: "dark",
                  sentry: !1,
                  onError: (e) => {
                    console.error("HCaptcha error", e);
                  },
                  onExpire: () => {
                    console.error("HCaptcha expired");
                  },
                }),
              }),
              t
                ? (0, o.jsx)(eF, {
                    partialTag: ej.cursorPart || "",
                    createText: ey,
                    createDisabled: eS,
                    imageWidth: ex,
                    promptSuggestion: N,
                    addSuggestedTags: ek,
                    tagCompletions: null == e_ ? void 0 : e_.completions,
                    tagPredictions: null == e_ ? void 0 : e_.predictions,
                    settings: ea,
                    setSettings: et,
                    handleGenerate: ew,
                    inputCursorLocation: eu,
                    setInputCursorLocation: ec,
                    generatePromptSuggestions: l,
                    lyricsType: r,
                    setLyricsType: m,
                    resetAll: ez,
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(L, {}),
                      (0, o.jsx)("div", {
                        className: "mr-6 w-full items-center justify-between",
                        children: (0, o.jsxs)("div", {
                          className: "relative h-14 w-full",
                          tabIndex: -1,
                          children: [
                            (0, o.jsx)(f.Z, {
                              fill: "#808080",
                              color: "#808080",
                              size: 24,
                              className:
                                "absolute left-3 top-1/2 hidden -translate-y-1/2 transform md:block",
                            }),
                            (0, o.jsx)(R.I, {
                              id: "prompt",
                              autoComplete: "off",
                              ref: Q,
                              type: "prompt",
                              placeholder:
                                (null == N ? void 0 : N.prompt) || eT,
                              className:
                                "h-full border-b border-l border-r border-t border-[#3b82f67f] py-6 pr-[130px] text-[16px] shadow-ring-2 disabled:opacity-50\n          ".concat(
                                  Y &&
                                    "rounded-t-md rounded-bl-none rounded-br-none border-[var(--ring)] border-b-transparent ",
                                  "\n          ",
                                  "\n          ring-0 ring-transparent ring-offset-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                                ),
                              style: { paddingLeft: ex },
                              value: ea.prompt,
                              onFocus: () => {
                                ep() && (x.toast.dismiss(), U(!0));
                              },
                              onSelect: (e) => {
                                ec(e.target.selectionStart);
                              },
                              onChange: (e) => {
                                et({ ...ea, prompt: e.target.value }),
                                  ec(e.target.selectionStart);
                              },
                              onKeyDown: (e) => {
                                if (
                                  ("Enter" === e.key && eC(), "Tab" === e.key)
                                ) {
                                  var a;
                                  if (
                                    null == e_
                                      ? void 0
                                      : null === (a = e_.completions) ||
                                          void 0 === a
                                        ? void 0
                                        : a.length
                                  ) {
                                    e.preventDefault(),
                                      ek([e_.completions[0].value]),
                                      G(!1);
                                    return;
                                  }
                                  "" === ea.prompt &&
                                    (e.preventDefault(),
                                    et({
                                      ...ea,
                                      prompt:
                                        (null == N ? void 0 : N.prompt) || eT,
                                    }));
                                }
                              },
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center",
                              children: [
                                (0, o.jsx)("button", {
                                  className:
                                    "ml-4 transition duration-300  ease-in-out hover:rotate-45 hover:scale-105",
                                  onClick: (e) => {
                                    e.preventDefault();
                                    let { prompt: a, tags: t } = l();
                                    (a = a + ", " + t.join(", ")),
                                      et({ ...ea, prompt: a }),
                                      (0, Z.L9)("Randomize Prompt", {});
                                  },
                                  children: (0, o.jsx)(b.Z, {
                                    className: "mr-3 h-5 w-5",
                                  }),
                                }),
                                (0, o.jsx)(q.z, {
                                  className: "w-[75px]",
                                  variant: "create",
                                  disabled: eS || !s,
                                  onClick: eC,
                                  children: ey,
                                }),
                              ],
                            }),
                            (0, o.jsx)(eN, {
                              refocusPromptBar: ev,
                              partialTag: ej.cursorPart || "",
                              resetAll: ez,
                              showOptions: Y,
                              tagPredictions:
                                null == e_ ? void 0 : e_.predictions,
                              tagCompletions:
                                null == e_ ? void 0 : e_.completions,
                              settings: ea,
                              setSettings: et,
                              options: eo,
                              setOptions: es,
                              addSuggestedTags: ek,
                              lyricsType: r,
                              setLyricsType: m,
                              userApiUsageData: I,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          });
        };
      var eL = (0, m.default)(() => Promise.resolve(eZ), { ssr: !1 });
    },
    14270: function (e, a, t) {
      var o = t(57437),
        s = t(47281),
        n = t(41943),
        i = t(86210),
        r = t(43081),
        l = t(2265),
        u = t(5201),
        c = t(41100),
        g = t(1657),
        d = t(85754);
      a.Z = (e) => {
        let { track: a, useTrim: t = !1, height: h = 100, setPoints: f } = e,
          b = (0, l.useRef)(null),
          [m, p] = (0, l.useState)(2),
          [x, y] = (0, l.useState)(31),
          [v] = (0, s.c)(m, 300),
          [w] = (0, s.c)(x, 300),
          { isMediumDevice: j } = (0, c.Z)(),
          {
            wavesurfer: k,
            isReady: N,
            isPlaying: _,
            currentTime: C,
          } = (0, n.o)({
            container: b,
            url: null == a ? void 0 : a.song_path,
            waveColor: "#333",
            progressColor: "#e30b5d",
            height: h,
            barWidth: 3,
            barGap: 1,
            barRadius: 2,
          });
        (0, l.useEffect)(() => {
          if (k && t) {
            let e = k.registerPlugin(u.Z.create());
            k.on("decode", () => {
              e.addRegion({
                start: 2,
                end: 31,
                content: "",
                color: "hsla(337, 91%, 47%, 0.4)",
                resize: !0,
              });
            }),
              e.on("region-in", (e) => {}),
              e.on("region-out", (e) => {
                k.pause();
              }),
              e.on("region-updated", (a) => {
                let t = a.start;
                a.start < 0.1 && (t = 0),
                  a.end - t < 0.5 &&
                    ((a.end = t + 0.5),
                    e.clearRegions(),
                    e.addRegion({
                      start: t,
                      end: a.end,
                      content: "",
                      color: "hsla(337, 91%, 47%, 0.4)",
                      resize: !0,
                    })),
                  p(t),
                  y(a.end);
              });
          }
        }, [k]),
          (0, l.useEffect)(() => {
            f && f(v, w);
          }, [v, w]);
        let z = Math.min(h / 4, 40);
        return (0, o.jsx)(o.Fragment, {
          children: a
            ? (0, o.jsxs)("div", {
                className: "w-full",
                onBlur: () => (null == k ? void 0 : k.pause()),
                style: { touchAction: "none" },
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex w-full items-center ",
                    children: [
                      (0, o.jsx)("div", {
                        className: "mr-3",
                        children: (null == k ? void 0 : k.isPlaying())
                          ? (0, o.jsx)(d.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == k ? void 0 : k.pause()),
                              size: "custom",
                              children: (0, o.jsx)(i.Z, {
                                size: z,
                                fill: "black",
                              }),
                            })
                          : (0, o.jsx)(d.z, {
                              className: "rounded-full p-2",
                              onClick: () => (null == k ? void 0 : k.play()),
                              size: "custom",
                              children: (0, o.jsx)(r.Z, {
                                size: z,
                                className: "translate-x-[2px]",
                                fill: "black",
                              }),
                            }),
                      }),
                      (0, o.jsx)("div", {
                        className: "w-full",
                        children: (0, o.jsx)("div", {
                          ref: b,
                          className: "h-full w-full",
                          onClick: () => {
                            k && k.play();
                          },
                        }),
                      }),
                    ],
                  }),
                  t &&
                    (0, o.jsxs)("div", {
                      className:
                        " ml-[50px] mt-1 flex justify-between font-mono text-xs md:text-base",
                      children: [
                        (0, o.jsxs)("div", {
                          className: " font-mono ",
                          children: [
                            (0, o.jsx)("span", {
                              className: "font-bold",
                              children: "Start: ",
                            }),
                            (0, g.mr)(m, j),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, o.jsx)("span", {
                              className: "font-bold",
                              children: "Current: ",
                            }),
                            (0, g.mr)(C, j),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "font-mono",
                          children: [
                            (0, o.jsx)("span", {
                              className: "font-bold",
                              children: "End: ",
                            }),
                            (0, g.mr)(x, j),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, o.jsx)("div", {
                className: "h-16 w-9/12 bg-gray-300",
                children: "Track not found",
              }),
        });
      };
    },
    29691: function (e, a, t) {
      t.d(a, {
        Fw: function () {
          return i;
        },
        wy: function () {
          return n;
        },
        zF: function () {
          return s;
        },
      });
      var o = t(78019);
      let s = o.fC,
        n = o.wy,
        i = o.Fw;
    },
    45179: function (e, a, t) {
      t.d(a, {
        I: function () {
          return i;
        },
      });
      var o = t(57437),
        s = t(2265),
        n = t(1657);
      let i = s.forwardRef((e, a) => {
        let { className: t, type: s, ...i } = e;
        return (0, o.jsx)("input", {
          type: s,
          className: (0, n.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ref: a,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    47934: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return r;
        },
      });
      var o = t(57437),
        s = t(51014),
        n = t(2265),
        i = t(1657);
      let r = n.forwardRef((e, a) => {
        let {
          className: t,
          orientation: n = "horizontal",
          decorative: r = !0,
          ...l
        } = e;
        return (0, o.jsx)(s.f, {
          ref: a,
          decorative: r,
          orientation: n,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]",
            t
          ),
          ...l,
        });
      });
      r.displayName = s.f.displayName;
    },
    23444: function (e, a, t) {
      t.d(a, {
        g: function () {
          return i;
        },
      });
      var o = t(57437),
        s = t(2265),
        n = t(1657);
      let i = s.forwardRef((e, a) => {
        let { className: t, ...s } = e;
        return (0, o.jsx)("textarea", {
          className: (0, n.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ref: a,
          ...s,
        });
      });
      i.displayName = "Textarea";
    },
  },
]);
