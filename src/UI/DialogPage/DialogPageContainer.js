import React from 'react';
import DialogPage from "./DialogPage";
import {connect} from "react-redux";
import {getElements,  setSelectedElements, visibleSelectionWindow} from "../../REDUX/ElementsReduser";

class DialogPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedElements: this.props.selectedElements,
            filter: '',
            isDone: false,
            optionsState: 'without'
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
        let value = parseInt(this.state.optionsState)
        if (!this.state.filter && !value) return this.props.elements;
        let searchedElement = (!value) ? this.props.elements : this.props.elements.filter((el) => (el) && el.id > value)
        return searchedElement.filter(el => el.title.indexOf(this.state.filter) > -1)
    };

    saveElements = () => {
        this.props.setSelectedElements(this.state.selectedElements);
        this.props.visibleSelectionWindow(false)
    };

    changeStatus = (value) => {
        this.setState({
            isDone: value
        })
    }

    filterSelection = (value) => {
        this.setState({
            optionsState: value
        })
    }

        componentDidMount() {
            this.props.getElements()

        }

    render() {
        let {selectedElements, ...otherProps} = this.props;
        return <DialogPage {...otherProps} selectedElements={this.state.selectedElements}
                           addSelectedElement={this.addSelectedElement}
                           setUnselectedElement={this.setUnselectedElement}
                           filteredElements={this.filteredElements()}
                           setFilter={this.setFilter}
                           filterSelection={this.filterSelection}
                           visibleElements={this.state.visibleElements}
                           saveElements={this.saveElements}
                           changeStatus={this.changeStatus}
                           isDone={this.state.isDone}
                           optionsState={this.state.optionsState}
        />
    }
}

const mapStateToProps = (state) => ({
    elements: state.elementsReduser.elements,
    selectedElements: state.elementsReduser.selectedElements,
    visibleWindow: state.elementsReduser.visibleWindow
});

export default connect(mapStateToProps, {getElements, setSelectedElements, visibleSelectionWindow})(DialogPageContainer)