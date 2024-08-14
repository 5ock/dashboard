import { redirect }from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import LocaleSwitcher from '@/ui/localeSwitcher'
import Link from 'next/link'

import Button from '@/ui/button'
import FormField from '@/ui/formField'
import LoginForm from './LoginForm'

async function loginAction(
    prev: unknown,
    data: FormData
): Promise<{ success: true } | { success: false; errors: string }> {

    return {success: true}
}

export default function LoginPage() {
    const t = useTranslations('LoginPage')
    const locale = useLocale()

    return (<>
        <div className="absolute right-8 top-8 ">
            <LocaleSwitcher />
        </div>
        <LoginForm
            key={locale}
        //  action={loginAction}
            fields={
                <div className="flex flex-col gap-5">
                <FormField
                    label={t('username')}
                    placeholder="Username"
                    required
                />
                <FormField
                    label={t('password')}
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                />
                </div>
            }
            header={
                <div className="text-center">
                {/* <UsersIcon className="mx-auto h-14 w-14 text-slate-900" /> */}
                <h1 className="mt-8 text-4xl font-semibold tracking-tight">
                    {t('title')}
                </h1>
                {/* <p className="mt-2 text-slate-700">{t('description')}</p> */}
                </div>
            }
            submit={<>
                <div className="mb-4 h-10">
                    <Button className='btn-confirm' type="submit">{t('login')}</Button>
                </div>
                <div className="mb-4 h-10">
                    <Link href='/dashboard' className=':hover'>
                        <Button className='btn-cancel text-black'>{t('skip')}</Button>
                    </Link>
                </div>
            </>}
        />
    </>)
}