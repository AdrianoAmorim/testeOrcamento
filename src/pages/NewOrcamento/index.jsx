/* eslint-disable no-const-assign */

import { useNavigate } from "react-router-dom";
import IconAddProd from "../../assets/img/icons/iconAddProd";
import Button from "../../components/Button";
import ButtonPdf from "../../components/ButtonPdf";
import Input from "../../components/Input";
import LabelInput from "../../components/LabelInput";
import IconReturn from "../../assets/img/icons/iconReturn";
import { useState } from "react";
import InputMoney from "../../components/InputMoney";
import Select from "../../components/Select";

const NewOrcamento = () => {
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        qtd: "",
        nome: "",
        desc: "",
        vl: ""

    });
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        tel: "",
        endereco: "",
        cidade: ""
    })
    const [pagamento, setPagamento] = useState({
        pgm: "",
        obs: "",
        parcelamento: "",
        entrada: "",
        desconto: "",
        total: 0,
    })
    const [listProduto, setListProduto] = useState([])


    //CRIA UMA MASCARA MONETÁRIA
    const maskMonetario = (event, state, setState, campo) => {
        let inputValue = event.target.value;

        // Remove caracteres não numéricos, exceto ponto e vírgula
        inputValue = inputValue.replace(/[^0-9,.]/g, '');

        // Substitui vírgulas por pontos para padronizar
        inputValue = inputValue.replace(/,/g, '.');

        // Garante que há apenas um ponto decimal
        const parts = inputValue.split('.');
        if (parts.length >= 2) {
            if (parts[1].length > 2) {
                parts[1] = parts[1].slice(0, 2);
            }

            inputValue = `${parts[0]}.${parts[1]}`;
        }
        setState({
            ...state,
            [campo]: inputValue
        })
    }
    const clearInputsProduto = () => {
        setProduto({
            qtd: "",
            nome: "",
            desc: "",
            vl: ""

        })
    }
    //ADICIONA O PRODUTO NA LISTA
    const addProd = (prod) => {
        const valorProd = parseFloat(prod.vl.trim());

        prod.vl = parseFloat(valorProd).toFixed(2);
        setListProduto((prevState) => [...prevState, prod]);
        getValueTotalOrcamento(prod);
        clearInputsProduto();
    }

    //CALCULA O VALOR TOTAL DO ORÇAMENTO (VALOR A PRAZO)
    const getValueTotalOrcamento = (prod) => {
        const vlProd = parseFloat(prod.vl);
        const vlTotal = parseFloat(pagamento.total);

        const total = vlTotal + vlProd;
        setPagamento({ ...pagamento, total: total.toFixed(2) });
    }
    //aplica o desconto
    const applyDesconto = (pagamento) => {
            const total = parseFloat(pagamento.total);
            console.log(total)
            console.log(pagamento.desconto);

        if (total > 0) {
            const totalDesconto = total - parseFloat(pagamento.desconto);
    
                console.log(totalDesconto)
        }
    }


    return (
        <div className=" w-full h-full p-3 rounded-[8px] flex flex-col items-center bg-slate-200">
            <div className="flex items-center justify-between w-full mb-9 pb-1 border-b-2 border-gray-400">
                <span className="font-bold text-[28px]  text-gray-800 ">Novo Orçamento</span>
                <Button width="no-bg" onClick={() => { navigate("/") }}>
                    <IconReturn width="48px" height="48px" color="#135781" bgColor="#47a9e6" />
                </Button>
            </div>

            {/* DADOS DO CLIENTE */}
            <div className="w-full flex flex-col items-start p-2 mb-8 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Clientes</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="nomeCliente">Nome </LabelInput>
                    <Input id="nomeCliente" width="full" value={cliente.nome}
                        onChange={(e) => {
                            setCliente({ ...cliente, nome: e.target.value })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cpfCliente">CPF</LabelInput>
                    <Input mask="999.999.999-99" maskPlaceholder=" " id="cpfCliente" width="lg" value={cliente.cpf}
                        onChange={(e) => {
                            setCliente({ ...cliente, cpf: e.target.value })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="telCliente">Telefone</LabelInput>
                    <Input mask="(99) 99999-9999" maskPlaceholder=" " id="telCliente" width="lg" value={cliente.tel}
                        onChange={(e) => {
                            setCliente({ ...cliente, tel: e.target.value })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="endereçoCliente">Endereço</LabelInput>
                    <Input id="endereçoCliente" width="full" value={cliente.endereco}
                        onChange={(e) => {
                            setCliente({ ...cliente, endereco: e.target.value })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cidadeCliente">Cidade</LabelInput>
                    <Input id="cidadeCliente" width="full" value={cliente.cidade}
                        onChange={(e) => {
                            setCliente({ ...cliente, cidade: e.target.value })
                        }} />
                </div>
            </div>

            {/* DADOS PRODUTO */}
            <div className="w-full flex flex-col items-start p-2 mb-8 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Produtos</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="qtdProduto">Qtd </LabelInput>
                    <Input mask="999999" maskPlaceholder=" " id="qtdProduto" width="sm" value={produto.qtd}
                        onChange={(e) => {
                            setProduto({ ...produto, qtd: e.target.value.trim() })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="produto">Produto</LabelInput>
                    <Input id="produto" value={produto.nome}
                        onChange={(e) => {
                            setProduto({ ...produto, nome: e.target.value })
                        }}
                    />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="descricaoProd">Descrição</LabelInput>
                    <Input id="descricaoProd" value={produto.desc}
                        onChange={(e) => {
                            setProduto({ ...produto, desc: e.target.value })
                        }} />
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col w-full gap-2 mb-8">
                        <LabelInput to="vlUnitario">Vl Unitário</LabelInput>
                        <InputMoney id="vlUnitario" value={`R$ ${produto.vl}`}
                            onChange={(e) => {
                                maskMonetario(e, produto, setProduto, "vl")
                            }} />
                    </div>
                    <Button width="no-bg" onClick={() => addProd(produto)}>
                        <IconAddProd width="48px" height="48px" color="#135781" bgColor="#47a9e6" />
                    </Button>
                </div>
            </div>

            {/* DADOS PAGAMENTO */}
            <div className="w-full flex flex-col items-start p-2 mb-8 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Pagamento</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="pagPagamento">Pagamento</LabelInput>
                    <Select id="pagPagamento" width="full" value={pagamento.pgm}
                        onChange={(e) => {
                            setPagamento({ ...pagamento, pgm: e.target.value })
                        }}>
                        <option value="Á Vista">Á Vista</option>
                        <option value="Credito">C. Crédito</option>
                        <option value="Debito">C. Débito</option>
                        <option value="Pix">PIX</option>
                    </Select>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="parcPagamento">Parcelamento</LabelInput>
                    <Select id="parcPagamento" width="md" value={pagamento.parcelamento}
                        onChange={(e) => {
                            setPagamento({ ...pagamento, parcelamento: e.target.value })
                        }}>

                        {
                            [...Array(10)].map((_, index) => (
                                <option key={index} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))
                        }
                    </Select>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="entradaPagamento">Entrada</LabelInput>
                    <InputMoney id="entradaPagamento" width="md" value={`R$ ${pagamento.entrada}`}
                        onChange={(e) => {
                            maskMonetario(e, pagamento, setPagamento, "entrada")
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="descontoPagamento">Desconto</LabelInput>
                    <InputMoney id="descontoPagamento" width="md" value={`R$ ${pagamento.desconto}`}
                        onChange={(e) => {
                            maskMonetario(e, pagamento, setPagamento, "desconto");
                            applyDesconto(pagamento);
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="obsPagamento">Observações</LabelInput>
                    <Input id="obsPagamento" value={pagamento.obs}
                        onChange={(e) => {
                            setPagamento({ ...pagamento, obs: e.target.value })
                        }}
                    />
                </div>
            </div>


            <div className="mt-12">
                <ButtonPdf dataCliente={cliente} dataProduto={listProduto} dataPagamento={pagamento} />
            </div>
        </div>

    )

}
export default NewOrcamento;