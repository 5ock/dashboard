import { CircleStackIcon } from "@heroicons/react/24/outline"

const Card = () => {
    return (<div className='flex gap-5 bg-cBgSoft p-5 rounded-xl cursor-pointer w-full hover:bg-[#2e374a]'>
        <CircleStackIcon className='size-6' />
        <div className='flex flex-col gap-1'>
            <span>Total</span>
            <span className='text-lg'>12,456</span>
            <span className='text-sm font-light'>
                <span className=''>10%</span>
            </span>
        </div>
    </div>)
}

export default Card