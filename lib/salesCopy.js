/* ---------------------------------------------------------------------------
   Long-form direct response copy, one block per SKU.

   Structure follows the reference sales page: hook, problem, mechanism,
   feature stack, comparison, self-selection, objection handling, risk
   reversal, close.

   Held back on purpose, per the brand guardrails: no countdown or scarcity
   devices, no invented ratings or quotes, no named competitors (comparison
   columns are categories of construction), and no claim about what any of
   this does to your body. Proof strips carry bracketed placeholders until
   the listings have genuine reviews.
   TODO_CONTENT: see TODO_CONTENT.md before launch.
--------------------------------------------------------------------------- */

export const salesCopy = {
  "cooling-pillowcase": {
    hookLead: "You keep flipping the pillow.",
    hookEmph: "The pillowcase is why.",
    sub: "Most pillowcases are woven to feel good in the shop. This one is woven for four in the morning, which is when it actually matters.",

    problemEyebrow: "Why the cool side runs out",
    problemHeading: "The weave is doing the wrong job.",
    problems: [
      {
        title: "The cool side lasts a minute",
        body: "You turn the pillow over, it feels better for a moment, and then it does not. A dense weave holds what it is given and gives it straight back.",
      },
      {
        title: "Soft in the shop, close by morning",
        body: "A heavy sateen finish feels lovely under the hand on a shelf. The same finish sits flat against your skin all night with nowhere for air to move.",
      },
      {
        title: "It never quite fits your pillow",
        body: "Cases cut long ride up and bunch under your ear. Cases cut tight strain at the seam. Either way you are aware of it.",
      },
    ],

    mechHeading: "What the weave does",
    mechSub: "No coating, no additive, nothing that washes out after a month. Just a different construction.",
    steps: [
      {
        n: "01",
        title: "A flatter weave",
        body: "One thread over one, percale style, rather than the four over one that gives sateen its sheen. The surface sits more open, so air keeps moving through it.",
      },
      {
        n: "02",
        title: "A matte face",
        body: "Long-staple fibre finished without a heavy polish. Less of the surface presses flat against the skin, and it does not go slick when it warms.",
      },
      {
        n: "03",
        title: "A fit that stays put",
        body: "A deep envelope closure holds the pillow in rather than letting it work its way out over the night, so the case is still where you left it.",
      },
    ],

    featuresHeading: "Six things worth knowing.",
    features: [
      { title: "Long-staple cotton blend", body: "Longer fibres mean fewer loose ends at the surface, which is what keeps the face smooth rather than fuzzy after washing." },
      { title: "Percale-style weave", body: "The flat one-over-one construction, chosen for airflow rather than for shine on a shelf." },
      { title: "Envelope closure", body: "Nothing to catch on. No zip, no buttons, and no hardware anywhere near your face." },
      { title: "Universal fit", body: "Cut for a standard pillow, so it works on the one already on your bed. No sizing decision to get wrong." },
      { title: "Washes normally", body: "Machine wash warm, tumble low. No mesh bag, no cold-only cycle, no special detergent." },
      { title: "Woven in Pakistan", body: "From a mill we buy from directly, in a region that has been weaving cotton for a very long time." },
    ],

    comparisonSub: "Against the two other constructions you are likely choosing between. These are categories of weave, not particular brands.",
    comparison: {
      cols: ["Rooh cooling percale", "Cotton sateen", "Synthetic cooling microfibre"],
      rows: [
        { row: "Open weave that keeps air moving", marks: [true, false, false] },
        { row: "Matte face rather than a sheen", marks: [true, false, false] },
        { row: "Natural fibre against the skin", marks: [true, true, false] },
        { row: "No finish that washes out over time", marks: [true, true, false] },
        { row: "Stays put through the night", marks: [true, false, false] },
        { row: "Ordinary machine wash", marks: [true, true, true] },
      ],
    },

    forYou: [
      "You flip the pillow over most nights and would rather not",
      "You sleep warm, or your room does",
      "You prefer a crisp hand to a silky one",
      "You want something that fits the pillow you already own",
    ],
    notForYou: [
      "You want a slippery, glossy surface; this is deliberately matte",
      "You like the heavy drape of sateen, which this is not",
      "You are looking for a gel insert or an active cooling device",
      "You want a case that is soft from the very first night, before washing",
    ],

    faqs: [
      { q: "Will it fit my pillow?", a: "It is cut for a standard pillow, which is the size most beds use. [TODO_CONTENT: add exact dimensions in inches and centimetres once production samples are final.]" },
      { q: "Does it actually feel cool?", a: "It feels cooler to the hand than sateen, and it stays that way longer because air keeps moving through the weave. It is fabric, not refrigeration, and we would rather set that expectation now than have you find out at midnight." },
      { q: "Is percale noisy or stiff?", a: "It has a crisp hand at first, closer to a good hotel sheet than to jersey. It softens over the first few washes without going limp." },
      { q: "What is the thread count?", a: "We do not lead with it. Thread count is easy to inflate by counting plies, and a high count usually means a denser weave, which is the opposite of what this product is for. Fibre length and weave structure matter more." },
      { q: "How do I wash it?", a: "Machine wash warm and tumble dry low. No mesh bag, no special detergent. Skip fabric softener, which coats fibres and works against the breathability you bought it for." },
      { q: "What colours does it come in?", a: "[TODO_CONTENT: confirm the launch colourway list before launch. The photography currently shows the deep jade.]" },
      { q: "How do returns work?", a: "Through Amazon, inside their standard returns window. We do not run a separate process, so you get theirs." },
    ],

    guaranteeHeading: "If it is not for you, send it back.",
    closeLead: "Cool, matte, and still there in the morning.",
    closeEmph: "Nothing to plug in.",
  },

  "cooling-sheet-set": {
    hookLead: "You blame the pillow.",
    hookEmph: "It is mostly the sheets.",
    sub: "A pillowcase touches your head. A sheet set touches nearly all of you, all night. If the bed sleeps warm, this is the layer where it starts.",

    problemEyebrow: "Why the bed sleeps warm",
    problemHeading: "The biggest surface is the one nobody upgrades.",
    problems: [
      {
        title: "It is the layer you actually lie on",
        body: "A pillowcase is roughly one square foot against your skin. A fitted sheet is the whole mattress. Improving the small surface and ignoring the large one is the wrong order.",
      },
      {
        title: "Deep mattresses defeat most fitted sheets",
        body: "Toppers and pillow-tops push a mattress past what a standard sheet was cut for. The corner rides up in the night and you wake on bare mattress.",
      },
      {
        title: "Soft on day one, pilled by month three",
        body: "Short staple fibres work loose with every wash and ball up on the surface. The set that felt best in the shop is often the first to go rough.",
      },
    ],

    mechHeading: "What the fibres do",
    mechSub: "Nothing sprayed on, nothing that rinses away. The behaviour comes from the fibre and the cut.",
    steps: [
      {
        n: "01",
        title: "Long, smooth filaments",
        body: "Lyocell is extruded as a long continuous filament rather than spun from short staples, so there are fewer loose ends to work free and pill.",
      },
      {
        n: "02",
        title: "It moves moisture off the surface",
        body: "The fibre draws damp away from the face of the cloth and spreads it out to dry, which is why the sheet stays feeling dry rather than clammy.",
      },
      {
        n: "03",
        title: "A pocket cut for a real mattress",
        body: "A deep pocket with elastic all the way round, not just at the corners, so it grips a topper instead of pinging off it at three in the morning.",
      },
    ],

    featuresHeading: "Six things worth knowing.",
    features: [
      { title: "Tencel lyocell blend", body: "A branded lyocell, so the fibre is traceable to a named producer rather than being an unlabelled generic." },
      { title: "Deep-pocket fitted sheet", body: "Cut for mattresses with a topper on them, which is most mattresses now. [TODO_CONTENT: confirm pocket depth.]" },
      { title: "Elastic all the way round", body: "Not four corner tabs. The whole hem grips, which is the difference between a sheet that stays on and one that does not." },
      { title: "Matte drape", body: "Finished without a sheen, so it reads as cloth rather than as something synthetic and slippery." },
      { title: "Ordinary wash", body: "Machine wash warm and tumble low. Skip fabric softener, which coats the fibre and undoes the thing you bought it for." },
      { title: "Set contents", body: "[TODO_CONTENT: confirm exactly what is in the box, fitted plus flat plus how many cases, and list the sizes offered.]" },
    ],

    comparisonSub: "Against the two constructions most beds already have on them. These are fibre and weave categories, not particular brands.",
    comparison: {
      cols: ["Rooh cooling sheet set", "Cotton percale", "Microfibre"],
      rows: [
        { row: "Long filament rather than short staple", marks: [true, false, false] },
        { row: "Moves moisture off the surface", marks: [true, true, false] },
        { row: "Breathes as the night warms up", marks: [true, true, false] },
        { row: "Resists pilling over time", marks: [true, false, false] },
        { row: "Deep pocket with all-round elastic", marks: [true, false, false] },
        { row: "Ordinary machine wash", marks: [true, true, true] },
      ],
    },

    forYou: [
      "The bed sleeps warm and you have already tried changing the pillow",
      "You have a topper, so standard fitted sheets come off in the night",
      "You want the whole bed to match rather than one upgraded piece",
      "You would rather buy one set that lasts than replace a cheap one yearly",
    ],
    notForYou: [
      "You want the crisp, cool snap of cotton percale, which this is softer than",
      "You want pure cotton with no manufactured fibre in it at all",
      "You want flannel or jersey warmth, which this deliberately is not",
      "You need a size we do not cut yet; check the listing before ordering",
    ],

    faqs: [
      { q: "Is the bamboo actually bamboo?", a: "Not in the way the word suggests, and we would rather say so. Almost every bamboo textile on the market is a viscose or lyocell fibre manufactured from bamboo pulp, not bamboo fibre woven directly. Regulators are clear that it should be described that way, so we describe it that way. The finished cloth is genuinely soft and breathable; it is just not raw bamboo." },
      { q: "What sizes does it come in?", a: "[TODO_CONTENT: list the sizes offered and their exact dimensions before launch.]" },
      { q: "What is in the set?", a: "[TODO_CONTENT: confirm the contents of the box, fitted sheet plus flat sheet plus pillowcases, and how many.]" },
      { q: "Will it fit my mattress with a topper?", a: "That is what the deep pocket is for, and the elastic runs the whole way round rather than sitting at the corners. Check the pocket depth on the listing against your mattress plus topper before ordering." },
      { q: "Does it actually sleep cooler?", a: "It moves moisture off the surface and keeps air moving better than a dense weave, so it feels drier and cooler for longer. It is cloth rather than a cooling device, and how much difference you notice depends on your room and your mattress." },
      { q: "Will it pill?", a: "Long filament fibres have far fewer loose ends than short staple cotton, which is where pilling comes from. Washing with fabric softener or against rough items will still work fibres loose over time." },
      { q: "How do I wash it?", a: "Machine wash warm, tumble dry low, no fabric softener. Wash it on its own or with other soft items, since zips and hooks are what abrade a sheet." },
      { q: "How do returns work?", a: "Through Amazon, inside their standard returns window. We do not run a separate process, so you get theirs." },
    ],

    guaranteeHeading: "If it is not for you, send it back.",
    closeLead: "The layer everything else sits on.",
    closeEmph: "Start there.",
  },

  "silk-pillowcase": {
    hookLead: "Cotton catches.",
    hookEmph: "Silk lets go.",
    sub: "22 momme mulberry silk with a low, powdery lustre. Hair moves across it rather than gripping it, and it feels like an occasion every night.",

    problemEyebrow: "Why silk, and why most of it disappoints",
    problemHeading: "Three things go wrong before you even sleep on it.",
    problems: [
      {
        title: "Cotton has a textured face",
        body: "Woven cotton is a grid of raised threads. Hair and skin catch on that grid every time you turn, which is why you wake with it flattened on one side.",
      },
      {
        title: "Most silk is not silk",
        body: "Satin is a weave, not a fibre. A polyester satin looks close on a screen, costs a fraction, and behaves nothing like the real thing once it warms up.",
      },
      {
        title: "The closure ruins it",
        body: "A zip, or an exposed seam turned the wrong way, puts the one hard thing on the pillow exactly where your face goes.",
      },
    ],

    mechHeading: "The three numbers that decide it",
    mechSub: "Silk is one of the few textiles where the spec sheet genuinely tells you how it will feel.",
    steps: [
      {
        n: "01",
        title: "Momme is the weight",
        body: "It measures how much silk is actually in the cloth. Thin silk drapes and wears thin. Ours is 22 momme, which is substantial without going stiff or board-like.",
      },
      {
        n: "02",
        title: "Long filament, not spun staple",
        body: "Mulberry silk comes off the cocoon as one continuous filament, so the surface has almost no loose fibre ends. That smoothness is structural, not a finish applied on top.",
      },
      {
        n: "03",
        title: "Finished matte",
        body: "We stop short of a high polish. The result is a low lustre that catches light in broad soft gradients rather than a hard shine that reads as synthetic.",
      },
    ],

    featuresHeading: "Six things worth knowing.",
    features: [
      { title: "22 momme mulberry silk", body: "Heavy enough to hang properly and to survive being washed regularly, without the boardiness of the very heaviest weights." },
      { title: "Hidden closure", body: "The opening is tucked away, so there is no zip and no hard edge anywhere your face will find it." },
      { title: "Matte lustre", body: "Finished to a soft sheen rather than a mirror. It reads as cloth, not as costume satin." },
      { title: "Washable at home", body: "Cool machine wash in a mesh bag on a delicate cycle, or hand wash. No trip to the dry cleaner required." },
      { title: "Both faces the same", body: "Woven so there is no wrong side up. One less thing to get right when you are half asleep." },
      { title: "Woven in China, finished in Pakistan", body: "Silk is woven where the expertise is, then cut and finished in the workshop we work with directly in Pakistan." },
    ],

    comparisonSub: "Against the two things most often bought instead. These are fibre and construction categories, not particular brands.",
    comparison: {
      cols: ["Rooh mulberry silk", "Polyester satin", "Cotton"],
      rows: [
        { row: "Natural protein fibre", marks: [true, false, false] },
        { row: "Low friction surface", marks: [true, true, false] },
        { row: "Breathes as you warm up", marks: [true, false, true] },
        { row: "Soft lustre rather than a hard shine", marks: [true, false, false] },
        { row: "No closure against your face", marks: [true, false, false] },
        { row: "Washable at home", marks: [true, true, true] },
      ],
    },

    forYou: [
      "You wake with your hair pressed flat and want less friction overnight",
      "You already know you like the feel of silk and want a weight that lasts",
      "You want the upgrade piece in the line",
      "You would rather wash it at home than take it somewhere",
    ],
    notForYou: [
      "You want a crisp, cool, cotton hand; the cooling pillowcase is the one for that",
      "You want to tumble dry on high and forget about it",
      "You want a high-shine satin look, which this deliberately is not",
      "You are shopping purely on price, since silk at this weight is not cheap",
    ],

    faqs: [
      { q: "What does momme actually mean?", a: "It is the traditional weight measure for silk, roughly the weight in pounds of a fixed length and width of cloth. Higher momme means more silk in the same area. Most pillowcases sit between 19 and 25; ours is 22." },
      { q: "Is 25 momme better than 22?", a: "Not automatically. Heavier silk is more durable but stiffer and warmer, and the price climbs quickly. 22 is where we think weight, drape, and cost meet, and we would rather explain the tradeoff than pretend more is always better." },
      { q: "Will it slide off the pillow?", a: "The hidden closure holds the pillow properly, which is the usual culprit. Silk against a very slick mattress protector can still travel a little, as any smooth fabric will." },
      { q: "How do I wash it?", a: "Cool machine wash inside a mesh bag on the delicate cycle, or hand wash. Use a mild detergent, skip the fabric softener, and hang it to dry out of direct sun. Do not wring it." },
      { q: "Is it really silk?", a: "Mulberry silk, which is a natural protein fibre from the silkworm. If a product does not name the fibre and the momme weight, it is usually because one of the two is not flattering." },
      { q: "Which side goes up?", a: "Either. Both faces are the same, so there is nothing to check." },
      { q: "How do returns work?", a: "Through Amazon, inside their standard returns window. We do not run a separate process, so you get theirs." },
    ],

    guaranteeHeading: "If it is not for you, send it back.",
    closeLead: "Quiet luxury, literally.",
    closeEmph: "Twenty two momme of it.",
  },

  "seed-eye-mask": {
    hookLead: "Most eye masks sit on your face.",
    hookEmph: "This one settles into it.",
    sub: "A flat panel of fabric bridges over your nose and leaves the light a way in. Ours is filled with whole seeds, so it drops into the shape of your face and closes those gaps by weight alone.",

    problemEyebrow: "Why most masks disappoint",
    problemHeading: "The problem is the flat panel.",
    problems: [
      {
        title: "The light gets in at the nose",
        body: "A flat mask bridges straight over the nose and leaves two open gaps underneath. That is where morning light arrives first.",
      },
      {
        title: "The pressure lands on your eyelids",
        body: "Anything flat and stretched presses hardest exactly where you least want it, right on the lids, so you feel it every time you move your eyes.",
      },
      {
        title: "It has moved by the time you wake",
        body: "A light mask with a tight strap slides once you turn over, and you end up wearing it around your forehead.",
      },
    ],

    mechHeading: "What the seeds actually do",
    mechSub: "Nothing clever, and nothing you plug in. Loose fill behaves differently from a stretched panel, and that difference is the whole product.",
    steps: [
      { n: "01", title: "Settle it", body: "Lay it across your face and give it a moment. The seeds redistribute and find the space around your eyes on their own." },
      { n: "02", title: "It takes your shape", body: "The fill drops into the hollows at the bridge of the nose and under the brow, closing the gaps a flat panel leaves open." },
      { n: "03", title: "It stays where it settled", body: "Weight distributed across the whole mask does the holding, so the strap does not have to be tight to keep it in place." },
    ],

    featuresHeading: "Six things worth knowing.",
    features: [
      { title: "Whole seed fill", body: "Whole seeds, not pellets or crushed filler. They shift with a soft, low sound and settle rather than bunch." },
      { title: "Cotton shell", body: "A plain woven cotton face with nothing coated or laminated, so it breathes against the skin." },
      { title: "Contoured nose drape", body: "Cut longer through the centre so the fill can fall into the bridge of the nose instead of tenting over it." },
      { title: "Flat back closure", body: "An adjustable strap with no buckle or plastic slider at the back, so there is nothing to press into the side of your head." },
      { title: "Made to be washed", body: "Spot clean the shell and air dry. Care instructions are printed on the label, not buried in a leaflet." },
      { title: "Sewn in Pakistan", body: "Cut and sewn in a workshop we buy from directly, in a country with a long textile trade." },
    ],

    comparisonSub: "Against the two other kinds of mask you are likely choosing between. These are categories of construction, not particular brands.",
    comparison: {
      cols: ["Rooh seed mask", "Flat fabric mask", "Moulded cup mask"],
      rows: [
        { row: "Closes the gap at the nose bridge", marks: [true, false, true] },
        { row: "Conforms to your face shape", marks: [true, false, false] },
        { row: "Weight spread across the whole mask", marks: [true, false, false] },
        { row: "Stays put without a tight strap", marks: [true, false, false] },
        { row: "No rigid structure to press on", marks: [true, true, false] },
        { row: "No hardware behind the head", marks: [true, false, false] },
        { row: "Packs flat in a bag", marks: [true, true, false] },
      ],
    },

    forYou: [
      "You wake with the sun and want the room darker than your curtains make it",
      "You like the feeling of a little weight on your face",
      "You sleep on your side and want something that will not shift when you turn",
      "You travel and want something that packs flat",
    ],
    notForYou: [
      "You want a mask you can barely feel; this one is meant to be felt",
      "You are looking for a cooling gel insert or a cold pack, which this is not",
      "You want something you can heat up, which this is not designed or sold for",
      "You need a rigid cup that keeps all contact off the lashes",
    ],

    faqs: [
      { q: "What seeds are inside?", a: "Whole seeds in a sewn cotton chamber. We are finalising the specific seed and the sourcing region, and we will name both here and on the label rather than leaving it vague. [TODO_CONTENT: confirm seed type and region before launch.]" },
      { q: "Does it smell of anything?", a: "It is unscented. Nothing is added to the fill and no fragrance is applied to the cotton. New textiles carry a faint smell of the cloth itself, which fades with airing." },
      { q: "Can I heat it in the microwave?", a: "No. It is not designed, tested, or sold as a heat pack, and we would rather say that plainly than let people assume otherwise. Use it as it comes." },
      { q: "Does it block all the light?", a: "It blocks considerably more than a flat mask because the fill closes the gaps at the nose. No fabric mask is perfectly lightproof, and any brand claiming total blackout is overstating it." },
      { q: "How heavy is it?", a: "Light enough to sleep in and heavy enough to notice, spread evenly rather than concentrated in one place. [TODO_CONTENT: add the confirmed weight in grams once production samples are final.]" },
      { q: "Will it work if I sleep on my side?", a: "Yes. The fill moves out of the way where your face meets the pillow rather than resisting it, which is the main thing a moulded mask cannot do." },
      { q: "How do I clean it?", a: "Spot clean the shell with a damp cloth and let it air dry fully. Do not submerge it or put it through a wash cycle, because the fill is seed and needs to stay dry." },
      { q: "How do returns work?", a: "Through Amazon, under their standard returns window. We do not run a separate returns process, which means you get theirs, and theirs is better than anything we would build ourselves at this stage." },
    ],

    guaranteeHeading: "If it is not for you, send it back.",
    closeLead: "Weight, texture, ritual.",
    closeEmph: "Nothing to plug in.",
  },
};

export function getSalesCopy(slug) {
  return salesCopy[slug];
}
