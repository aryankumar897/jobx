import Link from "next/link";
import CandidateNav from '@/components/nav/candidatenav/CandidateNav';
export default function CandidateLayout({ children }) {
    return (
        <>
            <CandidateNav/>
            {children}
        </>
    );
}