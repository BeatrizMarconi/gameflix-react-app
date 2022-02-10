import CategoryList from "./categoryList";
import Logo from "./Logo";

export default function Header () {
    return (
        <div>
            <div>
                <Logo/>
                <CategoryList/>
            </div>
        </div>
    )
}