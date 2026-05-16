import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kavyakanaja.app',
  appName: 'Kavya Kanaja',
  webDir: 'dist',
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1A0D04',
      showSpinner: false,
    },
  },
  server: {
    androidScheme: 'https',
    cleartext: false,
  },
};

export default config;
