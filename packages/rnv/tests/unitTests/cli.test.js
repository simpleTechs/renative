import { createRnvConfig, generateBuildConfig } from '../../src/configTools/configParser';
import runTarget from '../../src/cli/target';
import runPlugin from '../../src/cli/plugin';
import runPlatform from '../../src/cli/platform';
import { run } from '../../src';

describe('Testing CLI functions', () => {
    // it('target list should throw correct error', async () => {
    //     const c = createRnvConfig({ platform: 'android' }, { process: true }, { cmd: true }, 'list');
    //     generateBuildConfig(c);
    //     await expect(runTarget(c)).rejects.toThrow('Platform unsupported for automated SDK setup');
    // });

    // it('target launch should resolve', async () => {
    //     const c = createRnvConfig({ platform: 'android', target: 'emu' }, { process: true }, { cmd: true }, 'launch');
    //     generateBuildConfig(c);
    //     await expect(runTarget(c)).resolves;
    //     // return runTarget(c).catch(err => expect(err).toMatch('Location of your cli'));
    // });

    // it('plugin list should resolve', async () => {
    //     const c = createRnvConfig({ platform: 'android' }, { process: true }, { cmd: true }, 'list');
    //     generateBuildConfig(c);
    //     await expect(runPlugin(c)).resolves;
    // });

    // it('platform list should resolve', async () => {
    //     const c = createRnvConfig({ platform: 'android' }, { process: true }, { cmd: true }, 'list');
    //     generateBuildConfig(c);
    //     c.buildConfig = { defaults: { supportedPlatforms: ['ios', 'android'] }, common: {} };
    //     await expect(runPlatform(c)).resolves;
    // });

    it('should create new project', async (done) => {
        const program = {
            commands: [],
            _name: 'rnv',
            rawArgs: ['/usr/local/bin/node',
                '/usr/local/bin/rnv',
                'new',
                'testingApp'],
            ci: true,
            mono: true,
            args: ['new', 'testingApp', []]
        };
        global.process = { ...process, exit: jest.fn() };
        const res = await run('new', 'testingApp', program, process);

        expect(res).toBe(undefined);
        setTimeout(done, 0);
    });
});
