import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callBtn}>
                    <Image src='/assets/phone.png' alt='phone image' width={32} height={32} />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>123 456 789</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>HOME</li>
                    <li className={styles.listItem}>MENUS</li>
                    <li className={styles.listItem}>BLOG</li>
                    <li className={styles.listItem}>CONTACT US</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src='/assets/cart.png' alt='logo image' width={40} height={40} />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar