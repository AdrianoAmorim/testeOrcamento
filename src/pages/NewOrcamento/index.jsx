import ButtonPdf from "../../components/ButtonPdf";
import Input from "../../components/Input";
import LabelInput from "../../components/LabelInput";

const NewOrcamento = () => {
    return (
        <div className=" w-full h-full max-h-[500px] rounded-[8px] p-4 flex flex-col items-center bg-slate-300 ">
            <span className="font-bold w-full text-[28px] text-gray-800 mb-6 pb-1 border-b-2 border-gray-400">
                Novo Orçamento
            </span>

            <div className="flex flex-col w-full gap-2 mb-5">
                <LabelInput to="produto">Produto</LabelInput>
                <Input id="produto" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <LabelInput to="produto">Descrição</LabelInput>
                <Input id="produto" />
            </div>

            <div className="fixed bottom-6 right-4">

                <ButtonPdf />
            </div>
        </div>
    )

}
export default NewOrcamento;