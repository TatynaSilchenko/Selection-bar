import React from 'react';
import styles from './DialogPage.module.css'
import SelectedElementTag from "../MainPage/SelectedElementTag";
import Button from "../MainPage/Button";

const DialogPage = ({elements = [], selectedElements = [], addSelectedElement, filterSelection, ...props}) => {

    let onChecked = (e, element) => {
        (e.currentTarget.checked) && addSelectedElement(element)
        props.changeStatus(e.currentTarget.checked)
    };


    let onSetFilter = (e) => {
        props.setFilter(e.currentTarget.value)
    };

    let onChangeFilter = (e) => {
        filterSelection(e.currentTarget.value)
    };

    let onSaveElements = (e) => {
        props.saveElements()
    }
    return <>
        {props.visibleWindow && <div className={styles.dialogPage}>
            <button className={styles.closeDialogButton}>X</button>
            <div className={styles.header}> Диалог выбора элементов</div>
            <div className={styles.filters}>
                <label> Поиск<input onChange={onSetFilter}/></label>
                <label>Фильтр
                    <select onChange={onChangeFilter} value={props.optionsState}>
                        <option value='without'> Без фильтра</option>
                        <option value='10'> Номер > 10</option>
                        <option value='100'> Номер > 100</option>
                        <option value='200'> Номер > 200</option>
                    </select>
                </label>
            </div>
            <div className={styles.elementsBlock}>
                {props.filteredElements.map((elem) => {
                    return <div key={elem.id}>
                        <input type="checkbox"
                               name={elem.title}
                               checked={selectedElements.indexOf(elem) > -1}
                               disabled={selectedElements.length >= 3}
                               onChange={(e) => {onChecked(e, elem)}}/>
                               <span>{elem.title}</span>

                    </div>
                })}

            </div>


            <div className={styles.selectedElements}>
                <div>Выбранные элементы на данный момент:</div>
                {selectedElements.length && selectedElements.map((el) =>
                    <SelectedElementTag setUnselectedElement={props.setUnselectedElement}
                                        element={el} key={el.id}/>)}

            </div>
            <div className={styles.buttons}>
                <Button onClick={onSaveElements}>Сохранить</Button>
                <Button>Отмена</Button>
            </div>
        </div>}
    </>
}
export default DialogPage