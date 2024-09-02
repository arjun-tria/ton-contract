import { toNano } from '@ton/core';
import { FirstContract } from '../wrappers/FirstContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const simpleCounter = provider.open(await FirstContract.fromInit(200n));

    await simpleCounter.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(simpleCounter.address);

    console.log('ID', await simpleCounter.getId());
}

