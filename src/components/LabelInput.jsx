
// eslint-disable-next-line react/prop-types
const LabelInput = ({children, to}) => {
    return (
        <label htmlFor={to} className="text-[16px] font-bold text-gray-800">
            {children}
        </label>
    )
}

export default LabelInput