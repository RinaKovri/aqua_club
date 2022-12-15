import React from 'react'
import styles from './contact.module.scss'

type ContactProps = {

}

const ContactUs: React.FC<ContactProps> = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
        <div className={styles.phone}></div>
        <h2 className={styles.head2}>+358123456789</h2>
        </li>
        <li>
          <div className={styles.insta}></div>
          <h2 className={styles.head2}>swimming_deti</h2>
        </li>
      </ul>
    </div>
  )
}

export default ContactUs
