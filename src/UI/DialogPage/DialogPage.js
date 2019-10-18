import React from 'react';
import styles from './DialogPage.module.css'
import SelectedElementTag from "../MainPage/SelectedElementTag";
import Button from "../MainPage/Button";

const DialogPage = ({elements=[], selectedElements=[]}) => {
    return <div className={styles.dialogPage}>
        <button className={styles.closeDialogButton}>X</button>
        <div className={styles.header}> Диалог выбора элементов</div>
        <div className={styles.filters}>
            <label> Поиск<input/></label>
            <label>Фильтр
                <select>
                    <option> Без фильтра</option>
                    <option> Номер > 10</option>
                    <option> Номер > 100</option>
                    <option> Номер > 200</option>
                </select>
            </label>
        </div>
        <div className={styles.elementsBlock}>
            { elements.map(elem=><div>
            <input type="checkbox"/><span>{elem}</span></div>)}

        </div>
        <div className={styles.selectedElements}>
            <div>Выбранные элементы на данный момент:</div>
            {selectedElements.map(el=><SelectedElementTag title={el}/>)}

        </div>
        <div className={styles.buttons}>
            <Button>Сохранить</Button>
            <Button>Отмена</Button>
        </div>
    </div>

}
export default DialogPage