import InputField from './utils/Input'
import Button from './utils/Button'
const Navbar = (props) => {
  return (
    <nav className='navbar navbar-light navbar-red'>
      <div className='container-fluid justify-content-center'>
        <div className='d-flex'>
          <InputField
            classType='form-control me-2'
            type='text'
            value={props.newWord}
            placeholder='Insert Text'
            id='inserText'
            onChange={props.handleChange}
          />
          <Button
            text={'Send'}
            classType={'btn btn-purple'}
            handleClick={props.handleClick}
            type='button'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
