import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import Logo from '../../assets/img/logo.png'
import styles from './styled';

const DocumentPDF = () => {
    return (
        
        <Document style={{width:"100%",height:"100%"}}>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image style={styles.imgLogo} src={Logo} />
                    <Text>
                        Nome da Empresa
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                    <Text> asdasd asd asdasd a</Text>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPDF;