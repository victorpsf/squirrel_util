module.exports = function mime (type) {
  switch (type) {
    case 'string':
    case 'number':
      return 'text/plain'
    case 'object':
    case 'array':
      return 'application/json'
    case 'buffer':
      return 'application/octet-stream'
    default:
      return ''
  }
}