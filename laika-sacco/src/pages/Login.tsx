import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeOff, Smartphone, CreditCard, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    memberNumber: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-card-elevated flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold font-serif text-primary">
            Member Login
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Access your Laika SACCO account securely
          </p>
        </div>

        {/* Login Form */}
        <Card className="shadow-premium">
          <CardHeader>
            <CardTitle className="text-xl text-primary text-center">
              Welcome Back
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="memberNumber">Member Number</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="memberNumber"
                    type="text"
                    value={loginData.memberNumber}
                    onChange={(e) => handleInputChange('memberNumber', e.target.value)}
                    className="pl-10"
                    placeholder="Enter your member number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-5 w-5 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <button type="button" className="text-sm text-gold hover:text-gold-dark">
                  Forgot password?
                </button>
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">Alternative Login</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <Smartphone className="w-4 h-4 mr-2" />
                  SMS Login
                </Button>
                <Button variant="outline" className="w-full">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Card PIN
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Not a member yet?{' '}
                <Link to="/membership" className="text-gold hover:text-gold-dark font-medium">
                  Join Laika SACCO
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="bg-gradient-to-r from-primary/5 to-gold/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-primary">Security Notice</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Never share your login details. Always log out when using public computers.
                  Our support team will never ask for your password.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Need help?</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/contact" className="text-gold hover:text-gold-dark">
              Contact Support
            </Link>
            <span className="text-muted-foreground">•</span>
            <button className="text-gold hover:text-gold-dark">
              User Guide
            </button>
            <span className="text-muted-foreground">•</span>
            <button className="text-gold hover:text-gold-dark">
              FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;