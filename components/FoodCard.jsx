import styles from '../styles/FoodCard.module.css'
import Image from 'next/image'


const FoodCard = () => {

    return (
        <div className={styles.container}>
            <Image src='/assets/burger.png' alt='burger image' width={300} height={300} style={{ objectFit: 'contain' }} />
            <h1 className={styles.title}>BURGER #0</h1>
            <span className={styles.price}>€ 9.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    )
}

export default FoodCard