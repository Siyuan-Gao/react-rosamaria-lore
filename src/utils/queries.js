// GRAPHQL QUERIES
export const queryAllPosts = (skip, limit) => `
query {
  blogPostCollection (skip: ${skip},limit: ${limit},){
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
      postDescription
      body{
        json
      }
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

export const querySpecificPost = (postID) => `query {
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
      postDescription
      body{
        json
      }
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
}`;

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
      postDescription
      body{
        json
      }
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

export const qeuryPostsToMatchSlugs = `query {
  blogPostCollection(order:slug_ASC){
    items {
      sys {
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
      postDescription
      body{
        json
      }
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
  }
}`;

export const queryAboutPage = `query{
  about(id: "35NHlwC2hqnoab4dKcCtWk") {
    body{
      json
    }
  }
}`;

export const getAssetByID = (assetID) => `query{
  asset(id: "${assetID}"){
    url
    title
  }
}`;

//  FUNCTIONS
export function categoriesCounter(blogPostCollection) {
	let initalArray = [];
	blogPostCollection.items.map((item) =>
		initalArray.push(item.categories[0])
	);
	let counts = {};
	initalArray.forEach((x) => {
		counts[x] = (counts[x] || 0) + 1;
	});
	// returns object with categories and their counts
	return counts;
}

export function uniquePostTags(blogPostCollection) {
	let initalArray = [];
	// add all values to initalArray
	blogPostCollection.items.map((item, index) =>
		item.tags.map((subItem) => initalArray.push(subItem))
	);
	// filter out duplicates
	const tagArray = initalArray.filter(
		(value, index) => initalArray.indexOf(value) === index
	);
	// returns array with unique values
	return tagArray;
}

export function userCameFromOutside(ogSlug, data) {
	const { blogPostCollection } = data;
	const postWeNeed = blogPostCollection.items.filter(
		(item) => item.slug.toLowerCase() === ogSlug.toLowerCase()
	);

	return postWeNeed[0];
}
