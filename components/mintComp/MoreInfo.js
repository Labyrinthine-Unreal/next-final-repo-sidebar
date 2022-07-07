import { Tooltip, Link } from '@chakra-ui/react'

export default function MoreInfo(props) {
    return (
      <Tooltip hasArrow arrowSize={12} label="Click for more info" bg="#7393B3">
        <Link href={props.href}>
          {props.info}
        </Link>
      </Tooltip>
           
    )
}