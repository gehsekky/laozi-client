const initialState = {
  documents: [],
};

const DOCUMENT_SET_DOCUMENT = 'laozi-client/DOCUMENT_SET_DOCUMENT';
const DOCUMENT_SET_DOCUMENTS = 'laozi-client/DOCUMENT_SET_DOCUMENTS';

export function setDocument(document) {
  return {
    type: DOCUMENT_SET_DOCUMENT,
    payload: { document },
  };
}

export function setDocuments(documents) {
  return {
    type: DOCUMENT_SET_DOCUMENTS,
    payload: { documents },
  };
}

const reducer = {
  [DOCUMENT_SET_DOCUMENT]: (state, payload) => Object.assign({}, state, payload),
  [DOCUMENT_SET_DOCUMENTS]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};

export function fetchDocuments(history, tagId) { // eslint-disable-line no-unused-vars
  return (dispatch) => {
    fetch(`${CONFIG.api.baseUrl}/document/tag`, {
      method: 'POST',
      body: JSON.stringify({ tagIds: [tagId] }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const err = new Error(response.statusText);
        throw err;
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(setDocuments(response));
      })
      .catch((err) => {
        console.error(err);

        return history.push('/error');
      });
  };
}

export function fetchDocument(history, documentId) {
  return dispatch => (
    fetch(`${CONFIG.api.baseUrl}/document/${documentId}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const err = new Error(response.statusText);
        throw err;
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(setDocument(response));
      })
      .catch((err) => {
        console.error(err);

        return history.push('/error');
      })
  );
}

/**
 * download document from server
 * @param {object} history History object from react-router
 * @param {number} documentId ID of document to download
 * @param {string} name Name of document to download
 */
export function downloadDocument(history, documentId, name) {
  return () => (
    fetch(`${CONFIG.api.baseUrl}/document/${documentId}/download`)
      .then((response) => {
        if (response.status >= 300) {
          const err = new Error(response.statusText);
          throw err;
        }

        return response;
      })
      .then(response => response.blob())
      .then((response) => {
        // trigger browser to treat stream as file download
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error(err);

        return history.push('/error');
      })
  );
}
