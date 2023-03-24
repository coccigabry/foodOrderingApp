import styles from '../../styles/Order.module.css'
import { Total } from '@/components/Total'
import Status from '@/components/Status'


const Order = () => {

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
                            <tr className={styles.trData}>
                                <td>
                                    <span className={styles.id}>3582430663</span>
                                </td>
                                <td>
                                    <span className={styles.name}>Cocci Gabry</span>
                                </td>
                                <td>
                                    <span className={styles.address}>16158 Voltri (GE)</span>
                                </td>
                                <td>
                                    <span className={styles.total}>€ 19.80</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Status />
            </div>
            <div className={styles.right}>
                <Total page='order' />
            </div>
        </div>
    )
}

export default Order