const Input = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  classType,
  readOnly,
}) => {
  return (
    <input
      className={classType}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  )
}

export default Input
