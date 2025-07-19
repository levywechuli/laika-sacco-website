import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  CreditCard, 
  PiggyBank, 
  Building2,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Laika SACCO - Professional Financial Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6">
            Your Financial
            <span className="text-gold block">Success Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Experience premium financial services with Laika SACCO. We empower Kenyan businesses 
            and individuals through innovative savings, competitive loans, and investment solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/membership">
              <Button variant="gold" size="xl" className="text-lg">
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline-gold" size="xl" className="text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif text-primary mb-6">
            Empowering Financial Dreams Since 1997
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Laika SACCO Society Limited, we believe in the power of collective financial growth. 
            Our mission is to provide accessible, innovative, and trustworthy financial services that 
            enable our members to achieve their personal and business aspirations.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Why Choose Laika SACCO?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of banking with Kenya's most trusted SACCO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Trusted & Secure</h3>
                <p className="text-muted-foreground">
                  Licensed and regulated by SASRA, ensuring your deposits are safe and secure
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Withdrawable savings (Jibebe Account)</h3>
                <p className="text-muted-foreground">
                interest ~2% per annum, paid at the end of a 12‑month savings cycle 
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Member-Focused</h3>
                <p className="text-muted-foreground">
                  Over 50,000 satisfied members enjoying personalized financial solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-secondary to-card-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Our Financial Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial products designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover:shadow-gold transition-all duration-300 group">
              <CardContent className="space-y-4">
                <PiggyBank className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-primary">Savings Accounts</h3>
                <p className="text-muted-foreground">
                  Flexible savings plans with competitive interest rates and easy access
                </p>
                <Link to="/products" className="inline-flex items-center text-gold font-medium group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-gold transition-all duration-300 group">
              <CardContent className="space-y-4">
                <CreditCard className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-primary">Quick Loans</h3>
                <p className="text-muted-foreground">
                  Fast loan processing with competitive rates for personal and business needs
                </p>
                <Link to="/products" className="inline-flex items-center text-gold font-medium group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-gold transition-all duration-300 group">
              <CardContent className="space-y-4">
                <Building2 className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-primary">Business Banking</h3>
                <p className="text-muted-foreground">
                  Comprehensive business accounts and financial solutions for growth
                </p>
                <Link to="/products" className="inline-flex items-center text-gold font-medium group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from satisfied SACCO members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Laika SACCO helped me start my business with their quick loan approval. 
                  The process was seamless and professional."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary">Sarah Wanjiku</p>
                  <p className="text-sm text-muted-foreground">Business Owner</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The best decision I made was joining Laika SACCO. 
                  My savings have grown significantly with their competitive rates."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary">John Mwangi</p>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Professional service and excellent customer support. 
                  Laika SACCO truly cares about their members' financial success."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary">Grace Achieng</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join thousands of satisfied members who have chosen Laika SACCO as their trusted financial partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/membership">
              <Button variant="gold" size="xl" className="text-lg">
                Join Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-gold" size="xl" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;