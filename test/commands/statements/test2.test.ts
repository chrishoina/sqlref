import {expect, test} from '@oclif/test'

describe('statements/test2', () => {
  test
  .stdout()
  .command(['statements/test2'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['statements/test2', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
