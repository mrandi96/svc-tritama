import CorrectiveActions, { getFilteredData } from '../../Redux/CorrectiveRedux'
import { connect } from 'react-redux'
import TicketListScreen from './TicketListScreen'

const mapStateToProps = (state) => {
  return {
    selectedStatus: state.corrective.selectedStatus,
    employeeId: state.account.data.employeeId,
    dataSectionList: getFilteredData(state),
    fetching: state.corrective.fetching,
    error: state.corrective.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (employeeId) => dispatch(CorrectiveActions.correctiveListRequest(employeeId)),
    changeStatusTab: (status) => dispatch(CorrectiveActions.correctiveChangeSelectedStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketListScreen)