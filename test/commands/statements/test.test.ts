import {expect, test} from '@oclif/test'

describe('statements/test', () => {
  test
  .stdout()
  .command(['statements/test'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['statements/test', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
