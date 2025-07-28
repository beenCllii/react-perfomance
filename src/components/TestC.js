import React, { useCallback } from 'react';

const Messges1 = React.memo(({ input }) => {
    return (
        <div>
            <p>Messages: {input}</p>
        </div>
    )
})

const TitleList = React.memo(({ input , buttonClick}) => {
    console.log('TitleList rendered');
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
    console.log('Test C rendered');
    const buttonClick = useCallback(() => {}, []);
    return (
        <div>
            <h1>Test C components</h1>
            <Messges1 input={props.messages} />
            <TitleList input={props.posts} onClick={buttonClick} />
        </div>
    )
}

export default TestC
