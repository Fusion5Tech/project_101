import { FileText, Search, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "HR Policy Drafting",
      description: "Comprehensive HR policies tailored to your organization's needs and industry standards."
    },
    {
      icon: Search,
      title: "Contract Review",
      description: "Thorough review and analysis of employment contracts to ensure compliance and protection."
    },
    {
      icon: Users,
      title: "HR Guidance",
      description: "Expert consultation and guidance on all HR matters, from recruitment to employee relations."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional HR solutions designed to streamline your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-orange/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-orange/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-orange" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;