import { MaterialIcons,Entypo, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable,FlatList } from 'react-native';
import movie from '../../assets/data/movie';
import { Text,View } from '../../components/Themed';
import styles from './styles';
import EpisodeItem from '../../components/EpisodeComponent';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';
 

const firstSeason = movie.seasons.items[0];
const firstepisode = firstSeason.episodes.items[0];
const MovieDetailsScreen=()=> {
  const [currentSeason,setCurrentSeason]=useState(firstSeason)
  const [currentEpisode,setCurrentEpisode]=useState(firstSeason.episodes.items[0])
  const seasonNames=movie.seasons.items.map(season=>season.name);
  return(
     <View>
     {/* <Image style={styles.image} source={{uri:firstepisode.poster}}/> */}
     <VideoPlayer episode={currentEpisode}/> 

     
     <FlatList
     style={{marginBottom:250}}
     data={currentSeason.episodes.items}

     renderItem={({item})=><EpisodeItem episode={item} onPress= {setCurrentEpisode}/>}
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
        <MaterialIcons name="hd" size={24} color="white" ></MaterialIcons>

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
    <View style={{flexDirection:'row' ,paddingTop:10}}>
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

    <Picker style={{color:"white",width:150
    
  }}
  dropdownIconColor={'white'}
    selectedValue={currentSeason.name}
    onValueChange={(itemValue,itemIndex)=>{
      setCurrentSeason(movie.seasons.items[itemIndex])
    }}>
      
      {seasonNames.map(seasonName=>( <Picker.Item label={seasonName} value={seasonName} key={seasonName}/>))}
     
     </Picker>
     </View>

     )}
     /> 
     </View>
  )
}

export default MovieDetailsScreen;
