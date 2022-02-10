import CategoryList from "./CategoryList";
import Icons from "./Icons";
import Logo from "./Logo";

export default function Header () {
    return (
        <div>
            <div>
                <Logo/>
                <CategoryList/>
                <Icons/>
            </div>
        </div>
    )
}