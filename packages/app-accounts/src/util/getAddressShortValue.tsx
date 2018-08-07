// Copyright 2017-2018 @polkadot/app-accounts authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isUndefined from '@polkadot/util/is/undefined';

export default function getAddressShortValue (address: string): string {
  if (isUndefined(address)) {
    return '';
  }

  return `${address.slice(0, 7)}…${address.slice(-7)}`;
}
