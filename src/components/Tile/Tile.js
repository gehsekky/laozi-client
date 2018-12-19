import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tile.less';

class Tile extends React.Component {
  render() {
    const {
      height,
      width,
      content,
      onClick,
    } = this.props;

    return (
      <div
        className={styles.tile}
        style={{ height: `${height}px`, width: `${width}px` }}
        onClick={onClick}
        role="button"
        tabIndex="0"
      >
        <div className={styles.content}>
          {content}
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Tile.defaultProps = {
  height: 200,
  width: 200,
};

export default Tile;
