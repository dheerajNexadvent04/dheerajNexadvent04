
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Package, Printer, ShieldCheck, Truck, ShoppingCart, ShoppingBag, Store, Building2, Factory, CheckCircle2, DollarSign, Clock, Award, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import LeadForm from '@/components/LeadForm.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const [counters, setCounters] = useState({
    clients: 0,
    products: 0,
    delivery: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        clients: 147,
        products: 50000,
        delivery: 98
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          clients: Math.floor(targets.clients * progress),
          products: Math.floor(targets.products * progress),
          delivery: Math.floor(targets.delivery * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('why-choose-us');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Print Pack, I\'m interested in corrugated packaging solutions');
    window.open(`https://wa.me/919667537637?text=${message}`, '_blank');
  };

  const products = [
    {
      icon: Package,
      title: 'Corrugated Boxes',
      description: 'High-quality corrugated boxes for all your shipping and storage needs. Durable and eco-friendly materials.',
      image: '/Corrugated%20Boxes.jpeg'
    },
    {
      icon: Printer,
      title: 'Custom Printed Boxes',
      description: 'Custom-designed boxes with your branding. Perfect for product packaging and marketing.',
      image: 'https://images.unsplash.com/photo-1688811363455-6fdd37f70710'
    },
    {
      icon: ShieldCheck,
      title: 'Heavy-Duty Packaging',
      description: 'Industrial-strength packaging solutions for heavy and fragile items. Maximum protection guaranteed.',
      image: 'https://images.unsplash.com/photo-1648476029943-301781dd76d4'
    },
    {
      icon: Truck,
      title: 'Bulk Packaging Supply',
      description: 'Large-scale bulk orders with competitive pricing. Reliable supply chain for growing businesses.',
      image: 'https://images.unsplash.com/photo-1632095342737-f676aad3fc0b'
    }
  ];

  const industries = [
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      description: 'Custom packaging for online retailers and delivery businesses',
      image: '/E-commerce.jpeg'
    },
    {
      icon: ShoppingBag,
      name: 'FMCG',
      description: 'Fast-moving consumer goods packaging with quick turnaround',
      image: '/FMCG.jpeg'
    },
    {
      icon: Store,
      name: 'Retail',
      description: 'Display-ready packaging for retail stores and supermarkets',
      image: '/retail.jpeg'
    },
    {
      icon: Building2,
      name: 'Logistics',
      description: 'Heavy-duty transport packaging for logistics companies',
      image: '/logistic.jpeg'
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industrial packaging solutions for manufacturing units',
      image: '/Manufacturing.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Malhotra',
      role: 'Operations Manager',
      company: 'Swift Logistics',
      testimonial: 'Print Pack has been our go-to supplier for three years. Their quality is consistent and delivery is always on time. Highly recommended for bulk orders.'
    },
    {
      name: 'Priya Sharma',
      role: 'Procurement Head',
      company: 'EcoMart Retail',
      testimonial: 'The custom printed boxes helped us build our brand identity. The team understood our requirements perfectly and delivered beyond expectations.'
    },
    {
      name: 'Vikram Singh',
      role: 'Founder',
      company: 'UrbanBox E-commerce',
      testimonial: 'Reliable partner for our e-commerce packaging needs. The boxes are sturdy, arrive on schedule, and the pricing is very competitive.'
    },
    {
      name: 'Neha Gupta',
      role: 'Supply Chain Director',
      company: 'FreshFoods FMCG',
      testimonial: 'Professional service and excellent quality packaging. Print Pack handles our large volume orders efficiently without compromising on standards.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Design Consultation',
      description: 'Share your requirements and our team will help design the perfect packaging solution for your business needs.'
    },
    {
      number: '02',
      title: 'Production',
      description: 'State-of-the-art manufacturing facility ensures high-quality production with strict quality control measures.'
    },
    {
      number: '03',
      title: 'Quality Check',
      description: 'Every batch undergoes rigorous quality inspection to meet industry standards and your specifications.'
    },
    {
      number: '04',
      title: 'Timely Delivery',
      description: 'Efficient logistics network ensures your order reaches you on time, every time. Track your shipment in real-time.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Print Pack - Reliable Corrugated Packaging Solutions for Growing Businesses</title>
        <meta name="description" content="Premium corrugated boxes and custom packaging solutions in Delhi. High-quality materials, bulk supply, competitive pricing, and timely delivery for e-commerce, FMCG, retail, and logistics businesses." />
      </Helmet>

      <Header />

      <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550955071-8f8c55f8de8a"
            alt="Modern corrugated box manufacturing facility with organized production line"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Reliable Corrugated Packaging Solutions for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl text-muted-foreground">
              Premium quality corrugated boxes with custom printing options. Durable materials, bulk supply capacity, and competitive pricing with on-time delivery guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
              About Print Pack
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Based in the heart of Delhi's Wazirpur Industrial Area, Print Pack is your trusted manufacturing partner for corrugated packaging solutions. With years of experience in the packaging industry, we have built a reputation for delivering high-quality products that protect your goods and enhance your brand.
            </p>
            <p className="text-lg leading-relaxed">
              Our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology to produce packaging solutions that meet the demanding needs of e-commerce, FMCG, retail, logistics, and manufacturing businesses. We understand that reliable packaging is critical to your operations, which is why we maintain strict quality standards and ensure timely delivery on every order.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Our Products
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-muted-foreground">
              Comprehensive packaging solutions designed for durability, customization, and cost-effectiveness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Why Choose Print Pack
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
              Industry-leading quality and service that sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background text-foreground rounded-2xl p-8 text-center shadow-lg"
            >
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">High-Quality Materials</h3>
              <p className="leading-relaxed text-muted-foreground">Premium corrugated materials ensuring maximum protection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background text-foreground rounded-2xl p-8 text-center shadow-lg"
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Customization Options</h3>
              <p className="leading-relaxed text-muted-foreground">Tailored designs and printing to match your brand</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background text-foreground rounded-2xl p-8 text-center shadow-lg"
            >
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Competitive Pricing</h3>
              <p className="leading-relaxed text-muted-foreground">Best value for bulk orders without compromising quality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background text-foreground rounded-2xl p-8 text-center shadow-lg"
            >
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Timely Delivery</h3>
              <p className="leading-relaxed text-muted-foreground">Reliable logistics ensuring on-schedule shipments</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {counters.clients}+
                </div>
                <p className="font-medium">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {counters.products.toLocaleString()}+
                </div>
                <p className="font-medium">Boxes Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {counters.delivery}%
                </div>
                <p className="font-medium">On-Time Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="industries" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-muted-foreground">
              Trusted packaging partner across diverse business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Our Manufacturing Process
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-muted-foreground">
              From concept to delivery, we ensure excellence at every step
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isLast={index === processSteps.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Trusted by 100+ Businesses
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-muted-foreground">
              What our clients say about working with Print Pack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
              Get in Touch
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
              Request a quote or reach out for any packaging requirements
            </p>
          </motion.div>

          <LeadForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
