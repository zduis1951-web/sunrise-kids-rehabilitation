import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  language: 'ar' | 'en';
}

const ContactPage = ({ language }: ContactPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا للإجابة على استفساراتك',
      address: 'العنوان',
      addressText: '14 شارع توفيق أحمد البكري متفرع من إبراهيم نوار، خلف مستشفى حسبو الدولي، مدينة نصر، القاهرة، مصر',
      phone: 'الهاتف',
      phoneText: '00201007996750',
      whatsapp: 'واتساب',
      whatsappText: '00201007996750',
      hours: 'ساعات العمل',
      hoursText: 'السبت - الخميس: 7:30 ص - 8:00 م',
      friday: 'الجمعة: مغلق',
      location: 'موقعنا',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to answer your questions',
      address: 'Address',
      addressText: '14 Tawfiq Ahmed El-Bakry St., branching from Ibrahim Nawar, behind Hasabo International Hospital, Nasr City, Cairo, Egypt',
      phone: 'Phone',
      phoneText: '00201007996750',
      whatsapp: 'WhatsApp',
      whatsappText: '00201007996750',
      hours: 'Working Hours',
      hoursText: 'Saturday - Thursday: 7:30 AM - 8:00 PM',
      friday: 'Friday: Closed',
      location: 'Our Location',
    },
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t[language].address,
      text: t[language].addressText,
    },
    {
      icon: Phone,
      title: t[language].phone,
      text: t[language].phoneText,
    },
    {
      icon: MessageCircle,
      title: t[language].whatsapp,
      text: t[language].whatsappText,
      link: 'https://wa.me/201007996750',
    },
    {
      icon: Clock,
      title: t[language].hours,
      text: `${t[language].hoursText}\n${t[language].friday}`,
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold mb-2 text-card-foreground">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{info.text}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709871469!2d31.223096!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1234567890&key=YOUR_API_KEY"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t[language].location}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
