const sets = [
// Empty sets
    // Promos
    {
        "id": "P",
        "name": "Promos",
        "release": null,
        "total": 90,
        "url": null,
        "add_zero": 3,
        "info_url": null,
        "color": {
            "red": [1,2,9,10,24,29,35,41,49,50,58,59,62,65,66,72,79,88],
            "blue": [3,4,7,8,11,12,22,30,36,42,47,48,51,52,61,64,67,73,86,89],
            "yellow": [5,6,23,28,31,37,43,53,54,68,74,81,84,87],
            "green": [21,25,32,38,44,"55-57",60,63,69,75,82,83,90],
            "black": ["13-16",26,33,39,45,70,78],
            "black-red": [76],
            "purple": ["17-20",27,34,40,46,71,77,80,85],
        }
    },
    // Booster New Evolution [BT1]
    {
        "id": "BT1",
        "name": "Booster New Evolution [BT1]",
        "release": null,
        "total": 115,
        "url": null,
        "add_zero": 3,
        "info_url": null,
        "color": {
            "red": [1,2,"9-26",85,"90-95",114],
            "blue": [3,4,"27-44",86,"96-101",115],
            "yellow": [5,6,"45-63",87,"102-107"],
            "green": [7,8,"64-83",88,89,"108-113"],
            "white": [84]
        }
    },
    // Booster Ultimate Power [BT2]
    {
        "id": "BT2",
        "name": "Booster Ultimate Power [BT2]",
        "release": null,
        "total": 112,
        "url": null,
        "add_zero": 3,
        "info_url": null,
        "color": {
            "red": [1,"9-20",84,"91-93"],
            "blue": [2,"21-32",85,86,"94-96"],
            "yellow": [3,"33-41",87,"97-99"],
            "green": [4,"42-51",88,"100-102"],
            "black": [5,6,"52-66",89,"103-106",112],
            "purple": [7,8,"67-81",90,"107-111"],
            "white": [82,83]
        }
    },
    // Booster Union Impact [BT3]
    {
        "id": "BT3",
        "name": "Booster Union Impact [BT3]",
        "release": null,
        "total": 112,
        "url": null,
        "add_zero": 3,
        "info_url": null,
        "color": {
            "red": [1,"7-19",97,98],
            "blue": [2,"20-31",93,99,100],
            "yellow": [3,"32-43",101,102],
            "green": [4,"44-58",94,103,104,111],
            "black": [5,"59-75",95,"105-107"],
            "purple": [6,"76-92",96,"108-110"],
            "white": [112]
        }
    },

// January 29th, 2021
    // Starter Deck GAIA RED [ST-1] --- st1
    {
        "id": "ST1",
        "slug": "st1", 
        "name": "Starter Deck GAIA RED [ST-1]",
        "release": "January 29th, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-1.php",
        "color": "red",
    },
    // Starter Deck COCYTUS BLUE [ST-2] --- st2
    {
        "id": "ST2",
        "slug": "st2", 
        "name": "Starter Deck COCYTUS BLUE [ST-2]",
        "release": "January 29th, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-2.php",
        "color": "blue",
    },
    // Starter Deck HEAVEN'S YELLOW [ST-3] --- st3
    {
        "id": "ST3",
        "slug": "st3", 
        "name": "Starter Deck HEAVEN'S YELLOW [ST-3]",
        "release": "January 29th, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-3.php",
        "color": "yellow",
    },
    // Tamer Party Vol.1 --- tp1
    {
        "id": null,
        "slug": "tp1", 
        "name": "Tamer Party Vol.1",
        "release": "January 29th, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-07": "P1",
            "ST2-06": "P1",
            "ST3-05": "P1",
        },
        "info_url": "https://digimoncardgame.fandom.com/wiki/Tamer_Party"
    },

// February 12, 2021
    // Release Special Booster Ver.1.0 [BT01-03] --- sbt10
    {
        "id": null,
        "slug": "sbt10",
        "name": "Release Special Booster Ver.1.0 [BT01-03]",
        "release": "February 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "BT1-001": "",
            "BT1-002": "",
            "BT1-003": "",
            "BT1-004": "",
            "BT1-005": "",
            "BT1-006": "",
            "BT1-007": "",
            "BT1-008": "",
            "BT1-009": "",
            "BT1-010": "",
            "BT1-011": "",
            "BT1-012": "",
            "BT1-013": "",
            "BT1-014": "",
            "BT1-015": "",
            "BT1-016": "",
            "BT1-017": "",
            "BT1-018": "",
            "BT1-019": "",
            "BT1-020": "",
            "BT1-021": "",
            "BT1-022": "",
            "BT1-023": "",
            "BT1-024": "",
            "BT1-025": "",
            "BT1-026": "",
            "BT1-027": "",
            "BT1-028": "",
            "BT1-029": "",
            "BT1-030": "",
            "BT1-031": "",
            "BT1-032": "",
            "BT1-033": "",
            "BT1-034": "",
            "BT1-035": "",
            "BT1-036": "",
            "BT1-037": "",
            "BT1-038": "",
            "BT1-039": "",
            "BT1-040": "",
            "BT1-041": "",
            "BT1-042": "",
            "BT1-043": "",
            "BT1-044": "",
            "BT1-045": "",
            "BT1-046": "",
            "BT1-047": "",
            "BT1-048": "",
            "BT1-049": "",
            "BT1-050": "",
            "BT1-051": "",
            "BT1-052": "",
            "BT1-053": "",
            "BT1-054": "",
            "BT1-055": "",
            "BT1-056": "",
            "BT1-057": "",
            "BT1-058": "",
            "BT1-059": "",
            "BT1-060": "",
            "BT1-061": "",
            "BT1-062": "",
            "BT1-063": "",
            "BT1-064": "",
            "BT1-065": "",
            "BT1-066": "",
            "BT1-067": "",
            "BT1-068": "",
            "BT1-069": "",
            "BT1-070": "",
            "BT1-071": "",
            "BT1-072": "",
            "BT1-073": "",
            "BT1-074": "",
            "BT1-075": "",
            "BT1-076": "",
            "BT1-077": "",
            "BT1-078": "",
            "BT1-079": "",
            "BT1-080": "",
            "BT1-081": "",
            "BT1-082": "",
            "BT1-084": "",
            "BT1-085": "",
            "BT1-086": "",
            "BT1-087": "",
            "BT1-088": "",
            "BT1-089": "",
            "BT1-090": "",
            "BT1-092": "",
            "BT1-093": "",
            "BT1-094": "",
            "BT1-096": "",
            "BT1-097": "",
            "BT1-098": "",
            "BT1-099": "",
            "BT1-102": "",
            "BT1-104": "",
            "BT1-105": "",
            "BT1-106": "",
            "BT1-108": "",
            "BT1-109": "",
            "BT1-110": "",
            "BT1-111": "",
            "BT1-112": "",
            "BT1-113": "",
            "BT1-114": "",
            "BT1-115": "",
            "BT2-005": "",
            "BT2-006": "",
            "BT2-007": "",
            "BT2-008": "",
            "BT2-009": "",
            "BT2-013": "",
            "BT2-017": "",
            "BT2-018": "",
            "BT2-020": "",
            "BT2-030": "",
            "BT2-039": "",
            "BT2-043": "",
            "BT2-044": "",
            "BT2-046": "",
            "BT2-048": "",
            "BT2-049": "",
            "BT2-051": "",
            "BT2-052": "",
            "BT2-053": "",
            "BT2-054": "",
            "BT2-055": "",
            "BT2-056": "",
            "BT2-057": "",
            "BT2-058": "",
            "BT2-059": "",
            "BT2-060": "",
            "BT2-061": "",
            "BT2-062": "",
            "BT2-063": "",
            "BT2-064": "",
            "BT2-065": "",
            "BT2-066": "",
            "BT2-067": "",
            "BT2-068": "",
            "BT2-069": "",
            "BT2-070": "",
            "BT2-071": "",
            "BT2-072": "",
            "BT2-073": "",
            "BT2-074": "",
            "BT2-075": "",
            "BT2-076": "",
            "BT2-077": "",
            "BT2-078": "",
            "BT2-079": "",
            "BT2-080": "",
            "BT2-081": "",
            "BT2-082": "",
            "BT2-083": "",
            "BT2-084": "",
            "BT2-085": "",
            "BT2-087": "",
            "BT2-088": "",
            "BT2-089": "",
            "BT2-090": "",
            "BT2-092": "",
            "BT2-093": "",
            "BT2-095": "",
            "BT2-102": "",
            "BT2-103": "",
            "BT2-104": "",
            "BT2-105": "",
            "BT2-106": "",
            "BT2-107": "",
            "BT2-108": "",
            "BT2-109": "",
            "BT2-110": "",
            "BT2-111": "",
            "BT3-030": "",
            "BT3-043": "",
            "BT3-061": "",
            "BT3-074": "",
            "BT3-079": "",
            "BT3-081": "",
            "BT3-084": "",
            "BT3-089": "",
            "BT3-091": "",
            "BT3-107": "",
            "BT3-109": "",
        },
        "pack": [
            "https://static.wikia.nocookie.net/digimoncardgame/images/0/00/Special_Release_Booster_Pack_1.0-EN.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/4/4e/Special_Release_Booster_Pack_1.0-EN.01.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/7/7f/Special_Release_Booster_Pack_1.0-EN.02.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/a/aa/Special_Release_Booster_Pack_1.0-EN.03.png/",
        ],
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e0/Playsheet-BT-1.0.jpg/",
        "info_url": null
    },
    // Release Special Booster Ver.1.0 [BT01-03] - Alternatives --- sbt10_alts
    {
        "id": null,
        "slug": "sbt10_alts",
        "name": "Release Special Booster Ver.1.0 [BT01-03] - Alternatives",
        "release": "February 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-025": "P1",
            "BT1-044": "P1",
            "BT1-060": "P1",
            "BT1-082": "P1",
            "BT1-084": "P1",
            "BT1-110": "P1",
            "BT1-114": "P1",
            "BT1-115": "P1",
            "BT2-020": "P1",
            "BT2-065": "P1",
            "BT2-080": "P1",
            "BT2-081": "P1",
            "BT2-082": "P1",
            "BT2-111": "P1",
            "BT3-030": "P1",
            "BT3-043": "P1",
            "BT3-091": "P1",
        },
    },
    // Release Special Booster Ver.1.0 [BT01-03] - Box Topper --- sbt10_boxtopper
    {
        "id": null,
        "slug": "sbt10_boxtopper",
        "name": "Release Special Booster Ver.1.0 [BT01-03] - Box Topper",
        "release": "February 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-085": "P1",
            "BT1-086": "P1",
            "BT1-087": "P1",
            "BT1-088": "P1",
            "BT1-089": "P1",
            "BT2-084": "P1",
            "BT2-085": "P1",
            "BT2-087": "P1",
            "BT2-089": "P1",
            "BT2-090": "P1",
        },
    },
    // Special Box Promotion Pack --- sbp
    {
        "id": null,
        "slug": "sbp",
        "name": "Special Box Promotion Pack",
        "release": "February 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-007": "",
            "P-008": "",
            "P-009": "",
            "P-010": "",
            "P-011": "",
            "P-012": ""
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/8/80/Special_Box_Promotion_Pack.png",
    },
    // Dash Pack Ver. 1.0 --- dp10
    {
        "id": null,
        "slug": "dp10",
        "name": "Dash Pack Ver. 1.0",
        "release": "February 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-010": "P1",
            "BT1-029": "P1",
            "BT2-030": "P1",
            "BT2-049": "P1",
            "BT2-066": "P1"
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/28/Dash_Pack_Ver_1.0-EN.png/",
    },

// February, 2021
    // Tamer's Evolution Box [PB-01] --- pb01
    {
        "id": null,
        "slug": "pb01",
        "name": "Tamer's Evolution Box [PB-01]",
        "release": "February, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-13": "P1",
            "ST1-16": "P1",
            "ST2-13": "P1",
            "ST2-16": "P1",
            "ST3-13": "P1",
            "ST3-14": "P1",
            "BT1-108": "P1",
            "BT1-110": "P2",
        },
        "info_url": "https://world.digimoncard.com/products/goods/evolution-box.php"

    },
    // Official Tournament Pack Vol.1 --- otp1
    {
        "id": null,
        "slug": "otp1",
        "name": "Official Tournament Pack Vol.1",
        "release": "February, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-013": "",
            "P-014": "",
            "P-015": "",
            "P-016": "",
            "P-017": "",
            "P-018": "",
            "P-019": "",
            "P-020": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1a/Official_Tournament_Pack_Vol.1.png/",
    },
    // Tamer Battle Pack 1 --- tbp1
    {
        "id": null,
        "slug": "tbp1",
        "name": "Tamer Battle Pack 1",
        "release": "February, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-09": "P1",
            "ST2-09": "P1",
            "ST3-09": "P1",
            "BT1-076": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/5e/Tamer_Battle_Pack_1_EN.png/"
    },

// March 2021    
    // Promotion Pack Ver.0.0 --- pp0
    {
        "id": null,
        "slug": "pp0",
        "name": "Promotion Pack Ver.0.0",
        "release": "March 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-001": "",
            "P-002": "",
            "P-003": "",
            "P-004": "",
            "P-005": "",
            "P-006": ""
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/7/73/Promotion_Pack_Ver_0.0-EN.png/",
        "info_url": "https://world.digimoncard.com/event/online_event_mar2021/"
    },

