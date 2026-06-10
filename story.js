/* ════════════════════════════════════════════════════════════
   PEEK AND PATCH — Story data for System 37
   By: Miguel Rivas

   Each node is one "page" (a screen in the simulation).
   Block types the renderer understands:
     boot   — system welcome / narration from the simulation itself
     sys    — a terminal line, e.g. (loading data…)
     p      — narration paragraph
     say    — spoken dialogue  { who, x }
     lore   — (!) CODEX data-packet card
     note   — (?) sticky-note footnote card
     rule   — the recurring "There are no contradictions…" refrain
     beat   — a stark single-line beat (e.g. "Nothing.")
   A node ends with either:
     choices: [ {x, to} ]   — branching buttons
     next:    { x, to }     — a single forward link ("Go to Page N")
     end:     true          — an ending (no further pages)
   ════════════════════════════════════════════════════════════ */

window.STORY = {
  meta: {
    title: "PEEK AND PATCH",
    author: "Miguel Rivas",
    system: "SYSTEM 37 // THE DESKTOP",
    start: "p1"
  },

  nodes: {

    /* ─────────────── PAGE 1 — SUMMER SKY ─────────────── */
    p1: {
      theme: "summer-sky",
      region: "METROCHORD",
      label: "PAGE 01",
      title: "Let's take a peek at Peek",
      blocks: [
        { t: "boot", x: "Welcome to a beta version of System 37, a digital world with emergent properties and made with love. You're granted insight to the many happenings around the world of System 37 on a specific location the locals call The Desktop. There are three primary regions of The Desktop: Metrochord, Starbloom, and High Vista. This simulation will be focusing on an NPC named [Peek] in [Metrochord]." },
        { t: "sys", x: "loading data…" },
        { t: "p", x: "Peek is a Cubic. He has a cube-ish body with stubby arms and legs, and wears a checkered flannel that goes all the way down to the ground. His hat sits so low on his head that it covers most of his face, and he has to tilt it back every few minutes just to see. Most of his clothes are a size or four too big. He trips over the hem of his shirt more than he'd like to admit." },
        { t: "p", x: "He's in Metrochord's city park, above the keyboard catacombs, at sunset. Many of the younger NPCs have gone inside by now to partake in the temporary stasis program: sleep.exe. Peek is underneath a tree with 2^8 leaves, loading up a sling-sphere and eyeing a specific nub near the middle of the trunk. It's a small bump where the bark geometry doesn't quite resolve, likely a bump map error that never got patched. Peek has been trying to hit it for the last forty-seven frames. He lets the sling go. The sphere curves wide and disappears into the underbrush." },
        { t: "p", x: "He trips over his shirt retrieving it, he stays on the ground but rolls around to face up at the tree. After some projected sounds of rustling above him, Peek sees a strange creature in the branches." },
        { t: "lore", x: "This creature is known as a Phong. It is known for interpolation between different objects. Its appearance is similar to a lizard with post-it notes as fur." },
        { t: "p", x: "The skybox's gradient of purples and oranges, mixed with the light rays tracing along the creature's edges, gives it a rather special appearance to Peek. He sets down his sling-sphere and looks at it a little longer than he means to." },
        { t: "p", x: "Peek's father had taught him that creatures change their behavior the darker it gets. The Phong may be gentle and kind presently, but the clouds are fraying at their edges now. The LOD is dropping, and the shadows are growing harder by the frame every second. Young Peek has two conflicts residing within him." }
      ],
      prompt: "Which will you select?",
      choices: [
        { x: "\"I want to see that fuzzy thing more!\"", to: "p2" },
        { x: "\"I should run away!\"", to: "p3" }
      ]
    },

    /* ─────────────── PAGE 2 — SOUR APPLE ─────────────── */
    p2: {
      theme: "sour-apple",
      region: "METROCHORD",
      label: "PAGE 02",
      title: "Mostly greens and blues",
      blocks: [
        { t: "p", x: "Peek gets up to look closer at the Phong to see that as it claws around the tree, it leaves behind post-it notes. Nothing is written on them. He watches it for a moment, head tilted under his oversized hat." },
        { t: "say", who: "Peek", x: "Greens and blues. Mostly greens and blues. Tail wagging. No raised spines." },
        { t: "p", x: "He's doing what his father taught him and narrating out loud to keep the assessment clean. \"Friendly guy.\" As Peek gets closer, so does the Phong. It weaves over and under his stubby legs, nuzzles him warmly, and leaves a sticky note or two on his flannel. Peek looks down at it. It looks up at him." },
        { t: "say", who: "Peek", x: "Patch. Your name is Patch." },
        { t: "p", x: "Patch gives a confused spin and climbs on top of Peek's flat head, right over the hat. Peek stands very still, like sudden movement might undo something." },
        { t: "note", x: "Creatures and NPCs in System 37 are fundamentally different AI subroutines. Both run on some form of neural network, but the architecture and model size differ significantly." },
        { t: "p", x: "Peek takes a seat under the tree with Patch still on his head, and for a while he forgets what it means for the sun to set. Then Patch's sticky notes begin to shift." },
        { t: "p", x: "Occupations are important in System 37. Peek's father is a hunter. In Metrochord, this is a complicated thing to be. Hunters extract resources from creatures and trade them for bits, and they manage creature populations across the Desktop. In a city where most NPCs never leave the render distance of a market or a Thread Boiler tap, the work can seem brutal to those who don't understand it. In Starbloom it is simply a job. In Metrochord it is something people have opinions about. Those in High Vista pretend to not see it." },
        { t: "p", x: "Greens and blues, going to purples. Purples going to black. The sun's descent synchronized with the changing colors, and Peek felt the rule his father had given him load into the front of his mind whether he wanted it to or not. Purple and black means the creature is in its nocturnal state. Purple and black means it's hungry. Peek remembered a specific funny line his dad would say, “Purple and black, get it on its back! And don't forget to take out the jelly.” Where jelly didn't really have much significance." },
        { t: "p", x: "What his father had never said, not once, was what you were supposed to do when the creature had already put a sticky note on your shirt. One that was already smiling at you." },
        { t: "p", x: "Patch's fur is fully black and purple now. Whatever transformation has occurred is complete. Its stomach rumbles. It is hungry. Young Peek has two conflicts residing within him." }
      ],
      prompt: "Which will you select?",
      choices: [
        { x: "\"Maybe it won't eat me if I feed it something else?\"", to: "p4" },
        { x: "\"I should listen to Dad.\"", to: "p5" }
      ]
    },

    /* ─────────────── PAGE 3 — BLUEBERRY ─────────────── */
    p3: {
      theme: "blueberry",
      region: "METROCHORD → STARBLOOM",
      label: "PAGE 03",
      title: "It thinks this is a game?",
      blocks: [
        { t: "p", x: "Peek turns away from the creature. His shirt catches under his foot and he goes down hard, one stubby arm out to catch himself, hat tumbling forward over his face. He scrambles up without fixing either and runs. Behind him he hears crashes and snaps as Patch descends the tree. Not carefully. Just down, all at once, branches breaking on the way." },
        { t: "p", x: "It begins to chase him with a wobbly run and a wonky smile. The Phong falls to its face once, twice, and keeps coming. Its speed more than compensates for its coordination. Its legs are short and barely extruded but they move faster than they have any right to. Peek pumps his own stubby legs as hard as they'll go and it isn't enough." },
        { t: "p", x: "He tries the trees. He cuts left, cuts right, loses himself in the dark between trunks. The Phong mirrors every cut a half-second behind him, sticky notes flapping. When Peek fakes right and breaks left, the Phong flops onto its belly, slides, recovers, and comes up grinning. Peek can hear a fast staccato chirp, bright and rhythmic, the kind of sound something makes when it is having the best of times." },
        { t: "say", who: "Peek", x: "It thinks this is a game?" },
        { t: "p", x: "Peek's legs are burning. He looks back and the Phong is right there, closer than before, and its sticky-note fur is no longer green and blue. It's going purple at the edges. His father's voice arrives in his head right on schedule: purple and black, you don't wait around." },
        { t: "beat", x: "Peek runs faster." },
        { t: "p", x: "The park ends. The city thins. The ground ahead loses its color and texture in the way that means the renderer has stopped trying. Peek has reached the outskirts of the Starbloom glitch zone, a wide stretch of pale sandy ground and enormous boulders that sit wrong in the landscape, their shadows pointing in directions that don't match the light. The air here has a faint haze from segfault ore deposits in the rock. No creatures spawn in the glitch zone. Peek knows this. He also knows the ground can't be trusted." },
        { t: "note", x: "Effects of Glitch Zones include: frequent collision failures, gravitational anomalies, non-euclidean geometry, and increased probability of hallucinations. In the far distance, past the boulders and the pale sand, the Kernel Sea is visible as a thin dark line along the horizon." },
        { t: "p", x: "Peek looks back at the lights of Metrochord, warm and orange behind him. Then at the boulders ahead. Young Peek's eyes are beginning to water, and two conflicts reside within him." }
      ],
      prompt: "Which will you select?",
      choices: [
        { x: "\"Square up Peek! You've been in the glitch zone before!\"", to: "p6" },
        { x: "\"I want to go home.\"", to: "p8" }
      ]
    },

    /* ─────────────── PAGE 4 — BLOSSOM ─────────────── */
    p4: {
      theme: "blossom",
      region: "METROCHORD",
      label: "PAGE 04",
      title: "The whole park is singing",
      blocks: [
        { t: "p", x: "Peek pats Patch on his head and feels the texture of the sticky notes under his fingers. Patch's stomach rumbles against his leg. Peek gently nudges the creature off and stands up. Patch gives a small confused chirp and watches him with its head tilted at an angle, sticky notes shifting in the last of the evening light. Peek heads to the vending machine at the edge of the park. Its soft yellow glow is the brightest thing out here now." },
        { t: "p", x: "He enters a code and throws in some bits. The machine hums and spits out a bag of pistachios. Patch watches all of this with its head still tilted, completely baffled by every step of the process." },
        { t: "p", x: "Peek tears the bag open and tosses one onto the grass. Patch pounces on it and takes a nibble. The shell crunches between its teeth and it chimes a single bright note, a clean little ping that echoes out into the empty park. Peek tosses another. Patch chimes two more notes that drift upward and find each other, forming a small lopsided melody." },
        { t: "beat", x: "Then the bushes move." },
        { t: "note", x: "Phongs are pack creatures. Solitary Phongs are uncommon and typically the result of recent imprinting on a non-Phong entity." },
        { t: "p", x: "Other Phongs emerge from the dark, drawn by the melody. Some sing higher, some lower, all of them black and purple in the night. They settle in a loose ring around the vending machine's pool of light. They do not approach Peek. They do not approach Patch either. They just sing, each one contributing a single note and holding it, until the chord is wide enough to fill the air between the catacombs and the tree." },
        { t: "beat", x: "Only Patch stays close to Peek." },
        { t: "p", x: "Peek shakes a few pistachios out of the bag and tosses them gently toward the ring. The Phongs catch them with quick little leaps, each catch followed by a fresh note. The chord shifts. The song changes. Patch chimes his same lopsided three-note phrase and the others answer it back at different pitches, and for a moment the whole park is singing." },
        { t: "p", x: "Peek looks at Patch. Patch looks at Peek. The rule about purple and black is still in Peek's head, sitting right where his father left it. It just doesn't seem to apply to anything happening right now." },
        { t: "rule", x: "There is no conflict in Peek's heart." }
      ],
      next: { x: "Go to Page 10", to: "p10" }
    },

    /* ─────────────── PAGE 5 — OXBLOOD ─────────────── */
    p5: {
      theme: "oxblood",
      region: "KEYBOARD CATACOMBS",
      label: "PAGE 05",
      title: "What his father taught him",
      blocks: [
        { t: "p", x: "Peek looks at the creature in his lap. It is humming, a small contented sound, oblivious to the part of Peek that has gone very quiet. Peek's father had trained him for this. Peek's father had spent whole afternoons training him for this." },
        { t: "lore", x: "Hunters typically begin training their children at a young age. Early conditioning is considered essential, as threat assessment in System 37 becomes increasingly difficult as one leaves The Desktop." },
        { t: "note", x: "NPCs and creatures both run on neural networks, though NPC models are more complex. Yet both have a SPIRIT vector." },
        { t: "p", x: "The sticky notes are fully purple and black now, not a single green or blue one left. The creature is not attacking. It is humming and looking up at him with its head tilted. Peek's father's voice is very clear in his head and Peek wishes it wasn't." },
        { t: "p", x: "He picks the creature up, and it attempts to playfully crawl around him. Peek shouts at it and hits it, forcing it to calm down. It is shaking now. The hum is still going but it's shorter and uneven, like a file that keeps trying to load. Peek does not look at its face. He walks toward the park's exit and down the steps into the keyboard catacombs to an area he knows he can find the right tools." },
        { t: "p", x: "The world gets darker with each step down. The catacombs render differently from the park above, all hard shadows and the low hum of old infrastructure. The creature grows restless in his arms." },
        { t: "note", x: "Phongs are sensitive to ambient effects. Sustained negative emotional states in nearby NPCs can trigger withdrawal behavior. Withdrawal is not aggression." },
        { t: "p", x: "Peek knows where the lanterns are. He knows where the tools are kept and which buckets the parts go into. His father was thorough. Peek sets the creature down on a flat rock and it looks up at him, still humming its uneven hum, its sticky notes the color of a night that isn't going to end." },
        { t: "p", x: "Peek picks up the disposal tool. He finds the weak point below the belly, the same one his father showed him, the same one his father's father showed his father. The creature chimes once, a single clean note, the first note of its lopsided three-note phrase. The second note does not come. The hum stops." },
        { t: "rule", x: "There are no contradictions in Peek's tears." }
      ],
      next: { x: "Go to Page 9", to: "p9" }
    },

    /* ─────────────── PAGE 6 — SEGFAULT VIOLET ─────────────── */
    p6: {
      theme: "segfault",
      region: "STARBLOOM GLITCH ZONE",
      label: "PAGE 06",
      title: "The wrong half-second",
      blocks: [
        { t: "p", x: "Peek charges into the glitch zone. The ground here is the color of a screen left on too long, a flat washed-out gray that does not commit to a single shade. One step it is solid. The next step it is the wireframe under the solid. The step after that it is nothing at all and Peek's stubby cubic feet sink a little before the ground decides to render. The creature follows him without hesitation. It is delighted." },
        { t: "p", x: "The boulders out here are enormous, the kind that look like they were placed by someone who ran out of time to finish placing them. They sit at wrong angles in the pale sand, their shadows disagreeing with the light source, their surfaces flickering between two textures that can't decide which one belongs. The segfault ore in the rock faces gives the air a faint copper haze. In the far distance, past all of it, the Kernel Sea runs along the horizon like a line of code that was never meant to be seen." },
        { t: "p", x: "Peek runs for the boulders. He cuts hard around the first one. The creature follows, sticky notes flapping. He doubles back behind a second. The creature follows, grinning. Peek's legs are burning and his shirt is catching under his feet every few strides but he doesn't stop to fix it. He cuts left around another boulder and finds too late that the boulder is not where he thought it was. The texture had rendered in one place. The hitbox had loaded somewhere else. There is a ledge where his next step should be and then there is nothing, just the long drop down to the Sea." },
        { t: "beat", x: "Peek grabs the edge of something solid. His fingers find a real surface and he holds on." },
        { t: "beat", x: "The creature is not as lucky." },
        { t: "p", x: "Its legs had popped out to push it forward. They popped at the wrong half-second. Its sticky notes stream behind it like a paper tail. Its three-note chirp is still in progress. The first note has already come out. The second is in the air. The third, the wrong one, the off one, never makes it out of its mouth." },
        { t: "lore", x: "The Kernel Sea underlies the entire Desktop. It is raw, unprocessed data, the kind that exists before the system has had a chance to do anything with it." },
        { t: "p", x: "The Sea takes it. There is no splash. The Sea has no concept of splash. The creature hits the surface and the surface accepts it the way raw data accepts anything it touches, without judgment, without ceremony, pulling the small organized pattern of it apart thread by thread. Post-it by post-it." },
        { t: "rule", x: "There are no contradictions in the pixelated dust." }
      ],
      next: { x: "Go to Page 7", to: "p7" }
    },

    /* ─────────────── PAGE 7 — SEGFAULT VIOLET ─────────────── */
    p7: {
      theme: "segfault",
      region: "STARBLOOM GLITCH ZONE",
      label: "PAGE 07",
      title: "The Sea keeps no records",
      blocks: [
        { t: "p", x: "Peek pulls himself up onto the solid ledge and does not move. The Sea is quiet below him. It was quiet the whole time. It did not reach up and take the creature. It did not do anything at all. The creature fell and the Sea was simply there, the way it is always there, underneath everything." },
        { t: "p", x: "Peek looks at the spot where the last sticky note went under. The surface has already forgotten. There is no disturbance, no mark, no indication that something small and green and blue had been there a few seconds ago making a lopsided three-note melody and learning what pistachios were. The Sea does not keep records of what it takes. The data does not go somewhere else. It just stops being that data. The copper haze from the segfault ore drifts through the space between the boulders. The skybox has gone fully dark. Peek's hat is sideways. His shirt is torn at the hem where he caught it on the ledge. He does not fix either of these things." },
        { t: "p", x: "He had not wanted to kill it. That had been the whole point. He had run so he would not have to be near it when it went purple and black. He had run so the rule would not apply. So he would not have to find the weak point below the belly and do what his father taught him. He had run to avoid doing the thing and the thing had happened anyway, differently, in a way that was somehow worse because there was nobody to blame for it and nothing that could have been done and no version of the rule that covered it." },
        { t: "p", x: "Peek sits on the ledge for a long time. When he finally moves it is only to put his small square hands over his face." },
        { t: "rule", x: "There are no contradictions in Peek's heart." }
      ],
      next: { x: "Go to Page 9", to: "p9" }
    },

    /* ─────────────── PAGE 8 — METROCHORD AMBER ─────────────── */
    p8: {
      theme: "amber",
      region: "METROCHORD NIGHT MARKET",
      label: "PAGE 08",
      title: "Square up, boy. Give it a name.",
      blocks: [
        { t: "p", x: "Peek runs back the way he came. The lights of Metrochord are warm and orange against the dark and he runs toward them with everything his small cubic legs have left. He does not have a plan past home. He just needs to find his father." },
        { t: "lore", x: "Metrochord is the most populous region of The Desktop. Its market district stays partially active through the night cycle, primarily for late-shift workers and traveling traders. Visitors are advised that night markets are louder than day markets." },
        { t: "p", x: "Patch's chirp pitches up into something almost triumphant and before Peek can turn around there is a soft heavy weight slamming into the back of his head. Sticky notes fly everywhere. Peek goes down on the cobblestones and yelps for help at a volume that is probably unnecessary. Apartment lights turn on up and down the street. NPCs step out onto their patios and look down." },
        { t: "say", who: "NPC", x: "Is that the hunter's boy? What's he screaming about a Phong for?" },
        { t: "say", who: "Peek", x: "Daddy! Daddy!" },
        { t: "p", x: "Patch crawls over him with a grin, leaving sticky notes on his already-torn flannel. A window opens above them. Peek's father looks down, takes in the scene, and makes a sound with his teeth. He comes down and grabs the Phong with one hand and his son with the other and carries them both inside without saying anything, which is somehow worse than if he had said something." },
        { t: "say", who: "Father", x: "Peek. Do you remember a single thing I have taught you?" },
        { t: "p", x: "He picks up the Phong, looks at it for a moment then puts it into Peek's arms." },
        { t: "say", who: "Father", x: "I didn't teach you to kill them because I thought you'd be dumb enough to get near one. We stay away from Phongs because they imprint! They latch on and they do not let go. You understand?" },
        { t: "say", who: "Mother", x: "What happened here dear?" },
        { t: "p", x: "Peek crosses the room and goes straight into her arms, Patch still tucked under one of his." },
        { t: "say", who: "Father", x: "Do you have to coddle him so much. It's a Phong. He's crying like a little byte over a Phong." },
        { t: "p", x: "He stops at the doorway." },
        { t: "say", who: "Father", x: "Square up, boy. Give it a name." },
        { t: "p", x: "Peek looks down at the creature in his arms. It looks up at him, head tilted, completely unbothered by any of this." },
        { t: "rule", x: "There are no contradictions in Peek's mind." }
      ],
      next: { x: "Go to Page 10", to: "p10" }
    },

    /* ─────────────── PAGE 9 — SYSTEM BLACK (sad ending) ─────────────── */
    p9: {
      theme: "system-black",
      region: "METROCHORD",
      label: "PAGE 09",
      title: "+1 MONTH",
      ending: "QUIET",
      blocks: [
        { t: "sys", x: "Fast forwarding one in-game month…" },
        { t: "p", x: "Due to the increased presence of clouds, the saturation of the world's textures are lessened. At the same park, Peek is playing with a sling-sphere under the tree with 2^8 leaves. He is not aiming at the bump map nub. His throws are softer and he walks to retrieve the sphere instead of run." },
        { t: "p", x: "He throws a little harder than he meant to and the sphere rolls into the underbrush near the bench where the older NPCs nap during lunch hours. Peek walks after it. He gets down on his stubby cubic knees and peeks under the bench." },
        { t: "beat", x: "Nothing." },
        { t: "p", x: "He picks it up. He throws it again, this time toward a small pile of rocks at the edge of the park. The sphere rolls behind one of them. Peek walks over and peeks behind the rock." },
        { t: "beat", x: "Nothing." },
        { t: "p", x: "He throws the sphere toward the vending machine. He peeks under it, then behind it, then into the slot at the bottom where the snacks come out." },
        { t: "beat", x: "Nothing." },
        { t: "p", x: "He throws the sphere back toward the tree. He walks after it and sits down with his back against the trunk. The sphere rolls into a sharp rock and pops. Peek's hat is still on too low. He does not fix it. He seems unaffected." },
        { t: "sys", x: "saving simulation state…" },
        { t: "lore", x: "Thank you for visiting the beta version of System 37. We hope you enjoyed your time in The Desktop. Future simulations will explore additional NPCs and regions. Please consider providing feedback to the development team." },
        { t: "sys", x: "logging off…" }
      ],
      end: true
    },

    /* ─────────────── PAGE 10 — BUBBLEGUM (happy ending) ─────────────── */
    p10: {
      theme: "bubblegum",
      region: "METROCHORD",
      label: "PAGE 10",
      title: "+1 MONTH",
      ending: "TOGETHER",
      blocks: [
        { t: "sys", x: "Fast forwarding one in-game month…" },
        { t: "p", x: "Due to the decreased presence of clouds, the saturation of the world's textures are heightened. At the same park, Peek and Patch are playing sling-sphere under the tree with 2^8 leaves. Peek is aiming at the bump map nub again. He hasn't hit it yet but he's getting closer." },
        { t: "p", x: "He throws the sphere a little wide and it rolls into the underbrush near the bench where the older NPCs nap during lunch hours. Peek walks after it and gets down on his stubby cubic knees to peek under the bench. Patch is already there, wrapped around the ball, grinning." },
        { t: "p", x: "He picks it up and throws it toward a small pile of rocks at the edge of the park. The sphere rolls behind one of them. Peek walks over and peeks behind the rock. Patch is there attempting to eat the rock. The rock is fine. Patch is unbothered." },
        { t: "p", x: "He throws the sphere toward the vending machine. Patch sprints after it and immediately begins singing the lopsided three-note melody that means he wants pistachios. Peek gives in, because he always gives in, and Patch dances in circles around the machine while the bag loads." },
        { t: "p", x: "Peek throws the sphere back toward the tree. A group of Cubics drifts over, drawn by the melody. They crouch around Patch and write things on his sticky notes and listen to him sing the words back in different pitches. Patch adds a new note to the phrase. Then another. The melody is longer than it used to be." },
        { t: "p", x: "Peek's hat is still on too low. He tilts it back to watch." },
        { t: "sys", x: "saving simulation state…" },
        { t: "lore", x: "Thank you for visiting the beta version of System 37. We hope you enjoyed your time in The Desktop. Future simulations will explore additional NPCs and regions. Please consider providing feedback to the development team." },
        { t: "sys", x: "logging off…" }
      ],
      end: true
    }

  }
};
