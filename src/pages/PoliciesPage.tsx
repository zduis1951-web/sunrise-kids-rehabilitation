import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@animaapp/playground-react-sdk';
import { Card, CardContent } from '@/components/ui/card';

interface PoliciesPageProps {
  language: 'ar' | 'en';
}

const PoliciesPage = ({ language }: PoliciesPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: policyData, isPending, error } = useQuery('Policy');

  const t = {
    ar: {
      title: 'السياسات',
      subtitle: 'سياسات وشروط الخدمة',
      privacy: 'سياسة الخصوصية',
      privacyText:
        'نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. جميع البيانات التي نجمعها تُستخدم فقط لتقديم خدماتنا وتحسين تجربتك.',
      terms: 'شروط الخدمة',
      termsText:
        'باستخدام خدماتنا، فإنك توافق على الالتزام بشروط الخدمة الخاصة بنا. نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت.',
      cancellation: 'سياسة الإلغاء',
      cancellationText:
        'يمكن إلغاء أو إعادة جدولة المواعيد قبل 24 ساعة على الأقل من موعد الجلسة. الإلغاء المتأخر قد يخضع لرسوم.',
      refund: 'سياسة الاسترداد',
      refundText:
        'يمكن استرداد المبالغ المدفوعة في حالات معينة وفقاً لسياستنا. يرجى الاتصال بنا لمزيد من التفاصيل.',
    },
    en: {
      title: 'Policies',
      subtitle: 'Service policies and terms',
      privacy: 'Privacy Policy',
      privacyText:
        'We respect your privacy and are committed to protecting your personal information. All data we collect is used only to provide our services and improve your experience.',
      terms: 'Terms of Service',
      termsText:
        'By using our services, you agree to comply with our terms of service. We reserve the right to modify these terms at any time.',
      cancellation: 'Cancellation Policy',
      cancellationText:
        'Appointments can be cancelled or rescheduled at least 24 hours before the session time. Late cancellations may be subject to fees.',
      refund: 'Refund Policy',
      refundText:
        'Refunds of paid amounts are possible in certain cases according to our policy. Please contact us for more details.',
    },
  };

  // Default policies if no data from database
  const defaultPolicies = [
    {
      id: '1',
      title: 'Privacy Policy',
      titleAr: 'سياسة الخصوصية',
      text: t.en.privacyText,
      textAr: t.ar.privacyText,
    },
    {
      id: '2',
      title: 'Terms of Service',
      titleAr: 'شروط الخدمة',
      text: t.en.termsText,
      textAr: t.ar.termsText,
    },
    {
      id: '3',
      title: 'Cancellation Policy',
      titleAr: 'سياسة الإلغاء',
      text: t.en.cancellationText,
      textAr: t.ar.cancellationText,
    },
    {
      id: '4',
      title: 'Refund Policy',
      titleAr: 'سياسة الاسترداد',
      text: t.en.refundText,
      textAr: t.ar.refundText,
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
    console.warn('Error loading policies from database, using default policies:', error.message);
  }

  // Use database policies if available, otherwise use default policies
  const displayPolicies = policyData && policyData.length > 0 ? policyData : defaultPolicies;

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
          <div className="max-w-4xl mx-auto space-y-6">
            {displayPolicies.map((policy, index) => {
              // Use Arabic fields if language is Arabic and they exist, otherwise fallback to English
              const title = language === 'ar' && policy.titleAr ? policy.titleAr : policy.title;
              const text = language === 'ar' && policy.textAr ? policy.textAr : policy.text;
              
              return (
                <motion.div
                  key={policy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 lg:p-8">
                      <h2 className="text-2xl font-heading font-semibold mb-4 text-card-foreground">
                        {title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliciesPage;
