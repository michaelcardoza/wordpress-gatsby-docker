import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {
    const StaticServices = data.allWordpressWpServices.edges
    const StaticPosts = data.allWordpressPost.edges

    return (
        <Layout>
            <SEO title="Home" />

            <h3>Articles</h3>
            <ul>
                <li>
                    {
                        StaticPosts.map(( {node: post}, key ) => (
                            <li key={key}>
                                <Link to={`/blog${post.path}`}> { post.title } </Link>
                            </li>
                        ))
                    }
                </li>
            </ul>

            <h3>Services</h3>
            <ul>
                {
                    StaticServices.map(( {node: service}, key ) => (
                        <li key={key}>
                            <Link to={service.path}> { service.title } </Link>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default IndexPage

export const allQuery = graphql`
    query {
        allWordpressWpServices {
            edges {
                node {
                    title
                    slug
                    path
                }
            }
        }
        allWordpressPost {
            edges {
                node {
                    title
                    slug
                    path
                }
            }
        }
    }
`
