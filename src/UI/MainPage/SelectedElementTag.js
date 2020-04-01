import React from 'react';
import styles from './SelectedElementTag.module.css'

const SelectedElementTag = ({element,setUnselectedElement, ...props}) => {

    let onUnselectElement=(e)=>{
        setUnselectedElement(element)
    }

    return <div className={styles.selectedElementTag}>
        {element.title} | <button className={styles.removeButton}
                          onClick={onUnselectElement} >X</button>
    </div>

}
export default SelectedElementTag