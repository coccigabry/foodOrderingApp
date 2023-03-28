import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { Total } from '@/components/Total'
import { useSelector } from 'react-redux'



const Cart = () => {

    const cart = useSelector(store => store)


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
                        {
                            cart.products.map(prod => (
                                <tr className={styles.trData} key={prod._id}>
                                    <td>
                                        <div className={styles.imgContainer}>
                                            <Image
                                                src={prod.img}
                                                alt='burger image'
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.name}>{prod.title}</span>
                                    </td>
                                    <td>
                                        <span className={styles.extras}>
                                            {
                                                prod.extras.map(extra => <span key={extra._id}>{extra.text}<br /></span>)
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.price}>€ {prod.price.toFixed(2)}</span>
                                    </td>
                                    <td>
                                        <span className={styles.quantity}>x {prod.quantity}</span>
                                    </td>
                                    <td>
                                        <span className={styles.total}>€ {(prod.price * prod.quantity).toFixed(2)}</span>
                                    </td>
                                </tr>
                            ))
                        }
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