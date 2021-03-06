// Copyright 2017-2018 @polkadot/app-addresses authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/ui-app/types';

import './index.css';

import React from 'react';
import Button from '@polkadot/ui-app/Button';

import Creator from './Creator';
import Editor from './Editor';
import translate from './translate';

type Props = I18nProps & {
  basePath: string
};

type Actions = 'create' | 'edit';

type State = {
  action: Actions
};

// FIXME React-router would probably be the best route, not home-grown
const Components: { [index: string]: React.ComponentType<any> } = {
  'create': Creator,
  'edit': Editor
};

class AddressesApp extends React.PureComponent<Props, State> {
  state: State = { action: 'edit' };

  render () {
    const { t } = this.props;
    const { action } = this.state;
    const Component = Components[action];

    return (
      <main className='addresses--App'>
        <header>
          <Button.Group>
            <Button
              isPrimary={action === 'edit'}
              onClick={this.selectEdit}
              text={t('app.edit', {
                defaultValue: 'Edit address'
              })}
            />
            <Button.Or />
            <Button
              isPrimary={action === 'create'}
              onClick={this.selectCreate}
              text={t('app.create', {
                defaultValue: 'Add address'
              })}
            />
          </Button.Group>
        </header>
        <Component onBack={this.selectEdit} />
      </main>
    );
  }

  selectCreate = (): void => {
    this.setState({ action: 'create' });
  }

  selectEdit = (): void => {
    this.setState({ action: 'edit' });
  }
}

export default translate(AddressesApp);
