var APP_DATA = {
  "scenes": [
    {
      "id": "0-lift-lobby",
      "name": "LIFT LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05976337598985637,
          "pitch": -0.007858721771210497,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47797612728222205,
          "pitch": 0.0516845247433082,
          "rotation": 1.5707963267948966,
          "target": "0-lift-lobby"
        },
        {
          "yaw": -0.5530006635522788,
          "pitch": 0.02143517901033043,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        },
        {
          "yaw": 1.6048597624935637,
          "pitch": 0.03940934537148166,
          "rotation": 0,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 1.8922933948737386,
          "pitch": 0.033976603660459403,
          "rotation": 1.5707963267948966,
          "target": "9-guest-room-1"
        },
        {
          "yaw": 2.0392318593025305,
          "pitch": 0.04671375640575626,
          "rotation": 1.5707963267948966,
          "target": "10-guest-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6720716140564935,
          "pitch": -0.03654123997067771,
          "rotation": 4.71238898038469,
          "target": "3-open-work-space"
        },
        {
          "yaw": 0.8743470891477294,
          "pitch": -0.0080465383784869,
          "rotation": 1.5707963267948966,
          "target": "4-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-open-work-space",
      "name": "OPEN WORK SPACE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5886675926318361,
          "pitch": -0.014404168660838934,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.048773647367202244,
          "pitch": -0.018870398032621694,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": 0.6133006230910176,
          "pitch": 0.012875572200300667,
          "rotation": 1.5707963267948966,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-outdoor",
      "name": "OUTDOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.19125050186652,
          "pitch": 0.058705766825879024,
          "rotation": 1.5707963267948966,
          "target": "4-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6289201826742588,
          "pitch": -0.07878215830318247,
          "rotation": 4.71238898038469,
          "target": "4-dining"
        },
        {
          "yaw": 1.5225565163432533,
          "pitch": 0.013349386018557396,
          "rotation": 4.71238898038469,
          "target": "11-guest-room-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.599225537966058,
          "pitch": -0.021706065158074495,
          "rotation": 0,
          "target": "1-foyer"
        },
        {
          "yaw": 1.4176811377958334,
          "pitch": -0.01803320464120617,
          "rotation": 4.71238898038469,
          "target": "12-master-bathroom"
        },
        {
          "yaw": 1.762081302956295,
          "pitch": -0.015997387609672842,
          "rotation": 1.5707963267948966,
          "target": "8-walkin-wardrobe"
        },
        {
          "yaw": -3.006994898858542,
          "pitch": -0.05896711076123751,
          "rotation": 0,
          "target": "8-walkin-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-walkin-wardrobe",
      "name": "WALKIN WARDROBE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7603210259387918,
          "pitch": -0.00018655247418131182,
          "rotation": 4.71238898038469,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 1.7114681729256862,
          "pitch": 0.024275138420840392,
          "rotation": 1.5707963267948966,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-guest-room-1",
      "name": "GUEST ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6285601160140644,
          "pitch": 0.021718209015109124,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-guest-room-2",
      "name": "GUEST ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7382276725279873,
          "pitch": -0.026419538260135766,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-guest-room-3",
      "name": "GUEST ROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.546133956517445,
          "pitch": 0.008880399449150644,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bathroom",
      "name": "MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5447242293491508,
          "pitch": 0.00980959152495764,
          "rotation": 0,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
