const initialState = {
  tags: [],
};

const TAG_SET_TAGS = 'laozi-client/TAG_SET_TAGS';

export function setTags(tags) {
  return {
    type: TAG_SET_TAGS,
    payload: { tags },
  };
}

const reducer = {
  [TAG_SET_TAGS]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};

export function fetchTags(history) { // eslint-disable-line no-unused-vars
  return dispatch => (
    fetch(`${CONFIG.api.baseUrl}/tag/all`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const err = new Error(response.statusText);
        throw err;
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(setTags(response));
      })
      .catch((err) => {
        console.error(err);

        // return history.push('/error');
      })
  );
}
