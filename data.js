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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.09263503688321073,
          "pitch": -0.02351328465310587,
          "rotation": 0,
          "target": "1-entrance-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-foyer",
      "name": "ENTRANCE FOYER",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.4890843886895375,
          "pitch": 0.022236236825742495,
          "rotation": 1.5707963267948966,
          "target": "0-lift-lobby"
        },
        {
          "yaw": -0.556414160285092,
          "pitch": 0.017380221331414702,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        },
        {
          "yaw": 1.6025771221490626,
          "pitch": 0.005393993078872228,
          "rotation": 0,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 1.8939613873157048,
          "pitch": 0.007804162910172607,
          "rotation": 1.5707963267948966,
          "target": "10-guest-room-1"
        },
        {
          "yaw": 2.0320748103961703,
          "pitch": 0.004812965615696996,
          "rotation": 1.5707963267948966,
          "target": "11-guest-room-2"
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.7503029988793202,
          "pitch": 0.02303178252241267,
          "rotation": 1.5707963267948966,
          "target": "4-dining-area"
        },
        {
          "yaw": -0.558682119991671,
          "pitch": 0.017355695179698927,
          "rotation": 4.71238898038469,
          "target": "3-open-working-space"
        },
        {
          "yaw": -3.049002531604458,
          "pitch": 0.11320439631973755,
          "rotation": 0,
          "target": "1-entrance-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-open-working-space",
      "name": "OPEN WORKING SPACE",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.5994799947857317,
          "pitch": 0.07138012481724232,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-area",
      "name": "DINING AREA",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.49981934715585474,
          "pitch": -0.03577232819913867,
          "rotation": 1.5707963267948966,
          "target": "5-kitchen"
        },
        {
          "yaw": -0.0472026913269854,
          "pitch": -0.037730258498886116,
          "rotation": 0,
          "target": "6-swimming-pool-area"
        },
        {
          "yaw": 2.4055715691141124,
          "pitch": -0.000488918380966652,
          "rotation": 10.995574287564278,
          "target": "1-entrance-foyer"
        },
        {
          "yaw": 3.050236160706554,
          "pitch": 0.001713814927835955,
          "rotation": 0,
          "target": "3-open-working-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.6470363504638694,
          "pitch": -0.0850335195787153,
          "rotation": 4.71238898038469,
          "target": "4-dining-area"
        },
        {
          "yaw": 1.5276794157147977,
          "pitch": 0.0149441861684938,
          "rotation": 4.71238898038469,
          "target": "12-guest-room-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-swimming-pool-area",
      "name": "SWIMMING POOL AREA",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.1852433128366489,
          "pitch": 0.03770815453958676,
          "rotation": 1.5707963267948966,
          "target": "4-dining-area"
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.606374165348588,
          "pitch": -0.018302467966956115,
          "rotation": 0,
          "target": "1-entrance-foyer"
        },
        {
          "yaw": 1.7488788224637712,
          "pitch": -0.013266570748017514,
          "rotation": 1.5707963267948966,
          "target": "8-walk-in-wardrobe"
        },
        {
          "yaw": 1.4074296779011952,
          "pitch": -0.008974710444935141,
          "rotation": 4.71238898038469,
          "target": "9-master-bathroom"
        },
        {
          "yaw": -3.0076111729234274,
          "pitch": -0.15519942840172263,
          "rotation": 0,
          "target": "8-walk-in-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-walk-in-wardrobe",
      "name": "WALK-IN WARDROBE",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.7731657030214034,
          "pitch": -0.007855525462643342,
          "rotation": 4.71238898038469,
          "target": "7-master-bedroom"
        },
        {
          "yaw": 1.7179348135433763,
          "pitch": -0.011395422005678668,
          "rotation": 1.5707963267948966,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bathroom",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5507474959035843,
          "pitch": -0.010653686715569322,
          "rotation": 0,
          "target": "7-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-guest-room-1",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.6313579707649666,
          "pitch": 0.02961947919834529,
          "rotation": 0,
          "target": "1-entrance-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-guest-room-2",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.746781590837462,
          "pitch": -0.036672733933805546,
          "rotation": 0,
          "target": "1-entrance-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-guest-room-3",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.5377995196352057,
          "pitch": 0.025487244366063422,
          "rotation": 0,
          "target": "5-kitchen"
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
