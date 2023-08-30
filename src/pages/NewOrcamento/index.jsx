
import { useNavigate } from "react-router-dom";
import IconAddProd from "../../assets/img/icons/iconAddProd";
import Button from "../../components/Button";
import ButtonPdf from "../../components/ButtonPdf";
import Input from "../../components/Input";
import LabelInput from "../../components/LabelInput";
import IconReturn from "../../assets/img/icons/iconReturn";

const NewOrcamento = () => {
    const navigate = useNavigate();

    return (
        <div className=" w-full  p-3 rounded-[8px] flex flex-col items-center bg-slate-200">
            <div className="flex items-center justify-between w-full mb-9 pb-1 border-b-2 border-gray-400">
                <span className="font-bold text-[28px]  text-gray-800 ">Novo Orçamento</span>
                <Button width="no-bg" onClick={()=>{navigate("/")}}>
                    <IconReturn width="48px" height="48px" color="#135781" bgColor="#47a9e6" />
                </Button>
                </div>

            <div className="w-full flex flex-col items-start p-2 mb-8 border-2 border-purple-300 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Clientes</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="nomeCliente">Nome </LabelInput>
                    <Input id="nomeCliente" width="full" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cpfCliente">CPF</LabelInput>
                    <Input id="cpfCliente" width="lg" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="telCliente">Telefone</LabelInput>
                    <Input id="telCliente" width="lg" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="endereçoCliente">Endereço</LabelInput>
                    <Input id="endereçoCliente" width="full" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="cidadeCliente">Cidade</LabelInput>
                    <Input id="cidadeCliente" width="full" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start p-2 border-2 border-blue-400 rounded">
                <span className="text-gray-600 text-[22px] bg-slate-200 -mt-6 mb-6 font-semibold ">Dados Produtos</span>

                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="qtdProduto">Qtd </LabelInput>
                    <Input id="qtdProduto" width="sm" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="produto">Produto</LabelInput>
                    <Input id="produto" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-8">
                    <LabelInput to="produto">Descrição</LabelInput>
                    <Input id="produto" />
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col w-full gap-2 mb-8">
                        <LabelInput to="vlUnitario">Vl Unitário</LabelInput>
                        <Input id="vlUnitario" width="md" />
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