'use client'

import {ReactNode} from 'react'
import {useFormState} from 'react-dom'
// import LoginFormErrors from './LoginFormErrors'
// import {LoginFormResult} from './page'

export default function LoginForm({
  action,
  fields,
  header,
  submit
}: {
  action?(prev: unknown, data: FormData): Promise<{success: true} | {success: false; errors: string}>;
  fields: ReactNode;
  header: ReactNode;
  submit: ReactNode;
}) {
//   const [state, formAction] = useFormState(action, null);
// #192236
  return (
    <form
    //   action={formAction}
      className="mx-auto my-20 w-full max-w-[24rem] px-10 bg-[#232b3f] text-slate-50 rounded-md"
    >
      {header}
      <div className="mb-10 mt-5">
        {fields}
        {/* {state?.success === false && (
           <div className="mt-4">
             <LoginFormErrors errors={state.errors} />
           </div>
        )} */}
      </div>
      {submit}
    </form>
  )
}