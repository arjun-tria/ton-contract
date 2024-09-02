import { FirstContract } from '../wrappers/FirstContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const firstContract = provider.open(await FirstContract.fromInit(200n));

    const counter = await firstContract.getCounter();
    console.log(`Counter: ${counter}`);

    const id = await firstContract.getId();
    console.log(`Id: ${id}`);
}
