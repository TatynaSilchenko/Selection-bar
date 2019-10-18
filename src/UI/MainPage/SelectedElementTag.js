import React from 'react';
import styles from './SelectedElementTag.module.css'

const SelectedElementTag = ({title}) => {
    return <div className={styles.selectedElementTag}>
        {title} | <button className={styles.removeButton}>X</button>
    </div>

}
export default SelectedElementTag