import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Detail() {

    const [search, setSearch] = useSearchParams();

    // 需要通过search.get('属性')获取属性值；
    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');

    const x = useLocation();
    console.log('@@@', x);

    function changeSearchParams() {
        setSearch({
            id: '005',
            title: '消息6',
            content: 'setSearch'
        })
    }

    return (
        <div>
            <ul>
                <li>消息编号：{id}</li>
                <li>消息标题：{title}</li>
                <li>消息内容：{content}</li>
            </ul>
            <button onClick={changeSearchParams}>修改searchParams参数</button>
        </div>

    )
}