// March 12, 2021
    // Release Special Booster Ver.1.5 [BT01-03] --- sbt15
    {
        "id": null,
        "slug": "sbt15",
        "name": "Release Special Booster Ver.1.5 [BT01-03]",
        "release": "March 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "BT1-083": "",
            "BT1-091": "",
            "BT1-095": "",
            "BT1-100": "",
            "BT1-101": "",
            "BT1-103": "",
            "BT1-107": "",
            "BT2-001": "",
            "BT2-002": "",
            "BT2-003": "",
            "BT2-004": "",
            "BT2-010": "",
            "BT2-011": "",
            "BT2-012": "",
            "BT2-014": "",
            "BT2-015": "",
            "BT2-016": "",
            "BT2-019": "",
            "BT2-021": "",
            "BT2-022": "",
            "BT2-023": "",
            "BT2-024": "",
            "BT2-025": "",
            "BT2-026": "",
            "BT2-027": "",
            "BT2-028": "",
            "BT2-029": "",
            "BT2-031": "",
            "BT2-032": "",
            "BT2-033": "",
            "BT2-034": "",
            "BT2-035": "",
            "BT2-036": "",
            "BT2-037": "",
            "BT2-038": "",
            "BT2-040": "",
            "BT2-041": "",
            "BT2-042": "",
            "BT2-045": "",
            "BT2-047": "",
            "BT2-050": "",
            "BT2-086": "",
            "BT2-091": "",
            "BT2-094": "",
            "BT2-096": "",
            "BT2-097": "",
            "BT2-098": "",
            "BT2-099": "",
            "BT2-100": "",
            "BT2-101": "",
            "BT2-112": "",
            "BT3-001": "",
            "BT3-002": "",
            "BT3-003": "",
            "BT3-004": "",
            "BT3-005": "",
            "BT3-006": "",
            "BT3-007": "",
            "BT3-008": "",
            "BT3-009": "",
            "BT3-010": "",
            "BT3-011": "",
            "BT3-012": "",
            "BT3-013": "",
            "BT3-014": "",
            "BT3-015": "",
            "BT3-016": "",
            "BT3-017": "",
            "BT3-018": "",
            "BT3-019": "",
            "BT3-020": "",
            "BT3-021": "",
            "BT3-022": "",
            "BT3-023": "",
            "BT3-024": "",
            "BT3-025": "",
            "BT3-026": "",
            "BT3-027": "",
            "BT3-028": "",
            "BT3-029": "",
            "BT3-031": "",
            "BT3-032": "",
            "BT3-033": "",
            "BT3-034": "",
            "BT3-035": "",
            "BT3-036": "",
            "BT3-037": "",
            "BT3-038": "",
            "BT3-039": "",
            "BT3-040": "",
            "BT3-041": "",
            "BT3-042": "",
            "BT3-044": "",
            "BT3-045": "",
            "BT3-046": "",
            "BT3-047": "",
            "BT3-048": "",
            "BT3-049": "",
            "BT3-050": "",
            "BT3-051": "",
            "BT3-052": "",
            "BT3-053": "",
            "BT3-054": "",
            "BT3-055": "",
            "BT3-056": "",
            "BT3-057": "",
            "BT3-058": "",
            "BT3-059": "",
            "BT3-060": "",
            "BT3-062": "",
            "BT3-063": "",
            "BT3-064": "",
            "BT3-065": "",
            "BT3-066": "",
            "BT3-067": "",
            "BT3-068": "",
            "BT3-069": "",
            "BT3-070": "",
            "BT3-071": "",
            "BT3-072": "",
            "BT3-073": "",
            "BT3-075": "",
            "BT3-076": "",
            "BT3-077": "",
            "BT3-078": "",
            "BT3-080": "",
            "BT3-082": "",
            "BT3-083": "",
            "BT3-085": "",
            "BT3-086": "",
            "BT3-087": "",
            "BT3-088": "",
            "BT3-090": "",
            "BT3-092": "",
            "BT3-093": "",
            "BT3-094": "",
            "BT3-095": "",
            "BT3-096": "",
            "BT3-097": "",
            "BT3-098": "",
            "BT3-099": "",
            "BT3-100": "",
            "BT3-101": "",
            "BT3-102": "",
            "BT3-103": "",
            "BT3-104": "",
            "BT3-105": "",
            "BT3-106": "",
            "BT3-108": "",
            "BT3-110": "",
            "BT3-111": "",
            "BT3-112": "",
        },
        "pack": [
            "https://static.wikia.nocookie.net/digimoncardgame/images/c/c4/Special_Release_Booster_Pack_1.5-EN.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/0/08/Special_Release_Booster_Pack_1.5-EN.01.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/3/34/Special_Release_Booster_Pack_1.5-EN.02.png/",
            "https://static.wikia.nocookie.net/digimoncardgame/images/b/b9/Special_Release_Booster_Pack_1.5-EN.03.png/",
        ],
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/6/64/Playsheet-BT-1.5.jpg/",
        "info_url": null
    },
    // Release Special Booster Ver.1.5 [BT01-03] - Alternatives --- sbt15_alts
    {
        "id": null,
        "slug": "sbt15_alts",
        "name": "Release Special Booster Ver.1.5 [BT01-03] - Alternatives",
        "release": "March 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT2-032": "P1",
            "BT2-041": "P1",
            "BT2-112": "P1",
            "BT3-019": "P1",
            "BT3-031": "P1",
            "BT3-056": "P1",
            "BT3-073": "P1",
            "BT3-075": "P1",
            "BT3-090": "P1",
            "BT3-111": "P1",
            "BT3-112": "P1",
        },
    },
    // Release Special Booster Ver.1.5 [BT01-03] - Box Topper --- sbt15_boxtopper
    {
        "id": null,
        "slug": "sbt15_boxtopper",
        "name": "Release Special Booster Ver.1.5 [BT01-03] - Box Topper",
        "release": "March 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT3-011": "P1",
            "BT3-024": "P1",
            "BT3-036": "P1",
            "BT3-049": "P1",
            "BT3-065": "P1",
            "BT3-082": "P1",
        },
    },
    // Dash Pack Ver. 1.5 --- dp15
    {
        "id": null,
        "slug": "dp15",
        "name": "Dash Pack Ver. 1.5",
        "release": "March 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-083": "P1",
            "BT1-095": "P1",
            "BT1-101": "P1",
            "BT1-107": "P1",
            "BT3-018": "P1"
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/56/Dash_Pack_Ver._1.5.png/"
    },
    // Special Release Memorial Pack! --- srmp
    {
        "id": null,
        "slug": "srmp",
        "name": "Special Release Memorial Pack!",
        "release": "March 12, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-021": "",
            "P-022": "",
            "P-023": "",
            "P-024": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c7/Special_Release_Memorial_Pack.png/"
    },

// May 28th, 2021
    // Premium Pack Set 01 [PP01] --- pp01
    {
        "id": null,
        "slug": "pp01",
        "name": "Premium Pack Set 01 [PP01]",
        "release": "May 28th, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT2-038": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/e/ee/PP01.png/",
        "info_url": "https://world.digimoncard.com/products/goods/premium_pack.php"
    },

// June 4-10, 2021
    // Great Legend (BT-04) Pre-Release Tournaments --- bt4_prerelease
    {
        "id": null,
        "slug": "bt4_prerelease",
        "name": "Great Legend (BT-04) Pre-Release Tournaments",
        "release": "June 4-10, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardIDparallel.png",
        "cards": {
            "P-028": "",
            "ST3-08": "_P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/7/74/Great_Legend_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-04/"
    },

// June 11, 2021
    // Starter Deck GIGA GREEN [ST-4] --- st4
    {
        "id": "ST4",
        "slug": "st4",
        "name": "Starter Deck GIGA GREEN [ST-4]",
        "release": "June 11, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-4.php",
        "color": "green",
    },
    // Starter Deck MACHINE BLACK [ST-5] --- st5
    {
        "id": "ST5",
        "slug": "st5",
        "name": "Starter Deck MACHINE BLACK [ST-5]",
        "release": "June 11, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-5.php",
        "color": "black",
    },
    // Starter Deck VENOMOUS VIOLET [ST-6] --- st6
    {
        "id": "ST6",
        "slug": "st6",
        "name": "Starter Deck VENOMOUS VIOLET [ST-6]",
        "release": "June 11, 2021",
        "total": 16,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-6.php",
        "color": "purple",
    },

    // Booster Great Legend [BT4] --- bt4
    {
        "id": "BT4",
        "slug": "bt4",
        "name": "Booster Great Legend [BT4]",
        "release": "June 11, 2021",
        "total": 115,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/57/BT-4-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a4/Playsheet-BT-4-EN.jpg/",
        "color": {
            "red": [1,"7-20",92,"98-100",113],
            "blue": [2,"21-35",93,"101-103",114],
            "yellow": [3,"36-49",94,"104-106",115],
            "green": [4,"50-62",95,107,108],
            "black": [5,"63-75",96,109,110],
            "purple": [6,"76-89",97,111,112],
            "white": [90,91],
        }
    },
    // Booster Great Legend [BT4] - Alternatives --- bt4_alts
    {
        "id": null,
        "slug": "bt4_alts",
        "name": "Booster Great Legend [BT4] - Alternatives",
        "release": "June 11, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT4-011": "P1",
            "BT4-017": "P1",
            "BT4-019": "P1",
            "BT4-025": "P1",
            "BT4-033": "P1",
            "BT4-035": "P1",
            "BT4-048": "P1",
            "BT4-059": "P1",
            "BT4-062": "P1",
            "BT4-075": "P1",
            "BT4-088": "P1",
            "BT4-090": "P1",
            "BT4-113": "P1",
            "BT4-114": "P1",
            "BT4-115": "P1",
        },
    },
    // Booster Great Legend [BT4] - Box Topper --- bt4_boxtopper
    {
        "id": null,
        "slug": "bt4_boxtopper",
        "name": "Booster Great Legend [BT4] - Box Topper",
        "release": "June 11, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT4-092": "P1",
            "BT4-093": "P1",
            "BT4-094": "P1",
            "BT4-095": "P1",
            "BT4-096": "P1",
            "BT4-097": "P1"
        },
    },
    // Great Dash Pack --- bt4_dash
    {
        "id": null,
        "slug": "bt4_dash",
        "name": "Great Dash Pack",
        "release": "June 11, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-025": "",
            "P-026": "",
            "P-027": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/59/Great_Dash_Pack.png/"
    },
    // Great Legend Power Up Pack --- bt4_powerup
    {
        "id": null,
        "slug": "bt4_powerup",
        "name": "Great Legend Power Up Pack",
        "release": "June 11, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-029": "",
            "P-030": "",
            "P-031": "",
            "P-032": "",
            "P-033": "",
            "P-034": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fc/Great_Legend_Power_Up_Pack.png"
    },
    // Great Legend Power Up Pack (Foil) --- bt4_powerup_foil
    {
        "id": null,
        "slug": "bt4_powerup_foil",
        "name": "Great Legend Power Up Pack (Foil)",
        "release": "June 11, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-029": "",
            "P-030": "",
            "P-031": "",
            "P-032": "",
            "P-033": "",
            "P-034": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fc/Great_Legend_Power_Up_Pack.png"
    },

// June 2021
    // Tamer Party Vol.2 --- tp2
    {
        "id": null,
        "slug": "tp2",
        "name": "Tamer Party Vol.2",
        "release": "June 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-08": "P1",
            "ST2-08": "P2",
            "BT1-079": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party/"
    },
    // Official Tournament Pack Vol.2 --- otp2
    {
        "id": null,
        "slug": "otp2",
        "name": "Official Tournament Pack Vol.2",
        "release": "June, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-038": "P1",
            "BT2-017": "P1",
            "BT2-038": "P2",
            "BT2-047": "P1",
            "ST2-08": "P1",
            "ST1-09": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/8/8a/Official_Tournament_Pack_Vol.2.png"
    },

// July 30-August 5, 2021
    // Battle of Omni (BT-05) Pre-Release Tournaments --- bt5_prerelease
    {
        "id": null,
        "slug": "bt5_prerelease",
        "name": "Battle of Omni (BT-05) Pre-Release Tournaments",
        "release": "July 30-August 5, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT2-077": "P1",
            "BT2-028": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/Battle_of_Omni_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-05/"
    },

// July 2021
    // July Evolution Cup --- evocup
    {
        "id": null,
        "slug": "evocup",
        "name": "July Evolution Cup",
        "release": "July 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-03": "P1",
            "BT1-084": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/evolution_cup_july2021/"
    },

// August 6, 2021
    // Booster Battle of Omni [BT5] --- bt5
    {
        "id": "BT5",
        "slug": "bt5",
        "name": "Booster Battle of Omni [BT5]",
        "release": "August 6, 2021",
        "total": 112,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/b/bd/BT-5-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/7/7d/Playsheet-BT-5-EN.jpg/",
        "color": {
            "red": [1,"7-19",94,95],
            "blue": [2,"20-32",88,96,97],
            "yellow": [3,"33-45",98,99],
            "green": [4,"46-58",89,"100-102"],
            "black": [5,"59-70",90,"103-105"],
            "purple": [6,"71-83","106-108"],
            "white": ["84-87","91-93","109-112"],
        }
    },
    // Booster Battle of Omni [BT5] - Alternatives --- bt5_alts
    {
        "id": null,
        "slug": "bt5_alts",
        "name": "Booster Battle of Omni [BT5] - Alternatives",
        "release": "August 6, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT5-019": "P1",
            "BT5-081": ["P1", "P2"],
            "BT5-085": "P1",
            "BT5-086": ["P1", "P2", "P3", "P4"],
            "BT5-087": ["P1", "P2"],
            "BT5-111": "P1",
            "BT5-112": "P1",
        },
    },
    // Booster Battle of Omni [BT5] - Box Topper --- bt5_boxtopper
    {
        "id": null,
        "slug": "bt5_boxtopper",
        "name": "Booster Battle of Omni [BT5] - Box Topper",
        "release": "August 6, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT5-088": "P1",
            "BT5-089": "P1",
            "BT5-090": "P1",
            "BT5-091": "P1",
            "BT5-092": "P1",
            "BT5-093": "P1",
        },
    },
    // June Premier TO events --- premierto
    {
        "id": null,
        "slug": "premierto",
        "name": "June Premier TO events",
        "release": "June 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT5-001": "P1",
            "BT5-010": "P1",
            "ST1-11": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/online_event_june2021/"
    },
    // Event Pack 1 --- eventpack1
    {
        "id": null,
        "slug": "eventpack1",
        "name": "Event Pack 1",
        "release": "July 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-02": "P1",
            "ST1-06": "P1",
            "ST1-11": "P2",
            "ST2-02": "P1",
            "ST2-07": "P1",
            "ST2-11": "P1",
            "ST3-02": "P1",
            "ST3-07": "P1",
            "BT1-064": "P1",
            "BT1-072": "P1",
            "BT1-077": "P1",
            "BT2-072": "P1",
            "BT3-059": "P1",
            "BT3-076": "P1",
            "BT4-005": "P1",
            "BT4-067": "P1",
            "BT4-088": "P2",
            "BT5-045": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/b/be/Evolution_Cup_Event_Pack.png/",
    },

// August 2021
    // 2021 Online Regionals Participant Set --- regional2021_0
    {
        "id": null,
        "slug": "regional2021_0",
        "name": "2021 Online Regionals Participant Set",
        "release": "August 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-03": "P2",
            "ST4-08": "P1",
            "ST6-08": "P1",
            "BT2-066": "P2",
            "BT4-090": "P2",
            "BT5-042": "P1",
            "P-008": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/online_regionals/",
    },
    // 2021 Online Regionals Finalist Set --- regional2021_1
    {
        "id": null,
        "slug": "regional2021_1",
        "name": "2021 Online Regionals Finalist Set",
        "release": "August 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-03": "P3",
            "ST4-08": "P2",
            "ST6-08": "P2",
            "BT2-066": "P3",
            "BT4-090": "P3",
            "BT5-042": "P2",
            "P-008": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/online_regionals/",
    },
    // 2021 Online Regionals Champion Set --- regional2021_2
    {
        "id": null,
        "slug": "regional2021_2",
        "name": "2021 Online Regionals Champion Set",
        "release": "August 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-03": "P4",
            "ST4-08": "P3",
            "ST6-08": "P3",
            "BT2-066": "P4",
            "BT4-090": "P4",
            "BT5-042": "P3",
            "P-008": "P3",
        },
        "info_url": "https://world.digimoncard.com/event/online_regionals/",
    },

// September 13 – October 17, 2021
    // Store Championship Participant Pack --- storechampion_0
    {
        "id": null,
        "slug": "storechampion_0",
        "name": "Store Championship Participant Pack",
        "release": "September 13 – October 17, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST3-04": "P1",
            "BT1-029": "P2",
            "BT1-066": "P1",
            "BT2-020": "P2",
            "BT2-052": "P1",
            "BT2-067": "P1",
            "BT5-084": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship/"
    },
    // Store Champion Card Set --- storechampion_1
    {
        "id": null,
        "slug": "storechampion_1",
        "name": "Store Champion Card Set",
        "release": "September 13 – October 17, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST3-04": "P2",
            "BT1-029": "P3",
            "BT1-066": "P2",
            "BT2-020": "P3",
            "BT2-052": "P2",
            "BT2-067": "P2",
            "BT5-084": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship/"
    },

// September 2021
    // Tamer Party Vol.3 --- tp3
    {
        "id": null,
        "slug": "tp3",
        "name": "Tamer Party Vol.3",
        "release": "September 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-015": "P1",
            "BT1-045": "P1",
            "BT2-053": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_03/"
    },

// September-October 2021
    // DC-1 Grand Prix --- dc1
    {
        "id": null,
        "slug": "dc1",
        "name": "DC-1 Grand Prix",
        "release": "September-October 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT2-021": "P1",
            "BT2-026": "P1",
            "BT2-028": "P2",
            "BT2-032": "P2",
            "BT2-096": "P1",
        },
    },

// October 8, 2021
    // Double Diamond (BT-06) Pre-Release Tournaments --- bt6_prerelease
    {
        "id": null,
        "slug": "bt6_prerelease",
        "name": "Double Diamond (BT-06) Pre-Release Tournaments",
        "release": "October 8, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "P-028": "P1",
            "BT2-061": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/18/Double_Diamond_Pre-Release_Promotion_Pack.png",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-06/",
    },

