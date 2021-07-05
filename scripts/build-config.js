const { name, version, author, productName, appId } = require('../package.json');
const deepMerge = require('deepmerge');

const getConfig = (customConfig = {}, params = {}) => {
  const { os, arch } = params;
  const config = deepMerge(
    {
      productName,
      appId,
      copyright: `Copyright © ${new Date().getFullYear()} ${author.name}<${author.email}>`,
      artifactName: `${name}-${version}-${os}-${arch}.\${ext}`,
      asar: true,
      extends: null,
      directories: {
        output: 'release',
      },
      files: [
        {
          "from": "main/build",
          "to": "src/main",
          "filter": ["**/*"]
        },
        {
          "from": "ui/build",
          "to": "src/ui",
          "filter": ["**/*"]
        },
        '.env',
        '.env.production',
        'package.json',
        'node_modules/**/*',
      ],
      extraMetadata: {
        main: 'src/main/index.js',
      },
      nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true,
        displayLanguageSelector: true,
        multiLanguageInstaller: true,
        runAfterFinish: true,
        createDesktopShortcut: true,
        menuCategory: true,
        artifactName: `${name}-${version}-setup-${os}-${arch}.\${ext}`,
      },
      win: {
        /*
          16,32,48,64,128,256
          Online generator: https://www.icoconverter.com/
          Editor: IconFX
        */
        icon: '../assets/favicon.ico',
        target: [
          'nsis',
          'zip'
        ],
      },
    },
    customConfig,
    { arrayMerge: (dest, src) => src }
  );

  return config;
};

module.exports = { getConfig };
