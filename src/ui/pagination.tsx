'use client'

import { useState } from "react"
import cx from 'classnames'
import { useTranslations } from "next-intl"

const Pagination = () => {
    const t = useTranslations('Global')
    const [ curPage, setCurPage ] = useState<number>(1)
    
    const pages = [1,2,3,4,5]

    const handleSwitch = (pagNum: number): void => {
        setCurPage(pagNum)
    }

    const handlePrevious = () => {
        if(curPage === 1)
            return

        setCurPage(curPage - 1)
    }

    const handleNext = () => {
        if(curPage === pages.length)
            return

        setCurPage(curPage + 1)
    }

    return (<nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
            <li onClick={handlePrevious}>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    { t('previous') }
                </a>
            </li>
            { pages.map((el, index) => {
                const defaultStyle = 'flex items-center justify-center px-3 h-8 border border-gray-300 dark:border-gray-700'
                const unSelected = 'leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                const selected = 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'

                return (
                <li onClick={() => handleSwitch(index + 1)}>
                    <a
                        href="#"
                        className={cx(defaultStyle, index + 1 === curPage ? selected : unSelected)}
                    >{index + 1}</a>
                </li>)
            })}
            <li onClick={handleNext}>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    { t('next') }
                </a>
            </li>
        </ul>
    </nav>)
}

export default Pagination