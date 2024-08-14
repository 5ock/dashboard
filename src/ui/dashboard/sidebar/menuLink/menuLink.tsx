'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import cx from 'classnames'

interface MenuProps {
    title: string;
    path: string;
    icon: React.ReactNode;
}

const MenuLink = (props:MenuProps) => {
    const t = useTranslations('DashboardPage')
    const { title, path, icon } = props

    const pathname = usePathname()
    const isActive = pathname === path;
    
    return (<Link
        href={path}
        className={cx('flex p-5 items-center gap-2.5 hover:bg-[#2e374a] my-1 rounded-lg', isActive && 'bg-[#2e374a]')}
    >
        { icon }
        { t(`item-${title}`) }
    </Link>)
}

export default MenuLink