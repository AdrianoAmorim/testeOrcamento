import Input from "../../components/Input";

const NewOrcamento = () => {
    return (
        <div className=" w-full h-full max-h-[500px] rounded-[8px] p-4 flex flex-col items-center bg-slate-300 ">
           <span className="font-bold w-full text-[28px] text-gray-800 mb-6 pb-1 border-b-2 border-gray-400">Novo Orçamento</span>
           
           <div className="flex flex-col w-full">
            <span>Produto</span>
            <Input />
            
           </div>
        </div>
    )

}
export default NewOrcamento;