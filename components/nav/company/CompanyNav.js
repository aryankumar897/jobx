"use client"


import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function CompanyNav() {
    const pathname = usePathname();
    return (
        <>
            <nav className="nav justify-content-center mb-3">
              

                {/* Company Links */}
                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company' ? 'green' : 'transparent',
                }} href="/dashboard/company">
                    Company
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company/profile' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company/profile' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company/profile' ? 'green' : 'transparent',
                }} href="/dashboard/company/profile">
                    Profile
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company/job' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company/job' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company/job' ? 'green' : 'transparent',
                }} href="/dashboard/company/job">
                    Create Jobs
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company/companyjob' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company/companyjob' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company/companyjob' ? 'green' : 'transparent',
                }} href="/dashboard/company/companyjob">
                    All Jobs
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company/orders' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company/orders' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company/orders' ? 'green' : 'transparent',
                }} href="/dashboard/company/orders">
                    Orders
                </Link>

           

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/company/orders' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/company/orders' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/company/orders' ? 'green' : 'transparent',
                }} href="/dashboard/company/orders">
                    Orders
                </Link>















            </nav>
        </>
    );
}