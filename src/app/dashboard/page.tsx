import Card from "@/ui/dashboard/card/card"
import Chart from "@/ui/dashboard/chart/chart"
import Orders from "@/ui/dashboard/orders/orders"

const Dashboard = () => {

    return (<div className='flex gap-5 mt-4 '>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex gap-5 justify-between'>
                <Card />
                <Card />
                <Card />
            </div>
            <Orders />
            <Chart />
        </div>
    </div>)
}

export default Dashboard