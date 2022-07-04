const { generateSVG } = require('../packages/svg/lib')

module.exports = async ({ github, core }) => {
  const token = core.getInput('GITHUB_TOKEN', { required: true })
  const octokit = github.getOctokit(token)
  const filepath = 'packages/svg/calendar.svg'

  const getContent = async () => {
    try {
      return await octokit.rest.repos.getContent({
        ...github.context.repo,
        path: filepath,
      })
    } catch (e) {
      return null
    }
  }

  const res = await getContent(octokit, filepath)
  const oldContent = res
    ? Buffer.from(res.data.content, 'base64').toString()
    : null

  const content = generateSVG('bubkoo')
  if (oldContent !== content) {
    await octokit.rest.repos.createOrUpdateFileContents({
      ...github.context.repo,
      path: filepath,
      content: Buffer.from(content).toString('base64'),
      message: 'chore: update calendar [skip ci]',
      sha: res ? res.data.sha : undefined,
    })
    core.info(`File "${filepath}" ${oldContent ? 'updated' : 'generated'}`)
  } else {
    core.info(`File "${filepath}" no need to update`)
  }

  return filepath
}
