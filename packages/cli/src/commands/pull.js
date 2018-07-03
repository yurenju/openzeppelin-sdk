'use strict';

import pull from '../scripts/pull'
import runWithTruffle from '../utils/runWithTruffle'

const name = 'pull'
const signature = name
const description = 'update your local project with the on-chain status of your app in a specific network'

const register = program => program
  .command(signature, { noHelp: true })
  .description(description)
  .usage('--network <network>')
  .option('-n, --network <network>', 'network to be used')
  .action(action)

async function action(options) {
  const { from, network } = options
  const txParams = from ? { from } : {}
  await runWithTruffle(async () => await pull({ txParams, network }), network)
}

export default { name, signature, description, register, action }