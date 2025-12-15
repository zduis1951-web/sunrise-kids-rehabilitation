import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProgramsPage from './pages/ProgramsPage';
import SessionsPage from './pages/SessionsPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PoliciesPage from './pages/PoliciesPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <Router>
      <Header 
        language={language} 
        onLanguageToggle={toggleLanguage}
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/services" element={<ServicesPage language={language} />} />
          <Route path="/programs" element={<ProgramsPage language={language} />} />
          <Route path="/sessions" element={<SessionsPage language={language} />} />
          <Route path="/blog" element={<BlogPage language={language} />} />
          <Route path="/gallery" element={<GalleryPage language={language} />} />
          <Route path="/faq" element={<FAQPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="/policies" element={<PoliciesPage language={language} />} />
        </Routes>
      </main>
      <Footer language={language} />
    </Router>
  );
}

export default App;
