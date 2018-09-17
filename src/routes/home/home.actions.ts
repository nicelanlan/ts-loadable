export const updateShowAbout = (value: boolean) => (dispatch: any) => {
  dispatch({
    payload: value,
    type: 'SHOW_ABOUT',
  });
};
