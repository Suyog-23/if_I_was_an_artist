import styles from '../../styles/PopularTracks.module.css';
import PopularSong from './PopularSongs';

export default function PopularTracks(){
    return (
        <>
            <h4 className={styles.sectiontitle}>Popular</h4>
            <PopularSong></PopularSong>
        </>
    );
}