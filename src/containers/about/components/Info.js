import React from 'react';
import { translate } from 'react-i18next';

@translate()
export default class Info extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { items, t } = this.props;
    return (
      <div className="info">
        <h3>{t('info')}</h3>
        {
          items.map((item) => <li key={`info-${item.id}`}>{item.text}</li>)
        }
      </div>
    );
  }
}
