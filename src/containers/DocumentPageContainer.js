import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';
import { fetchDocument, downloadDocument } from '../redux/modules/document';
import DocumentPage from '../components/DocumentPage/DocumentPage';

const mapStateToProps = state => ({
  document: state.document.document,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  downloadDocument: name => dispatch(downloadDocument(
    ownProps.history,
    ownProps.match.params.documentId,
    name,
  )),
  loadData: () => dispatch(fetchDocument(ownProps.history, ownProps.match.params.documentId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentPage));
