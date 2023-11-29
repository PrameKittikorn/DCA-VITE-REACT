type HeadingProps = { title: string , name:string }

const Heading = ({ title,name }: HeadingProps) => {
    return (
    <>
        <h1>{title}</h1>
        <h2>Hello ! {name} </h2>
    </>
    )
}

export default Heading