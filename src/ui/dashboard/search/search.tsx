'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export type searchProps = {
    placeholder: string;
}

const Search = (props: searchProps) => {
    const { placeholder } = props

    return (<div className='flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg w-max'>
        <MagnifyingGlassIcon className='size-6' />
        <input
            type='text'
            placeholder={placeholder}
            className='bg-transparent border-none outline-none text-cTextMain'
        />
    </div>)
}

export default Search