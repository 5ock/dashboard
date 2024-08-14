// import withNextIntl from 'next-intl/plugin';
// import path from 'path';

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     // i18n: {
//     //     locales: ['en-us', 'zh-tw'],
//     //     defaultLocale: 'zh-tw',
//     // },
// };

// export default withNextIntl(path.resolve('./i18n.js'))(nextConfig);

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);