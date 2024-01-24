import { BackIcon } from "@/components/icons/back-icon"
import styles from "./page.module.css"

interface DrinkPageProps {

}
export default function DrinkPage(props : DrinkPageProps){
    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <button className={styles.backBtn}>
                    <BackIcon/>
                </button>
                <h1 className={styles.title}>lemon</h1>
            </header>
        </main>
    )
}