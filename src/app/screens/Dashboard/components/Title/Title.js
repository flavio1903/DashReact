import React from 'react';
import styles from './styles.js';

function Title({children}) {
    return <h1 style={styles.title}>{children}</h1>;
}

export default Title;