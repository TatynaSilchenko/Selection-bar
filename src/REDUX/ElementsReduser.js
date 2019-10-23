const SET_ELEMENTS = 'SET_ELEMENTS';
const SET_SELECTED_ELEMENT='SET_SELECTED_ELEMENT';
const VISIBLE_SELECTION_WINDOW='VISIBLE_SELECTION_WINDOW';

let initialState = {
    elements: [],
    selectedElements: [],
    visibleWindow:false
}


const ElementsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_ELEMENTS:
            return {...state,elements:action.elements};
            case SET_SELECTED_ELEMENT:
            return {...state,selectedElements:action.selectedElements};
            case VISIBLE_SELECTION_WINDOW:
                debugger
            return {...state,visibleWindow:action.value};
        default:
            return state;
    }
}

export const setSelectedElements=(selectedElements)=>({type:'SET_SELECTED_ELEMENT', selectedElements })
export const setElements = (elements) => ({type: 'SET_ELEMENTS', elements});
export const visibleSelectionWindow=(value)=>({type:'VISIBLE_SELECTION_WINDOW',value})
export default ElementsReduser;