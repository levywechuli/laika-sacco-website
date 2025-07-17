import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckCircle, 
  Users, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  DollarSign,
  FileText,
  Clock,
  Award
} from 'lucide-react';

const Membership = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    occupation: '',
    employer: '',
    income: '',
    accountType: '',
    initialDeposit: '',
    comments: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
                  Earn up to 12% annual dividends on your savings
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
                <h3 className="text-lg font-semibold text-primary">Deposit Insurance</h3>
                <p className="text-sm text-muted-foreground">
                  Your deposits are protected and guaranteed by SASRA
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
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <p className="text-sm text-muted-foreground">Happy Members</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <DollarSign className="w-12 h-12 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-primary">KES 15B</div>
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

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Membership Application
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to start your membership application
            </p>
          </div>

          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Join Laika SACCO Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idNumber">National ID / Passport Number *</Label>
                  <Input
                    id="idNumber"
                    value={formData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    required
                  />
                </div>

                {/* Employment Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation *</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer">Employer / Business Name</Label>
                    <Input
                      id="employer"
                      value={formData.employer}
                      onChange={(e) => handleInputChange('employer', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="income">Monthly Income Range *</Label>
                  <Select onValueChange={(value) => handleInputChange('income', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-30k">Below KES 30,000</SelectItem>
                      <SelectItem value="30k-50k">KES 30,000 - 50,000</SelectItem>
                      <SelectItem value="50k-100k">KES 50,000 - 100,000</SelectItem>
                      <SelectItem value="100k-200k">KES 100,000 - 200,000</SelectItem>
                      <SelectItem value="above-200k">Above KES 200,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Account Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Preferred Account Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('accountType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Regular Savings</SelectItem>
                        <SelectItem value="fixed">Fixed Deposit</SelectItem>
                        <SelectItem value="business">Business Account</SelectItem>
                        <SelectItem value="junior">Junior Savings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="initialDeposit">Initial Deposit Amount (KES) *</Label>
                    <Input
                      id="initialDeposit"
                      type="number"
                      min="1000"
                      value={formData.initialDeposit}
                      onChange={(e) => handleInputChange('initialDeposit', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    rows={4}
                    placeholder="Any additional information or questions..."
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <Button type="submit" variant="premium" size="lg" className="w-full md:w-auto">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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