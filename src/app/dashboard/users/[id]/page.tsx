'use client'

import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

import styles from '@/ui/dashboard/users/singleUser/singleUser.module.css'
import { users, userProps } from '../page'

const SingleUserPage = () => {
    const t = useTranslations('DashboardPage')
    const pathname = usePathname()
    const id = pathname.split('/').pop()

    // test
    const userArry: userProps[] = users;
    const user: any = userArry.filter(el => el.id === id)![0];

    console.log(user)

    return (<div className={styles['container']}>
        {/* <div className={styles['infoContainer']}>

        </div> */}
        <div className={styles['formContainer']}>
            <form className='flex flex-col'>
                <label className={`${styles['form-lable']}`} >{ t('form-username') }</label>
                <input type='text' className={`${styles['form-input']}`} value={user.name} />
                <label className={`${styles['form-lable']}`} >{ t('form-email') }</label>
                <input className={`${styles['form-input']}`} type='email' value={user.email} />
                <label className={`${styles['form-lable']}`} >{ t('form-password') }</label>
                <input
                    type='password'
                    name='user_password_field'
                    id='user_password_field'
                    className={`${styles['form-input']}`}
                    placeholder={ t('form-password') }
                    autoComplete="new-password" 
                />
                <label className={`${styles['form-lable']}`} >{ t('form-phone') }</label>
                <input type='phone' className={`${styles['form-input']}`} value={user.phone} />
                <label className={`${styles['form-lable']}`} >{ t('form-address')}</label>
                <textarea
                    className={`w-full ${styles['form-textarea']}`}
                    name='address'
                    id='address'
                    rows={4}
                    placeholder={ t('form-address') }

                />
                <label className={`${styles['form-lable']}`} >{ t('form-is-admin') }</label>
                <select name='isAdmin' id='isAdmin' className={`${styles['form-select']}`}>
                    <option value='false'  className={`${styles['option-css']}`} selected>{ t('form-is-admin') }</option>
                    <option value='true' className={`${styles['option-css']}`}>{ t('form-yes') }</option>
                    <option value='false' className={`${styles['option-css']}`}>{ t('form-no') }</option>
                </select>
                <label className={`${styles['form-lable']}`} >{ t('form-is-active') }</label>
                <select name='isActive' id='isActive' className={`${styles['form-select']}`}>
                    <option value='true'  className={`${styles['option-css']}`} selected>{ t('form-is-active') }</option>
                    <option value='true' className={`${styles['option-css']}`}>{ t('form-yes') }</option>
                    <option value='false' className={`${styles['option-css']}`}>{ t('form-no') }</option>
                </select>
                <button className={`${styles['form-button']}`}>{ t('action-update') }</button>
            </form>
        </div>
    </div>)
}

export default SingleUserPage