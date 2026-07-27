"use client";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhyBoarding from "../../components/WhyBoarding";
import WhyNIMT from "../../components/WhyNIMT";
import MoreThanHostel from "../../components/MoreThanHostel";
import StudentTransformation from "../../components/StudentTransformation";
import PreparingStudents from "../../components/PreparingStudents";
import SchoolingPrep from "../../components/SchoolingPrep";
import SafetyPriority from "../../components/SafetyPriority";
import HealthyBody from "../../components/HealthyBody";
import DayInLife from "../../components/DayInLife";
import CampusFacilities from "../../components/CampusFacilities";
import ResultsAchievements from "../../components/ResultsAchievements";
import FAQSection from "../../components/FAQSection";
import CallToAction from "../../components/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600/10 selection:text-blue-600">
      <Navbar />
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
        <ResultsAchievements />
        <FAQSection />
        <CallToAction />
      </main>
    </div>
  );
}

