import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        color:'black'
    },
    globalIcon:{
        color:'#5856D6',
    },
    globalTextNormal:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    LeaguePosterText:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
    },
    LeaguePosterImage:{
        flex:1,
        borderRadius:18,
    },
    LeaguePosterContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
});

export const globalStyles={
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        color:'black'
    },
    globalIcon:{
        color:'#5856D6',
    },
    globalTextNormal:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    LeaguePosterText:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
    },
    LeaguePosterImage:{
        flex:1,
        borderRadius:18,
    },
    LeaguePosterContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    colors:{
        everglade1:'#214f34',
        mineralGreen2:'#476c52',
        battleshipGray3:'#7c906f',
        swampGreen4:'#b6bc94',
        hampton5:'#e5d2ae',
        white:"#e3e3e3",
    },
    textSizes:{
        small:height*0.02,
        medium:height*0.025,
        big:height*0.040,
        posterTitle:height*0.0285,
    }
}

export function toHex(num: number): string {
    const map = "0123456789abcdef";
    let hex = num === 0 ? "0" : "";
    while (num !== 0) {
        hex = map[num & 15] + hex;
        num = num >>> 4;
    }
    return hex==='0'?'00':hex.toUpperCase();
}