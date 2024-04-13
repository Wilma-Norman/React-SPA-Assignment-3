import Me from '../../assets/me.png'
import styles from './About.module.css'
import React from 'react'
import MeInformation from './AboutData/Data'

const About = () => {
   
    return (
        <>
        <h2 className={styles.heading}>About Page</h2>
        <main className={styles.aboutContentWrapper}>
            <div className={styles.wraper}>                
                <img className={styles.image} src={Me} alt="me" />
                <div className={styles.infosection}>

                    {MeInformation.map((v, i)=>{
                        return (
                            <span key={i}>
                                {v}
                            </span>
                        )
                    })}

                </div>
            </div>
        </main>
        </>    
    )
}

export default About