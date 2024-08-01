"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function CandidateNav() {
    const pathname = usePathname();
    return (
        <>
            <nav className="nav justify-content-center mb-3">
                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate' ? 'green' : 'transparent',
                }} href="/dashboard/candidate">
                    Candidate
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate/myprofile' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate/myprofile' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate/myprofile' ? 'green' : 'transparent',
                }} href="/dashboard/candidate/myprofile">
                    My Profile
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate/myjobs' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate/myjobs' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate/myjobs' ? 'green' : 'transparent',
                }} href="/dashboard/candidate/myjobs">
                    Applied Jobs
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate/savedjobs' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate/savedjobs' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate/savedjobs' ? 'green' : 'transparent',
                }} href="/dashboard/candidate/savedjobs">
                    Saved Jobs
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate/deleteaccount' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate/deleteaccount' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate/deleteaccount' ? 'green' : 'transparent',
                }} href="/dashboard/candidate/deleteaccount">
                    Delete Account
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/candidate/logout' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/candidate/logout' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/candidate/logout' ? 'green' : 'transparent',
                }} href="/dashboard/candidate/logout">
                    Logout
                </Link>


            </nav>
        </>
    );
}