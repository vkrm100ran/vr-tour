var APP_DATA = {
  "scenes": [
    {
      "id": "0-computer-lab",
      "name": "computer lab",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3556579575267786,
          "pitch": 0.5014802926362396,
          "rotation": 0.7853981633974483,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-coridor",
      "name": "coridor",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.02704773622934,
        "pitch": -0.04401046365810579,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.0931020492612404,
          "pitch": 0.3367213041612125,
          "rotation": 5.497787143782138,
          "target": "3-indoor-games-class"
        },
        {
          "yaw": 0.6879335272957494,
          "pitch": 0.1845315072495204,
          "rotation": 0.7853981633974483,
          "target": "5-library"
        },
        {
          "yaw": -0.12570341741087177,
          "pitch": 0.16838570033203482,
          "rotation": 5.497787143782138,
          "target": "0-computer-lab"
        },
        {
          "yaw": 0.9587433753759722,
          "pitch": 0.24977466850144125,
          "rotation": 6.283185307179586,
          "target": "11-science-lab"
        },
        {
          "yaw": 2.861796328909999,
          "pitch": 0.17856546505371895,
          "rotation": 5.497787143782138,
          "target": "6-playground"
        },
        {
          "yaw": -2.8858656713667266,
          "pitch": 0.17160742920626326,
          "rotation": 0.7853981633974483,
          "target": "12-vr-class"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-garden",
      "name": "front garden",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12158596538681721,
          "pitch": 0.4063680127931253,
          "rotation": 0,
          "target": "8-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-indoor-games-class",
      "name": "indoor games class",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5203535314888956,
          "pitch": 0.26239044520038135,
          "rotation": 11.780972450961727,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-inside-gate",
      "name": "inside gate",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.562487780813182,
          "pitch": 0.24751447972897367,
          "rotation": 0.7853981633974483,
          "target": "2-front-garden"
        },
        {
          "yaw": 1.8270682527825057,
          "pitch": 0.23563698808981037,
          "rotation": 0.7853981633974483,
          "target": "6-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-library",
      "name": "library",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3764426450435714,
          "pitch": 0.3591611002067516,
          "rotation": 0,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-playground",
      "name": "playground",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5329773983046913,
          "pitch": 0.2562001305520827,
          "rotation": 18.06415775814132,
          "target": "9-road-view"
        },
        {
          "yaw": -1.3242568979134859,
          "pitch": 0.22220271892189913,
          "rotation": 0,
          "target": "8-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-principle-office",
      "name": "principle office",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1618252723267766,
          "pitch": 0.717119758914496,
          "rotation": 0,
          "target": "8-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-reception",
      "name": "reception",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1094927153733138,
          "pitch": 0.2161839315608063,
          "rotation": 0.7853981633974483,
          "target": "7-principle-office"
        },
        {
          "yaw": 0.9371331105361822,
          "pitch": 0.1982718273784947,
          "rotation": 5.497787143782138,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-road-view",
      "name": "road view",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.84502368240528,
          "pitch": 0.18076659578466447,
          "rotation": 6.283185307179586,
          "target": "4-inside-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-robotics-lab",
      "name": "robotics lab",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-science-lab",
      "name": "science lab",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8398114073507337,
          "pitch": 0.3535961791996769,
          "rotation": 0,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-vr-class",
      "name": "vr class",
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
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8756695348106938,
          "pitch": 0.5305716984727518,
          "rotation": 0,
          "target": "1-coridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "vector tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
