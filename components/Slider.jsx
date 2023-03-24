import Image from "next/image"
import { useState } from "react"
import styles from '../styles/Slider.module.css'


const Slider = () => {

    const [slideIdx, setSlideIdx] = useState(0)

    const images = [
        '/assets/slide1.png',
        '/assets/slide2.png',
        '/assets/slide3.png',
    ]

    const handleSlider = (direction) => {
        if (direction === 'left') {
            setSlideIdx(slideIdx !== 0 ? slideIdx - 1 : 2)
        } else {
            setSlideIdx(slideIdx !== 2 ? slideIdx + 1 : 0)
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0, objectFit: 'contain' }} onClick={() => handleSlider('left')} >
                <Image src='/assets/arrowL.png' alt='left arrow' fill />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * slideIdx}vw)` }} >
                {
                    images.map((img, idx) => (
                        <div key={idx} className={styles.imgContainer} >
                            <Image src={img} alt='food image' fill style={{ objectFit: 'contain' }} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.arrowContainer} style={{ right: 0, objectFit: 'contain' }} onClick={() => handleSlider('right')} >
                <Image src='/assets/arrowR.png' alt='right arrow' fill />
            </div>
        </div>
    )
}

export default Slider