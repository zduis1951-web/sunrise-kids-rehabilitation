import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@animaapp/playground-react-sdk';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQPageProps {
  language: 'ar' | 'en';
}

const FAQPage = ({ language }: FAQPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: faqData, isPending, error } = useQuery('Faq');

  const t = {
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على أكثر الأسئلة شيوعاً',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions',
    },
  };

  // Default FAQs if no data from database
  const defaultFaqs = [
    {
      id: '1',
      question: 'What services does the center provide?',
      questionAr: 'ما هي الخدمات التي يقدمها المركز؟',
      answer: 'We offer a comprehensive range of services including speech therapy, sensory and occupational therapy, physical rehabilitation, psychological counseling, physiotherapy, and academic education.',
      answerAr: 'نقدم مجموعة شاملة من الخدمات تشمل جلسات التخاطب، العلاج الحسي والوظيفي، التأهيل الحركي، الاستشارات النفسية، العلاج الطبيعي، والتعليم الأكاديمي.',
    },
    {
      id: '2',
      question: 'How long does one session take?',
      questionAr: 'كم تستغرق الجلسة الواحدة؟',
      answer: 'A session typically lasts between 45 to 60 minutes, depending on the type of service and the child\'s needs.',
      answerAr: 'تتراوح مدة الجلسة عادة بين 45 إلى 60 دقيقة، حسب نوع الخدمة واحتياجات الطفل.',
    },
    {
      id: '3',
      question: 'Can parents attend the sessions?',
      questionAr: 'هل يمكن للأهل حضور الجلسات؟',
      answer: 'Yes, we encourage parents to participate in sessions as it helps enhance development and transfer skills to home.',
      answerAr: 'نعم، نشجع مشاركة الأهل في الجلسات لأن ذلك يساعد على تعزيز التطور ونقل المهارات إلى المنزل.',
    },
    {
      id: '4',
      question: 'How can I book an appointment?',
      questionAr: 'كيف يمكنني حجز موعد؟',
      answer: 'You can book an appointment by filling out the booking form on the website or contacting us by phone or WhatsApp.',
      answerAr: 'يمكنك حجز موعد من خلال ملء نموذج الحجز على الموقع أو التواصل معنا عبر الهاتف أو واتساب.',
    },
    {
      id: '5',
      question: 'Is the center accredited?',
      questionAr: 'هل المركز معتمد؟',
      answer: 'Yes, the center is accredited and all our specialists hold recognized certificates and are trained in the latest methods.',
      answerAr: 'نعم، المركز معتمد وجميع أخصائيينا حاصلون على شهادات معترف بها ومدربون على أحدث الأساليب.',
    },
    {
      id: '6',
      question: 'What are the working hours?',
      questionAr: 'ما هي ساعات العمل؟',
      answer: 'We work from Saturday to Thursday from 7:30 AM to 8:00 PM. We are closed on Friday.',
      answerAr: 'نعمل من السبت إلى الخميس من الساعة 7:30 صباحاً حتى 8:00 مساءً. نحن مغلقون يوم الجمعة.',
    },
  ];

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>
      </div>
    );
  }

  if (error) {
    console.warn('Error loading FAQs from database, using default FAQs:', error.message);
  }

  // Use database FAQs if available, otherwise use default FAQs
  const displayFaqs = faqData && faqData.length > 0 ? faqData : defaultFaqs;

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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {displayFaqs.map((faq, index) => {
                  // Use Arabic fields if language is Arabic and they exist, otherwise fallback to English
                  const question = language === 'ar' && faq.questionAr ? faq.questionAr : faq.question;
                  const answer = language === 'ar' && faq.answerAr ? faq.answerAr : faq.answer;
                  
                  return (
                    <AccordionItem
                      key={faq.id}
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-lg font-heading font-semibold text-card-foreground hover:text-primary">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
