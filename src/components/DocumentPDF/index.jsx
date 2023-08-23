import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import Logo from '../../assets/img/logo.png'
import styles from './styled';

const DocumentPDF = () => {
    return (
        
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image style={styles.imgLogo} src={Logo} />
                    <Text>
                        Nome da Empresa
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPDF;