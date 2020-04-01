import MainPage from "./MainPage";
import {connect} from "react-redux";
import {visibleSelectionWindow} from "../../REDUX/ElementsReduser";


const mapStateToProps = (state) => ({
        selectedElements: state.elementsReduser.selectedElements,
        visibleWindow:state.elementsReduser.visibleWindow
    }
)
const MainPageContainer= connect(mapStateToProps, {visibleSelectionWindow})(MainPage);
export default MainPageContainer