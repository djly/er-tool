import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Data structure Version 1.0
interface DataState {
    version: string
    data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        characters: any[]; // Replace with actual character type
    }
}

const initialState: DataState = {
    version: "1.0",
    data: {
        "characters": [
        {
                "id": "de6a6367-a7dc-51e2-8447-96983dfad5ad",
                "unitId": "43",
                "slug": "andrew-odd",
                "name": "Andrew [Odd]",
                "rarity": "R",
                "element": "Odd",
                "faction": "Etheria E.O.S.",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, DMG Reduction"
                },
                "skill3Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, AoE"
                }
            },
            {
                "id": "72b3cb17-420d-50a0-888c-06511332e263",
                "unitId": "42",
                "slug": "andrew-reason",
                "name": "Andrew [Reason]",
                "rarity": "R",
                "element": "Reason",
                "faction": "Etheria E.O.S.",
                "skill1Info": {
                    "effects": "Taunt",
                    "tags": "Taunt, Single DMG"
                },
                "skill2Info": {
                    "effects": "Wrathquake",
                    "tags": "PASSIVE, DMG Boost"
                },
                "skill3Info": {
                    "effects": "ATK-",
                    "tags": "ATK-, AoE"
                }
            },
            {
                "id": "54ad5efb-390e-53ff-be47-f355429dfefc",
                "unitId": "46",
                "slug": "asshu",
                "name": "Asshu",
                "rarity": "R",
                "element": "Hollow",
                "faction": "Faltering District",
                "skill1Info": {
                    "effects": "SPD-",
                    "tags": "Slow, Single DMG"
                },
                "skill2Info": {
                    "effects": "DoT",
                    "tags": "AoE, DoT"
                },
                "skill3Info": {
                    "effects": "Silence",
                    "tags": "Silence, AoE"
                }
            },
            {
                "id": "9134e441-2433-5026-97db-b7b74bb7f17f",
                "unitId": "12",
                "slug": "beyontin",
                "name": "Beyontin",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "Etheria E.O.S.",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter+"
                },
                "skill2Info": {
                    "effects": "Underworld Flower",
                    "tags": "CD Reduction, Extra Turn"
                },
                "skill3Info": {
                    "effects": "ATK+, CRIT DMG+, Underworld Flower",
                    "tags": "Buff, Revive, ATK+, CRIT DMG+"
                }
            },
            {
                "id": "3e8d9bca-a833-52fe-8e54-60af44a78628",
                "unitId": "54",
                "slug": "borgne",
                "name": "Borgne",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "Astral Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Lifesteal, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, DMG Boost"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "Passive Ignore, AoE, Dispel"
                }
            },
            {
                "id": "d849daae-d70a-5f75-a4fd-f15b31701729",
                "unitId": "47",
                "slug": "cachi",
                "name": "Cachi",
                "rarity": "R",
                "element": "Reason",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Turn Meter-, Single DMG"
                },
                "skill2Info": {
                    "effects": "ATK+",
                    "tags": "Turn Meter+, ATK+, CD Reduction"
                },
                "skill3Info": {
                    "effects": "Stun",
                    "tags": "AoE Ctrl, Turn Meter-, Stun"
                }
            },
            {
                "id": "1a9e3903-6582-50f2-923a-71267f2175bb",
                "unitId": "41",
                "slug": "cachi-the-guard",
                "name": "Cachi [The Guard]",
                "rarity": "SR",
                "element": "Disorder",
                "faction": "Union",
                "skill1Info": {
                    "effects": "CRIT Rate-",
                    "tags": "Single DMG, Debuff, CRIT Rate-"
                },
                "skill2Info": {
                    "effects": "SPD-",
                    "tags": "Turn Meter-, Debuff, Single DMG, SPD-"
                },
                "skill3Info": {
                    "effects": "DEF+, Immunity",
                    "tags": "Buff, Immunity"
                }
            },
            {
                "id": "8fe1d74d-21d1-573c-a4ee-d08d9088ccbe",
                "unitId": "15",
                "slug": "celince",
                "name": "Celince",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "Hydra Bank",
                "skill1Info": {
                    "effects": "DoT, Silence, Forgetfulness",
                    "tags": "Single DMG, Debuff"
                },
                "skill2Info": {
                    "effects": "Aqua Shield",
                    "tags": "PASSIVE, Shield"
                },
                "skill3Info": {
                    "effects": "ATK-, Forgetfulness",
                    "tags": "ATK-, Forgetfulness, AoE"
                }
            },
            {
                "id": "11b91719-3805-590e-8459-c41897cca653",
                "unitId": "21",
                "slug": "chiaki",
                "name": "Chiaki",
                "rarity": "SR",
                "element": "Reason",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "Origami Guardian",
                    "tags": "Single DMG, Single Heal"
                },
                "skill2Info": {
                    "effects": "Origami Guardian",
                    "tags": "Single Heal, DMG Reduction"
                },
                "skill3Info": {
                    "effects": "Origami Guardian",
                    "tags": "AOE Heal, DMG Reduction"
                }
            },
            {
                "id": "772304ae-edf9-5c37-8831-5b5e1b0ae8d4",
                "unitId": "22",
                "slug": "chiaki-the-echo",
                "name": "Chiaki [The Echo]",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "",
                    "tags": "Purify"
                },
                "skill2Info": {
                    "effects": "ATK+, Ave Maria",
                    "tags": "PASSIVE, ATK+"
                },
                "skill3Info": {
                    "effects": "ATK+, Ave Maria",
                    "tags": "Turn Meter+, Buff, ATK+"
                }
            },
            {
                "id": "b321e5dd-95dc-54dd-8be1-248917937926",
                "unitId": "33",
                "slug": "dinah",
                "name": "Dinah",
                "rarity": "SR",
                "element": "Reason",
                "faction": "Hydra Bank",
                "skill1Info": {
                    "effects": "",
                    "tags": "Steal Turn Meter, Single DMG"
                },
                "skill2Info": {
                    "effects": "Erosion",
                    "tags": "DMG Boost, Single DMG"
                },
                "skill3Info": {
                    "effects": "DEF-, Vulnerable, Erosion",
                    "tags": "Debuff, DEF-, Vulnerable"
                }
            },
            {
                "id": "bad5287b-1268-5801-aa22-2e385f3be8d2",
                "unitId": "29",
                "slug": "diting",
                "name": "Diting",
                "rarity": "SR",
                "element": "Disorder",
                "faction": "Etheria E.O.S.",
                "skill1Info": {
                    "effects": "Vulnerable",
                    "tags": "Vulnerable, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "Single DMG, Follow-up ATK"
                }
            },
            {
                "id": "165a928e-b6ef-5af5-a131-f43b248e3acb",
                "unitId": "2",
                "slug": "dokidoki",
                "name": "DokiDoki",
                "rarity": "SSR",
                "element": "Constant",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "Backup, Data Stream",
                    "tags": "Single DMG, Buff, Purify"
                },
                "skill2Info": {
                    "effects": "Data Stream",
                    "tags": "SPD+, Buff, Turn Meter+"
                },
                "skill3Info": {
                    "effects": "Backup, Data Stream",
                    "tags": "Action Boost, Buff"
                }
            },
            {
                "id": "96e1220d-4013-514f-9fb3-c060c8943669",
                "unitId": "30",
                "slug": "dorothy",
                "name": "Dorothy",
                "rarity": "SR",
                "element": "Constant",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Single Heal"
                },
                "skill2Info": {
                    "effects": "Casket's Remedy",
                    "tags": "Single Heal, Purify, Buff"
                },
                "skill3Info": {
                    "effects": "Casket's Remedy",
                    "tags": "AoE Heal, Buff"
                }
            },
            {
                "id": "96153366-88c4-5a06-8192-2c83c3a15478",
                "unitId": "31",
                "slug": "dorothy-the-wisher",
                "name": "Dorothy [The Wisher]",
                "rarity": "SR",
                "element": "Reason",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter+"
                },
                "skill2Info": {
                    "effects": "CRIT DMG+",
                    "tags": "Turn Meter+, CD Reduction, CRIT DMG+"
                },
                "skill3Info": {
                    "effects": "CRIT Rate+, Life Leech",
                    "tags": "Buff, Purify"
                }
            },
            {
                "id": "735eb603-c8cd-540e-b033-bac11f79530b",
                "unitId": "40",
                "slug": "fangus",
                "name": "Fangus",
                "rarity": "SR",
                "element": "Reason",
                "faction": "Leiboz Life",
                "skill1Info": {
                    "effects": "DoT",
                    "tags": "Single DMG, DoT"
                },
                "skill2Info": {
                    "effects": "Assist",
                    "tags": "PASSIVE, Follow-up ATK"
                },
                "skill3Info": {
                    "effects": "DoT, SPD-",
                    "tags": "DoT, Slow, AoE"
                }
            },
            {
                "id": "b3671eaa-deb2-58a3-bbd2-c47046873088",
                "unitId": "49",
                "slug": "freya",
                "name": "Freya",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "Astral Union",
                "skill1Info": {
                    "effects": "Dreamweave, Nightmare",
                    "tags": "Single DMG, Turn Meter+, Turn Meter-, Purify"
                },
                "skill2Info": {
                    "effects": "DEF+, Dreamweave",
                    "tags": "Buff, DEF+"
                },
                "skill3Info": {
                    "effects": "ATK+, Nightmare",
                    "tags": "AoE, Buff, ATK+, Life Leech, Vulnerable"
                }
            },
            {
                "id": "dda5aa04-5c99-574b-b9f7-fb8ac18cbae2",
                "unitId": "32",
                "slug": "gray",
                "name": "Gray",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter+"
                },
                "skill2Info": {
                    "effects": "CRIT Rate+",
                    "tags": "CRIT Rate+, Extra Turn"
                },
                "skill3Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, AoE"
                }
            },
            {
                "id": "a152fbff-7196-5054-8968-f5772d712a6d",
                "unitId": "6",
                "slug": "heinrich",
                "name": "Heinrich",
                "rarity": "SSR",
                "element": "Disorder",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "Block, Last Words",
                    "tags": "Block, Debuff, Single DMG, Dispel"
                },
                "skill2Info": {
                    "effects": "Wound",
                    "tags": "Heal Block, AoE"
                },
                "skill3Info": {
                    "effects": "Block, Last Words",
                    "tags": "AoE, Block"
                }
            },
            {
                "id": "0b5eafff-a5d0-504b-930e-24cac65e6265",
                "unitId": "3",
                "slug": "helkid",
                "name": "Helkid",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "R.C.S.",
                "skill1Info": {
                    "effects": "Stun, Shroud Barrier",
                    "tags": "Stun, Single DMG"
                },
                "skill2Info": {
                    "effects": "ATK-, Shroud Barrier",
                    "tags": "ATK-, AoE"
                },
                "skill3Info": {
                    "effects": "Shroud Barrier",
                    "tags": "Shield, AoE"
                }
            },
            {
                "id": "78cee060-b746-5fe8-803b-6b4e207fd6f8",
                "unitId": "59",
                "slug": "holden",
                "name": "Holden",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "R.C.S.",
                "skill1Info": {
                    "effects": "DEF-",
                    "tags": "Single DMG, Counterattack, DMG Boost"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Turn Meter-, CD+, Single DMG"
                },
                "skill3Info": {
                    "effects": "ATK-, RES-",
                    "tags": "Dispel, ATK-, RES-"
                }
            },
            {
                "id": "8768edef-b245-5e0b-a95e-d8efb20f4a36",
                "unitId": "16",
                "slug": "hoyan",
                "name": "Hoyan",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "R.C.S.",
                "skill1Info": {
                    "effects": "Wound",
                    "tags": "Heal Block, Single DMG"
                },
                "skill2Info": {
                    "effects": "Fleeting Glance, Soul Ward",
                    "tags": "PASSIVE, Death Prevention"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "DEF Branch, Single DMG"
                }
            },
            {
                "id": "bc4f1e4b-6363-5cdd-9a6f-ac61ecdeaa2b",
                "unitId": "37",
                "slug": "kazami-kazuyo",
                "name": "Kazami Kazuyo",
                "rarity": "SR",
                "element": "Reason",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "SPD-",
                    "tags": "Single DMG, Slow"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Dispel, CD Increase, Single DMG"
                },
                "skill3Info": {
                    "effects": "SPD+",
                    "tags": "CD Reduction, SPD+"
                }
            },
            {
                "id": "b167e938-ff0a-5da7-9396-fdf6cbbf7469",
                "unitId": "38",
                "slug": "kazuyo-the-reverie",
                "name": "Kazuyo [The Reverie]",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "Slumber",
                    "tags": "Single DMG, Slumber"
                },
                "skill2Info": {
                    "effects": "Slumber",
                    "tags": "PASSIVE, Turn Meter-"
                },
                "skill3Info": {
                    "effects": "ATK-, Slumber",
                    "tags": "AoE Ctrl, Slumber, ATK-"
                }
            },
            {
                "id": "b7c068ad-43fe-5e4b-83e1-1c6acc00d9db",
                "unitId": "18",
                "slug": "khloros",
                "name": "Khloros",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "Faltering District",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, CD Reduction"
                },
                "skill2Info": {
                    "effects": "Chainlock",
                    "tags": "Debuff, Single DMG"
                },
                "skill3Info": {
                    "effects": "Doom Toll",
                    "tags": "Follow-up ATK, Single DMG"
                }
            },
            {
                "id": "a8a8ec0a-ac5e-596c-93cc-860ddd5cd02c",
                "unitId": "8",
                "slug": "kloss",
                "name": "Kloss",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "Hacking Progress, Hack In!",
                    "tags": "Debuff, Single DMG, Slow, Vulnerable"
                },
                "skill2Info": {
                    "effects": "Hacking Progress, Hack In!",
                    "tags": "Steal Turn Meter, Turn Meter+, AoE"
                },
                "skill3Info": {
                    "effects": "Hacking Progress, Hack In!, DEF-, SPD-",
                    "tags": "Debuff, DEF-, AoE"
                }
            },
            {
                "id": "c8a4e943-1e13-5247-b027-b9e2bedb9888",
                "unitId": "25",
                "slug": "kraken",
                "name": "Kraken",
                "rarity": "SR",
                "element": "Odd",
                "faction": "Hydra Bank",
                "skill1Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, Single DMG"
                },
                "skill2Info": {
                    "effects": "Deep Frozen",
                    "tags": "Single Ctrl, Freeze"
                },
                "skill3Info": {
                    "effects": "Freeze",
                    "tags": "AoE Ctrl, Turn Meter-, Freeze"
                }
            },
            {
                "id": "e3da7ba8-5085-5f64-a2d5-c48c3fd921d6",
                "unitId": "1",
                "slug": "lian",
                "name": "Lian",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Lifesteal"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "AoE"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "AoE, Steal Turn Meter"
                }
            },
            {
                "id": "bd2dc183-7d7a-5aa5-a5b8-804fcd0e381e",
                "unitId": "5",
                "slug": "lilith",
                "name": "Lilith",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "",
                    "tags": "Extra Turn, Single DMG"
                },
                "skill2Info": {
                    "effects": "SPD-, Graceful Mischief, Stun",
                    "tags": "Slow, Strike Prep-, AoE"
                },
                "skill3Info": {
                    "effects": "Graceful Mischief, Stun",
                    "tags": "AoE Ctrl, Extra Turn, AoE"
                }
            },
            {
                "id": "1304d720-7589-5faf-acd5-d1737a97c01b",
                "unitId": "11",
                "slug": "lily",
                "name": "Lily",
                "rarity": "SSR",
                "element": "Disorder",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "Twin Trick, Assist",
                    "tags": "Turn Meter+, Single DMG"
                },
                "skill2Info": {
                    "effects": "Twin Trick, SPD+, CRIT DMG+",
                    "tags": "Buff, SPD+"
                },
                "skill3Info": {
                    "effects": "Twin Trick",
                    "tags": "AoE, CD Reduction"
                }
            },
            {
                "id": "37a79e07-c791-579d-b98d-1680c431ca61",
                "unitId": "13",
                "slug": "lingluo",
                "name": "Lingluo",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "Whale Prayer",
                    "tags": "Single DMG, Single Heal, Purify"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "AoE Heal"
                },
                "skill3Info": {
                    "effects": "Immunity",
                    "tags": "AoE Heal, Immunity"
                }
            },
            {
                "id": "e025debc-96cb-54ac-93b5-2b3acfd109ea",
                "unitId": "56",
                "slug": "marvell",
                "name": "Marvell",
                "rarity": "SR",
                "element": "Constant",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Steal Turn Meter, Single DMG"
                },
                "skill2Info": {
                    "effects": "Silence",
                    "tags": "Silence, AoE"
                },
                "skill3Info": {
                    "effects": "SPD-, RES-",
                    "tags": "Turn Meter-, Slow, RES-, AoE"
                }
            },
            {
                "id": "0e975981-644b-5734-a86f-7e324ea369a0",
                "unitId": "4",
                "slug": "massiah",
                "name": "Massiah",
                "rarity": "SSR",
                "element": "Constant",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "Vulnerable, Invincibility",
                    "tags": "Vulnerable, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Single DMG"
                },
                "skill3Info": {
                    "effects": "Invincibility",
                    "tags": "AoE, DEF Ignore, Invincibility"
                }
            },
            {
                "id": "1b0caf41-974c-5396-9086-7ef886014cdf",
                "unitId": "53",
                "slug": "mia",
                "name": "Mia",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "Union",
                "skill1Info": {
                    "effects": "Shield",
                    "tags": "Shield, DMG Reduction"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Dispel, AoE, Turn Meter-"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "AoE Heal, CD Reduction"
                }
            },
            {
                "id": "309379d5-3570-5ee1-9914-709780d5caae",
                "unitId": "57",
                "slug": "mio",
                "name": "Mio",
                "rarity": "SSR",
                "element": "Constant",
                "faction": "Union",
                "skill1Info": {
                    "effects": "Freeze",
                    "tags": "Single DMG, Freeze"
                },
                "skill2Info": {
                    "effects": "Freeze, Wound",
                    "tags": "CC, Freeze, Wound"
                },
                "skill3Info": {
                    "effects": "SPD+",
                    "tags": "Steal Turn Meter, SPD+"
                }
            },
            {
                "id": "431ddd14-a791-5cdd-ae0c-c39c59860576",
                "unitId": "58",
                "slug": "mizuki-makoto",
                "name": "Mizuki Makoto",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "",
                    "tags": "Dispel, Single DMG"
                },
                "skill2Info": {
                    "effects": "Retaliation, Wound",
                    "tags": "Wound"
                },
                "skill3Info": {
                    "effects": "DEF+",
                    "tags": "Dispel, DEF+, AOE"
                }
            },
            {
                "id": "850f0e19-58ae-5d4b-ae80-0170dad93485",
                "unitId": "44",
                "slug": "no-41",
                "name": "No. 41",
                "rarity": "R",
                "element": "Constant",
                "faction": "Leiboz Life",
                "skill1Info": {
                    "effects": "Wound",
                    "tags": "Wound, Single DMG"
                },
                "skill2Info": {
                    "effects": "Heal Over Time",
                    "tags": "Single Heal, Heal Over Time"
                },
                "skill3Info": {
                    "effects": "ATK+",
                    "tags": "Turn Meter+, ATK+"
                }
            },
            {
                "id": "cfba3323-28e4-58d1-9d27-fe94b3215359",
                "unitId": "36",
                "slug": "obol",
                "name": "Obol",
                "rarity": "SR",
                "element": "Odd",
                "faction": "Hydra Bank",
                "skill1Info": {
                    "effects": "DoT",
                    "tags": "Single DMG, DoT"
                },
                "skill2Info": {
                    "effects": "DoT",
                    "tags": "Dispel, DoT"
                },
                "skill3Info": {
                    "effects": "DoT, Stun",
                    "tags": "DoT, Stun"
                }
            },
            {
                "id": "6814e3a4-29aa-5399-8ae4-831bbc9c53e9",
                "unitId": "19",
                "slug": "oboro",
                "name": "Oboro",
                "rarity": "SR",
                "element": "Odd",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "SPD-, Bleeding",
                    "tags": "Slow, Single DMG"
                },
                "skill2Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, Single DMG"
                },
                "skill3Info": {
                    "effects": "Bleeding",
                    "tags": "Single DMG, Turn Meter-"
                }
            },
            {
                "id": "1ea9d707-d78d-5c06-b877-87baa78ceb3f",
                "unitId": "24",
                "slug": "rc-77",
                "name": "RC-77",
                "rarity": "SR",
                "element": "Odd",
                "faction": "Leiboz Life",
                "skill1Info": {
                    "effects": "ACC+",
                    "tags": "ACC+, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Turn Meter-, Debuff, Single DMG"
                },
                "skill3Info": {
                    "effects": "Stun, DEF-, ATK-",
                    "tags": "DEF-, ATK-, Single Ctrl"
                }
            },
            {
                "id": "581a382e-051d-57fb-8db5-ae48054f4fa5",
                "unitId": "10",
                "slug": "rahu",
                "name": "Rahu",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "Faltering District",
                "skill1Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, Single DMG"
                },
                "skill2Info": {
                    "effects": "Wrath",
                    "tags": "PASSIVE, Follow-up ATK, Buff, Cleanse"
                },
                "skill3Info": {
                    "effects": "DEF+, Wrath",
                    "tags": "AoE, DEF+"
                }
            },
            {
                "id": "57f0b24a-3a7e-5775-bdeb-8524f7908150",
                "unitId": "50",
                "slug": "rilmocha",
                "name": "Rilmocha",
                "rarity": "SSR",
                "element": "Hollow",
                "faction": "Union",
                "skill1Info": {
                    "effects": "SPD-",
                    "tags": "Single DMG, Slow"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "AoE, Recover"
                },
                "skill3Info": {
                    "effects": "Stun, Splash Damage",
                    "tags": "Single DMG, AoE, Stun, Splash Damage"
                }
            },
            {
                "id": "dbb6a331-a14c-5532-86c9-1bf1efdf5839",
                "unitId": "27",
                "slug": "rin",
                "name": "Rin",
                "rarity": "SR",
                "element": "Reason",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "Taunt",
                    "tags": "Taunt, Single Ctrl"
                },
                "skill2Info": {
                    "effects": "DEF+, Shield",
                    "tags": "DEF+, Shield"
                },
                "skill3Info": {
                    "effects": "Taunt, ATK-",
                    "tags": "AoE Ctrl, Taunt, ATK-"
                }
            },
            {
                "id": "cbfa73bd-4427-5e04-b338-66ea00f72610",
                "unitId": "55",
                "slug": "rin-the-unbowed",
                "name": "Rin [The Unbowed]",
                "rarity": "SR",
                "element": "Odd",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG"
                },
                "skill2Info": {
                    "effects": "SPD-",
                    "tags": "Single DMG, Slow"
                },
                "skill3Info": {
                    "effects": "SPD+",
                    "tags": "AoE, SPD+"
                }
            },
            {
                "id": "7d712d72-d34f-5d24-9289-1f0e6aa6cf4f",
                "unitId": "52",
                "slug": "rosa",
                "name": "Rosa",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter-"
                },
                "skill2Info": {
                    "effects": "Bladeheart Bloom",
                    "tags": "PASSIVE, Debuff"
                },
                "skill3Info": {
                    "effects": "CRIT Rate+, SPD-",
                    "tags": "AoE, Slow, Buff, CRIT Rate+"
                }
            },
            {
                "id": "40f2adcf-3023-5aac-81ed-ef1192f9f0b1",
                "unitId": "28",
                "slug": "sania",
                "name": "Sania",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Turn Meter+, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, AoE Heal, Purify"
                },
                "skill3Info": {
                    "effects": "All-Powerful Protection",
                    "tags": "Revive, Single Heal"
                }
            },
            {
                "id": "bd3c32e8-6d34-5c46-9bcc-ecd7e37c39ed",
                "unitId": "17",
                "slug": "sania-withered-shadow",
                "name": "Sania [Vengeful Thorn]",
                "rarity": "SSR",
                "element": "Disorder",
                "faction": "Leiboz Life",
                "skill1Info": {
                    "effects": "DoT",
                    "tags": "Single DMG, DoT"
                },
                "skill2Info": {
                    "effects": "DoT",
                    "tags": "Debuff, AoE"
                },
                "skill3Info": {
                    "effects": "DoT",
                    "tags": "AoE, Debuff"
                }
            },
            {
                "id": "e586f10c-b6b4-55f4-bd4b-64b900c56185",
                "unitId": "48",
                "slug": "sybil",
                "name": "Sybil",
                "rarity": "R",
                "element": "Odd",
                "faction": "Etheria E.O.S.",
                "skill1Info": {
                    "effects": "SPD+",
                    "tags": "SPD+, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Single DMG"
                },
                "skill3Info": {
                    "effects": "DEF-",
                    "tags": "DEF-, Single DMG"
                }
            },
            {
                "id": "2862e12c-c993-544a-b8ee-6763ee1f9180",
                "unitId": "9",
                "slug": "tiamat",
                "name": "Tiamat",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "Leiboz Life",
                "skill1Info": {
                    "effects": "Bloodshed, Ultimate Form",
                    "tags": "Single DMG, Buff"
                },
                "skill2Info": {
                    "effects": "Bloodshed, Heal Over Time, Shield",
                    "tags": "Shield, Heal Over Time"
                },
                "skill3Info": {
                    "effects": "Taunt",
                    "tags": "Taunt, AoE"
                }
            },
            {
                "id": "5d04a72e-eb15-54f9-9585-fc9d9e1af47d",
                "unitId": "51",
                "slug": "tsukiyo-mi",
                "name": "Tsukiyo Mi",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter+"
                },
                "skill2Info": {
                    "effects": "Silence",
                    "tags": "AoE, Silence, CD Reduction"
                },
                "skill3Info": {
                    "effects": "ATK+, SPD+",
                    "tags": "Buff, Turn Meter+, ATK+, SPD+"
                }
            },
            {
                "id": "db87723a-13e8-5b33-916c-00e81027907f",
                "unitId": "23",
                "slug": "tsutomu",
                "name": "Tsutomu",
                "rarity": "SR",
                "element": "Hollow",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Buff Steal, Single DMG"
                },
                "skill3Info": {
                    "effects": "Wound, Block",
                    "tags": "Single DMG, Heal Block, Block"
                }
            },
            {
                "id": "debdadae-a781-5750-984e-e9c1e2d9f993",
                "unitId": "39",
                "slug": "turandot",
                "name": "Turandot",
                "rarity": "SR",
                "element": "Reason",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "ACC+",
                    "tags": "Dispel, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Turn Meter-, Single DMG"
                },
                "skill3Info": {
                    "effects": "ATK+, DEF+",
                    "tags": "Buff, ATK+, DEF+"
                }
            },
            {
                "id": "b5fd8627-c433-5a79-9de0-15999b2d27a2",
                "unitId": "35",
                "slug": "valerian",
                "name": "Valerian",
                "rarity": "SR",
                "element": "Constant",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "Slumber",
                    "tags": "Single DMG, Slumber"
                },
                "skill2Info": {
                    "effects": "Heal Over Time, Invincibility",
                    "tags": "Invincibility, Heal Over Time"
                },
                "skill3Info": {
                    "effects": "Hazy Dream, Shield, Basic Buff Effect",
                    "tags": "Health EQU, Buff, ATK+, DEF+, SPD+, CRIT Rate+"
                }
            },
            {
                "id": "6e2c3704-310a-5d04-8303-f68d5a16e9fc",
                "unitId": "14",
                "slug": "veronika",
                "name": "Veronika",
                "rarity": "SSR",
                "element": "Reason",
                "faction": "Hydra Bank",
                "skill1Info": {
                    "effects": "ATK-",
                    "tags": "ATK-, Single DMG"
                },
                "skill2Info": {
                    "effects": "Shield",
                    "tags": "AoE, Shield"
                },
                "skill3Info": {
                    "effects": "Soul Ward",
                    "tags": "Buff Steal, Buff, Soul Ward"
                }
            },
            {
                "id": "8d094a9e-ac6b-5b2a-a2e7-78e298235285",
                "unitId": "45",
                "slug": "vice",
                "name": "Vice",
                "rarity": "R",
                "element": "Constant",
                "faction": "Faltering District",
                "skill1Info": {
                    "effects": "Taunt",
                    "tags": "Taunt, Single DMG"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "Single Heal, Purify"
                },
                "skill3Info": {
                    "effects": "ATK-",
                    "tags": "ATK-, Turn Meter-, AoE"
                }
            },
            {
                "id": "b48d0345-21dd-53ef-8739-f9113374648e",
                "unitId": "20",
                "slug": "victor",
                "name": "Victor",
                "rarity": "SR",
                "element": "Disorder",
                "faction": "Faltering District",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Lifesteal"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, DMG Boost, DMG Reduction"
                },
                "skill3Info": {
                    "effects": "Shield",
                    "tags": "Single DMG, Shield"
                }
            },
            {
                "id": "431fd06f-2fb6-5bd5-9725-a35a81f37f09",
                "unitId": "34",
                "slug": "viper",
                "name": "Viper",
                "rarity": "SR",
                "element": "Odd",
                "faction": "Fantasy Club",
                "skill1Info": {
                    "effects": "Serpent Skin, Silence",
                    "tags": "Single DMG, Silence"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, Counterattack"
                },
                "skill3Info": {
                    "effects": "ATK-, SPD-",
                    "tags": "AoE, ATK-, Dispel, SPD-"
                }
            },
            {
                "id": "c1c0b47d-22cd-587d-8b53-b0aac5ae18a8",
                "unitId": "7",
                "slug": "xiada",
                "name": "Xiada",
                "rarity": "SSR",
                "element": "Odd",
                "faction": "Doki Entertainment",
                "skill1Info": {
                    "effects": "Soul Flames",
                    "tags": "Single DMG, Buff Steal"
                },
                "skill2Info": {
                    "effects": "Soul Flames",
                    "tags": "PASSIVE, Buff"
                },
                "skill3Info": {
                    "effects": "DEF-, Soul Flames",
                    "tags": "AoE, DEF-"
                }
            },
            {
                "id": "384cccc2-5060-568b-8b86-691cc48e39d6",
                "unitId": "26",
                "slug": "yang",
                "name": "Yang",
                "rarity": "SR",
                "element": "Odd",
                "faction": "13th High School",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Turn Meter+"
                },
                "skill2Info": {
                    "effects": "ATK+, CRIT Rate+",
                    "tags": "Buff, ATK+, CRIT Rate+"
                },
                "skill3Info": {
                    "effects": "",
                    "tags": "Turn Meter+, Single DMG, Dispel"
                }
            },
            {
                "id": "927c5104-a76e-5676-a383-4cf611011b17",
                "unitId": "60",
                "slug": "yeli",
                "name": "Yeli",
                "rarity": "SSR",
                "element": "Constant",
                "faction": "Union",
                "skill1Info": {
                    "effects": "",
                    "tags": "Single DMG, Buff Steal"
                },
                "skill2Info": {
                    "effects": "",
                    "tags": "PASSIVE, Single DMG"
                },
                "skill3Info": {
                    "effects": "DEF-, CRIT Rate+",
                    "tags": "DEF-, Purify, CRIT Rate+"
                }
            }
        ],
    }
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        temp(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
            // Handle login logic here
            
        },
    },
});

// export const {  } = dataSlice.actions;
export default dataSlice.reducer;