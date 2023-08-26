
// eslint-disable-next-line react/prop-types
const Input = ({type, onChange, value})=>{
    return(
      <input type={type} value={value} onChange={onChange} 
      className="bg-green-400 h-8 outline-none ps-3 font-semibold text-[18px] text-gray-900 rounded"/>
    )
}

export default Input;