import bwForest from '../assets/bw forest.jpg'
import bwMountains from '../assets/bw mountains.jpg'
import bwPasture from '../assets/bw pasture.jpg'
import bwPlains from '../assets/bw plains.jpg'
import bwVillage from '../assets/bw village.jpg'
import bwMine from '../assets/bw mine.jpg'

const mapData = [
    {
        "_id": "loc_9_9_0",
        "name": {
            "en": "Forest",
            "es": "Bosque",
            "ru": "Лес",
            "ua": "Ліс"
        },
        "type": "plain",
        "x": 9,
        "y": 9,
        "level": 0,
        "description": {
            "en": "A dense forest with tall trees.",
            "es": "Un bosque denso con árboles altos.",
            "ru": "Густой лес с высокими деревьями.",
            "ua": "Густий ліс з високими деревами."
        },
        "pictureLink": bwForest,
        "npcList": [],
        "mobList": ["Wolf", "Bear"],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_9_10_0",
        "name": {
            "en": "Village",
            "es": "Aldea",
            "ru": "Деревня",
            "ua": "Село"
        },
        "type": "village",
        "x": 9,
        "y": 10,
        "level": 0,
        "description": {
            "en": "A small peaceful village.",
            "es": "Una pequeña aldea pacífica.",
            "ru": "Маленькая мирная деревня.",
            "ua": "Маленьке мирне село."
        },
        "pictureLink": bwVillage,
        "npcList": ['npc_9_10_headman', 'npc_9_10_blacksmith'],
        "mobList": [],
        "buildingList": ['b_9_10_smithy'],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_9_11_0",
        "name": {
            "en": 'Pasture',
            "es": 'Pastar',
            "ru": 'Пастбище',
            "ua": 'Пасовище',
        },
        "type": "plain",
        "x": 9,
        "y": 11,
        "level": 1,
        "description": {
            "en": 'Pasture north of Pastoria',
            "es": 'Pasto al norte de Pastoria',
            "ru": 'Пастбище к северу от Пастории',
            "ua": 'Пасовище на північ від Пасторії',
        },
        "pictureLink": bwPasture,
        "npcList": [],
        "mobList": ['wolf'],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_10_9_0",
        "name": {
            "en": "Plain",
            "es": "Llanura",
            "ru": "Равнина",
            "ua": "Рівнина"
        },
        "type": "plain",
        "x": 10,
        "y": 9,
        "level": 0,
        "description": {
            "en": "A vast plain with few trees.",
            "es": "Una vasta llanura con pocos árboles.",
            "ru": "Обширная равнина с редкими деревьями.",
            "ua": "Велика рівнина з рідкісними деревами."
        },
        "pictureLink": bwPlains,
        "npcList": [],
        "mobList": ["Deer", "Rabbit"],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": ["Herbs", "Stone"],
        "passageList": ["loc_9_9_0", "loc_10_10_0", "loc_11_9_0"]
    },
    {
        "_id": "loc_10_10_0",
        "name": {
            "en": 'Pasture',
            "es": 'Pastar',
            "ru": 'Пастбище',
            "ua": 'Пасовище',
        },
        "type": "plain",
        "x": 10,
        "y": 10,
        "level": 0,
        "description": {
            "en": 'Pasture east of Pastoria',
            "es": 'Pasto al este de Pastoria',
            "ru": 'Пастбище к востоку от Пастории',
            "ua": 'Пасовище на схід від Пасторії',
        },
        "pictureLink": bwPasture,
        "npcList": [],
        "mobList": ['wolf'],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_10_11_0",
        "name": {
            "en": 'Pasture',
            "es": 'Pastar',
            "ru": 'Пастбище',
            "ua": 'Пасовище',
        },
        "type": "plain",
        "x": 10,
        "y": 11,
        "level": 2,
        "description": {
            "en": 'Pasture northeast of Pastoria',
            "es": 'Pasto al noreste de Pastoria',
            "ru": 'Пастбище к северо востоку от Пастории',
            "ua": 'Пасовище на північний схід від Пасторії',
        },
        "pictureLink": bwPasture,
        "npcList": [],
        "mobList": ['wolf'],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_11_9_0",
        "name": {
            "en": "Mountain",
            "es": "Montaña",
            "ru": "Гора",
            "ua": "Гора"
        },
        "type": "mine",
        "x": 11,
        "y": 9,
        "level": 0,
        "description": {
            "en": "A tall mountain with rocky paths.",
            "es": "Una alta montaña con caminos rocosos.",
            "ru": "Высокая гора с каменистыми тропами.",
            "ua": "Висока гора з кам'янистими стежками."
        },
        "pictureLink": bwMountains,
        "npcList": [],
        "mobList": [],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_11_10_0",
        "name": {
            "en": 'Mountains',
            "es": 'Montañas',
            "ru": 'Горы',
            "ua": 'Гори',
        },
        "type": "mountain",
        "x": 11,
        "y": 10,
        "level": 1,
        "description": {
            "en": 'Mountain spurs south of the old mine.',
            "es": 'Estribaciones montañosas al sur de la antigua mina.',
            "ru": 'Горные отроги к югу от старой шахты.',
            "ua": 'Гірські відроги на південь від старої шахти.',
        },
        "pictureLink": bwMountains,
        "npcList": [],
        "mobList": ['wolf'],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    },
    {
        "_id": "loc_11_11_0",
        "name": {
            "en": 'Old mine',
            "es": 'Vieja mina',
            "ru": 'Старая шахта',
            "ua": 'Стара шахта',
        },
        "type": "mine",
        "x": 11,
        "y": 11,
        "level": 2,
        "description": {
            "en": 'Copper was once mined here. Now it is abandoned and has become a habitat for rats.',
            "es": 'Aquí se extraía cobre. Ahora está abandonado y se ha convertido en hábitat de ratas.',
            "ru": 'Когда то тут добывали медь. Сейчас заброшена и стала обиталищем крыс.',
            "ua": 'Колись тут добували мідь. Зараз покинута і стала житлом щурів.',
        },
        "pictureLink": bwMine,
        "npcList": [],
        "mobList": ['rat'],
        "buildingList": [],
        "randomQuestList": [],
        "resNodeList": [],
        "passageList": []
    }
];

export default mapData;