import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import railwayLogo from "@/assets/railway-logo.png";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make train travel the preferred choice for millions by offering reliable, affordable, and sustainable transportation.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every decision we make starts with our passengers. Your comfort and satisfaction drive everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every journey, from booking to arrival, ensuring a seamless travel experience.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description:
      "Committed to reducing carbon footprints, we're building a greener future one train ride at a time.",
  },
];

const stats = [
  { value: "50M+", label: "Passengers Yearly" },
  { value: "500+", label: "Destinations" },
  { value: "99.2%", label: "On-Time Rate" },
  { value: "25+", label: "Years of Service" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-linear-to-b from-bg-primary/50 to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={"/assets/railway-logo.png"}
              alt="RailWay Logo"
              className="h-20 w-20 rounded-2xl object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About RailWay
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Since 2001, we've been connecting communities and creating memorable
            journeys across the nation. Discover the story behind your favorite
            rail service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border bg-bg-primary text-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2001, RailWay began with a simple vision: to
                transform how people travel between cities. What started as a
                small regional service has grown into one of the nation's most
                trusted rail networks.
              </p>
              <p>
                Over the past two decades, we've invested heavily in modernizing
                our fleet, expanding our routes, and enhancing the passenger
                experience. Today, we operate over 200 daily services connecting
                more than 500 destinations.
              </p>
              <p>
                But our success isn't measured just in numbers. It's in the
                family reunions we enable, the business opportunities we
                connect, and the environmental impact we help reduce. Every
                journey matters, and we're honored to be part of yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-bg-primary/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-primary">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-primary">
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-bg-primary text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join our team.
            Together, we can shape the future of rail travel.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
