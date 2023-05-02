import i18n from 'i18next';
import {NativeModules, Platform} from 'react-native';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: locale.substring(0, 2),
});
