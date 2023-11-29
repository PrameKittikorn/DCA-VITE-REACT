import Heading from "./Heading"
import MainMenu from "./MainMenu"
import Section from "./Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"
import { render } from "react-dom"
import Login from "./components/Login"
import Register from "./components/Register"

function App(){
    const [count, setCount] = useState<number>(1);
    const animals: string[] = ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster"];
    const countries: string[] = ["🇹🇭 Thailand", "🇺🇸 USA", "🇯🇵 Japan", "🇰🇷 Korea"];
    return <>
    <MainMenu />
    <Heading title="Hello, My Name is Kala" name="Prame"/>
    <Section title="About Me">
        I am Developer {count}
    </Section>
    <Counter setCount={setCount}>Count = {count}</Counter>
    <List items={countries} render={(item)=><b>{item}</b>}></List>
    <Login />
    <Register />
    </>
}

export default App