import { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { League } from '../../interfaces/LeagueResponse';
import { globalStyles } from '../../theme/appTheme';
import { LeaguePoster } from './LeaguePoster';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props{
  data:League[],
  setLeagueSelected: React.Dispatch<React.SetStateAction<League | undefined>>,
  loadTournaments:(League?: League | undefined) => void
}



export const LeaguesCarrousel = ({data,setLeagueSelected,loadTournaments}:Props) => {
  const [title, setTitle]= useState('')

  const onChangeLeague=(index:number)=>{
    setTitle(data[index].name),
    setLeagueSelected(data[index])
    loadTournaments(data[index])
  }
  useEffect(() => {
    setLeagueSelected(data[0]?data[0]:undefined)
    loadTournaments(data[0])
  }, [data])
  
  return (
    <View style={localStyles.mainContainer}>
        <Carousel
                    loop
                    width={width*0.86} //separation between
                    //height={width}

                    style={localStyles.carrouselStyle}
                    modeConfig={{
                      parallaxScrollingScale: 0.9,
                      parallaxScrollingOffset: 100,
                    }}
                    autoPlay={false}
                    mode="parallax"
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => {
                      onChangeLeague(index)

                    }
                  }
                    renderItem={({ index }) => (
                        <LeaguePoster league={data[index]}/>
                    )}
                />
                
    </View>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
      flexDirection:'column',
      width:width, //separation between
      height:width*0.85
    },
    carrouselStyle:{
      width: width ,
      justifyContent: "flex-end",
      alignSelf: "center",
      flexDirection: "row",
      backgroundColor:globalStyles.colors.hampton5+'80',
   },
   textName:{
    fontSize:globalStyles.textSizes.posterTitle,
    textAlign:'center',
    paddingTop:height*0.01,
    color:globalStyles.colors.everglade1,
    fontWeight:'500'
}
});