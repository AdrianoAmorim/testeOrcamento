
import { NumericFormat } from "react-number-format";
import Input from "./Input";
// eslint-disable-next-line react/prop-types
const InputMoney = ({id,onChange, value})=>{
    return(
      <NumericFormat
      id={id}
      
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      customInput={Input} // Use um componente de entrada personalizado
      onValueChange={onChange}
    />
    )
}

export default InputMoney;