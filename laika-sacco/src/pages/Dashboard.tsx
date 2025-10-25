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

  // Fetch member dashboard
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

        console.log('Fetched dashboard data:', data); // 👈 Debugging log

        // ✅ Ensure we store the correct member object
        const memberData = data.member || data;
        setMember(memberData);
      } catch (err) {
        console.error(err);
        setError('Could not load your dashboard. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberDashboard();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2">Loading your dashboard...</span>
      </div>
    );
  }

  // Error state
  if (error || !member) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <AlertCircle className="w-5 h-5 mr-2" />
        {error || 'Unable to load data'}
      </div>
    );
  }

  // ✅ Correctly extract user data
  const fullName =
    member?.fullName ||
    member?.fullname ||
    member?.memberName?.replace('undefined undefined', '').trim() ||
    'Member';
  const membershipNumber = member?.membershipNumber || 'N/A';

  const savingsProducts =
    member?.savingsSummary?.map((s: any, index: number) => ({
      name: s.name,
      balance: s.amount,
      icon: [PiggyBank, TrendingUp, Wallet][index % 3],
      color: ['text-primary', 'text-gold', 'text-accent'][index % 3],
      bgColor: ['bg-primary/10', 'bg-gold/10', 'bg-accent/10'][index % 3],
    })) || [];

  const loanProducts = member?.loans || [];
  const totalSavings = member?.totalSavings || 0;
  const totalLoanBalance = member?.totalLoanBalance || 0;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-card-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 👇 Updated Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-1">
              Welcome back, {fullName}
            </h1>
            <p className="text-muted-foreground">Member NO: {membershipNumber}</p>
          </div>
        </div>

        {/* 👇 Modern Blue Summary Card */}
        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-2xl shadow-xl p-10 text-white">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Total Savings */}
            <div>
              <h2 className="text-lg font-medium mb-2">Total Savings</h2>
              <p className="text-4xl font-bold mb-4">
                KES {totalSavings.toLocaleString()}
              </p>
              <div className="flex items-center text-sm text-blue-100">
                <span className="bg-blue-500/30 px-3 py-1 rounded-full mr-2">↑ +12.5%</span>
                vs last month
              </div>
            </div>

            {/* Total Loan Balance */}
            <div className="mt-8 md:mt-0 text-right">
              <h2 className="text-lg font-medium mb-2">Total Loan Balance</h2>
              <p className="text-4xl font-bold">
                KES {totalLoanBalance.toLocaleString()}
              </p>
            </div>
          </div>
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
      {(() => {
        // ✅ Define validLoans here safely before JSX rendering
        const validLoans = loanProducts.filter(
          (loan: any) => loan.limit > 0 || loan.balance > 0
        );

        return (
          <>
            {validLoans.length > 0 ? (
              // ✅ Show member’s real loans
              <div className="space-y-4">
                {validLoans.map((loan: any) => {
                  const progress =
                    loan.limit > 0 ? (loan.balance / loan.limit) * 100 : 0;
                  return (
                    <div
                      key={loan.name}
                      className="border-b border-border last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-primary">{loan.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Total paid: KES {loan.balance.toLocaleString()} Total Loan: KES{" "}
                            {loan.limit.toLocaleString()}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            loan.status === "Active"
                              ? "bg-gold/20 text-gold"
                              : "bg-primary/20 text-primary"
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
            ) : (
              // ✅ If no loans, show message
              <p className="text-sm text-muted-foreground text-center py-4">
                You currently have no active loans.
              </p>
            )}

            {/* ✅ Apply button always visible */}
            <div className="mt-6">
              <Link to="/products">
                <Button variant="premium" className="w-full">
                  Apply for New Loan
                </Button>
              </Link>
            </div>
          </>
        );
      })()}
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
