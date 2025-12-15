import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

interface AboutPageProps {
  language: 'ar' | 'en';
}

const AboutPage = ({ language }: AboutPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ar: {
      title: 'من نحن',
      subtitle: 'تعرف على مركز صن رايز',
      intro:
        'مركز صن رايز هو مركز متخصص في تأهيل وتدريب الأطفال ذوي الاحتياجات الخاصة. نؤمن بأن كل طفل يستحق فرصة للتطور والنمو في بيئة آمنة ومحفزة.',
      mission: 'رسالتنا',
      missionText:
        'تقديم خدمات تأهيلية وتدريبية متميزة للأطفال ذوي الاحتياجات الخاصة، من خلال فريق محترف وبرامج مخصصة تساعد كل طفل على تحقيق أقصى إمكاناته.',
      vision: 'رؤيتنا',
      visionText:
        'أن نكون المركز الرائد في مجال تأهيل الأطفال ذوي الاحتياجات الخاصة، ونساهم في بناء مجتمع أكثر شمولاً وتقبلاً للجميع.',
      values: 'قيمنا',
      valuesText:
        'الاحترافية، الشفافية، الاحترام، التعاون مع الأسر، والتطوير المستمر لخدماتنا.',
      team: 'فريقنا',
      teamText:
        'نفخر بفريق من الأخصائيين المعتمدين والمدربين على أحدث الأساليب العلمية في مجالات التخاطب، العلاج الوظيفي، العلاج الطبيعي، والاستشارات النفسية.',
    },
    en: {
      title: 'About Us',
      subtitle: 'Get to know Sunrise Center',
      intro:
        'Sunrise Center is a specialized center for rehabilitation and training of children with special needs. We believe that every child deserves an opportunity to develop and grow in a safe and stimulating environment.',
      mission: 'Our Mission',
      missionText:
        'To provide distinguished rehabilitation and training services for children with special needs, through a professional team and customized programs that help each child achieve their full potential.',
      vision: 'Our Vision',
      visionText:
        'To be the leading center in the field of rehabilitation of children with special needs, and contribute to building a more inclusive and accepting society for all.',
      values: 'Our Values',
      valuesText:
        'Professionalism, transparency, respect, collaboration with families, and continuous development of our services.',
      team: 'Our Team',
      teamText:
        'We are proud of our team of certified specialists trained in the latest scientific methods in the fields of speech therapy, occupational therapy, physiotherapy, and psychological counseling.',
    },
  };

  const sections = [
    {
      icon: Target,
      title: t[language].mission,
      text: t[language].missionText,
    },
    {
      icon: Eye,
      title: t[language].vision,
      text: t[language].visionText,
    },
    {
      icon: Award,
      title: t[language].values,
      text: t[language].valuesText,
    },
    {
      icon: Users,
      title: t[language].team,
      text: t[language].teamText,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg lg:text-xl text-foreground leading-relaxed text-center">
              {t[language].intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-heading font-semibold mb-4 text-card-foreground">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{section.text}</p>
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

export default AboutPage;
