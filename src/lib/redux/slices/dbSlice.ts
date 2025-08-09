import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Data structure Version 1.0
interface DBState {
    version: string
    data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        characters: any[]; // Replace with actual character type
    }
}

const initialState: DBState = {
    version: "1.1",
    data: {
        "characters": [
                {
                    "id": "25e722cf-2fc1-5909-a229-bb447745de15",
                    "unitId": "64",
                    "slug": "nilu-sr",
                    "name": "Nilu",
                    "rarity": "SR",
                    "element": "Disorder",
                    "faction": "Etheria E.O.S.",
                    "isNew": true,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/c7954390fbd5d78d31e9fa21b5c7380c/60b4d/Nell_sm.webp",
                                "srcSet": "/static/c7954390fbd5d78d31e9fa21b5c7380c/e73fe/Nell_sm.webp 40w,\n/static/c7954390fbd5d78d31e9fa21b5c7380c/61ca6/Nell_sm.webp 80w,\n/static/c7954390fbd5d78d31e9fa21b5c7380c/60b4d/Nell_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/a863984fa53a67c125ef790aa381918f/b26e2/nell_card.webp",
                                "srcSet": "/static/a863984fa53a67c125ef790aa381918f/84550/nell_card.webp 94w,\n/static/a863984fa53a67c125ef790aa381918f/34f80/nell_card.webp 187w,\n/static/a863984fa53a67c125ef790aa381918f/b26e2/nell_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
                    }
                },
                {
                    "id": "302f04d2-bb71-5b19-8c1a-325ef228e8dc",
                    "unitId": "63",
                    "slug": "liliam",
                    "name": "Liliam",
                    "rarity": "SSR",
                    "element": "Disorder",
                    "faction": "Etheria E.O.S.",
                    "isNew": true,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181828",
                            "images": {
                            "fallback": {
                                "src": "/static/4666f2d50ce24d8a98740eb05a7db195/60b4d/liliam_sm.webp",
                                "srcSet": "/static/4666f2d50ce24d8a98740eb05a7db195/e73fe/liliam_sm.webp 40w,\n/static/4666f2d50ce24d8a98740eb05a7db195/61ca6/liliam_sm.webp 80w,\n/static/4666f2d50ce24d8a98740eb05a7db195/60b4d/liliam_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181828",
                            "images": {
                            "fallback": {
                                "src": "/static/4fe40f05ba40e9207e6525f32a38fe48/b26e2/liliam_card.webp",
                                "srcSet": "/static/4fe40f05ba40e9207e6525f32a38fe48/84550/liliam_card.webp 94w,\n/static/4fe40f05ba40e9207e6525f32a38fe48/34f80/liliam_card.webp 187w,\n/static/4fe40f05ba40e9207e6525f32a38fe48/b26e2/liliam_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
                    }
                },
                {
                    "id": "9f36f176-fa6f-58ed-acb2-960130f19b93",
                    "unitId": "62",
                    "slug": "nahor",
                    "name": "Nahor",
                    "rarity": "SSR",
                    "element": "Odd",
                    "faction": "Etheria E.O.S.",
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/4a06fd0ee3570a2aef04820f8393e037/60b4d/nahor_sm.webp",
                                "srcSet": "/static/4a06fd0ee3570a2aef04820f8393e037/e73fe/nahor_sm.webp 40w,\n/static/4a06fd0ee3570a2aef04820f8393e037/61ca6/nahor_sm.webp 80w,\n/static/4a06fd0ee3570a2aef04820f8393e037/60b4d/nahor_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/fb2eecba59fb60cfe6ef96ae2b2426b9/b26e2/nahor_card.webp",
                                "srcSet": "/static/fb2eecba59fb60cfe6ef96ae2b2426b9/84550/nahor_card.webp 94w,\n/static/fb2eecba59fb60cfe6ef96ae2b2426b9/34f80/nahor_card.webp 187w,\n/static/fb2eecba59fb60cfe6ef96ae2b2426b9/b26e2/nahor_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/a5eef6f1bad48b9870ba440fba9e8b3a/60b4d/cachi_sm.webp",
                                "srcSet": "/static/a5eef6f1bad48b9870ba440fba9e8b3a/e73fe/cachi_sm.webp 40w,\n/static/a5eef6f1bad48b9870ba440fba9e8b3a/61ca6/cachi_sm.webp 80w,\n/static/a5eef6f1bad48b9870ba440fba9e8b3a/60b4d/cachi_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/8b23da5a6334414e0970ec4080950849/b26e2/cachi_card.webp",
                                "srcSet": "/static/8b23da5a6334414e0970ec4080950849/84550/cachi_card.webp 94w,\n/static/8b23da5a6334414e0970ec4080950849/34f80/cachi_card.webp 187w,\n/static/8b23da5a6334414e0970ec4080950849/b26e2/cachi_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/35220aa0578ff7880640adbd62597973/60b4d/no41_sm.webp",
                                "srcSet": "/static/35220aa0578ff7880640adbd62597973/e73fe/no41_sm.webp 40w,\n/static/35220aa0578ff7880640adbd62597973/61ca6/no41_sm.webp 80w,\n/static/35220aa0578ff7880640adbd62597973/60b4d/no41_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/08b951ab2235a44a3be5381115a40194/b26e2/no41-card.webp",
                                "srcSet": "/static/08b951ab2235a44a3be5381115a40194/84550/no41-card.webp 94w,\n/static/08b951ab2235a44a3be5381115a40194/34f80/no41-card.webp 187w,\n/static/08b951ab2235a44a3be5381115a40194/b26e2/no41-card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#484858",
                            "images": {
                            "fallback": {
                                "src": "/static/2b9740519608498839cf24f096194225/60b4d/sybil_sm.webp",
                                "srcSet": "/static/2b9740519608498839cf24f096194225/e73fe/sybil_sm.webp 40w,\n/static/2b9740519608498839cf24f096194225/61ca6/sybil_sm.webp 80w,\n/static/2b9740519608498839cf24f096194225/60b4d/sybil_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/1dbe330a1d5de583e96dfc0645d8cfa8/b26e2/sybil_card.webp",
                                "srcSet": "/static/1dbe330a1d5de583e96dfc0645d8cfa8/84550/sybil_card.webp 94w,\n/static/1dbe330a1d5de583e96dfc0645d8cfa8/34f80/sybil_card.webp 187w,\n/static/1dbe330a1d5de583e96dfc0645d8cfa8/b26e2/sybil_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#e8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/df69ed2807f9a3d23467973a7dfaddb7/60b4d/mizuki_sm.webp",
                                "srcSet": "/static/df69ed2807f9a3d23467973a7dfaddb7/e73fe/mizuki_sm.webp 40w,\n/static/df69ed2807f9a3d23467973a7dfaddb7/61ca6/mizuki_sm.webp 80w,\n/static/df69ed2807f9a3d23467973a7dfaddb7/60b4d/mizuki_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/59bbe5c9e08ebd124ad21db708918620/b26e2/mizuki_car.webp",
                                "srcSet": "/static/59bbe5c9e08ebd124ad21db708918620/84550/mizuki_car.webp 94w,\n/static/59bbe5c9e08ebd124ad21db708918620/34f80/mizuki_car.webp 187w,\n/static/59bbe5c9e08ebd124ad21db708918620/b26e2/mizuki_car.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/075fccac775bf5b99800eff2d1d88b06/60b4d/marvell_sm.webp",
                                "srcSet": "/static/075fccac775bf5b99800eff2d1d88b06/e73fe/marvell_sm.webp 40w,\n/static/075fccac775bf5b99800eff2d1d88b06/61ca6/marvell_sm.webp 80w,\n/static/075fccac775bf5b99800eff2d1d88b06/60b4d/marvell_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/c6aa8cb24cdff80917dcde14d823b18d/b26e2/marvell_card.webp",
                                "srcSet": "/static/c6aa8cb24cdff80917dcde14d823b18d/84550/marvell_card.webp 94w,\n/static/c6aa8cb24cdff80917dcde14d823b18d/34f80/marvell_card.webp 187w,\n/static/c6aa8cb24cdff80917dcde14d823b18d/b26e2/marvell_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181828",
                            "images": {
                            "fallback": {
                                "src": "/static/9415af73bf0bfa8bea0bc0e17b2a1525/60b4d/Tsutomu_sm.webp",
                                "srcSet": "/static/9415af73bf0bfa8bea0bc0e17b2a1525/e73fe/Tsutomu_sm.webp 40w,\n/static/9415af73bf0bfa8bea0bc0e17b2a1525/61ca6/Tsutomu_sm.webp 80w,\n/static/9415af73bf0bfa8bea0bc0e17b2a1525/60b4d/Tsutomu_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8d8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/c735a7c3002267bbf62c4404d751d09d/b26e2/tsutomu_card.webp",
                                "srcSet": "/static/c735a7c3002267bbf62c4404d751d09d/84550/tsutomu_card.webp 94w,\n/static/c735a7c3002267bbf62c4404d751d09d/34f80/tsutomu_card.webp 187w,\n/static/c735a7c3002267bbf62c4404d751d09d/b26e2/tsutomu_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/64873b6b1a6c80aaf2b4ea1a78e0c24d/60b4d/rin_sm.webp",
                                "srcSet": "/static/64873b6b1a6c80aaf2b4ea1a78e0c24d/e73fe/rin_sm.webp 40w,\n/static/64873b6b1a6c80aaf2b4ea1a78e0c24d/61ca6/rin_sm.webp 80w,\n/static/64873b6b1a6c80aaf2b4ea1a78e0c24d/60b4d/rin_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/a764f9ab956040fd3abf3ecf0c925069/b26e2/rin_card.webp",
                                "srcSet": "/static/a764f9ab956040fd3abf3ecf0c925069/84550/rin_card.webp 94w,\n/static/a764f9ab956040fd3abf3ecf0c925069/34f80/rin_card.webp 187w,\n/static/a764f9ab956040fd3abf3ecf0c925069/b26e2/rin_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/a2fdb197f05ee4fffb23ef2ebb3edb39/60b4d/chiaki_sm.webp",
                                "srcSet": "/static/a2fdb197f05ee4fffb23ef2ebb3edb39/e73fe/chiaki_sm.webp 40w,\n/static/a2fdb197f05ee4fffb23ef2ebb3edb39/61ca6/chiaki_sm.webp 80w,\n/static/a2fdb197f05ee4fffb23ef2ebb3edb39/60b4d/chiaki_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/cf167f24a4d210ec66f4e9e6e8282acd/b26e2/chiaki_card.webp",
                                "srcSet": "/static/cf167f24a4d210ec66f4e9e6e8282acd/84550/chiaki_card.webp 94w,\n/static/cf167f24a4d210ec66f4e9e6e8282acd/34f80/chiaki_card.webp 187w,\n/static/cf167f24a4d210ec66f4e9e6e8282acd/b26e2/chiaki_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/696281091353313bffec87f4ce06113f/60b4d/gray_sm.webp",
                                "srcSet": "/static/696281091353313bffec87f4ce06113f/e73fe/gray_sm.webp 40w,\n/static/696281091353313bffec87f4ce06113f/61ca6/gray_sm.webp 80w,\n/static/696281091353313bffec87f4ce06113f/60b4d/gray_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/b3bb4ef190e0f1b0c120d55889ff015b/b26e2/gray_card.webp",
                                "srcSet": "/static/b3bb4ef190e0f1b0c120d55889ff015b/84550/gray_card.webp 94w,\n/static/b3bb4ef190e0f1b0c120d55889ff015b/34f80/gray_card.webp 187w,\n/static/b3bb4ef190e0f1b0c120d55889ff015b/b26e2/gray_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
                    }
                },
                {
                    "id": "0853a65a-d881-5c8a-8ca1-29ee1b84ecc9",
                    "unitId": "61",
                    "slug": "fuqiu",
                    "name": "Fuqiu",
                    "rarity": "SSR",
                    "element": "Hollow",
                    "faction": "Doki Entertainment",
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#a89888",
                            "images": {
                            "fallback": {
                                "src": "/static/2b3d24a46c794e5750c4236166909d45/60b4d/fuqiu_sm.webp",
                                "srcSet": "/static/2b3d24a46c794e5750c4236166909d45/e73fe/fuqiu_sm.webp 40w,\n/static/2b3d24a46c794e5750c4236166909d45/61ca6/fuqiu_sm.webp 80w,\n/static/2b3d24a46c794e5750c4236166909d45/60b4d/fuqiu_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/c0edf310fe6916e098fad1dce9cc7e3b/b26e2/fuqiu_card.webp",
                                "srcSet": "/static/c0edf310fe6916e098fad1dce9cc7e3b/84550/fuqiu_card.webp 94w,\n/static/c0edf310fe6916e098fad1dce9cc7e3b/34f80/fuqiu_card.webp 187w,\n/static/c0edf310fe6916e098fad1dce9cc7e3b/b26e2/fuqiu_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8b8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/426ea8be12df15030c0ef6ebb82603d7/60b4d/rilmocha_sm.webp",
                                "srcSet": "/static/426ea8be12df15030c0ef6ebb82603d7/e73fe/rilmocha_sm.webp 40w,\n/static/426ea8be12df15030c0ef6ebb82603d7/61ca6/rilmocha_sm.webp 80w,\n/static/426ea8be12df15030c0ef6ebb82603d7/60b4d/rilmocha_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/a556c4febd93d917c8ec904b2efc3c3d/b26e2/Rilmocha_card.webp",
                                "srcSet": "/static/a556c4febd93d917c8ec904b2efc3c3d/84550/Rilmocha_card.webp 94w,\n/static/a556c4febd93d917c8ec904b2efc3c3d/34f80/Rilmocha_card.webp 187w,\n/static/a556c4febd93d917c8ec904b2efc3c3d/b26e2/Rilmocha_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/a38eeade4e5def428eb70dcab803c883/60b4d/rahu_sm.webp",
                                "srcSet": "/static/a38eeade4e5def428eb70dcab803c883/e73fe/rahu_sm.webp 40w,\n/static/a38eeade4e5def428eb70dcab803c883/61ca6/rahu_sm.webp 80w,\n/static/a38eeade4e5def428eb70dcab803c883/60b4d/rahu_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/f6bc0e2c3aceb3e4e3578ccc977319cd/b26e2/Rahu_card.webp",
                                "srcSet": "/static/f6bc0e2c3aceb3e4e3578ccc977319cd/84550/Rahu_card.webp 94w,\n/static/f6bc0e2c3aceb3e4e3578ccc977319cd/34f80/Rahu_card.webp 187w,\n/static/f6bc0e2c3aceb3e4e3578ccc977319cd/b26e2/Rahu_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/94762562457647dcf3e10129bba6125f/60b4d/Khloros_sm.webp",
                                "srcSet": "/static/94762562457647dcf3e10129bba6125f/e73fe/Khloros_sm.webp 40w,\n/static/94762562457647dcf3e10129bba6125f/61ca6/Khloros_sm.webp 80w,\n/static/94762562457647dcf3e10129bba6125f/60b4d/Khloros_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/25624bf97101642e9feaed90bfada5e1/b26e2/Khloros_card.webp",
                                "srcSet": "/static/25624bf97101642e9feaed90bfada5e1/84550/Khloros_card.webp 94w,\n/static/25624bf97101642e9feaed90bfada5e1/34f80/Khloros_card.webp 187w,\n/static/25624bf97101642e9feaed90bfada5e1/b26e2/Khloros_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/07f3987f8f3dd6374d4f98f7809c2b27/60b4d/Helkid_sm.webp",
                                "srcSet": "/static/07f3987f8f3dd6374d4f98f7809c2b27/e73fe/Helkid_sm.webp 40w,\n/static/07f3987f8f3dd6374d4f98f7809c2b27/61ca6/Helkid_sm.webp 80w,\n/static/07f3987f8f3dd6374d4f98f7809c2b27/60b4d/Helkid_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/9169cfb44ababa5eb0b31fdb9c8a5e5e/b26e2/Helkid_card.webp",
                                "srcSet": "/static/9169cfb44ababa5eb0b31fdb9c8a5e5e/84550/Helkid_card.webp 94w,\n/static/9169cfb44ababa5eb0b31fdb9c8a5e5e/34f80/Helkid_card.webp 187w,\n/static/9169cfb44ababa5eb0b31fdb9c8a5e5e/b26e2/Helkid_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/8bbb339fe13a401469afbe7b0f62e3c9/60b4d/holden_sm.webp",
                                "srcSet": "/static/8bbb339fe13a401469afbe7b0f62e3c9/e73fe/holden_sm.webp 40w,\n/static/8bbb339fe13a401469afbe7b0f62e3c9/61ca6/holden_sm.webp 80w,\n/static/8bbb339fe13a401469afbe7b0f62e3c9/60b4d/holden_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/8323a051af4f46e5a8a52cf23ec78242/b26e2/holden_card.webp",
                                "srcSet": "/static/8323a051af4f46e5a8a52cf23ec78242/84550/holden_card.webp 94w,\n/static/8323a051af4f46e5a8a52cf23ec78242/34f80/holden_card.webp 187w,\n/static/8323a051af4f46e5a8a52cf23ec78242/b26e2/holden_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383838",
                            "images": {
                            "fallback": {
                                "src": "/static/ddce12840c8a219411be0574c24d57e3/60b4d/RC-77_Sm.webp",
                                "srcSet": "/static/ddce12840c8a219411be0574c24d57e3/e73fe/RC-77_Sm.webp 40w,\n/static/ddce12840c8a219411be0574c24d57e3/61ca6/RC-77_Sm.webp 80w,\n/static/ddce12840c8a219411be0574c24d57e3/60b4d/RC-77_Sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/f0837833b16a1d257220383e3ac7037f/b26e2/RC-77_Card.webp",
                                "srcSet": "/static/f0837833b16a1d257220383e3ac7037f/84550/RC-77_Card.webp 94w,\n/static/f0837833b16a1d257220383e3ac7037f/34f80/RC-77_Card.webp 187w,\n/static/f0837833b16a1d257220383e3ac7037f/b26e2/RC-77_Card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/ab7feef86ef24687013471707ab5e490/60b4d/vice_sm.webp",
                                "srcSet": "/static/ab7feef86ef24687013471707ab5e490/e73fe/vice_sm.webp 40w,\n/static/ab7feef86ef24687013471707ab5e490/61ca6/vice_sm.webp 80w,\n/static/ab7feef86ef24687013471707ab5e490/60b4d/vice_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/143a2178d4bd6014703dde1a8e3d14ab/b26e2/vice_card.webp",
                                "srcSet": "/static/143a2178d4bd6014703dde1a8e3d14ab/84550/vice_card.webp 94w,\n/static/143a2178d4bd6014703dde1a8e3d14ab/34f80/vice_card.webp 187w,\n/static/143a2178d4bd6014703dde1a8e3d14ab/b26e2/vice_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/ba54d6177ed7352c2371a51a14703043/60b4d/yeli_sm.webp",
                                "srcSet": "/static/ba54d6177ed7352c2371a51a14703043/e73fe/yeli_sm.webp 40w,\n/static/ba54d6177ed7352c2371a51a14703043/61ca6/yeli_sm.webp 80w,\n/static/ba54d6177ed7352c2371a51a14703043/60b4d/yeli_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#484858",
                            "images": {
                            "fallback": {
                                "src": "/static/bd87fc6f501f53bbd5f3cfc90af2fb04/b26e2/yeli_card.webp",
                                "srcSet": "/static/bd87fc6f501f53bbd5f3cfc90af2fb04/84550/yeli_card.webp 94w,\n/static/bd87fc6f501f53bbd5f3cfc90af2fb04/34f80/yeli_card.webp 187w,\n/static/bd87fc6f501f53bbd5f3cfc90af2fb04/b26e2/yeli_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#b8a8b8",
                            "images": {
                            "fallback": {
                                "src": "/static/c2ac9747914c9b78ae28b733a84c7e6a/60b4d/Hoyan_sm.webp",
                                "srcSet": "/static/c2ac9747914c9b78ae28b733a84c7e6a/e73fe/Hoyan_sm.webp 40w,\n/static/c2ac9747914c9b78ae28b733a84c7e6a/61ca6/Hoyan_sm.webp 80w,\n/static/c2ac9747914c9b78ae28b733a84c7e6a/60b4d/Hoyan_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/6c25f760954e9f37b4e73d987d00ae87/b26e2/Hoyan_card.webp",
                                "srcSet": "/static/6c25f760954e9f37b4e73d987d00ae87/84550/Hoyan_card.webp 94w,\n/static/6c25f760954e9f37b4e73d987d00ae87/34f80/Hoyan_card.webp 187w,\n/static/6c25f760954e9f37b4e73d987d00ae87/b26e2/Hoyan_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/03ed869f8f69ed77398eeaebb1410bba/60b4d/dokidoki_sm.webp",
                                "srcSet": "/static/03ed869f8f69ed77398eeaebb1410bba/e73fe/dokidoki_sm.webp 40w,\n/static/03ed869f8f69ed77398eeaebb1410bba/61ca6/dokidoki_sm.webp 80w,\n/static/03ed869f8f69ed77398eeaebb1410bba/60b4d/dokidoki_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/89ca4702e52c53f2122620c18424827a/b26e2/Dokidoki_card.webp",
                                "srcSet": "/static/89ca4702e52c53f2122620c18424827a/84550/Dokidoki_card.webp 94w,\n/static/89ca4702e52c53f2122620c18424827a/34f80/Dokidoki_card.webp 187w,\n/static/89ca4702e52c53f2122620c18424827a/b26e2/Dokidoki_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8d8a8",
                            "images": {
                            "fallback": {
                                "src": "/static/0ef9cde6dff5b8bb5ee8514dcf84df48/60b4d/kazuyo_sm.webp",
                                "srcSet": "/static/0ef9cde6dff5b8bb5ee8514dcf84df48/e73fe/kazuyo_sm.webp 40w,\n/static/0ef9cde6dff5b8bb5ee8514dcf84df48/61ca6/kazuyo_sm.webp 80w,\n/static/0ef9cde6dff5b8bb5ee8514dcf84df48/60b4d/kazuyo_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383838",
                            "images": {
                            "fallback": {
                                "src": "/static/c093845f1e9fc1961102370b0fc8d360/b26e2/kauzyo_card.webp",
                                "srcSet": "/static/c093845f1e9fc1961102370b0fc8d360/84550/kauzyo_card.webp 94w,\n/static/c093845f1e9fc1961102370b0fc8d360/34f80/kauzyo_card.webp 187w,\n/static/c093845f1e9fc1961102370b0fc8d360/b26e2/kauzyo_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#282828",
                            "images": {
                            "fallback": {
                                "src": "/static/4f1f6a4466cbc93ba1419a236ff36899/60b4d/borgne_sm.webp",
                                "srcSet": "/static/4f1f6a4466cbc93ba1419a236ff36899/e73fe/borgne_sm.webp 40w,\n/static/4f1f6a4466cbc93ba1419a236ff36899/61ca6/borgne_sm.webp 80w,\n/static/4f1f6a4466cbc93ba1419a236ff36899/60b4d/borgne_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/520bffefa474f9a854a74fada0dc6511/b26e2/borgne_card.webp",
                                "srcSet": "/static/520bffefa474f9a854a74fada0dc6511/84550/borgne_card.webp 94w,\n/static/520bffefa474f9a854a74fada0dc6511/34f80/borgne_card.webp 187w,\n/static/520bffefa474f9a854a74fada0dc6511/b26e2/borgne_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#888898",
                            "images": {
                            "fallback": {
                                "src": "/static/4a74eac42479a635cb215f198a927990/60b4d/mio_sm.webp",
                                "srcSet": "/static/4a74eac42479a635cb215f198a927990/e73fe/mio_sm.webp 40w,\n/static/4a74eac42479a635cb215f198a927990/61ca6/mio_sm.webp 80w,\n/static/4a74eac42479a635cb215f198a927990/60b4d/mio_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/4288b00dd0d87bcddf232a9a91e4a52f/b26e2/Mio_card_2.webp",
                                "srcSet": "/static/4288b00dd0d87bcddf232a9a91e4a52f/84550/Mio_card_2.webp 94w,\n/static/4288b00dd0d87bcddf232a9a91e4a52f/34f80/Mio_card_2.webp 187w,\n/static/4288b00dd0d87bcddf232a9a91e4a52f/b26e2/Mio_card_2.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/d56ac0a2971e2c8b0d360225861a9205/60b4d/Oboro_sm.webp",
                                "srcSet": "/static/d56ac0a2971e2c8b0d360225861a9205/e73fe/Oboro_sm.webp 40w,\n/static/d56ac0a2971e2c8b0d360225861a9205/61ca6/Oboro_sm.webp 80w,\n/static/d56ac0a2971e2c8b0d360225861a9205/60b4d/Oboro_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/024abbcccdef629a1abe2f68a20d92d6/b26e2/Oboro_card.webp",
                                "srcSet": "/static/024abbcccdef629a1abe2f68a20d92d6/84550/Oboro_card.webp 94w,\n/static/024abbcccdef629a1abe2f68a20d92d6/34f80/Oboro_card.webp 187w,\n/static/024abbcccdef629a1abe2f68a20d92d6/b26e2/Oboro_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/4a19aab6f6e4be9d12b41f95acde341f/60b4d/Kazami_sm.webp",
                                "srcSet": "/static/4a19aab6f6e4be9d12b41f95acde341f/e73fe/Kazami_sm.webp 40w,\n/static/4a19aab6f6e4be9d12b41f95acde341f/61ca6/Kazami_sm.webp 80w,\n/static/4a19aab6f6e4be9d12b41f95acde341f/60b4d/Kazami_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#586858",
                            "images": {
                            "fallback": {
                                "src": "/static/b3a0a30a495b279be8a0eb9b884c3510/b26e2/kazami_card.webp",
                                "srcSet": "/static/b3a0a30a495b279be8a0eb9b884c3510/84550/kazami_card.webp 94w,\n/static/b3a0a30a495b279be8a0eb9b884c3510/34f80/kazami_card.webp 187w,\n/static/b3a0a30a495b279be8a0eb9b884c3510/b26e2/kazami_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8d8a8",
                            "images": {
                            "fallback": {
                                "src": "/static/c25b1b09ae6990e90b27ad9f2163474a/60b4d/cachi-guard_sm.webp",
                                "srcSet": "/static/c25b1b09ae6990e90b27ad9f2163474a/e73fe/cachi-guard_sm.webp 40w,\n/static/c25b1b09ae6990e90b27ad9f2163474a/61ca6/cachi-guard_sm.webp 80w,\n/static/c25b1b09ae6990e90b27ad9f2163474a/60b4d/cachi-guard_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/4dd70a333ca2721978eff9c91ccb585a/b26e2/cachi-guard_card.webp",
                                "srcSet": "/static/4dd70a333ca2721978eff9c91ccb585a/84550/cachi-guard_card.webp 94w,\n/static/4dd70a333ca2721978eff9c91ccb585a/34f80/cachi-guard_card.webp 187w,\n/static/4dd70a333ca2721978eff9c91ccb585a/b26e2/cachi-guard_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/7bccd1a501cba448cb34ae6ea8d879af/60b4d/dorothy-wisher_sm.webp",
                                "srcSet": "/static/7bccd1a501cba448cb34ae6ea8d879af/e73fe/dorothy-wisher_sm.webp 40w,\n/static/7bccd1a501cba448cb34ae6ea8d879af/61ca6/dorothy-wisher_sm.webp 80w,\n/static/7bccd1a501cba448cb34ae6ea8d879af/60b4d/dorothy-wisher_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/3a38ef5038c3cc7ad83f998bfa96ac06/b26e2/dorothy-wisher_card.webp",
                                "srcSet": "/static/3a38ef5038c3cc7ad83f998bfa96ac06/84550/dorothy-wisher_card.webp 94w,\n/static/3a38ef5038c3cc7ad83f998bfa96ac06/34f80/dorothy-wisher_card.webp 187w,\n/static/3a38ef5038c3cc7ad83f998bfa96ac06/b26e2/dorothy-wisher_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/7c5a70aaa2160cff78f6768e31181092/60b4d/dorothy_sm.webp",
                                "srcSet": "/static/7c5a70aaa2160cff78f6768e31181092/e73fe/dorothy_sm.webp 40w,\n/static/7c5a70aaa2160cff78f6768e31181092/61ca6/dorothy_sm.webp 80w,\n/static/7c5a70aaa2160cff78f6768e31181092/60b4d/dorothy_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#282828",
                            "images": {
                            "fallback": {
                                "src": "/static/d94c384a842aa6cc021286811c4c28d2/b26e2/Dorothy_Card.webp",
                                "srcSet": "/static/d94c384a842aa6cc021286811c4c28d2/84550/Dorothy_Card.webp 94w,\n/static/d94c384a842aa6cc021286811c4c28d2/34f80/Dorothy_Card.webp 187w,\n/static/d94c384a842aa6cc021286811c4c28d2/b26e2/Dorothy_Card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/42eb05cd9949783d6ea28c400f9ca386/60b4d/yang_sm.webp",
                                "srcSet": "/static/42eb05cd9949783d6ea28c400f9ca386/e73fe/yang_sm.webp 40w,\n/static/42eb05cd9949783d6ea28c400f9ca386/61ca6/yang_sm.webp 80w,\n/static/42eb05cd9949783d6ea28c400f9ca386/60b4d/yang_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/ee8b7875a7890cb3cf50fd045df75749/b26e2/yang_card.webp",
                                "srcSet": "/static/ee8b7875a7890cb3cf50fd045df75749/84550/yang_card.webp 94w,\n/static/ee8b7875a7890cb3cf50fd045df75749/34f80/yang_card.webp 187w,\n/static/ee8b7875a7890cb3cf50fd045df75749/b26e2/yang_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#282828",
                            "images": {
                            "fallback": {
                                "src": "/static/01489334ad8a491a8cf07fb5f51badaf/60b4d/diting_sm.webp",
                                "srcSet": "/static/01489334ad8a491a8cf07fb5f51badaf/e73fe/diting_sm.webp 40w,\n/static/01489334ad8a491a8cf07fb5f51badaf/61ca6/diting_sm.webp 80w,\n/static/01489334ad8a491a8cf07fb5f51badaf/60b4d/diting_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/0eb9bcbc3be030b9768c3ccd706ee16b/b26e2/diting_card.webp",
                                "srcSet": "/static/0eb9bcbc3be030b9768c3ccd706ee16b/84550/diting_card.webp 94w,\n/static/0eb9bcbc3be030b9768c3ccd706ee16b/34f80/diting_card.webp 187w,\n/static/0eb9bcbc3be030b9768c3ccd706ee16b/b26e2/diting_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8b8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/86fddbe08e3b9d93a6ed6dcd10af8544/60b4d/chiaki_echo_sm.webp",
                                "srcSet": "/static/86fddbe08e3b9d93a6ed6dcd10af8544/e73fe/chiaki_echo_sm.webp 40w,\n/static/86fddbe08e3b9d93a6ed6dcd10af8544/61ca6/chiaki_echo_sm.webp 80w,\n/static/86fddbe08e3b9d93a6ed6dcd10af8544/60b4d/chiaki_echo_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/d4b1ccff4e08fd9af22a254f07e3f597/b26e2/chiaki_echo_card.webp",
                                "srcSet": "/static/d4b1ccff4e08fd9af22a254f07e3f597/84550/chiaki_echo_card.webp 94w,\n/static/d4b1ccff4e08fd9af22a254f07e3f597/34f80/chiaki_echo_card.webp 187w,\n/static/d4b1ccff4e08fd9af22a254f07e3f597/b26e2/chiaki_echo_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#182828",
                            "images": {
                            "fallback": {
                                "src": "/static/d8e37b8d9fe07f3787e5ad65b5ba26c2/60b4d/fangus_sm.webp",
                                "srcSet": "/static/d8e37b8d9fe07f3787e5ad65b5ba26c2/e73fe/fangus_sm.webp 40w,\n/static/d8e37b8d9fe07f3787e5ad65b5ba26c2/61ca6/fangus_sm.webp 80w,\n/static/d8e37b8d9fe07f3787e5ad65b5ba26c2/60b4d/fangus_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#282828",
                            "images": {
                            "fallback": {
                                "src": "/static/db5751abdb7b91ece239bf7108a04524/b26e2/fangus_card.webp",
                                "srcSet": "/static/db5751abdb7b91ece239bf7108a04524/84550/fangus_card.webp 94w,\n/static/db5751abdb7b91ece239bf7108a04524/34f80/fangus_card.webp 187w,\n/static/db5751abdb7b91ece239bf7108a04524/b26e2/fangus_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/33284e0133707715f9f57e480b6abfed/60b4d/kraken_sm.webp",
                                "srcSet": "/static/33284e0133707715f9f57e480b6abfed/e73fe/kraken_sm.webp 40w,\n/static/33284e0133707715f9f57e480b6abfed/61ca6/kraken_sm.webp 80w,\n/static/33284e0133707715f9f57e480b6abfed/60b4d/kraken_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/cc3cce293afa0e145bd3776dab5d2ea8/b26e2/kraken_card.webp",
                                "srcSet": "/static/cc3cce293afa0e145bd3776dab5d2ea8/84550/kraken_card.webp 94w,\n/static/cc3cce293afa0e145bd3776dab5d2ea8/34f80/kraken_card.webp 187w,\n/static/cc3cce293afa0e145bd3776dab5d2ea8/b26e2/kraken_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383848",
                            "images": {
                            "fallback": {
                                "src": "/static/81d52b94d92c34413f3c18a3abe46a12/60b4d/obol_sm.webp",
                                "srcSet": "/static/81d52b94d92c34413f3c18a3abe46a12/e73fe/obol_sm.webp 40w,\n/static/81d52b94d92c34413f3c18a3abe46a12/61ca6/obol_sm.webp 80w,\n/static/81d52b94d92c34413f3c18a3abe46a12/60b4d/obol_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383848",
                            "images": {
                            "fallback": {
                                "src": "/static/130965076112034154b311058838ceb5/b26e2/obol_card.webp",
                                "srcSet": "/static/130965076112034154b311058838ceb5/84550/obol_card.webp 94w,\n/static/130965076112034154b311058838ceb5/34f80/obol_card.webp 187w,\n/static/130965076112034154b311058838ceb5/b26e2/obol_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/9247120a02bf4151f6c6e75413d7d643/60b4d/rin-unbowed_sm.webp",
                                "srcSet": "/static/9247120a02bf4151f6c6e75413d7d643/e73fe/rin-unbowed_sm.webp 40w,\n/static/9247120a02bf4151f6c6e75413d7d643/61ca6/rin-unbowed_sm.webp 80w,\n/static/9247120a02bf4151f6c6e75413d7d643/60b4d/rin-unbowed_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/15a58e27582cb4ad8273dee2ca0085cf/b26e2/rin-unbowed_card.webp",
                                "srcSet": "/static/15a58e27582cb4ad8273dee2ca0085cf/84550/rin-unbowed_card.webp 94w,\n/static/15a58e27582cb4ad8273dee2ca0085cf/34f80/rin-unbowed_card.webp 187w,\n/static/15a58e27582cb4ad8273dee2ca0085cf/b26e2/rin-unbowed_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/e40bc04d878ac69dd7025a0894ab0203/60b4d/Valerian_sm.webp",
                                "srcSet": "/static/e40bc04d878ac69dd7025a0894ab0203/e73fe/Valerian_sm.webp 40w,\n/static/e40bc04d878ac69dd7025a0894ab0203/61ca6/Valerian_sm.webp 80w,\n/static/e40bc04d878ac69dd7025a0894ab0203/60b4d/Valerian_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#282828",
                            "images": {
                            "fallback": {
                                "src": "/static/98049949bb20d95fd27c9a640ecb68fb/b26e2/Valerian_card.webp",
                                "srcSet": "/static/98049949bb20d95fd27c9a640ecb68fb/84550/Valerian_card.webp 94w,\n/static/98049949bb20d95fd27c9a640ecb68fb/34f80/Valerian_card.webp 187w,\n/static/98049949bb20d95fd27c9a640ecb68fb/b26e2/Valerian_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/bbcbed4011bf7e2dbde5f90cfe1d68b0/60b4d/victor_sm.webp",
                                "srcSet": "/static/bbcbed4011bf7e2dbde5f90cfe1d68b0/e73fe/victor_sm.webp 40w,\n/static/bbcbed4011bf7e2dbde5f90cfe1d68b0/61ca6/victor_sm.webp 80w,\n/static/bbcbed4011bf7e2dbde5f90cfe1d68b0/60b4d/victor_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/e49c61e1e03738864be853c689895ac2/b26e2/victor_card.webp",
                                "srcSet": "/static/e49c61e1e03738864be853c689895ac2/84550/victor_card.webp 94w,\n/static/e49c61e1e03738864be853c689895ac2/34f80/victor_card.webp 187w,\n/static/e49c61e1e03738864be853c689895ac2/b26e2/victor_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/a7914a2524481abc64d1c12178bb3aa0/60b4d/viper_sm.webp",
                                "srcSet": "/static/a7914a2524481abc64d1c12178bb3aa0/e73fe/viper_sm.webp 40w,\n/static/a7914a2524481abc64d1c12178bb3aa0/61ca6/viper_sm.webp 80w,\n/static/a7914a2524481abc64d1c12178bb3aa0/60b4d/viper_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#181818",
                            "images": {
                            "fallback": {
                                "src": "/static/c45a48851538a833cb6d1bb9f827a1af/b26e2/viper_card.webp",
                                "srcSet": "/static/c45a48851538a833cb6d1bb9f827a1af/84550/viper_card.webp 94w,\n/static/c45a48851538a833cb6d1bb9f827a1af/34f80/viper_card.webp 187w,\n/static/c45a48851538a833cb6d1bb9f827a1af/b26e2/viper_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#a8e8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/f8dd1845df286adf622e03b9fdc46d61/60b4d/mia_sm.webp",
                                "srcSet": "/static/f8dd1845df286adf622e03b9fdc46d61/e73fe/mia_sm.webp 40w,\n/static/f8dd1845df286adf622e03b9fdc46d61/61ca6/mia_sm.webp 80w,\n/static/f8dd1845df286adf622e03b9fdc46d61/60b4d/mia_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#a8f8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/f85b2766439676b2204fb716ed5dccf7/b26e2/Mia_card.webp",
                                "srcSet": "/static/f85b2766439676b2204fb716ed5dccf7/84550/Mia_card.webp 94w,\n/static/f85b2766439676b2204fb716ed5dccf7/34f80/Mia_card.webp 187w,\n/static/f85b2766439676b2204fb716ed5dccf7/b26e2/Mia_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/4fc7a8b6e3d63d8ec8ce0770ec064cd0/60b4d/Celince_sm.webp",
                                "srcSet": "/static/4fc7a8b6e3d63d8ec8ce0770ec064cd0/e73fe/Celince_sm.webp 40w,\n/static/4fc7a8b6e3d63d8ec8ce0770ec064cd0/61ca6/Celince_sm.webp 80w,\n/static/4fc7a8b6e3d63d8ec8ce0770ec064cd0/60b4d/Celince_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/b3325eee55bea08b5bd7b12afa1a5b10/b26e2/Celince_card.webp",
                                "srcSet": "/static/b3325eee55bea08b5bd7b12afa1a5b10/84550/Celince_card.webp 94w,\n/static/b3325eee55bea08b5bd7b12afa1a5b10/34f80/Celince_card.webp 187w,\n/static/b3325eee55bea08b5bd7b12afa1a5b10/b26e2/Celince_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/7b97f7ab0b93ae01f3f0b07746e43fdd/60b4d/rosa_sm.webp",
                                "srcSet": "/static/7b97f7ab0b93ae01f3f0b07746e43fdd/e73fe/rosa_sm.webp 40w,\n/static/7b97f7ab0b93ae01f3f0b07746e43fdd/61ca6/rosa_sm.webp 80w,\n/static/7b97f7ab0b93ae01f3f0b07746e43fdd/60b4d/rosa_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#281828",
                            "images": {
                            "fallback": {
                                "src": "/static/61e770b93780f35b62f9837630f7c98e/b26e2/rosa_card.webp",
                                "srcSet": "/static/61e770b93780f35b62f9837630f7c98e/84550/rosa_card.webp 94w,\n/static/61e770b93780f35b62f9837630f7c98e/34f80/rosa_card.webp 187w,\n/static/61e770b93780f35b62f9837630f7c98e/b26e2/rosa_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/19eb004c16a1f0174da1e90fa8869e8f/60b4d/dinah_sm.webp",
                                "srcSet": "/static/19eb004c16a1f0174da1e90fa8869e8f/e73fe/dinah_sm.webp 40w,\n/static/19eb004c16a1f0174da1e90fa8869e8f/61ca6/dinah_sm.webp 80w,\n/static/19eb004c16a1f0174da1e90fa8869e8f/60b4d/dinah_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/867e397a62e00af25d6c73bc54a12efb/b26e2/dinah_card.webp",
                                "srcSet": "/static/867e397a62e00af25d6c73bc54a12efb/84550/dinah_card.webp 94w,\n/static/867e397a62e00af25d6c73bc54a12efb/34f80/dinah_card.webp 187w,\n/static/867e397a62e00af25d6c73bc54a12efb/b26e2/dinah_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#081818",
                            "images": {
                            "fallback": {
                                "src": "/static/3cb02f3e1579dddb53b8c9947ea14d12/60b4d/Sania_withered_sm.webp",
                                "srcSet": "/static/3cb02f3e1579dddb53b8c9947ea14d12/e73fe/Sania_withered_sm.webp 40w,\n/static/3cb02f3e1579dddb53b8c9947ea14d12/61ca6/Sania_withered_sm.webp 80w,\n/static/3cb02f3e1579dddb53b8c9947ea14d12/60b4d/Sania_withered_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/c3770ca1e1bfb308f7efb1d501fcd89c/b26e2/Sania_withered_card.webp",
                                "srcSet": "/static/c3770ca1e1bfb308f7efb1d501fcd89c/84550/Sania_withered_card.webp 94w,\n/static/c3770ca1e1bfb308f7efb1d501fcd89c/34f80/Sania_withered_card.webp 187w,\n/static/c3770ca1e1bfb308f7efb1d501fcd89c/b26e2/Sania_withered_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/026d43ffd727cef8ff62bcb727fa017d/60b4d/turandot_sm.webp",
                                "srcSet": "/static/026d43ffd727cef8ff62bcb727fa017d/e73fe/turandot_sm.webp 40w,\n/static/026d43ffd727cef8ff62bcb727fa017d/61ca6/turandot_sm.webp 80w,\n/static/026d43ffd727cef8ff62bcb727fa017d/60b4d/turandot_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/572a3342105e24e2080506fcba8944fd/b26e2/turandot_card.webp",
                                "srcSet": "/static/572a3342105e24e2080506fcba8944fd/84550/turandot_card.webp 94w,\n/static/572a3342105e24e2080506fcba8944fd/34f80/turandot_card.webp 187w,\n/static/572a3342105e24e2080506fcba8944fd/b26e2/turandot_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/c0c6b47576c25788efac7a0edfab87cc/60b4d/Lingluo_sm.webp",
                                "srcSet": "/static/c0c6b47576c25788efac7a0edfab87cc/e73fe/Lingluo_sm.webp 40w,\n/static/c0c6b47576c25788efac7a0edfab87cc/61ca6/Lingluo_sm.webp 80w,\n/static/c0c6b47576c25788efac7a0edfab87cc/60b4d/Lingluo_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/4d14c2efc5de6b37ec968294f0ec2afc/b26e2/Lingluo_card.webp",
                                "srcSet": "/static/4d14c2efc5de6b37ec968294f0ec2afc/84550/Lingluo_card.webp 94w,\n/static/4d14c2efc5de6b37ec968294f0ec2afc/34f80/Lingluo_card.webp 187w,\n/static/4d14c2efc5de6b37ec968294f0ec2afc/b26e2/Lingluo_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8e8",
                            "images": {
                            "fallback": {
                                "src": "/static/de0820805d470f1b85918689f4c2d1f7/60b4d/Xiada_sm.webp",
                                "srcSet": "/static/de0820805d470f1b85918689f4c2d1f7/e73fe/Xiada_sm.webp 40w,\n/static/de0820805d470f1b85918689f4c2d1f7/61ca6/Xiada_sm.webp 80w,\n/static/de0820805d470f1b85918689f4c2d1f7/60b4d/Xiada_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080818",
                            "images": {
                            "fallback": {
                                "src": "/static/0a6781cd1d7116e85d8c1e15ea3cf2a4/b26e2/Xiada_card.webp",
                                "srcSet": "/static/0a6781cd1d7116e85d8c1e15ea3cf2a4/84550/Xiada_card.webp 94w,\n/static/0a6781cd1d7116e85d8c1e15ea3cf2a4/34f80/Xiada_card.webp 187w,\n/static/0a6781cd1d7116e85d8c1e15ea3cf2a4/b26e2/Xiada_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/bf7528b7164aada7ace9d5ddfce26135/60b4d/Kloss_sm.webp",
                                "srcSet": "/static/bf7528b7164aada7ace9d5ddfce26135/e73fe/Kloss_sm.webp 40w,\n/static/bf7528b7164aada7ace9d5ddfce26135/61ca6/Kloss_sm.webp 80w,\n/static/bf7528b7164aada7ace9d5ddfce26135/60b4d/Kloss_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/ad922cc2313e246031e76bd94226b501/b26e2/Kloss_card.webp",
                                "srcSet": "/static/ad922cc2313e246031e76bd94226b501/84550/Kloss_card.webp 94w,\n/static/ad922cc2313e246031e76bd94226b501/34f80/Kloss_card.webp 187w,\n/static/ad922cc2313e246031e76bd94226b501/b26e2/Kloss_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/4ed24b8243cd5da7f0b28595bc8c1eac/60b4d/Lilith_sm.webp",
                                "srcSet": "/static/4ed24b8243cd5da7f0b28595bc8c1eac/e73fe/Lilith_sm.webp 40w,\n/static/4ed24b8243cd5da7f0b28595bc8c1eac/61ca6/Lilith_sm.webp 80w,\n/static/4ed24b8243cd5da7f0b28595bc8c1eac/60b4d/Lilith_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/9c3de6a6313e4e2d14141185c6a9ff28/b26e2/Lilith_card.webp",
                                "srcSet": "/static/9c3de6a6313e4e2d14141185c6a9ff28/84550/Lilith_card.webp 94w,\n/static/9c3de6a6313e4e2d14141185c6a9ff28/34f80/Lilith_card.webp 187w,\n/static/9c3de6a6313e4e2d14141185c6a9ff28/b26e2/Lilith_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/1f6dce12ce843343bbbd626a9316a75a/60b4d/Tiamat_sm.webp",
                                "srcSet": "/static/1f6dce12ce843343bbbd626a9316a75a/e73fe/Tiamat_sm.webp 40w,\n/static/1f6dce12ce843343bbbd626a9316a75a/61ca6/Tiamat_sm.webp 80w,\n/static/1f6dce12ce843343bbbd626a9316a75a/60b4d/Tiamat_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp",
                                "srcSet": "/static/386bd460ce80a8466f8f24bb457739d2/84550/Tiamat_card.webp 94w,\n/static/386bd460ce80a8466f8f24bb457739d2/34f80/Tiamat_card.webp 187w,\n/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8e8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/3804dd140b8bb839893d4c2001eb6dfa/60b4d/freya_sm.webp",
                                "srcSet": "/static/3804dd140b8bb839893d4c2001eb6dfa/e73fe/freya_sm.webp 40w,\n/static/3804dd140b8bb839893d4c2001eb6dfa/61ca6/freya_sm.webp 80w,\n/static/3804dd140b8bb839893d4c2001eb6dfa/60b4d/freya_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/6cab180fe534091c59b3d423a6b7f8a2/b26e2/freya_card.webp",
                                "srcSet": "/static/6cab180fe534091c59b3d423a6b7f8a2/84550/freya_card.webp 94w,\n/static/6cab180fe534091c59b3d423a6b7f8a2/34f80/freya_card.webp 187w,\n/static/6cab180fe534091c59b3d423a6b7f8a2/b26e2/freya_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/9f257dd6ce4f7fba05d676f2e9fda501/60b4d/Sania_sm.webp",
                                "srcSet": "/static/9f257dd6ce4f7fba05d676f2e9fda501/e73fe/Sania_sm.webp 40w,\n/static/9f257dd6ce4f7fba05d676f2e9fda501/61ca6/Sania_sm.webp 80w,\n/static/9f257dd6ce4f7fba05d676f2e9fda501/60b4d/Sania_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/36d4c6bd73ef25b1eaff8592a66d8cde/b26e2/Sania_card.webp",
                                "srcSet": "/static/36d4c6bd73ef25b1eaff8592a66d8cde/84550/Sania_card.webp 94w,\n/static/36d4c6bd73ef25b1eaff8592a66d8cde/34f80/Sania_card.webp 187w,\n/static/36d4c6bd73ef25b1eaff8592a66d8cde/b26e2/Sania_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8d8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/a25aab5dea41e5cea370b0bd61123c53/60b4d/Veronica_sm.webp",
                                "srcSet": "/static/a25aab5dea41e5cea370b0bd61123c53/e73fe/Veronica_sm.webp 40w,\n/static/a25aab5dea41e5cea370b0bd61123c53/61ca6/Veronica_sm.webp 80w,\n/static/a25aab5dea41e5cea370b0bd61123c53/60b4d/Veronica_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/bbb0292bf6a0c530355cb7a62777c520/b26e2/Veronica_card.webp",
                                "srcSet": "/static/bbb0292bf6a0c530355cb7a62777c520/84550/Veronica_card.webp 94w,\n/static/bbb0292bf6a0c530355cb7a62777c520/34f80/Veronica_card.webp 187w,\n/static/bbb0292bf6a0c530355cb7a62777c520/b26e2/Veronica_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#d8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/d317a2b6172678def8e527d3a9c25d36/60b4d/lily_icon.webp",
                                "srcSet": "/static/d317a2b6172678def8e527d3a9c25d36/e73fe/lily_icon.webp 40w,\n/static/d317a2b6172678def8e527d3a9c25d36/61ca6/lily_icon.webp 80w,\n/static/d317a2b6172678def8e527d3a9c25d36/60b4d/lily_icon.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#c8c8d8",
                            "images": {
                            "fallback": {
                                "src": "/static/d7c38772c2e6d272d920eebdab7602bd/b26e2/Lili_card.webp",
                                "srcSet": "/static/d7c38772c2e6d272d920eebdab7602bd/84550/Lili_card.webp 94w,\n/static/d7c38772c2e6d272d920eebdab7602bd/34f80/Lili_card.webp 187w,\n/static/d7c38772c2e6d272d920eebdab7602bd/b26e2/Lili_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": false,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/635ff629c922f79919bae884b670ee28/60b4d/tsukiyomi_sm.webp",
                                "srcSet": "/static/635ff629c922f79919bae884b670ee28/e73fe/tsukiyomi_sm.webp 40w,\n/static/635ff629c922f79919bae884b670ee28/61ca6/tsukiyomi_sm.webp 80w,\n/static/635ff629c922f79919bae884b670ee28/60b4d/tsukiyomi_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/d33881cb827f4a08f156d6ed89d0d34d/b26e2/tsukiyomi_card.webp",
                                "srcSet": "/static/d33881cb827f4a08f156d6ed89d0d34d/84550/tsukiyomi_card.webp 94w,\n/static/d33881cb827f4a08f156d6ed89d0d34d/34f80/tsukiyomi_card.webp 187w,\n/static/d33881cb827f4a08f156d6ed89d0d34d/b26e2/tsukiyomi_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/18f447be4187a6fa5b32131f579408ed/60b4d/Heinrich_sm.webp",
                                "srcSet": "/static/18f447be4187a6fa5b32131f579408ed/e73fe/Heinrich_sm.webp 40w,\n/static/18f447be4187a6fa5b32131f579408ed/61ca6/Heinrich_sm.webp 80w,\n/static/18f447be4187a6fa5b32131f579408ed/60b4d/Heinrich_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/76673c6ccd1b20a58b7f094f24b78a46/b26e2/Heinrich_card.webp",
                                "srcSet": "/static/76673c6ccd1b20a58b7f094f24b78a46/84550/Heinrich_card.webp 94w,\n/static/76673c6ccd1b20a58b7f094f24b78a46/34f80/Heinrich_card.webp 187w,\n/static/76673c6ccd1b20a58b7f094f24b78a46/b26e2/Heinrich_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8b8b8",
                            "images": {
                            "fallback": {
                                "src": "/static/5c941c2b6c7a7d2ecde5c7e360096e30/60b4d/beyontin_sm.webp",
                                "srcSet": "/static/5c941c2b6c7a7d2ecde5c7e360096e30/e73fe/beyontin_sm.webp 40w,\n/static/5c941c2b6c7a7d2ecde5c7e360096e30/61ca6/beyontin_sm.webp 80w,\n/static/5c941c2b6c7a7d2ecde5c7e360096e30/60b4d/beyontin_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/45719b743b375ad696163ea5933ffc37/b26e2/Beyontin_Card.webp",
                                "srcSet": "/static/45719b743b375ad696163ea5933ffc37/84550/Beyontin_Card.webp 94w,\n/static/45719b743b375ad696163ea5933ffc37/34f80/Beyontin_Card.webp 187w,\n/static/45719b743b375ad696163ea5933ffc37/b26e2/Beyontin_Card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8d8c8",
                            "images": {
                            "fallback": {
                                "src": "/static/02fbbbb9aac551069aa8936440fc1ce1/60b4d/Lian_sm.webp",
                                "srcSet": "/static/02fbbbb9aac551069aa8936440fc1ce1/e73fe/Lian_sm.webp 40w,\n/static/02fbbbb9aac551069aa8936440fc1ce1/61ca6/Lian_sm.webp 80w,\n/static/02fbbbb9aac551069aa8936440fc1ce1/60b4d/Lian_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/6ed1f375f89553a9f5b188d060421aed/b26e2/Lian_card.webp",
                                "srcSet": "/static/6ed1f375f89553a9f5b188d060421aed/84550/Lian_card.webp 94w,\n/static/6ed1f375f89553a9f5b188d060421aed/34f80/Lian_card.webp 187w,\n/static/6ed1f375f89553a9f5b188d060421aed/b26e2/Lian_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": false,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#988888",
                            "images": {
                            "fallback": {
                                "src": "/static/703f5f3e6208961b76a041bff52666ea/60b4d/Massiah_sm.webp",
                                "srcSet": "/static/703f5f3e6208961b76a041bff52666ea/e73fe/Massiah_sm.webp 40w,\n/static/703f5f3e6208961b76a041bff52666ea/61ca6/Massiah_sm.webp 80w,\n/static/703f5f3e6208961b76a041bff52666ea/60b4d/Massiah_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#080808",
                            "images": {
                            "fallback": {
                                "src": "/static/c5a82af2f0cc52ec59daea3b0ee6d969/b26e2/Massiah_card.webp",
                                "srcSet": "/static/c5a82af2f0cc52ec59daea3b0ee6d969/84550/Massiah_card.webp 94w,\n/static/c5a82af2f0cc52ec59daea3b0ee6d969/34f80/Massiah_card.webp 187w,\n/static/c5a82af2f0cc52ec59daea3b0ee6d969/b26e2/Massiah_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/69d39c8e1a2344e2af690f39360cc1d4/60b4d/asshu_sm.webp",
                                "srcSet": "/static/69d39c8e1a2344e2af690f39360cc1d4/e73fe/asshu_sm.webp 40w,\n/static/69d39c8e1a2344e2af690f39360cc1d4/61ca6/asshu_sm.webp 80w,\n/static/69d39c8e1a2344e2af690f39360cc1d4/60b4d/asshu_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/4ccd3ddb97b5d465172cb5f62c7c8e1a/b26e2/asshu_card.webp",
                                "srcSet": "/static/4ccd3ddb97b5d465172cb5f62c7c8e1a/84550/asshu_card.webp 94w,\n/static/4ccd3ddb97b5d465172cb5f62c7c8e1a/34f80/asshu_card.webp 187w,\n/static/4ccd3ddb97b5d465172cb5f62c7c8e1a/b26e2/asshu_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
                    }
                },
                {
                    "id": "de6a6367-a7dc-51e2-8447-96983dfad5ad",
                    "unitId": "43",
                    "slug": "andrew-odd",
                    "name": "Andrew [Odd]",
                    "rarity": "R",
                    "element": "Odd",
                    "faction": "Etheria E.O.S.",
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383848",
                            "images": {
                            "fallback": {
                                "src": "/static/0aa39af1c54654d8e7351512ba749dc1/60b4d/andrew-red_sm.webp",
                                "srcSet": "/static/0aa39af1c54654d8e7351512ba749dc1/e73fe/andrew-red_sm.webp 40w,\n/static/0aa39af1c54654d8e7351512ba749dc1/61ca6/andrew-red_sm.webp 80w,\n/static/0aa39af1c54654d8e7351512ba749dc1/60b4d/andrew-red_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383838",
                            "images": {
                            "fallback": {
                                "src": "/static/030c65f6854a682af81e76494ee7d886/b26e2/andrew-red_card.webp",
                                "srcSet": "/static/030c65f6854a682af81e76494ee7d886/84550/andrew-red_card.webp 94w,\n/static/030c65f6854a682af81e76494ee7d886/34f80/andrew-red_card.webp 187w,\n/static/030c65f6854a682af81e76494ee7d886/b26e2/andrew-red_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
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
                    "isNew": null,
                    "isUpdated": null,
                    "smallImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#383848",
                            "images": {
                            "fallback": {
                                "src": "/static/509b9ed3af76514488436004ba7801f1/60b4d/andrew-blue_sm.webp",
                                "srcSet": "/static/509b9ed3af76514488436004ba7801f1/e73fe/andrew-blue_sm.webp 40w,\n/static/509b9ed3af76514488436004ba7801f1/61ca6/andrew-blue_sm.webp 80w,\n/static/509b9ed3af76514488436004ba7801f1/60b4d/andrew-blue_sm.webp 160w",
                                "sizes": "(min-width: 160px) 160px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 160,
                            "height": 160
                        }
                        }
                    }
                    },
                    "cardImage": {
                    "localFile": {
                        "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "backgroundColor": "#f8f8f8",
                            "images": {
                            "fallback": {
                                "src": "/static/6f9edfb06bc06ae6071a72d130a8442f/b26e2/andrew-blue_card.webp",
                                "srcSet": "/static/6f9edfb06bc06ae6071a72d130a8442f/84550/andrew-blue_card.webp 94w,\n/static/6f9edfb06bc06ae6071a72d130a8442f/34f80/andrew-blue_card.webp 187w,\n/static/6f9edfb06bc06ae6071a72d130a8442f/b26e2/andrew-blue_card.webp 374w",
                                "sizes": "(min-width: 374px) 374px, 100vw"
                            },
                            "sources": []
                            },
                            "width": 374,
                            "height": 512
                        }
                        }
                    }
                    }
                }
                ]
    }
};

const dbSlice = createSlice({
    name: 'db',
    initialState,
    reducers: {
        resetCharacterData(state) {
            state.data.characters = initialState.data.characters;
            console.log('Character data reset');
        },
        temp(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
            // Handle login logic here
            
        },
    },
});

// export const {  } = dataSlice.actions;
export default dbSlice.reducer;