import ImgLogo from '../../../Assets/Images/Header/logo.jpg'
import style from './Logo.module.css'

export default function Logo (){
    return (
        <div className= {style.logo}>
            <div>
                <img src={ImgLogo} alt="Logo"/>
            </div>
        </div>

    )
}