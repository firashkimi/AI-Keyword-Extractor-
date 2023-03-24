import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import KeywordsModal from './componenets/KeywordsModal'
import TextInput from './componenets/TextInput'

function App() {
  const [keywords,setKeywords]=useState('')
  const [isOpen,setIsOpen]=useState(false)
  const [loading,setLoading]=useState(false)

  const extractKeywords = async (text)=>{
    setLoading(true)
    setIsOpen(true)
    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model:'text-davinci-003',
        prompt:'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n \n'+text+'',
        temperature:0.5,
        max_tokens:60,
        frequency_penalty:0.8
      })
    }
    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL,options)
    const json = await response.json()

    const data = json.choices[0].text.trim()

    console.log(data);
    setKeywords(data)
    setLoading(false)
  }
  const closeModal =()=>{
    setIsOpen(false)
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='4xl' centerContent>
        <Header/>
        <TextInput extractKeywords={extractKeywords}/>
        <Footer/>
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default App
