import { useTranslations } from "next-intl"

import styles from '@/ui/dashboard/users/addUser/addUser.module.css'

const AddUser = () => {
    const t = useTranslations('DashboardPage')

    return (<div className="bg-cBgSoft p-5 rounded-lg mt-5">
        <form className={styles['form-css']}>
            <input type='text' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-username') } />
            <input type='email' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-email') } />
            <input
                type='password'
                name='user_password_field'
                id='user_password_field'
                className={`${styles['input-css']} ${styles['item-default-css']}`}
                placeholder={ t('form-password') }
                autoComplete="new-password" 
            />
            <input type='phone' className={`${styles['input-css']} ${styles['item-default-css']}`} placeholder={ t('form-phone') } />
            <select name='isAdmin' id='isAdmin' className={`${styles['select-css']} ${styles['item-default-css']}`}>
                <option value='false'  className={`${styles['option-css']}`} selected>{ t('form-is-admin')}</option>
                <option value='true' className={`${styles['option-css']}`}>{ t('form-yes')}</option>
                <option value='false' className={`${styles['option-css']}`}>{ t('form-no')}</option>
            </select>
            <select name='isActive' id='isActive' className={`${styles['select-css']} ${styles['item-default-css']}`}>
                <option value='true'  className={`${styles['option-css']}`} selected>{ t('form-is-active')}</option>
                <option value='true' className={`${styles['option-css']}`}>{ t('form-yes')}</option>
                <option value='false' className={`${styles['option-css']}`}>{ t('form-no')}</option>
            </select>
            <textarea
                className={`w-full ${styles['item-default-css']}`}
                name='address'
                id='address'
                rows={10}
                placeholder={ t('form-address') }

            ></textarea>
            <button className={`${styles['button-css']}`} type='submit'>{ t('action-add') }</button>
        </form>
    </div>)
}

export default AddUser