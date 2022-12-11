import imgSrc from "../../assets/images/ariana.jpeg";
import styles from '../../styles/Mobile.module.scss';

export default function TopSection(){

    return(
        <>
            <div className={styles.bgopacity}>
                <div className={styles.topsection}></div>
                <p className={styles.artistname}>ITZY</p>
            </div>


            <div className={styles.infosection}>
                <p className={styles.numberoflisteners}>6,115,987 monthly listners</p>

                <div className={styles.utilityelements}>
                    <button className={styles.followbutton}>Following</button>
                    
                    <div className={styles.morevert}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)"/></svg>
                    </div>
            
                </div>

            </div>

            {/* number of listeners, follow and play section */}

        </>
    );

}