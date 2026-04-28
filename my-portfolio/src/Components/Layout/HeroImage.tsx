export default function HeroImage() {
  return (
    <div className={classes.layer} aria-hidden="true">
      <div className={classes.imageWrap}>
        <div
          className={classes.image}
        />
      </div>
    </div>
  );
}

const classes = {
  // Container for the whole star + photo block
  layer: [
    // disables mouse interaction on this decorative layer
    'pointer-events-none',
    // use absolute positioning so the layer can be placed freely
    'absolute',
    // small downward push from the top
    'top-10',
    // shift left by 50% of its width (used with `left` to center)
    '-translate-x-1/2',
    // place the layer 45% from the left of the page
    "left-[45%]",
    // stacking order
    'z-10',
    // responsive height (60% of viewport width)
    'h-[60vw]',
    // cap height to small-viewport height
    'max-h-[100svh]',
    // responsive width (30% of viewport width)
    'w-[30vw]',
  ].join(' '),

  // Immediate positioning wrapper that fills `layer`
  imageWrap: [
    // positioned relative to the `layer` container
    'absolute',
    // inset-0 stretches the wrapper to fill the layer
    'inset-0',
  ].join(' '),

  // Visual element: shows the portrait and applies the star mask
  image: [
    // fill the wrapper
    'h-full',
    'w-full',
    // prevent accidental text selection
    'select-none',
    // rotate the whole element slightly for style
    'rotate-[-10deg]',
    // background settings for the portrait
    'bg-no-repeat',
    "bg-[url('/youngMe.png')]",
    // background-size controls zoom level of the photo
    'bg-[length:150%]',
    // mask image (webkit + standard) — clips the photo to the star
    "[-webkit-mask-image:url('/SS.png')]",
    "[mask-image:url('/SS.png')]",
    // don't tile the mask and center it
    '[mask-repeat:no-repeat]',
    '[mask-position:center]',
    // make the mask scale to fit the element (contain preserves aspect)
    '[-webkit-mask-size:contain]',
    '[mask-size:contain]',
  ].join(' '),
};