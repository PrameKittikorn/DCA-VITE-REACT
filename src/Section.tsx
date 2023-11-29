import {ReactNode} from 'react'

type SectionProps = {
    title ?: string,
    children : ReactNode
}

const Section = ({children,title = "Section"} : SectionProps) => {
  
    

    return (
    <section>
        <b>{title}</b>
        <p>{children}</p>
    </section>
  )
}

export default Section