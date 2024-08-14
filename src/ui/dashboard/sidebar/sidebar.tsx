'use client'

import {
    ComputerDesktopIcon,
    Cog6ToothIcon,
    ChartBarSquareIcon,
    UserIcon,
    UserCircleIcon,
    ShoppingBagIcon,
    ArrowLeftEndOnRectangleIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

import { useRouter } from 'next/navigation'

import MenuLink from './menuLink/menuLink'

const menuItems = [
    {
        title: 'pages',
        list: [
            {
                title: 'dashboard',
                path: '/dashboard',
                icon: <ComputerDesktopIcon className='size-6' />
            },
            {
                title: 'users',
                path: '/dashboard/users',
                icon: <UserIcon className='size-6' />
            },
            {
                title: 'products',
                path: '/dashboard/products',
                icon: <ShoppingBagIcon className='size-6' />
            },
            {
                title: 'orders',
                path: '/dashboard/orders',
                icon: <ClipboardDocumentListIcon className='size-6' />
            }
        ]
    },
    {
        title: 'analytics',
        list: [{
            title: 'revenue',
            path: '/revenue',
            icon: <ChartBarSquareIcon className='size-6' />
        }]
    },
    {
        title: 'user',
        list: [
            {
                title: 'settings',
                path: '/settings',
                icon: <Cog6ToothIcon className='size-6' />
            }
        ]
    },
]

const Sidebar = () => {
    const t = useTranslations('DashboardPage')
    const router = useRouter()

    const handleLogout = () => {
        router.push('/login')
    }

    return (<div className='sticky top-5 gap-5 mb-5'>
        <div className='flex items-center mb-4'>
                <UserCircleIcon className='size-10 m-2' />
            <div className='flex flex-col'>
                <span className='text-medium'>John Joe</span>
                <span className='text-sm text-[#ccc]'>Administrator</span>
            </div>
        </div>
        <ul>
            {
                menuItems.map((cat) => (
                    <li key={cat.title} className=''>
                        <span className='text-sm mt-2.5 font-bold'>{t(`title-${cat.title}`)}</span>
                        { cat.list.map(item => (
                            <MenuLink title={item.title} path={item.path} icon={item.icon} key={item.title} />
                        ))}
                    </li>
                ))
            }
        </ul>
        <button
            onClick={handleLogout}
            className='flex items-center p-5 gap-2.5 cursor-pointer rounded-lg my-1 w-full hover:bg-[#2e374a]'>
            <ArrowLeftEndOnRectangleIcon className='size-6' />
            { t('item-logout') }
        </button>
    </div>)
}

export default Sidebar