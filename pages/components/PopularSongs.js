import Image from "next/image";

import styles from "../../styles/PopularSong.module.css";

export default function PopularSong(){
    return (
        <>
        {/* 1st song */}
            <div className={styles.song}>
                <div className={styles.songnumber}>
                1
                </div>
                <div className={styles.songimage}>
                    <img src="https://i.scdn.co/image/ab67616d0000b273e61bca92e4a64e50ee44a009" height="42px" width="42pxß"></img>
                </div>
                <div className={styles.nameandstreams}>
                    SNEAKERS <br></br>
                    <div className={styles.streams}>49,722,631</div>
                </div>
                <div className={styles.songvert}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)"/></svg>
                </div>
            </div>

        </>
    );
}