import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Activity, Heart, Stethoscope, BookOpen } from 'lucide-react';

interface ServicesPageProps {
  language: 'ar' | 'en';
}

const ServicesPage = ({ language }: ServicesPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ar: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة شاملة من الخدمات المتخصصة',
      speechTherapy: 'جلسات تخاطب ومهارات',
      speechDesc:
        'نساعد الأطفال على تطوير مهارات النطق والتواصل اللغوي من خلال جلسات فردية مخصصة تستخدم أحدث الأساليب العلمية.',
      sensoryTherapy: 'علاج حسي ووظيفي',
      sensoryDesc:
        'نعمل على تحسين التكامل الحسي والمهارات الحركية الدقيقة لمساعدة الأطفال على التفاعل بشكل أفضل مع بيئتهم.',
      physicalTherapy: 'تأهيل حركي ونفسي حركي',
      physicalDesc:
        'برامج متخصصة لتطوير المهارات الحركية الكبرى والتوازن والتنسيق الحركي.',
      counseling: 'استشارات نفسية',
      counselingDesc:
        'دعم نفسي شامل للأطفال وأسرهم لمواجهة التحديات وبناء الثقة بالنفس.',
      physiotherapy: 'علاج طبيعي',
      physiotherapyDesc:
        'جلسات علاج طبيعي لتقوية العضلات وتحسين الحركة والمرونة.',
      education: 'تعليم أكاديمي ودمج',
      educationDesc:
        'برامج تعليمية مخصصة تساعد الأطفال على الاندماج في البيئة المدرسية وتحقيق النجاح الأكاديمي.',
      bookNow: 'احجز الآن',
    },
    en: {
      title: 'Our Services',
      subtitle: 'We offer a comprehensive range of specialized services',
      speechTherapy: 'Speech and Skills Therapy',
      speechDesc:
        'We help children develop speech and language communication skills through customized individual sessions using the latest scientific methods.',
      sensoryTherapy: 'Sensory and Occupational Therapy',
      sensoryDesc:
        'We work on improving sensory integration and fine motor skills to help children interact better with their environment.',
      physicalTherapy: 'Physical and Psychomotor Rehabilitation',
      physicalDesc:
        'Specialized programs to develop gross motor skills, balance, and motor coordination.',
      counseling: 'Psychological Counseling',
      counselingDesc:
        'Comprehensive psychological support for children and their families to face challenges and build self-confidence.',
      physiotherapy: 'Physiotherapy',
      physiotherapyDesc:
        'Physiotherapy sessions to strengthen muscles and improve movement and flexibility.',
      education: 'Academic Education & Inclusion',
      educationDesc:
        'Customized educational programs that help children integrate into the school environment and achieve academic success.',
      bookNow: 'Book Now',
    },
  };

  const services = [
    {
      icon: MessageSquare,
      title: t[language].speechTherapy,
      desc: t[language].speechDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
    },
    {
      icon: Brain,
      title: t[language].sensoryTherapy,
      desc: t[language].sensoryDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
    },
    {
      icon: Activity,
      title: t[language].physicalTherapy,
      desc: t[language].physicalDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_5.png',
    },
    {
      icon: Heart,
      title: t[language].counseling,
      desc: t[language].counselingDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_4.png',
    },
    {
      icon: Stethoscope,
      title: t[language].physiotherapy,
      desc: t[language].physiotherapyDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_5.png',
    },
    {
      icon: BookOpen,
      title: t[language].education,
      desc: t[language].educationDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-card border-border">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-xl font-heading font-semibold text-card-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/sessions">{t[language].bookNow}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
