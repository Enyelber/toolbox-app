import { useState } from 'react'
import Layout from '../components/utils/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Modal from '../components/utils/Modal'

function App() {
  const [words, setWords] = useState([])
  const [newWord, setNewWord] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    setNewWord(e.target.value)
  }

  function getText(text) {
    fetch(`http://localhost:3001/iecho?text=${text}`)
      .then((res) => res.json())
      .then((res) => setWords([...words, res]))
      .catch((error) => {
        console.error(error)
      })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (newWord === '') {
      setIsOpen(!modalIsOpen)
    } else {
      getText(newWord)
    }
  }

  return (
    <Layout>
      <Modal
        state={modalIsOpen}
        changeState={setIsOpen}
        title='Information'
        showHeader={true}
        showOverlay={true}
        positionModal={'center'}
        padding={'20px'}>
        <div>
          <h5>Please enter a string</h5>
        </div>
      </Modal>
      <Navbar
        handleClick={handleClick}
        handleChange={handleChange}
        newWord={newWord}
      />
      <Card words={words} />
    </Layout>
  )
}

export default App
