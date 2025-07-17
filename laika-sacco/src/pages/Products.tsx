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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Regular Savings</CardTitle>
                <Badge variant="secondary" className="mx-auto">Most Popular</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">8.5%</div>
                  <p className="text-sm text-muted-foreground">Annual Interest</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Minimum deposit: KES 1,000</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Monthly contributions from KES 500</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Easy withdrawal access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Mobile banking enabled</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="default">
                    Open Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Fixed Deposit</CardTitle>
                <Badge variant="outline" className="mx-auto border-gold text-gold">High Yield</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">12%</div>
                  <p className="text-sm text-muted-foreground">Annual Interest</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Minimum deposit: KES 50,000</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Terms: 6, 12, 24 months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Guaranteed returns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Can be used as loan collateral</span>
                  </li>
                </ul>
                <Link to="/membership">
                  <Button className="w-full mt-6" variant="gold">
                    Open Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Junior Savings</CardTitle>
                <Badge variant="secondary" className="mx-auto">For Children</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">9%</div>
                  <p className="text-sm text-muted-foreground">Annual Interest</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">For children under 18</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">No minimum balance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Educational rewards program</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm">Financial literacy training</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Personal Loans</CardTitle>
                    <p className="text-sm text-muted-foreground">Quick personal financing</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1.5%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-bold">5M</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Max Amount</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">48</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Max Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">No collateral required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">24-hour approval</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Flexible repayment terms</span>
                  </li>
                </ul>
                <Button className="w-full" variant="premium">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Business Loans</CardTitle>
                    <p className="text-sm text-muted-foreground">Grow your business</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">1.2%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly Rate</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-bold">20M</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Max Amount</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gold">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold">60</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Max Months</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Business plan required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Competitive rates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span className="text-sm">Business advisory support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="gold">
                  Apply Now
                </Button>
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