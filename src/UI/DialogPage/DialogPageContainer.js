import React from 'react';
import DialogPage from "./DialogPage";
import {connect} from "react-redux";

class DialogPageContainer extends React.Component{
    sate={
        selectedElements:[]
    }
    render(){
        return <DialogPage {...this.props}/>
    }
}
const mapStateToProps=(state)=>({
        elements:state.elements.elements,
            selectedElements:state.elements.selectedElements
    })

export default connect(mapStateToProps,{})(DialogPageContainer)