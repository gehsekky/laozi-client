import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.less';
import Tile from '../Tile/Tile';

class LandingPage extends React.Component {
  componentDidMount() {
    const {
      loadData,
    } = this.props;
    return loadData();
  }

  render() {
    const {
      tagOnClick,
      tags,
    } = this.props;

    return (
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          {
            tags.map((tag, i) => (
              <Tile
                key={`tile${i}`}
                content={tag.name}
                onClick={() => tagOnClick(`/document/tag/${tag.tagId}`)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  loadData: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  tagOnClick: PropTypes.func.isRequired,
};

export default LandingPage;
