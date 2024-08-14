import { useTranslations } from "next-intl"

import styles from '@/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProduct = () => {
    const t = useTranslations('DashboardPage')

    return (<div className="bg-cBgSoft p-5 rounded-lg mt-5">
        <form className={styles['form-css']}>
            <input type='text' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-title') } />
            <select name='cat' id='cat' className={`${styles['select-css']} ${styles['item-default-css']}`}>
                <option className={`${styles['option-css']}`} value=''>{ t('form-option-choose-a-category') }</option>
                <option className={`${styles['option-css']}`} value='phone'>{ t('form-option-phone') }</option>
                <option className={`${styles['option-css']}`} value='computer'>{ t('form-option-computer') }</option>
            </select>
            <input type='number' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-price') } />
            <input type='number' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-stock') } />
            <input type='text' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-color') } />
            <input type='text' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-size') } />
            <textarea
                className={`w-full ${styles['item-default-css']}`}
                name='desc'
                id='desc'
                rows={10}
                placeholder={ t('form-description') }

            ></textarea>
            <button className={`${styles['button-css']}`} type='submit'>{ t('action-add') }</button>
        </form>
    </div>)
}

export default AddProduct