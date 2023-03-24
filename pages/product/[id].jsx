import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'


const Product = () => {

    const [menuSize, setMenuSize] = useState(0)

    const burger = {
        id: 1,
        img: '/assets/burger.png',
        name: 'Classic Burger',
        price: [9.90, 12.90, 15.90],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={burger.img} alt='burger image' fill style={{ objectFit: 'contain' }} />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{burger.name}</h1>
                <span className={styles.price}>€ {burger.price[menuSize]}</span>
                <p className={styles.desc}>{burger.desc}</p>
                <h3 className={styles.choose}>Choose your menu</h3>
                <div className={styles.menus}>
                    <div className={styles.menu} onClick={() => setMenuSize(0)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>Small</span>
                    </div>
                    <div className={styles.menu} onClick={() => setMenuSize(1)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>Medium</span>
                    </div>
                    <div className={styles.menu} onClick={() => setMenuSize(2)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>XXL</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id="bacon" name="bacon" className={styles.checkbox} />
                        <label htmlFor="bacon">Bacon</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
                        <label htmlFor="cheese">Cheese</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id="egg" name="egg" className={styles.checkbox} />
                        <label htmlFor="egg">Egg</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id="jalapeno" name="jalapeno" className={styles.checkbox} />
                        <label htmlFor="jalapeno">Jalapeno</label>
                    </div>
                    <div className={styles.ingredient}>
                        <input type="checkbox" id="avocado" name="avocado" className={styles.checkbox} />
                        <label htmlFor="avocado">Avocado</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input id="input-number" type="number" defaultValue={1} className={styles.quantity} min={1} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
