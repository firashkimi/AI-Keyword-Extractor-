import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} alt='logo' marginRight={1}/>
            <Text>
                Powered By Open AI
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer