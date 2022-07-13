import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  readonly getConstants: () => {};

  // module method
  getString(id: string): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('HelloWorld');
