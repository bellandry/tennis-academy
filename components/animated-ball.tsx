import Image from "next/image";

function AnimatedBall() {
  return (
    <div className="pointer-events-none absolute right-[10%] top-1/3 hidden h-32 w-32 md:block">
      <Image
        src="/ball.png"
        alt="Balle de tennis décorative"
        width={200}
        height={200}
        className="absolute animate-float opacity-80"
      />
    </div>
  );
}

export default AnimatedBall;
