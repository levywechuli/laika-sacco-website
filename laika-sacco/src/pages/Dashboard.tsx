import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PiggyBank, TrendingUp, Wallet, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import holidayLoanImg from '@/assets/promo-holiday-loan.jpg';
import dividendsImg from '@/assets/promo-dividends.jpg';
import ratibaImg from '@/assets/promo-ratiba.jpg';

const Dashboard = () => {
  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch real data
  useEffect(() => {
    const fetchMemberDashboard = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard/member`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error('Failed to fetch member dashboard');
        const data = await res.json();
        setMember(data);
      } catch (err) {
        console.error(err);
        setError('Could not load your dashboard. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberDashboard();
  }, []);

  // Loading & error handling
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2">Loading your dashboard...</span>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <AlertCircle className="w-5 h-5 mr-2" />
        {error || 'Unable to load data'}
      </div>
    );
  }

  // Map backend data to UI variables
  const savingsProducts = member?.savingsSummary?.map((s: any, index: number) => ({
    name: s.name,
    balance: s.amount,
    icon: [PiggyBank, TrendingUp, Wallet][index % 3], // rotate icons
    color: ['text-primary', 'text-gold', 'text-accent'][index % 3],
    bgColor: ['bg-primary/10', 'bg-gold/10', 'bg-accent/10'][index % 3],
  })) || [];

  const loanProducts = member?.loans || [];

  const announcements = [
    {
      title: 'Holiday Loan Available!',
      description: 'Apply for our special holiday loan with reduced interest rates.',
      link: '/loan-application/holiday',
      image: holidayLoanImg,
    },
    {
      title: 'Earn Higher Dividends',
      description: 'Fixed deposits now offering 12% annual returns.',
      link: '/products',
      image: dividendsImg,
    },
    {
      title: 'Ratiba - Save as Little as 10/= Per Day',
      description: 'Join our new Ratiba savings program. Automated M-PESA savings made easy.',
      link: '/ratiba',
      image: ratibaImg,
    },
  ];

  const totalSavings = member?.totalSavings || 0;
  const totalLoanBalance = member?.totalLoanBalance || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-card-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-serif text-primary mb-2">
            Welcome Back, {member?.memberName}
          </h1>
          <p className="text-muted-foreground">
            Membership No: {member?.membershipNumber}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-premium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Savings</p>
                  <p className="text-3xl font-bold text-primary">
                    KES {totalSavings.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-premium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Loan Balance</p>
                  <p className="text-3xl font-bold text-primary">
                    KES {totalLoanBalance.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-gold" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-serif text-primary mb-4">Savings Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savingsProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.name}
                  className="shadow-card hover:shadow-premium transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <div
                        className={`w-10 h-10 ${product.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-5 h-5 ${product.color}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-2">
                      KES {product.balance.toLocaleString()}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span className="mr-1">View details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Loan Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-serif text-primary mb-4">Loan Products</h2>
          <Card className="shadow-premium">
            <CardContent className="p-6">
              <div className="space-y-4">
                {loanProducts.map((loan: any) => {
                  const progress = loan.limit > 0 ? (loan.balance / loan.limit) * 100 : 0;
                  return (
                    <div
                      key={loan.name}
                      className="border-b border-border last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-primary">{loan.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Balance: KES {loan.balance.toLocaleString()} / Limit: KES{' '}
                            {loan.limit.toLocaleString()}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            loan.status === 'Active'
                              ? 'bg-gold/20 text-gold'
                              : 'bg-primary/20 text-primary'
                          }`}
                        >
                          {loan.status}
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link to="/products">
                  <Button variant="premium" className="w-full">
                    Apply for New Loan
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-primary mb-4">
            Announcements & Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <Card
                key={announcement.title}
                className="shadow-card hover:shadow-premium transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <CardTitle className="text-white text-lg drop-shadow-lg">
                      {announcement.title}
                    </CardTitle>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    {announcement.description}
                  </p>
                  <Link to={announcement.link}>
                    <Button variant="premium" size="sm" className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



