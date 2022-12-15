import React from 'react'
import styles from './home.module.scss'
import ReactSlickDemo from './slick/slick.js';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>AquaBabyClub</h2>
                <h2>AquaBabyClub</h2>
            </div>
            <div className={styles.homeBody}>
                    <h1>Добро пожаловать в "Aqua Baby Club"!</h1>
                    <h4>В нашем клубе мы знакомим деток с водой, делаем массаж душем Алексеева и развиваем навыки плавания.</h4>
                    </div>
                <ReactSlickDemo />
        </div >
    )
}

export default Home
