'use client'

import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { ChatBubbleBottomCenterTextIcon, BellIcon } from "@heroicons/react/24/outline"


const Navbar = () => {
    const t = useTranslations('DashboardPage')
    const pathname = usePathname()

    const lastSegment = pathname.split('/').pop() || ''
    
    // Check if lastSegment is a number
    const displayText = isNaN(Number(lastSegment)) 
        ? t(`item-${lastSegment}`) 
        : lastSegment;

    return (<div className='flex items-center justify-between p-5 rounded-lg bg-cBgSoft'>
        <div className='text-cTextSoft font-bold'>{ displayText }</div>
        <div className='flex items-center gap-5'>
            <div></div>
            <div className='flex gap-5'>
                <ChatBubbleBottomCenterTextIcon className='size-6' />
                <BellIcon className='size-6' />
            </div>
        </div>
    </div>)
}

export default Navbar