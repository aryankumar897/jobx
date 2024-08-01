"use client"

import Image from "next/image";
import styles from "./page.module.css";



import HeroSection from "@/components/home/HeroSection";
import PapularJob from "@/components/home/PapularJob";

import FeaturedJob from "@/components/home/FeaturedJob";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LearnMore from "@/components/home/LearnMore";



import TopRecruiters from "@/components/home/TopRecruiters";

import PricingPlan from "@/components/home/PricingPlan";
import JobLoc from "@/components/home/JobLoc";
import  ClientSaid from "@/components/home/ClientSaid"
import NewsItem from "@/components/home/NewsItem";
export default function Home() {
  return (
 <>

      <HeroSection/>
      <PapularJob />


      <FeaturedJob/>
      <WhyChooseUs/>

      <LearnMore/>

 
      <TopRecruiters/>

      <PricingPlan />
      <JobLoc/>
      <ClientSaid/>

      <NewsItem/>

 </>
  );
}
