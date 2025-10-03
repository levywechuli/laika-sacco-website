import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PiggyBank, 
  CreditCard, 
  Building2, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  Clock,
  Percent,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Products & Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your personal and business needs
          </p>
        </div>
      </section>

      {/* Important Banking Information */}
      <section className="py-8 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-2">💰 DEPOSITS PAYMENT</h3>
              <p className="text-white font-medium">
                <strong>Use Business No: 239427</strong><br />
                <strong>Membership No: as Account No</strong><br />
                for deposits payment
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-2">🚀 INSTANT LOANS</h3>
              <p className="text-white font-medium">
                <strong>Loan available on short code *483*66#</strong><br />
                Enter amount and follow prompts to complete
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Savings Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Grow your wealth with our competitive savings accounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Ratiba - New Product */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-2 border-gold">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Ratiba</CardTitle>
                <Badge variant="outline" className="mx-auto border-gold text-gold">New!</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">10/=</div>
                  <p className="text-sm text-muted-foreground">Per Day</p>
                </div>
                <p className="text-center text-primary font-medium mb-4">
                  Saving mode made easy with M-PESA Ratiba as little as 10/= per day
                </p>
                <div className="space-y-3 text-sm">
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">How to Register:</p>
                    <p className="text-muted-foreground">*334#, option 9, to pt in select "0"</p>
                  </div>
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Payment Details:</p>
                    <p className="text-muted-foreground">
                      <strong>Paybill No:</strong> 239427<br />
                      <strong>Account No:</strong> ID No
                    </p>
                  </div>
                </div>
                <Link to="/ratiba">
                  <Button className="w-full mt-6" variant="gold">
                    Start Ratiba Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Share Capital</CardTitle>
                <Badge variant="secondary" className="mx-auto">Required</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">300</div>
                  <p className="text-sm text-muted-foreground">Minimum Shares</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">At least 300 shares of Kshs.20/= each</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Not refundable or assignable as collateral</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Transferable to other members upon exit</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="default">
                    Join Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Deposits</CardTitle>
                <Badge variant="outline" className="mx-auto border-gold text-gold">Collateral</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">1,500</div>
                  <p className="text-sm text-muted-foreground">Minimum Monthly (KES)</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Through Check off system/Mpesa or Cash</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Can be used as collateral for loans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Refundable after 60 days upon exit</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="gold">
                    Start Saving
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Withdrawable Deposits - JIBEBE</CardTitle>
                <Badge variant="secondary" className="mx-auto">Flexible</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">5%</div>
                  <p className="text-sm text-muted-foreground">Annual Interest</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Save and withdraw at the end of twelve months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Earns interest of 5%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Flexible savings option</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="outline">
                    Open Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Junior Account/Mtoto Mpendwa</CardTitle>
                <Badge variant="secondary" className="mx-auto">For Children</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">5%</div>
                  <p className="text-sm text-muted-foreground">Annual Interest</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">For children who have not reached majority age</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Parents can save for their children</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Earns 5% interest</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="outline">
                    Open Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Loan Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible financing solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Development Loans */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Development Loans</CardTitle>
                    <p className="text-sm text-muted-foreground">Build your future</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">48</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">3 times your deposit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Reducing balance interest</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Four guarantors required</span>
                  </li>
                </ul>
                <Link to="/loan-application/development">
                  <Button className="w-full" variant="premium">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Emergency Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Emergency Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Urgent financial help</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1.75%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">12</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">24-hour processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Fixed interest rate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">For urgent occurrences</span>
                  </li>
                </ul>
                <Link to="/loan-application/emergency">
                  <Button className="w-full" variant="gold">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* School Fee Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">School Fee Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Education financing</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">12</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">3 times member's deposits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Reducing balance interest</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Alongside other loans</span>
                  </li>
                </ul>
                <Link to="/loan-application/school-fee">
                  <Button className="w-full" variant="premium">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Instant Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Instant Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Quick cash via M-PESA</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">2%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">12</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Processed as you wait</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Paid through M-PESA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Interest paid upfront</span>
                  </li>
                </ul>
                <Link to="/loan-application/instant">
                  <Button className="w-full" variant="gold">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Okoa Siku Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Okoa Siku Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Short-term rescue</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">10%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">2</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Processed as you wait</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Paid through M-PESA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Interest paid upfront</span>
                  </li>
                </ul>
                <Link to="/loan-application/okoa-siku">
                  <Button className="w-full" variant="premium">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Holiday Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Holiday Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Enjoy your holidays</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">10%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">3</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Processed as you wait</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Paid through M-PESA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Interest paid upfront</span>
                  </li>
                </ul>
                <Link to="/loan-application/holiday">
                  <Button className="w-full" variant="gold">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Karibu Loan */}
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Karibu Loan</CardTitle>
                    <p className="text-sm text-muted-foreground">Welcome new members</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1.5%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">12</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">For new check off members</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">48-hour processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">1/3 retained as deposits</span>
                  </li>
                </ul>
                <Link to="/loan-application/karibu">
                  <Button className="w-full" variant="premium">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              More ways we can help you achieve your financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Insurance Services</h3>
                <p className="text-sm text-muted-foreground">
                  Life, health, and property insurance through trusted partners
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Investment Advisory</h3>
                <p className="text-sm text-muted-foreground">
                  Professional guidance for your investment portfolio
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">ATM Cards</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 access to your funds through our extensive ATM network
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Treasury Services</h3>
                <p className="text-sm text-muted-foreground">
                  Foreign exchange and treasury management services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;