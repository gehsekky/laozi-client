import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tile.less';

class Tile extends React.Component {
  render() {
    const {
      content,
    } = this.props;

    return (
      <div className={styles.tile}>
        <div className={styles.content}>
          {content}
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tile;
