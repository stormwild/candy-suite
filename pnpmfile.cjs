// pnpmfile.js
module.exports = {
  hooks: {
    readPackage(packageJson) {
      if (packageJson.dependencies['@humanwhocodes/config-array']) {
        packageJson.dependencies['@eslint/config-array'] = '^latest'
        delete packageJson.dependencies['@humanwhocodes/config-array']
      }
      return packageJson
    },
  },
}
