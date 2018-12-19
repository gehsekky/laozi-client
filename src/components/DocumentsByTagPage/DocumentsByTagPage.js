import React from 'react';
import PropTypes from 'prop-types';
import styles from './DocumentsByTagPage.less';
import Tile from '../Tile/Tile';
import BackButton from '../BackButton/BackButton';

class DocumentsByTagPage extends React.Component {
  componentDidMount() {
    const {
      loadData,
    } = this.props;
    return loadData();
  }

  render() {
    const {
      documentOnClick,
      documents,
      history,
    } = this.props;

    return (
      <div className={styles.documentsByTag}>
        <BackButton history={history} />
        <div className={styles.documentsByTagContent}>
          {
            documents.map((document, i) => (
              <Tile
                width={400}
                key={`tile${i}`}
                content={document.name.replace(/_/g, ' ')}
                onClick={() => documentOnClick(`/document/${document.documentId}`)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

DocumentsByTagPage.propTypes = {
  history: PropTypes.object.isRequired,
  loadData: PropTypes.func.isRequired,
  documents: PropTypes.array.isRequired,
  documentOnClick: PropTypes.func.isRequired,
};

export default DocumentsByTagPage;
