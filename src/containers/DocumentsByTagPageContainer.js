import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';
import { fetchDocuments } from '../redux/modules/document';
import DocumentsByTagPage from '../components/DocumentsByTagPage/DocumentsByTagPage';

const mapStateToProps = state => ({
  documents: state.document.documents,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(fetchDocuments(ownProps.history, ownProps.match.params.tagId)),
  documentOnClick: destination => ownProps.history.push(destination),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsByTagPage));
