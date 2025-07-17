import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Target, Heart, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            About Laika SACCO
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building financial futures together since 2010. Discover our journey, 
            mission, and commitment to empowering our members.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2010, Laika SACCO Society Limited emerged from a vision to create 
                  a financial institution that truly serves the Kenyan community. What started 
                  as a small cooperative with 100 members has grown into one of Kenya's most 
                  trusted SACCOs, serving over 50,000 members nationwide.
                </p>
                <p>
                  Our name "Laika" means "to flourish" in Swahili, reflecting our core belief 
                  that financial services should help individuals and businesses thrive. We've 
                  consistently maintained our commitment to providing accessible, innovative, 
                  and member-focused financial solutions.
                </p>
                <p>
                  Today, we stand as a testament to the power of collective financial growth, 
                  with assets worth over KES 15 billion and a track record of delivering 
                  consistent returns to our members.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <p className="text-muted-foreground">Active Members</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">KES 15B</div>
                  <p className="text-muted-foreground">Total Assets</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">14</div>
                  <p className="text-muted-foreground">Years of Service</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">12%</div>
                  <p className="text-muted-foreground">Annual Dividend</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, innovative, and trustworthy financial services that 
                  empower our members to achieve their personal and business aspirations while 
                  fostering economic growth in Kenya.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading SACCO in East Africa, recognized for excellence in 
                  financial services, member satisfaction, and contribution to sustainable 
                  economic development.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary">Our Values</h3>
                <div className="text-muted-foreground text-left">
                  <ul className="space-y-2">
                    <li>• <strong>Integrity:</strong> Honest and transparent dealings</li>
                    <li>• <strong>Excellence:</strong> Delivering superior service</li>
                    <li>• <strong>Innovation:</strong> Embracing modern solutions</li>
                    <li>• <strong>Member-First:</strong> Your success is our priority</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals guiding Laika SACCO towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Dr. James Kimani</h4>
                <p className="text-gold font-medium">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground">
                  20+ years in financial services with expertise in cooperative development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Mary Wanjiku</h4>
                <p className="text-gold font-medium">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground">
                  CPA with 15 years experience in SACCO financial management
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-premium transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Peter Ochieng</h4>
                <p className="text-gold font-medium">Head of Operations</p>
                <p className="text-sm text-muted-foreground">
                  Expert in operational excellence and member service delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-br from-secondary to-card-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-4">
                <Award className="w-12 h-12 text-gold mx-auto" />
                <h4 className="font-semibold text-primary">Best SACCO 2023</h4>
                <p className="text-sm text-muted-foreground">Kenya Cooperative Awards</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-4">
                <Shield className="w-12 h-12 text-gold mx-auto" />
                <h4 className="font-semibold text-primary">Excellence in Governance</h4>
                <p className="text-sm text-muted-foreground">SASRA Recognition 2022</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-4">
                <Users className="w-12 h-12 text-gold mx-auto" />
                <h4 className="font-semibold text-primary">Member Satisfaction</h4>
                <p className="text-sm text-muted-foreground">Top 5 SACCOs 2023</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-4">
                <TrendingUp className="w-12 h-12 text-gold mx-auto" />
                <h4 className="font-semibold text-primary">Financial Performance</h4>
                <p className="text-sm text-muted-foreground">Industry Leader 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;