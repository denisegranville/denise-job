import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run lead-test-app:start' },
      ciWebServerCommand: 'nx run lead-test-app:serve-static',
    }),
    baseUrl: 'http://localhost:3001',
    browser: 'chrome'
  },
});
