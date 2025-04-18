import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_2sjvpng',
        'template_62u1h2m',
        {
          to_name: 'Elevate Brand 360',
          to_email: 'elevatebrand360@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'LEJyfM2Ko7j87SP1W'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-block">
            <div className="bg-white px-4 py-2 text-brand-orange text-sm font-medium inline-flex items-center gap-2 rounded-full shadow-sm">
              Contact Us
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Get In Touch</h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Ready to elevate your brand? Reach out to us and let's start working together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1 space-y-6">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-navy">Contact Information</h3>
                  <p className="text-gray-600">
                    Feel free to reach out through any of these channels:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy">Phone</p>
                      <p className="text-gray-600">+91 9163138456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy">Email</p>
                      <p className="text-gray-600">elevatebrand360@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy">Office</p>
                      <p className="text-gray-600">Howrah, West Bengal, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-navy hover:bg-brand-orange text-white"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
