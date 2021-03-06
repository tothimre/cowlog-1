const mockData = require('../mockData')
let runner = require('../lib/test-runner')()

runner.setTextData({
  default: {
    msg: ['## More fancy data',
      `Our descision is to show it all always for you, so you can have more 
educated opinion on the state of affairs within you application`,
      '### Logging an array',

      {
        text: `
const cowlog = require('cowlog')()
cowlog.log([${mockData.testArray}])
`,
        before: '```javascript',
        after: '```'
      },
      {
        consoleOutput: true
      }
    ]
  }
})

runner.print(mockData.testArray)
