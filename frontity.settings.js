const settings = {
  "name": "technocowgirl",
  "state": {
    "frontity": {
      "url": "https://technocowgirl.com",
      "title": "Techno Cowgirl",
      "description": "No, my vet can't hook you up with ketamine"
    }, 
    "analytics": {
      "pageviews": {
        "googleAnalytics": true,
      },
      "events": {
        "googleAnalytics": true,
      }
    },
  },
  "packages": [
    {
      "name": "techno-chakra",
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
          "url": "https://wp.technocowgirl.com",
          "params": {
            "per_page": 5,
          },
        }
      }
    },
    {
      "name": "@frontity/google-analytics",
      "state": {
        "googleAnalytics": {
          "trackingId": "G-8XE6TEDPJ4",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments"
  ]
};

export default settings;
