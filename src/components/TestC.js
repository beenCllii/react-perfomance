import React from 'react';

const Messges1 = React.memo(({ input }) => {
    return (
        <div>
            <p>Messages: {input}</p>
        </div>
    )
})

const TitleList = React.memo(({ input }) => {
    return (
        <div>
            <ul>
                {input.map(posts => {
                    return (
                        <Title key={posts.id} posts={posts.title} />
                    )
                })}
            </ul>
        </div>
    )
})

const Title = React.memo(({ key, posts }) => {
    return (
        <li key={key}>
            <p>{posts}</p>
        </li>
    )

})

const TestC = (props) => {




    return (
        <div>
            <h1>Test C components</h1>
            <Messges1 input={props.messages} />
            <TitleList input={props.posts} />
        </div>
    )
}

export default TestC
