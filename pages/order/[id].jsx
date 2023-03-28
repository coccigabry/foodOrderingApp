import styles from '../../styles/Order.module.css'
import { Total } from '@/components/Total'
import Status from '@/components/Status'
import axios from 'axios'


const Order = ({ yourOrder }) => {

    const status = yourOrder.status

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.trTitle}>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                yourOrder.map(order => (
                                    <tr className={styles.trData} key={order._id}>
                                        <td>
                                            <span className={styles.id}>{order._id}</span>
                                        </td>
                                        <td>
                                            <span className={styles.name}>{order.customer}</span>
                                        </td>
                                        <td>
                                            <span className={styles.address}>{order.address}</span>
                                        </td>
                                        <td>
                                            <span className={styles.total}>€ {order.total}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Status status={status} />
            </div>
            <div className={styles.right}>
                <Total page='order' />
            </div>
        </div>
    )
}


const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params._id}`)
    return {
        props: { yourOrder: res.data }
    }
}


export default Order