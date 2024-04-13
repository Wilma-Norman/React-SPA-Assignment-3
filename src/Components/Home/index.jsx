import React from 'react'
import styles from './Home.module.css'
import HomepageData from './Data/Data'
import shapes from '../../assets/shapes.png'

const Home = () => {
    const [nameData, webData] = HomepageData;

    let [name, setName] = React.useState(nameData)
    let [web, setWeb] = React.useState(webData)
    
    return(
        <>  
        <h1 className={styles.header}>Welcome</h1>
        <main className={styles.contentWraper}>
            <div className={styles.wraper}>
                <div className={styles.firstInfoContainer}>
                    {name}
                </div>
                <div className={styles.seccondInfoContainer}>
                    {name}
                </div>
            </div>
        </main>

        <main className={styles.contentWraper}>
            <div className={styles.wraper}>
                <div className={styles.imageContainer}>
                    <img className={styles.underImage} src={shapes} alt="Image"/>
                </div>
                <div className={styles.seccondInfoContainer}>
                   {web}
                </div>
            </div>
        </main>
        </>
    )
}

export default Home

