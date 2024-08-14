'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import cx from 'classnames'

export default function Button(props: ComponentProps<'button'>) {
    const { pending } = useFormStatus();
    const { className, ...rest } = props;


    return (<button
        className={cx(
            className,
            "block w-full rounded-md border border-slate-900 p-1 py-2 font-semibold shadow-sm transition-all disabled:opacity-60"
            // bgColor ? bgColor : 'bg-slate-900'
        )}
        disabled={pending}
        type="button"
        {...rest}
    />);
}