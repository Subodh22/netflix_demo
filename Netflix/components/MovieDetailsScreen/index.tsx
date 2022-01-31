import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import movie from '../../assets/data/movie';
import { Text,View } from '../Themed';
import styles from './styles';
 
const firstepisode = movie.seasons.items[0].episodes.items[0];
const MovieDetailsScreen=()=> {
  return(
     < View>
     <Image style={styles.image} source={{uri:firstepisode.poster}}/>
     <View style={{padding:12}}>
         <Text style={styles.title}>{movie.title}</Text>
     <View style={{flexDirection:'row'}}>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="Black" ></MaterialIcons>
     </View>
     
     </View>
     </View>
  )
}

export default MovieDetailsScreen;
