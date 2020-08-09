const path = require('path');
const package = require('./package.json');

module.exports = {
  packagerConfig: {
    asar: false,
    icon: path.resolve(__dirname, 'assets', 'icon'),
    appBundleId: 'com.ephraimduncan.cube',
    appCategoryType: 'public.app-category.games',
    win32metadata: {
      CompanyName: 'Ephraim Atta-Duncan',
      OriginalFilename: 'cube',
    },
    ignore: [
      /\/assets(\/?)/,
      /\/docs(\/?)/,
      /\/tools(\/?)/,
      /\/src\/.*\.ts/,
      /package-lock\.json/,
      /README\.md/,
    ],
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: (arch) => {
        return {
          name: 'cube',
          authors: 'Ephraim Atta-Duncan',
          exe: 'cube.exe',
          noMsi: true,
          setupExe: `cube-${package.version}-setup-${arch}.exe`,
          setupIcon: path.resolve(__dirname, 'assets', 'icon.ico'),
        };
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
      platforms: ['linux'],
    },
    {
      name: '@electron-forge/maker-rpm',
      platforms: ['linux'],
    },
  ],
};
