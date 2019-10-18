import React from 'react';
import styles from './ElementsSelector.module.css'
import MainPage from "./MainPage/MainPage";
import DialogPageContainer from "./DialogPage/DialogPageContainer";

const ElementsSelector = (props) => {
    return (
        <div className={styles.elementsSelector}>
            <MainPage/>
            <DialogPageContainer/>
        </div>
    );
}

export default ElementsSelector;
