import api from "../DAL/api";

const SET_ELEMENTS = 'SET_ELEMENTS';
const SET_SELECTED_ELEMENT='SET_SELECTED_ELEMENT';
const VISIBLE_SELECTION_WINDOW='VISIBLE_SELECTION_WINDOW';

let initialState = {
    elements: [
        // {id: 1, title: 'Элемент1'},
        // {id: 2, title: 'Элемент2'},
        // {id: 3, title: 'Элемент3'},
        // {id: 4, title: 'Элемент4'},
        // {id: 5, title: 'Элемент5'},
        // {id: 15, title: 'Элемент15'},
        // {id: 115, title: 'Элемент115'},
        // {id: 215, title: 'Элемент215'},
        // {id: 1115, title: 'Элемент1115'}
    ],
    selectedElements: [],
    visibleWindow:false
}


const ElementsReduser = (state = initialState, action) => {
debugger
    switch (action.type) {
        case SET_ELEMENTS:
            return {...state,elements:[...state.elements,... action.elements]};
        case SET_SELECTED_ELEMENT:
            return {...state,selectedElements: action.selectedElements};
            case VISIBLE_SELECTION_WINDOW:
            return {...state,visibleWindow:action.value};
        default:
            return state;
    }
}

export const setSelectedElements=(selectedElements)=>({type:'SET_SELECTED_ELEMENT', selectedElements })
export const setElements = (elements) => ({type: 'SET_ELEMENTS', elements});
export const getElements=()=>async(disputch)=>{
    debugger
let elements=await api.getElements()
    disputch(setElements(elements))
}
export const visibleSelectionWindow=(value)=>({type:'VISIBLE_SELECTION_WINDOW',value})
export default ElementsReduser;