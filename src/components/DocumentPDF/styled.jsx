import {StyleSheet } from '@react-pdf/renderer'


const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      width: '100%',
      height:'100%',
      backgroundColor: '#E4E4E4'
    },
    header: {
      flexDirection:'row',
      alignItems:'center',
      height: 150,
      margin: 10,
      padding:10,
      borderWidth: 2,
      borderRadius:10,
      borderColor:'#32363a'
    },
    textHeader:{
      flexDirection:'column',
      width:'100%',
    },
    nomeEmpresa:{
      fontSize: 22,
      paddingHorizontal:10,
      paddingVertical:5,
      textAlign:"center",
      borderBottomWidth:1,
      borderBottomColor: "#32363a"
    },
    boxEnderecoEmpresa:{
      flexDirection:'column',
      alignItems:"center",
      padding: 10
    },
    enderecoEmpresa:{
      fontSize:14,
      color: "#4a4a4b"
    },
    telefoneEmpresa:{
      fontSize:14,
      color:"#3059d7",
      marginTop:10
    
    },
    boxLogoEmpresa:{
      width: 180,
      marginRight:10
    },
    imgLogo:{
      width:"100%",
      height:"100%",
      objectFit:'cover',

    },
    body:{
      flexDirection:"column",
      width:"100%",
      height:"100%",
      padding:10
    },
    boxHeaderBody:{
      padding:5,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#3059d7",
      width:"100%",
      gap:10,
      marginTop:20,
      borderWidth:1,
      borderColor:"#000"
    },
    titleHeaderBody:{
      fontSize: 12,
      fontWeight:"bold",
      color:"#fff",
      width:"100%"
    },
    
    boxDadosCliente:{
      flexDirection:"column",
      width:"100%",
      borderWidth:1,
      borderColor:"#000",
      borderRadius:10,
      padding:10
    },

    itemDadosCliente:{
      flexDirection:"row",
      width:"100%",
      marginBottom:12
    },
    titleDadosCliente:{
      fontSize:12,
      fontWeight:"bold",
      marginRight:10
    },
    textDadosCliente:{
      fontSize:12,
      fontWeight:"extralight"

    },

    boxListaProduto:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingVertical:5,
      gap:10,
      borderBottomWidth:1,
      borderColor:"#000"
    },
    textListaProduto:{
      fontSize:12 ,
      width:"100%" 
    }
  });

  export default styles;