import { MaterialIcons,Entypo, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable,FlatList } from 'react-native';
import movie from '../../assets/data/movie';
import { Text,View } from '../../components/Themed';
import styles from './styles';
import EpisodeItem from '../../components/EpisodeComponent';

const firstSeason = movie.seasons.items[0];
const firstepisode = firstSeason.episodes.items[0];
const MovieDetailsScreen=()=> {
  return(
     <View>
     <Image style={styles.image} source={{uri:firstepisode.poster}}/>
     

     
     <FlatList
     style={{marginBottom:250}}
     data={firstSeason.episodes.items}
     renderItem={({item})=><EpisodeItem episode={item}/>}
     ListHeaderComponent={(
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
     {/*play button */}
     <Pressable onPress={()=>{console.warn("Plage")}} style={styles.playButton}>
       <Text style={styles.playButtonText}>
         <Entypo name='controller-play' size={16} color="black"  ></Entypo> 
         Play</Text></Pressable> 
    {/*Download button */}
    <Pressable onPress={()=>{console.warn("download")}} style={styles.downloadButton}>
       <Text style={styles.downloadButtonText}>
         <Entypo name='download' size={16} color="white" style={{paddingRight:5}}></Entypo> 
         Download</Text></Pressable> 
    <Text style={{marginVertical:10}}>{movie.plot}</Text>
    <Text style={styles.year}>Cast:{movie.cast}</Text>
    <Text style={styles.year}>Creator:{movie.creator}</Text>
    <View style={{flexDirection:'row'}}>
      <View style={{alignItems:'center', marginHorizontal:20}}>
        <AntDesign name="plus" size={24} color={'white'}/>
        <Text style={{color:'darkgrey'}}>My list</Text>
      </View>
      <View style={{alignItems:'center', marginHorizontal:20}}>
        <Feather name="thumbs-up" size={24} color={'white'}/>
        <Text style={{color:'darkgrey'}}> Rate</Text>
      </View>
      <View style={{alignItems:'center', marginHorizontal:20}}>
        <Ionicons name="share-social" size={24} color={'white'}/>
        <Text style={{color:'darkgrey'}}>Share</Text>
      </View>

    </View>
     </View>

     )}
     /> 
     </View>
  )
}

export default MovieDetailsScreen;
