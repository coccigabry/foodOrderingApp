import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { Total } from '@/components/Total'



const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.trData}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src='/assets/burger.png'
                                        alt='burger image'
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CHICKEN BREAST</span>
                            </td>
                            <td>
                                <span className={styles.extras}>Bacon, Avocado</span>
                            </td>
                            <td>
                                <span className={styles.price}>€ 9.90</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>x 2</span>
                            </td>
                            <td>
                                <span className={styles.total}>€ 19.80</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <Total page='cart' />
            </div>
        </div>
    )
}

export default Cart

//  className={styles.container}