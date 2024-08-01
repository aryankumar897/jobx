
import Link from "next/link";
import AdminNav from '@/components/nav/adminnav/AdminNav';

export default function AdminLayout({ children }) {
    return (
        <>

            <AdminNav />

            {children}


        </>
    );
}