import Link from "next/link";

export default function StatsPage() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black">
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
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black mb-8 text-white" style={{
          fontFamily: 'Arial Black, sans-serif',
          textShadow: '4px 4px 0px #000',
          letterSpacing: '3px',
        }}>
          STATS
        </h1>
        <p className="text-2xl text-white mb-8" style={{
          textShadow: '2px 2px 0px #000',
        }}>
          View your statistics here
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors"
          style={{
            textShadow: 'none',
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

