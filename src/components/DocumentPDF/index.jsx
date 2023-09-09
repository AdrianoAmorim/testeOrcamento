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
                    <Text style={{ textAlign: "center", marginBottom: 10 }}>ORÇAMENTO</Text>
                    <View style={styles.boxDadosCliente}>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>CLIENTE:</Text>
                            <Text style={styles.textDadosCliente}>Adriano da Silva Amorim</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>CPF:</Text>
                            <Text style={styles.textDadosCliente}>058.058.058-55</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>TEL:</Text>
                            <Text style={styles.textDadosCliente}>(28) 99949-8478</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>ENDEREÇO:</Text>
                            <Text style={styles.textDadosCliente}>Rua Joaquim Grechi - nº12 - Vila rica </Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>CIDADE:</Text>
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

                <View style={{ width: "100%", borderTopWidth: 2, borderTopColor: "#8b8c8d", marginTop: 20 }}></View>
                <View style={styles.footer}>
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Pagamento:</Text>
                        <Text style={styles.textFooter}>Cartão Credito</Text>
                    </View >
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Parcelamento:</Text>
                        <Text style={styles.textFooter}>5x</Text>
                    </View>
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Desconto:</Text>
                        <Text style={[styles.textFooter, styles.descFooter]}>R$ 20,00</Text>
                    </View>
                    <View style={[styles.boxTextFooter, { justifyContent: "flex-end" }]}>
                        <Text style={styles.textTitleFooter}>TOTAL:</Text>
                        <Text style={styles.textFooter}>R$ 2.000,00</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPDF;