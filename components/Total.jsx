import styles from '../styles/Total.module.css'


export const Total = ({ page }) => {

    const additionalClass = page === 'cart' ? styles.cartBtn : styles.orderBtn

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>€ 19.80
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>€ 0.80
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>€ 19.00
            </div>
            <button disabled={page !== 'cart'} className={`${styles.button} ${additionalClass}`}>
                {page === 'cart' ? 'CHECKOUT' : 'PAID'}
            </button>
        </div>

    )
}
