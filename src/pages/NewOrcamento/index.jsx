
import { useNavigate } from "react-router-dom";
import IconAddProd from "../../assets/img/icons/iconAddProd";
import Button from "../../components/Button";
import ButtonPdf from "../../components/ButtonPdf";
import Input from "../../components/Input";
import LabelInput from "../../components/LabelInput";
import IconReturn from "../../assets/img/icons/iconReturn";
import { useEffect, useState } from "react";

const NewOrcamento = () => {
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        qtd: 0,
        nome: "",
        desc: "",
        vl: 0

    });
    const [cliente,setCliente] = useState({
        nome: "",
        cpf: "",
        tel: "",
        endereco:"",
        cidade:""
    })

    useEffect(() => {
        console.log(cliente)
    }, [cliente])

    return (
        <div className=" w-full h-full p-3 rounded-[8px] flex flex-col items-center bg-slate-200">
            <div className="flex items-center justify-between w-full mb-9 pb-1 border-b-2 border-gray-400">
                <span className="font-bold text-[28px]  text-gray-800 ">Novo Orçamento</span>
                <Button width="no-bg" onClick={() => { navigate("/") }}>
                    <IconReturn width="48px" height="48px" color="#135781" bgColor="#47a9e6" />
                </Button>
            </div>

            <div className="w-full flex flex-col items-start p-2 mb-8 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Clientes</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="nomeCliente">Nome </LabelInput>
                    <Input id="nomeCliente" width="full" value={cliente.nome}
                     onChange={(e) => {
                        setCliente({ ...cliente, nome: e.target.value })
                    }}/>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cpfCliente">CPF</LabelInput>
                    <Input id="cpfCliente" width="lg" value={cliente.cpf}
                     onChange={(e) => {
                        setCliente({ ...cliente, cpf: e.target.value })
                    }}/>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="telCliente">Telefone</LabelInput>
                    <Input id="telCliente" width="lg" value={cliente.tel}
                     onChange={(e) => {
                        setCliente({ ...cliente, tel: e.target.value })
                    }}/>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="endereçoCliente">Endereço</LabelInput>
                    <Input id="endereçoCliente" width="full" value={cliente.endereco}
                     onChange={(e) => {
                        setCliente({ ...cliente, endereco: e.target.value })
                    }}/>
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cidadeCliente">Cidade</LabelInput>
                    <Input id="cidadeCliente" width="full" value={cliente.cidade}
                     onChange={(e) => {
                        setCliente({ ...cliente, cidade: e.target.value })
                    }}/>
                </div>
            </div>
            <div className="w-full flex flex-col items-start p-2 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Produtos</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="qtdProduto">Qtd </LabelInput>
                    <Input id="qtdProduto" width="sm" value={produto.qtd}
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
                    }}/>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col w-full gap-2 mb-8">
                        <LabelInput to="vlUnitario">Vl Unitário</LabelInput>
                        <Input id="vlUnitario" width="md" value={produto.vl}
                         onChange={(e) => {
                            const novoVl = e.target.value.trim();
                            setProduto({ ...produto, vl: novoVl === "" ? 0 : parseInt(e.target.value)})
                        }} />
                    </div>
                    <Button width="no-bg">
                        <IconAddProd width="48px" height="48px" color="#135781" bgColor="#47a9e6" />
                    </Button>
                </div>
            </div>



            <div className=" mt-12">
                <ButtonPdf />
            </div>
        </div>

    )

}
export default NewOrcamento;