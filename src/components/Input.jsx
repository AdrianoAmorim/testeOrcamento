
// eslint-disable-next-line react/prop-types
const Input = ({type, onChange, value,id})=>{
    return(
      <input type={type} value={value} onChange={onChange}  id={id}
      className="bg-purple-500 h-9 outline-none ps-3 font-semibold text-[18px] text-white rounded"/>
    )
}

export default Input;