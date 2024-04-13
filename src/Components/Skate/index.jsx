import styles from './Skate.module.css'
import firstskate from '../../assets/skatepc1.png'
import seccondskate from '../../assets/skate2.png'
import thirdskate from '../../assets/skater3.png'
import React from 'react'
import skibData from './DataSkate/Data'

const Skate = () => {
    const [skateData, infoSkateData] = skibData;

    let [skate, setSkate] = React.useState(skateData)
    let [infoSkate, setInfoSkate] = React.useState(infoSkateData)

    return (
        <>
        <h2 className={styles.header}>Skate Page</h2>
        <main className={styles.wraper}>
            <div className={styles.imageSection}>
                <img className={styles.image} src={firstskate} alt="Image"/>
                <img className={styles.image} src={seccondskate} alt="Image"/>
                <img className={styles.image} src={thirdskate} alt="Image"/>
            </div>
            <div className={styles.content}>
                <div className={styles.skateText}>
                    {skate}
                </div>
                <div className={styles.skateText}>
                    {infoSkate}
                </div>
                <div className={styles.skateText}>
                    {skate}
                </div>
                <div className={styles.skateText}>
                    {infoSkate}
                </div>
                <div className={styles.skateText}>
                    {skate}
                </div>
                <div className={styles.skateText}>
                    {skate}
                </div>
            </div>
            </main>
        </>
    )
}

export default Skate