import React from 'react'
import { ReactNode } from 'react'

type ListProps<T> = {
    items: T[],
    render: (item: T) => ReactNode
}


const List = <T,>({items,render}: ListProps<T>) => {
  return (
    <ul>
            {items.map((item,index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
    </ul>
  )
}

export default List