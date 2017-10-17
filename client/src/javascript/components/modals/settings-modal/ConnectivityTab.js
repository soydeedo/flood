import {FormattedMessage} from 'react-intl';
import React from 'react';

import Checkbox from '../../general/form-elements/Checkbox';
import SettingsTab from './SettingsTab';

export default class ConnectivityTab extends SettingsTab {
  state = {};

  getDHTEnabledValue() {
    if (this.state.dhtEnabled != null) {
      return this.state.dhtEnabled;
    }

    return this.props.settings.dhtStats.dht === 'auto';
  }

  handleDHTToggle = () => {
    let dhtEnabled = !this.getDHTEnabledValue();
    let dhtEnabledString = dhtEnabled ? 'auto' : 'disable';

    this.setState({dhtEnabled});
    this.props.onCustomSettingsChange({
      id: 'dht',
      data: [dhtEnabledString],
      overrideID: 'dhtStats',
      overrideData: {dht: dhtEnabledString}
    });
  };

  render() {
    return (
      <div className="form">
        <div className="form__section">
          <div className="form__section__heading">
            <FormattedMessage
              id="settings.connectivity.incoming.heading"
              defaultMessage="Incoming Connections"
            />
          </div>
          <div className="form__row">
            <div className="form__column form__column--small">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.port.range.label"
                  defaultMessage="Listening Port Range"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'networkPortRange')}
                value={this.getFieldValue('networkPortRange')} />
            </div>
            <div className="form__column form__column--auto form__column--unlabled">
              <Checkbox
                checked={this.getFieldValue('networkPortRandom') === '1'}
                onChange={this.handleClientSettingCheckboxChange.bind(this, 'networkPortRandom')}>
                <FormattedMessage
                  id="settings.connectivity.port.randomize.label"
                  defaultMessage="Randomize Port"
                />
              </Checkbox>
            </div>
            <div className="form__column form__column--auto form__column--unlabled">
              <Checkbox
                checked={this.getFieldValue('networkPortOpen') === '1'}
                onChange={this.handleClientSettingCheckboxChange.bind(this, 'networkPortOpen')}>
                <FormattedMessage
                  id="settings.connectivity.port.open.label"
                  defaultMessage="Open Port"
                />
              </Checkbox>
            </div>
          </div>
          <div className="form__row">
            <div className="form__column form__column--half">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.ip.hostname.label"
                  defaultMessage="Reported IP/Hostname"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'networkLocalAddress')}
                value={this.getFieldValue('networkLocalAddress')} />
            </div>
            <div className="form__column form__column--half">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.max.http.connections"
                  defaultMessage="Maximum HTTP Connections"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'networkHttpMaxOpen')}
                value={this.getFieldValue('networkHttpMaxOpen')} />
            </div>
          </div>
        </div>
        <div className="form__section">
          <div className="form__section__heading">
            <FormattedMessage
              id="settings.connectivity.dpd.heading"
              defaultMessage="Decentralized Peer Discovery"
            />
          </div>
          <div className="form__row">
            <div className="form__column form__column--small">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.dht.port.label"
                  defaultMessage="DHT Port"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'dhtPort')}
                value={this.getFieldValue('dhtPort')} />
            </div>
            <div className="form__column form__column--auto  form__column--unlabled">
              <Checkbox
                checked={this.getDHTEnabledValue()}
                onChange={this.handleDHTToggle}>
                <FormattedMessage
                  id="settings.connectivity.dht.label"
                  defaultMessage="Enable DHT"
                />
              </Checkbox>
            </div>
            <div className="form__column form__column--auto form__column--unlabled">
              <Checkbox
                checked={this.getFieldValue('protocolPex') === '1'}
                onChange={this.handleClientSettingCheckboxChange.bind(this, 'protocolPex')}>
                <FormattedMessage
                  id="settings.connectivity.peer.exchange.label"
                  defaultMessage="Enable Peer Exchange"
                />
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="form__section">
          <div className="form__section__heading">
            <FormattedMessage
              id="settings.connectivity.peers.heading"
              defaultMessage="Peers" />
          </div>
          <div className="form__row">
            <div className="form__column">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.peers.min.label"
                  defaultMessage="Minimum Peers"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'throttleMinPeersNormal')}
                value={this.getFieldValue('throttleMinPeersNormal')} />
            </div>
            <div className="form__column">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.peers.max.label"
                  defaultMessage="Maximum Peers"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'throttleMaxPeersNormal')}
                value={this.getFieldValue('throttleMaxPeersNormal')} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.peers.seeding.min.label"
                  defaultMessage="Minimum Peers Seeding"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'throttleMinPeersSeed')}
                value={this.getFieldValue('throttleMinPeersSeed')} />
            </div>
            <div className="form__column">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.peers.seeding.max.label"
                  defaultMessage="Maximum Peers Seeding"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'throttleMaxPeersSeed')}
                value={this.getFieldValue('throttleMaxPeersSeed')} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column form__column--half">
              <label className="form__label">
                <FormattedMessage
                  id="settings.connectivity.peers.desired.label"
                  defaultMessage="Peers Desired"
                />
              </label>
              <input className="textbox" type="text"
                onChange={this.handleClientSettingFieldChange.bind(this, 'trackersNumWant')}
                value={this.getFieldValue('trackersNumWant')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
