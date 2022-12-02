import React from 'react'
import styles from './contact.module.scss'

type ContactProps = {

}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src='phone.png' alt='phone'></img>
        <h2 className={styles.head2}>+358406586963</h2>
      </div>
    </div>
  )
}

export default Contact
