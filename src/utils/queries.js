export const queryAllPostsWithAuthors = `
query {
    blogPostCollection {
      items {
        title
        slug
        publishDate
        heroImage {
          url(transform: {width:1080} )
        }
        body
        categories
        tags
        authorCollection(limit:1){
          items{
            name
            image{
              url(transform: {width:250} )
            }
          }
        }
      }
    }
  }`;

export const querySpecificPost = (postID) => `
query {
    blogPost(id:"${postID}"){
      title
      slug
      publishDate
      heroImage {
        url
      }
      body
      categories
      tags
      authorCollection(limit:1){
        items{
          image {
            url
          }
          name
        }
      }
    }
  }
`;

export const queryAuthor = (authID) => `
query {
        person(id: ${authID}){
          title
          name
          shortBio
          image{
            url
          }
        }
      }`;
