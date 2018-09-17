const initialState = {
  showAbout: false
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SHOW_ABOUT':
      return Object.assign({}, state, { showAbout: action.payload });
    default:
      return state;
  }
};

export default homeReducer;
