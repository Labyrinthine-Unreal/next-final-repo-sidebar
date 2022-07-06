import { Box } from "@chakra-ui/react"
import MintAnimation from "./MintAnimation"
import MintTitle from "./MintTitle"
import MintButton from "./MintButton"
import MintPrice from "./MintPrice"
import MoreInfo from "./MoreInfo"

export default function CardEntry(props) {
    return (
        <Box maxW='260' borderWidth='1px' bg="rgba(255, 255, 25, .15)" borderRadius='lg' overflow="hidden">
            <MintAnimation 
                src={props.image}
                alt={props.alt}
            />
            <Box p='6' h={50}>
                <MintTitle 
                    title={props.title}
                />
                <Box h={10} textAlign='center' as='span' color='gray.600' fontSize='smaller'>
                    <MintPrice
                        presalePrice={props.presalePrice}
                        salePrice={props.salePrice}
                    />
                </Box>
            </Box>
            <Box display='flex' h={20} py={12} justifyContent='center'>
                <MintButton />
            </Box>
            <Box p={3} color='gray'>
                    <MoreInfo info={props.info} href={props.href} />
                </Box>
        </Box>
    )
}