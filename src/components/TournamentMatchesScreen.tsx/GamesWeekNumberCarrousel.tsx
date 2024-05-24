import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { globalStyles } from '../../theme/appTheme';
import CustomText from '../CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props{
    data:number[],
    getMatchesByWeekNumber: (weekNumber: number) => void
}
export const  GamesWeekNumberCarrousel = ({data,getMatchesByWeekNumber}:Props) => {   
    useEffect(() => {
      
    
      console.log('data received carrousel: ' + data)
    }, [])
    
  return (
    <View style={localStyles.mainContainer}>
    <Carousel
                loop
                width={width*1} //separation between
                //height={width}

                style={localStyles.carrouselStyle}
                modeConfig={{
                  parallaxScrollingScale: 0.85,
                  parallaxScrollingOffset: 250,
                }}
                autoPlay={false}
                mode="parallax"
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => {
                  //onChangeLeague(index)
                  
                  getMatchesByWeekNumber(data[index])
                }
              }
                renderItem={({ item }) => (
                    <View
                        style={localStyles.itemContainer}
                    >
                        <CustomText style={localStyles.gameWeekText}>
                            Jornada {item}
                        </CustomText>
                    </View>
                )}
            />
            
</View>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        width:width, //separation between
        height:height*0.045
      },
      carrouselStyle:{
        width: width ,
        justifyContent: "flex-end",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor:globalStyles.colors.hampton5+'80',
     },
    itemContainer:{
        flex: 1,
        justifyContent: 'center',
        //borderWidth:1,
    },
    gameWeekText:{ 
        textAlign: 'center',
        fontSize: height*0.025,
        color:globalStyles.colors.mineralGreen2 
    }
});