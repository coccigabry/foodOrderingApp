import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {

    const quantity = useSelector((store) => store.quantity)


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
                <Link href='/cart' passHref>
                    <div className={styles.cart}>
                        <Image src='/assets/cart.png' alt='logo image' width={40} height={40} />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar