import { Gift } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <span className="font-playfair text-xl font-bold">Vibha Innovation</span>
            </div>
            <p className="font-inter text-sm text-background/70">
              Creating memorable moments through personalized and thoughtful gifting solutions for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 font-inter text-sm text-background/70">
              <li>Corporate Gifting</li>
              <li>Birthday Party Gifts</li>
              <li>Personalized Gifts</li>
              <li>Event Gifts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="font-inter text-sm text-background/70">
            © {currentYear} Vibha Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
