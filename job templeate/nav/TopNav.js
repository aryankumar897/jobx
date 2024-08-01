"use client"

import Link from "next/link";




export default function TopNav() {
  
    return (

        <>
            <nav className="nav shadow justify-content-between">
                <Link className="nav-link mt-2" href="/">
                    {/* cyclone */}
                    Home
                </Link>
                <div className="d-flex align-items-center">


               



                    <Link className="nav-link " href="/companies">

                        Companies
                    </Link>
                    <Link className="nav-link " href="/candidates">

                        Candidates

                    </Link>
                    <Link className="nav-link " href="/jobs">

                        Search jobs

                    </Link>
                    <Link className="nav-link " href="/pricing">

                        Pricing

                    </Link>

                    <Link className="nav-link" href="/login">
                        Login
                    </Link>
                    <Link className="nav-link" href="/register">
                        Register
                    </Link>
                </div>






            </nav>



        </>
    )
}







//  <HeroSection/>
//   <PapularJob/>
//   <FeaturedJob/>
//   <WhyChooseUs/>
//   <LearnMore/>
//   <CounterSection/>
//       <TopRecruiters/>
//       <PricingPlan/>
//       <JobLoc/>
//       <ClientSaid/>
//       <NewsItem/>
{/* <NeswLatter/>
      <Footer/> */}
  