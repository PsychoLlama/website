import React from 'react';
import TmuxShell from '../components/TmuxShell';
import * as styles from './_404.css';

export default function BlameMongoDb() {
  return (
    <TmuxShell>
      <div className={styles.container}>
        <p className={styles.headers}>
          HTTP/1.1 <span className={styles.redHighlight}>404</span>
          <br />
          Server: bash/2.03 (Unix)
          <br />
          Content-Type: text/plain; charset=ascii
        </p>

        <p className={styles.body}>cat: no such file or directory.</p>
      </div>
    </TmuxShell>
  );
}
