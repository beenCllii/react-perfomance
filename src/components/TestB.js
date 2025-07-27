const TestB = (props) => {


    const Messges1 = ({ input }) => {
        return(
            <div>
                <p>Messages: {input}</p>
            </div>
        )
    }

    const TitleList = ({ input }) => {
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
    }

    const Title = ({ key, posts }) => {
        return (
            <li key={key}>
                <p>{posts}</p>
            </li>
        )

    }

    return (
        <div>
            <h1>Test B components</h1>
            <Messges1 input={props.messages} />
            <TitleList input={props.posts} />
        </div>
    )
}

export default TestB
