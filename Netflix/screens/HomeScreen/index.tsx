import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Image,FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategoery from '../../components/HomeCategoery';

const firstCategory = categories.items[0];
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}  >
      <HomeCategoery category={firstCategory}/>
    </View>
  );
}

 
 