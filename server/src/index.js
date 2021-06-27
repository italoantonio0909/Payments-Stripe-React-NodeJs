const path = require('path')

require('dotenv').config({ path: path.join(process.cwd(), '.env') })
require('./server')

console.log(path.join(process.cwd(), '.env'))
