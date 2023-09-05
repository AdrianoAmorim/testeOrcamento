import {StyleSheet } from '@react-pdf/renderer'


const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      width: '100%',
      height:'100%',
      backgroundColor: '#E4E4E4'
    },
    section: {
      flexDirection:'row',
      alignItems:'center',
      height: 190,
      margin: 10,
      padding: 10
    },
    imgLogo:{
      width: 100,
      height:100,
      objectFit:'cover'

    },
    body:{
      width:"100%",
      height:"100%"
    }
  });

  export default styles;