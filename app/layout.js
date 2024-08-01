"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import toast, { Toaster } from 'react-hot-toast';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";


import 'bootstrap/dist/css/bootstrap.min.css';




import TopNav from "@/components/nav/TopNav";


import { SessionProvider } from "next-auth/react";
import { IndustryProvider } from "@/context/industry"

import { OrganizationProvider } from "@/context/organization"
import { TeamProvider } from "@/context/team"
import { CountryProvider } from "@/context/country"
import { StateProvider } from "@/context/state"
import { CityProvider } from "@/context/city"

import { LanguageProvider } from "@/context/language"

import { SkillProvider } from "@/context/skill"
import { ProfessionProvider } from "@/context/profession"
import { JobtypeProvider } from "@/context/job_type"

import { SalarytypeProvider } from "@/context/salartype"
import { Job_categoriesProvider } from "@/context/job_categories"
import { EducationProvider } from "@/context/education"


import { TagProvider } from "@/context/tag"
import { JobroleProvider } from "@/context/jobrole"
import { JobexperienceProvider } from "@/context/jobexperiences"


import Footer from "@/components/home/Footer";
import NewsLatter from "@/components/home/NewsLatter";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (



    <html lang="en">
      <SessionProvider>

        <IndustryProvider>
          <OrganizationProvider>
            <TeamProvider>

              <CountryProvider>

                <StateProvider>
                  <CityProvider>
                    <LanguageProvider>

                      <SkillProvider>

                        <ProfessionProvider>

                          <JobtypeProvider >


                            <SalarytypeProvider>

                              <Job_categoriesProvider>


                                <EducationProvider>
                                  <TagProvider>
                                    <JobroleProvider>



                                      <JobexperienceProvider>

                                        <body className={inter.className}>
                                          <TopNav />
                                          <Toaster />
                                          <main>{children}</main>
                                          <NewsLatter />
                                          <Footer />
                                        </body>

                                      </JobexperienceProvider>
                                    </JobroleProvider>
                                  </TagProvider>
                                </EducationProvider>





                              </Job_categoriesProvider>
                            </SalarytypeProvider>
                          </JobtypeProvider>
                        </ProfessionProvider>
                      </SkillProvider>
                    </LanguageProvider>
                  </CityProvider>
                </StateProvider>
              </CountryProvider>
            </TeamProvider>
          </OrganizationProvider>
        </IndustryProvider>

      </SessionProvider>
    </html>


  );
}
{/* <html lang="en">
  <SessionProvider>
    <IndustryProvider>
      <body className={inter.className}>
        <TopNav />
        <Toaster />
        {children}
        <NewsLatter />
        <Footer />
      </body>
    </IndustryProvider>
  </SessionProvider>

</html> */}