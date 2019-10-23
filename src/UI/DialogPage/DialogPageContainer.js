import React from 'react';
import DialogPage from "./DialogPage";
import {connect} from "react-redux";
import {setElements, setSelectedElements, visibleSelectionWindow} from "../../REDUX/ElementsReduser";

class DialogPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedElements: this.props.selectedElements,
            filter: ''
        };
    }

    addSelectedElement = (el) => {
        this.setState(
            {selectedElements: [...this.state.selectedElements, el]})
    };

    setUnselectedElement = (el) => {
        let newSelectedElements = [...this.state.selectedElements]
        for (let i = 0; i < newSelectedElements.length; i++) {
            newSelectedElements[i] === el && newSelectedElements.splice(i, 1)
        }
        this.setState({
            selectedElements: newSelectedElements
        })
    };

    setFilter = (filterValue) => {
        this.setState({
            filter: filterValue
        })
    };

    filteredElements = () => {

        if (!this.state.filter) return this.props.elements;
        return this.props.elements.filter(el => el.indexOf(this.state.filter) > -1)
    };

    saveElements=()=>{
        this.props.setSelectedElements(this.state.selectedElements);
        this.props.visibleSelectionWindow(false)
    }

 /*   filterSelection = (value) => {
        let newElements = [...this.props.elements];
        switch (value) {
            case 'without':
                return this.setState({visibleElements:this.props.elements});
            case '10':
                return this.setState({visibleElements:newElements.splice(10)});
            case '100':
                let newElements100 = [...this.props.elements];
                return this.props.setElements(newElements100.splice(100));
            case '200':
                let newElements200 = [...this.props.elements];
                return this.props.setElements(newElements200.splice(200));
            default:
                return this.props.elements

        }
    }*/

    componentDidMount() {
        let elements = [];
        for (let i = 1; i <=205; i++) {
            elements.push('Элемент ' + i);
        }
        this.props.setElements(elements)
    }


    render() {
        let {selectedElements, ...otherProps} = this.props;
        return<DialogPage {...otherProps} selectedElements={this.state.selectedElements}
                           addSelectedElement={this.addSelectedElement}
                           setUnselectedElement={this.setUnselectedElement}
                           filteredElements={this.filteredElements()}
                           setFilter={this.setFilter}
                           filterSelection={this.filterSelection}
    visibleElements={this.state.visibleElements}
                           saveElements={this.saveElements}
        />
    }
}

const mapStateToProps = (state) => ({
    elements: state.elements.elements,
    selectedElements: state.elements.selectedElements,
    visibleWindow:state.elements.visibleWindow
});

export default connect(mapStateToProps, {setElements,setSelectedElements,visibleSelectionWindow})(DialogPageContainer)