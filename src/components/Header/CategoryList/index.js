import styles from './CategoryList.module.css'

export default function CategoryList () {
    return (
        <div className= {styles.categoryList}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href= "/#">Início</a>
                        </li>

                        <li>
                            <a href= "/#">Categorias</a>
                        </li>

                        <li>
                            <a href= "/#">Jogos</a>
                        </li>

                        <li>
                            <a href= "/#">Bombando</a>
                        </li>

                        <li>
                            <a href= "/#">Minha Lista</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}