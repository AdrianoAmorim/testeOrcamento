/* eslint-disable react/prop-types */
import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import Logo from '../../assets/img/logo.png'
import styles from './styled';
import { useEffect } from 'react';


const DocumentPDF = ({ dataCl, dataProd, dataPag }) => {
    useEffect(() => {
        console.log(dataProd)
    }, [dataProd])
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
                            <Text style={styles.textDadosCliente}>{dataCl.nome}</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>CPF:</Text>
                            <Text style={styles.textDadosCliente}>{dataCl.cpf}</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>TEL:</Text>
                            <Text style={styles.textDadosCliente}>{dataCl.tel}</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>ENDEREÇO:</Text>
                            <Text style={styles.textDadosCliente}>{dataCl.endereco}</Text>
                        </View>
                        <View style={styles.itemDadosCliente}>
                            <Text style={styles.titleDadosCliente}>CIDADE:</Text>
                            <Text style={styles.textDadosCliente}>{dataCl.cidade} </Text>
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

                        {dataProd.length === 0 ? (
                            <Text>NENHUM PRODUTO NA LISTA!</Text>
                        ) : (
                            dataProd.map((prod, i) => (
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between", width: "100%", borderBottomWidth: 1,
                                    borderColor: "#acaaaa",paddingVertical:5}} key={i}>
                                    <Text style={styles.textListaProduto}>
                                        {prod.qtd}
                                    </Text>
                                    <Text style={styles.textListaProduto}>
                                        {prod.nome}
                                    </Text>
                                    <Text style={styles.textListaProduto}>
                                        {prod.desc}
                                    </Text>
                                    <Text style={styles.textListaProduto}>
                                        {prod.vl}
                                    </Text>
                                </View>
                            ))
                        )
                        }
                    </View>

                </View>

                <View style={{ width: "100%", borderTopWidth: 2, borderTopColor: "#8b8c8d", marginTop: 20 }}></View>
                <View style={styles.footer}>
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Pagamento:</Text>
                        <Text style={styles.textFooter}>{dataPag.pgm}</Text>
                    </View >
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Parcelamento:</Text>
                        <Text style={styles.textFooter}>{dataPag.parcelamento}</Text>
                    </View>
                    <View style={styles.boxTextFooter}>
                        <Text style={styles.textTitleFooter}>Desconto:</Text>
                        <Text style={[styles.textFooter, styles.descFooter]}>{dataPag.desconto}</Text>
                    </View>
                    <View style={[styles.boxTextFooter, { justifyContent: "flex-end" }]}>
                        <Text style={styles.textTitleFooter}>TOTAL:</Text>
                        <Text style={styles.textFooter}>{dataPag.total}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPDF;