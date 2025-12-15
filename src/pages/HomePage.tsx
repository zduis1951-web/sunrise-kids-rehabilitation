import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, FileText, UserCheck, Shield, MessageSquare, Brain, Activity, Stethoscope, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomePageProps {
  language: 'ar' | 'en';
}

const HomePage = ({ language }: HomePageProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    children: 0,
    satisfaction: 0,
    years: 0,
    specialists: 0,
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        children: 500,
        satisfaction: 98,
        years: 10,
        specialists: 25,
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setStats({
          children: Math.floor(targets.children * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          years: Math.floor(targets.years * progress),
          specialists: Math.floor(targets.specialists * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const t = {
    ar: {
      heroTitle: 'صن رايز  حيث تبدأ رحلة التطور والتعلم',
      heroSubtitle: 'مركز متخصص في تأهيل وتدريب الأطفال ذوي الاحتياجات الخاصة',
      heroCta: 'احجز استشارتك الأولى مجانا',
      whyChoose: 'لماذا تختار صن رايز؟',
      trust: 'الثقة والمصداقية',
      trustDesc: 'سمعة طيبة وخبرة موثوقة في مجال التأهيل',
      team: 'فريق محترف',
      teamDesc: 'أخصائيون معتمدون ومدربون على أحدث الأساليب',
      personalized: 'خطط فردية',
      personalizedDesc: 'برامج مخصصة تناسب احتياجات كل طفل',
      family: 'مشاركة الأسرة',
      familyDesc: 'نشرك الأهل في رحلة التطور والتعلم',
      safety: 'بيئة آمنة',
      safetyDesc: 'مساحات مجهزة ومريحة للأطفال',
      services: 'خدماتنا',
      servicesSubtitle: 'نقدم مجموعة شاملة من الخدمات المتخصصة',
      speechTherapy: 'جلسات تخاطب ومهارات',
      speechDesc: 'تطوير مهارات النطق والتواصل اللغوي',
      sensoryTherapy: 'علاج حسي ووظيفي',
      sensoryDesc: 'تحسين التكامل الحسي والمهارات الحركية الدقيقة',
      physicalTherapy: 'تأهيل حركي ونفسي حركي',
      physicalDesc: 'تطوير المهارات الحركية الكبرى والتوازن',
      counseling: 'استشارات نفسية',
      counselingDesc: 'دعم نفسي للأطفال والأسر',
      physiotherapy: 'علاج طبيعي',
      physiotherapyDesc: 'تقوية العضلات وتحسين الحركة',
      education: 'تعليم أكاديمي ودمج',
      educationDesc: 'برامج تعليمية تساعد على الاندماج المدرسي',
      learnMore: 'اعرف المزيد',
      testimonials: 'آراء أولياء الأمور',
      testimonialsSubtitle: 'قصص نجاح حقيقية من عائلات ثقت بنا',
      statsTitle: 'إنجازاتنا بالأرقام',
      childrenServed: 'طفل تم خدمته',
      satisfactionRate: 'نسبة الرضا',
      yearsExperience: 'سنوات خبرة',
      specialists: 'أخصائي',
      programs: 'برامجنا وأنشطتنا',
      programsSubtitle: 'أنشطة متنوعة لتنمية مهارات الأطفال',
      creativeProgram: 'برامج إبداعية',
      creativeDesc: 'أنشطة فنية وموسيقية لتنمية الإبداع',
      religiousProgram: 'برامج دينية',
      religiousDesc: 'تعليم القيم والأخلاق بطريقة محببة',
      techProgram: 'برامج تكنولوجية',
      techDesc: 'استخدام التقنية الحديثة في التعلم',
      finalCta: 'ابدأ رحلة طفلك معنا اليوم',
      finalCtaText: 'احجز استشارة مجانية واكتشف كيف يمكننا مساعدة طفلك',
      bookWhatsApp: 'احجز عبر واتساب',
    },
    en: {
      heroTitle: 'Sunrise  Where the Journey of Development and Learning Begins',
      heroSubtitle: 'Specialized center for rehabilitation and training of children with special needs',
      heroCta: 'Book Your Free First Consultation',
      whyChoose: 'Why Choose Sunrise?',
      trust: 'Trust and Credibility',
      trustDesc: 'Good reputation and reliable experience in rehabilitation',
      team: 'Professional Team',
      teamDesc: 'Certified specialists trained in the latest methods',
      personalized: 'Individual Plans',
      personalizedDesc: 'Customized programs to suit each child\'s needs',
      family: 'Family Participation',
      familyDesc: 'We involve parents in the development journey',
      safety: 'Safe Environment',
      safetyDesc: 'Equipped and comfortable spaces for children',
      services: 'Our Services',
      servicesSubtitle: 'We offer a comprehensive range of specialized services',
      speechTherapy: 'Speech and Skills Therapy',
      speechDesc: 'Developing speech and language communication skills',
      sensoryTherapy: 'Sensory and Occupational Therapy',
      sensoryDesc: 'Improving sensory integration and fine motor skills',
      physicalTherapy: 'Physical and Psychomotor Rehabilitation',
      physicalDesc: 'Developing gross motor skills and balance',
      counseling: 'Psychological Counseling',
      counselingDesc: 'Psychological support for children and families',
      physiotherapy: 'Physiotherapy',
      physiotherapyDesc: 'Strengthening muscles and improving movement',
      education: 'Academic Education & Inclusion',
      educationDesc: 'Educational programs that help with school integration',
      learnMore: 'Learn More',
      testimonials: 'Parent Testimonials',
      testimonialsSubtitle: 'Real success stories from families who trusted us',
      statsTitle: 'Our Achievements in Numbers',
      childrenServed: 'Children Served',
      satisfactionRate: 'Satisfaction Rate',
      yearsExperience: 'Years of Experience',
      specialists: 'Specialists',
      programs: 'Our Programs & Activities',
      programsSubtitle: 'Diverse activities to develop children\'s skills',
      creativeProgram: 'Creative Programs',
      creativeDesc: 'Artistic and musical activities to develop creativity',
      religiousProgram: 'Religious Programs',
      religiousDesc: 'Teaching values and ethics in a loving way',
      techProgram: 'Technology Programs',
      techDesc: 'Using modern technology in learning',
      finalCta: 'Start Your Child\'s Journey With Us Today',
      finalCtaText: 'Book a free consultation and discover how we can help your child',
      bookWhatsApp: 'Book via WhatsApp',
    },
  };

  const features = [
    { icon: Heart, title: t[language].trust, desc: t[language].trustDesc },
    { icon: Users, title: t[language].team, desc: t[language].teamDesc },
    { icon: FileText, title: t[language].personalized, desc: t[language].personalizedDesc },
    { icon: UserCheck, title: t[language].family, desc: t[language].familyDesc },
    { icon: Shield, title: t[language].safety, desc: t[language].safetyDesc },
  ];

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

  const testimonials = [
    {
      name: language === 'ar' ? 'أم أحمد' : 'Ahmed\'s Mother',
      text:
        language === 'ar'
          ? 'مركز صن رايز غير حياة ابني تماماً. الفريق محترف جداً والنتائج واضحة بعد شهرين فقط.'
          : 'Sunrise Center completely changed my son\'s life. The team is very professional and the results are clear after just two months.',
    },
    {
      name: language === 'ar' ? 'والد سارة' : 'Sarah\'s Father',
      text:
        language === 'ar'
          ? 'أفضل قرار اتخذناه. ابنتي الآن أكثر ثقة وتواصلاً مع الآخرين. شكراً لفريق صن رايز.'
          : 'The best decision we made. My daughter is now more confident and communicative with others. Thank you Sunrise team.',
    },
    {
      name: language === 'ar' ? 'أم محمد' : 'Mohamed\'s Mother',
      text:
        language === 'ar'
          ? 'البيئة آمنة ومريحة، والأخصائيون يتعاملون مع الأطفال بحب واحترافية. ننصح به بشدة.'
          : 'The environment is safe and comfortable, and the specialists treat children with love and professionalism. Highly recommended.',
    },
  ];

  const programs = [
    {
      title: t[language].creativeProgram,
      desc: t[language].creativeDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
    },
    {
      title: t[language].religiousProgram,
      desc: t[language].religiousDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
    },
    {
      title: t[language].techProgram,
      desc: t[language].techDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_4.png',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.video
            alt="طفال يتعلمون بسعادة"
            src="https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_1.mp4"
            poster="https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_1-poster.png"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black mb-6 text-white leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t[language].heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto font-semibold leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t[language].heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-1 text-primary-foreground hover:shadow-2xl hover:scale-110 transition-all duration-500 text-base sm:text-lg px-10 py-7 rounded-2xl font-black relative overflow-hidden group animate-glow"
            >
              <Link to="/sessions">
                <span className="relative z-10">{t[language].heroCta}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-tertiary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </Button>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black mb-4 text-gradient">
              {t[language].whyChoose}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:animate-glow">
                      <feature.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-heading font-black mb-3 text-card-foreground group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              {t[language].services}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t[language].servicesSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-card-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground"
                    >
                      <Link to="/services">{t[language].learnMore}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              {t[language].testimonials}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t[language].testimonialsSubtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 lg:p-12">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-lg lg:text-xl text-card-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-base font-semibold text-primary">
                    {testimonials[currentTestimonial].name}
                  </p>
                </motion.div>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground"
                    aria-label="Previous testimonial"
                  >
                    {language === 'ar' ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronLeft className="w-5 h-5" />
                    )}
                  </Button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-border'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground"
                    aria-label="Next testimonial"
                  >
                    {language === 'ar' ? (
                      <ChevronLeft className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 lg:py-24 bg-gradient-to-br from-primary via-tertiary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
              {t[language].statsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-heading font-bold text-white mb-2">
                {stats.children}+
              </div>
              <p className="text-base lg:text-lg text-white/90">{t[language].childrenServed}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-heading font-bold text-white mb-2">
                {stats.satisfaction}%
              </div>
              <p className="text-base lg:text-lg text-white/90">{t[language].satisfactionRate}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-heading font-bold text-white mb-2">
                {stats.years}+
              </div>
              <p className="text-base lg:text-lg text-white/90">{t[language].yearsExperience}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-heading font-bold text-white mb-2">
                {stats.specialists}+
              </div>
              <p className="text-base lg:text-lg text-white/90">{t[language].specialists}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              {t[language].programs}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t[language].programsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{program.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-1 -mb-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-foreground">
              {t[language].finalCta}
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t[language].finalCtaText}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t[language].bookWhatsApp}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
