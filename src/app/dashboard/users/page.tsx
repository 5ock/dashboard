import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Search from '@/ui/dashboard/search/search'
import Pagination from '@/ui/pagination'

export interface userProps {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    role: string;
    status: string;
    isAdmin: boolean;
    isActive: boolean;
}

const Users = () => {
    const t = useTranslations('DashboardPage')
    const users: userProps[] = [
        {
            id: '0000000001',
            name: 'John Doe',
            email: 'JohnDoe@cccc.com',
            createdAt: '2024.01.01',
            role: 'Admin',
            status: 'Active',
            isAdmin: true,
            isActive: true    
        }
    ]
    return (<div className='bg-cBgSoft p-5 rounded-lg mt-5'>
        <div className='flex items-center justify-between'>
            <Search placeholder={ t('search-for-a-user') } />
            <Link href='/dashboard/users/add'>
                <button className='p-2.5 bg-[#5d57c9] text-cTextMain rounded-md cursor-pointer'>{ t('add-new') }</button>
            </Link>
        </div>
        <table className='w-full mt-2'>
            <thead>
                <tr>
                    <td className='p-2'>{ t('th-name') }</td>
                    <td className='p-2'>{ t('th-email') }</td>
                    <td className='p-2'>{ t('th-createdAt') }</td>
                    <td className='p-2'>{ t('th-role') }</td>
                    <td className='p-2'>{ t('th-status') }</td>
                    <td className='p-2'>{ t('th-action') }</td>
                </tr>
            </thead>
            <tbody>
                { users && users.map((el: userProps, index: number) => (
                    <tr key={`${el.name}-${index}`}>
                        <td className='p-2'>{ el.name }</td>
                        <td className='p-2'>{ el.email }</td>
                        <td className='p-2'>{ el.createdAt }</td>
                        <td className='p-2'>{ el.role }</td>
                        <td className='p-2'>{ el.status }</td>
                        <td className='p-2'>
                            <div className='flex gap-2'>
                                <Link href={`/dashboard/users/${el.id}`}>
                                    <button className='px-2 py-1 rounded-md text-cTextMain border-none cursour-pointer bg-teal-600'>{ t('action-view') }</button>
                                </Link>
                                <Link href='/'>
                                    <button className='px-2 py-1 rounded-md text-cTextMain border-none cursour-pointer bg-red-600' >{ t('action-delete') }</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='w-full flex items-center justify-center mt-2'>
            <Pagination />
        </div>
    </div>)
}

export default Users