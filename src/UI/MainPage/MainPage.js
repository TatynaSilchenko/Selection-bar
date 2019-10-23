import React from 'react';
import styles from './MainPage.module.css'
import SelectedElementTag from "./SelectedElementTag";
import Button from "./Button";
import {visibleSelectionWindow} from "../../REDUX/ElementsReduser";

const MainPage = ({elements=[],selectedElements=[],...props}) => {

    let onSelectionChange=()=>{
     props.visibleSelectionWindow(true)
    }

    return <div className={styles.mainPage}>
        <div> На данный момент у Вас выбрано {elements.length} элемент[a]:</div>
        <div className={styles.selectedElements}>
            {selectedElements.map(el=><SelectedElementTag title={el}  disabled={false} />)}
        </div>
        <div className={styles.customButton}>
            <Button onClick={onSelectionChange} disabled={props.visibleWindow}>Изменить мой выбор</Button>
        </div>



    </div>

}
export default MainPage