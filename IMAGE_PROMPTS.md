# Rooh — image generation prompts (OpenAI GPT Image)

Nine prompts, one per image slot in the current build. Written for `gpt-image-1`
(API) or the image tool in ChatGPT.

---

## Before you start

**Model settings**
- Model: `gpt-image-1`, quality `high`.
- Supported sizes are only `1024x1024`, `1024x1536` (portrait), `1536x1024`
  (landscape). Each prompt below says which to use. Crop to the exact site ratio
  afterwards; do not ask the model for 3:4 or 16:9 directly.
- Generate 3 to 4 variants per slot, pick one, then use the **edit** endpoint
  (`images.edit`) with that winner as input for any revisions. Re-rolling from
  scratch breaks consistency across the four products.

**Product shots: attach a reference photo.** For prompts 2 through 5, shoot the
real product on a phone against any plain surface and pass it to `images.edit`.
The model restyles the scene and lighting while keeping your actual product.
Generating a pillowcase from text alone produces a pillowcase you do not sell,
which is a problem on a page with a Buy button.

**Prompt style.** GPT Image follows plain instructions and does not use
Stable-Diffusion-style negative weights. Write "the frame contains no text"
rather than `--no text`. It also tends to render fabric slightly plasticky, so
every prompt below explicitly asks for weave texture and wrinkles. Keep that.

**Arch crop.** Every product and story image is masked into a pointed arch
(`border-radius: 999px 999px 8px 8px`), so the top corners get cut away. Keep the
subject centred and in the lower two thirds. Each prompt already says this.

---

## The style anchor

Paste this block at the end of **every** prompt below, unchanged. It is what
makes four separately generated products read as one product line.

```
Shot on medium format, 80mm lens, f/4. Single soft window light from camera
left, warm and directional, with deep shadows retained on the right. Warm muted
palette only: deep jade green, sage, sand, clay terracotta, warm off-white. No
cool blues, no clinical greys, no saturated colour. Matte finish, fine natural
film grain, gentle highlight rolloff, no glossy specular highlights. Visible
weave texture and individual fibres, natural creases and wrinkles, nothing
steamed flat or artificially perfect. Still, quiet, unstyled, generous empty
space. The frame contains no text, no logos, no graphics, no watermarks, and no
visible human faces.
```

---

## 1. Home hero — `1536x1024`

> A dark, calm bedroom in the fifteen minutes before sunrise. An unmade bed seen
> at a low three-quarter angle from the foot, dressed in a deep jade green
> pillowcase and rumpled sand-coloured linen sheets. A window just out of frame
> on the right throws one narrow band of warm dawn light across the bedding and
> the wall behind it. The left third of the frame falls away into near darkness
> and is almost empty. Deep charcoal-green walls, a bare plaster texture, one
> small brass object on a side table. Overall exposure is low key and the image
> reads as dark.

Keep the left third empty and dark. The headline sits there in cream type, so
anything busy on that side kills legibility. Crop to roughly 16:9.

---

## 2. Cooling Pillowcase — `1024x1536`

> A single pillow in a deep jade green cotton pillowcase, resting on a bare
> sand-coloured linen sheet, photographed from a low angle slightly above the
> surface. The fabric has a fine smooth percale weave with a soft matte sheen and
> a few natural creases where the pillow settles. Morning light crosses the
> surface at a shallow angle so the weave and the shadows in the folds are
> clearly visible. Plain warm off-white plaster wall behind, thrown gently out of
> focus. The pillow sits in the lower two thirds of the frame with clear empty
> space above it.

---

## 3. Cooling Sheet Set — `1536x1024`

> A bed dressed in a full sand-coloured sheet set, photographed from a low
> three-quarter angle at the foot of the bed in soft morning light. The fitted
> sheet is pulled taut over a deep mattress with a visible topper, and the flat
> sheet is folded back once across the middle with a few natural creases. Two
> deep jade green pillows sit at the head. A plain warm plaster wall behind. The
> weave texture of the cloth is clearly visible where the light rakes across it.

Landscape rather than portrait, because the point of the shot is the whole bed
rather than one object. It will be cropped to the arch, so keep the head of the
bed out of the top corners.

