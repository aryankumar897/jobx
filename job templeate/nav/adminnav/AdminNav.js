"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function AdminNav() {
    const pathname = usePathname();
    console.log(pathname === '/dashboard/admin')

    return (
        <>
            <nav className="nav justify-content-center m-3">


                <Link
                    style={{
                        color: pathname === '/dashboard/admin' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}
                    className="nav-link"
                    href="/dashboard/admin">
                    Admin
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/industry' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/industry' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/industry' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    className="nav-link" href="/dashboard/admin/industry">
                    Create industry
                </Link>





                <Link
                    style={{
                        color: pathname === '/dashboard/admin/organization' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/organization' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/organization' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    className="nav-link"
                    href="/dashboard/admin/organization">
                    Add Organization
                </Link>

                <Link

                    style={{
                        color: pathname === '/dashboard/admin/team' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/team' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/team' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    className="nav-link" href="/dashboard/admin/team">
                    Team size
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/country' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/country' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/country' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    className="nav-link" href="/dashboard/admin/country">
                    Add Country
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/state' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/state' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/state' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}
                    className="nav-link" href="/dashboard/admin/state">
                    Add State
                </Link>




                <Link
                    style={{
                        color: pathname === '/dashboard/admin/city' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/city' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/city' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/city" className="nav-link">
                    Add City
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/language' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/language' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/language' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/language" className="nav-link">
                    Add Language
                </Link>
                <Link
                    style={{
                        color: pathname === '/dashboard/admin/skill' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/skill' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/skill' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/skill" className="nav-link">
                    Add Skill
                </Link>



                <Link
                    style={{
                        color: pathname === '/dashboard/admin/profession' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/profession' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/profession' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/profession" className="nav-link">
                    Add Profssion
                </Link>

            </nav>

            <nav className="nav justify-content-center m-3"  >
                <Link
                    style={{
                        color: pathname === '/dashboard/admin/pricing' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/pricing' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/pricing' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/pricing" className="nav-link">
                    Add Pricing
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/paymentsettings' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/paymentsettings' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/paymentsettings' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/paymentsettings" className="nav-link">
                    Payment Settings
                </Link>




                <Link
                    style={{
                        color: pathname === '/dashboard/admin/sitesettings' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/sitesettings' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/sitesettings' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/sitesettings" className="nav-link">
                    Site  Settings
                </Link>


                <Link
                    style={{
                        color: pathname === '/dashboard/admin/orders' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/orders' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/orders' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/orders" className="nav-link">
                    Orders
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/job_categories' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/job_categories' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/job_categories' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/job_categories" className="nav-link">
                    Job_categories
                </Link>




                <Link
                    style={{
                        color: pathname === '/dashboard/admin/education' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/education' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/education' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/education" className="nav-link">
                    education
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/job_type' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/job_type' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/job_type' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/job_type" className="nav-link">
                    Jobtype
                </Link>

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/salarytype' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/salarytype' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/salarytype' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/salarytype" className="nav-link">
                    Salarytype
                </Link>


                <Link
                    style={{
                        color: pathname === '/dashboard/admin/tag' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/tag' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/tag' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/tag" className="nav-link">
                    tag
                </Link>



                <Link
                    style={{
                        color: pathname === '/dashboard/admin/jobrole' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/jobrole' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/jobrole' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/jobrole" className="nav-link">
                    job role

                </Link>



                <Link
                    style={{
                        color: pathname === '/dashboard/admin/jobexperience' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/jobexperience' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/jobexperience' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/jobexperience" className="nav-link">
                    job experience

                </Link>



                <Link
                    style={{
                        color: pathname === '/dashboard/admin/jobs/create' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/jobs/create' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/jobs/create' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/jobs/create" className="nav-link">
                    Job Create

                </Link>



            </nav>

            <nav className="nav justify-content-center m-3">

                <Link
                    style={{
                        color: pathname === '/dashboard/admin/alljobs' ? 'white' : 'black',
                        fontWeight: pathname === '/dashboard/admin/alljobs' ? 'bold' : 'normal',
                        backgroundColor: pathname === '/dashboard/admin/alljobs' ? 'green' : 'transparent',
                        // Add any additional styles for the active state here
                    }}

                    href="/dashboard/admin/alljobs" className="nav-link">
                    alljobs
                </Link>


            </nav>
        </>
    );
}