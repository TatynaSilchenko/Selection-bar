import React from 'react';
import styles from './ElementsSelector.module.css'
import MainPage from "./MainPage/MainPage";
import DialogPageContainer from "./DialogPage/DialogPageContainer";
import MainPageContainer from "./MainPage/MainPageContainer";

const ElementsSelector = (props) => {
    return (
        <div className={styles.elementsSelector}>
            <MainPageContainer/>
            <DialogPageContainer/>
        </div>
    );
}

export default ElementsSelector;
