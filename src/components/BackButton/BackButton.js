import React from 'react';
import PropTypes from 'prop-types';
import styles from './BackButton.less';

class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      history,
    } = this.props;

    history.goBack();
  }

  render() {
    return (
      <div className={styles.documentsByTagBack}>
        <a href="#">back</a>
      </div>
    );
  }
}

BackButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BackButton;
