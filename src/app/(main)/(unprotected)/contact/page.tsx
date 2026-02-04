import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/features/contact/components/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "1-800-9999",
    subtext: "Mon-Fri, 8am-8pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "support@railway.com",
    subtext: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Station Plaza",
    subtext: "Jakarta",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "24/7 Online Support",
    subtext: "Always here to help",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help you with your
          travel plans.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="text-center bg-bg-primary/90 text-white"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground">{info.details}</p>
                  <p className="text-sm text-muted-foreground">
                    {info.subtext}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Card className="bg-bg-primary/90 text-primary">
            <CardHeader>
              <CardTitle className="text-lg">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">How do I cancel my booking?</h4>
                <p className="text-sm text-muted-foreground">
                  Log into your account and go to "My Bookings".
                </p>
              </div>
              <div>
                <h4 className="font-medium">What's your refund policy?</h4>
                <p className="text-sm text-muted-foreground">
                  Full refunds available up to 24 hours before departure.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Can I change my travel date?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, up to 2 hours before departure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
