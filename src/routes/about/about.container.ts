import { connect } from 'react-redux';
import Home from './about';

const mapStateToProps = (state: any) => ({
  showAbout: state.homeReducer.showAbout
});

export default connect(
  mapStateToProps,
  null
)(Home);
