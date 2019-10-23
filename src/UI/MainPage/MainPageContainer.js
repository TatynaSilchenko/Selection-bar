import MainPage from "./MainPage";
import {connect} from "react-redux";
import {visibleSelectionWindow} from "../../REDUX/ElementsReduser";


const mapStateToProps = (state) => ({
        selectedElements: state.elements.selectedElements,
        visibleWindow:state.elements.visibleWindow
    }
)
const MainPageContainer= connect(mapStateToProps, {visibleSelectionWindow})(MainPage);
export default MainPageContainer