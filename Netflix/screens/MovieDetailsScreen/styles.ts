import { StyleSheet } from "react-native";

const styles=StyleSheet.create(
    {
        image:{
            width:'100%',
            aspectRatio:16/9,
            resizeMode:'cover'
        },
        title:{
            fontSize:24,
            fontWeight:"bold",
        },

        match:{
                color:'#00aa00',
                fontWeight:'bold',
                marginRight:5
        },
        year:{
            color:'#757575',
            marginRight:5
        },
        playButton:{
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            borderRadius:3,
            
            marginVertical:5
         
        }
        ,
        downloadButton:{
            backgroundColor:'#2b2b2b',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            borderRadius:3,
            marginVertical:5
        },
        playButtonText:{
            color:'black',
            fontSize:16,
            fontWeight:'bold'
        },
        downloadButtonText:{color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:5
    },

        ageContainer:{
            backgroundColor:'#ffea61',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:2,
            paddingHorizontal:3,
            marginRight:5
        },
        age:{
            color:'black',
            fontWeight:'bold'
        }

    }
)
export default styles;