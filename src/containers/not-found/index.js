import React from 'react';
import { translate } from 'react-i18next';

class NotFound extends React.Component {
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div>
        <h2>{t('not found')}</h2>
      </div>
    );
  }
}

NotFound.propTypes = {
  t: React.PropTypes.func,
};

export default translate('common', { wait: true })(NotFound);
