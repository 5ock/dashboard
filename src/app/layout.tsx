import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import clsx from 'clsx'

import './global.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Dashboard",
    description: "dashbaord",
}
 
export default async function LocaleLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();
 
    return (<html lang={locale}>
        {/* <head>example</head> */}
        <body
            className={clsx(
              'flex min-h-[100vh] flex-col',
              inter.className
            )}>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </body>
    </html>)
}