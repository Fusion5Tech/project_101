import heroImage from '@/assets/hero-image.jpg';
import WavePattern from './WavePattern';
import ColorfulAccents from './ColorfulAccents';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <ColorfulAccents />
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional HR consultancy" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-in">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            HR HAVEN
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            CONSULTANCY
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium italic">
            "Leaving Remarkable Strides"
          </p>
        </div>

        {/* Main promotional message */}
        <div className="mb-16 relative">
          <div className="bg-orange/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-2xl md:text-3xl font-script text-foreground leading-relaxed mb-6">
              HR policies and Contracts giving you stress?
            </p>
            <p className="text-xl md:text-2xl font-script text-primary mb-4">
              Leave it to the experts.
            </p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-lg md:text-xl font-script text-foreground">
                We draft, review, and guide.
              </p>
              <span className="text-3xl animate-float">💻</span>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border shadow-lg animate-pulse-glow">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <div className="space-y-3 text-lg md:text-xl">
            <p className="text-muted-foreground">
              For more info kindly call{' '}
              <a 
                href="tel:0777698423" 
                className="text-primary font-semibold hover:text-orange transition-colors duration-200"
              >
                0777698423
              </a>
            </p>
            <p className="text-muted-foreground">
              or email us on{' '}
              <a 
                href="mailto:hrhaven@gmail.com" 
                className="text-primary font-semibold hover:text-orange transition-colors duration-200"
              >
                hrhaven@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <WavePattern />
    </section>
  );
};

export default HeroSection;