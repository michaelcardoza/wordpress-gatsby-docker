const path = require('path')
const { slash } = require('gatsby-core-utils')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        title
                        slug
                        path
                        content
                        status
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        title
                        slug
                        path
                        content
                        status
                    }
                }
            }
            allWordpressWpServices {
                edges {
                    node {
                        id
                        title
                        slug
                        path
                        content
                        status
                    }
                }
            }
        }
    `)

    const { allWordpressPage, allWordpressWpServices, allWordpressPost } = result.data

    /*
    * Page static
    * */
    const pageTemplate = path.resolve('./src/templates/page.js')
    allWordpressPage.edges.forEach(edge => {
        createPage({
            path: edge.node.path,
            component: slash(pageTemplate),
            context: {
                id: edge.node.id
            }
        })
    })

    /*
    * Post static
    * */
    const postTemplate = path.resolve('./src/templates/post.js')
    allWordpressPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
                id: edge.node.id
            }
        })
    })

    /*
    * Post type: Service
    * */
    const serviceTemplate = path.resolve('./src/templates/service.js')
    allWordpressWpServices.edges.forEach(edge => {
        createPage({
            path: edge.node.path,
            component: slash(serviceTemplate),
            context: {
                id: edge.node.id
            }
        })
    })
}
