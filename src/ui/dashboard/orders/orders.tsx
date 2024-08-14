import { useTranslations } from 'next-intl'

export type order = {
    name: string;
    status: string;
    date: string;
    amount: number;
}

const Orders = () => {
    const t = useTranslations('DashboardPage')


    const orderList: order[] = [
        {
            name: 'John',
            status: 'pending',
            date: '2020.01.01',
            amount: 123
        },
        {
            name: 'Tom',
            status: 'done',
            date: '2020.01.02',
            amount: 124
        },
        {
            name: 'Mary',
            status: 'cancelled',
            date: '2020.01.03',
            amount: 124
        }
    ]

    const getStatusBgColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-[#f7cb7375]'; // Example color for pending
            case 'done':
                return 'bg-[#afd6ee75]'; // Example color for done
            case 'cancelled':
                return 'bg-[#f7737375]'; // Example color for cancelled
            default:
                return 'bg-gray-200'; // Default color
        }
    }

    return (<div className='bg-cBgSoft p-5 rounded-xl'>
        <h2 className='mb-5 font-light text-cTextSoft'>{ t('orders-title') }</h2>
        <table className="w-full">
            <thead>
                <tr>
                    <td className='text-left p-2.5'>{ t('th-name')}</td>
                    <td className='text-left p-2.5'>{ t('th-status')}</td>
                    <td className='text-left p-2.5'>{ t('th-date')}</td>
                    <td className='text-left p-2.5'>{ t('th-amount')}</td>
                </tr>
            </thead>
            <tbody>
                { orderList && orderList.map((el, index) => (
                    <tr key={el.name + index}>
                        <td className='text-left p-2.5'>{ el.name }</td>
                        <td className={`text-left p-2.5`}>
                            <span className={`rounded-md p-1 text-sm text-white ${getStatusBgColor(el.status)}`} >
                                { el.status }
                            </span>
                        </td>
                        <td className='text-left p-2.5'>{ el.date }</td>
                        <td className='text-left p-2.5'>${ el.amount }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}

export default Orders