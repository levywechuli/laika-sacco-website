import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Laika SACCO</h3>
                <p className="text-sm text-primary-foreground/80">Society Limited</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Your trusted financial partner, empowering Kenyan businesses and individuals 
              through innovative savings, loans, and investment solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-gold transition-colors">Products & Services</Link></li>
              <li><Link to="/membership" className="text-primary-foreground/80 hover:text-gold transition-colors">Become a Member</Link></li>
              <li><Link to="/news" className="text-primary-foreground/80 hover:text-gold transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">+254 700 123 456</p>
                  <p className="text-primary-foreground/90">+254 733 987 654</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">info@laikasacco.co.ke</p>
                  <p className="text-primary-foreground/90">support@laikasacco.co.ke</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <p className="text-primary-foreground/90">
                  Laika Plaza, 3rd Floor<br />
                  Moi Avenue, Nairobi
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-primary-foreground/90">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Laika SACCO Society Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;