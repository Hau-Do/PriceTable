
const Button = ({title,color, ...props})=>{
    return(
        <button {...props} className="btn" style={{backgroundColor:color}}>{title}</button>
    )
}
Button.defaultProps={
    color:'grey'
}
export default Button;