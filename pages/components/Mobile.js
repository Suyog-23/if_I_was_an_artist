import styles from '../../styles/Mobile.module.scss';

export default function Mobile(){

    return (
        <div className={styles.iphone_x}>

            <i>Speaker</i>
            <b>Camera</b>

            <div className={styles.topsection}>
                <p className={styles.artistname}>Ariana Grande</p>
            </div>

            {/* <s>10:24</s>

            <p className={styles.content}>meri mari lol</p> */}

            {/* <span>Left action button</span>
            <span>Right action button</span> */}

        </div>
    );

}