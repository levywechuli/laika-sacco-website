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
            Building financial futures together since 1997. Discover our journey, 
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
                 Laika SACCO Society Ltd began its journey on 9 July 1997, originally registered
                  as Chania Nursing Home SACCO to serve employees at Del Monte Kenya, the Chania Nursing Home,
                  and closely related organizations in the informal sector. Over time, as membership expanded 
                  beyond these groups, the society rebranded to Laika SACCO Society Ltd in September 2014, 
                  reflecting its evolving identity and broader vision
                </p>
                <p>
                  Our name "Laika" means "to flourish" in Swahili, reflecting our core belief 
                  that financial services should help individuals and businesses thrive. We've 
                  consistently maintained our commitment to providing accessible, innovative, 
                  and member-focused financial solutions.
                </p>
                <p>
                  Today, we stand as a testament to the power of collective financial growth, 
                  and a track record of delivering 
                  consistent returns to our members.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">1600+</div>
                  <p className="text-muted-foreground">Members</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">18%+ Annual Growth</div>
                  <p className="text-muted-foreground">Percentage Growth</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">28</div>
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
                  to improve living standards of members through provision of 
                  high quality financial products at affordable rates.
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
                  To be the leading SACCO in the region, recognized for excellence in 
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
                    <li>• <strong>Tranparency:</strong> Open communication and clear operations</li>
                    <li>• <strong>Honesty:</strong> Truthful and sincere service</li>
                    <li>• <strong>Efficiency: </strong> Fast and reliable service</li>
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
                <h4 className="text-xl font-semibold text-primary">Mary Nabwire Obayi</h4>
                <p className="text-gold font-medium">Managing Director</p>
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
                <h4 className="text-xl font-semibold text-primary">Jacob Lesirma</h4>
                <p className="text-gold font-medium">Chairman</p>
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
                <h4 className="text-xl font-semibold text-primary">Joseph Mwanzia</h4>
                <p className="text-gold font-medium">Vice Chairman</p>
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