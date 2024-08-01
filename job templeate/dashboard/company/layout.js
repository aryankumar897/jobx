import Link from "next/link";
import CompanyNav from '@/components/nav/company/CompanyNav';
export default function CompanyLayout({ children }) {
    return (
        <>
            <CompanyNav />
            {children}
        </>
    );
}