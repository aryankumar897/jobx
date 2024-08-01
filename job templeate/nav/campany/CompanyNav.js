import Link from "next/link";

export default function CompanyNav() {
    return (
        <>
            <nav className="nav justify-content-center mb-3">
                {/* <Link className="nav-link" href="/dashboard/company">
                    compony
                </Link>
                <Link className="nav-link" href="/dashboard/company/profile">
                    Profile
                </Link>

                <Link className="nav-link" href="/dashboard/company/job">
                Create Jobs
                </Link>

                <Link className="nav-link" href="/dashboard/company/companyjob">
                     All jobs
                </Link>

                <Link className="nav-link" href="/dashboard/admin/blog">
                    Add Event
                </Link>

                <Link className="nav-link" href="/dashboard/admin/blogs">
                    Events
                </Link>
                <Link href="/dashboard/company/orders" className="nav-link">
                orders
                </Link> */}




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

                {/* Admin Links */}
                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/admin/blog' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/admin/blog' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/admin/blog' ? 'green' : 'transparent',
                }} href="/dashboard/admin/blog">
                    Add Event
                </Link>

                <Link className="nav-link" style={{
                    color: pathname === '/dashboard/admin/blogs' ? 'white' : 'black',
                    fontWeight: pathname === '/dashboard/admin/blogs' ? 'bold' : 'normal',
                    backgroundColor: pathname === '/dashboard/admin/blogs' ? 'green' : 'transparent',
                }} href="/dashboard/admin/blogs">
                    Events
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