// October 15, 2021
    // Starter Deck GALLANTMON [ST-7] --- st7
    {
        "id": "ST7",
        "slug": "st7",
        "name": "Starter Deck GALLANTMON [ST-7]",
        "release": "October 15, 2021",
        "total": 12,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-7.php",
        "color": "red",
    },
    {
        "id": null,
        "slug": "st7",
        "name": "Starter Deck GALLANTMON [ST-7]",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-009": "P1",
            "BT1-019": "P1",
            "BT1-020": "P1",
            "ST1-16": "P2",
        },
        "info_url": "https://world.digimoncard.com/products/deck/st-7.php"
    },
    // Starter Deck ULFORCEVEEDRAMON [ST-8] --- st8
    {
        "id": "ST8",
        "slug": "st8",
        "name": "Starter Deck ULFORCEVEEDRAMON [ST-8]",
        "release": "October 15, 2021",
        "total": 12,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-8.php",
        "color": "blue",
    },
    {
        "id": null,
        "slug": "st8",
        "name": "Starter Deck ULFORCEVEEDRAMON [ST-8]",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-028": "P1",
            "BT1-037": "P1",
            "BT1-038": "P2",
            "ST2-13": "P2",
        },
        "info_url": "https://world.digimoncard.com/products/deck/st-8.php"
    },
    // First Anniversary Promo Pack --- first_anniversary
    {
        "id": null,
        "slug": "first_anniversary",
        "name": "First Anniversary Promo Pack",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-035": "",
            "P-036": "",
            "P-037": "",
            "P-038": "",
            "P-039": "",
            "P-040": "",
        },
    },

    // Booster Double Diamond [BT6] --- bt6
    {
        "id": "BT6",
        "slug": "bt6",
        "name": "Booster Double Diamond [BT6]",
        "release": "October 15, 2021",
        "total": 112,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/aa/BT-6-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d2/Playsheet-BT-6-EN.jpg/",
        "color": {
            "red": [1,"7-18",87,"93-95"],
            "blue": [2,"19-30",88,"96-98"],
            "yellow": [3,"31-44",89,"99-101"],
            "green": [4,"45-54",102,103],
            "black": [5,"55-67",90,"104-106",111],
            "purple": [6,"68-81",91,"107-109",112],
            "white": ["82-86",92,110],
        }
    },
    // Booster Double Diamond [BT6] - Alternatives --- bt6_alts
    {
        "id": null,
        "slug": "bt6_alts",
        "name": "Booster Double Diamond [BT6] - Alternatives",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT6-007": "P1",
            "BT6-016": "P1",
            "BT6-018": "P1",
            "BT6-019": "P1",
            "BT6-030": "P1",
            "BT6-033": "P1",
            "BT6-044": "P1",
            "BT6-047": "P1",
            "BT6-064": "P1",
            "BT6-067": "P1",
            "BT6-068": "P1",
            "BT6-078": "P1",
            "BT6-081": "P1",
            "BT6-082": "P1",
            "BT6-084": "P1",
            "BT6-086": "P1",
            "BT6-111": "P1",
            "BT6-112": "P1",
            "BT1-084": "P3",
        },
    },
    // Booster Double Diamond [BT6] - Box Topper --- bt6_boxtopper
    {
        "id": null,
        "slug": "bt6_boxtopper",
        "name": "Booster Double Diamond [BT6] - Box Topper",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT6-001": "P1",
            "BT6-002": "P1",
            "BT6-003": "P1",
            "BT6-004": "P1",
            "BT6-005": "P1",
            "BT6-006": "P1",
        },
    },
    // 1-Year Anniversary Promo Pack --- 1year_anniversary
    {
        "id": null,
        "slug": "1year_anniversary",
        "name": "1-Year Anniversary Promo Pack",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-10": "P1",
            "BT1-003": "P1",
            "BT2-074": "P1",
            "BT2-083": "P1",
            "BT3-021": "P1",
            "BT3-039": "P1",
            "BT3-046": "P1",
            "BT3-057": "P1",
            "BT4-016": "P1",
            "BT4-091": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/7/7c/1-Year_Anniversary_Promo_Pack-EN.png/",
    },
    // Double Diamond Dash Pack --- bt6_dash
    {
        "id": null,
        "slug": "bt6_dash",
        "name": "Double Diamond Dash Pack",
        "release": "October 15, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "cards": {
            "P-041": "",
            "P-042": "",
            "P-043": "",
            "P-044": "",
            "P-045": "",
            "P-046": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/0/09/Double_Diamond_Dash_Pack.png/"
    },

// October 2021
    // Official Tournament Pack Vol.3 --- otp3
    {
        "id": null,
        "slug": "otp3",
        "name": "Official Tournament Pack Vol.3",
        "release": "October, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "ST1-02": "P2",
            "BT2-012": "P1",
            "BT2-015": "P1",
            "BT2-084": "P2",
            "ST2-02": "P2",
            "BT2-025": "P1",
            "BT2-027": "P1",
            "BT2-085": "P2",
            "BT1-048": "P1",
            "ST3-05": "P2",
            "ST3-08": "P2",
            "BT1-087": "P2",
            "BT2-034": "P1",
            "BT3-035": "P1",
            "BT2-037": "P1",
            "BT2-087": "P2",
            "BT1-067": "P1",
            "BT1-074": "P1",
            "ST4-10": "P1",
            "BT1-089": "P2",
            "ST4-03": "P1",
            "BT1-073": "P1",
            "BT1-076": "P2",
            "BT1-088": "P2",
            "ST5-03": "P1",
            "BT2-057": "P1",
            "BT2-063": "P1",
            "BT2-089": "P2",
            "BT2-069": "P1",
            "BT2-073": "P1",
            "BT2-078": "P1",
            "BT2-090": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/d/dd/Official_Tournament_Pack_Vol.3.png/"
    },
    // Winner Pack Double Diamond --- wp3
    {
        "id": null,
        "slug": "wp3",
        "name": "Winner Pack Double Diamond",
        "release": "October, 2021",
        "url": "bandaitcgplusURL/setID/setID-cardID_parallel.png",
        "cards": {
            "BT1-057": "P1",
            "BT2-058": "P1",
            "BT3-025": "P1",
            "BT3-050": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/55/WinnerPackDoubleDiamond.png/"
    },

// December 10, 2021
    // Booster Classic Collection [EX1] --- ex1
    {
        "id": "EX1",
        "slug": "ex1",
        "name": "Booster Classic Collection [EX1]",
        "release": "December 10, 2021",
        "total": 73,
        "url": "bandaitcgplusURL/setID/EX-cardID.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/e/ea/EX-1-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/6/6d/Playsheet-EX-1-EN.jpg/",
        "color": {
            "red": ["1-10",67],
            "blue": ["11-22",68],
            "yellow": ["23-32"],
            "green": ["33-43"],
            "black": ["44-54",69,73],
            "purple": ["55-64",70],
            "white": [65,66,71,72],
        }
    },
    // Booster Classic Collection [EX1] - Alternatives --- ex1_alts
    {
        "id": null,
        "slug": "ex1_alts",
        "name": "Booster Classic Collection [EX1] - Alternatives",
        "release": "December 10, 2021",
        "url": "bandaitcgplusURL/setID/EX-cardIDp.png",
        "cards": {
            "EX1-001": "",
            "EX1-002": "",
            "EX1-004": "",
            "EX1-005": "",
            "EX1-006": "",
            "EX1-008": "",
            "EX1-009": "",
            "EX1-011": "",
            "EX1-012": "",
            "EX1-015": "",
            "EX1-017": "",
            "EX1-018": "",
            "EX1-019": "",
            "EX1-021": "",
            "EX1-022": "",
            "EX1-024": "",
            "EX1-026": "",
            "EX1-029": "",
            "EX1-030": "",
            "EX1-033": "",
            "EX1-034": "",
            "EX1-037": "",
            "EX1-039": "",
            "EX1-040": "",
            "EX1-043": "",
            "EX1-059": "",
            "EX1-063": "",
            "EX1-065": "",
            "EX1-066": "",
            "EX1-073": "",
        },
    },
    // Booster Classic Collection [EX1] - Box Topper --- ex1_boxtopper
    {
        "id": null,
        "slug": "ex1_boxtopper",
        "name": "Booster Classic Collection [EX1] - Box Topper",
        "release": "December 10, 2021",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-065": "P2",
        },
    },

