const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      exportsTrailingSlash: true,
    }
  }

  return {
    /* config options for all phases except development here */
    exportsTrailingSlash: true,
  }
}
