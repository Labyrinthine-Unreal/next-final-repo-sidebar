import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Flex,Center, Box, Tabs, TabPanel, TabList, Tab, TabPanels, Button, Text, Divider } from "@chakra-ui/react"
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
          <Flex px="10" py="6" justifyContent="flex-end" color="white">
            <Center justifyContent="flex-end">
              <Box justifyContent="flex-end">
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
        
        <Flex pb={20}>
          <Sidebar />
          <Flex direction="column" alignItems="center" width="100%" pt={70}>
              <Text 
                pl={40} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
                Lorem ipsum dolor sit amet
              </Text>
              <Text pl={40} pr={40} pb={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
              <MintCards />
              <Text 
                pl={40} pr={40} pb={5} pt={20} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
                Lorem ipsum dolor sit amet
              </Text>
              <Text pl={40} pr={40}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
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
