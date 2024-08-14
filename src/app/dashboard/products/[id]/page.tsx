'use client'

import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

import styles from '@/ui/dashboard/products/singleProduct/singleProduct.module.css'
import { productProps } from '../page'

const SingleProduct = () => {
    const t = useTranslations('DashboardPage')
    const pathname = usePathname()
    const id = pathname.split('/').pop()

    const products: productProps[] = [
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
    // test
    const productArray: productProps[] = products;
    const product: any = productArray.filter(el => el.id === id)![0];


    return (<div className={styles['container']}>
        {/* <div className={styles['infoContainer']}>

        </div> */}
        <div className={styles['formContainer']}>
            <form className='flex flex-col'>
                <label className={`${styles['form-lable']}`} >{ t('form-title') }</label>
                <input type='text' className={`${styles['form-input']}`} value={product.title} />

                <label className={`${styles['form-lable']}`} >{ t('form-price') }</label>
                <input className={`${styles['form-input']}`} type='price' value={product.price} />

                <label className={`${styles['form-lable']}`} >{ t('form-stock') }</label>
                <input type='phone' className={`${styles['form-input']}`} value={product.stock} />

                <label className={`${styles['form-lable']}`} >{ t('form-description')}</label>
                <textarea
                    className={`w-full ${styles['form-textarea']}`}
                    name='description'
                    id='description'
                    rows={4}
                    placeholder={ t('form-description') }

                />
                
                <label className={`${styles['form-lable']}`} >{ t('form-category') }</label>
                <select name='cat' id='cat' className={`${styles['form-select']}`}>
                    <option className={`${styles['option-css']}`} value=''>{ t('form-option-choose-a-category') }</option>
                    <option className={`${styles['option-css']}`} value='phone'>{ t('form-option-phone') }</option>
                    <option className={`${styles['option-css']}`} value='computer'>{ t('form-option-computer') }</option>
                </select>
                <button className={`${styles['form-button']}`}>{ t('action-update') }</button>
            </form>
        </div>
    </div>)
}

export default SingleProduct