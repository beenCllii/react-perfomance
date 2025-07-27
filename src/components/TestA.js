import React from 'react'

const TestA = (props) => {
  return (
    <div>
      <h1>Test A components</h1>
      <p>Messages: {props.messages}</p>
      <ul>
        {props.posts.map(posts => {
            return(
                <li key={posts.id}>
                    <p>{posts.title}</p>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default TestA
