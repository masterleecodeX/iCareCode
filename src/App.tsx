import { BackgroundGrid } from "./components/BackgroundGrid";
import { HeroSection } from "./components/HeroSection";
import { FeaturesList } from "./components/FeaturesList";
import { DeploymentOptions } from "./components/DeploymentOptions";

export default function App() {
  return (
    <div className="min-h-screen bg-[#161616] text-zinc-200 font-sans font-normal p-6 md:p-12 flex justify-center selection:bg-zinc-800 selection:text-white overflow-x-hidden w-full relative">
      <BackgroundGrid />
      {/* SVG Filters for Texture */}
      <svg className="hidden">
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0"
              in="turbulence"
              result="coloredNoise"
            />
            <feComposite
              operator="in"
              in="coloredNoise"
              in2="SourceGraphic"
              result="composite"
            />
            <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <div className="w-full max-w-[680px] flex flex-col gap-8 pb-20 mt-4">
        <HeroSection />
        <FeaturesList />
        <DeploymentOptions />
      </div>
    </div>
  );
}
