import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, Phone, CreditCard, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ratibaHero from '@/assets/ratiba-hero.png';
import ratibaSteps from '@/assets/ratiba-steps.png';
import ratibaSavings from '@/assets/ratiba-savings.png';

const Ratiba = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={ratibaHero}
      alt="Ratiba Savings Hero" 
      className="w-full h-full object-cover brightness-90"
    />
    {/* Stronger Dark Overlay */}
    <div className="absolute inset-0 bg-black/20" />
  </div>
</section>


      {/* Key Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Affordable Daily Savings</h3>
              <p className="text-sm text-muted-foreground">Start with just 10 shillings per day</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Easy M-PESA Integration</h3>
              <p className="text-sm text-muted-foreground">Automatic transfers through M-PESA</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Watch Your Savings Grow</h3>
              <p className="text-sm text-muted-foreground">Build wealth consistently every day</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-12 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src={ratibaSteps}
                alt="How to Register for Ratiba" 
                 className="rounded-lg shadow-md w-3/4 mx-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">
                How to Register
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Getting started with Ratiba is simple. Follow these easy steps:
              </p>
              
              <Card className="bg-white shadow-sm mb-4">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Dial USSD Code</h3>
                      <p className="text-sm text-muted-foreground">
                        Dial <span className="font-bold text-primary">*334#</span> on your phone
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm mb-4">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Select Option</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose <span className="font-bold text-primary">option 9</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Complete Setup</h3>
                      <p className="text-sm text-muted-foreground">
                        To opt in, select <span className="font-bold text-primary">"0"</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">
                Payment Details
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Use these details to make your Ratiba deposits via M-PESA
              </p>

              <Card className="bg-gradient-primary text-white shadow-md mb-4">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CreditCard className="w-6 h-6" />
                    <h3 className="text-xl font-bold">M-PESA Paybill</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-xs text-white/80 mb-1">Paybill Number</p>
                      <p className="text-2xl font-bold">239427</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-xs text-white/80 mb-1">Account Number</p>
                      <p className="text-xl font-bold">Your ID Number</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-success" />
                  Important Notes
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span>Use your ID Number as the account number</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span>Minimum deposit is 10/= per day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span>Automatic daily transfers through M-PESA Ratiba</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span>Build your savings consistently and effortlessly</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img 
               src={ratibaSavings}
                alt="Ratiba Savings Success" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-base mb-6">
            Join thousands of members building their financial future with Ratiba
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/membership">
              <Button size="lg" variant="gold" className="text-base px-6">
                Become a Member
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-6 border-white text-blue-900 hover:bg-white hover:text-primary">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ratiba;

