import styles from '../styles/Status.module.css'
import Image from 'next/image'


const Status = ({ status }) => {

    const status = status

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }


    return (
        <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image
                    src='/assets/paid.png'
                    alt='paid icon'
                    width={30}
                    height={30}
                />
                <span>Payment</span>
                <div className={styles.checked}>
                    <Image
                        className={styles.checkedIcon}
                        src='/assets/checked.png'
                        alt='checked icon'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image
                    src='/assets/grill.png'
                    alt='paid icon'
                    width={30}
                    height={30}
                />
                <span>Preparing</span>
                <div className={styles.checked}>
                    <Image
                        className={styles.checkedIcon}
                        src='/assets/checked.png'
                        alt='checked icon'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image
                    src='/assets/out.png'
                    alt='paid icon'
                    width={30}
                    height={30}
                />
                <span>Out for delivery</span>
                <div className={styles.checked}>
                    <Image
                        className={styles.checkedIcon}
                        src='/assets/checked.png'
                        alt='checked icon'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className={statusClass(3)}>
                <Image
                    src='/assets/delivered.png'
                    alt='paid icon'
                    width={30}
                    height={30}
                />
                <span>Delivered</span>
                <div className={styles.checked}>
                    <Image
                        className={styles.checkedIcon}
                        src='/assets/checked.png'
                        alt='checked icon'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default Status