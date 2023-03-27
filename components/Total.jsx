import { useSelector } from 'react-redux'
import styles from '../styles/Total.module.css'


export const Total = ({ page }) => {

    const total = useSelector(store => store.total)

    const additionalClass = page === 'cart' ? styles.cartBtn : styles.orderBtn


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>€ {total.toFixed(2)}
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>€ 0.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>€ {total.toFixed(2)}
            </div>
            <button disabled={page !== 'cart'} className={`${styles.button} ${additionalClass}`}>
                {page === 'cart' ? 'CHECKOUT' : 'PAID'}
            </button>
        </div>

    )
}
