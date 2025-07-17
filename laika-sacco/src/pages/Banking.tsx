import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Smartphone, 
  Shield, 
  Download, 
  QrCode, 
  Banknote,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';

const Banking = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Online Banking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Bank anytime, anywhere with our secure online banking platform
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Mobile App</h3>
                <p className="text-muted-foreground">
                  Download our secure mobile banking app for iOS and Android
                </p>
                <Button variant="premium" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Secure Access</h3>
                <p className="text-muted-foreground">
                  Bank-grade security with multi-factor authentication
                </p>
                <Button variant="gold" className="w-full">
                  Security Features
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">24/7 Banking</h3>
                <p className="text-muted-foreground">
                  Access your accounts and make transactions anytime
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banking;