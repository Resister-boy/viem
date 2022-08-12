import { expect, test } from 'vitest'

import { accounts, networkProvider, testProvider } from '../../../test/utils'
import { etherValue } from '../../utils'
import { setBalance } from '../test/setBalance'

import { fetchBalance } from '../public/fetchBalance'

const targetAccount = accounts[0]

test('sets balance', async () => {
  await setBalance(testProvider, {
    address: targetAccount.address,
    value: etherValue('420'),
  })
  expect(
    await fetchBalance(networkProvider, {
      address: targetAccount.address,
    }),
  ).toMatchInlineSnapshot('420000000000000000000n')
  await setBalance(testProvider, {
    address: targetAccount.address,
    value: etherValue('69'),
  })
  expect(
    await fetchBalance(networkProvider, {
      address: targetAccount.address,
    }),
  ).toMatchInlineSnapshot('69000000000000000000n')
})