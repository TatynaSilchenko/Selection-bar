import React from 'react';
import styles from './MainPage.module.css'
import SelectedElementTag from "./SelectedElementTag";
import Button from "./Button";

const MainPage = ({elements=[]}) => {
    return <div className={styles.mainPage}>
        <div> На данный момент у Вас выбрано {elements.length} элемент[a]:</div>
        <div className={styles.selectedElements}>
            <SelectedElementTag />
            <SelectedElementTag />
        </div>
        <div className={styles.customButton}>
            <Button>Изменить мой выбор</Button>
        </div>



    </div>

}
export default MainPage