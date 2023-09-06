import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import Logo from '../../assets/img/logo.png'
import styles from './styled';

const DocumentPDF = () => {
    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.boxLogoEmpresa}>
                        <Image style={styles.imgLogo} src={Logo} />
                    </View>
                    <View style={styles.textHeader}>
                        <View>
                            <Text style={styles.nomeEmpresa}>Mozer Vidraçaria</Text>
                        </View>
                        <View style={styles.boxEnderecoEmpresa}>
                            <Text style={styles.enderecoEmpresa}>Rua Apocalipse 16 - Nº 345</Text>
                            <Text style={styles.enderecoEmpresa}>Bairro: Fim do Mundo </Text>
                            <Text style={styles.enderecoEmpresa}>Cachoeiro de Itapemirim - ES</Text>
                            <Text style={styles.telefoneEmpresa}>Tel: (28) 99999-9999</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.body}>

                    <View style={styles.boxDadosCliente}>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>Cliente:</Text>
                            <Text style={styles.textDadosCliente}>Adriano da Silva Amorim</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>Cpf:</Text>
                            <Text style={styles.textDadosCliente}>058.058.058-55</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>Tel:</Text>
                            <Text style={styles.textDadosCliente}>(28) 99949-8478</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>Endereço:</Text>
                            <Text style={styles.textDadosCliente}>Rua Joaquim Grechi - nº12 - Vila rica </Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>Cidade:</Text>
                            <Text style={styles.textDadosCliente}>Cachoeiro de Itapemirim - ES </Text>
                        </View>
                    </View>


                    <View style={styles.boxHeaderBody}>
                        <Text style={styles.titleHeaderBody}>
                            Qtd
                        </Text>
                        <Text style={styles.titleHeaderBody}>
                            Produto
                        </Text>
                        <Text style={styles.titleHeaderBody}>
                            Descrição
                        </Text>
                        <Text style={styles.titleHeaderBody}>
                            Vl. Unitário
                        </Text>
                    </View>

                    <View style={styles.boxListaProduto}>
                        <Text style={styles.textListaProduto}>
                            1
                        </Text>
                        <Text style={styles.textListaProduto}>
                            Janela
                        </Text>
                        <Text style={styles.textListaProduto}>
                            2 abas, kit branco, 2x1,50M dasdas asd ad d asd adasd ad
                        </Text>
                        <Text style={styles.textListaProduto}>
                            R$ 300,00
                        </Text>
                    </View>

                    <View style={styles.boxListaProduto}>
                        <Text style={styles.textListaProduto}>
                            1
                        </Text>
                        <Text style={styles.textListaProduto}>
                            Janela
                        </Text>
                        <Text style={styles.textListaProduto}>
                            2 abas, kit branco, 2x1,50M dasdas asd ad d asd adasd ad
                        </Text>
                        <Text style={styles.textListaProduto}>
                            R$ 300,00
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPDF;