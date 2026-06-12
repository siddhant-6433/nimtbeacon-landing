import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyBoarding from "./components/WhyBoarding";
import WhyNIMT from "./components/WhyNIMT";
import MoreThanHostel from "./components/MoreThanHostel";
import StudentTransformation from "./components/StudentTransformation";
import PreparingStudents from "./components/PreparingStudents";
import SchoolingPrep from "./components/SchoolingPrep";
import SafetyPriority from "./components/SafetyPriority";
import HealthyBody from "./components/HealthyBody";
import DayInLife from "./components/DayInLife";
import CampusFacilities from "./components/CampusFacilities";
import VideoTestimonials from "./components/VideoTestimonials";
import ResultsAchievements from "./components/ResultsAchievements";
import FAQSection from "./components/FAQSection";
import InquiryForm from "./components/InquiryForm";
import CallToAction from "./components/CallToAction";
import QuickActions from "./components/QuickActions";
import Footer from "./components/Footer";
import { LeadModalProvider } from "./components/LeadModal";

export default function App() {
  return (
    <LeadModalProvider>
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600/10 selection:text-blue-600">
        <Header />
        <main>
          <Hero />
          <WhyBoarding />
          <WhyNIMT />
          <MoreThanHostel />
          <StudentTransformation />
          <PreparingStudents />
          <SchoolingPrep />
          <SafetyPriority />
          <HealthyBody />
          <DayInLife />
          <CampusFacilities />
          <QuickActions />
          <VideoTestimonials />
          <ResultsAchievements />
          <FAQSection />
          <InquiryForm />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </LeadModalProvider>
  );
}
