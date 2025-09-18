import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLayout from './components/PageLayout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import SchoolsColleges from './pages/SchoolsColleges';
import Contact from './pages/Contact';

// student pages
import CareerTest from './pages/Student/CareerTest';
import CareerCounselling from './pages/Student/CareerCounselling';
import CompetitiveExam from './pages/Student/CompetitiveExam';
import CollegeCounselling from './pages/Student/CollegeCounselling';
import StudyAbroad from './pages/Student/StudyAbroad';
import StudentPricing from './pages/Student/Pricing';

// parents pages
import PersonalCounselling from './pages/Parents/PersonalCounselling';
import Parenting from './pages/Parents/Parenting';
import ParentsCareerCounselling from './pages/Parents/CareerCounselling';
import ParentsPricing from './pages/Parents/Pricing';

export default function App() {
  return (
    <>
      <Navbar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Student */}
          <Route path="/student/career-test" element={<CareerTest />} />
          <Route path="/student/career-counselling" element={<CareerCounselling />} />
          <Route path="/student/competitive-exam" element={<CompetitiveExam />} />
          <Route path="/student/college-counselling" element={<CollegeCounselling />} />
          <Route path="/student/study-abroad" element={<StudyAbroad />} />
          <Route path="/student/pricing" element={<StudentPricing />} />

          {/* Parents */}
          <Route path="/parents/personal-counselling" element={<PersonalCounselling />} />
          <Route path="/parents/parenting" element={<Parenting />} />
          <Route path="/parents/career-counselling" element={<ParentsCareerCounselling />} />
          <Route path="/parents/pricing" element={<ParentsPricing />} />

          <Route path="/schools-colleges" element={<SchoolsColleges />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback route could be added */}
        </Routes>
      </PageLayout>
      <Footer />
    </>
  );
}
