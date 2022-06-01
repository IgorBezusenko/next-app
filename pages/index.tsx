import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Home from "../app/components/screens/home/Home";

const HomePage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Home/>
        </div>
    )
}

export default HomePage
