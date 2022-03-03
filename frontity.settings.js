const settings = {
  "name": "technocowgirl",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Techno Cowgirl",
      "description": "No, my vet can't hook you up with ketamine"
    }
  },
  "packages": [
    {
      "name": "arizona-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Training",
              "/category/training/"
            ],
            [
              "Trail Ride",
              "/tag/trail-ride/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wp.technocowgirl.com",
          "params": {
            "per_page": 2,
          },
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
