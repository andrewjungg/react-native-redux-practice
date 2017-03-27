export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      console.log('select library');
      return action.payload;
    default:
      return state;
  }
};