---

## 4. Silk Pillowcase — `1024x1536`

> A pillow in a mulberry silk pillowcase the colour of aged brass, a muted warm
> gold, resting on the same bare sand-coloured linen sheet in the same room and
> the same morning light as a matching photograph of a jade green pillow. The
> silk has a soft low lustre rather than a shine, catching light in broad gentle
> gradients across a few loose folds. The sheen is restrained and matte, closer
> to raw silk than to satin. Plain warm off-white plaster wall behind, softly out
> of focus. The pillow sits in the lower two thirds of the frame with clear empty
> space above it.

Silk is where GPT Image most often overdoes it. If the result looks like shiny
polyester, run an edit pass with: "reduce the shine, make the surface more matte
and powdery, closer to raw silk than satin."

---

## 5. Seed-Filled Eye Mask — `1024x1536`

> A seed-filled sleep eye mask in soft natural cotton the colour of undyed
> muslin, with a deep jade green stitched edge, lying flat on the same bare
> sand-coloured linen sheet in the same room and the same morning light as a
> matching photograph of a jade green pillow. The mask sags and settles with the
> weight of the seeds inside, so the surface is gently uneven and the filling is
> visible as soft irregular shapes under the cloth. A few loose seeds rest on the
> linen beside it. Shot slightly from above at a shallow angle. The mask sits in
> the lower two thirds of the frame with clear empty space above it.

---

## 6. Home story teaser — `1024x1536`

> A stack of folded textiles on a worn wooden table in warm daylight: deep jade
> green cotton, undyed muslin, sand-coloured linen, one length of muted clay
> terracotta cloth. The edges are hand-folded and slightly uneven. Behind them a
> few large cones of cotton thread in natural and jade tones. The wood is old,
> scuffed and warm-toned. Shot from a low three-quarter angle, close, with a
> shallow depth of field so the back of the stack softens. The subject sits in
> the lower two thirds of the frame with clear empty space above it.

This slot sits beside the sourcing story. Note it is deliberately a **materials**
image, not a staged artisan. See the note at the bottom of this file.

---

## 7. About page story image — `1024x1536`

> Late afternoon sunlight passing through a carved stone jaali lattice screen and
> falling across a plain plaster wall and a worn wooden floor, throwing a sharp
> geometric pattern of light and shadow. The stone is warm sand coloured. A
> length of deep jade green cloth hangs at the edge of the frame, partly lit by
> the pattern. The room is otherwise bare. Warm, still, quiet, with strong
> directional light and deep shadow. The lit wall occupies the lower two thirds
> of the frame.

---

## 8. About page hero background — `1536x1024`

> An extreme close-up of dark jade green cotton fabric, filling the entire frame,
> lit by a single raking light from the left so the weave structure casts fine
> shadows and the surface reads as deeply textured cloth. Soft folds run through
> the lower half. The image is dark and low key overall, closer to black-green
> than mid-green, with detail retained in the shadows.

Used behind cream headline type, so it must stay dark and even. If it comes back
too bright, edit with: "darken significantly, reduce contrast in the highlights,
keep the overall image very low key."

---

## 9. Social / OG image — `1536x1024`, crop to 1200x630

> A calm overhead flat lay on a warm off-white linen surface: a folded deep jade
> green pillowcase, a natural cotton eye mask resting beside it, and a small
> sprig of dried botanical. The objects are grouped in the right half of the
> frame and the left half is empty linen. Soft even daylight from above with
> gentle shadows. Composed, restrained, plenty of breathing room.

The left half stays empty so the wordmark can be composited over it.

---

## Two things to hold the line on

**Do not generate the workshop imagery.** Prompts 6 and 7 are materials and
architecture on purpose. An AI-generated photograph of a workshop floor, placed
on the page whose entire argument is that the sourcing relationships are real and
direct, converts your strongest claim into your only fabricated one. The
manufacturers will send real photos for free if asked.

**Do not use these on Amazon listings.** Amazon requires the main listing image
to be an actual photograph of the actual product on pure white, and has its own
policies on AI-generated content. These are site and social assets only.
