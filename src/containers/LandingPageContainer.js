import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';
import { fetchTags } from '../redux/modules/tag';
import LandingPage from '../components/LandingPage/LandingPage';

const mapStateToProps = state => ({
  tags: state.tag.tags,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(fetchTags()),
  tagOnClick: destination => ownProps.history.push(destination),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage));
