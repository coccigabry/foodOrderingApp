import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import axios from 'axios'


const Product = ({ burger }) => {

    const [menuSize, setMenuSize] = useState(0)
    const [price, setPrice] = useState(burger.prices[0])


    const changePrice = (num) => {
        setPrice(price + num)
    }

    const handleMenuSize = (menuIdx) => {
        const diff = burger.prices[menuIdx] - burger.prices[menuSize]
        setMenuSize(menuIdx)
        changePrice(diff)
    }

    const handleExtra = (e, extra) => {
        const isChecked = e.target.checked

        isChecked ? changePrice(extra.price) : changePrice(-extra.price)

    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={burger.img} alt='burger image' fill style={{ objectFit: 'contain' }} />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{burger.title}</h1>
                <span className={styles.price}>€ {price.toFixed(2)}</span>
                <p className={styles.desc}>{burger.desc}</p>
                <h3 className={styles.choose}>Choose your menu</h3>
                <div className={styles.menus}>
                    <div className={styles.menu} onClick={() => handleMenuSize(0)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>Small</span>
                    </div>
                    <div className={styles.menu} onClick={() => handleMenuSize(1)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>Medium</span>
                    </div>
                    <div className={styles.menu} onClick={() => handleMenuSize(2)}>
                        <Image src='/assets/size.png' alt='menu icon' fill />
                        <span className={styles.size}>XXL</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Additional ingredients</h3>
                <div className={styles.ingredients}>
                    {
                        burger.extras.map(extra => (
                            <div className={styles.ingredient} key={extra._id}>
                                <input
                                    type="checkbox"
                                    id={extra.text}
                                    name={extra.text}
                                    className={styles.checkbox}
                                    onChange={(e) => handleExtra(e, extra)}
                                />
                                <label htmlFor={extra.text}>{extra.text}</label>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.add}>
                    <input id="input-number" type="number" defaultValue={1} className={styles.quantity} min={1} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props: {
            burger: res.data
        }
    }
}


export default Product
