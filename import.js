const  { SiteClient }  =  require('datocms-client');

const client =  new  SiteClient('b5f91c9f0710f68a543d8be789e659');

const config =  require('./gatsby-config');



config.siteMetadata.products.reduce((chain,  product)  => (

  chain

    .then(()  => client.uploadImage(product.image))

    .then((image)  => client.items.create({
      name: product.name,
      image: image,
      price: product.price,
      subcategory: product.subcategory,
      category: product.category,
      description: product.description,
      caption: product.caption,
      itemType: '43021'
    }))

),  Promise.resolve());