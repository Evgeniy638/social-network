import { connect } from "react-redux";
import Slidebar from "./Slidebar";


const mapStateToProps=state=>({
     arrayMenu:state.stateSlidebar.arrayMenu,
     userId:state.stateLoginUser.userId
})

const mapDispatchToProps=dispatch=>({})

export default connect(mapStateToProps, mapDispatchToProps)(Slidebar)