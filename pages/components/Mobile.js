import styles from '../../styles/Mobile.module.scss';
import TopSection from './TopSection';

export default function Mobile(){

    return (
        <div className={styles.iphone_x}>

            <i>Speaker</i>
            <b>Camera</b>

            {/* the artist image and info section */}
            <TopSection></TopSection>

            {/* <s>10:24</s>

            <p className={styles.content}>meri mari lol</p> */}

            {/* <span>Left action button</span>
            <span>Right action button</span> */}

        </div>
    );

}