let initialState={
    elements:['Элемент 1', 'Элемен 2'],
    selectedElements:['Элемент 1']
}
const ElementsReduser=(state=initialState, action)=>{
    switch (action.type) {
        case 'fff':
        return state;
        default:
            return state;
    }
}
export default ElementsReduser;