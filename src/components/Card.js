import InputField from './utils/Input'
const Card = (props) => {
  return (
    <div className='card text-dark mb-3 card-result '>
      <div className='card-body'>
        <h5 className='card-title'>Result:</h5>
        <div className='row g-3 align-items-center justify-content-center'>
          <div className='col-auto'>
            {props.words.map((word) => (
              <div className='d-flex align-items-center' key={Math.random()}>
                <InputField
                  classType='form-control me-2 mb-2'
                  type='text'
                  value={word.text}
                  placeholder='Insert Text'
                  readOnly
                />

                {word.palindrome === true ? (
                  <span className='badge rounded-pill bg-primary'>
                    Palindrome
                  </span>
                ) : (
                  <span className='badge rounded-pill bg-success'>
                    No Palindrome
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
