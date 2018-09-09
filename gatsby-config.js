module.exports = {
  siteMetadata: {
    siteName: "Solarcity Demo",
    products: [
      {
        name: "Sony 43\" Full HD HDR Smart LED Television",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F173%2F173829.jpg",
        price: 999.00,
        category: "Electronics",
        subcategory: "Television",
        caption: "The 43\" Full HD HDR Smart LED Television is the perfect device for enjoying hours of entertainment",
        description: "The 43\" Full HD HDR Smart LED Television is the perfect device for enjoying hours of entertainment. This Smart TV allows you to have quick access to the latest social apps, movies, shows and games. Including an LED panel, it displays impressive image quality. This FHD Smart TV displays movies at 2X the detail of standard HD. Boasting the Sony X-Reality PRO picture engine, it maximises picture quality no matter the input source; from dazzling 1080p Blu-ray movies all the way to highly-compressed, low-resolution Web videos."
      },
      {
        name: " Panasonic 40\" Full HD LED Television",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F173%2F173844.jpg",
        price: 699.00,
        category: "Electronics",
        subcategory: "Television",
        caption: "Upgrade your viewing experience with the 40\" Full HD LED Television. With the LED LCD display, it produces impressive colour for your favourite films.",
        description : "Upgrade your viewing experience with the 40\" Full HD LED Television. With the LED LCD display, it produces impressive colour for your favourite films. It features a Full HD panel, designed for enjoying your TV shows in lifelike colour and increased picture quality. Watch movies in enhanced detail with this TV's 1920x1080 display. Equipped with Panasonic Adaptive Backlight Dimming technology, it will improve image contrast to offer stunning pictures and videos."
      },
      {
        name: "Panasonic 50\" HD LED Smart Television ",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F173%2F173915.jpg",
        price: 1399.00,
        category: "Electronics",
        subcategory: "Television",
        caption: "Enjoy a whole new world of entertainment with the 50\" HD LED Smart Television. It includes an LED LCD panel, so it delivers crystal-clear detail in all lighting conditions.",
        description: "Enjoy a whole new world of entertainment with the 50\" HD LED Smart Television. It includes an LED LCD panel, so it delivers crystal-clear detail in all lighting conditions. Boasting an HD panel, the Panasonic presents movies in great resolution. This Smart TV is great for browsing the Internet and using all the latest media applications in the luxury of your living room. Including 1920x1080 resolution, it is perfect for experiencing TV shows in enhanced detail. Equipped with Panasonic Adaptive Backlight Dimming contrast technology, it will adjust different parts of the image for added depth perception. This TV is enhanced by a Dual-Core processor, so you can effortlessly switch between applications, web browsing and TV shows. It includes an integrated web browser, delivering tailored access to a wide array of Internet functions directly from your television screen."
      },
      {
        name: "Panasonic 49\" 4K Ultra HD HDR Smart LED Television",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F173%2F173894.jpg",
        price: 1999.00,
        category: "Electronics",
        subcategory: "Televisions",
        caption: "With the 49\" 4K Ultra HD HDR Smart LED Television, you can enjoy a captivating entertainment experience. It has 3840x2160 resolution for watching TV shows in enhanced detail.",
        description: "With the 49\" 4K Ultra HD HDR Smart LED Television, you can enjoy a captivating entertainment experience. It has 3840x2160 resolution for watching TV shows in enhanced detail. Including an IPS LED LCD panel, it generates great image quality. Boasting a 4K Ultra HD panel, this TV displays your favourite movies and shows at four times the resolution detail of Full HD. This Smart TV will help you discover premium online content for endless entertainment. It has Panasonic Local Dimming technology, improving image contrast to offer stunning pictures and videos. Featuring a Quad-Core Pro processor, it effortlessly switches between applications, video playback, and other functions. It includes an integrated web browser and has Bluetooth compatibility, making this versatile TV perfect for effortlessly syncing with your wireless speakers and creating a sleek and tidy home entertainment system."
      },
      {
        name: "Panasonic DMC-FT30GN-R Tough Camera Red",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F136%2F136624.jpg",
        price: 249.99,
        category: "Cameras",
        subcategory: "Digital Cameras",
        caption: "Panasonic DMC-FT30 Red casual, stylish tough camera for everything from everyday use to active scenes.",
        description: "Panasonic DMC-FT30 Red casual, stylish tough camera for everything from everyday use to active scenes."
      },
      {
        name: "Canon Powershot G7X Mark II",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F146%2F146407.jpg",
        price: 749.00,
        category: "Cameras",
        subcategory: "Digital Cameras",
        caption: "The Powershot G7X Mark II is a powerhouse compact camera offering unprecedented levels of control and incredible image quality in every shot",
        description: "The Powershot G7X Mark II is a powerhouse compact camera offering unprecedented levels of control and incredible image quality in every shot. The first camera to include Canon's new DIGIC 7 processor, coupled with a 1.0-type 20.1 megapixel CMOS sensor and 4.2x optical zoom lens."
      },
      {
        name: "Panasonic Lumix TZ80 4K Camera - Silver",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F152%2F152509.jpg",
        price: 619.00,
        category: "Cameras",
        subcategory: "Digital Cameras",
        caption: "ake this pocket-sized camera on your next trip. Its powerful 30x zoom lens and 4K Video/Photo recording capability lets you save your travel memories in exactly the form you want.",
        description: "ake this pocket-sized camera on your next trip. Its powerful 30x zoom lens and 4K Video/Photo recording capability lets you save your travel memories in exactly the form you want."
      },
      {
        name: "GoPro Hero5",
        image: "https://www.noelleeming.co.nz/shop/renderImage.image?imageName=products%2F148%2F148162.1.jpg",
        price: 499.99,
        category: "Cameras",
        subcategory: "Action Cameras",
        caption: "HERO5 Black is the most powerful and easy-to-use GoPro ever, thanks to its 4K video, voice control, one-button simplicity, touch display and waterproof design.",
        description: "HERO5 Black is the most powerful and easy-to-use GoPro ever, thanks to its 4K video, voice control, one-button simplicity, touch display and waterproof design. Smooth stabilised video, crystal-clear audio and pro-quality photo capture combine with GPS to make HERO5 Black simply the best GoPro. Directly upload footage to your GoPro Plus cloud account for easy access on your phone."
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "7cefff65c730d7204099cf63c5c990",
        disableLiveReload: false,
        previewMode: false
      }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: "MDZhMWYyZTQtM2JkNy00ZmM5LTg5NWMtMTdkYThjNmFmYzU4NjM2NzE4NjgxNjczMDkxMTMw",
        autopop: true
      }
    }
  ]
};
