import React from 'react';
import styles from './ElementsSelector.module.css'
import MainPage from "./MainPage/MainPage";
import DialogPage from "./DialogPage/DialogPage";

const ElementsSelector = (props) => {
    return (
        <div>
            <MainPage/>
            <DialogPage/>
        </div>
    );
}

export default ElementsSelector;
