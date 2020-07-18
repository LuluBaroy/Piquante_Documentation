define({ "api": [
  {
    "type": "get",
    "url": "/api/sauces/:id",
    "title": "Read one",
    "name": "ReadOne",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sauce",
            "description": "<p>JSON containing sauce informations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n \"usersLiked\":[],\n \"usersDisliked\":[],\n \"_id\":\"5f13520d1917be88d87faa0c\",\n \"name\":\"Harissa\",\n \"manufacturer\":\"Heinz\",\n \"description\":\"13\",\n \"mainPepper\":\"no idea\",\n \"heat\":3,\n \"userId\":\"5f1352021917be88d87faa0b\",\n \"likes\":0,\n \"dislikes\":0,\n \"imageUrl\":\"http://localhost:3000/images/2603250782.jpg\",\n \"__v\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  404 Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "post",
    "url": "/api/sauces",
    "title": "Create",
    "name": "create",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sauce name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Sauce Manufacturer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Sauce description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainPepper",
            "description": "<p>Sauce main pepper</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Sauce image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "heat",
            "description": "<p>Sauce heat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message for new sauce creating</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 201 Created\n{\n \"message\":\"Nouvelle Sauce enregistrée !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  400 Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "delete",
    "url": "/api/sauces/:id",
    "title": "Delete",
    "name": "delete",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message Sauce deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\nmessage: 'Sauce supprimée !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  400 Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "post",
    "url": "/api/sauces/:id/like",
    "title": "Like/Dislike",
    "name": "like",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Like or Dislike success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n'message': 'Like ajouté pour cette sauce !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  400 Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "get",
    "url": "/api/sauces",
    "title": "Read all",
    "name": "readAll",
    "group": "Sauces",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sauces",
            "description": "<p>JSON containing all sauces</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n\n[\n    {\n        \"usersLiked\": [],\n        \"usersDisliked\": [\n            \"5f1352021917be88d87faa0b\"\n        ],\n        \"_id\": \"5f135b41f186be8dc4c5fa7f\",\n        \"name\": \"Harissa\",\n        \"manufacturer\": \"Heinz\",\n        \"description\": \"123\",\n        \"mainPepper\": \"no idea\",\n        \"heat\": 3,\n        \"userId\": \"5f1352021917be88d87faa0b\",\n        \"likes\": 0,\n        \"dislikes\": 1,\n        \"imageUrl\": \"http://localhost:3000/images/3982395801.jpg\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  400 Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "put",
    "url": "/api/sauces/:id",
    "title": "Update",
    "name": "update",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message Sauce modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\nmessage: 'Sauce modifiée !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>HTTP1.1/  400 Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Log in",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(min 8 chars)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId generated by mongoose</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token generated by JSONWebToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n \"userId\":\"5f1233fbffe8d47d105b1463\",\n \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjEyMzNmYmZmZThkNDdkMTA1YjE0NjMiLCJpYXQiOjE1OTUwNDAwMTUsImV4cCI6MTU5NTEyNjQxNX0.IBIGV-LNB8gp9gfT4HlJgUaRbvVOkiJTgvyvosAKiIk\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP1.1/  401 Unauthorized\n{\n \"error\": \"Mot de passe incorrect !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "Sign up",
    "name": "signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>'s email (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of new user creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 201 Created\n{\n \"message\": \"Utilisateur créé !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP1.1/  422 Unprocessable Entity\n{\n \"errors\":\n [\n  {\n\t\"value\": \"12345\",\n\t\"msg\": \"Email et / ou mot de passe incorrect. Merci de renseigner un mail valide et / ou un mot de passe d'au moins 8 caractères\",\n\t\"param\": \"password\",\n\t\"location\": \"body\"\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/lucie/OneDrive/Bureau/So_Pekocko_Back/controllers/users.js",
    "groupTitle": "User"
  }
] });