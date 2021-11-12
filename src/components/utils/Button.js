const Button = (props) => {
  return (
    <button
      className={props.classType || 'btn btn-primary'}
      type={props.type}
      onClick={props.handleClick}>
      {props.text || 'Send'}
    </button>
  )
}

export default Button
