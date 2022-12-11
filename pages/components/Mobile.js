import styles from '../../styles/Mobile.module.scss';
import PopularTracks from './Popular';
import TopSection from './TopSection';

export default function Mobile(){

    return (
        <div className={styles.iphone_x}>

            {/* <i>Speaker</i>
            <b>Camera</b> */}

            {/* the artist image and info section */}
            <TopSection></TopSection>

            {/* popular tracks */}
            <PopularTracks></PopularTracks>

        </div>
    );

}