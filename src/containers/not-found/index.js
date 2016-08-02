import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}

@connect(
 mapStateToProps,
 mapDispatchToProps
)
@translate()
export default class NotFound extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <section>
        <Helmet title="Not Found" />
        <h2>{t('notFount')}</h2>
      </section>
    );
  }
}
