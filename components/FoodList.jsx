import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'


const FoodList = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BEST BURGERS IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada
                pellentesque elit eget gravida cum. Posuere urna nec tincidunt praesent semper. In hac
                habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
            </p>
            <div className={styles.wrapper}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </div>
    )
}

export default FoodList