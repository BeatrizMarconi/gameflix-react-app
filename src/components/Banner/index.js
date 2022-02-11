import ImgBanner from "../../Assets/Images/Banner/banner.jpg"
import styles from './Banner.module.css'

export default function Banner () {
    return (
        <div className= {styles.banner}>
            <img src= {ImgBanner} alt="Banner"/>
        </div>
    )
}