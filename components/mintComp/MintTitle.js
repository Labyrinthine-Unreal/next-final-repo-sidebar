import { Box } from "@chakra-ui/react"

export default function MintTitle(props) {
    return (
        <Box 
            mt='1'
            fontWeight='semibold'
            fontSize='sm'
            as='h6'
            lineHeight='tight'
            textAlign='center'
            verticalAlign='baseline'
        >
            {props.title}
        </Box>
                
    )
}