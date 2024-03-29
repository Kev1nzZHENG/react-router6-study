import React from 'react'
import { useMatch, useParams } from 'react-router-dom'

export default function Detail() {

    const { id, title, content } = useParams();

    const match = useMatch('/home/message/detail/:id/:title/:content')
    console.log(match);

    return (
        <ul>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}
