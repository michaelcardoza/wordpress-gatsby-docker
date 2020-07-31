import React from 'react'
import { graphql } from 'gatsby'

const Service = ({ data }) => {
    const StaticService = data.wordpressWpServices

    return (
        <div>
            <h3>{ StaticService.title }</h3>
        </div>
    )
}

export default Service

export const serviceQuery = graphql`
    query($id: String!) {
        wordpressWpServices(id: { eq: $id }) {
            title
            content
        }
    }
`
