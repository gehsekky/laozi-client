import React from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, FormGroup, ControlLabel, FormControl, Label } from 'react-bootstrap';
import styles from './DocumentPage.less';
import BackButton from '../BackButton/BackButton';

class DocumentPage extends React.Component {
  componentDidMount() {
    const {
      loadData,
    } = this.props;
    return loadData();
  }

  render() {
    const {
      document,
      downloadDocument,
    } = this.props;

    if (!document.documentId) return null;

    return (
      <div className={styles.documentPage}>
        <div className={styles.backButtonContainer}>
          <BackButton />
        </div>
        <Panel>
          <Panel.Body>
            <FormGroup>
              <ControlLabel>name</ControlLabel>
              <FormControl.Static>{document.name}</FormControl.Static>
            </FormGroup>
            <FormGroup>
              <ControlLabel>tags</ControlLabel>
              <FormControl.Static>
                <div className={styles.tagContainer}>
                  {
                    document.documentTags.map(documentTag => (
                      <h4><Label key={documentTag.documentTagId}>{documentTag.tag.name}</Label></h4>
                    ))
                  }
                </div>
              </FormControl.Static>
            </FormGroup>
            <div>
              <Button onClick={() => downloadDocument(document.name)}>download</Button>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

DocumentPage.propTypes = {
  document: PropTypes.object,
  downloadDocument: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
};

DocumentPage.defaultProps = {
  document: { documentId: null, documentTags: [], name: '' },
};

export default DocumentPage;