// January 2022
    // 2021 Championship Finals Tamer‘s Evolution Pack --- cf_tamerevolution
    {
        "id": null,
        "slug": "cf_tamerevolution",
        "name": "2021 Championship Finals Tamer‘s Evolution Pack",
        "release": "January 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST1-13": "P2",
            "ST1-16": "P3",
            "ST2-13": "P3",
            "ST2-16": "P2",
            "ST3-13": "P2",
            "ST3-14": "P2",
            "BT1-108": "P2",
            "BT1-110": "P3",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // Event Pack 2 --- eventpack2
    {
        "id": null,
        "slug": "eventpack2",
        "name": "Event Pack 2",
        "release": "January 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST4-13": "P1",
            "BT2-004": "P1",
            "BT2-055": "P1",
            "BT2-068": "P1",
            "BT3-003": "P1",
            "BT3-004": "P1",
            "BT4-030": "P1",
            "BT4-038": "P1",
            "BT4-072": "P1",
            "BT4-078": "P1",
            "BT4-087": "P1",
            "BT5-007": "P1",
            "BT5-010": "P2",
            "BT5-020": "P1",
            "BT5-024": "P1",
            "BT5-035": "P1",
            "BT5-062": "P1",
            "BT6-016": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/53/Event_Pack_2.png/",
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // Event Pack Alt-Art Gold Stamp Set --- eventpack_goldstamp
    {
        "id": null,
        "slug": "eventpack_goldstamp",
        "name": "Event Pack Alt-Art Gold Stamp Set",
        "release": "January 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST1-11": "P3",
            "ST2-11": "P2",
            "BT1-077": "P2",
            "BT4-005": "P2",
            "BT4-088": "P3",
            "BT5-045": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // Judge Pack --- judgepack
    {
        "id": null,
        "slug": "judgepack",
        "name": "Judge Pack",
        "release": "January 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "P-016": "P1",
            "ST1-07": "P2",
            "ST4-08": "P4",
            "ST5-08": "P1",
            "ST6-08": "P4",
            "BT4-042": "P1",
            "BT4-048": "P2",
            "BT5-012": "P1",
            "BT5-026": "P1",
            "BT5-109": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // 2021 Final Championships Framed Trophy Cards - Top 16 --- fcftc_2021_top16
    {
        "id": null,
        "slug": "fcftc_2021_top16",
        "name": "2021 Final Championships Framed Trophy Cards - Top 16",
        "release": "January 2022",
        "url": null,
        "cards": {
            "ST1-07": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e2/ST1-07_P3.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // 2021 Final Championships Framed Trophy Cards - 3rd Place --- fcftc_2021_3rd
    {
        "id": null,
        "slug": "fcftc_2021_3rd",
        "name": "2021 Final Championships Framed Trophy Cards - 3rd Place",
        "release": "January 2022",
        "url": null,
        "cards": {
            "ST1-09": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f1/ST1-09_P3.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // 2021 Final Championships Framed Trophy Cards - 2nd Place --- fcftc_2021_2nd
    {
        "id": null,
        "slug": "fcftc_2021_2nd",
        "name": "2021 Final Championships Framed Trophy Cards - 2nd Place",
        "release": "January 2022",
        "url": null,
        "cards": {
            "ST1-11": "https://static.wikia.nocookie.net/digimoncardgame/images/2/28/ST1-11_P4.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },
    // 2021 Final Championships Framed Trophy Cards - 1st Place Champion --- fcftc_2021_1st
    {
        "id": null,
        "slug": "fcftc_2021_1st",
        "name": "2021 Final Championships Framed Trophy Cards - 1st Place Champion",
        "release": "January 2022",
        "url": null,
        "cards": {
            "BT6-018": "https://static.wikia.nocookie.net/digimoncardgame/images/7/7c/BT6-018_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },

// February 2022
    // Tamer Party Vol.4 --- tp4
    {
        "id": null,
        "slug": "tp4",
        "name": "Tamer Party Vol.4",
        "release": "February 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-007": "P2",
            "BT2-072": "P2",
            "BT3-067": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_04/"
    },
    // Official Tournament Pack Vol.4 --- otp4
    {
        "id": null,
        "slug": "otp4",
        "name": "Official Tournament Pack Vol.4",
        "release": "February, 2021",
        "url": "digimoncardURL/setID-cardIDparallel.png",
        "cards": {
            "BT2-077": "_P2",
            "BT3-050": "_P2",
            "BT3-088": "_P1",
            "P-057": "",
            "ST2-07": "_P2",
            "ST3-07": "_P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1a/Official_Tournament_Pack_Vol.4.png/"
    },
    // Winner Pack Next Adventure --- wp4
    {
        "id": null,
        "slug": "wp4",
        "name": "Winner Pack Next Adventure",
        "release": "February, 2021",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-013": "P1",
            "BT2-053": "P2",
            "BT3-048": "P1",
            "BT5-038": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a9/WinnerPackNextAdventure.png/"
    },

// February 25, 2022
    // Next Adventure (BT7) Pre-Release Tournaments --- bt7_prerelease
    {
        "id": null,
        "slug": "bt7_prerelease",
        "name": "Next Adventure (BT7) Pre-Release Tournaments",
        "release": "February 25, 2022",
        "url": "bandaitcgplusURL/P/e_P-cardID_d.png",
        "cards": {
            "P-047": "",
            "P-048": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a2/Next_Adventure_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-07/"
    },

// March 4, 2022
    // Booster Next Adventure [BT7] --- bt7
    {
        "id": "BT7",
        "slug": "bt7",
        "name": "Booster Next Adventure [BT7]",
        "release": "March 4, 2022",
        "total": 112,
        "url": "bandaitcgplusURL/setID/setID-cardID.png",
        "add_zero": 3,
        "override": {
            "url": "bandaitcgplusURL/setID/setID-cardIDp.png",
            "cards": {
                "BT7-017": ""
            }
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/53/BT-7-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a1/Playsheet-BT-7-EN.jpg/",
        "color": {
            "red": [1,"7-17",85,"92-94"],
            "blue": [2,"18-30",86,87,"95-97"],
            "yellow": [3,"31-42",88,"98-100"],
            "green": [4,"43-55",89,"101-103"],
            "black": [5,"56-66",90,"104-106"],
            "purple": [6,"67-79",91,"107-109",111],
            "white": ["80-84",110,112],
        }
    },
    {
        "id": null,
        "slug": "bt7",
        "name": "Booster Next Adventure [BT7]",
        "release": "March 4, 2022",
        "url": "bandaitcgplusURL/BT7/setID-cardID.png",
        "cards": {
            "P-049": "",
            "P-050": "",
            "P-051": "",
            "P-052": "",
            "P-053": "",
            "P-054": "",
            "P-055": "",
            "P-056": "",
        },
    },
    // Booster Next Adventure [BT7] - Alternatives --- bt7_alts
    {
        "id": null,
        "slug": "bt7_alts",
        "name": "Booster Next Adventure [BT7] - Alternatives",
        "release": "March 4, 2022",
        "url": "bandaitcgplusURL/setID/setID-cardIDp.png",
        "cards": {
            "BT7-008": "",
            "BT7-013": "",
            "BT7-016": "",
            "BT7-018": "",
            "BT7-019": "",
            "BT7-026": "",
            "BT7-029": "",
            "BT7-031": "",
            "BT7-040": "",
            "BT7-041": "",
            "BT7-044": "",
            "BT7-056": "",
            "BT7-063": "",
            "BT7-065": "",
            "BT7-068": "",
            "BT7-079": "",
            "BT7-111": "",
            "BT7-112": "",
        },
    },
    // Booster Next Adventure [BT7] - Box Topper --- bt7_boxtopper
    {
        "id": null,
        "slug": "bt7_boxtopper",
        "name": "Booster Next Adventure [BT7] - Box Topper",
        "release": "March 4, 2022",
        "url": "bandaitcgplusURL/setID/setID-cardIDp.png",
        "cards": {
            "BT7-085": "",
            "BT7-086": "",
            "BT7-087": "",
            "BT7-088": "",
            "BT7-089": "",
            "BT7-091": "",
        },
    },
    // Box Promotion Pack Next Adventure --- bt7_promotion
    {
        "id": null,
        "slug": "bt7_promotion",
        "name": "Box Promotion Pack Next Adventure",
        "release": "March 4, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "P-035": "P1",
            "P-036": "P1",
            "P-037": "P1",
            "P-038": "P1",
            "P-039": "P1",
            "P-040": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/5c/Box_Promotion_Pack_-Next_Adventure-.png/",
    },

// March, 2022
    // 2021 Vault Set --- 2021fest_vault
    {
        "id": null,
        "slug": "2021fest_vault",
        "name": "2021 Vault Set",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "P-004": "P1",
            "P-009": "P1",
            "P-016": "P2",
            "P-028": "P2",
            "P-032": "P1",
            "P-046": "P1",
            "BT2-055": "P2",
            "BT6-056": "P1",
            "ST7-06": "P1",
            "ST8-06": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/fest_2022/"
    },
    // Digi-Egg Set --- 2021fest_digiegg
    {
        "id": null,
        "slug": "2021fest_digiegg",
        "name": "Digi-Egg Set",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-004": "P2",
            "BT3-002": "P1",
            "BT3-003": "P2",
            "BT3-006": "P1",
            "BT4-005": "P3",
            "BT4-006": "P1",
            "BT5-003": "P1",
            "BT6-001": "P2",
            "BT6-005": "P2",
            "BT7-004": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/fest_2022/"
    },
    // Fest Stamp SR --- 2021fest_stamp
    {
        "id": null,
        "slug": "2021fest_stamp",
        "name": "Fest Stamp SR",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT3-091": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/fest_2022/"
    },
    // Fest WINNER Stamp SR --- 2021fest_winner
    {
        "id": null,
        "slug": "2021fest_winner",
        "name": "Fest WINNER Stamp SR",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT3-091": "P3",
        },
        "info_url": "https://world.digimoncard.com/event/fest_2022/"
    },

    // 2021 World Championship --- wc2021
    {
        "id": null,
        "slug": "wc2021",
        "name": "2021 World Championship Participation",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT3-112": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/world_championships2021/"
    },
    // 2021 World Championship 3rd Place --- wc2021_3rd
    {
        "id": null,
        "slug": "wc2021_3rd",
        "name": "2021 World Championship Framed Trophy Cards - 3rd Place",
        "release": "March, 2022",
        "url": null,
        "cards": {
            "ST1-09": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c7/ST1-09_P4.png",
        },
        "info_url": "https://world.digimoncard.com/event/world_championships2021/"
    },
    // 2021 World Championship 2nd Place --- wc2021_2nd
    {
        "id": null,
        "slug": "wc2021_2nd",
        "name": "2021 World Championship Framed Trophy Cards - 2nd Place",
        "release": "March, 2022",
        "url": null,
        "cards": {
            "ST1-11": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fc/ST1-11_P5.png",
        },
        "info_url": "https://world.digimoncard.com/event/world_championships2021/"
    },
    // 2021 World Championship 1st Place --- wc2021_1st
    {
        "id": null,
        "slug": "wc2021_1st",
        "name": "2021 World Championship Framed Trophy Cards - 1st Place",
        "release": "March, 2022",
        "url": null,
        "cards": {
            "BT5-086": "https://static.wikia.nocookie.net/digimoncardgame/images/3/38/BT5-086_P5.png",
        },
        "info_url": "https://world.digimoncard.com/event/world_championships2021/"
    },

// May, 2022
    // Tamer's Evolution Box2 [PB-06] --- pb6
    {
        "id": null,
        "slug": "pb6",
        "name": "Tamer's Evolution Box2 [PB-06]",
        "release": "February, 2021",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-033": "P1",
            "BT3-047": "P1",
            "BT4-011": "P2",
            "BT5-009": "P1",
            "EX1-013": "P1",
            "EX1-071": "P1",
            "P-001": "P1",
            "ST7-03": "P1",
        },
        "info_url": "https://world.digimoncard.com/products/goods/evolution-box2.php"

    },

// May 6, 2022
    // New Awakening (BT8) Pre-Release Tournaments --- bt8_prerelease
    {
        "id": null,
        "slug": "bt8_prerelease",
        "name": "New Awakening (BT8) Pre-Release Tournaments",
        "release": "May 6, 2022",
        "url": "digimoncardURL/setID-cardIDparallel.png",
        "cards": {
            "P-058": "",
            "BT5-007": "_P3",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/New_Awakening_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-08/"
    },

// May 13, 2022
    // Starter Deck ULTIMATE ANCIENT DRAGON [ST-9] --- st9
    {
        "id": "ST9",
        "slug": "st9",
        "name": "Starter Deck ULTIMATE ANCIENT DRAGON [ST-9]",
        "release": "May 13, 2022",
        "total": 16,
        "url": "bandaitcgplusURL/setID/e_ST09_cardID_D.jpg",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-9.php",
        "color": {
            "green": [1,7,8,9,10,12,13,15,16],
            "blue": [2,3,4],
            "blue-green": [5,6,14],
            "green-blue": [11]
        },
    },
    // Starter Deck PARALLEL WORLD TACTICIAN [ST-10] --- st10
    {
        "id": "ST10",
        "slug": "st10",
        "name": "Starter Deck PARALLEL WORLD TACTICIAN [ST-10]",
        "release": "May 13, 2022",
        "total": 16,
        "url": "bandaitcgplusURL/setID/e_setID_cardID_D.jpg",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-10.php",
        "color": {
            "purple": [1,7,8,9,11,12,13,15,16],
            "yellow": [2,3,5],
            "yellow-purple": [4,6,14],
            "purple-yellow": [10]
        },
    },

    // Booster New Awakening [BT8] --- bt8
    {
        "id": "BT8",
        "slug": "bt8",
        "name": "Booster New Awakening [BT8]",
        "release": "May 13, 2022",
        "total": 112,
        "url": "bandaitcgplusURL/setID/e_setID_cardID.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/2d/BT-8-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e9/Playsheet-BT-8-EN.jpg/",
        "color": {
            "red": [1,"7-10",13,14,18,19,85,86,"95-97"],
            "red-blue": [12],
            "red-yellow": [15],
            "red-green": [16],
            "red-black": [11,17],
            "blue": [2,"20-22","27-29",31,87,98],
            "blue-red": [26],
            "blue-yellow": [23,24],
            "blue-green": [32,88,99],
            "blue-black": [25,30],
            "yellow": [3,"33-36",40,43,89,90,100,101],
            "yellow-red": [37],
            "yellow-blue": [38,42,44],
            "yellow-green": [39],
            "yellow-purple": [41],
            "green": [4,"45-47",49,50,52,54,55,57,91,102,103],
            "green-red": [48,56],
            "green-blue": [53],
            "green-yellow": [51],
            "black": [5,"58-66",68,69,92,104,106],
            "black-red": [67,70,105],
            "purple": [6,"71-74",76,"78-81",83,93,107,108,111],
            "purple-yellow": [77,82,109],
            "purple-green": [75],
            "white": [84,94,110,112],
        }
    },
    // Booster New Awakening [BT8] - Alternatives --- bt8_alts
    {
        "id": null,
        "slug": "bt8_alts",
        "name": "Booster New Awakening [BT8] - Alternatives",
        "release": "May 13, 2022",
        "url": "bandaitcgplusURL/setID/e_setID_cardIDp.png",
        "cards": {
            "BT8-008": "",
            "BT8-009": "",
            "BT8-012": "",
            "BT8-026": "",
            "BT8-032": "",
            "BT8-033": "",
            "BT8-038": "",
            "BT8-039": "",
            "BT8-051": "",
            "BT8-057": "",
            "BT8-060": "",
            "BT8-069": "",
            "BT8-070": "",
            "BT8-082": "",
            "BT8-083": "",
            "BT8-084": "",
            "BT8-111": "",
            "BT8-112": "",
        },
    },
    // Booster New Awakening [BT8] - Box Topper --- bt8_boxtopper
    {
        "id": null,
        "slug": "bt8_boxtopper",
        "name": "Booster New Awakening [BT8] - Box Topper",
        "release": "May 13, 2022",
        "url": "bandaitcgplusURL/setID/e_setID_cardIDp.png",
        "cards": {
            "BT8-085": "",
            "BT8-087": "",
            "BT8-088": "",
            "BT8-089": "",
            "BT8-090": "",
            "BT8-091": "",
        },
    },
    // Booster New Awakening [BT8] - Promo Box Topper --- bt8_promoboxtopper
    {
        "id": null,
        "slug": "bt8_promoboxtopper",
        "name": "Booster New Awakening [BT8] - Promo Box Topper",
        "release": "May 13, 2022",
        "url": "bandaitcgplusURL/P/e_P-cardID_d.png",
        "cards": {
            "P-047": "",
            "P-048": "",
        },
    },

    // Fest Set --- 2021fest
    {
        "id": null,
        "slug": "2021fest",
        "name": "Fest Set",
        "release": "March, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-062": "P1",
            "BT2-051": "P1",
            "BT2-082": "P2",
            "BT4-074": "P1",
            "BT5-032": "P1",
            "BT6-009": "P1",
            "BT6-077": "P1",
            "BT7-110": "P1",
            "BT8-008": "P1",
            "BT8-086": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/fest_2022/"
    },

    // Ultimate Cup --- ultimatecup
    {
        "id": null,
        "slug": "ultimatecup",
        "name": "Ultimate Cup",
        "release": "April, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-084": "P4",
            "BT3-002": "P2",
            "BT3-021": "P2",
            "BT8-032": "P1",
            "BT8-112": "P1",
            "EX1-014": "P1",
            "ST9-05": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/ultimate_cup/"
    },

// June 24, 2022
    // Booster Digital Hazard [EX2] --- ex2
    {
        "id": "EX2",
        "slug": "ex2",
        "name": "Booster Digital Hazard [EX2]",
        "release": "June 24, 2022",
        "total": 74,
        "url": "bandaitcgplusURL/setID/setID-cardID_dummy.jpg",
        "add_zero": 3,
        "override": {
            "url": "bandaitcgplusURL/setID/setID-cardIDP_dummy.png",
            "cards": {
                "EX2-002": ""
            }
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/20/EX-2-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/0/02/Playsheet-EX-2-EN.jpg/",
        "color": {
            "red": [1,"8-11",56,66,67,73],
            "red-purple": [12],
            "blue": [2,"13-17",57,58,68,69],
            "blue-yellow": [18],
            "yellow": [3,"19-24",59,60],
            "green": [4,"25-29",61,70],
            "black": [5,"30-38",62,63],
            "purple": [6,"39-44",64,65,71,74],
            "white": [7,"45-55",72]
        }
    },
    // Booster Digital Hazard [EX2] - Alternatives --- ex2_alts
    {
        "id": null,
        "slug": "ex2_alts",
        "name": "Booster Digital Hazard [EX2] - Alternatives",
        "release": "June 24, 2022",
        "url": "bandaitcgplusURL/setID/setID-cardIDP_dummy.png",
        "cards": {
            "EX2-001": "",
            "EX2-003": "",
            "EX2-004": "",
            "EX2-006": "",
            "EX2-008": "",
            "EX2-011": "",
            "EX2-012": "",
            "EX2-017": "",
            "EX2-018": "",
            "EX2-019": "",
            "EX2-022": "",
            "EX2-024": "",
            "EX2-025": "",
            "EX2-029": "",
            "EX2-031": "",
            "EX2-035": "",
            "EX2-038": "",
            "EX2-039": "",
            "EX2-041": "",
            "EX2-043": "",
            "EX2-044": "",
            "EX2-045": "",
            "EX2-056": "",
            "EX2-058": "",
            "EX2-060": "",
            "EX2-061": "",
            "EX2-062": "",
            "EX2-065": "",
            "EX2-073": "",
            "EX2-074": "",
        },
    },
    // Booster Digital Hazard [EX2] - Box Topper --- ex2_boxtopper
    {
        "id": null,
        "slug": "ex2_boxtopper",
        "name": "Booster Digital Hazard [EX2] - Box Topper",
        "release": "June 24, 2022",
        "url": null,
        "cards": {
            "ST9-06": "https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN/EX2/e_ST09-06P_D.png",
            "ST10-06": "https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN/EX2/e_ST10-06P_D.png",
        },
    },

// June, 2022
    // Playmat and Card Set 1 Digimon Tamers [PB-08] --- pb8
    {
        "id": null,
        "slug": "pb8",
        "name": "Playmat and Card Set 1 Digimon Tamers [PB-08]",
        "release": "June, 2021",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "BT1-035": "913866",
            "BT2-009": "66dcd2",
            "BT2-068": "5e6f62",
            "BT3-046": "d9ac05",
            "BT3-057": "16e33c",
            "BT5-036": "fc6be2",
            "BT5-044": "25fe61",
            "ST7-09": "cd9977",
        },
        "info_url": "https://world.digimoncard.com/products/goods/playmat_digimon-tamers.php"

    },

    // Tamer Party Vol.5 --- tp5
    {
        "id": null,
        "slug": "tp5",
        "name": "Tamer Party Vol.5",
        "release": "June 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT3-054": "P1",
            "BT5-034": "P1",
            "BT6-083": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_05/"
    },
    // Official Tournament Pack Vol.5 --- otp5
    {
        "id": null,
        "slug": "otp5",
        "name": "Official Tournament Pack Vol.5",
        "release": "June, 2021",
        "url": "bandaitcgplusURL/setID/e_setID-cardIDparallel_D.png",
        "cards": {
            "P-059": "",
            "P-060": "_errata",
            "P-061": "",
            "P-062": "",
            "P-063": "_errata",
            "P-064": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fd/Official_Tournament_Pack_Vol.5.png/"
    },
    // Winner Pack New Awakening --- wp5
    {
        "id": null,
        "slug": "wp5",
        "name": "Winner Pack New Awakening",
        "release": "February, 2021",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-064": "P2",
            "BT3-006": "P2",
            "BT3-038": "P1",
            "BT5-020": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/29/WinnerPackNewAwakening.png/"
    },

// July 1, 2022
    // Summer 2022 Dash Pack --- 2022summer_dashpack
    {
        "id": null,
        "slug": "2022summer_dashpack",
        "name": "Summer 2022 Dash Pack",
        "release": "July 1, 2022",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "BT5-097": "d1c0de",
            "BT7-100": "f59f46",
            "BT8-102": "483604",
        },
    },
    // Digimon Survive Promo Pack --- digimon_survive
    {
        "id": null,
        "slug": "digimon_survive",
        "name": "Digimon Survive Promo Pack",
        "release": "July 1, 2022",
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D_RGB_transp.png",
        "cards": {
            "P-079": "",
            "P-080": "",
            "P-081": "",
        },
    },

// July 22, 2022
    // X Record (BT9) Pre-Release Tournaments --- bt9_prerelease
    {
        "id": null,
        "slug": "bt9_prerelease",
        "name": "X Record (BT9) Pre-Release Tournaments",
        "release": "July 22, 2022",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "EX1-027": "67d05d",
            "BT5-020": "64499e",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d7/X_Record_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-09/"
    },

// July 29, 2022
    // Booster X Record [BT9] --- bt9
    {
        "id": "BT9",
        "slug": "bt9",
        "name": "Booster X Record [BT9]",
        "release": "July 29, 2022",
        "total": 112,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_dummy.jpg",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c7/BT-9-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/8/86/Playsheet-BT-9-EN.jpg/",
        "color": {
            "red": [1,"7-17","93-95"],
            "red-yellow": [84],
            "red-green": [18],
            "blue": [2,"19-28",30,31,86,96,97],
            "blue-red": [85],
            "blue-black": [29],
            "yellow": [3,"32-37",40,43,98],
            "yellow-red": [41,99],
            "yellow-blue": [38,44],
            "yellow-green": [87],
            "yellow-black": [39,42],
            "green": [4,"45-49",52,53,55,56,100,101],
            "green-blue": [50,51,88],
            "green-black": [54],
            "black": [5,"57-60","62-64",66,67,69,89,90,"102-105",111],
            "black-red": [61,65,68],
            "purple": [6,"70-73",77,79,91,106,108],
            "purple-yellow": [74,76,80,82],
            "purple-black": [75,78,81,107,112],
            "white": [83,92,109,110],
        }
    },
    // Booster X Record [BT9] - Alternatives --- bt9_alts
    {
        "id": null,
        "slug": "bt9_alts",
        "name": "Booster X Record [BT9] - Alternatives",
        "release": "July 29, 2022",
        "url": "bandaitcgplusURL/setID/e_setID-cardIDP_dummy.jpg",
        "cards": {
            "BT9-008": "",
            "BT9-016": "",
            "BT9-017": "",
            "BT9-020": "",
            "BT9-021": "",
            "BT9-031": "",
            "BT9-044": "",
            "BT9-055": "",
            "BT9-064": "",
            "BT9-066": "",
            "BT9-068": "",
            "BT9-074": "",
            "BT9-080": "",
            "BT9-081": "",
            "BT9-082": "",
            "BT9-083": "",
            "BT9-111": "",
            "BT9-112": "",
        },
    },
    // Booster X Record [BT9] - Box Topper --- bt9_boxtopper
    {
        "id": null,
        "slug": "bt9_boxtopper",
        "name": "Booster X Record [BT9] - Box Topper",
        "release": "July 29, 2022",
        "url": "bandaitcgplusURL/setID/e_setID-cardIDP_dummy.jpg",
        "cards": {
            "BT9-001": "",
            "BT9-002": "",
            "BT9-003": "",
            "BT9-004": "",
            "BT9-005": "",
            "BT9-006": "",
        },
    },
    // Box Promotion Pack Update Pack --- bt9_promotion
    {
        "id": null,
        "slug": "bt9_promotion",
        "name": "Box Promotion Pack Update Pack",
        "release": "July 29, 2022",
        "url": "bandaitcgplusURL/setID/e_setID-cardID_Dparallel.png",
        "cards": {
            "P-072": ["", "_horo"],
            "P-073": ["", "_horo"],
            "P-074": ["", "_horo"],
            "P-075": ["", "_horo"],
            "P-076": ["", "_horo"],
            "P-077": ["", "_horo"],
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/3/30/Update_Pack.png/",
    },

// July, 2022
    // 2022 Regionals Participation Set --- regional2022_0
    {
        "id": null,
        "slug": "regional2022_0",
        "name": "2022 Regionals Participation Set",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST8-04": "P1",
            "BT4-084": "P1",
            "BT6-038": "P1",
            "BT6-048": "P1",
            "BT7-081": "P1",
            "EX1-007": "P1",
            "EX1-048": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220422/"
    },
    // 2022 Regionals Finalist Set --- regional2022_1
    {
        "id": null,
        "slug": "regional2022_1",
        "name": "2022 Regionals Finalist Set",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST8-04": "P2",
            "BT4-084": "P2",
            "BT6-038": "P2",
            "BT6-048": "P2",
            "BT7-081": "P2",
            "EX1-007": "P2",
            "EX1-048": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220422/"
    },
    // 2022 Regionals Champion Set --- regional2022_2
    {
        "id": null,
        "slug": "regional2022_2",
        "name": "2022 Regionals Champion Set",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST8-04": "P3",
            "BT4-084": "P3",
            "BT6-038": "P3",
            "BT6-048": "P3",
            "BT7-081": "P3",
            "EX1-007": "P3",
            "EX1-048": "P3",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220422/"
    },
    // Official Tournament Pack Vol.6 --- otp6
    {
        "id": null,
        "slug": "otp6",
        "name": "Official Tournament Pack Vol.6",
        "release": "July, 2022",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "BT1-072": "36c029",
            "BT7-064": "8ccc94",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/23/Official_Tournament_Pack_Vol.6.png/"
    },
    // Winner Pack X Record --- wp6
    {
        "id": null,
        "slug": "wp6",
        "name": "Winner Pack X Record",
        "release": "July, 2022",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "BT3-004": "eefb00",
            "BT4-042": "6e38e3",
            "EX1-061": "398820",
            "ST5-08": "acc3ae",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a9/WinnerPackXRecord.png/"
    },

// August, 2022
    // Store Championship 2022 Participant Pack --- storechampion_2022_0
    {
        "id": null,
        "slug": "storechampion_2022_0",
        "name": "Store Championship 2022 Participant Pack",
        "release": "August, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST7-03": "P2",
            "ST8-06": "P2",
            "BT6-034": "P1",
            "BT7-045": "P1",
            "BT7-069": "P1",
            "BT7-080": "P1",
            "EX1-050": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship_august/"
    },
    // Store Championship 2022 Champion Card Set --- storechampion_2022_1
    {
        "id": null,
        "slug": "storechampion_2022_1",
        "name": "Store Championship 2022 Champion Card Set",
        "release": "August, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST7-03": "P3",
            "ST8-06": "P3",
            "BT6-034": "P2",
            "BT7-045": "P2",
            "BT7-069": "P2",
            "BT7-080": "P2",
            "EX1-050": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship_august/"
    },
    // 2022 Regionals Participant Card Set 2 --- regional2022_2_0
    {
        "id": null,
        "slug": "regional2022_2_0",
        "name": "2022 Regionals Participant Card Set 2",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-071": "P1",
            "BT7-062": "P1",
            "BT7-110": "P2",
            "BT8-042": "P1",
            "BT8-053": "P1",
            "ST7-06": "P2",
            "ST9-05": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220715/"
    },
    // 2022 Regionals Finalist Card Set 2 --- regional2022_2_1
    {
        "id": null,
        "slug": "regional2022_2_1",
        "name": "2022 Regionals Finalist Card Set 2",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-071": "P2",
            "BT7-062": "P2",
            "BT7-110": "P3",
            "BT8-042": "P2",
            "BT8-053": "P2",
            "ST7-06": "P3",
            "ST9-05": "P3",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220715/"
    },
    // 2022 Regionals Champion Card Set 2 --- regional2022_2_2
    {
        "id": null,
        "slug": "regional2022_2_2",
        "name": "2022 Regionals Champion Card Set 2",
        "release": "July, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-071": "P3",
            "BT7-062": "P3",
            "BT7-110": "P4",
            "BT8-042": "P3",
            "BT8-053": "P3",
            "ST7-06": "P4",
            "ST9-05": "P4",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_220715/"
    },

// September, 2022
    // Playmat and Card Set 2 Floral Fun [PB-09] --- pb9
    {
        "id": null,
        "slug": "pb9",
        "name": "Playmat and Card Set 2 Floral Fun [PB-09]",
        "release": "September, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-010": "P2",
            "BT1-029": "P4",
            "BT2-036": "P1",
            "P-004": "P2",
            "ST1-02": "P3",
            "ST3-04": "P3",
            "ST4-03": "P2",
            "ST4-04": "P1",
        },
        "info_url": "https://world.digimoncard.com/products/goods/playmat_floral-fun.php"
    },

// September 30, 2022
    // Premium Deck Set [PD-01] --- pd1
    {
        "id": null,
        "slug": "pd1",
        "name": "Premium Deck Set [PD-01]",
        "release": "September 30, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT6-093": "P1",
            "BT6-109": "P1",
            "BT7-106": "P1",
        },
        "info_url": "https://world.digimoncard.com/products/goods/premium-deck-set.php"
    },
    // Premium Deck Set Lucky Pack [PD-01] --- pd1_lucky
    {
        "id": null,
        "slug": "pd1_lucky",
        "name": "Premium Deck Set Lucky Pack [PD-01]",
        "release": "September 30, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT6-021": "P1",
            "EX1-008": "P2",
            "EX1-049": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d5/PD-01-Lucky-Pack.png/",
        "info_url": "https://world.digimoncard.com/products/goods/premium-deck-set.php"
    },
    {
        "id": null,
        "slug": "pd1_lucky",
        "name": "Premium Deck Set Lucky Pack [PD-01]",
        "release": "September 30, 2022",
        "url": "digimoncardURL/EX1-063_P2.png",
        "cards": {
            "P-020": "",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d5/PD-01-Lucky-Pack.png/",
        "info_url": "https://world.digimoncard.com/products/goods/premium-deck-set.php"
    },

// October 2022
    // Tamer Party Vol.6 --- tp6
    {
        "id": null,
        "slug": "tp6",
        "name": "Tamer Party Vol.6",
        "release": "October 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "EX2-010": "P1",
            "EX2-023": "P1",
            "EX2-027": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_06/"
    },
    // Event Pack 3 --- eventpack3
    {
        "id": null,
        "slug": "eventpack3",
        "name": "Event Pack 3",
        "release": "October 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT6-009": "P3",
            "BT6-011": "P1",
            "BT6-015": "P1",
            "BT7-021": "P2",
            "BT7-023": "P1",
            "BT7-030": "P1",
            "BT7-035": "P2",
            "BT7-036": "P1",
            "BT7-042": "P1",
            "BT7-046": "P2",
            "BT7-047": "P1",
            "BT7-054": "P1",
            "BT7-071": "P2",
            "BT7-073": "P1",
            "BT7-078": "P1",
            "P-013": "P1",
            "P-014": "P1",
            "P-016": "P4",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_september/"
    },
    // 2022 DC-1 Tournament --- dc1_2022
    {
        "id": null,
        "slug": "dc1_2022",
        "name": "2022 DC-1 Tournament",
        "release": "October 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "EX2-011": "P2",
            "P-041": "P2",
            "ST7-05": "P1",
            "ST7-08": "P1",
            "ST7-11": "P1",
        },
        "info_url": "https://world.digimoncard.com/event/dc-1_2022/"
    },

// October 2022–February 2023
    // Official Tournament Pack Vol.7 --- otp7
    {
        "id": null,
        "slug": "otp7",
        "name": "Official Tournament Pack Vol.7",
        "release": "October 2022–February 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-078": "P1",
            "BT3-061": "P1",
            "BT5-026": "P2",
            "BT5-066": "P1",
            "EX1-025": "P1",
            "ST6-08": "P5",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e9/Official_Tournament_Pack_Vol.7.png/"
    },
    // Winner Pack Xros Encounter --- wp7
    {
        "id": null,
        "slug": "wp7",
        "name": "Winner Pack -Xros Encounter-",
        "release": "October 2022–February 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-062": "P2",
            "BT3-004": "P2",
            "BT7-064": "P1",
            "ST4-08": "P5",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/51/WinnerPackXroxEncounter.png/"
    },

// October 7, 2022
    // Xros Encounter (BT10) Pre-Release Tournaments --- bt10_prerelease
    {
        "id": null,
        "slug": "bt10_prerelease",
        "name": "Xros Encounter (BT10) Pre-Release Tournaments",
        "release": "October 7, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT8-058": "P1",
            "EX2-010": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/2a/Xros_Encounter_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-10/"
    },

// October 14, 2022
    // Starter Deck JESMON [ST-12] --- st12
    {
        "id": "ST12",
        "slug": "st12",
        "name": "Starter Deck JESMON [ST-12]",
        "release": "October 14, 2022",
        "total": 16,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-12.php",
        "color": {
            "red": ["1-8",10,14,15],
            "red-black": [9],
            "black": [11, 16],
            "white": [12,13]
        }
    },
    // Starter Deck RagnaLoardmon [ST-13] --- st13
    {
        "id": "ST13",
        "slug": "st13",
        "name": "Starter Deck RagnaLoardmon [ST-13]",
        "release": "October 14, 2022",
        "total": 16,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-13.php",
        "color": {
            "red": ["2-5", 15],
            "red-black": [6],
            "black": [1, "7-11", 13, 14],
            "black-red": [12, 16],
        }
    },
    // Bonus Tamer Cards Pack --- bonus_tamer_cards
    {
        "id": null,
        "slug": "bonus_tamer_cards",
        "name": "Bonus Tamer Cards Pack",
        "release": "October 14, 2022",
        "url": "bandaitcgplusURL/ST12/e_setID-cardIDparallel.png",
        "cards": {
            "ST1-12": "P_D",
            "ST3-12": "P_D",
            "ST6-14": "P_D",
            "BT3-093": "P_D",
            "BT3-094": "P_D",
            "BT4-096": "P2_D",
        },
    },

    // Booster Xros Encounter [BT10] --- bt10
    {
        "id": "BT10",
        "slug": "bt10",
        "name": "Booster Xros Encounter [BT10]",
        "release": "October 14, 2022",
        "total": 112,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D.png",
        "add_zero": 3,
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/24/BT-10-EN.png/",
        "playmat": "",
        "color": {
            "red": [1,7,8,10,11,14,16,87,"94-96",111],
            "red-yellow": [9],
            "red-black": [13,112],
            "red-purple": [12,15],
            "blue": [2,"17-21","23-27",88,97,98],
            "blue-black": [22,28],
            "yellow": [3,"29-42",89,"99-101"],
            "green": [4,"43-54",56,57,90,91,102,103],
            "green-yellow": [55],
            "black": [5,58,"60-68",92,105,106],
            "black-red": [59],
            "black-purple": [69,70,104],
            "purple": [6,"71-84",93,107,108],
            "white": [85,86,109,110],
        }
    },
    // Booster Xros Encounter [BT10] - Alternatives --- bt10_alts
    {
        "id": null,
        "slug": "bt10_alts",
        "name": "Booster Xros Encounter [BT10] - Alternatives",
        "release": "October 14, 2022",
        "url": "bandaitcgplusURL/BT10/e_setID-cardIDp_D.png",
        "cards": {
            "BT10-011": "",
            "BT10-013": "",
            "BT10-016": "",
            "BT10-023": "",
            "BT10-024": "",
            "BT10-026": "",
            "BT10-041": "",
            "BT10-042": "",
            "BT10-044": "",
            "BT10-054": "",
            "BT10-057": "",
            "BT10-060": "",
            "BT10-068": "",
            "BT10-069": "",
            "BT10-082": "",
            "BT10-083": "",
            "BT10-085": "",
            "BT10-086": "",
            "BT10-111": "",
            "BT10-112": "",
            "BT6-111": "",
        },
    },
    // Booster Xros Encounter [BT10] - Box Topper --- bt10_boxtopper
    {
        "id": null,
        "slug": "bt10_boxtopper",
        "name": "Booster Xros Encounter [BT10] - Box Topper",
        "release": "October 14, 2022",
        "url": "bandaitcgplusURL/BT10/e_setID-cardIDp_D.png",
        "cards": {
            "BT10-087": "",
            "BT10-088": "",
            "BT10-089": "",
            "BT10-090": "",
            "BT10-092": "",
            "BT10-093": "",
        },
    },
    // Box Promotion Pack ST-11 Special Entry pack --- st11
    {
        "id": null,
        "slug": "st11",
        "name": "Box Promotion Pack ST-11 Special Entry pack",
        "release": "October 14, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST1-03": "P5",
            "ST1-07": "P3",
            "ST1-16": "P4",
            "BT1-023": "P1",
            "BT1-025": "P2",
            "BT1-085": "P2",
            "BT2-001": "P1",
            "BT2-010": "P1",
            "BT2-011": "P1",
            "BT2-016": "P1",
            "BT2-018": "P1",
            "BT3-009": "P1",
            "BT4-010": "P1",
            "BT4-015": "P1",
            "BT4-099": "P1",
            "BT5-012": "P2",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/0/01/ST-11-EN.png/",
    },
    {
        "id": null,
        "slug": "st11",
        "name": "Box Promotion Pack ST-11 Special Entry pack",
        "release": "October 14, 2022",
        "url": "digimonCardDev/setID-cardID_parallelen-US.jpg",
        "cards": {
            "P-065": "c2a5dd",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/0/01/ST-11-EN.png/",
    },
    // 25th Special Memorial Pack --- 25specialmemorial
    {
        "id": null,
        "slug": "25specialmemorial",
        "name": "25th Special Memorial Pack",
        "release": "October 14, 2022",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "P-018": "P1",
            "BT1-010": "P3",
            "BT1-038": "P3",
            "BT2-024": "P1",
            "BT2-044": "P1",
            "BT2-056": "P1",
            "BT3-024": "P2",
            "BT5-010": "P3",
            "BT5-011": "P1",
            "BT6-064": "P2",
            "BT7-044": "P2",
            "BT8-067": "P1",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/25th_Memorial_Pack.png/",
    },

// November 4, 2022
    // Gift Box 2022 [GB-02] --- gb2
    {
        "id": null,
        "slug": "gb2",
        "name": "Gift Box 2022 [GB-02]",
        "release": "November 4, 2022",
        "url": "tcgPlayerURL/parallel.jpg",
        "cards": {
            "P-008": "451111",
            "P-009": "451112",
            "P-016": "451113",
            "P-033": "451114",
        },
        "info_url": "https://world.digimoncard.com/products/goods/gift_box_2022.php"
    },
    
// November 11, 2022
    // Booster Draconic Roar [EX3] --- ex3
    {
        "id": "EX3",
        "slug": "ex3",
        "name": "Booster Draconic Roar [EX3]",
        "release": "November 11, 2022",
        "total": 74,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D.png",
        "add_zero": 3,
        "override": {
            "url": "bandaitcgplusURL/setID/setID-cardID_D.png",
            "cards": {
                "EX3-013": ""
            }
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/3/33/EX-3-EN.png/",
        "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/6/6d/Playsheet-EX-3-EN.jpg/",
        "color": {
            "red": ["3-9",11,12,14],
            "red-black": [13,66],
            "red-purple": [10],
            "blue": [1,"15-26",67],
            "yellow": ["27-36",68,69],
            "green": ["38-45"],
            "green-blue": [37,70,74],
            "black": [2,"46-54",71],
            "purple": [55,58,64,72],
            "purple-red": [56,57,"61-63",73],
            "purple-green": [59,60],
            "white": [65]
        }
    },
    // Booster Draconic Roar [EX3] - Alternatives --- ex3_alts
    {
        "id": null,
        "slug": "ex3_alts",
        "name": "Booster Draconic Roar [EX3] - Alternatives",
        "release": "November 11, 2022",
        "url": "bandaitcgplusURL/setID/e_setID-cardIDp_D.png",
        "cards": {
            "EX3-012": "",
            "EX3-013": "",
            "EX3-014": "",
            "EX3-024": "",
            "EX3-025": "",
            "EX3-026": "",
            "EX3-035": "",
            "EX3-036": "",
            "EX3-037": "",
            "EX3-044": "",
            "EX3-045": "",
            "EX3-053": "",
            "EX3-054": "",
            "EX3-063": "",
            "EX3-064": "",
            "EX3-065": "",
            "EX3-073": "",
            "EX3-074": "",
        },
    },
    // Booster Draconic Roar [EX3] - Box Topper --- ex3_boxtopper
    {
        "id": null,
        "slug": "ex3_boxtopper",
        "name": "Booster Draconic Roar [EX3] - Box Topper",
        "release": "November 11, 2022",
        "url": null,
        "cards": {
            "BT3-111": "https://assets.cardlist.dev/images/communitycards/BT3-111_b69739en-US.jpg",
            "EX3-010": "https://product-images.tcgplayer.com/fit-in/874x874/452976.jpg",
            "EX3-020": "https://product-images.tcgplayer.com/fit-in/874x874/452980.jpg",
            "EX3-031": "https://product-images.tcgplayer.com/fit-in/874x874/452984.jpg",
            "EX3-041": "https://product-images.tcgplayer.com/fit-in/874x874/452988.jpg",
            "EX3-049": "https://product-images.tcgplayer.com/fit-in/874x874/452991.jpg",
            "EX3-061": "https://product-images.tcgplayer.com/fit-in/874x874/452994.jpg",
        },
    },

// February 2023
    // 2022 Championship Finals Event Pack Alt-Art Gold Stamp Set --- eventpack_goldstamp_2022
    {
        "id": null,
        "slug": "eventpack_goldstamp_2022",
        "name": "2022 Championship Finals Event Pack Alt-Art Gold Stamp Set",
        "release": "February 2023",
        "url": null,
        "cards": {
            "BT6-015": "https://static.wikia.nocookie.net/digimoncardgame/images/f/ff/BT6-015_P2.png",
            "BT7-030": "https://static.wikia.nocookie.net/digimoncardgame/images/6/69/BT7-030_P2.png",
            "BT7-042": "https://static.wikia.nocookie.net/digimoncardgame/images/0/08/BT7-042_P2.png",
            "BT7-054": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1d/BT7-054_P2.png",
            "BT7-078": "https://static.wikia.nocookie.net/digimoncardgame/images/9/98/BT7-078_P2.png",
            "P-016": "https://static.wikia.nocookie.net/digimoncardgame/images/6/67/P-016_P5.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },

    // 2022 Championship Finals Digimon Tamers Pack --- tamerpack_goldstamp
    {
        "id": null,
        "slug": "tamerpack_goldstamp",
        "name": "2022 Championship Finals Digimon Tamers Pack",
        "release": "February 2023",
        "url": null,
        "cards": {
            "BT1-035": "https://static.cardmarket.com/img/047f60b0a4c4daa579cc82cfec104294/items/1611/CP22/693201.jpg",
            "BT2-009": "https://static.cardmarket.com/img/54b45fb3ddcd1e18fc083e29ca4c8603/items/1611/CP22/693204.jpg",
            "BT2-068": "https://static.cardmarket.com/img/34e85736cd818e982a4f131d8ac6f1a3/items/1611/CP22/693205.jpg",
            "BT3-046": "https://static.cardmarket.com/img/239f451985b3f0beb8ad71fd894c85b5/items/1611/CP22/693208.jpg",
            "BT3-057": "https://static.cardmarket.com/img/b4c72261ebb33cf8b54336436ba9c4a1/items/1611/CP22/693210.jpg",
            "BT5-036": "https://static.cardmarket.com/img/3ae111288babeff6cc221aa91716ef0f/items/1611/CP22/693213.jpg",
            "BT5-044": "https://static.cardmarket.com/img/42d10e90f5711e365de9a9d0add77388/items/1611/CP22/693214.jpg",
            "ST7-09": "https://static.cardmarket.com/img/8dcf6cb160b9b96231691687857ce69f/items/1611/CP22/693217.jpg",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2021/"
    },

    // 2022 Final Championships Framed Trophy Cards - Top 16 --- fcftc_2022_top16
    {
        "id": null,
        "slug": "fcftc_2022_top16",
        "name": "2022 Final Championships Framed Trophy Cards - Top 16",
        "release": "January 2022",
        "url": null,
        "cards": {
            "BT7-056": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fc/BT7-056_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2022/"
    },
    // 2022 Final Championships Framed Trophy Cards - 3rd Place --- fcftc_2022_3rd
    {
        "id": null,
        "slug": "fcftc_2022_3rd",
        "name": "2022 Final Championships Framed Trophy Cards - 3rd Place",
        "release": "January 2022",
        "url": null,
        "cards": {
            "BT7-062": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a1/BT7-062_P4.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2022/"
    },
    // 2022 Final Championships Framed Trophy Cards - 2nd Place --- fcftc_2022_2nd
    {
        "id": null,
        "slug": "fcftc_2022_2nd",
        "name": "2022 Final Championships Framed Trophy Cards - 2nd Place",
        "release": "January 2022",
        "url": null,
        "cards": {
            "BT7-064": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e7/BT7-064_P3.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2022/"
    },
    // 2022 Final Championships Framed Trophy Cards - 1st Place Champion --- fcftc_2022_1st
    {
        "id": null,
        "slug": "fcftc_2022_1st",
        "name": "2022 Final Championships Framed Trophy Cards - 1st Place Champion",
        "release": "January 2022",
        "url": null,
        "cards": {
            "BT7-065": "https://static.wikia.nocookie.net/digimoncardgame/images/b/b7/BT7-065_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/final_championships2022/"
    },
    // Tamer Party Vol.7 --- tp7
    {
        "id": null,
        "slug": "tp6",
        "name": "Tamer Party Vol.7",
        "release": "February 2023",
        "url": null,
        "cards": {
            "P-079": "https://static.wikia.nocookie.net/digimoncardgame/images/8/80/P-079_P1.png",
            "P-080": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d1/P-080_P1.png",
            "P-081": "https://static.wikia.nocookie.net/digimoncardgame/images/7/74/P-081_P1.png",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_06/"
    },

// February 10 - February 16, 2023
    // Dimensional Phase (BT11) Pre-Release Tournaments --- bt11_prerelease
    {
        "id": null,
        "slug": "bt11_prerelease",
        "name": "Dimensional Phase (BT11) Pre-Release Tournaments",
        "release": "February 10 - February 16, 2023",
        "url": null,
        "cards": {
            "BT8-021": "https://static.wikia.nocookie.net/digimoncardgame/images/5/5c/BT8-021_P1.png",
            "ST1-07": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d0/ST1-07_P5.png",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/2a/Xros_Encounter_Pre-Release_Promotion_Pack.png/",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-11/"
    },

// February 17, 2023
    // Booster Dimensional Phase [BT11] --- bt11
    {
        "id": "BT11",
        "slug": "bt11",
        "name": "Booster Dimensional Phase [BT11]",
        "release": "February 17, 2023",
        "total": 112,
        "url": "digimoncardURL/setID-cardID.png",
        "add_zero": 3,
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/24/BT-10-EN.png/",
        "playmat": "",
        "color": {
            "red": [1,7,8,10,11,"13-17",89,96,97],
            "red-blue": [18],
            "red-yellow": [9,12],
            "red-white": [19],
            "blue": [2,"20-33",90,98,99,112],
            "yellow": [3,"34-42",45,100,101],
            "yellow-black": [43,44],
            "green": [4,"46-51",53,54,56,58,91,"102-104"],
            "green-red": [52],
            "green-black": [55,59],
            "green-purple": [57],
            "black": [5,"60-63","65-68",70,72,73,92,93,105,106,108,111],
            "black-red": [64,69,74,107],
            "black-purple": [71],
            "purple": [6,"75-81",83,84,"86-88",109,110],
            "purple-blue": [85],
            "purple-yellow": [94],
            "purple-black": [82],
            "white": [95],
        }
    },
    // Booster Dimensional Phase [BT11] - Alternatives --- bt11_alts
    {
        "id": null,
        "slug": "bt11_alts",
        "name": "Booster Dimensional Phase [BT11] - Alternatives",
        "release": "February 17, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT11-016": "P1",
            "BT11-017": "P1",
            "BT11-019": "P1",
            "BT11-032": "P1",
            "BT11-033": "P1",
            "BT11-042": "P1",
            "BT11-056": "P1",
            "BT11-074": "P1",
            "BT11-083": "P1",
            "BT11-086": "P1",
            "BT11-088": "P1",
            "BT11-089": "P1",
            "BT11-090": "P1",
            "BT11-091": "P1",
            "BT11-093": "P1",
            "BT11-094": "P1",
            "BT11-111": "P1",
            "BT11-112": "P1",
            "BT2-032": "P3",
            "EX1-073": "P2",
            "ST10-06": "P2",
        },
    },
    // Booster Dimensional Phase [BT11] - Foils --- bt11_foils
    {
        "id": null,
        "slug": "bt11_foils",
        "name": "Booster Dimensional Phase [BT11] - Foils",
        "release": "February 17, 2023",
        "url": "digimoncardURL/setID-cardID.png",
        "cards": {
            "BT11-001": "",
            "BT11-002": "",
            "BT11-003": "",
            "BT11-004": "",
            "BT11-005": "",
            "BT11-006": "",
            "BT11-008": "",
            "BT11-009": "",
            "BT11-010": "",
            "BT11-011": "",
            "BT11-012": "",
            "BT11-013": "",
            "BT11-014": "",
            "BT11-021": "",
            "BT11-022": "",
            "BT11-023": "",
            "BT11-024": "",
            "BT11-025": "",
            "BT11-026": "",
            "BT11-027": "",
            "BT11-028": "",
            "BT11-030": "",
            "BT11-034": "",
            "BT11-035": "",
            "BT11-036": "",
            "BT11-037": "",
            "BT11-038": "",
            "BT11-039": "",
            "BT11-040": "",
            "BT11-041": "",
            "BT11-044": "",
            "BT11-045": "",
            "BT11-046": "",
            "BT11-047": "",
            "BT11-048": "",
            "BT11-049": "",
            "BT11-050": "",
            "BT11-051": "",
            "BT11-053": "",
            "BT11-054": "",
            "BT11-055": "",
            "BT11-057": "",
            "BT11-060": "",
            "BT11-061": "",
            "BT11-062": "",
            "BT11-063": "",
            "BT11-064": "",
            "BT11-065": "",
            "BT11-066": "",
            "BT11-067": "",
            "BT11-071": "",
            "BT11-073": "",
            "BT11-075": "",
            "BT11-076": "",
            "BT11-077": "",
            "BT11-078": "",
            "BT11-079": "",
            "BT11-080": "",
            "BT11-081": "",
            "BT11-084": "",
            "BT11-085": "",
            "BT11-096": "",
            "BT11-097": "",
            "BT11-098": "",
            "BT11-099": "",
            "BT11-100": "",
            "BT11-101": "",
            "BT11-102": "",
            "BT11-103": "",
            "BT11-104": "",
            "BT11-105": "",
            "BT11-106": "",
            "BT11-109": "",
            "BT11-110": "",
        },
    },
    // Digimon Illustration Competition Pack --- ilustration_pack
    {
        "id": null,
        "slug": "ilustration_pack",
        "name": "Digimon Illustration Competition Pack",
        "release": "February 17, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-056": "P2",
            "BT8-008": "P3",
            "EX1-039": "P2",
            "EX2-025": "P2",
            "P-005": "P2",
            "ST1-03": "P6",
            "ST5-12": "P1",
            "ST6-08": "P6",
        },
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/25th_Memorial_Pack.png/",
    },
    // English Version 2nd Anniversary Alternate Art Poll - 2ndanniversary_artpoll
    {
        "id": null,
        "slug": "2ndanniversary_artpoll",
        "name": "English Version 2nd Anniversary Alternate Art Poll",
        "release": "February 17, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-063": "P1",
            "BT2-046": "P1",
            "BT2-051": "P2",
            "BT3-077": "P1",
            "BT3-103": "P1",
            "BT4-063": "P1",
            "BT5-032": "P2",
            "BT6-085": "P1",
            "BT7-005": "P1",
            "BT7-036": "P2",
        },
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/25th_Memorial_Pack.png/",
    },

// Mid January 2023 – April 2023
    // Official Tournament Pack Vol.8 --- otp8
    {
        "id": null,
        "slug": "ot8",
        "name": "Official Tournament Pack Vol.8",
        "release": "Mid January 2023–April 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-070": "P1",
            "BT3-021": "P3",
            "BT9-004": "P2",
            "BT10-003": "P1",
            "EX1-024": "P2",
            "ST7-02": "P1",
        },
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e9/Official_Tournament_Pack_Vol.7.png/"
    },
    // Winner Pack Dimensional Phase --- wp8
    {
        "id": null,
        "slug": "wp8",
        "name": "Winner Pack -Dimensional Phase-",
        "release": "Mid January 2023–April 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-003": "P2",
            "BT3-021": "P4",
            "BT8-064": "P1",
            "BT10-003": "P2",
        },
        // https://www.cardmarket.com/es/Digimon/Products/Singles/Official-Tournament-Pack-Events/Upamon-BT1-003
        "cardmarket": {
            "url": "https://www.cardmarket.com/es/Digimon/Products/Singles/Official-Tournament-Pack-Events/digimonName-cardNumber",
            "api_set": "BT-05: Booster Battle Of Omni",
        }
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/5/51/WinnerPackXroxEncounter.png/"
    },
    // Judge Pack 2 --- judgepack2
    {
        "id": null,
        "slug": "judgepack2",
        "name": "Judge Pack 2",
        "release": "Mid January 2023–April 2023",
        // "url": "digimoncardURL/setID-cardID_parallel.png",
        "url": "noCardURL",
        "cards": {
            "ST1-01": "P1",
            "ST2-01": "P1",
            "ST3-01": "P1",
            "ST4-01": "P1",
            "ST5-01": "P1",
            "ST6-01": "P2",
            "ST7-01": "P1",
            "ST8-01": "P1",
            "ST9-01": "P1",
            "ST10-01": "P1",
        }
    },

// March, 2023
    // 2nd Anniversary Set [PB-12E] --- pb12e
    {
        "id": null,
        "slug": "pb12e",
        "name": "2nd Anniversary Set [PB-12E]",
        "release": "March, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT1-025": "P3",
            "BT1-060": "P2",
            "BT1-084": "P5",
            "BT1-107": "P2",
            "BT3-031": "P2",
            "BT3-075": "P2",
            "BT3-091": "P4",
            "BT3-105": "P1", // NO EXIST
            "P-001": "P2",
            "P-002": "P1",
            "P-003": "P1",
            "P-004": "P3",
            "P-005": "P1",
            "P-006": "P1",
            "P-029": "P1",
            "P-030": "P1",
            "BT7-021": "P1",
            "BT7-035": "P1",
            "BT7-046": "P1",
            "BT7-071": "P1",
            "BT7-080": "P3",
            "BT7-081": "P4",
        },
        "info_url": "https://world.digimoncard.com/products/goods/2nd-anniversary-set.php"
    },

// March 11,12,18, 2023
    // 2022 World Championship - Participation --- wc2022
    {
        "id": null,
        "slug": "wc2022",
        "name": "2022 World Championship - Participation",
        "release": "March 11,12,18, 2023",
        "url": null,
        "cards": {
            "BT7-056": "https://world.digimoncard.com/images/event/championship2022/world/popup/img_01.png",
        },
        "info_url": "https://world.digimoncard.com/event/championship2022/world/"
    },
    // 2022 World Championship 3rd Place --- wc2022_3rd
    {
        "id": null,
        "slug": "wc2022_3rd",
        "name": "2022 World Championship - 3rd Place",
        "release": "March 11,12,18, 2023",
        "url": null,
        "cards": {
            "BT7-062": "https://world.digimoncard.com/images/event/championship2022/world/popup/img_02.png",
        },
        "info_url": "https://world.digimoncard.com/event/championship2022/world/"
    },
    // 2022 World Championship 2nd Place --- wc2022_2nd
    {
        "id": null,
        "slug": "wc2022_2nd",
        "name": "2022 World Championship - 2nd Place",
        "release": "March 11,12,18, 2023",
        "url": null,
        "cards": {
            "BT7-064": "https://world.digimoncard.com/images/event/championship2022/world/popup/img_03.png",
        },
        "info_url": "https://world.digimoncard.com/event/championship2022/world/"
    },
    // 2022 World Championship 1st Place --- wc2022_1st
    {
        "id": null,
        "slug": "wc2022_1st",
        "name": "2022 World Championship - 1st Place",
        "release": "March 11,12,18, 2023",
        "url": null,
        "cards": {
            "BT6-111": "https://world.digimoncard.com/images/event/championship2022/world/popup/img_04.png",
        },
        "info_url": "https://world.digimoncard.com/event/championship2022/world/"
    },
    // 2022 World Championship - Special Multi-Region Match --- wc2022_specialmatch
    {
        "id": null,
        "slug": "wc2022_specialmatch",
        "name": "2022 World Championship - Special Multi-Region Match",
        "release": "March 19, 2023",
        "url": null,
        "cards": {
            "BT7-056": "https://world.digimoncard.com/images/event/championship2022/world/popup/img_06.png",
        },
        "info_url": "https://world.digimoncard.com/event/championship2022/world/"
    },

// March 17 – March 23, 2023
    // Advanced Deck Set (ST14) Pre-Release BEELZEMON CUP --- st14_prerelease
    {
        "id": null,
        "slug": "st14_prerelease",
        "name": "Advanced Deck Set (ST14) Pre-Release BEELZEMON CUP",
        "release": "March 17 – March 23, 2023",
        "url": null,
        "cards": {
            "BT6-068": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f3/BT6-068_P2.png",
            "EX2-044": "https://static.wikia.nocookie.net/digimoncardgame/images/1/10/EX2-044_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/pre-release_ST14/",
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1a/Beelzemon_Cup_Participation_Pack.png"
    },

// March 24, 2023
    // Advanced Deck BEELZEMON [ST-14] --- st14
    {
        "id": "ST14",
        "slug": "st14",
        "name": "Advanced Deck BEELZEMON [ST-14]",
        "release": "March 24, 2023",
        "total": 12,
        "url": "digimoncardURL/setID-cardID.png",
        "add_zero": 2,
        "info_url": "https://world.digimoncard.com/products/deck/st-14.php",
        "color": {
            "purple": ["1-12"]
        }
    },
    // Advanced Deck BEELZEMON [ST-14] - Alternatives --- st14_alts
    {
        "id": null,
        "slug": "st14_alts",
        "name": "Advanced Deck BEELZEMON [ST-14] - Alternatives",
        "release": "March 24, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-068": "P2",
            "BT8-079": "P1",
            "EX2-071": "P1",
            "P-077": "P1",
            "ST14-08": "P1",
        }
    },
    // Advanced Deck BEELZEMON [ST-14] - Special Reprints --- st14_spe_rep
    {
        "id": null,
        "slug": "st14_spe_rep",
        "name": "Advanced Deck BEELZEMON [ST-14] - Special Reprints",
        "release": "March 24, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-004": "P3",
            "BT2-111": "P2",
            "BT4-105": "P1",
            "BT9-109": "P1",
            "EX2-039": "P2",
            "P-033": "P2",
            "ST6-01": "P1",
            "ST7-03": "P4",
            "ST8-04": "P4",
        }
    },

// April, 2023
    // Official Tournament April 2023 Beelzemon Special --- ot_beelzemon
    {
        "id": null,
        "slug": "ot_beelzemon",
        "name": "Official Tournament April 2023 Beelzemon Special",
        "release": "April, 2023",
        "url": null,
        "cards": {
            "BT6-068": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fe/BT6-068_P3.png",
            "EX2-044": "https://static.wikia.nocookie.net/digimoncardgame/images/0/06/EX2-044_P3.png",
        }
        // "info_url": "https://world.digimoncard.com/event/pre-release_ST14/",
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1a/Beelzemon_Cup_Participation_Pack.png"
    },

// March-April, 2023
    // Event Pack 4 --- eventpack4
    {
        "id": null,
        "slug": "eventpack4",
        "name": "Event Pack 4",
        "release": "March-April, 2023",
        "url": null,
        "cards": {
            "BT2-070": "https://static.wikia.nocookie.net/digimoncardgame/images/f/ff/BT2-070_P2.png",
            "BT2-086": "https://static.wikia.nocookie.net/digimoncardgame/images/7/73/BT2-086_P1.png",
            "BT2-088": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fb/BT2-088_P1.png",
            "BT3-034": "https://static.wikia.nocookie.net/digimoncardgame/images/0/0c/BT3-034_P1.png",
            "BT3-096": "https://static.wikia.nocookie.net/digimoncardgame/images/6/65/BT3-096_P1.png",
            "BT6-056": "https://static.wikia.nocookie.net/digimoncardgame/images/a/ad/BT6-056_P2.png",
            "BT7-090": "https://static.wikia.nocookie.net/digimoncardgame/images/5/50/BT7-090_P1.png",
            "BT8-092": "https://static.wikia.nocookie.net/digimoncardgame/images/7/73/BT8-092_P1.png",
            "BT9-092": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c0/BT9-092_P1.png",
            "BT10-046": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f1/BT10-046_P1.png",
            "BT10-105": "https://static.wikia.nocookie.net/digimoncardgame/images/1/19/BT10-105_P1.png",
            "BT10-109": "https://static.wikia.nocookie.net/digimoncardgame/images/e/e8/BT10-109_P1.png",
            "EX2-066": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a5/EX2-066_P1.png",
            "EX2-068": "https://static.wikia.nocookie.net/digimoncardgame/images/1/14/EX2-068_P1.png",
            "EX2-070": "https://static.wikia.nocookie.net/digimoncardgame/images/8/8e/EX2-070_P1.png",
            "EX2-072": "https://static.wikia.nocookie.net/digimoncardgame/images/6/69/EX2-072_P1.png",
            "P-042": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a0/P-042_P1.png",
            "ST12-03": "https://static.wikia.nocookie.net/digimoncardgame/images/4/41/ST12-03_P1.png",
        },
        "info_url": "https://world.digimoncard.com/event/regionals2022_september/"
    },
    // Judge Pack 3 --- judgepack3
    {
        "id": null,
        "slug": "judgepack3",
        "name": "Judge Pack 3",
        "release": "March-April, 2023",
        "url": null,
        "cards": {
            "BT6-097": "https://static.wikia.nocookie.net/digimoncardgame/images/4/4c/BT6-097_P1.png",
            "BT6-100": "https://static.wikia.nocookie.net/digimoncardgame/images/1/11/BT6-100_P1.png",
            "BT6-107": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a8/BT6-107_P1.png",
            "BT7-092": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1c/BT7-092_P1.png",
            "BT7-102": "https://static.wikia.nocookie.net/digimoncardgame/images/1/1a/BT7-102_P1.png",
            "BT7-105": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a9/BT7-105_P1.png",
            "BT8-108": "https://static.wikia.nocookie.net/digimoncardgame/images/b/b1/BT8-108_P1.png",
            "BT10-100": "https://static.wikia.nocookie.net/digimoncardgame/images/4/43/BT10-100_P1.png",
            "ST12-15": "https://static.wikia.nocookie.net/digimoncardgame/images/0/0b/ST12-15_P1.png",
            "ST13-16": "https://static.wikia.nocookie.net/digimoncardgame/images/7/75/ST13-16_P1.png",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/8/89/Judge_Pack_3.png"
    },

// April 21 - April 28, 2023
    // Across Time (BT12) Pre-Release Tournaments --- bt12_prerelease
    {
        "id": null,
        "slug": "bt12_prerelease",
        "name": "Across Time (BT12) Pre-Release Tournaments",
        "release": "April 21 - April 28, 2023",
        "url": null,
        "cards": {
            "BT3-058": "https://static.wikia.nocookie.net/digimoncardgame/images/b/b3/BT3-058_P1.png",
            "BT2-039": "https://static.wikia.nocookie.net/digimoncardgame/images/9/99/BT2-039_P1.png",
        },
        "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/9/99/Across_Time_Pre-Release_Pack.png",
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-12/"
    },

// April 28, 2023
    // Booster Across Time [BT12] --- bt12
    {
        "id": "BT12",
        "slug": "bt12",
        "name": "Booster Across Time [BT12]",
        "release": "April 28, 2023",
        "total": 112,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_D.png",
        "add_zero": 3,
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/2/24/BT-10-EN.png/",
        "playmat": "",
        "color": {
            "red": [1,"7-18","87-89","99-100"],
            "blue": [2,"19-27",29,32,90,101,102],
            "blue-green": [28,30,31],
            "yellow": [3,33,35,37,"39-41",44,91,103],
            "yellow-red": [34,38,42,43,92,104],
            "yellow-green": [36],
            "green": [4,"45-54",56,57,93,105,106],
            "green-blue": [55],
            "black": [5,58,60,61,"63-67",69,71,94,95,107],
            "black-red": [59,62,68,70,72,108],
            "purple": [6,"73-79","81-83",85,96,97,109,110],
            "purple-black": [80,84,111],
            "white": [86,98],
            "white-red": [112]
        },
        "override": {
            "url": "bandaitcgplusURL/setID/e_setID-cardID_D_D.png",
            "cards": {
                "BT12-036": ""
            }
        },
    },
    // Booster Across Time [BT12] - Alternatives --- bt12_alts
    {
        "id": null,
        "slug": "bt12_alts",
        "name": "Booster Across Time [BT12] - Alternatives",
        "release": "April 28, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT12-017": "P1",
            "BT12-018": "P1",
            "BT12-029": "P1",
            "BT12-031": "P1",
            "BT12-043": "P1",
            "BT12-057": "P1",
            "BT12-070": "P1",
            "BT12-083": "P1",
            "BT12-085": "P1",
            "BT12-087": "P1",
            "BT12-088": "P1",
            "BT12-089": "P1",
            "BT12-090": "P1",
            "BT12-092": "P1",
            "BT12-095": "P1",
            "BT12-096": "P1",
            "BT12-111": ["P1", "P2"],
            "BT12-112": ["P1", "P2"]
        },
    },
    // Booster Across Time [BT12] - Box Promotion Pack --- bt12_boxpromopack
    {
        "id": null,
        "slug": "bt12_boxpromopack",
        "name": "Booster Across Time [BT12] - Box Promotion Pack",
        "release": "April 28, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-086": "P5",
            "BT12-014": "P1",
            "BT12-041": "P1",
            "BT12-051": "P1",
            "BT12-064": "P1",
            "BT12-077": "P1",
            "BT12-081": "P1",
        },
    },
    // Booster Across Time [BT12] - Limited Card Pack --- bt12_limitedcardpack
    {
        "id": null,
        "slug": "bt12_limitedcardpack",
        "name": "Booster Across Time [BT12] - Limited Card Pack",
        "release": "April 28, 2023",
        "url": "digimoncardURL/setID-cardID.png",
        "cards": {
            "P-066": "",
            "P-067": "",
            "P-068": "",
            "P-069": "",
            "P-070": "",
            "P-071": ""
        },
    },
    // Ultimate Cup 2023 --- ultimatecup_2023
    {
        "id": null,
        "slug": "ultimatecup_2023",
        "name": "Ultimate Cup 2023",
        "release": "March-April, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT12-001": "P1",
            "BT12-007": "P1",
            "BT12-010": "P1",
            "BT12-016": "P1",
            "BT12-018": "P2",
            "BT8-112": "P4",
            "EX2-073": "P2",
        },
        "info_url": "https://world.digimoncard.com/event/ultimate_cup/"
    },
    // 2023 Regionals Participant Set 1 --- regional2023_1_0
    {
        "id": null,
        "slug": "regional2023_1_0",
        "name": "2023 Regionals Participant Set 1",
        "release": "March-April, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-035": "P1",
            "BT4-011": "P3",
            "BT8-013": "P1",
            "EX2-009": "P1",
            "BT12-011": "P1",
            "P-010": "P1",
            "ST9-04": "P1"
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },
    // 2023 Regionals Finalist Set 1 --- regional2023_1_1
    {
        "id": null,
        "slug": "regional2023_1_1",
        "name": "2023 Regionals Finalist Set 1",
        "release": "March-April, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-035": "P2",
            "BT4-011": "P4",
            "BT8-013": "P2",
            "EX2-009": "P2",
            "BT12-011": "P2",
            "P-010": "P2",
            "ST9-04": "P2"
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },
    // 2023 Regionals Champion Set 1 --- regional2023_1_2
    {
        "id": null,
        "slug": "regional2023_1_2",
        "name": "2023 Regionals Champion Set 1",
        "release": "March-April, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT2-035": "P3",
            "BT4-011": "P5",
            "BT8-013": "P3",
            "EX2-009": "P3",
            "BT12-011": "P3",
            "P-010": "P3",
            "ST9-04": "P3"
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },

// Late April - July 2023
    // Official Tournament Pack Vol.9 --- otp9
    {
        "id": null,
        "slug": "ot9",
        "name": "Official Tournament Pack Vol.9",
        "release": "Late April - July 2023",
        "url": null,
        "cards": {
            "BT1-029": "https://static.wikia.nocookie.net/digimoncardgame/images/0/03/BT1-029_P5.png",
            "BT8-023": "https://static.wikia.nocookie.net/digimoncardgame/images/9/9f/BT8-023_P1.png",
            "BT8-024": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f0/BT8-024_P1.png",
            "BT8-048": "https://static.wikia.nocookie.net/digimoncardgame/images/f/fe/BT8-048_P1.png",
            "ST3-04": "https://static.wikia.nocookie.net/digimoncardgame/images/9/95/ST3-04_P4.png",
            "ST10-04": "https://static.wikia.nocookie.net/digimoncardgame/images/2/22/ST10-04_P1.png",

        },
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/1/10/Official_Tournament_Pack_Vol.9.png"
    },
    // Winner Pack Across Time --- wp9
    {
        "id": null,
        "slug": "wp9",
        "name": "Winner Pack -Across Time-",
        "release": "Late April - July 2023",
        "url": null,
        "cards": {
            "BT7-017": "https://static.wikia.nocookie.net/digimoncardgame/images/8/8c/BT7-017_P1.png",
            "P-025": "https://static.wikia.nocookie.net/digimoncardgame/images/b/b8/P-025_P1.png",
            "P-026": "https://static.wikia.nocookie.net/digimoncardgame/images/c/cf/P-026_P1.png",
            "P-027": "https://static.wikia.nocookie.net/digimoncardgame/images/6/60/P-027_P1.png",
        },
    },

// June, 2023
    // Store Championship 2023 Participant Pack --- storechampion_2023_0
    {
        "id": null,
        "slug": "storechampion_2023_0",
        "name": "Store Championship 2023 Participant Pack",
        "release": "June, 2023",
        "url": null,
        "cards": {
            "BT6-082": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f9/BT6-082_P2.png",
            "BT6-084": "https://static.wikia.nocookie.net/digimoncardgame/images/9/95/BT6-084_P2.png",
            "BT10-085": "https://static.wikia.nocookie.net/digimoncardgame/images/5/58/BT10-085_P2.png",
            "BT11-107": "https://static.wikia.nocookie.net/digimoncardgame/images/3/33/BT11-107_P1.png",
            "ST9-14": "https://static.wikia.nocookie.net/digimoncardgame/images/2/26/ST9-14_P1.png",
            "ST10-14": "https://static.wikia.nocookie.net/digimoncardgame/images/5/56/ST10-14_P1.png",
            "ST13-16": "https://static.wikia.nocookie.net/digimoncardgame/images/0/08/ST13-16_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship_2023/"
    },
    // Store Championship 2023 Top 4 Pack --- storechampion_2023_1
    {
        "id": null,
        "slug": "storechampion_2023_1",
        "name": "Store Championship 2023 Top 4 Pack",
        "release": "June, 2023",
        "url": null,
        "cards": {
            "BT6-082": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d5/BT6-082_P3.png",
            "BT6-084": "https://static.wikia.nocookie.net/digimoncardgame/images/0/08/BT6-084_P3.png",
            "BT10-085": "https://static.wikia.nocookie.net/digimoncardgame/images/9/95/BT10-085_P3.png",
            "BT11-107": "https://static.wikia.nocookie.net/digimoncardgame/images/c/ca/BT11-107_P2.png",
            "ST9-14": "https://static.wikia.nocookie.net/digimoncardgame/images/9/95/ST9-14_P2.png",
            "ST10-14": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c4/ST10-14_P2.png",
            "ST13-16": "https://static.wikia.nocookie.net/digimoncardgame/images/2/22/ST13-16_P3.png",
        },
        "info_url": "https://world.digimoncard.com/event/store_championship_2023/"
    },
    // Store Championship 2023 Champion Card --- storechampion_2023_2
    {
        "id": null,
        "slug": "storechampion_2023_2",
        "name": "Store Championship 2023 Champion Card",
        "release": "June, 2023",
        "url": null,
        "cards": {
            "BT6-084": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f8/BT6-084_P4.png"
        },
        "info_url": "https://world.digimoncard.com/event/store_championship_2023/"
    },
    // Tamer Party -Special- --- tp_special
    {
        "id": null,
        "slug": "tp_special",
        "name": "Tamer Party -Special-",
        "release": "June, 2023",
        "url": null,
        "cards": {
            "BT8-038": "https://static.wikia.nocookie.net/digimoncardgame/images/8/80/BT8-038_P2.png",
            "BT12-015": "https://static.wikia.nocookie.net/digimoncardgame/images/5/51/BT12-015_P1.png",
            "BT12-016": "https://static.wikia.nocookie.net/digimoncardgame/images/f/ff/BT12-016_P2.png",
            "BT12-042": "https://static.wikia.nocookie.net/digimoncardgame/images/9/9a/BT12-042_P1.png",
            "BT12-068": "https://static.wikia.nocookie.net/digimoncardgame/images/2/29/BT12-068_P1.png",
        },
        "info_url": "https://world.digimoncard.com/event/tamer_party_sp/",
    },

    // Booster Alternative Being [EX4] --- ex4
    {
        "id": "EX4",
        "slug": "ex4",
        "name": "Booster Alternative Being [EX4]",
        "release": "June 23, 2023",
        "total": 74,
        "url": "bandaitcgplusURL/setID/e_setID-cardID_d.png",
        "add_zero": 3,
        // "pack": "https://static.wikia.nocookie.net/digimoncardgame/images/3/33/EX-3-EN.png/",
        // "playmat": "https://static.wikia.nocookie.net/digimoncardgame/images/6/6d/Playsheet-EX-3-EN.jpg/",
        "color": {
            "red": [12,65],
            "red-yellow": [5,7,9],
            "red-green": [13],
            "red-purple": [6,8,10,11],
            "blue": [1,"14-20",22,67],
            "blue-red": [61,66],
            "blue-black": [21,62],
            "yellow": [23,68],
            "yellow-blue": [24,"26-28",30],
            "yellow-green": [25,29,31],
            "green": [2,"32-34"],
            "green-yellow": [63],
            "green-black": ["35-37"],
            "black": [3,"38-41","43-47",69,73],
            "black-red": [48,51],
            "black-blue": [42,49],
            "black-yellow": [50],
            "purple": [4,52,53,55,56,58,64,70,71],
            "purple-yellow": [74],
            "purple-green": [54,57,59],
            "white": [60,72]
        }
    },
    // Booster Alternative Being [EX4] - Alternatives --- ex4_alts
    {
        "id": null,
        "slug": "ex4_alts",
        "name": "Booster Alternative Being [EX4] - Alternatives",
        "release": "June 23, 2023",
        "url": "bandaitcgplusURL/setID/e_setID-cardID_pparallel_d.png",
        "cards": {
            "EX4-011": "",
            "EX4-012": "",
            "EX4-013": "",
            "EX4-021": "",
            "EX4-022": "",
            "EX4-027": "",
            "EX4-030": "",
            "EX4-033": "",
            "EX4-037": "",
            "EX4-048": "",
            "EX4-049": "",
            "EX4-050": "",
            "EX4-051": "",
            "EX4-053": "",
            "EX4-058": "",
            "EX4-060": ["", "2"],
            "EX4-073": "",
            "EX4-074": "",
        },
    },
    {
        "id": null,
        "slug": "ex4_alts",
        "name": "Booster Alternative Being [EX4] - Alternatives",
        "release": "June 23, 2023",
        "url": "bandaitcgplusURL/EX4/e_EX4_setID-cardID_d.png",
        "cards": {
            "BT5-112": ""
        }
    },
    // Booster Alternative Being [EX4] - Box Topper --- ex4_boxtopper
    {
        "id": null,
        "slug": "ex4_boxtopper",
        "name": "Booster Alternative Being [EX4] - Box Topper",
        "release": "June 23, 2023",
        "url": "bandaitcgplusURL/setID/e_setID-cardID_p_d.png",
        "cards": {
            "EX4-061": "",
            "EX4-062": "",
            "EX4-063": "",
            "EX4-064": "",
            "EX4-066": "",
            "EX4-072": "",
        },
    },

    // Royal Knights Binder Set [PB13] --- pb13
    {
        "id": null,
        "slug": "pb13",
        "name": "Royal Knights Binder Set [PB13]",
        "release": "March, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT5-007": "P4",
            "BT5-020": "P3",
            "BT6-009": "P2",
            "BT9-058": "P1",
            "P-041": "P1",
            "P-043": "P1",
            "ST8-03": "P1",
            "ST9-02": "P1",
        },
        "info_url": "https://world.digimoncard.com/products/goods/royal_knights_binderset.php"
    },

    // Deck Box Set / Beelzemon --- deckbox
    {
        "id": null,
        "slug": "deckbox",
        "name": "Deck Box Set / Beelzemon",
        "release": "June, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "BT3-057": "P2",
            "BT5-044": "P1",
            "BT5-083": "P1",
            "BT6-017": "P1",
            "BT6-065": "P1",
            "EX2-045": "P2",
        },
        "info_url": "https://world.digimoncard.com/products/goods/deck-box-set_beelzemon.php"
    },

    // Tamer Goods Set Angewomon & LadyDevimon [PB14] --- pb14
    {
        "id": null,
        "slug": "pb14",
        "name": "Tamer Goods Set Angewomon & LadyDevimon [PB14]",
        "release": "June, 2023",
        "url": "digimoncardURL/setID-cardID_parallel.png",
        "cards": {
            "ST10-05": "P1",
            "ST10-12": "P1",
        },
        "info_url": "https://world.digimoncard.com/products/goods/tamer-goods-set_PB14.php"
    },

// July 14 - July 20, 2023
    // Versus Royal Knights (BT13) Pre-Release Tournaments --- bt13_prerelease
    {
        "id": null,
        "slug": "bt13_prerelease",
        "name": "Versus Royal Knights (BT13) Pre-Release Tournaments",
        "release": "April 21 - April 28, 2023",
        "url": "noCardURL",
        "cards": {
            "BT8-071": "",
            "P-078": "",
        },
        "info_url": "https://world.digimoncard.com/event/pre-release_BT-13/"
    },
// July, 2023

    // Booster Versus Royal Knights [BT13] --- bt13
    // https://world.digimoncard.com/products/pack/ver13.php

// Mid July - November 2023
    // Official Tournament Pack Vol.10 --- otp10
    {
        "id": null,
        "slug": "ot10",
        "name": "Official Tournament Pack Vol.10",
        "release": "Mid July - November 2023",
        "url": "noCardURL",
        "cards": {
            "P-066": "",
            "P-067": "",
            "P-068": "",
            "P-069": "",
            "P-070": "",
            "P-071": "",
        },
    },
    // Winner Pack Royal Knights --- wp10
    {
        "id": null,
        "slug": "wp9",
        "name": "Winner Pack -Royal Knights-",
        "release": "Mid July - November 2023",
        "url": "noCardURL",
        "cards": {
            "BT8-071": "",
            "P-059": "",
            "P-060": "",
            "P-061": "",
        },
    },

// July-September, 2023
    // 2023 Regionals Participant Set 2 --- regional2023_2_0
    {
        "id": null,
        "slug": "regional2023_2_0",
        "name": "2023 Regionals Participant Set 2",
        "release": "July-September, 2023",
        "url": null,
        "cards": {
            "BT1-021": "https://static.wikia.nocookie.net/digimoncardgame/images/0/07/BT1-021_P1.png",
            "BT3-027": "https://static.wikia.nocookie.net/digimoncardgame/images/6/61/BT3-027_P1.png",
            "BT4-017": "https://static.wikia.nocookie.net/digimoncardgame/images/6/6b/BT4-017_P2.png",
            "BT7-014": "https://static.wikia.nocookie.net/digimoncardgame/images/9/9d/BT7-014_P1.png",
            "BT10-011": "https://static.wikia.nocookie.net/digimoncardgame/images/9/95/BT10-011_P2.png",
            "BT11-015": "https://static.wikia.nocookie.net/digimoncardgame/images/7/7f/BT11-015_P1.png",
            "EX3-062": "https://static.wikia.nocookie.net/digimoncardgame/images/0/07/EX3-062_P1.png"
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },
    // 2023 Regionals Finalist Set 2 --- regional2023_2_1
    {
        "id": null,
        "slug": "regional2023_2_1",
        "name": "2023 Regionals Finalist Set 2",
        "release": "July-September, 2023",
        "url": null,
        "cards": {
            "BT1-021": "https://static.wikia.nocookie.net/digimoncardgame/images/a/a7/BT1-021_P2.png",
            "BT3-027": "https://static.wikia.nocookie.net/digimoncardgame/images/c/c5/BT3-027_P2.png",
            "BT4-017": "https://static.wikia.nocookie.net/digimoncardgame/images/e/ea/BT4-017_P3.png",
            "BT7-014": "https://static.wikia.nocookie.net/digimoncardgame/images/d/d9/BT7-014_P2.png",
            "BT10-011": "https://static.wikia.nocookie.net/digimoncardgame/images/9/99/BT10-011_P3.png",
            "BT11-015": "https://static.wikia.nocookie.net/digimoncardgame/images/0/09/BT11-015_P2.png",
            "EX3-062": "https://static.wikia.nocookie.net/digimoncardgame/images/e/ec/EX3-062_P2.png",
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },
    // 2023 Regionals Champion Set 2 --- regional2023_2_2
    {
        "id": null,
        "slug": "regional2023_2_2",
        "name": "2023 Regionals Champion Set 2",
        "release": "July-September, 2023",
        "url": null,
        "cards": {
            "BT1-021": "https://static.wikia.nocookie.net/digimoncardgame/images/3/39/BT1-021_P3.png",
            "BT3-027": "https://static.wikia.nocookie.net/digimoncardgame/images/8/8c/BT3-027_P3.png",
            "BT4-017": "https://static.wikia.nocookie.net/digimoncardgame/images/4/46/BT4-017_P4.png",
            "BT7-014": "https://static.wikia.nocookie.net/digimoncardgame/images/6/6a/BT7-014_P3.png",
            "BT10-011": "https://static.wikia.nocookie.net/digimoncardgame/images/f/f7/BT10-011_P4.png",
            "BT11-015": "https://static.wikia.nocookie.net/digimoncardgame/images/d/de/BT11-015_P3.png",
            "EX3-062": "https://static.wikia.nocookie.net/digimoncardgame/images/7/79/EX3-062_P3.png"
        },
        "info_url": "https://world.digimoncard.com/event/regionals-2023/"
    },

// September, 2023
    // Resurgence Booster [RB01] --- rb01
    // https://world.digimoncard.com/products/pack/rb-01.php
    // Adventure Box 2 [AB02] --- ab02

// October, 2023
    // Starter Deck Dragon of Courage [ST15] --- st15
    // https://world.digimoncard.com/products/deck/st-15.php
    // Starter Deck Wolf of Friendship [ST16] --- st16
    // https://world.digimoncard.com/products/deck/st-16.php
// November, 2023
    // Double Pack Set [DP-01] --- dp01

    // Gift Box 2023 [GB03] --- gb03

    // Booster Blast Ace [BT14] --- bt14
    // https://world.digimoncard.com/products/pack/ver14.php
];