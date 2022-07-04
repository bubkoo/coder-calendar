const { generateSVG } = require('../packages/svg/lib')

module.exports = async ({ github, context, core }) => {
  const filepath = 'packages/svg/calendar.svg'

  const getContent = async () => {
    try {
      return await github.rest.repos.getContent({
        ...context.repo,
        path: filepath,
      })
    } catch (e) {
      return null
    }
  }

  const res = await getContent(github, filepath)
  const oldContent = res
    ? Buffer.from(res.data.content, 'base64').toString()
    : null

  const content = generateSVG('bubkoo')
  if (oldContent !== content) {
    await github.rest.repos.createOrUpdateFileContents({
      ...context.repo,
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
