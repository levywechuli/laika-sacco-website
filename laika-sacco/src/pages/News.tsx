import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Laika SACCO Wins Best SACCO Award 2024",
      excerpt: "We're proud to announce that Laika SACCO has been awarded the Best SACCO of the Year 2024 by the Kenya Cooperative Awards.",
      category: "Awards",
      date: "2024-01-15",
      author: "Communications Team",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "New Mobile Banking App Now Available",
      excerpt: "Experience seamless banking with our new mobile app featuring enhanced security, instant transfers, and real-time notifications.",
      category: "Technology",
      date: "2024-01-10",
      author: "Tech Team",
      readTime: "2 min read",
      featured: true
    },
    {
      id: 3,
      title: "Annual Dividend Declaration - 12% Returns",
      excerpt: "Our members will receive a 12% dividend on their savings for the financial year 2023, the highest in our history.",
      category: "Financial",
      date: "2024-01-05",
      author: "Finance Department",
      readTime: "4 min read",
      featured: true
    },
    {
      id: 4,
      title: "Laika SACCO Expands to Western Kenya",
      excerpt: "We're opening new branches in Kisumu, Kakamega, and Bungoma to serve our growing member base in Western Kenya.",
      category: "Expansion",
      date: "2023-12-20",
      author: "Business Development",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 5,
      title: "Youth Entrepreneurship Program Launch",
      excerpt: "Special loan products and training programs designed specifically for young entrepreneurs aged 18-35.",
      category: "Programs",
      date: "2023-12-15",
      author: "Member Services",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 6,
      title: "Partnership with Kenya Women Finance Trust",
      excerpt: "Strategic partnership to provide enhanced financial services to women entrepreneurs across Kenya.",
      category: "Partnerships",
      date: "2023-12-01",
      author: "Partnerships Team",
      readTime: "3 min read",
      featured: false
    }
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed with the latest news, announcements, and updates from Laika SACCO
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Our latest and most important updates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <Card key={article.id} className={`shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-gold text-white">
                      {article.category}
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className={`text-primary hover:text-gold transition-colors cursor-pointer ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Recent Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              More news and announcements from Laika SACCO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <Card key={article.id} className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary hover:text-gold transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-premium p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-serif text-primary">
                Stay Updated
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss important updates, financial tips, 
                and exclusive member benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="premium" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-br from-secondary to-card-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">
              Laika SACCO in Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Our growth and impact in the financial sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-2">
                <Users className="w-8 h-8 text-gold mx-auto" />
                <div className="text-2xl font-bold text-primary">400+</div>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-2">
                <TrendingUp className="w-8 h-8 text-gold mx-auto" />
                <div className="text-2xl font-bold text-primary">18%+ Annual Growth</div>

                <p className="text-sm text-muted-foreground">Percentage Growth</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-2">
                <Award className="w-8 h-8 text-gold mx-auto" />
                <div className="text-2xl font-bold text-primary">12%</div>
                <p className="text-sm text-muted-foreground">Annual Dividend</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-card">
              <CardContent className="space-y-2">
                <Calendar className="w-8 h-8 text-gold mx-auto" />
                <div className="text-2xl font-bold text-primary">28</div>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;