import {StyleSheet } from '@react-pdf/renderer'


const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      width: '100%',
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
      borderColor:'#8b8c8d'
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
      borderBottomColor: "#8b8c8d"
    },
    boxEnderecoEmpresa:{
      flexDirection:'column',
      alignItems:"center",
      padding: 10,
      gap:5
    },
    enderecoEmpresa:{
      fontSize:12,
      color: "#4a4a4b"
    },
    telefoneEmpresa:{
      fontSize:14,
      color:"#3059d7",
      marginTop:5
    
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
      borderColor:"#8b8c8d",
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
      flexDirection:"column",
      width:"100%",
    },
    textListaProduto:{
      fontSize:12 ,
      width:"100%" 
    },
    footer:{
      flexDirection:"column",
      width:"100%",
      paddingHorizontal:10,
      marginTop:10,
      gap:10,
    },
    boxTextFooter:{
      flexDirection:"row",
      alignItems:"center",
      gap:10
    },
    textTitleFooter:{
      fontSize:14,

    },
    descFooter:{
      color:"red"
    },
    textFooter:{
      fontSize:12
    }
  });

  export default styles;