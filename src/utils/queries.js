export const queryAllPostsWithAuthors = `
query {
  blogPostCollection {
    items {
      sys{
        id
      }
      title
      slug
      publishDate
      heroImage {
        url(transform: {
          width:760,
          height:503,
          resizeStrategy:FILL
        } )
      }
      body
      categories
      tags
      authorCollection(limit:1){
        items{
          name
          image{
            url(transform: {width:250,resizeStrategy:THUMB} )
          }
        }
      }
    }
  }
}`;

export const querySpecificPost = (postID) => `
query {
    blogPost(id:"${postID}"){
      sys{
        id
      }
      title
      slug
      publishDate
      heroImage {
        url(transform: {
          width:760,
          height:503,
          resizeStrategy:FILL
        } )
      }
      body
      categories
      tags
      authorCollection(limit:1){
        items{
          image{
            url(transform: {width:250,resizeStrategy:THUMB} )
          }
          name
        }
      }
    }
}`;

export const queryAuthor = (authID) => `
query {
        person(id: ${authID}){
          title
          name
          shortBio
          image{
            url(transform: {width:250,resizeStrategy:THUMB} )
          }
        }
}`;

export const querySliderFeaturedPosts = `query  {
  blogPostCollection(where: {categories_contains_some:"Featured"}){
    items{
      sys{
        id
      }
      title
      slug
      publishDate
      heroImage {
        url(transform: {
          width:760,
          height:503,
          resizeStrategy:FILL
        } )
      }
      categories
    }
  }
}

`;

export const queryForTags = `query{
  blogPostCollection(where:{
    tags_contains_none:" "}){
    items{
      tags
    }
  }
}`;

export const queryForCategories = `query{
  blogPostCollection(where:{
    categories_contains_none:" "}){
    items{
      categories
    }
  }
}`;

export const queryPostsNotFeatured = `query {
  blogPostCollection(where:{
    categories_contains_none: "Featured"
  }) {
    items {
      sys{
        id
      }
      title
      slug
      publishDate
      heroImage {
        url(transform: {
          width:760,
          height:503,
          resizeStrategy:FILL
        } )
      }
      body
      categories
      tags
      authorCollection(limit:1){
        items{
          name
          image{
            url(transform: {width:250,resizeStrategy:THUMB} )
          }
        }
      }
    }
  }
}`;

export function categoriesCounter(data) {
    let initalArray = [];
    data.blogPostCollection.items.map((item, index) => {
        initalArray.push(item.categories[0].toLowerCase());
    });
    let counts = {};
    initalArray.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    // returns object with categories and their counts
    return counts;
}

export function uniquePostTags(data) {
    let initalArray = [];
    // add all values to initalArray
    data.blogPostCollection.items.map((item, index) => {
        item.tags.map((subItem) => {
            initalArray.push(subItem);
        });
    });
    // filter out duplicates
    const tagArray = initalArray.filter(
        (value, index) => initalArray.indexOf(value) === index
    );
    // returns array with unique values
    return tagArray;
}
