import Cards from "./Cards";
import styles from './GamesList.module.css'

export default function GamesList () {
    return (
        <div className= {styles.gamesList}>
            <div>
                <div>
                    <h2>JOGOS RETRÔ</h2>
                </div>
            </div>

            <div>
                <ul>
                    <Cards/>
                </ul>
            </div>
        </div>
    )
}