import { connect } from 'react-redux';
import Home from './home';
import { updateShowAbout } from './home.actions';

const mapStateToProps = (state: any) => {
  return { showAbout: state.homeReducer.showAbout };
};

const mapDispathToProps = (dispatch: any) => ({
  updateShowAbout: (value: boolean) => {
    updateShowAbout(value)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
