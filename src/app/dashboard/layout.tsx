import Sidebar from '@/ui/dashboard/sidebar/sidebar'
import Navbar from '@/ui/dashboard/navbar/navbar'
import styles from '@/ui/dashboard/dashboard.module.css'

const Layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (<div className='flex'>
        <div className='flex-grow-0 flex-shrink-0 w-1/4 bg-cBgSoft p-4 min-h-screen'>
            <Sidebar />
        </div>
        <div className='flex-grow p-4'>
            <Navbar />
            { children }
        </div>
    </div>)
}

export default Layout
