import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Flex,Center,Box,Tabs,TabPanel,TabList,Tab,TabPanels, Button } from "@chakra-ui/react"
import Header from "../components/navbars/Header"
import Profile from "../components/Profile"
import MintCards from "../components/mintComp/MintCards"
import Footer from "../components/navbars/Footer"
import CustomContainer from "../components/CustomContainer"
import Sidebar from "../components/navbars/Sidebar"

export default function Home() {
  const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){
    return(
      <Box bgGradient="linear(to-br, teal.400,purple.300)">
      
        <Head>
          <title>
            Login | Dashboard
          </title>
        </Head>
        <header>
        <Flex flexDir="row" px="10" py="6" justifyContent="flex-end" color="white">
            <Center>
            <Box>
              <Button colorScheme="purple"
              onClick={()=>authenticate({
                signingMessage:"Tauros SignIN"
              })}>
                Metamask Login
                </Button>
        </Box>
            </Center>
        </Flex>
    </header>
        <Flex>
        <Sidebar />
        <Flex 
        direction="column" 
        alignItems="center"
        width="100%"
        pt={70}
        >
            <MintCards />
        </Flex>
        </Flex>
        <Footer />
      </Box>
    )
  }
  return (
    <>

    <Head>
      <title>
        Tauros Dashboard
      </title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
      <Box Flex="1" bg="purple.100" px="44" py="20"></Box>

      <Tabs size="lg" colorScheme="pink" align="center" variant="enclosed">
        <TabList>
          <Tab fontWeight="bold">Profile</Tab>
          <Tab fontWeight="bold">Balance</Tab>
          <Tab fontWeight="bold">Transactions</Tab>
          <Tab fontWeight="bold">NFTs</Tab>
          <Tab fontWeight="bold">send ETH</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>Balance</TabPanel>
          <TabPanel>Transactions</TabPanel>
          <TabPanel>NFTs</TabPanel>
          <TabPanel>Send ETH</TabPanel>
        </TabPanels>
      </Tabs>


    </Flex>

    </>
  )
}
