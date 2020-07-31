import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
    const StaticPage = data.wordpressPage

    return (
        <div>
            <h1>{ StaticPage.title }</h1>
        </div>
    )
}

export default Page

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
        }
    }
`