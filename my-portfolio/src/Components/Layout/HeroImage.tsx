import Image from "next/image";

export default function HeroImage() {
  return (
    <div className={classes.layer} aria-hidden="true">
      <div className={classes.imageWrap}>
        <Image
          src="/youngMe.png"
          alt=""
          fill
          priority
          className={classes.image}
        />
      </div>
    </div>
  );
}

const classes = {
  layer: `
    pointer-events-none
    absolute top-10 left-1/2 -translate-x-1/2
    z-20
    h-[100vw] max-h-[100svh] w-[50vw]
    overflow-hidden
  `,

  imageWrap: "absolute inset-0",
  image: "object-contain object-right-top select-none",
};