const imageMap = new Map();
imageMap.set("img1", {"src": "images/coffee_1.jpg", "alt": "Hands holding a matcha latte", "index": 0});
imageMap.set("img2", {"src": "images/oregon.jpg", "alt": "Oregon landscape", "index": 1});
imageMap.set("img3", {"src": "images/jewelry_1.jpg", "alt": "Purple and gold dangly earrings in a decorative dish", "index": 2});
imageMap.set("img4", {"src": "images/coffee_2.jpg", "alt": "An espresso machine", "index": 3});
imageMap.set("img5", {"src": "images/jewelry_3.jpg", "alt": "Red and gold u-shaped earrings on a white surface", "index": 4});
imageMap.set("img6", {"src": "images/coffee_3.jpg", "alt": "A cappuccino and a croissant on a table", "index": 5});
imageMap.set("img7", {"src": "images/thacher.jpg", "alt": "Coin-operated binoculars against an autumn landscape", "index": 6});
imageMap.set("img8", {"src": "images/jewelry_4.jpg", "alt": "Circular green earrings and potted plants", "index": 7});

const imageKeys = Array.from(imageMap.keys());

var app = new Vue({
  el: '#galleryApp',
  data() {
    return {
      img1: imageMap.get("img1"),
      img2: imageMap.get("img2"),
      img3: imageMap.get("img3"),
      img4: imageMap.get("img4"),
      img5: imageMap.get("img5"),
      img6: imageMap.get("img6"),
      img7: imageMap.get("img7"),
      img8: imageMap.get("img8"),
      currentImageIndex: 0,
      currentImageKey: "img1"
    }
  },
  computed: {
    featuredGalleryImageSrc: function() {
      return imageMap.get(this.currentImageKey).src;
    },
    featuredGalleryImageAlt: function() {
      return imageMap.get(this.currentImageKey).alt;
    }
  },
  methods: {
    /**
     * Updates the featured gallery image to the next one in the list,
     * or goes back to the first if the one being displayed was the last.
     */
    displayNext: function() {
      if (app.currentImageIndex < imageMap.size - 1) {
        app.currentImageIndex += 1;
      } else {
        app.currentImageIndex = 0;
      }
      app.currentImageKey = imageKeys[app.currentImageIndex];
    },
    
    /**
     * Updates the featured gallery image to the previous one in the list,
     * or goes back to the last if the one being displayed was the first.
     */
    displayPrevious: function() {
      if (app.currentImageIndex == 0) {
        app.currentImageIndex = imageMap.size - 1;
      } else {
        app.currentImageIndex -= 1;
      }
      app.currentImageKey = imageKeys[app.currentImageIndex];
    },

    /**
     * Updates the featured gallery image to the preview image that was
     * selected.
     * @param {string} id The ID of the img to select
     */
    selectImage: function(id) {
      app.currentImageIndex = imageMap.get(id).index;
      app.currentImageKey = id;
    }
  }
})