import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface SessionsPageProps {
  language: 'ar' | 'en';
}

const SessionsPage = ({ language }: SessionsPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ar: {
      title: 'احجز جلستك',
      subtitle: 'املأ النموذج وسنتواصل معك في أقرب وقت',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      childAge: 'عمر الطفل',
      service: 'الخدمة المطلوبة',
      message: 'رسالة إضافية (اختياري)',
      submit: 'إرسال الطلب',
      whatsapp: 'أو تواصل معنا عبر واتساب',
      whatsappButton: 'احجز عبر واتساب',
    },
    en: {
      title: 'Book Your Session',
      subtitle: 'Fill out the form and we will contact you soon',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email',
      childAge: 'Child Age',
      service: 'Required Service',
      message: 'Additional Message (Optional)',
      submit: 'Submit Request',
      whatsapp: 'Or contact us via WhatsApp',
      whatsappButton: 'Book via WhatsApp',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-24 bg-gradient-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              {t[language].title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90">{t[language].subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        {t[language].name}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        {t[language].phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        {t[language].email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="childAge" className="text-foreground">
                        {t[language].childAge}
                      </Label>
                      <Input
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-foreground">
                        {t[language].service}
                      </Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        {t[language].message}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 bg-background text-foreground border-border"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {t[language].submit}
                    </Button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-muted-foreground mb-4">{t[language].whatsapp}</p>
                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <a
                        href="https://wa.me/201234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t[language].whatsappButton}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SessionsPage;
