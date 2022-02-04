import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Image,FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';
import categories from '../../assets/data/categories';
import { useNavigation } from '@react-navigation/native';
import movie from '../../assets/data/movie';
 

interface HomecategoryProps{
   category:{ id:string,
    title:string,
    movies:{
        id:string,
        poster:string,
    }[]}
}

export default function HomeCategoery(props:HomecategoryProps) {
    const {category}= props
    const navigation= useNavigation();
    const onMoviePress=( )=>{
      navigation.navigate('MovieDetailsScreen')
    }
    console.log(category)
  return (
    <  >
     <Text style={styles.title}>{category.title}</Text>
      <FlatList 
      data={category.movies}
      renderItem={({item})=>(<Pressable onPress={()=>onMoviePress()}>
        <Image style={styles.image} source={{uri:item.poster}}/>
      </Pressable>)} horizontal />
 
    </>
  );
}

 