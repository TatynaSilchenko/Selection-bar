import React from 'react';
import styles from './DialogPage.module.css'
import SelectedElementTag from "../MainPage/SelectedElementTag";
import Button from "../MainPage/Button";

const DialogPage = ({elements = [], selectedElements = [], addSelectedElement, filterSelection,...props}) => {

    let onChecked = (e) => {
        (e.currentTarget.checked) && addSelectedElement(e.currentTarget.name)

    };

    let onSetFilter = (e) => {
        props.setFilter(e.currentTarget.value)
    };

    let onChangeFilter=(e)=>{
        debugger
        // filterSelection(e.currentTarget.value)
    };

    let onSaveElements=(e)=>{
        props.saveElements()
    }
    return<>
        {props.visibleWindow&&<div className={styles.dialogPage}>
        <button className={styles.closeDialogButton}>X</button>
        <div className={styles.header}> Диалог выбора элементов</div>
        <div className={styles.filters}>
            <label> Поиск<input onChange={onSetFilter}/></label>
            <label>Фильтр
                <select onChange={onChangeFilter}>
                    <option value='without'> Без фильтра</option>
                    <option value='10'> Номер > 10</option>
                    <option value='100'> Номер > 100</option>
                    <option value='200'> Номер > 200</option>
                </select>
            </label>
        </div>
        <div className={styles.elementsBlock}>
            {props.filteredElements.map((elem, index) => <div key={index}>
                <input type="checkbox" name={elem} checked={selectedElements.indexOf(elem) > -1}
                       onChange={onChecked} disabled={selectedElements.length >= 3}/><span>{elem}</span>

            </div>)}

        </div>


        <div className={styles.selectedElements}>
            <div>Выбранные элементы на данный момент:</div>
            {selectedElements.length && selectedElements.map((el, index) =>
                <SelectedElementTag setUnselectedElement={props.setUnselectedElement}
                                    title={el} key={index}/>)}

        </div>
        <div className={styles.buttons}>
            <Button onClick={onSaveElements}>Сохранить</Button>
            <Button>Отмена</Button>
        </div>
    </div>}
</>
}
export default DialogPage