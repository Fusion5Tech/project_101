import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HR HAVEN CONSULTANCY</h3>
            <p className="text-primary-foreground/80 mb-4 italic">
              "Leaving Remarkable Strides"
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your trusted partner for comprehensive HR solutions, policy development, 
              and contract management.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>HR Policy Development</li>
              <li>Contract Drafting & Review</li>
              <li>Employment Law Guidance</li>
              <li>HR Compliance Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:0777698423" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  0777698423
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:hrhaven@gmail.com" 
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  hrhaven@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2025 HR Haven Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;