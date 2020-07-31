import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data }) => {
    const StaticPost = data.wordpressPost

    return (
        <div>
            <h1>{ StaticPost.title }</h1>
            {console.log(StaticPost)}
        </div>
    )
}

export default Post

export const postQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
    }
`