
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
        qtd: 0,
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
        parcelamento: "",
        desconto: "",
        total: 0,
    })


    //CRIA UMA MASCARA MONETÁRIA
    const maskMonetario = (event, state, setState, campo) => {
        let inputValue = event.target.value;

        // Remove caracteres não numéricos, exceto ponto e vírgula
        inputValue = inputValue.replace(/[^0-9,.]/g, '');

        // Substitui vírgulas por pontos para padronizar
        inputValue = inputValue.replace(/,/g, '.');

        // Garante que há apenas um ponto decimal
        const parts = inputValue.split('.');

        console.log(parts.length)
        if (parts.length >= 2) {
            console.log(parts[1]);
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
                    <Input mask="999.999.999-99" id="cpfCliente" width="lg" value={cliente.cpf}
                        onChange={(e) => {
                            setCliente({ ...cliente, cpf: e.target.value.replace(/\D/g, "") })
                        }} />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="telCliente">Telefone</LabelInput>
                    <Input mask="(99) 99999-9999" id="telCliente" width="lg" value={cliente.tel}
                        onChange={(e) => {
                            setCliente({ ...cliente, tel: e.target.value.replace(/\D/g, "") })
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
                    <Input mask="999999" id="qtdProduto" width="sm" value={produto.qtd}
                        onChange={(e) => {
                            const novoVl = e.target.value.trim();
                            setProduto({ ...produto, qtd: novoVl === "" ? 0 : parseInt(e.target.value) })
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
                    <Button width="no-bg">
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
                        <option value="avista">Á Vista</option>
                        <option value="cred">C. Crédito</option>
                        <option value="deb">C. Débito</option>
                        <option value="pix">PIX</option>
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
                    <LabelInput to="descontoPagamento">Desconto</LabelInput>
                    <InputMoney id="descontoPagamento" width="md" value={`R$ ${pagamento.desconto}`}
                        onChange={(e) => {
                            maskMonetario(e, pagamento, setPagamento, "desconto")
                        }} />
                </div>
            </div>


            <div className="mt-12">
                <ButtonPdf />
            </div>
        </div>

    )

}
export default NewOrcamento;