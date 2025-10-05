import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const email = "info@vibhainnovation.com"; // Replace with actual email
  const phone = "+91 98765 43210"; // Replace with actual phone
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in your gifting services.")}`;

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create memorable moments? We're here to help you find the perfect gift
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Phone</h3>
                  <a href={`tel:${phone}`} className="font-inter text-muted-foreground hover:text-primary transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Email</h3>
                  <a href={`mailto:${email}`} className="font-inter text-muted-foreground hover:text-accent transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="font-inter text-muted-foreground">
                    123 Gift Street, Innovation Plaza<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] h-full flex flex-col justify-center">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground">
              Let's Create Something Special
            </h3>
            <p className="font-inter text-muted-foreground mb-8 leading-relaxed">
              Whether you need corporate gifts, party favors, or personalized presents, 
              we're ready to bring your vision to life. Reach out today and let's make 
              your gifting experience unforgettable!
            </p>
            
            <div className="space-y-4">
              <Button 
                className="w-full font-inter text-lg py-6 rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </Button>
              
              <Button 
                variant="outline"
                className="w-full font-inter text-lg py-6 rounded-full border-2 hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.location.href = `mailto:${email}`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-card rounded-2xl p-4 shadow-[var(--shadow-soft)] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571178107!2d72.71637363282244!3d19.08219783961835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Vibha Innovation Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
