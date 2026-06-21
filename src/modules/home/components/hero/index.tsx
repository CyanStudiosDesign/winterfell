import { Github } from "@medusajs/icons";
import { Button, Heading } from "@modules/common/components/ui";

const Hero = () => {
  return (
    <section className="w-full bg-[#fcfbfa] text-[#1a1a1a] font-sans antialiased">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        
        {/* Left Column: Typography & CTAs (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">
              Urbanic Clothing Co.
            </span>
            <Heading
              level="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-none"
            >
              WEAR YOUR <br />
              <span className="font-serif italic font-normal tracking-wide">STYLE</span>
            </Heading>
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-800 leading-none mt-2"
            >
              OWN YOUR <br />
              <span className="font-serif italic font-normal tracking-wide">CONFIDENCE</span>
            </Heading>
          </div>

          <p className="text-gray-500 max-w-sm text-sm sm:text-base leading-relaxed">
            Premium quality clothing crafted for comfort, designed for the modern man. 
            Powered by Medusa and Next.js.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a href="https://github.com/medusajs/dtc-starter" target="_blank" rel="noreferrer">
              <Button variant="primary" className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-none tracking-wide text-sm flex items-center gap-2">
                Shop Now <span className="text-xs">→</span>
              </Button>
            </a>
            <a href="https://github.com/medusajs/dtc-starter" target="_blank" rel="noreferrer">
              <Button variant="secondary" className="border border-gray-300 rounded-none px-6 py-3 text-sm flex items-center gap-2">
                View on GitHub <Github className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-100 max-w-xs">
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" />
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-bold text-gray-900 block">Trusted by 10K+</span> Happy Customers
            </div>
          </div>
        </div>

        {/* Middle Column: Asymmetric Main Image Showcase (5 Cols) */}
        <div className="lg:col-span-4 relative flex justify-center mt-8 lg:mt-0">
          {/* Background Abstract Angled Shape */}
          <div className="absolute top-4 left-12 w-72 h-[420px] bg-[#decbb7] transform skew-x-6 -z-0 opacity-60 rounded-sm hidden sm:block" />
          
          {/* Main Showcase Model */}
          <div className="relative z-10 w-full max-w-sm aspect-[3/4] overflow-hidden bg-gray-100 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" 
              alt="Featured Look" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Sparkle decorative icon element from design */}
          <div className="absolute -top-6 right-4 text-2xl animate-pulse">✦</div>
        </div>

        {/* Right Column: Floating Product Card Sidebar (3 Cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6 lg:space-y-0 lg:pl-4">
          {/* Mini product preview card */}
          <div className="bg-white border border-gray-100 p-4 shadow-sm flex flex-col space-y-3 max-w-xs mx-auto lg:ml-auto">
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80" 
                alt="New Arrival Overshirt" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase block font-medium">New Arrival</span>
              <h4 className="font-medium text-sm text-gray-900 mt-0.5">Linen Overshirt</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm font-semibold text-gray-700">$79.99</span>
                <span className="text-xs underline cursor-pointer text-gray-500 hover:text-black">Explore</span>
              </div>
            </div>
          </div>

          {/* Minimal social/navigation dots seen on right side of design */}
          <div className="hidden lg:flex justify-end gap-2 pt-12">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>

      </div>

      {/* Brand Ticker Bar (As requested from inspiration layout) */}
      <div className="w-full bg-[#111] text-white py-4 overflow-hidden transform -skew-y-1 origin-center shadow-lg my-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-xs sm:text-sm tracking-[0.2em] font-medium uppercase opacity-90 skew-y-1">
          <span>Zara</span>
          <span className="text-gray-600">•</span>
          <span>Mango</span>
          <span className="text-gray-600">•</span>
          <span className="font-serif italic lowercase tracking-normal text-base normal-case">h&m</span>
          <span className="text-gray-600">•</span>
          <span className="lowercase font-bold tracking-normal">asos</span>
          <span className="text-gray-600">•</span>
          <span>Pull&Bear</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;