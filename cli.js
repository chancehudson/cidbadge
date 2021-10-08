#!/usr/bin/env node

const cidbadge = require('.')
const fs = require('fs')
const path = require('path')

const help = `
Usage: cidbadge <ipfs path|cid> <output path>

Outputs an SVG badge with the cid text supplied.
`

const [,, ipfsPath, outputPath] = process.argv

if (ipfsPath === 'help' || ipfsPath === '--help' || ipfsPath === '-h') {
  console.log(help)
  process.exit(0)
}

if (!ipfsPath || !outputPath) {
  console.log(help)
  process.exit(1)
}

const cid = ipfsPath.split('/').pop()

const badge = cidbadge(cid)
const fullOutputPath = path.isAbsolute(outputPath) ?
  outputPath :
  path.join(process.cwd(), outputPath)
fs.writeFileSync(fullOutputPath, badge)

console.log(`File written to: ${fullOutputPath}`)
