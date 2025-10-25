import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Users, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  DollarSign,
  FileText,
  Clock,
  Award,
  Download,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Membership = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send this to your backend
    toast({
      title: "Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
    setCallbackForm({ name: '', phone: '', email: '' });
  };

  const handleDownloadForm = () => {
    navigate('/membership-form');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Join Laika SACCO
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Become part of Kenya's most trusted financial cooperative and start your journey to financial prosperity
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the exclusive advantages of being a Laika SACCO member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">High Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Earn up to 10% annual dividends on your savings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Easy Loans</h3>
                <p className="text-sm text-muted-foreground">
                  Access loans up to 3x your savings with competitive rates
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Regulated & Transparent</h3>
                <p className="text-sm text-muted-foreground">
                 Your deposits are handled under strict financial standards and transparency policies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Exclusive Services</h3>
                <p className="text-sm text-muted-foreground">
                  Priority banking and personalized financial advisory
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">
                Eligibility Requirements
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Age Requirement</h3>
                    <p className="text-muted-foreground">Must be 18 years or older with valid identification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Income Source</h3>
                    <p className="text-muted-foreground">Proof of regular income or business activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Initial Deposit</h3>
                    <p className="text-muted-foreground">Minimum KES 1,000 to open your account</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Documentation</h3>
                    <p className="text-muted-foreground">Valid ID, passport photos, and proof of residence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <Users className="w-12 h-12 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-primary">1800+</div>
                  <p className="text-sm text-muted-foreground">Happy Members</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <DollarSign className="w-12 h-12 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-primary">KES 66M</div>
                  <p className="text-sm text-muted-foreground">Total Assets</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <Clock className="w-12 h-12 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-primary">24 Hrs</div>
                  <p className="text-sm text-muted-foreground">Approval Time</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <FileText className="w-12 h-12 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Digital Process</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              How to Apply for Membership
            </h2>
            <p className="text-lg text-muted-foreground">
              Three easy ways to start your membership journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Option 1: Download Form */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Download Application Form
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Download, print, and fill out our membership form at your convenience
                  </p>
                  <Button 
                    onClick={handleDownloadForm}
                    variant="premium" 
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Form
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Option 2: Visit Office */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300 border-2 border-gold">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Visit Our Office
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Come to our office and our team will assist you with the application process
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-primary">Laika SACCO Plaza</p>
                    <p>Kenyatta Avenue, Nairobi</p>
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Option 3: Request Callback */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Request a Callback
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Leave your details and our team will contact you within 24 hours
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Callback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Callback Form */}
          <Card id="callback-form" className="max-w-2xl mx-auto shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Request a Callback
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Fill in your details and we'll get back to you
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCallbackSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="callback-phone">Phone Number *</Label>
                  <Input
                    id="callback-phone"
                    value={callbackForm.phone}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    placeholder="+254 712 345 678"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="callback-email">Email Address *</Label>
                  <Input
                    id="callback-email"
                    type="email"
                    value={callbackForm.email}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full">
                  Request Callback
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary">Call Us</p>
                <p className="text-muted-foreground">+254 795 900 483
                 <br />+254 700 335 065</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary">Email Us</p>
                <p className="text-muted-foreground">Laikasaccosociety@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary">Visit Us</p>
                <p className="text-muted-foreground">Amani House, 2nd Floor
Kenyatta Highway – Mukiriti Thika, Kenya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-br from-secondary to-card-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Next Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              What happens after you submit your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Application Review</h3>
                <p className="text-muted-foreground">
                  Our team will review your application within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Document Verification</h3>
                <p className="text-muted-foreground">
                  Submit required documents for identity and income verification
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Account Activation</h3>
                <p className="text-muted-foreground">
                  Your account will be activated and you'll receive welcome materials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;