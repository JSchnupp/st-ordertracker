import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Star Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/star-background.png.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)',
        }}
      />
      
      <div className="relative w-[calc(100vw-48px)] h-[calc(100vh-48px)] z-10">
        <Image
          src="/landing-page.png"
          alt="Jay's Sincerely Theirs Tracker Landing Page"
          fill
          priority
          unoptimized
          className="object-contain"
          quality={100}
          sizes="calc(100vw - 48px)"
          style={{
            imageRendering: 'auto',
          }}
        />
        
        {/* Clickable Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* ORDERS Button - Left */}
          <a
            href="/orders"
            className="absolute left-[15%] top-[50%] -translate-y-1/2 pointer-events-auto cursor-pointer group"
            style={{
              width: 'clamp(140px, 18vw, 240px)',
              height: 'clamp(140px, 18vw, 240px)',
            }}
          >
            <div className="relative w-full h-full rounded-xl"></div>
          </a>

          {/* FANDOMS Button - Right */}
          <a
            href="/fandoms"
            className="absolute right-[15%] top-[50%] -translate-y-1/2 pointer-events-auto cursor-pointer group"
            style={{
              width: 'clamp(140px, 18vw, 240px)',
              height: 'clamp(140px, 18vw, 240px)',
            }}
          >
            <div className="relative w-full h-full rounded-xl"></div>
          </a>

          {/* STATS Button - Bottom Center */}
          <a
            href="/stats"
            className="absolute bottom-[20%] left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer group"
            style={{
              width: 'clamp(140px, 18vw, 240px)',
              height: 'clamp(140px, 18vw, 240px)',
            }}
          >
            <div className="relative w-full h-full rounded-xl"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
