import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Search from '@/ui/dashboard/search/search'
import Pagination from '@/ui/pagination'

export type productProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    createdAt: string;
    stock: number;
    status: string;
}

export const products: productProps[] = [
    {
        id: '0000000000001',
        title: 'product-1',
        description: 'product-1',
        price: 123,
        createdAt: '2024.01.01',
        stock: 23,
        status: 'Active'
    }
]

const Products = () => {
    const t = useTranslations('DashboardPage')

    return (<div className='bg-cBgSoft p-5 rounded-lg mt-5'>
        <div className='flex items-center justify-between'>
            <Search placeholder={ t('search-for-a-user') } />
            <Link href='/dashboard/products/add'>
                <button className='p-2.5 bg-[#5d57c9] text-cTextMain rounded-md cursor-pointer'>{ t('add-new') }</button>
            </Link>
        </div>
        <table className='w-full mt-2'>
            <thead>
                <tr>
                    <td className='p-2'>{ t('th-title') }</td>
                    <td className='p-2'>{ t('th-description') }</td>
                    <td className='p-2'>{ t('th-price') }</td>
                    <td className='p-2'>{ t('th-createdAt') }</td>
                    <td className='p-2'>{ t('th-stock') }</td>
                    <td className='p-2'>{ t('th-status') }</td>
                    <td className='p-2'>{ t('th-action') }</td>
                </tr>
            </thead>
            <tbody>
                { products && products.map((el: productProps, index: number) => (
                    <tr key={`${el.title}-${index}`}>
                        <td className='p-2'>{ el.title }</td>
                        <td className='p-2'>{ el.description }</td>
                        <td className='p-2'>{ el.price }</td>
                        <td className='p-2'>{ el.createdAt }</td>
                        <td className='p-2'>{ el.stock }</td>
                        <td className='p-2'>{ el.status }</td>
                        <td className='p-2'>
                            <div className='flex gap-2'>
                                <Link href={`/dashboard/products/${el.id}`}>
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

export default Products