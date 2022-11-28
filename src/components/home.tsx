import React from 'react'
import styles from './home.module.scss'


type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Нептунята</h2>
                <h2>Нептунята</h2>
            </div>
            <div className={styles.homeBody}>
                    <h1>Добро пожаловать в клуб "Нептунята"!</h1>
                    <p>В нашем клубе мы знакомим деток с водой, делаем массаж душем Алексеева и развиваем навыки плавания.</p>
            </div>
        </div >
    )
}

export default Home
