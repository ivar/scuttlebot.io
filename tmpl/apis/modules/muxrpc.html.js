var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'MuxRPC',
  section: 'apis',
  tab: 'apis-modules',
  path: '/apis/modules/muxrpc.html',
  content: md.doc(__dirname+'/muxrpc.md')
})