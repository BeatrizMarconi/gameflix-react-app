import CategoryList from "./CategoryList";
import Icons from "./Icons";
import Logo from "./Logo";
import styles from "./Header.module.css"

export default function Header () {
    return (
        <div className= {styles.containerMain}>
            <div>
                <Logo/>
                <CategoryList/>
                <Icons/>
            </div>
        </div>
    )
}