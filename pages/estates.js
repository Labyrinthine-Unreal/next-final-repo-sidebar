import Head from 'next/head'
import { Box, SimpleGrid, Flex, Text } from "@chakra-ui/react"
import properties from "../components/data/properties"
import MintAnimation from "../components/mintComp/MintAnimation"
import MintTitle from "../components/mintComp/MintTitle"
import MintPrice from "../components/mintComp/MintPrice"
import MintButtonEstates from "../components/mintComp/MintButtonEstates"
import Sidebar from "../components/navbars/Sidebar"
import Footer from "../components/navbars/Footer"
import HeaderSignIn from '../components/navbars/HeaderSignIn'

export default function TaurosPage() {
    const item = properties[1];
            
    return (
        <Box bgGradient="linear(to-br, teal.400,purple.300)">
            <Head>
                <title>
                    Claim Estates
                </title>
            </Head>

            <HeaderSignIn />

            <Flex pb={20}>
                <Sidebar />
                <Flex direction="column" alignItems="center" width="100%" pt={70}>
                    <SimpleGrid columns={{md: 2, sm: 1}} spacing={10} spacingY={10}>
                        <Box maxW='260' h={490} borderWidth='1px' bg='#ffffffbb' borderRadius='lg' overflow="hidden">
                            <MintAnimation src={item.imageUrl} alt={item.imageAlt} />
                            <Box p='6' h={50} textAlign="left">
                                <MintTitle title={item.title} />
                                <Box h={10} textAlign='left' as='span' color='gray.600' fontSize='13px'>
                                    <MintPrice presalePrice={item.presalePrice} salePrice={item.salePrice} />
                                </Box>
                            </Box>
                            <Box display='flex' h={20} py={12} pl={4} justifyContent='center'>
                                <MintButtonEstates />
                            </Box>
                        </Box>

                        <Box maxW='300' borderRadius='lg'>
                            <Flex maxW='400' align='left'>
                                <Flex mt='1' fontSize='sm' as='h6' lineHeight='tight' textAlign='left' verticalAlign='baseline'>
                                    {item.description}
                                </Flex>
                            </Flex>
                            <Flex pt={80} pb={4} fontSize='22px'>
                                {item.unclaimed}
                            </Flex>
                            <Text>This does not have to be placed in properties.js, we can set it up anywhere.</Text>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Footer />
        </Box>
    )
}