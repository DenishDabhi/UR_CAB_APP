/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const vehicleListStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    },
    mainView:{
        flexDirection:'row',
        // alignItems:'center',
        gap:10
    },
    imageView:{
        width:50,
        height:50,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:100
    },
    texiView:{
        fontSize:15,
        color:'black',
        fontWeight:'600',
        // fontFamily:'lato'
    },
    pfqText:{
        fontSize:12,
        // fontFamily:'lato'
    },
    documentView:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    documentText:{
        fontSize:12,
        fontWeight:'600',
        color:'orange',
        textDecorationLine:'underline',
        // fontFamily:'lato'
    },
    deleteText:{
        fontSize:12,
        color:'black',
        // fontFamily:'lato'
    },
    switchView:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    switchText:{
        fontSize:13,
        // color:'black',
        // fontFamily:'lato'
    }
});
