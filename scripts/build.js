const { sh } = require('./sh')

sh('rm -rf dist')
sh('meteor remove bundle-visualizer')
sh('meteor build --directory --server-only dist')
sh('cd dist/bundle/programs/server && npm install')
