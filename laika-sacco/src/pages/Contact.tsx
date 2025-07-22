import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Building2,
  Navigation,
  HeadphonesIcon
} from 'lucide-react';
import customerService from '@/assets/customer-service.jpg';
import branchExteriorImage from '@/assets/branch-office.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with all your financial needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                Send Us a Message
              </h2>
              <Card className="shadow-premium">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Inquiry Category *</Label>
                        <Select onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="loans">Loan Information</SelectItem>
                            <SelectItem value="savings">Savings Accounts</SelectItem>
                            <SelectItem value="membership">Membership</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="premium" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information with Image */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Visit us, call us, or send us an email. Our team is ready to assist you 
                  with all your financial needs.
                </p>
              </div>

              {/* Customer Service Image */}
              <div className="relative overflow-hidden rounded-lg shadow-premium mb-8">
                <img 
                  src={customerService} 
                  alt="Professional customer service team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visit Our Office</h3>
                        <p className="text-muted-foreground">
                          Amani House, 2nd Floor<br />
                          Mukiriti, Thika<br />
                          P.O. Box 3900–01002<br />
                          Thika, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                        <p className="text-muted-foreground">
                          Main Line: +254 795 900 483<br />
                          Customer Care: +254 700 335 065<br />
                        
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          General:@Laikasaccosociety@gmail.com<br />
                          Support:@Laikasaccosociety@gmail.com<br />
                          Loans:@Laikasaccosociety@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Office Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Office Interior */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of Thika
            </p>
          </div>

          <Card className="shadow-premium overflow-hidden">
            <CardContent className="p-0">
              {/* Map Placeholder */}
              <div className="h-96 bg-gradient-to-br from-muted to-secondary flex items-center justify-center relative">
                <div className="text-center">
                  <Navigation className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground max-w-md">
                    Our office is located at Amani house  in Mukereti, easily accessible 
                    by public transport and with ample parking available.
                  </p>
                 <Button
                  variant="outline"
                  className="mt-4"
                  asChild>

                 <a
                   href="https://www.google.com/maps/dir/?api=1&destination=Amani+House+Kenyatta+Highway+Thika+Kenya"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Get Directions </a>
                 </Button>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Branch Network with Visual */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Our Branch Network
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit  our Head Quaters in Thika  for personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={branchExteriorImage} 
                alt="Laika SACCO Branch Exterior" 
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Modern Banking Facilities</h3>
                <p className="text-white/90">State-of-the-art branch with secure banking</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-8 h-8 text-gold" />
                    <CardTitle className="text-primary">Thika Branch</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Amani house ,2nd Floor<br />
                    Mukereti , Thika<br />
                    P.O Box 3900-01002 <br />
                    Thika, Kenya
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+254 700 335 065</span>
                  </div>
                  <p className="text-sm text-primary font-medium bg-gold/10 px-3 py-1 rounded-full inline-block">
                    Headquarters & Full Services
                  </p>
                  <div className="pt-4">
                   <Button
                      variant="outline"
                    className="w-full"
                      asChild >
                          
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Amani+House+Kenyatta+Highway+Thika+Kenya"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MapPin className="w-4 h-4 mr-2" />
    Get Directions
  </a>
</Button>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">
              24/7 Emergency Support
            </h2>
            <p className="text-xl text-white/90">
              We're here when you need us most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-center p-6">
              <CardContent className="space-y-4">
                <HeadphonesIcon className="w-12 h-12 text-gold mx-auto" />
                <h3 className="text-xl font-semibold">24/7 Hotline</h3>
                <p className="text-white/90">+254 700 LAIKA (52452)</p>
                <p className="text-sm text-white/80">For urgent banking assistance</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-center p-6">
              <CardContent className="space-y-4">
                <MessageSquare className="w-12 h-12 text-gold mx-auto" />
                <h3 className="text-xl font-semibold">WhatsApp Support</h3>
                <p className="text-white/90">+254 733 987 654</p>
                <p className="text-sm text-white/80">Quick help via WhatsApp</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-center p-6">
              <CardContent className="space-y-4">
                <Mail className="w-12 h-12 text-gold mx-auto" />
                <h3 className="text-xl font-semibold">Emergency Email</h3>
                <p className="text-white/90">emergency@laikasacco.co.ke</p>
                <p className="text-sm text-white/80">For critical issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;