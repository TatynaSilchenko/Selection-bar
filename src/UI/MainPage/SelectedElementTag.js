import React from 'react';
import styles from './SelectedElementTag.module.css'

const SelectedElementTag = ({title,setUnselectedElement, ...props}) => {
    let onUnselectElement=(e)=>{
        setUnselectedElement(title)
    }

    return <div className={styles.selectedElementTag}>
        {title} | <button className={styles.removeButton}
                          onClick={onUnselectElement} >X</button>
    </div>

}
export default SelectedElementTag