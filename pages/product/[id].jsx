import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '@/redux/features/cartSlice'


const Product = ({ burger }) => {

    const [menuSize, setMenuSize] = useState(0)
    const [price, setPrice] = useState(burger.prices[0])
    const [extras, setExtras] = useState([])
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()


    const changePrice = (num) => {
        setPrice(price + num)
    }

    const handleMenuSize = (menuIdx) => {
        const diff = burger.prices[menuIdx] - burger.prices[menuSize]
        setMenuSize(menuIdx)
        changePrice(diff)
    }

    const handleExtra = (e, option) => {
        const isChecked = e.target.checked

        if (isChecked) {
            changePrice(option.price)
            setExtras(prev => [...prev, option])
        } else {
            changePrice(-option.price)
            setExtras(extras.filter(extra => extra._id !== option._id))
        }
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
                        burger.extras.map(option => (
                            <div className={styles.ingredient} key={option._id}>
                                <input
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox}
                                    onChange={(e) => handleExtra(e, option)}
                                />
                                <label htmlFor={option.text}>{option.text}</label>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.add}>
                    <input
                        id="input-number"
                        type="number"
                        defaultValue={1}
                        min={1}
                        className={styles.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button className={styles.button} onClick={() => dispatch(addProduct({ ...burger, extras, price, quantity }))}>Add to Cart</button>
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
