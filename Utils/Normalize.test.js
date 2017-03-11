const { providedNormalizeDeputes } = require('./Normalize')
const deputesSeeds = require('./DeputesSeeds')

test('test normalize with custom data', () => {
  const data = [
    {
      id: 1,
      sites_web: [
        { site: 'a.fr' },
        { site: 'b.fr' }
      ]
    },
    {
      id: 2,
      sites_web: [
        { site: 'c.fr' },
        { site: 'd.fr' }
      ]
    }
  ]
  const normalizedData = providedNormalizeDeputes(data)
  expect(normalizedData).toMatchSnapshot()
})

test('test normalize with custom data', () => {
  const normalizedData = providedNormalizeDeputes(deputesSeeds)
  expect(normalizedData).toMatchSnapshot()
})
