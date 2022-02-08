import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
Amplify.configure(config);
 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider> 
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);