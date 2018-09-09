import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div className="Catalogue">
    {
      data.products.edges.map(({ node: product }) => (
        <div
          className="Catalogue__item"
          key={product.id}
        >
          <a href="#" className="Product snipcart-add-item"
             data-item-id={product.id}
             data-item-price={product.price}
             data-item-image={product.image}
             data-item-name={product.name}
             data-item-category={product.category}
             data-item-caption={product.caption}
             data-item-description={product.description}
             data-item-subcategory={product.subcategory}
             data-item-url={`/`}>
            <div className="Product__image">
              <img src={product.image.url} sizes={product.image.sizes} />
            </div>
            <div className="Product__details">
              <div className="Product__name">
                {product.name}
              </div>
                <div className="Product__caption">
                  {product.caption}
                </div>
                <div className="Product__price">
                  {product.price} pt
                </div>

              <div className="Product__buy">
                Buy now
              </div>
            </div>
          </a>
        </div>
      ))
    }
  </div>
)

export default IndexPage

export const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
           sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          description
          caption
          category
          subcategory
        }
      }
    }
  }
`
