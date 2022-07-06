import Link from 'next/link'

export default function MoreInfo(props) {
    return (
        <Link href={props.href}>
          {props.info}
        </Link>
           
    )
}