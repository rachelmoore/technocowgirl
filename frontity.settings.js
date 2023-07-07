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
          "url": "https://gph.fxx.mybluehost.me/.website_fa381f8e",
          "params": {
            "per_page": 3,
          },
          "api": "https://gph.fxx.mybluehost.me/.website_fa381f8e/wp-json", 
          "postTypes": [
            {
              type: "horse_card",
              endpoint: "horse_card",
              archive: "/horse_cards_cat"
            }
          ],
          taxonomies: [
            {
              taxonomy: "horse_cards_cat",
              endpoint: "horse_cards_cat",
              postTypeEndpoint: "horse_card"
            }
          ]
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
