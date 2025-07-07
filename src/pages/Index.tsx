import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Brain, CheckSquare, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Post Analytics",
      description: "Deep insights into your post performance with AI-powered analytics that help you understand what content works best for your audience."
    },
    {
      icon: TrendingUp,
      title: "Trending Audio Discovery",
      description: "Stay ahead of trends with our AI that identifies viral sounds and music before they peak, giving your content the edge it needs."
    },
    {
      icon: Brain,
      title: "AI Insights & Recommendations",
      description: "Get personalized content suggestions, optimal posting times, and strategic recommendations tailored to your business goals."
    },
    {
      icon: CheckSquare,
      title: "Smart Marketing Checklists",
      description: "Never miss important tasks with AI-generated to-do lists that adapt to your posting schedule and marketing campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Marketing
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Take Your 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Small Business</span> 
                  {" "}to the Next Level
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Postful uses AI automation and social media trend analysis to help small businesses create winning marketing strategies and grow their audience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <Link to="/waitlist">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Mobile First</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Small Business Focused</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Postful mobile app interface showing analytics and AI insights" 
                className="w-full rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need to 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform provides all the tools small businesses need to create engaging content, understand their audience, and grow their social media presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Social Media Marketing?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of small businesses already on our waitlist. Be the first to access Postful when we launch.
            </p>
            
            <div className="space-y-6">
              <Button variant="hero" size="lg" className="text-lg px-12" asChild>
                <Link to="/waitlist">
                  Join the Waitlist Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Early access when we launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Exclusive beta features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Special launch pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Postful</span>
            </div>
            
            <p className="text-muted-foreground text-center md:text-right">
              AI-powered social media marketing for small businesses.
              <br />
              © 2024 Postful. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;