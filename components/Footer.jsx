import Image from 'next/image'
import styles from '../styles/Footer.module.css'


const Footer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/assets/bg.jpg' fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        COCCEAT. FOOD DELIVERY IN A BLINK OF EYE.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        WHERE WE ARE
                    </h1>
                    <p className={styles.text}>
                        16158 Voltri
                        <br /> Genoa, Italy
                        <br /> +39 123 45 67 890
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        DELIVERY TIME
                    </h1>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 00:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer