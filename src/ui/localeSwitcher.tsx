import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './localeSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'tw',
          label: t('tw')
        }
      ]}
      label={t('label')}
    />
  );
}