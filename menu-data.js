// Official food menus imported 2026-10-22. Harats photographs extracted from its official PDF.
const restaurantMenus={
  "misto": [
    {
      "id": "misto-1",
      "name": "Креветки в сливочно-чесночном соусе",
      "category": "Закуски",
      "price": 980,
      "weight": "230 гр",
      "description": "Подаем с поджаренным багетом",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/f10/vx7lswj03dij9mgsag054r4e5q630pgs.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-2",
      "name": "Тартар из лосося со страчателлой, лимонным кремом и авокадо",
      "category": "Закуски",
      "price": 880,
      "weight": "150 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/iblock/31e/phhutla7nqqda1s12qh53f9lbd0ej32a.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-3",
      "name": "Аранчини с креветками",
      "category": "Закуски",
      "price": 650,
      "weight": "200 гр",
      "description": "Классическая итальянская закуска в виде шариков из риса, начиненных тартаром из креветки с соусом кимчи-трюфель, подаем с томатным соусом, жареными красными креветками и базиликом.",
      "image": "https://mistorest.ru/upload/iblock/55d/h1nia5hrxg6e0x6hbvgrhvshdoxlq810.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-4",
      "name": "Капрезе",
      "category": "Закуски",
      "price": 780,
      "weight": "200 гр",
      "description": "Классическая итальянская закуска из спелых томатов, молодой моцареллы и соуса песто",
      "image": "https://mistorest.ru/upload/iblock/49b/uc5tey6iv8ig4gc317k176eptnimnjhw.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-5",
      "name": "Креветки с рамиро и страчателлой",
      "category": "Закуски",
      "price": 780,
      "weight": "180 гр",
      "description": "Перец рамиро, креветки и страчателла.",
      "image": "https://mistorest.ru/upload/iblock/8b6/68hp4l3llv4ecsysxdq8efyhosvbbg80.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-6",
      "name": "Фритто мисто (на двоих)",
      "category": "Закуски",
      "price": 1200,
      "weight": "280/20/20 гр",
      "description": "Итальянская закуска из ассорти морепродуктов и овощей в хрустящем кляре: кальмар, креветки, мидии, перец рамиро, брокколи. Подаем с соусами блю чиз и кимчи-трюфель, и долькой лимона.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/797/oavxssjbty5artrum1dhskyqibdo3n66.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-7",
      "name": "Вителло тоннато",
      "category": "Закуски",
      "price": 980,
      "weight": "150 гр",
      "description": "Слайсы ростбифа, соус из консервированного тунца, каперсы фри, маринованные томаты черри, руккола.",
      "image": "https://mistorest.ru/upload/iblock/5aa/2ck5k4q099x6izltmgwxbwmzfi4q49z5.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-8",
      "name": "Карпаччо из говядины",
      "category": "Закуски",
      "price": 790,
      "weight": "100 гр",
      "description": "Говяжья вырезка, кампотский перец, оливковое масло, сок лимона, пармезан.",
      "image": "https://mistorest.ru/upload/iblock/708/wppyga2zf3ffucfa967jlgyjut3ef2p4.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-9",
      "name": "Тартар из тунца",
      "category": "Закуски",
      "price": 690,
      "weight": "120 гр",
      "description": "Тунец, авокадо, лук сибулет, подаем с соусом из маракуйя и жареными каперсами.",
      "image": "https://mistorest.ru/upload/iblock/bd6/e6ozo3flei4shp2ixwsfyyzo73d3hl3l.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-10",
      "name": "Тартар из говядины с муссом пармезан",
      "category": "Закуски",
      "price": 890,
      "weight": "150 гр",
      "description": "Рубленая говяжья вырезка с добавлением петрушки, лука шалот, каперсов, дижонской горчицы и трюфельного масла, подаем с муссом из пармезана и тостами из римского теста.",
      "image": "https://mistorest.ru/upload/iblock/eca/wqg53dtopcuitynk7m22ys4uxplmmggf.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-11",
      "name": "Итальянские сыры",
      "category": "Закуски",
      "price": 750,
      "weight": "90/15 гр",
      "description": "Пармезан, таледжио и горгонзола, подаются с медом и пеканом.",
      "image": "https://mistorest.ru/upload/iblock/3dc/3s9dz3rophmnwwndmu81dv1hc2nl7u6l.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-12",
      "name": "Прошутто Крудо",
      "category": "Закуски",
      "price": 450,
      "weight": "50 гр",
      "description": "Итальянский сыровяленый окорок.",
      "image": "https://mistorest.ru/upload/iblock/1dd/jgduxzylzgm5qje8zlzwln6y4lovlbji.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-13",
      "name": "Оливки Ночеллара",
      "category": "Закуски",
      "price": 480,
      "weight": "80 гр",
      "description": "Зеленые оливки с косточкой с юго-западного региона Сицилии. Мягкий ореховый, маслянистый вкус.",
      "image": "https://mistorest.ru/upload/iblock/e61/h0tqjdb8it6ftr8gqd55gh41fw9hv2er.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-14",
      "name": "Салат с прошутто, горгонзолой и грушей",
      "category": "Салаты",
      "price": 790,
      "weight": "200 гр",
      "description": "Микс салатов, груша томленая в вине, прошутто крудо, горгонзола, лимонный сироп, пармезан, маринованные черри.",
      "image": "https://mistorest.ru/upload/iblock/a4a/d08fcfl83q6h1nnm0bz9ve17bm9ybe1l.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-15",
      "name": "Цезарь с крабом",
      "category": "Салаты",
      "price": 1200,
      "weight": "190 гр",
      "description": "Листья салата романо, томаты черри, салатка краба, соус цезарь, пармезан и крутоны.",
      "image": "https://mistorest.ru/upload/iblock/859/jh46azs3sd02hvr6tu48ssu3p16di7sb.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-16",
      "name": "Салат с кальмаром и баклажаном",
      "category": "Салаты",
      "price": 840,
      "weight": "260 гр",
      "description": "Запеченный баклажан, кальмар, греческий йогурт, томатная сальса, имбирно-кунжутная заправка, каперсы и микс салатов.",
      "image": "https://mistorest.ru/upload/iblock/81e/m8pql3ke0lywhaq4yd7qc92q3tqw6yv2.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-17",
      "name": "Салат с тунцом и авокадо",
      "category": "Салаты",
      "price": 790,
      "weight": "210 гр",
      "description": "Листья салата романо, тунец, маринованный лук, запеченный перец рамиро, авокадо, мини-каперсы, перец пили-пили, заправка из каперсов и соус из консервированного тунца.",
      "image": "https://mistorest.ru/upload/iblock/0bf/d4kzgmc7ldxlxsv7u1k8iisg8fa2o51k.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-18",
      "name": "Овощной салат с соусом из феты",
      "category": "Салаты",
      "price": 680,
      "weight": "210 гр",
      "description": "Томаты, перец рамиро, стебель сельдерея, авокадо, базилик, оливковое масло, салат корн, соус из феты с каперсами.",
      "image": "https://mistorest.ru/upload/iblock/cc0/fc7mufycjqxq7lsk8kwle0idfs37ipv0.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-19",
      "name": "Салат с морепродуктами",
      "category": "Салаты",
      "price": 920,
      "weight": "210 гр",
      "description": "Маринованные желтые томаты черри, креветки, кальмар, мидии, авокадо, микс салата, цитрусово-кунжутная заправка.",
      "image": "https://mistorest.ru/upload/iblock/7e9/svjx08p9a41l9xwzowt4zrw8odd0860d.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-20",
      "name": "Цезарь с креветками",
      "category": "Салаты",
      "price": 750,
      "weight": "190 гр",
      "description": "Листья салата романо, томаты черри, креветки, соус цезарь, пармезан и крутоны.",
      "image": "https://mistorest.ru/upload/iblock/6fa/u1v5533esg2przfc5h6d36uore0ejegx.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-21",
      "name": "Цезарь с цыпленком пармезан",
      "category": "Салаты",
      "price": 690,
      "weight": "270 гр",
      "description": "Листья салата романо, томаты черри, цыпленок пармезан -филе куриной грудки, обжаренное в сухарях и запеченное в томатном соусе под сыром моцарелла; соус цезарь, пармезан и крутоны.",
      "image": "https://mistorest.ru/upload/iblock/eb7/v425r0yy5575wi12vx1zokgjzxy1ujrb.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-22",
      "name": "Четыре сыра",
      "category": "Неаполитанская пицца",
      "price": 830,
      "weight": "450 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/iblock/2a5/yfpyouw8fxi23p75i7v91yh6xa583ez9.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-23",
      "name": "Пепперони",
      "category": "Неаполитанская пицца",
      "price": 940,
      "weight": "520 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/iblock/7c4/q1runyd9vuuzv91u5uxr227f4yt7l0we.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-24",
      "name": "Маргарита",
      "category": "Неаполитанская пицца",
      "price": 750,
      "weight": "480 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/iblock/cc3/v67dulu3ek98qit0qviya5lexy8bt2y9.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-25",
      "name": "Дьяболо",
      "category": "Неаполитанская пицца",
      "price": 1100,
      "weight": "560 гр",
      "description": "Происходит из региона Калабрия, в нашей интерпретации готовится с добавлением чоризо, запеченного перца рамиро, колбасой фуэт, чесноком и чили.",
      "image": "https://mistorest.ru/upload/iblock/0ab/k47i368ielvv9kn3efyxslid715xgwsf.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-26",
      "name": "Качо-э-пепе со страчателлой",
      "category": "Неаполитанская пицца",
      "price": 890,
      "weight": "450 гр",
      "description": "Винно-перечный соус, моцарелла, страчателла, кампотский перец.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/912/v030016jhu6rneso4z5c3f1matgrs4qw.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-27",
      "name": "Фуэт с грушей и горгонзолой",
      "category": "Неаполитанская пицца",
      "price": 920,
      "weight": "500 гр",
      "description": "Винно-перечный соус, груша конференция, горгонзола, моцарелла, с колбасой фуэт",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/c26/n6w706y3a4w9syvon2bo8kni5v3tovvs.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-28",
      "name": "Креветки и маринованные черри",
      "category": "Неаполитанская пицца",
      "price": 1100,
      "weight": "540 гр",
      "description": "Винно-перечный соус, моцарелла, креветки, маринованные желтые черри, соус песто, руккола.",
      "image": "https://mistorest.ru/upload/iblock/f1c/06npeph2eft6g0r3fbwqk4xe9q2k22o2.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-29",
      "name": "Мясная",
      "category": "Неаполитанская пицца",
      "price": 980,
      "weight": "590 гр",
      "description": "Томатный соус, моцарелла, прошутто котто, салями, чоризо, трюфельное масло, лук сибулет.",
      "image": "https://mistorest.ru/upload/iblock/0e6/inli73abupthkz154u2calfwm56w1l2m.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-30",
      "name": "Мортаделла и фисташки",
      "category": "Неаполитанская пицца",
      "price": 990,
      "weight": "530 гр",
      "description": "Винно-перечный соус, моцарелла, мортаделла, страчателла, трюфельное масло и трюфельная паста, фисташки.",
      "image": "https://mistorest.ru/upload/iblock/ecd/mdd0an9yei4uxxjzwzzjr25p68r7hc0g.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-31",
      "name": "С белыми грибами и трюфелем",
      "category": "Пицца Тондо",
      "price": 890,
      "weight": "320 гр",
      "description": "Винно-перечный соус, моцарелла, белые грибы, трюфельная паста, трюфельное масло",
      "image": "https://mistorest.ru/upload/iblock/ab7/apshazl1ubkxzijhzpsev4kd9q32vs9v.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-32",
      "name": "Щечки, трюфель и бекон",
      "category": "Пицца Тондо",
      "price": 1100,
      "weight": "350 гр",
      "description": "Винно-перечный соус, моцарелла, томленые говяжьи щечки, вешенки, бекон, соус песто, трюфельный соус",
      "image": "https://mistorest.ru/upload/iblock/7d3/icw634x3qv9useabb4u7ue4uxqucnsai.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-33",
      "name": "Томаты и страчателла",
      "category": "Пицца Тондо",
      "price": 770,
      "weight": "370 гр",
      "description": "Томатный соус, моцарелла, черри, маринованные желтые черри, страчателла, базилик",
      "image": "https://mistorest.ru/upload/iblock/09f/nsoie3l8fnzg77dvt5btwai7va2qc80u.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-34",
      "name": "Рваная говядина, чеддер и халапеньо",
      "category": "Пицца Тондо",
      "price": 900,
      "weight": "400 гр",
      "description": "Томатный соус, моцарелла, чеддер, томленая говядина, халапеньо, гуакамоле, красный лук",
      "image": "https://mistorest.ru/upload/iblock/b3c/jxlhifw4zadcshjqf0t1ooj1npksxqg1.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-35",
      "name": "Креветки, груша, соус тоннато",
      "category": "Пицца Тондо",
      "price": 980,
      "weight": "380 гр",
      "description": "Винно-перечный соус, моцарелла, креветки, груша, руккола, соус тоннато, соус маракуйя",
      "image": "https://mistorest.ru/upload/iblock/c8d/ak3eanlpmxie9vns97fwu046kfwq2zlk.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-36",
      "name": "Капричоза",
      "category": "Пицца Тондо",
      "price": 900,
      "weight": "400 гр",
      "description": "Томатный соус, моцарелла, артишоки, таджасские оливки, ветчина котто, чеснок, базилик",
      "image": "https://mistorest.ru/upload/iblock/381/mqodubpib0qfj9luh16vqcdiojc18jum.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-37",
      "name": "Виладжио с охотничьими колбасками,беконом и солеными огурчиками",
      "category": "Пицца Тондо",
      "price": 860,
      "weight": "400 гр",
      "description": "Винно-перечный соус, моцарелла, соленые огурцы, шампиньоны, охотничьи колбаски, бекон, красный лук, соус кимчи-трюфель",
      "image": "https://mistorest.ru/upload/iblock/a93/gzlp4f21vuww6po12xuqzoek5jtr7p2i.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-38",
      "name": "С морепродуктами",
      "category": "Пицца Тондо",
      "price": 950,
      "weight": "420 гр",
      "description": "Томатный соус, моцарелла, креветки, мидии, кальмар, соус тоннато",
      "image": "https://mistorest.ru/upload/iblock/7ad/1yfs0r95dr5a4u70wmh68posjy4lvs3x.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-39",
      "name": "Лосось и сливочный сыр",
      "category": "Пицца Тондо",
      "price": 1100,
      "weight": "380 гр",
      "description": "Винно-перечный соус, моцарелла, слабосоленый лосось, сливочный сыр, оливковое масло, руккола",
      "image": "https://mistorest.ru/upload/iblock/f6c/ol9i7mzbiq5cd03dcxgam0m6t2v4w7mr.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-40",
      "name": "Пепперони",
      "category": "Пицца Тондо",
      "price": 780,
      "weight": "370 гр",
      "description": "Томатный соус, моцарелла, чоризо, мини перчики, лук сибулет, трюфельное масло",
      "image": "https://mistorest.ru/upload/iblock/0c7/21aivwkh31zcqqknr4c7fy080w3q9ywo.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-41",
      "name": "Четыре сыра",
      "category": "Пицца Тондо",
      "price": 720,
      "weight": "300 гр",
      "description": "Винно-перечный соус, моцарелла, пармезан, горгонзола, грюйер",
      "image": "https://mistorest.ru/upload/iblock/2d6/clxgxphgqjkn5vkjrn9zt1omw3l5bba0.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-42",
      "name": "Маргарита",
      "category": "Пицца Тондо",
      "price": 680,
      "weight": "340 гр",
      "description": "Томатный соус, моцарелла, базилик, оливковое масло, пармезан",
      "image": "https://mistorest.ru/upload/iblock/83e/ng95trok61f51pk71mcvfjp1ru48le30.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-43",
      "name": "Черные таяльтелле с лососем, горгонзолой, фисташками и страчателлой",
      "category": "Паста",
      "price": 990,
      "weight": "310 гр",
      "description": "Паста тальятелле с добавлением чернил каракатиц, соус на основе сливок, фисташковой пасты и горгонзолы, рубленные фисташки, лосось, страчателла.",
      "image": "https://mistorest.ru/upload/iblock/0f9/zgya8z5krm3c25r9vrggg3myyv55o9pd.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-44",
      "name": "Спагетти с морепродуктами",
      "category": "Паста",
      "price": 990,
      "weight": "320 гр",
      "description": "Спагетти, креветки, мидии, кальмар, соус из запеченных овощей, моркови, перцев рамиро, лука и томатов, чили, чеснок, базилик, пармезан.",
      "image": "https://mistorest.ru/upload/iblock/78c/c1rfekar1gskt1rn9lkgu9ng31uta8db.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-45",
      "name": "Тальятеле с трюфельным соусом и грибами",
      "category": "Паста",
      "price": 650,
      "weight": "270 гр",
      "description": "Тальятелле в сливочно-перечном соусе с добавлением трюфельной пасты.",
      "image": "https://mistorest.ru/upload/iblock/22d/s9dxwh58z7m96fye5vbft1yxt9nf4m9u.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-46",
      "name": "Конкильони с креветками",
      "category": "Паста",
      "price": 990,
      "weight": "350 гр",
      "description": "Паста в виде больших ракушек, фаршированная пикантной начинкой из тигровых креветок и сыра Моцарелла, подаются на винно-перечном соусе под сыром моцарелла, посыпается петрушкой.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/440/iqcpn638jy6z2ptk4g6qj4o8pzygjwja.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-47",
      "name": "Запеченные конькильони с говядиной",
      "category": "Паста",
      "price": 990,
      "weight": "280 гр",
      "description": "Паста конкильони, начиненная томленой говядиной. Запекается под сыром моцарелла и подается на винно-перечном соусе.",
      "image": "https://mistorest.ru/upload/iblock/7ef/hhheqqg5jedptivhqqkr08lynclvvc3z.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-48",
      "name": "Лазанья болоньезе",
      "category": "Паста",
      "price": 990,
      "weight": "340 гр",
      "description": "Листы лазаньи, соус болоньезе, винно-перечный соус, пармезан, моцарелла, базилик, соус из пармезана.",
      "image": "https://mistorest.ru/upload/iblock/1d7/0pvtefaf63df9kt56ssev1o4p6npcv1w.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-49",
      "name": "Спагетти качо-э-пепе с тартаром из говядины",
      "category": "Паста",
      "price": 850,
      "weight": "320 гр",
      "description": "Феттучини в сливочно-перечном соусе, тартар из говядины, пармезан и кампотский перец.",
      "image": "https://mistorest.ru/upload/iblock/cc8/vgukt1sq4ygsa3aied5f5v9peo8l85po.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-50",
      "name": "Орекьетте с уткой",
      "category": "Паста",
      "price": 840,
      "weight": "310 гр",
      "description": "Жареная утиная грудка под соусом красное вино, паста орекьетте в винно-перечном соусе с пармезаном, петрушкой и зеленым маслом.",
      "image": "https://mistorest.ru/upload/iblock/e0b/908esw5m2f2werj3pkc6ut6kjpu6at44.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-51",
      "name": "Равиоли с лососем",
      "category": "Паста",
      "price": 920,
      "weight": "250 гр",
      "description": "Начинка из лосося, палтуса и сливочного сыра, подаем с соусом кимчи, красной икрой и луком сибулет.",
      "image": "https://mistorest.ru/upload/iblock/cde/u7s8rhpeufv91l0e5mj4bcumk5uhy2og.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-52",
      "name": "Ризотто с белыми грибами",
      "category": "Паста",
      "price": 880,
      "weight": "350 гр",
      "description": "Рис карнароли, куриный бульон, белые грибы, сливочный соус, пармезан, трюфельная паста.",
      "image": "https://mistorest.ru/upload/iblock/e0f/5rb5cs996ts09kd68bzb8tmzxob3ugz1.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-53",
      "name": "Ризотто с креветками и песто из вяленых томатов",
      "category": "Паста",
      "price": 980,
      "weight": "280 гр",
      "description": "Рис карнароли, куриный бульон, креветки, страчателла, пармезан, песто из вяленых томатов, сливочный соус.",
      "image": "https://mistorest.ru/upload/iblock/f0b/mb7jctbapbuhmdvhrce1h5dj8d5u3b4m.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-54",
      "name": "Тальятелле с креветками",
      "category": "Паста",
      "price": 840,
      "weight": "300 гр",
      "description": "Тальятелле, креветки, сливочно-томатный соус, чеснок, томаты черри, базилик.",
      "image": "https://mistorest.ru/upload/iblock/f8c/96xl2m8wm7o0ajdnzax8jcnyw08588qg.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-55",
      "name": "Карбонара",
      "category": "Паста",
      "price": 750,
      "weight": "300 гр",
      "description": "Спагетти, гуанчиале, яичный желток, кампотский перец, пармезан.",
      "image": "https://mistorest.ru/upload/iblock/188/st0l72q364kjxh7rreu6xopjni8ueia1.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-56",
      "name": "Утиная грудка с перцем рамиро, артишоками и фетой",
      "category": "Мясо и птица",
      "price": 780,
      "weight": "220 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/iblock/a12/evx28ke1b04ad93li4av9uohcr8jvj30.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-57",
      "name": "Шницель по-Милански из свиной корейки",
      "category": "Мясо и птица",
      "price": 790,
      "weight": "330 гр",
      "description": "Тонко отбитая свиная корейка на кости, обжаренная в сухарях, подается под томатным соусом с моцареллой и зеленым салатом.",
      "image": "https://mistorest.ru/upload/iblock/cbe/4oq145moxrq3dcsh9uwvrd0mgx3ysjz0.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-58",
      "name": "Запеченная капоната с уткой и моцареллой",
      "category": "Мясо и птица",
      "price": 780,
      "weight": "280 гр",
      "description": "Рагу из баклажанов, цукини, лука, томатов и утиного филе, запеченное под моцареллой.",
      "image": "https://mistorest.ru/upload/iblock/cf7/19ydpgv30be1bzn1xi9fgw61i5py27wo.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-59",
      "name": "Томленый ягненок с ризотто из кускуса, вишней и муссом пармезан",
      "category": "Мясо и птица",
      "price": 970,
      "weight": "260 гр",
      "description": "Рулет из томленой лопатки ягненка, ризотто из кускуса с добавлением, лука, моркови и стебля сельдерея, подается с соусом красное вино с добавлением вишни и муссом из пармезана.",
      "image": "https://mistorest.ru/upload/iblock/c47/5bm4meq3kq2u1rqglm5lf7xhiomx8m6w.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-60",
      "name": "Говяжьи щечки с картофельным пюре",
      "category": "Мясо и птица",
      "price": 1100,
      "weight": "320 гр",
      "description": "Говяжьи щечки, томленные с овощами и красным вином. Подаем в густом мясном соусе с картофельным пюре, жареными шампиньонами, морковью и петрушкой.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/494/1v04g0vw2cuilbzaz3hvahned1byp42e.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-61",
      "name": "Стейк из говяжьей вырезки со стейком из цветной капусты",
      "category": "Мясо и птица",
      "price": 1500,
      "weight": "260 гр",
      "description": "Стейк из говяжьей вырезки под соусом красное вино, подаем со стейком из цветной капусты со сливочным соусом, пармезаном и тертым фундуком.",
      "image": "https://mistorest.ru/upload/iblock/f29/psxs2mtrpz2axfg08eteft57b8bkheuo.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-62",
      "name": "Бифштекс с жареным ромейном",
      "category": "Мясо и птица",
      "price": 850,
      "weight": "230 гр",
      "description": "Сочный рубленый бифштекс из говядины прожарки medium, подаем с яйцом пашот, мясным соусом, жареным салатом романо и пармезаном.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/928/ll7wh005hundpllrdxo1vav4kc3h7swo.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-63",
      "name": "Стейк из говядины с перечным соусом",
      "category": "Мясо и птица",
      "price": 1200,
      "weight": "200 гр",
      "description": "Маринованный стейк денвер, подаем с жареным шпинатом, шампиньонами, чесноком и винно-перечным соусом.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/347/n2k05l5kxww0yzfbqfjsk89bsc0xp27a.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-64",
      "name": "Осьминог с капонатой и овощным соусом",
      "category": "Рыба и морепродукты",
      "price": 1400,
      "weight": "300 гр",
      "description": "Нежное щупальце осьминога, подается с картофельным пюре, овощным соусом и запеченными баклажанами, цукини, луком и томатами.",
      "image": "https://mistorest.ru/upload/iblock/fbf/ztlzzciy8sr9orybdekg8c3t5b0whwd9.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-65",
      "name": "Морской окунь с красными апельсинами и креветками",
      "category": "Рыба и морепродукты",
      "price": 950,
      "weight": "280 гр",
      "description": "Жареное филе морского окуня, подается с жареными креветками и перцами рамиро с соусом на основе сока красный апельсин и маракуйя.",
      "image": "https://mistorest.ru/upload/iblock/95c/wuspce24ihjp09a3pvw21ly68jw9i7yr.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-66",
      "name": "Горячий сет морепродуктов",
      "category": "Рыба и морепродукты",
      "price": 3500,
      "weight": "700 гр",
      "description": "Креветки и мидии в соусе маракуйя, стейк из лосося в соусе терияки, осьминог в соусе черный перец на овощном соусе, кальмар в масляном соусе, морской окунь с сальсой из обожженных черри и артишоков.",
      "image": "https://mistorest.ru/upload/iblock/455/r4nahse7mf8ros4xuxzlfajkewy0ugrq.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-67",
      "name": "Лосось с зелеными овощами",
      "category": "Рыба и морепродукты",
      "price": 1200,
      "weight": "210 гр",
      "description": "Стейк из лосося в чешуе из цукини, подается с обжаренными пак Чой, капустой романеско и базиликовым соусом.",
      "image": "https://mistorest.ru/upload/iblock/df7/9kmp575ldln5sst0kcd013cwnm47dveu.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-68",
      "name": "Кальмар с обожженным томатом",
      "category": "Рыба и морепродукты",
      "price": 980,
      "weight": "240 гр",
      "description": "Филе кальмара под соусом на основе сливочного масла, микс салатов, обоженный томат, слайсы пармезана.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/c21/srve98zzila4me8bsl4356gyuinfo1hz.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-69",
      "name": "Качукко",
      "category": "Супы",
      "price": 840,
      "weight": "300 гр",
      "description": "Сытный суп на из лосося, морского окуня, креветок, анчоусов, мидий и томатов.",
      "image": "https://mistorest.ru/upload/iblock/eeb/a29arb0447dsrqv401n91vimbamgazap.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-70",
      "name": "Грибной крем-суп",
      "category": "Супы",
      "price": 650,
      "weight": "330 гр",
      "description": "Подается с муссом из пармезана и картофелем пай.",
      "image": "https://mistorest.ru/upload/iblock/26f/yum1dzoj6pwkgu6nzsvx5cxbbjxziwpm.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-71",
      "name": "Суп четыре сыра с орзо и креветками",
      "category": "Супы",
      "price": 690,
      "weight": "330 гр",
      "description": "Насыщенный сырный суп на курином бульоне с пастой орзо и креветками, подается с запеченной брускеттой с моцареллой, вялеными томатами и рукколой.",
      "image": "https://mistorest.ru/upload/iblock/20a/5z5nymdswyw2uo49f76nyvgow99oekrg.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-72",
      "name": "Томатный суп с креветками и страчателлой",
      "category": "Супы",
      "price": 720,
      "weight": "300 гр",
      "description": "Томаты, базилик, биск, креветки, страчателла, желтые томаты черри, чеснок, петрушка.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/b36/t3t2cfl9qjsqcrw3t5eh1xo6vok58x7m.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-73",
      "name": "Картофельное пюре",
      "category": "Гарниры",
      "price": 250,
      "weight": "150 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/1eb/0lu3kiddt62cs4ud93sjaerz8xpo71iz.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-74",
      "name": "Зеленые овощи",
      "category": "Гарниры",
      "price": 390,
      "weight": "130 гр",
      "description": "Шпинат, брокколи и цукини, обжаренные с чесноком и чили.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/47d/6szrse38lh2ul0ko0t6yhp0n3ctpe25x.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-75",
      "name": "Картофель фри с трюфелем и пармезаном",
      "category": "Гарниры",
      "price": 350,
      "weight": "120 гр",
      "description": "Картофель, трюфельное масло и пармезан.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/e58/zktobi32n98r8sa3vaox5rvjwc15qxny.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-76",
      "name": "Батат фри",
      "category": "Гарниры",
      "price": 380,
      "weight": "100/20/20 гр",
      "description": "Подаем с сырным соусом и соусом блю чиз.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/17c/h3om5h7ajb21jfsk98qsaskvn2rwojx6.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-77",
      "name": "Стейк из цветной капусты с пармезаном",
      "category": "Гарниры",
      "price": 450,
      "weight": "120 гр",
      "description": "Цветная капуста, соус из сыворотки, пармезан, фундук, черный перец.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/403/ef61c6mwc1s4msjis4vn68jp5geq1gpp.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-78",
      "name": "Макарони с горгонзолой и малиной",
      "category": "Десерты",
      "price": 200,
      "weight": "50 гр",
      "description": "Классические макарони с кремом из сливочного сыра с горгонзолой, малиной",
      "image": "https://mistorest.ru/upload/iblock/be4/38lvu09fnqlkj1717spf0r1rclc8b06v.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-79",
      "name": "Макарони с горгонзолой и пеканом",
      "category": "Десерты",
      "price": 150,
      "weight": "50 гр",
      "description": "Классические макарони с кремом из сливочного сыра с горгонзолой, пеканом.",
      "image": "https://mistorest.ru/upload/iblock/170/f9csdl37yrpqt2f79q2q6xa3273rl62g.jpg",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-80",
      "name": "Ванильное мороженое",
      "category": "Десерты",
      "price": 200,
      "weight": "",
      "description": "",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/c73/8biw6dhc2382b39o6ezx0w5yutphszfr.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-81",
      "name": "Фисташковое мороженое",
      "category": "Десерты",
      "price": 200,
      "weight": "50 гр",
      "description": "",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/1c5/hpxpyvb3mtx92owgifmbtnl6oaq1ct7z.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-82",
      "name": "Панна котта",
      "category": "Десерты",
      "price": 450,
      "weight": "130 гр",
      "description": "Сливочное желе с бурбонской ванилью, подаем с компоте из клубники и фисташками.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/5bd/10vm893z9hm0e12m7x09xyse202tckco.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-83",
      "name": "Канноли с фисташками",
      "category": "Десерты",
      "price": 380,
      "weight": "120 гр",
      "description": "Трубочки из жареного теста с начинкой из сыра маскарпоне с фисташками, подаем с фисташковым соусом.",
      "image": "https://mistorest.ru/upload/iblock/529/t491k76yddlmrtt80x5lcm6worpj2pw3.png",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-84",
      "name": "Шоколадный фондан",
      "category": "Десерты",
      "price": 560,
      "weight": "160 гр",
      "description": "Классический кекс из молочного и темного шоколада с жидкой начинкой, подаем с ванильным мороженым и свежей клубникой.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/4a9/wgskk9x9427zqmlsb1wo7c3s1agzkfbl.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-85",
      "name": "Тирамису",
      "category": "Десерты",
      "price": 550,
      "weight": "160 гр",
      "description": "Печенье савоярди, пропитанное кофейным сиропом, взбитый крем из сыра маскарпоне и сливок, какао и сублимированная малина.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/b10/sxsiyyjqnrwgr6ig1outaeb1nyzikakr.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-86",
      "name": "Павлова",
      "category": "Десерты",
      "price": 550,
      "weight": "140 гр",
      "description": "Меренга, сливочный крем, гель маракуйя, свежая клубника, чайная роза.",
      "image": "https://mistorest.ru/upload/resize_cache/webp/iblock/c8f/tp6h84bg22yjypze4irje15h5e46nt7w.webp",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-87",
      "name": "Тартин",
      "category": "Хлеб",
      "price": 200,
      "weight": "120 гр",
      "description": "",
      "image": "",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-88",
      "name": "Фокачча с песто и пармезаном",
      "category": "Хлеб",
      "price": 390,
      "weight": "230 гр",
      "description": "",
      "image": "",
      "source": "https://mistorest.ru/menu/eda/"
    },
    {
      "id": "misto-89",
      "name": "Фокачча с луком и розмарином",
      "category": "Хлеб",
      "price": 390,
      "weight": "230 гр",
      "description": "",
      "image": "",
      "source": "https://mistorest.ru/menu/eda/"
    }
  ],
  "melodiya": [
    {
      "id": "melodiya-1",
      "name": "Капуста квашеная с клюквой",
      "category": "Фирменные соленья",
      "price": 250,
      "weight": "190 гр",
      "description": "КБЖУ 186/4/14/12",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/42d/1000_1000_0/wrl1e4q2l570vsvisrg2i4q3cchej01p.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-2",
      "name": "Огурцы соленые",
      "category": "Фирменные соленья",
      "price": 250,
      "weight": "120 гр",
      "description": "КБЖУ 20/1/0/4",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/86c/1000_1000_0/j3fizxu9gejbjjvm93tyrl0w7s6dd0ap.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-3",
      "name": "Томаты черри маринованные",
      "category": "Фирменные соленья",
      "price": 360,
      "weight": "100 гр",
      "description": "КБЖУ 35/1/1/6",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/5ca/1000_1000_0/3j87mpgfsa7m9emg2402epidjfrkwf84.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-4",
      "name": "Малосольные огурцы",
      "category": "Фирменные соленья",
      "price": 350,
      "weight": "120 гр",
      "description": "КБЖУ 28/2/0/6",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/889/1000_1000_0/qczbz3h17wye2yytnmjbrt7fh7hhb4ut.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-5",
      "name": "Лосось слабосоленый",
      "category": "Нарезка",
      "price": 650,
      "weight": "90 гр",
      "description": "Лосось слабой соли подается с лимоном и зеленью. КБЖУ 186/22/10/1",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/888/1000_1000_0/aafj3wwghzgj95vlu4207aipqq5uxm6y.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-6",
      "name": "Сало собственного посола",
      "category": "Нарезка",
      "price": 480,
      "weight": "160 гр",
      "description": "Подается с горчицей, бородинским хлебом, укропом, петрушкой и зеленым луком. КБЖУ 586/12/58/6",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/893/1000_1000_0/0cb2zrk67ujra5ikjz1x1pfekefual64.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-7",
      "name": "Говяжий язык",
      "category": "Нарезка",
      "price": 580,
      "weight": "100 гр",
      "description": "Нежный отварной говяжий язык, подается с пикантным соусом на основе сметаны и свежего хрена, украшается петрушкой. КБЖУ 186/22/10/2",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/b95/1000_1000_0/9tjfymomf1125luqbgqyvhuc7t3e5tu3.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-8",
      "name": "Икра черная Осетровая классик",
      "category": "Икра",
      "price": 2900,
      "weight": "28,6 гр",
      "description": "КБЖУ 67/7/4/0",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/662/1000_1000_0/7n6wadu6emvor34132cf6s61n0sglwr9.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-9",
      "name": "Икра черная Стерлядь северюжка",
      "category": "Икра",
      "price": 2900,
      "weight": "28,6 гр",
      "description": "КБЖУ 57/8/3/0",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/039/1000_1000_0/0q2rq8xjcmh0gicnbbthj3h7tg965dsm.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-10",
      "name": "Сет черной икры",
      "category": "Икра",
      "price": 8500,
      "weight": "85,8 гр",
      "description": "Сет из 3-ёх видов черной икры КБЖУ 486/28/36/2",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/6d4/1000_1000_0/x4ptqjhs3khjfdrvkxiclzwu6nqs6b8i.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-11",
      "name": "Икра красная",
      "category": "Икра",
      "price": 1000,
      "weight": "50 гр",
      "description": "КБЖУ 120/15/7/0",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/c6b/1000_1000_0/qntc9o5ncagdy7ecst092fldvp5woxn0.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-12",
      "name": "Икра щучья",
      "category": "Икра",
      "price": 900,
      "weight": "50 гр",
      "description": "КБЖУ 44/9/1/0",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/d6d/1000_1000_0/ud93rwn50cxbo4wvfeo050dejiwbdcfi.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-13",
      "name": "Томаты с молодым сыром и красным луком",
      "category": "Закуски",
      "price": 550,
      "weight": "200 гр",
      "description": "Сочные томаты, пикантный красный лук, нежный сыр фета и очищенные фисташки. КБЖУ 286/12/22/12",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/229/1000_1000_0/kyna8gylnozvyiu9p3asnnxaoj2urvub.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-14",
      "name": "Жульен из гуся с белыми грибами",
      "category": "Закуски",
      "price": 720,
      "weight": "170 гр",
      "description": "Томленый гусь, обжаренные белые грибы с луком, томленые в сметане и запеченные под золотистой корочкой сыра моцарелла. КБЖУ 486/34/32/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/e17/1000_1000_0/l2nbuqnc3r7y9waf9lh3m54hm73e77q5.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-15",
      "name": "Сельдь с картофелем",
      "category": "Закуски",
      "price": 550,
      "weight": "250 гр",
      "description": "Обжаренный мини-картофель, нежное филе сельди, подается с маринованным репчатым луком и свежей зеленью. КБЖУ 486/28/34/18",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/c8a/1000_1000_0/cutdlxakzu7zd9xq0pm9las0oy0ss9yo.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-16",
      "name": "Тартар из говядины",
      "category": "Закуски",
      "price": 790,
      "weight": "150 гр",
      "description": "Рубленная говяжья вырезка заправляется соусом из яичного желтка, горчицы, лука шалот и рубленными корнишонами, подается с тостом из бородинского хлеба. КБЖУ 346/28/22/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/7fb/1000_1000_0/xzu8zikmtlbtvabvgkv425jbiqh4jbia.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-17",
      "name": "Холодец из говядины",
      "category": "Закуски",
      "price": 490,
      "weight": "200 гр",
      "description": "Наваристый холодец, приготовлен на основе свинины и овощей, с добавлением томленой говядины. Подается с пикантным соусом из хрена, горчицей, мини-бородинским хлебом, чесноком, укропом и зеленым луком. КБЖУ 486/38/32/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/a9c/1000_1000_0/xo13wq1rbhu34pef56k1d648mrhcdt6p.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-18",
      "name": "Грузди в сметане",
      "category": "Закуски",
      "price": 650,
      "weight": "150 гр",
      "description": "Подаются с соусом на основе сметаны и свежего хрена, красным луком и зеленью. КБЖУ 186/8/12/12",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/85b/1000_1000_0/63v5aqx0aqrznlkxrdm93oqg98pc92g4.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-19",
      "name": "Жюльен с камчатским крабом",
      "category": "Закуски",
      "price": 790,
      "weight": "170 гр",
      "description": "КБЖУ 386/32/24/8",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/e65/1000_1000_0/o6pqkjyj112lri2voz2qe76mnraep47i.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-20",
      "name": "Мини-чебуреки с креветками",
      "category": "Закуски",
      "price": 750,
      "weight": "180/20 гр",
      "description": "С начинкой из рубленных креветок с добавлением сливочного сыра. КБЖУ 438/28/26/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/5be/1000_1000_0/3y3t84cz7bbe65ov4qxeq36toxg225fq.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-21",
      "name": "Отварные магаданские креветки",
      "category": "Закуски",
      "price": 1100,
      "weight": "150 гр",
      "description": "Подаются с долькой лимона КБЖУ 286/58/4/1",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/7ad/1000_1000_0/b86h5lytkpmut0ck7gii48q3yk9o1cfv.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-22",
      "name": "Жареная корюшка",
      "category": "Закуски",
      "price": 880,
      "weight": "150/30 гр",
      "description": "Корюшка жареная в муке до хрустящей корочки, подается с соусом тартар. КБЖУ 438/38/22/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/df4/1000_1000_0/m306xxnbk9oi8ieumah3zdjzai0j89hl.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-23",
      "name": "Блины с томленой говядиной и сыром",
      "category": "Блины",
      "price": 750,
      "weight": "190 гр",
      "description": "Оригинальный рулет из блинов, сочной томленой говядины и тягучей моцареллы со сметаной и овощным соусом. КБЖУ 638/48/38/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/6b0/1000_1000_0/0tqq63bd4lcy4xu6ia8dshffssujyhf5.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-24",
      "name": "Блины с лососем, сметаной и икрой палтуса",
      "category": "Блины",
      "price": 720,
      "weight": "160 гр",
      "description": "Два нежных блина, дополненные слабосоленым лососем, сметаной и икрой палтуса. КБЖУ 486/28/32/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/0b0/1000_1000_0/mp6eon7xa0pszx2w2kzhob14x502uc11.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-25",
      "name": "Блин  с крабом, яйцом пашот и голландским соусом",
      "category": "Блины",
      "price": 750,
      "weight": "280 гр",
      "description": "Блин с начинкой из камчатского краба с сыром, подается с яйцом пашот и голландским соусом. КБЖУ 684/32/48/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/baa/1000_1000_0/830zecbuqq1r5vgdkvvpmb20is4xfp5e.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-26",
      "name": "Салат из свежих овощей",
      "category": "Салаты",
      "price": 550,
      "weight": "240 гр",
      "description": "Легкий и освежающий салат! Сочные томаты, хрустящие огурцы, редис, перец рамиро и красный лук. Заправлен ароматным маслом и украшен семечками тыквы и свежей зеленью. КБЖУ 186/5/12/18",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/159/1000_1000_0/l6dk5n3lhurac5vv6sowpaufju1p6l1i.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-27",
      "name": "Оливье 1897 года",
      "category": "Салаты",
      "price": 760,
      "weight": "190 гр",
      "description": "Легендарный салат, приближенный к старинному рецепту! Запеченный картофель, зеленый горошек, соленый огурец, нежные раковые шейки, филе бедра индейки, желе из куриного бульона и отварной говяжий язык. Заправлен майонезом собственного производства и украшен перепелиным яйцом, икрой палтуса, петрушкой и цветами бегонии. КБЖУ 386/22/26/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/165/1000_1000_0/7krjqcrb56txr7taiw34jd2hbq8gl0p9.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-28",
      "name": "Оливье «Мелодия»",
      "category": "Салаты",
      "price": 550,
      "weight": "190 гр",
      "description": "Классический салат в нашей интерпретации! Запеченные овощи (картофель и морковь), зеленый горошек, свежий и соленый огурец, куриное яйцо и томленая говядина. Заправлен майонезом собственного приготовления и украшен икрой палтуса. КБЖУ 412/20/26/21",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/c87/1000_1000_0/eeo1fd7uwa6jgfjvv59ojmmgub70c4lj.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-29",
      "name": "Мимоза с опаленным лососем",
      "category": "Салаты",
      "price": 860,
      "weight": "240 гр",
      "description": "Современная интерпретация классического салата! Нежная основа из тертого яйца с сыром моцарелла и майонезом, укрытая слайсами опаленного лосося. Подается на подушке из крема на основе шпрот и творожного сыра, украшается микрозеленью, чипсами из пармезана и маринованными луковичками. КБЖУ 648/32/48/18",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/573/1000_1000_0/se26u4oa3xpi81mmzy3gmhepkv67yekm.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-30",
      "name": "Сельдь под шубой",
      "category": "Салаты",
      "price": 470,
      "weight": "310 гр",
      "description": "Традиционный русский салат! Слои запеченной свеклы и моркови, отварного картофеля, куриного яйца, лука шалот и нежной сельди, пропитанные майонезом собственного производства. Украшен свежей зеленью и чипсами на основе чернил каракатицы. КБЖУ 438/24/32/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/0cb/1000_1000_0/6w9x6r239cd8wcu9req4eid4wuylei83.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-31",
      "name": "Оливье с семгой",
      "category": "Салаты",
      "price": 720,
      "weight": "190 гр",
      "description": "Запеченные овощи (картофель и морковь), зеленый горошек, свежий и соленый огурец, куриное яйцо, слабосоленая семга. Заправлен майонезом собственного приготовления КБЖУ 462/22/30/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/a5b/1000_1000_0/hvvfsz3ctd3esvu16mr53602ad8s837w.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-32",
      "name": "Теплый салат с языком, груздями и овощами",
      "category": "Салаты",
      "price": 790,
      "weight": "210 гр",
      "description": "Отварной говяжий язык, грузди, вешенки, корнишоны, мини картофель, стручковая фасоль, маринованные черри, маринованный красный лук, соус из хрена, свежая зелень КБЖУ 386/28/24/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/370/1000_1000_0/lq8d88nya12q2ugfkt4y4k1mfyp00nh5.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-33",
      "name": "Салат с магаданскими креветками",
      "category": "Салаты",
      "price": 850,
      "weight": "220 гр",
      "description": "Помидор, свежий огурец, болгарский перец, микс салатов, магаданские креветки, малиновая заправка, кедровые орешки КБЖУ 298/24/18/12",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/bc7/1000_1000_0/5agz18en4hpqspcd70uedmo8mjtjnbg2.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-34",
      "name": "Драники с белыми грибами",
      "category": "Драники",
      "price": 680,
      "weight": "260 гр",
      "description": "Хрустящие драники, политые ароматным грибным соусом с добавлением белых грибов и свежей зелени. КБЖУ 438/18/24/38",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/e83/1000_1000_0/bjxpbz3q0smprgs9q04pc1trx7zlsolh.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-35",
      "name": "Драники со шкварками",
      "category": "Драники",
      "price": 540,
      "weight": "220 гр",
      "description": "Ароматные драники, дополненные хрустящими шкварками с луком и зеленью. КБЖУ 638/18/52/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/194/1000_1000_0/bs3kbz4yqxi0ux2k70126jz2p6nfp415.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-36",
      "name": "Драник с мясом",
      "category": "Драники",
      "price": 590,
      "weight": "310 гр",
      "description": "Картофельный драник с начинкой и свино-говяжьего фарша, подаётся со сметаной и украшается зеленью. КБЖУ 586/32/38/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/91f/1000_1000_0/jank208j6ejjov4yx9k1cgj72xicwfub.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-37",
      "name": "Драники со слабосоленой семгой",
      "category": "Драники",
      "price": 790,
      "weight": "220 гр",
      "description": "Подаются с соусом тартар КБЖУ 486/24/32/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/189/1000_1000_0/jp9i2kwbqkxb6jlpksdbm9b8t2yiusks.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-38",
      "name": "Пельмени со свининой и говядиной",
      "category": "Пельмени и вареники",
      "price": 480,
      "weight": "230 гр",
      "description": "Сытные пельмени с начинкой из свино-говяжьего фарша с репчатым луком. Подаются с бульоном или без, а также с уксусным соусом или сметаной на Ваш выбор. КБЖУ 486/28/32/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/f86/1000_1000_0/tjyo64xwrh865duqyqhmm7ag37zva4v2.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-39",
      "name": "Вареники с картофелем и грибами",
      "category": "Пельмени и вареники",
      "price": 450,
      "weight": "230 гр",
      "description": "Ароматные вареники с начинкой из толченого картофеля, луком и белыми грибами с петрушкой, подаются с обжаренным луком и шампиньонами, а также со сметаной и зеленью. КБЖУ 586/18/24/78",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/823/1000_1000_0/bn19ywn7e9mxp2btkot1oj5o4n9oqnvv.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-40",
      "name": "Вареники с вишней",
      "category": "Пельмени и вареники",
      "price": 550,
      "weight": "230 гр",
      "description": "Нежные вареники с сочной вишневой начинкой, подаются с соусом из вишни, а также со сметаной. КБЖУ 486/14/18/68",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/0eb/1000_1000_0/o9x3hehhj92wmc4ygdkuonof1k41tmja.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-41",
      "name": "Пельмени из оленины с брусничным соусом",
      "category": "Пельмени и вареники",
      "price": 550,
      "weight": "250 гр",
      "description": "Подаются с бульоном или без, а также с уксусным соусом или сметаной на Ваш выбор. КБЖУ 546/38/34/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/2f2/1000_1000_0/ak64r5v577hgnctehyefdihn0aprvlgb.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-42",
      "name": "Борщ",
      "category": "Супы",
      "price": 680,
      "weight": "500 гр",
      "description": "Насыщенный говяжий бульон с томленой говядиной. Подается со сметаной, горчицей, бородинским хлебом, двумя видами сала и зеленью. КБЖУ 510/34/29/12",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/694/1000_1000_0/9ufe7rfisylb28mcaxw13mud8c8gq5zw.jpeg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-43",
      "name": "Суп из белых Грибов",
      "category": "Супы",
      "price": 650,
      "weight": "380 гр",
      "description": "Ароматный и нежный суп! Бульон на основе грибов, репчатый лук, белые грибы и картофель, заправленные сметаной. Подается со свежей зеленью. КБЖУ 380/15/28/20",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/006/1000_1000_0/gspjexpn5w7cax6daq0awtlr60spv28n.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-44",
      "name": "Уха из северных рыб",
      "category": "Супы",
      "price": 650,
      "weight": "340 гр",
      "description": "Горячая и душистая уха! Рыбный бульон с семгой, муксуном, морковью и картофелем. Приправлена петрушкой и укропом. КБЖУ 221/24/8/21",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/b2e/1000_1000_0/skpvycaeydynmdthcp5f6f2gzyzewkt8.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-45",
      "name": "Солянка сборная мясная",
      "category": "Супы",
      "price": 520,
      "weight": "390 гр",
      "description": "Наваристый и пикантный суп! Куриный бульон с охотничьими колбасками, свиной грудинкой, колбасой чоризо, каперсами, солеными огурцами, репчатым луком и оливками. Подается со сметаной и зеленью. КБЖУ 415/25/30/15",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/4fe/1000_1000_0/kb08x25qwlije1cggznvn8l0w830wuly.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-46",
      "name": "Щи из кислой капусты",
      "category": "Супы",
      "price": 680,
      "weight": "460 гр",
      "description": "Наваристые щи на бульоне из копченых свиных ребер, с добавлением квашеной капусты и репчатого лука. Подаются со сметаной, горчицей, бородинским хлебом, двумя видами сала и зеленью. КБЖУ 490/28/33/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/642/1000_1000_0/eprbfnvgi0xvyhxo1k7impr7m1qtewvv.jpeg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-47",
      "name": "Щучья котлета с молодым картофелем в сметане",
      "category": "Горячие блюда",
      "price": 820,
      "weight": "310 гр",
      "description": "Сочная котлета из муксуна и щуки, панированная в муке и обжаренная, подается с мини-картофелем, припущенным в сметане, украшается зеленым луком, петрушкой и укропом. КБЖУ 686/48/36/42",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/25f/1000_1000_0/209vni3nmx1h5uj4tpld1v99awur6rln.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-48",
      "name": "Говядина по-строгановски с пюре",
      "category": "Горячие блюда",
      "price": 990,
      "weight": "350 гр",
      "description": "Нежная говядина денвер, томленная в насыщенном мясном соусе с красным вином, сметаной и сливками. Подается с картофельным пюре и соленым огурцом, украшается укропом. КБЖУ 638/48/34/34",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/ec8/1000_1000_0/o9qmq8bhk74t04k5e6qo52adc0rvim7y.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-49",
      "name": "Голубцы",
      "category": "Горячие блюда",
      "price": 620,
      "weight": "280 гр",
      "description": "Аппетитные голубцы из свино-говяжьего фарша подаются с ярким томатным соусом и мягкой взбитой сметаной, украшены свежей зеленью и хрустящим луком фри. КБЖУ 686/44/38/38",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/052/1000_1000_0/a5j2simggzyybiwt7eqb32k130s88j94.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-50",
      "name": "Котлета по-Киевски",
      "category": "Горячие блюда",
      "price": 820,
      "weight": "330 гр",
      "description": "КБЖУ 770/42/51/36",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/032/1000_1000_0/4mh2ejxv4ncm0ld1c9j23l6b4aepyd4x.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-51",
      "name": "Судак с картофелем",
      "category": "Горячие блюда",
      "price": 780,
      "weight": "200 гр",
      "description": "КБЖУ 468/38/24/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/f81/1000_1000_0/y0kjg4gtuyre9k62drupzyeft7j3sjyc.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-52",
      "name": "Томленая лосятина с жареными в сметане груздями и вешенками",
      "category": "Горячие блюда",
      "price": 1080,
      "weight": "270 гр",
      "description": "КБЖУ 386/28/22/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/bae/1000_1000_0/eni8xetc0spt7uedi82kpy0o8sj2pq34.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-53",
      "name": "Шницель по-минестерски",
      "category": "Горячие блюда",
      "price": 680,
      "weight": "350 гр",
      "description": "Отбивная из свиной корейки жареная в сухарях, подается с салатом из свежих томатов и красного лука и c соусом сацебели КБЖУ 738/52/44/34",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/682/1000_1000_0/dsdc352a8f2fmm7r6x3vne9kvvi14vbq.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-54",
      "name": "Медальоны из говядины с овощами и перечным соусом",
      "category": "Горячие блюда",
      "price": 1400,
      "weight": "330 гр",
      "description": "Два медальона из говяжьей вырезки подаются с перечным соусом и гарниром из мини-картофеля, стручковой фасоли, мини-кукурузы, помидоров черри КБЖУ 748/42/52/28",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/898/1000_1000_0/ba2td4wdr9agxl9vpoqfmkt0wsjqroso.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-55",
      "name": "Говяжий язык с соусом шампань, запеченной морковью и зеленым горошком",
      "category": "Горячие блюда",
      "price": 970,
      "weight": "290 гр",
      "description": "Отварной говяжий язык, подается с соусом шампань и гарниром из запеченной моркови и зеленым горошком КБЖУ 586/32/38/26",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/a41/1000_1000_0/1n2ankgaydp576ijn1cmpcyfxor53fr6.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-56",
      "name": "Скоблянка из оленины с молодым картофелем",
      "category": "Горячие блюда",
      "price": 1300,
      "weight": "350 гр",
      "description": "Жареная тонко нарезанная вырезка оленя, подается на картофеле, жареном с грибами и луком в сливочном соусе КБЖУ 686/48/34/44",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/396/1000_1000_0/11f118907e1hb72ws9scke6r3mv6ghpn.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-57",
      "name": "Рулет из семги со шпинатом и голландским соусом",
      "category": "Горячие блюда",
      "price": 1200,
      "weight": "300 гр",
      "description": "Рулет из семги, фаршированный сыром и шпинатом, подается на обожжённых слайсах томатов с голландским соусом КБЖУ 546/42/34/14",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/ea4/1000_1000_0/omji567lqeo7jez40wfoxscyv3cy9gwb.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-58",
      "name": "Говяжьи щечки с картофельным пюре и зеленым горошком",
      "category": "Горячие блюда",
      "price": 1100,
      "weight": "330 гр",
      "description": "Томленые говяжьи щечки, подаются с картофельным пюре, запеченной морковью и зеленым горошком в мясном соусе КБЖУ 546/44/32/26",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/47d/1000_1000_0/uxhb81vg4rvz0am5xi4mq02u6oeguygl.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-59",
      "name": "Утиная грудка с овощами и вишневым соусом",
      "category": "Горячие блюда",
      "price": 860,
      "weight": "320 гр",
      "description": "Филе утиной грудки, подается с вишневым соусом и гарниром из стручковой фасоли, болгарского перца, помидоров черри, сигменов апельсина КБЖУ 638/46/38/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/f6d/1000_1000_0/s301cxvf1s8gpyc7w8z43oc468t540eu.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-60",
      "name": "Пирожок с грибами",
      "category": "Пирожки и пироги",
      "price": 120,
      "weight": "60 гр",
      "description": "Пирожок с начинкой из обжаренных шампиньонов, с добавлением трюфельной пасты. КБЖУ 148/4/4/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/b05/1000_1000_0/ekuqm8ayam6j2yjg7mj57ykelk32pczq.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-61",
      "name": "Пирожок с капустой",
      "category": "Пирожки и пироги",
      "price": 100,
      "weight": "60 гр",
      "description": "Пирожок с начинкой из обжаренной капусты с луком. КБЖУ 138/3/4/21",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/266/1000_1000_0/teank85jw6saljze3ud4g2j3yzq5cudv.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-62",
      "name": "Пирожок с мясом",
      "category": "Пирожки и пироги",
      "price": 120,
      "weight": "60 гр",
      "description": "Пирожок с начинкой из свино-говяжьего фарша, обжаренного с луком и добавлением отварного яйца. КБЖУ 168/5/6/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/175/1000_1000_0/bjn88edmhhmkgvkp03totdwc1596lrje.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-63",
      "name": "Жареный пирог с сыром",
      "category": "Пирожки и пироги",
      "price": 740,
      "weight": "400 гр",
      "description": "Закрытый пирог с начинкой из сыра сулугуни, моцареллы, петрушки и чеснока, обжаренный на сковородке с маслом. КБЖУ 886/38/48/78",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/0bc/1000_1000_0/1fk5dlxkmw9o3nfa5qjzwzfz49am3rgz.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-64",
      "name": "Картофельное пюре",
      "category": "Гарниры",
      "price": 250,
      "weight": "150 гр",
      "description": "Нежное и воздушное картофельное пюре, приготовленное на молоке, сливочном масле и сливках. КБЖУ 286/6/18/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/437/1000_1000_0/5ws9utabzfw0sj92bgkicgl06qd5skir.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-65",
      "name": "Жареные шампиньоны",
      "category": "Гарниры",
      "price": 350,
      "weight": "100 гр",
      "description": "Ароматные шампиньоны, обжаренные с чесноком и свежей зеленью. КБЖУ 146/8/10/7",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/9d6/1000_1000_0/3vvz60aqaqikichxpzvys4qh128cz1z4.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-66",
      "name": "Молодой картофель в сметане с укропом",
      "category": "Гарниры",
      "price": 250,
      "weight": "250 гр",
      "description": "КБЖУ 386/10/22/38",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/f23/1000_1000_0/0oiuf666zdb5b1rcyalvbhra12jqubos.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-67",
      "name": "Картошка",
      "category": "Десерты",
      "price": 470,
      "weight": "210 гр",
      "description": "Классический десерт \"Картошка\" по ГОСТу, подается со свежими ягодами и нежным соусом на основе йогурта. КБЖУ 586/14/38/48",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/8c3/1000_1000_0/wabqmudwqee8xbd5d68e1ity9dnnl3ci.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-68",
      "name": "Медовик",
      "category": "Десерты",
      "price": 420,
      "weight": "160 гр",
      "description": "Классический торт \"Медовик\" с тонкими медовыми коржами и нежным сметанным кремом. КБЖУ 486/8/28/52",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/ae0/1000_1000_0/ze8a4bup862tsqnx2mf617y2v2ktx6g5.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-69",
      "name": "Наполеон",
      "category": "Десерты",
      "price": 450,
      "weight": "200 гр",
      "description": "Десерт из слоеного теста с воздушным заварным кремом. КБЖУ 690/12/55/34",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/18b/1000_1000_0/ntoj5qjl9bjrucx6xcmhvm5512h4g912.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-70",
      "name": "Сметанник",
      "category": "Десерты",
      "price": 480,
      "weight": "170 гр",
      "description": "Нежный десерт из ванильных и шоколадных коржей, пропитанных сметанным кремом, украшен свежими ягодами и белым шоколадом. КБЖУ 515/12/29/51",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/de5/1000_1000_0/gjaril30rl6b0kl94gtyg3vumnzgmm8b.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-71",
      "name": "Черничный Блинный торт",
      "category": "Десерты",
      "price": 450,
      "weight": "190 гр",
      "description": "Слоёный торт из блинов, черничного варенья, сметаны с сахарной пудрой. КБЖУ 480/13/29/42",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/5ba/1000_1000_0/4ieodity3lph3vhff3m24ko9klvhlcjq.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-72",
      "name": "Пломбир",
      "category": "Десерты",
      "price": 200,
      "weight": "100 гр",
      "description": "Классическое мороженое \"Пломбир\" собственного производства. КБЖУ 286/8/24/10",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/307/1000_1000_0/cfe7t5263u39cdof1m37kefinxv95218.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-73",
      "name": "Сырники с клубникой и малиновым соусом",
      "category": "Десерты",
      "price": 420,
      "weight": "160 гр",
      "description": "Сырники подаются с взбитой сметаной, клубникой, малиновым соусом и украшается микрозеленью. КБЖУ 340/22/19/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/517/1000_1000_0/jwpm0uwm1yz622ghqct1mfeamxu2ivny.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-74",
      "name": "Орешки со сгущенкой",
      "category": "Десерты",
      "price": 200,
      "weight": "170 гр",
      "description": "КБЖУ 546/14/35/48",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/450/1000_1000_0/iznmci34rnxvlwizxkj5uqnmnef1giq5.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-75",
      "name": "Сырники томленые в сметане",
      "category": "Десерты",
      "price": 480,
      "weight": "200 гр",
      "description": "КБЖУ 486/28/32/24",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/3c7/1000_1000_0/cwoz3xr03hp4k096ff3hv55x3asa6jiq.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-76",
      "name": "Шарлотка",
      "category": "Десерты",
      "price": 290,
      "weight": "100 гр",
      "description": "Подается со сметанным соусом КБЖУ 218/7/12/22",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/22f/1000_1000_0/migqrulseb0mfu4vdkxzu0649ytk5479.png",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-77",
      "name": "Мед",
      "category": "К чаю",
      "price": 150,
      "weight": "50 гр",
      "description": "Цветочный мёд КБЖУ 152/0/0/41",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/2e9/1000_1000_0/oc54yx1fi86a6zkr30j1hz3s6kpoimdf.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-78",
      "name": "Варенье из вишни",
      "category": "К чаю",
      "price": 150,
      "weight": "50 гр",
      "description": "Собственного производства КБЖУ 146/1/0/38",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/a33/1000_1000_0/mcf35xyvm0jl2ma33jtwxcgsyt0gaz86.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-79",
      "name": "Варенье из клубники",
      "category": "К чаю",
      "price": 150,
      "weight": "50 гр",
      "description": "Собственного производства КБЖУ 64/1/0/16",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/2e5/1000_1000_0/ix6qkkuwaaytuz5y2hs6uudk22qnflj0.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-80",
      "name": "Варенье из черники",
      "category": "К чаю",
      "price": 200,
      "weight": "50 гр",
      "description": "Собственного производства КБЖУ 126/1/0/32",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/d5e/1000_1000_0/n14o59m2ay06tkv740l39qjgrxv5csh7.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-81",
      "name": "Хлеб бородинский",
      "category": "Хлеб",
      "price": 120,
      "weight": "80 гр",
      "description": "КБЖУ 192/5/1/39",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/640/1000_1000_0/zrvduultp7r2y711czf3ims7o0xruznn.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-82",
      "name": "Хлеб зерновой",
      "category": "Хлеб",
      "price": 120,
      "weight": "65 гр",
      "description": "КБЖУ 184/7/2/33",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/72b/1000_1000_0/ehlaewytzrmt714jknhy72tcoxnobrbd.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-83",
      "name": "Багет",
      "category": "Хлеб",
      "price": 120,
      "weight": "40 гр",
      "description": "КБЖУ 224/6/0/46",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/9e5/1000_1000_0/bhofvyqlllj73h7t74ns5f93cv54wjn5.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    },
    {
      "id": "melodiya-84",
      "name": "Хлебная корзина с маслом",
      "category": "Хлеб",
      "price": 350,
      "weight": "200 гр",
      "description": "КБЖУ 513/16/10/87",
      "image": "https://melodiya.rest/upload/resize_cache/iblock/034/1000_1000_0/r1o669gq1wngjj3t18pland0uc6kzne4.jpg",
      "source": "https://melodiya.rest/menu/osnovnoe-menyu/"
    }
  ],
  "zonda": [
    {
      "id": "zonda-1",
      "name": "огурцы кимчи",
      "category": "Стартеры",
      "price": 200,
      "weight": "80 г",
      "description": "кбжу 38/2/1/8",
      "image": "https://static.tildacdn.com/tild6234-3939-4866-a131-316236636562/SHY06066w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-2",
      "name": "шиитаке лемонграсс",
      "category": "Стартеры",
      "price": 200,
      "weight": "70 г",
      "description": "кбжу 42/2/1/8",
      "image": "https://static.tildacdn.com/tild6331-3037-4766-b766-313230366334/SHY06075w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-3",
      "name": "капуста кимчи",
      "category": "Стартеры",
      "price": 200,
      "weight": "80 г",
      "description": "кбжу 42/3/1/7",
      "image": "https://static.tildacdn.com/tild6664-6637-4566-b162-383062323034/SHY03693.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-4",
      "name": "коралловые грибы кимчи",
      "category": "Стартеры",
      "price": 200,
      "weight": "100 г",
      "description": "кбжу 56/3/2/7",
      "image": "https://static.tildacdn.com/tild3732-6131-4363-b864-646234623237/IMG_5313_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-5",
      "name": "ошидзуси лосось 10 шт.",
      "category": "Raw",
      "price": 1100,
      "weight": "",
      "description": "лосось, рис, соус спайси, лук сибулет кбжу 548/34/28/39 кбжу 826/51/43/60",
      "image": "https://static.tildacdn.com/tild3533-3431-4564-b236-356663663838/SHY06489w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-6",
      "name": "ошидзуси лосось 16 шт.",
      "category": "Raw",
      "price": 1500,
      "weight": "",
      "description": "лосось, рис, соус спайси, лук сибулет кбжу 548/34/28/39 кбжу 826/51/43/60",
      "image": "https://static.tildacdn.com/tild3533-3431-4564-b236-356663663838/SHY06489w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-7",
      "name": "ошидзуси тунец 10 шт.",
      "category": "Raw",
      "price": 850,
      "weight": "",
      "description": "тунец, рис, соус спайси, лук сибулет кбжу 502/46/22/38 кбжу 724/67/32/56",
      "image": "https://static.tildacdn.com/tild6330-3134-4235-b338-383862656562/SHY06520w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-8",
      "name": "ошидзуси тунец 16 шт.",
      "category": "Raw",
      "price": 1200,
      "weight": "",
      "description": "тунец, рис, соус спайси, лук сибулет кбжу 502/46/22/38 кбжу 724/67/32/56",
      "image": "https://static.tildacdn.com/tild6330-3134-4235-b338-383862656562/SHY06520w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-9",
      "name": "ошидзуси угорь 10 шт.",
      "category": "Raw",
      "price": 990,
      "weight": "",
      "description": "угорь, рис, соус унаги, соус спайси, кунжут, лук сибулет кбжу 618/32/36/42 кбжу 934/49/55/64",
      "image": "https://static.tildacdn.com/tild3730-3865-4065-b639-623866666236/SHY01931w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-10",
      "name": "ошидзуси угорь 16 шт.",
      "category": "Raw",
      "price": 1400,
      "weight": "",
      "description": "угорь, рис, соус унаги, соус спайси, кунжут, лук сибулет кбжу 618/32/36/42 кбжу 934/49/55/64",
      "image": "https://static.tildacdn.com/tild3730-3865-4065-b639-623866666236/SHY01931w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-11",
      "name": "ошидзуси zonda 10 шт.",
      "category": "Raw",
      "price": 1400,
      "weight": "",
      "description": "рис, тунец, лосось, икра тобико, красная икра, авокадо, спайси соус кбжу 874/52/46/62 кбжу 1362/82/73/98",
      "image": "https://static.tildacdn.com/tild6639-3639-4031-b336-393932303139/SHY07737w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-12",
      "name": "ошидзуси zonda 16 шт.",
      "category": "Raw",
      "price": 1800,
      "weight": "",
      "description": "рис, тунец, лосось, икра тобико, красная икра, авокадо, спайси соус кбжу 874/52/46/62 кбжу 1362/82/73/98",
      "image": "https://static.tildacdn.com/tild6639-3639-4031-b336-393932303139/SHY07737w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-13",
      "name": "лосось",
      "category": "Сашими",
      "price": 690,
      "weight": "60 г",
      "description": "кбжу 238/22/15/2",
      "image": "https://static.tildacdn.com/tild3239-3836-4435-b436-303563316130/SHY05729w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-14",
      "name": "тунец",
      "category": "Сашими",
      "price": 450,
      "weight": "60 г",
      "description": "кбжу 156/28/4/2",
      "image": "https://static.tildacdn.com/tild6232-3938-4530-b639-623863346262/SHY05742w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-15",
      "name": "гребешок",
      "category": "Сашими",
      "price": 880,
      "weight": "60 г",
      "description": "кбжу 146/22/3/5",
      "image": "https://static.tildacdn.com/tild6536-6438-4438-a137-393965643135/SHY05758w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-16",
      "name": "лосось",
      "category": "Суши",
      "price": 220,
      "weight": "30 г",
      "description": "кбжу 124/12/7/2",
      "image": "https://static.tildacdn.com/tild3938-6138-4661-b239-323438343538/SHY05783w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-17",
      "name": "говядина и фуа-гра",
      "category": "Суши",
      "price": 350,
      "weight": "3шт./90 г",
      "description": "рис, говядина, опаленная с фуа-гра, васаби, соус красное вино кбжу 268/22/16/8",
      "image": "https://static.tildacdn.com/tild3438-3537-4664-a365-333764346562/DSC00187.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-18",
      "name": "угорь",
      "category": "Суши",
      "price": 250,
      "weight": "30 г",
      "description": "кбжу 136/10/8/4",
      "image": "https://static.tildacdn.com/tild3863-3033-4831-a131-363035363863/SHY05838w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-19",
      "name": "тунец",
      "category": "Суши",
      "price": 150,
      "weight": "30 г",
      "description": "кбжу 88/16/2/2",
      "image": "https://static.tildacdn.com/tild3865-6435-4932-b436-353934623330/SHY05795w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-20",
      "name": "гребешок",
      "category": "Суши",
      "price": 280,
      "weight": "30 г",
      "description": "кбжу 84/12/2/3",
      "image": "https://static.tildacdn.com/tild3739-3638-4638-b438-383031666632/SHY05812w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-21",
      "name": "опаленный лосось",
      "category": "Суши",
      "price": 250,
      "weight": "35 г",
      "description": "кбжу 142/13/7/5",
      "image": "https://static.tildacdn.com/tild3465-3439-4863-a539-353637643865/SHY05856w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-22",
      "name": "лосось и авокадо",
      "category": "Суши",
      "price": 250,
      "weight": "30 г",
      "description": "кбжу 136/12/8/3",
      "image": "https://static.tildacdn.com/tild6265-3038-4465-a163-343034393761/SHY07654w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-23",
      "name": "креветка и икра",
      "category": "Суши",
      "price": 250,
      "weight": "30 г",
      "description": "кбжу 148/18/7/4",
      "image": "https://static.tildacdn.com/tild3430-3039-4130-a262-666361626330/IMG_5353_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-24",
      "name": "острые суши с лососем",
      "category": "Острые суши",
      "price": 450,
      "weight": "2 шт./70 г",
      "description": "кбжу 254/18/15/10",
      "image": "https://static.tildacdn.com/tild6436-3066-4230-b832-343433613163/SHY07779w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-25",
      "name": "острые суши с тунцом",
      "category": "Острые суши",
      "price": 270,
      "weight": "2 шт./70 г",
      "description": "кбжу 218/20/11/11",
      "image": "https://static.tildacdn.com/tild3230-6233-4236-a230-363837663664/SHY07800w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-26",
      "name": "острые суши с угрем",
      "category": "Острые суши",
      "price": 420,
      "weight": "2 шт./70 г",
      "description": "кбжу 282/16/17/14",
      "image": "https://static.tildacdn.com/tild6666-6262-4231-a364-323361346361/SHY07823w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-27",
      "name": "острые суши с крабом",
      "category": "Острые суши",
      "price": 780,
      "weight": "2 шт./70 г",
      "description": "кбжу 216/14/12/12",
      "image": "https://static.tildacdn.com/tild3861-6661-4431-b565-393639616636/SHY07807w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-28",
      "name": "филадельфия",
      "category": "Роллы",
      "price": 950,
      "weight": "210 г",
      "description": "лосось, рис, сливочный сыр, огурец кбжу 546/38/32/26",
      "image": "https://static.tildacdn.com/tild6264-3731-4461-a564-343735393866/SHY06284w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-29",
      "name": "ролл с угрем и фуа-гра",
      "category": "Роллы",
      "price": 980,
      "weight": "180 г",
      "description": "угорь, манго, рис, авокадо, сливочный сыр, фуа-гра, кунжут, соус красное вино кбжу 486/28/30/26",
      "image": "https://static.tildacdn.com/tild3530-3432-4136-a361-663436396533/DSC00015.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-30",
      "name": "NEW Лава ролл Бонито с лососем и запеченным перцем",
      "category": "Роллы",
      "price": 850,
      "weight": "240 г",
      "description": "Рис, нори, сливочный сыр, лосось, запеченный перец, зеленый лук, соус кимчи, стружка тунца, сырный соус кбжу 542/38/30/30",
      "image": "https://static.tildacdn.com/tild3366-3863-4930-b732-313265346262/zonda_photo_019.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-31",
      "name": "NEW Лава ролл с угрем и темпурной креветкой",
      "category": "Роллы",
      "price": 890,
      "weight": "240 г",
      "description": "Рис, нори, сливочный сыр, темпурные креветки, авокадо, манго, угорь, трюфельный соус, тобико, сырный соус, соус унаги кбжу 684/38/40/42",
      "image": "https://static.tildacdn.com/tild6139-3938-4534-b264-343961633662/zonda_photo_018.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-32",
      "name": "ролл с тартаром из лосося и темпурной креветкой",
      "category": "Роллы",
      "price": 820,
      "weight": "200 г",
      "description": "рис, нори, креветка темпура, салат романо, авокадо, лосось, соус понзу, соус маракуйя, лук сибулет кбжу 468/34/26/24",
      "image": "https://static.tildacdn.com/tild3065-3938-4665-a538-306235643132/2025-09-23_120916.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-33",
      "name": "лосось, креветка и гребешок",
      "category": "Роллы",
      "price": 1200,
      "weight": "230 г",
      "description": "авокадо, рис, лосось, манго, креветка, гребешок, соус икорный, соус унаги кбжу 556/38/32/30",
      "image": "https://static.tildacdn.com/tild3065-6330-4734-b235-616562343761/SHY06299w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-34",
      "name": "запеченный ролл четыре сыра с темпурной креветкой",
      "category": "Роллы",
      "price": 590,
      "weight": "220 г",
      "description": "рис, нори, сыры чеддер, сливочный, тофу и пармезан, креветка в темпуре кбжу 586/34/36/28",
      "image": "https://static.tildacdn.com/tild3265-6361-4430-b738-623732663037/IMG_3626_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-35",
      "name": "калифорния с крабом",
      "category": "Роллы",
      "price": 1300,
      "weight": "180 г",
      "description": "краб, рис, нори, соус спайси, авокадо, икра тобико кбжу 468/24/28/28",
      "image": "https://static.tildacdn.com/tild3763-3364-4532-b264-643938316530/BUSH5814.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-36",
      "name": "запеченная калифорния",
      "category": "Роллы",
      "price": 990,
      "weight": "230 г",
      "description": "кбжу 536/28/32/32",
      "image": "https://static.tildacdn.com/tild3036-3330-4436-b436-643535333438/IMG_5144_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-37",
      "name": "лосось, креветка и авокадо",
      "category": "Роллы",
      "price": 690,
      "weight": "190 г",
      "description": "лосось, рис, авокадо, сливочный сыр, креветка темпура, шичими кбжу 524/34/30/30",
      "image": "https://static.tildacdn.com/tild3761-6239-4337-b436-393333363363/SHY06410w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-38",
      "name": "креветка, манго и маракуйя",
      "category": "Роллы",
      "price": 780,
      "weight": "210 г",
      "description": "креветки, рис, манго, сливочный сыр, соус маракуйя, икра лососевая кбжу 684/32/26/32",
      "image": "https://static.tildacdn.com/tild6132-6662-4066-b937-363861383631/SHY06776w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-39",
      "name": "Опаленный лосось",
      "category": "Роллы",
      "price": 980,
      "weight": "240 г",
      "description": "Рис, нори, лосось, авокадо, манго, сливочный сыр, красная икра кбжу 538/36/32/28",
      "image": "https://static.tildacdn.com/tild3461-6365-4664-a162-346461623937/7I4A0235_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-40",
      "name": "угорь, трюфель и креветка",
      "category": "Роллы",
      "price": 890,
      "weight": "255 г",
      "description": "креветки темпура, рис, угорь, трюфельный соус, авокадо, трюфельное масло, соус унаги, кунжут кбжу 628/28/30/26",
      "image": "https://static.tildacdn.com/tild3334-3335-4436-b461-653138393630/IMG_5409_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-41",
      "name": "темпурный ролл с креветкой и авокадо",
      "category": "Роллы",
      "price": 640,
      "weight": "240 г",
      "description": "креветки темпура, рис, авокадо, сливочный сыр, икра тобико, соусы: икорный, унаги и сладкий васаби кбжу 624/32/36/42",
      "image": "https://static.tildacdn.com/tild3936-3731-4662-b166-366639636533/SHY04701.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-42",
      "name": "темпурный ролл с угрем, авокадо и мандариновым соусом",
      "category": "Роллы",
      "price": 780,
      "weight": "220 г",
      "description": "рис, авокадо, сливочный сыр, угорь и мандариновый соус, соус унаги, кунжут кимчи кбжу 524/28/32/32",
      "image": "https://static.tildacdn.com/tild3161-3566-4562-a531-306161303830/DSC00152.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-43",
      "name": "темпурный ролл с лососем и манго",
      "category": "Роллы",
      "price": 690,
      "weight": "240 г",
      "description": "лосось темпура, рис, манго, сливочный сыр, соусы: унаги, икорный и маракуйя кбжу 586/36/32/40",
      "image": "https://static.tildacdn.com/tild3331-6133-4162-b436-393231303961/SHY04689.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-44",
      "name": "татаки из говядины с фуа-гра",
      "category": "Закуски",
      "price": 750,
      "weight": "110 г",
      "description": "тонко нарезанный стейк стриплойн, подается с опаленным фуа-гра и трюфельным соусом кбжу 248/24/24/7",
      "image": "https://static.tildacdn.com/tild6233-6662-4838-a566-346137323438/DSC00238.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-45",
      "name": "new Кимчи с попкорном из креветок и сырными шариками",
      "category": "Закуски",
      "price": 450,
      "weight": "170 г",
      "description": "Капуста кимчи, с попкорном из креветок, с шариками из сливочного сыра в кунжуте кимчи кбжу 476/28/26/30",
      "image": "https://static.tildacdn.com/tild3033-3034-4433-a238-626164623536/zonda_photo_020.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-46",
      "name": "бао бургер с креветками",
      "category": "Закуски",
      "price": 550,
      "weight": "320 г",
      "description": "булочка бао, креветки в темпуре, кукуруза в темпуре, шпинат, капуста кимчи, красный лук, соус сладкий васаби, соус сладкий чили, кунжут кбжу 584/32/28/49",
      "image": "https://static.tildacdn.com/tild3634-3664-4764-a564-633639373566/IMG_1642_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-47",
      "name": "креветки васаби",
      "category": "Закуски",
      "price": 490,
      "weight": "150 г",
      "description": "креветки темпура, соус сладкий васаби, красная икра тобика, перец чили, микрозелень кбжу 394/27/22/20",
      "image": "https://static.tildacdn.com/tild3861-6632-4730-b865-343034616235/2025-09-23_121207.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-48",
      "name": "тартар из лосося",
      "category": "Закуски",
      "price": 870,
      "weight": "170 г",
      "description": "лосось, авокадо, манго, соус маракуйя, чипс из нори в темпуре кбжу 412/28/23/20",
      "image": "https://static.tildacdn.com/tild6161-3135-4131-a537-323731373436/SHY03668.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-49",
      "name": "тартар из говядины",
      "category": "Закуски",
      "price": 750,
      "weight": "170 г",
      "description": "тартар из говядины в азиатском стиле: говяжья вырезка, лук шалот, шиитаке, кинза, соус кимчи, икра палтуса, нори кбжу 276/23/17/8",
      "image": "https://static.tildacdn.com/tild6666-3763-4135-a333-653639343861/IMG_9319_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-50",
      "name": "эбияки",
      "category": "Закуски",
      "price": 890,
      "weight": "350 г",
      "description": "пончики из батата с начинкой из креветок с соусом спайси, подается с соусом окономияки, икорным соусом, зеленым луком и стружкой тунца кбжу 533/34/26/42",
      "image": "https://static.tildacdn.com/tild3161-3337-4064-b865-363261663835/SHY02679w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-51",
      "name": "батат фри",
      "category": "Закуски",
      "price": 350,
      "weight": "120г",
      "description": "подается с сырным соусом кбжу 387/8/22/38",
      "image": "https://static.tildacdn.com/tild3233-3937-4663-b036-343435323030/7I4A0247_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-52",
      "name": "попкорн из креветок с кукурузой темпура",
      "category": "Закуски",
      "price": 490,
      "weight": "150 г",
      "description": "креветки темпура с соусом сладкий чили с васаби, авокадо и кукуруза темпура кбжу 463/27/24/31",
      "image": "https://static.tildacdn.com/tild6264-3936-4064-b834-366235373932/SHY06645w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-53",
      "name": "салат с креветками и ананасом",
      "category": "Салаты",
      "price": 690,
      "weight": "180 г",
      "description": "креветки, шпинат, романо, руккола, ананас, черри кимчи, красный лук, пряная томатная заправка кбжу 296/24/15/18",
      "image": "https://static.tildacdn.com/tild3337-3937-4536-b633-313461386562/IMG_4506_.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-54",
      "name": "new Салат с хрустящими баклажанами, помидорами и манго",
      "category": "Салаты",
      "price": 520,
      "weight": "520 г",
      "description": "Помидоры, баклажаны в хрустящем кляре, манго, соус соевый сладкий чили кбжу 386/12/18/44",
      "image": "https://static.tildacdn.com/tild6465-3738-4630-a532-373736343839/zonda_photo_022.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-55",
      "name": "салат со стейком из тунца и запеченным перцем",
      "category": "Салаты",
      "price": 740,
      "weight": "210 г",
      "description": "шпинат, романо, руккола, свежий огурец, авокадо, запеченный перец, обжаренный в кунжуте тунец, зеленый лук, имбирная заправка кбжу 372/28/20/18",
      "image": "https://static.tildacdn.com/tild3962-6333-4563-a263-643163663336/IMG_4494_.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-56",
      "name": "черный цезарь с митболлами из курицы и креветок",
      "category": "Салаты",
      "price": 580,
      "weight": "210 г",
      "description": "романо, митболы из курицы и креветок, соус чёрный цезарь, попкорн из гречки, сыр грано подано, зелёный лук, цветы фиалки кбжу 418/34/22/16",
      "image": "https://static.tildacdn.com/tild6138-3866-4334-b234-346534643034/IMG_4464_.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-57",
      "name": "Зеленый салат с авокадо",
      "category": "Салаты",
      "price": 590,
      "weight": "180 г",
      "description": "огурец, авокадо, чука-салат, бобы эдамаме, шпинат, романо, руккола, соус зеленый чатни кбжу 384/8/32/16",
      "image": "https://static.tildacdn.com/tild3433-3930-4031-a564-306337646562/IMG_4483_.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-58",
      "name": "Салат с лососем и сырными шариками",
      "category": "Салаты",
      "price": 790,
      "weight": "210 г",
      "description": "шпинат, романо, рукола, сливочный сыр в кунжуте, лосось, черри, авокадо, соус шисо кбжу 428/26/28/16",
      "image": "https://static.tildacdn.com/tild6134-3364-4531-b533-633837646138/IMG_4475_.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-59",
      "name": "гедза с говядиной и грибным соусом",
      "category": "Гедза и димсамы",
      "price": 450,
      "weight": "180 г",
      "description": "мраморная говядина, шампиньоны, капуста, зеленый лук, сливочный грибной соус кбжу 608/37/38/25",
      "image": "https://static.tildacdn.com/tild3161-3135-4236-b230-623339626264/SHY06121.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-60",
      "name": "Гёдза с лососем и креветками в сырном бульоне",
      "category": "Гедза и димсамы",
      "price": 840,
      "weight": "380 г",
      "description": "Открытые гедза с креветками и рубленым лососем, подаются в наваристом бульоне с добавлением плавленного сыра кбжу 642/48/34/31",
      "image": "https://static.tildacdn.com/tild6631-6430-4461-a362-343666326130/IMG_5130_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-61",
      "name": "гедза со свининой",
      "category": "Гедза и димсамы",
      "price": 420,
      "weight": "180 г",
      "description": "свинина, капуста, зеленый лук, кинза, ростки бамбука, подается с грибами эноки, соусом понзу и зеленым маслом кбжу 598/28/43/22",
      "image": "https://static.tildacdn.com/tild3365-6632-4636-b737-376635303034/SHY06139w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-62",
      "name": "гедза с креветками и сыром",
      "category": "Гедза и димсамы",
      "price": 520,
      "weight": "250г",
      "description": "гедза с начинкой из креветок и моцареллы, подается в воздушном сырном соусе кбжу 547/30/36/20",
      "image": "https://static.tildacdn.com/tild3635-6433-4765-b233-313864316636/IMG_5355_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-63",
      "name": "димсамы с крабом и креветками",
      "category": "Гедза и димсамы",
      "price": 850,
      "weight": "120 г﻿",
      "description": "краб, креветки кбжу 384/26/20/22",
      "image": "https://static.tildacdn.com/tild6163-3862-4638-a230-643564333737/IMG_7037.PNG",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-64",
      "name": "рамэн со свиной грудинкой",
      "category": "Супы",
      "price": 550,
      "weight": "0,5 л",
      "description": "куриный бульон, свиная грудинка, лапша удон, маринованное яйцо, шиитаке, помидоры гриль, зеленый лук, ростки сои, соус шрирача кбжу 712/42/38/46",
      "image": "https://static.tildacdn.com/tild3562-6430-4166-b463-353463663962/DSC00036.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-65",
      "name": "рамэн с уткой",
      "category": "Супы",
      "price": 650,
      "weight": "0,5 л",
      "description": "куриный бульон, копченая утка, лапша удон, маринованное яйцо, эноки, соломенные грибы, зеленый лук, соус шрирача кбжу 624/46/28/44",
      "image": "https://static.tildacdn.com/tild3032-3530-4932-b663-323731616631/DSC06218_copy.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-66",
      "name": "Трюфельный рамэн с татаки из говядины",
      "category": "Супы",
      "price": 720,
      "weight": "0,5 л",
      "description": "Куриный бульон, сливки, кокосовое молоко, трюфельная паста, пшеничная лапша, маринованное яйцо, пак чой кимчи, нори, обожженные слайсы говядины, зеленый лук, кинза кбжу 638/48/30/42",
      "image": "https://static.tildacdn.com/tild3965-3465-4165-a230-613836316662/IMG_2463_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-67",
      "name": "сырный рамэн",
      "category": "Супы",
      "price": 690,
      "weight": "0,5 л",
      "description": "наваристый куриный бульон с добавлением карри пасты и плавленого сыра, лапша удон, маринованное яйцо, креветки темпура, шпинат, зеленый лук, шрирача, нори кбжу 658/44/32/47",
      "image": "https://static.tildacdn.com/tild3430-3735-4465-b739-323566633731/IMG_8452_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-68",
      "name": "фо бо с брискетом — 0,5 л",
      "category": "Супы",
      "price": 790,
      "weight": "0,5 л",
      "description": "говяжий бульон, рисовая лапша, говядина, зелёный и красный лук, ростки сои, кинза, соус шрирача, чили, лайм, мята кбжу 486/38/16/44 кбжу 738/58/25/68",
      "image": "https://static.tildacdn.com/tild3638-3234-4665-a534-393966346133/SHY06556w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-69",
      "name": "фо бо с брискетом — 1 л",
      "category": "Супы",
      "price": 850,
      "weight": "1 л",
      "description": "говяжий бульон, рисовая лапша, говядина, зелёный и красный лук, ростки сои, кинза, соус шрирача, чили, лайм, мята кбжу 486/38/16/44 кбжу 738/58/25/68",
      "image": "https://static.tildacdn.com/tild3638-3234-4665-a534-393966346133/SHY06556w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-70",
      "name": "момо с пшеничной лапшой",
      "category": "Супы",
      "price": 680,
      "weight": "0,6 л",
      "description": "куриный бульон с грибами, пшеничная лапша, сливками, томатами и кокосовым молоком, момо с курицей и креветками, брокколи, соломенные грибы, зеленый лук, соус шрирача кбжу 587/42/24/48",
      "image": "https://static.tildacdn.com/tild3666-3234-4835-b133-663864316135/SHY06592w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-71",
      "name": "том ям",
      "category": "Супы",
      "price": 820,
      "weight": "0,5 л",
      "description": "бульон из креветочных панцирей с кокосовым молоком и пастой том-ям, черри, шиитаке, вонголе, тигровые креветки, рис, соус шрирача кбжу 468/36/16/42",
      "image": "https://static.tildacdn.com/tild3438-3566-4766-b734-653536326562/DSC08452_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-72",
      "name": "бургер zonda",
      "category": "Горячее",
      "price": 780,
      "weight": "270/70/20 г",
      "description": "булочка бао, котлета из курицы и креветок, шпинат, яблоки кимчи, красный лук, икорный соус, мини темпурные роллы с огурцом кбжу 724/44/38/49",
      "image": "https://static.tildacdn.com/tild3762-3236-4235-b964-666133316637/SHY04344.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-73",
      "name": "утка по-пекински",
      "category": "Горячее",
      "price": 3000,
      "weight": "600/120/40 г",
      "description": "классическая утка по-пекински, паровые тонкие лепешки, огурец, зеленый лук, соус черный перец кбжу 1490/95/104/42",
      "image": "https://static.tildacdn.com/tild3331-6261-4035-b231-336338623236/DSC06708_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-74",
      "name": "утка по-пекински 1/2",
      "category": "Горячее",
      "price": 1750,
      "weight": "300/120/40 г",
      "description": "половина классической утки по-пекински, паровые тонкие лепешки, огурец, зеленый лук, соус черный перец кбжу 745/47/52/21",
      "image": "https://static.tildacdn.com/tild3134-6339-4134-b837-366636646364/DSC06713_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-75",
      "name": "омурайсу с креветками",
      "category": "Горячее",
      "price": 680,
      "weight": "320 г",
      "description": "креветки, рис, лук, морковь, омлет, соус томатный карри, подается с соусом сладкий васаби и унаги кбжу 589/32/27/51",
      "image": "https://static.tildacdn.com/tild3139-3231-4763-a164-386364363561/IMG_0841_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-76",
      "name": "рисовая лапша с морепродуктами и соусом том ям",
      "category": "Горячее",
      "price": 680,
      "weight": "350 г",
      "description": "креветки, вонголе, рисовая лапша, соус том-ям кбжу 486/33/17/48",
      "image": "https://static.tildacdn.com/tild6633-3265-4566-a562-633038376433/IMG_5748_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-77",
      "name": "пад тай с креветками",
      "category": "Горячее",
      "price": 790,
      "weight": "350 г",
      "description": "рисовая лапша, креветки, яйцо, лук красный, лук зеленый, ростки сои, кинза, чили перец, соус пад-тай, арахис кбжу 523/29/18/56",
      "image": "https://static.tildacdn.com/tild6663-3637-4164-b833-633837653336/zeHM8t-H2eRHg7-uRtCl.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-78",
      "name": "Черная лапша с каракатицами",
      "category": "Горячее",
      "price": 740,
      "weight": "300 г",
      "description": "Рисовая лапша с добавление чернил каракатицы, жареные каракатицы в пикантном соусе и сливочно-кокосовый соус кбжу 491/36/20/40",
      "image": "https://static.tildacdn.com/tild6437-3039-4930-a130-636336373239/IMG_2508_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-79",
      "name": "утиная грудка с овощами темпура",
      "category": "Горячее",
      "price": 880,
      "weight": "250 г",
      "description": "копченое утиное филе в соусе пад-тай, баклажан, цукини, брокколи, болгарский перец, обжаренные в темпуре, кунжут, соус сладкий васаби, кисло-сладкий соус кбжу 596/38/33/29",
      "image": "https://static.tildacdn.com/tild6533-3765-4434-b835-333862393261/DSC00328.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-80",
      "name": "удон с курицей и креветками",
      "category": "Горячее",
      "price": 640,
      "weight": "325 г",
      "description": "пшеничная лапша, креветки, филе куриного бедра, огурец, красный лук, ростки сои, грибы шиитаке, зеленый лук, кинза, соус черный перец кбжу 557/39/23/47",
      "image": "https://static.tildacdn.com/tild3061-3666-4238-b636-346138363866/fKqInKw3d7bLFOeFnMGn.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-81",
      "name": "соба с говядиной и древесными грибами",
      "category": "Горячее",
      "price": 640,
      "weight": "310 г",
      "description": "гречневая лапша, жареная говядина, болгарский перец, древесные грибы, кунжут кимчи, соус черный перец, зеленый лук кбжу 612/42/31/38",
      "image": "https://static.tildacdn.com/tild6263-6166-4766-b431-363961363835/IMG_0761_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-82",
      "name": "лапша хурасаме с креветками в сырном соусе",
      "category": "Горячее",
      "price": 860,
      "weight": "320 г",
      "description": "крахмальная лапша, креветки, брокколи, сливочно-сырный соус, зеленый лук кбжу 634/41/28/49",
      "image": "https://static.tildacdn.com/tild3831-3566-4431-b539-383536393230/IMG_3616_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-83",
      "name": "жареный рис с осьминогом",
      "category": "Горячее",
      "price": 980,
      "weight": "260 г",
      "description": "рис, осьминог, лук, морковь, чернила каракатицы, соус унаги, яйцо, кунжут кбжу 498/24/19/52",
      "image": "https://static.tildacdn.com/tild3233-3433-4830-b630-326332353065/zeHM8t-H2eRHg7-uRtCl.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-84",
      "name": "Морской окунь в чешуе из рисовой бумаги с теплым салатом",
      "category": "Горячее",
      "price": 880,
      "weight": "260 г",
      "description": "Филе морского окуня обжаренное в хлопьях из рисовой бумаги, подается на жаренных цукини, брокколи, шпинате и красном луке в кисло-остром соусе кбжу 394/31/18/26",
      "image": "https://static.tildacdn.com/tild3437-3633-4164-b234-363566373664/IMG_2585_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-85",
      "name": "жареный рис с угрем и тофу",
      "category": "Горячее",
      "price": 690,
      "weight": "280 г",
      "description": "рис, угорь, копченый тофу, устричный соус, кинза, зеленый лук, кунжут кбжу 567/29/22/58",
      "image": "https://static.tildacdn.com/tild3235-3634-4435-b765-396639303965/SHY02075w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-86",
      "name": "стейк из говядины с креветками в соусе шампань",
      "category": "Горячее",
      "price": 1300,
      "weight": "320 г",
      "description": "стейк из говядины с креветками и вонголе, соус на основе сливок, игристого и красной икры кбжу 638/47/38/14",
      "image": "https://static.tildacdn.com/tild3166-6331-4633-a136-313931646433/IMG_1579_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-87",
      "name": "токпокки с лапшой и томленой свининой",
      "category": "Горячее",
      "price": 650,
      "weight": "410 г",
      "description": "рисовые палочки, пшеничная лапша, томленая свинина, капуста кимчи, шиитаке, ростки бамбука, томатный соус кимчи, зеленый лук, кинза кбжу 738/38/41/38",
      "image": "https://static.tildacdn.com/tild6263-3662-4566-a562-666330623335/IMG_0812_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-88",
      "name": "свиные ребрышки по-китайски",
      "category": "Горячее",
      "price": 860,
      "weight": "330 г",
      "description": "томленые свиные ребрышки с имбирем, чили и чесноком, огурец, болгарский перец кбжу 683/35/49/22",
      "image": "https://static.tildacdn.com/tild3661-3964-4164-b130-316432353039/DSC06684_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-89",
      "name": "Горячий сет из морепродуктов",
      "category": "Горячее",
      "price": 2800,
      "weight": "750 г",
      "description": "Запеченные устрицы, осьминог, креветки в темпуре, вонголе, щупальца кальмаров, жареные каракатицы кбжу 862/68/41/43",
      "image": "https://static.tildacdn.com/tild3761-3731-4033-a232-653436346262/IMG_2552_1.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-90",
      "name": "моти черная смородина и авокадо",
      "category": "Десерты",
      "price": 250,
      "weight": "80 г",
      "description": "авокадо, гель из черной смородины кбжу 251/6/17/21",
      "image": "https://static.tildacdn.com/tild3061-6130-4535-b736-393539363235/DSC00223.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-91",
      "name": "моти соленая карамель",
      "category": "Десерты",
      "price": 250,
      "weight": "60 г",
      "description": "соленая карамель, кедровый орех кбжу 226/6/14/20",
      "image": "https://static.tildacdn.com/tild6661-6232-4633-b030-356132313231/SHY01972w.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-92",
      "name": "моти с малиной и мятой",
      "category": "Десерты",
      "price": 320,
      "weight": "80 г",
      "description": "мятный крем, малиновый соус, малина кбжу 238/6/15/21",
      "image": "https://static.tildacdn.com/tild6434-6137-4539-a539-663762333535/IMG_5164_2.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-93",
      "name": "Мороженое \"вьетнамский кофе\"",
      "category": "Десерты",
      "price": 450,
      "weight": "180 г",
      "description": "кофейное мороженое с добавлением сгущенки, гель маракуйя, карамелизированный банан, сироп из хереса кбжу 492/10/29/47",
      "image": "https://static.tildacdn.com/tild3863-6134-4631-a364-356162353266/zeHM8t-H2eRHg7-uRtCl.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-94",
      "name": "new Дайфуку ролл с кремом из кешью и малиной",
      "category": "Десерты",
      "price": 490,
      "weight": "140 г",
      "description": "Тесто для моти, крем из кешью, малина, гель маракуйя, крамбл из авокадо кбжу 418/12/28/30",
      "image": "https://static.tildacdn.com/tild6438-3230-4032-b166-613564306466/zonda_photo_021.png",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-95",
      "name": "павлова по-новозеландски",
      "category": "Десерты",
      "price": 550,
      "weight": "130 г",
      "description": "меренга, сливочный крем с белым шоколадом, клубника, маракуйя, гель из маракуйи кбжу 467/8/33/35",
      "image": "https://static.tildacdn.com/tild3332-3333-4239-a236-333535333334/IMG_8404_.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-96",
      "name": "матча фондан с каплей дождя",
      "category": "Десерты",
      "price": 420,
      "weight": "140 г",
      "description": "фондан из белого шоколада с добавлением чая матча в дуэте с японским десертом \"капля дождя\" с юдзу кбжу 587/14/42/36",
      "image": "https://static.tildacdn.com/tild6230-3437-4164-a137-663632356432/SHY03702.jpg",
      "source": "https://zonda.rest/"
    },
    {
      "id": "zonda-97",
      "name": "Экзотическое мороженое",
      "category": "Десерты",
      "price": 480,
      "weight": "160 г",
      "description": "кокосовое, манго, мятное, молочный и белый шоколад, миндаль в карамели, гель из маракуйя кбжу 524/11/34/42",
      "image": "https://static.tildacdn.com/tild3338-3938-4930-a538-636635316466/IMG_1702_.jpg",
      "source": "https://zonda.rest/"
    }
  ],
  "guru": [
    {
      "id": "guru-1",
      "name": "Бадриджани",
      "category": "holodnye-zakuski",
      "price": 440,
      "weight": "130 г",
      "description": "Рулетики из баклажанов с начинкой из трех видов орехов: грецкого, пекана и фундука. Обязательно приправлено грузинскими специями, подаются с малиновым соусом.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/badridzhani-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-2",
      "name": "Гебжалия с надуги и мятным мацони",
      "category": "holodnye-zakuski",
      "price": 460,
      "weight": "170 г",
      "description": "Самая сырная закуска из всех! Вкусно, сытно, с грузинским акцентом, двумя видами сыра и красивой подачей.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/gebzhaliya-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-3",
      "name": "Закуска под чачу",
      "category": "holodnye-zakuski",
      "price": 780,
      "weight": "480 г",
      "description": "А, может, и не только под нее!",
      "image": "https://rest.guru/wp-content/uploads/zakuska-pod-chachu-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-4",
      "name": "Капуста по-гурийски",
      "category": "holodnye-zakuski",
      "price": 200,
      "weight": "150 г",
      "description": "Грузины любят взять эту закуску к чаче и другим крепким напиткам. Кстати, отлично подойдет для тех, кто соблюдает пост, а также как гарнир к мясу или рыбе.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/kapusta-po-gurijski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-5",
      "name": "Маринованные огурцы по-Грузински",
      "category": "holodnye-zakuski",
      "price": 250,
      "weight": "120 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/marinovannye-ogurczy-po-gruzinski-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-6",
      "name": "Маринованные томаты по-грузински",
      "category": "holodnye-zakuski",
      "price": 350,
      "weight": "120 г",
      "description": "По исконно грузинскому рецепту! Звучит, как прекрасное дополнение к чаче, да?",
      "image": "https://rest.guru/wp-content/uploads/marinovannye-tomaty-po-gruzinski-2-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-7",
      "name": "Рулетики из баклажана с сулугуни",
      "category": "holodnye-zakuski",
      "price": 380,
      "weight": "150 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/ruletiki-iz-baklazhanov-s-suluguni-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-8",
      "name": "Свежие овощи",
      "category": "holodnye-zakuski",
      "price": 540,
      "weight": "220 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/svezhie-ovoshhi-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-9",
      "name": "Слабосоленый лосось с надуги и мацони",
      "category": "holodnye-zakuski",
      "price": 820,
      "weight": "170 г",
      "description": "Ну, очень нежный рулет из слабосоленого лосося с сыром надуги! Обязательно стоит попробовать!",
      "image": "https://rest.guru/wp-content/uploads/slabosolenyj-losos-s-nadugi-i-maczoni-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-10",
      "name": "Тартар из говядины с соусом черный перец",
      "category": "holodnye-zakuski",
      "price": 890,
      "weight": "250 г",
      "description": "Этот тартар из говядины рекомендуем попробовать каждому, дорогие!",
      "image": "https://rest.guru/wp-content/uploads/tartar-iz-govyadiny-s-sousom-chernyj-perecz-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-11",
      "name": "Холодный аджапсандал",
      "category": "holodnye-zakuski",
      "price": 540,
      "weight": "250 г",
      "description": "Тот самый аджапсандал только в холодном исполнении. Советуем попробовать!",
      "image": "https://rest.guru/wp-content/uploads/holodnyj-adzhapsandal-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-12",
      "name": "Гриль салат со стейком из говядины",
      "category": "salaty",
      "price": 650,
      "weight": "150 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/gril-salat-so-stejkom-iz-govyadiny-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-13",
      "name": "Грузинский овощной салат",
      "category": "salaty",
      "price": 550,
      "weight": "230 г",
      "description": "Кажется простым, но только до того, как окажется на вашем столе! Для любителей чего-то легкого, но безукоризненного.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/gruzinskij-ovoshhnoj-salat-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-14",
      "name": "Салат с печенью кролика и жареным сулугуни",
      "category": "salaty",
      "price": 720,
      "weight": "200 г",
      "description": "Идеальное сочетание со сладкой заправкой для истинных ценителей.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/salat-iz-pecheni-krolika-s-zharenym-suluguni--1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-15",
      "name": "Салат с уткой и страчателлой",
      "category": "salaty",
      "price": 650,
      "weight": "190 г",
      "description": "Нетривиальное сочетание, которое бесспорно вас впечатлит своим ярким вкусом!",
      "image": "https://rest.guru/wp-content/uploads/salat-s-utkoj-i-strachatelloj-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-16",
      "name": "Салат с хрустящими баклажанами",
      "category": "salaty",
      "price": 650,
      "weight": "250 г",
      "description": "Этот салат покорит ваше сердце!",
      "image": "https://rest.guru/wp-content/uploads/salat-s-hrustyashhimi-baklazhanami-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-17",
      "name": "Салат с хрустящими баклажанами и креветками",
      "category": "salaty",
      "price": 740,
      "weight": "210 г",
      "description": "Вай, генацвале, уверены, это ваш будущий любимый салат!",
      "image": "https://rest.guru/wp-content/uploads/salat-s-hrustyashhimi-baklazhanami-i-krevetkami-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-18",
      "name": "Тбилисури",
      "category": "salaty",
      "price": 650,
      "weight": "250 г",
      "description": "Свежие овощи под соусом из мацони и грецких орехов!",
      "image": "https://rest.guru/wp-content/uploads/salat-tbilisuri-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-19",
      "name": "Аджапсандал на гриле",
      "category": "goryachie-zakuski",
      "price": 640,
      "weight": "300 г",
      "description": "Аджапсандали — ( пер. Тюркский «какая ты восхитительная»). Без лишних слов!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/adzhapsandal-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-20",
      "name": "Долма с тремя видами мяса",
      "category": "goryachie-zakuski",
      "price": 650,
      "weight": "240 г",
      "description": "Традиционное блюдо из малосольных виноградных листьев, в которые заворачивают отборнейшее мясо. Подадим с соусом из мацони!",
      "image": "https://rest.guru/wp-content/uploads/dolma-s-tremya-vidami-myasa-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-21",
      "name": "Жареный сулугуни с томатным джемом",
      "category": "goryachie-zakuski",
      "price": 440,
      "weight": "120 г",
      "description": "Хрустящие палочки из сулугуни в панировке со вкуснейшим томатным джемом!",
      "image": "https://rest.guru/wp-content/uploads/zharenyj-suluguni-s-tomatnym-dzhemom-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-22",
      "name": "Лобио с капустой по-гурийски и копченой сметаной",
      "category": "goryachie-zakuski",
      "price": 590,
      "weight": "250 г",
      "description": "Традиционная грузинская горячая закуска, известная с давних времен. Советуем попробовать!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/lobio-s-kapustoj-po-gurijski-i-kopchenoj-smetanoj-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-23",
      "name": "Хинкали  — баранина и говядина",
      "category": "hinkali",
      "price": 120,
      "weight": "110 г",
      "description": "Хинкали с сочной начинкой из мяса барашка и бычка, грузинскими специями и кинзой!",
      "image": "https://rest.guru/wp-content/uploads/hinkali-baranina-i-govyadina-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-24",
      "name": "Хинкали — креветка",
      "category": "hinkali",
      "price": 240,
      "weight": "110 г",
      "description": "Какие вкусные и необычные! Подойдут для утонченных спутниц джигитов и порадуют любого гостя!",
      "image": "https://rest.guru/wp-content/uploads/hinkali-krevetka-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-25",
      "name": "Хинкали — лосось",
      "category": "hinkali",
      "price": 280,
      "weight": "110 г",
      "description": "Сочные и необычные хинкали с лососем и зеленью!",
      "image": "https://rest.guru/wp-content/uploads/hinkali-losos-2-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-26",
      "name": "Хинкали — оленина и брусника",
      "category": "hinkali",
      "price": 150,
      "weight": "100 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/hinkali-olenina-i-brusnika-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-27",
      "name": "Хинкали — свинина и говядина",
      "category": "hinkali",
      "price": 120,
      "weight": "110 г",
      "description": "Знаменитые хинкали из отборного мяса, которые наполняли силой отважных джигитов в долгих походах!",
      "image": "https://rest.guru/wp-content/uploads/hinkali-svinina-i-govyadina-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-28",
      "name": "Хинкали — сыр",
      "category": "hinkali",
      "price": 130,
      "weight": "110 г",
      "description": "Хинкали с истинно грузинским сыром сулугуни. Уже готовы покорить ваше сердце!",
      "image": "https://rest.guru/wp-content/uploads/hinkali-syr-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-29",
      "name": "Батумская уха с судаком и томатами",
      "category": "supy",
      "price": 520,
      "weight": "400 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/batumskaya-uha-s-sudakom-i-tomatami-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-30",
      "name": "Суп с мини-хинкали",
      "category": "supy",
      "price": 450,
      "weight": "420 г",
      "description": "Легкий куриный бульон и мини-хинкали со свино-говяжьей начинкой!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/sup-s-mini-hinkali-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-31",
      "name": "Харчо",
      "category": "supy",
      "price": 580,
      "weight": "350 г",
      "description": "Это то, что отличает Грузию от других стран. Сытный и гордый суп с говядиной и кавказскими специями!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/harcho-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-32",
      "name": "Чихиртма",
      "category": "supy",
      "price": 450,
      "weight": "360 г",
      "description": "Этот суп, генацвале, популярен еще с древних времен и имеет свои особенности: например, в нем нет никакого гарнира — только курица и специи!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/chihirtma-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-33",
      "name": "Ассорти люля",
      "category": "blyuda-na-mangale",
      "price": 2000,
      "weight": "600 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/assorti-lyulya-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-34",
      "name": "Ассорти шашлыков",
      "category": "blyuda-na-mangale",
      "price": 2000,
      "weight": "1000 г",
      "description": "Шашлык из свиной шеи, шашлык из куриного бедра, люля из баранины",
      "image": "https://rest.guru/wp-content/uploads/assorti-shashlykov-2-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-35",
      "name": "Каре из баранины",
      "category": "blyuda-na-mangale",
      "price": 1500,
      "weight": "260 г",
      "description": "Сочное каре баранины на гриле!",
      "image": "https://rest.guru/wp-content/uploads/kare-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-36",
      "name": "Люля из баранины",
      "category": "blyuda-na-mangale",
      "price": 840,
      "weight": "200 г",
      "description": "Сочный люля-кебаб из баранины!",
      "image": "https://rest.guru/wp-content/uploads/lyulya-iz-baraniny-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-37",
      "name": "Люля из креветок",
      "category": "blyuda-na-mangale",
      "price": 790,
      "weight": "120 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/lyulya-iz-krevetok-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-38",
      "name": "Люля из курицы с сулугуни",
      "category": "blyuda-na-mangale",
      "price": 660,
      "weight": "180 г",
      "description": "Невероятное сочетание курицы и сулугуни, приготовленное на углях!",
      "image": "https://rest.guru/wp-content/uploads/lyulya-iz-kuriczy-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-39",
      "name": "Свиные ребра барбекю с грузинскими специями",
      "category": "blyuda-na-mangale",
      "price": 790,
      "weight": "250 г",
      "description": "Сочные свиные ребрышки зажаренные на углях и глазированные соусом барбекю, подаются на лаваше с соусом сацебели",
      "image": "https://rest.guru/wp-content/uploads/svinye-rebra-barbekyu-s-gruzinskimi-specziyami-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-40",
      "name": "Шашлык »Наполеон»",
      "category": "blyuda-na-mangale",
      "price": 720,
      "weight": "150 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/shashlyk-napoleon-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-41",
      "name": "Шашлык из говядины",
      "category": "blyuda-na-mangale",
      "price": 1400,
      "weight": "200 г",
      "description": "Сочный шашлык из говяжьей вырезки!",
      "image": "https://rest.guru/wp-content/uploads/shashlyk-iz-govyadiny-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-42",
      "name": "Шашлык из курицы",
      "category": "blyuda-na-mangale",
      "price": 620,
      "weight": "200 г",
      "description": "Шашлык из куриного бедра для наших дорогих гостей!",
      "image": "https://rest.guru/wp-content/uploads/shashlyk-iz-kuriczy-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-43",
      "name": "Шашлык из свинины",
      "category": "blyuda-na-mangale",
      "price": 780,
      "weight": "200 г",
      "description": "Классика среди мира шашлыков! Из свиной шеи в фирменном маринаде.",
      "image": "https://rest.guru/wp-content/uploads/shashlyk-iz-svininy-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-44",
      "name": "Ачма с мацони",
      "category": "goryachaya-vypechka",
      "price": 580,
      "weight": "270 г",
      "description": "Нежнейшая грузинская лазанья с сулугуни и имеретинским сырами, подается с соусом из мацони.",
      "image": "https://rest.guru/wp-content/uploads/achma-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-45",
      "name": "Жаренный хачапури",
      "category": "goryachaya-vypechka",
      "price": 650,
      "weight": "340 г",
      "description": "Фирменный хачапури! Готовится на сковороде и с особой любовью.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/hachapuri-guru-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-46",
      "name": "Лодочка с мясом и овощами",
      "category": "goryachaya-vypechka",
      "price": 480,
      "weight": "320 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/lodochka-s-myasom-i-ovoshhami-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-47",
      "name": "Лодочка с мясом и сыром",
      "category": "goryachaya-vypechka",
      "price": 480,
      "weight": "280 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/lodochka-s-myasom-i-syrom-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-48",
      "name": "Пеновани",
      "category": "goryachaya-vypechka",
      "price": 590,
      "weight": "340 г",
      "description": "Хачапури из слоеного теста с фермерским грузинским сыром.",
      "image": "https://rest.guru/wp-content/uploads/penovani-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-49",
      "name": "Хачапури по-аджарски",
      "category": "goryachaya-vypechka",
      "price": 580,
      "weight": "330 г",
      "description": "Лодочка из сдобного теста с домашним сыром, яичным желтком и растопленным сливочным маслом. Желток перемешиваем с сыром, чтобы хачапури было еще вкуснее!",
      "image": "https://rest.guru/wp-content/uploads/hachapuri-po-adzharski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-50",
      "name": "Хачапури по-аджарски XXL",
      "category": "goryachaya-vypechka",
      "price": 890,
      "weight": "630 г",
      "description": "Все та же традиционная «лодочка» из теста с домашним сыром и яичным желтком, но в увеличенном объеме.",
      "image": "https://rest.guru/wp-content/uploads/hachapuri-po-adzharski-xxl-1024x682.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-51",
      "name": "Хачапури по-гурийски с белыми грибами",
      "category": "goryachaya-vypechka",
      "price": 750,
      "weight": "340 г",
      "description": "Традиционный пирог региона Гурия в форме полумесяца с хрустящей корочкой, с начинкой из дуэта грузинских сыров с рубленным куриным яйцом. То, что должен попробовать каждый!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/hachapuri-po-gurijski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-52",
      "name": "Хачапури по-имеретински",
      "category": "goryachaya-vypechka",
      "price": 640,
      "weight": "340 г",
      "description": "В этом хачапури нет ничего лишнего! Только домашний грузинский сыр и наша любовь!",
      "image": "https://rest.guru/wp-content/uploads/hachapuri-po-imeretinski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-53",
      "name": "Хачапури по-мегрельски",
      "category": "goryachaya-vypechka",
      "price": 790,
      "weight": "410 г",
      "description": "Сыра много не бывает — здесь грузинский сыр внутри и снаружи!",
      "image": "https://rest.guru/wp-content/uploads/hachapuri-po-megrelski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-54",
      "name": "Хачапури по-мегрельски с зеленью и чесноком",
      "category": "goryachaya-vypechka",
      "price": 840,
      "weight": "410 г",
      "description": "Сыра много не бывает — здесь грузинский сыр с зеленью и чесноком внутри и снаружи!",
      "image": "https://rest.guru/wp-content/uploads/hachapuri-po-migrelski-s-zelenyu-i-chesnokom-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-55",
      "name": "Чебурек Гуру",
      "category": "goryachaya-vypechka",
      "price": 480,
      "weight": "340 г",
      "description": "Такие чебуреки ты можешь попробовать только в нашем грузинском доме! Сочный, с говядиной, свининой и сыром. Подадим с соусом из мацони.",
      "image": "https://rest.guru/wp-content/uploads/cheburek-guru-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-56",
      "name": "Чебурек с мясом",
      "category": "goryachaya-vypechka",
      "price": 420,
      "weight": "270 г",
      "description": "Такие чебуреки ты можешь попробовать только в нашем грузинском доме! Сочный, с говядиной, свининой. Подадим с соусом из мацони.",
      "image": "https://rest.guru/wp-content/uploads/cheburek-s-myasom-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-57",
      "name": "Чебурек с сыром",
      "category": "goryachaya-vypechka",
      "price": 440,
      "weight": "270 г",
      "description": "Такие чебуреки ты можешь попробовать только в нашем грузинском доме! Сочный с сыром сулугуни. Подадим с соусом из мацони.",
      "image": "https://rest.guru/wp-content/uploads/cheburek-s-syrom-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-58",
      "name": "Говяжьи щечки с картофельным пюре по-Грузински",
      "category": "goryachee",
      "price": 990,
      "weight": "350 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/govyazhi-shhechki-s-kartofelnym-pyure-po-gruzinski-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-59",
      "name": "Котлета из щуки с пюре по-грузински",
      "category": "goryachee",
      "price": 650,
      "weight": "340 г",
      "description": "Нежнейшая щучья котлета, тающая во рту! Подается с картофельным пюре с сулугуни и зеленью и соусом из белых грибов.",
      "image": "https://rest.guru/wp-content/uploads/kotleta-iz-shhuki-s-pyure-po-gruzinski-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-60",
      "name": "Лапшеби с томленым ягненком",
      "category": "goryachee",
      "price": 580,
      "weight": "320 г",
      "description": "Домашняя лапша с мясом ягненка под соусом чашушули.",
      "image": "https://rest.guru/wp-content/uploads/lapshebi-s-tomlenym-yagnenkom-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-61",
      "name": "Оджахури с говядиной",
      "category": "goryachee",
      "price": 980,
      "weight": "340 г",
      "description": "Классика грузинского застолья. Блюдо, которое так и ждет оказаться на вашем столе! В переводе с грузинского языка «оджахури» означает семейное.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/odzhahuri-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-62",
      "name": "Оджахури со свининой",
      "category": "goryachee",
      "price": 690,
      "weight": "340 г",
      "description": "Классика грузинского застолья. Блюдо, которое так и ждет оказаться на вашем столе! В переводе с грузинского языка «оджахури» означает семейное.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/odzhahuri-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-63",
      "name": "Рагу из курицы, запеченное под лепешкой",
      "category": "goryachee",
      "price": 780,
      "weight": "360 г",
      "description": "Нежное, ароматное рагу из бедра индейки с овощами, запеченное под тестом",
      "image": "https://rest.guru/wp-content/uploads/ragu-iz-indejki-zapechennoe-pod-lepeshkoj-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-64",
      "name": "Рулетики из лаваша с сулугуни и зеленью",
      "category": "goryachee",
      "price": 420,
      "weight": "150 г",
      "description": "Хрустящие рулетики из тонкого лаваша с начинкой из ароматного тягучего сулугуни, свежей кинзы и петрушки. Подаются с чесночным мацони.",
      "image": "https://rest.guru/wp-content/uploads/ruletiki-iz-lavasha-s-suluguni-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-65",
      "name": "Стейк из говядины с чкмерули из шампиньонов",
      "category": "goryachee",
      "price": 1200,
      "weight": "350 г",
      "description": "Просто попробуйте, и вы удивитесь!",
      "image": "https://rest.guru/wp-content/uploads/stejk-iz-govyadiny-s-chkmeruli-iz-shampinonov-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-66",
      "name": "Судак с картофелем и овощами под тестом",
      "category": "goryachee",
      "price": 620,
      "weight": "350 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/sudak-s-kartofelem-i-ovoshhami-pod-testom-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-67",
      "name": "Томленый ягненок с молодым картофелем",
      "category": "goryachee",
      "price": 890,
      "weight": "260 г",
      "description": "Подаем с мясным соусом из баранины.",
      "image": "https://rest.guru/wp-content/uploads/tomlenyj-yagnenok-s-molodym-kartofelem-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-68",
      "name": "Цыпленок тапака с картофелем по-грузински и овощами",
      "category": "goryachee",
      "price": 950,
      "weight": "120 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/czyplenok-tapaka-s-kartofelem-po-gruzinski-i-ovoshhami-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-69",
      "name": "Цыпленок чкмерули",
      "category": "goryachee",
      "price": 750,
      "weight": "280 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/czyplenok-chkmeruli-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-70",
      "name": "Чакапули",
      "category": "goryachee",
      "price": 840,
      "weight": "330 г",
      "description": "Национальное блюдо с нежным мясом ягненка и травами, приготовленное согласно всем традициям.",
      "image": "https://rest.guru/wp-content/uploads/2022/09/chakapuli-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-71",
      "name": "Чанахи",
      "category": "goryachee",
      "price": 950,
      "weight": "360 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/chanahi-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-72",
      "name": "Чахохбили",
      "category": "goryachee",
      "price": 680,
      "weight": "350 г",
      "description": "Блюдо с нежнейшей курочкой в томатном соусе со свежей зеленью!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/chahohbili-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-73",
      "name": "Чашушули",
      "category": "goryachee",
      "price": 880,
      "weight": "290 г",
      "description": "Одно из основных мясных блюд кухни Грузии в нашем исполнении! То, что точно нужно попробовать!",
      "image": "https://rest.guru/wp-content/uploads/chashushuli-guru-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-74",
      "name": "Картофель по-грузински",
      "category": "garniry",
      "price": 200,
      "weight": "130 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/kartofel-po-gruzinski-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-75",
      "name": "Картофельное пюре с сулугуни",
      "category": "garniry",
      "price": 200,
      "weight": "150 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/kartofelnoe-pyure-s-suluguni-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-76",
      "name": "Овощи гриль",
      "category": "garniry",
      "price": 420,
      "weight": "140 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/ovoshhi-gril-1-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-77",
      "name": "Шампиньоны гриль",
      "category": "garniry",
      "price": 360,
      "weight": "130 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/shampinony-gril-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-78",
      "name": "Жареные хинкали с яблоком и мятным мороженым",
      "category": "deserty",
      "price": 380,
      "weight": "160 г",
      "description": "Хрустящие снаружи, нежные внутри! Классические грузинские хинкали с неожиданной начинкой из печеного яблока и корицы, обжаренные до золотистой корочки. Подаются с шариком охлаждающего мятного мороженого политым мёдом",
      "image": "https://rest.guru/wp-content/uploads/zharenye-hinkali-s-yablokom-i-myatnym-morozhenym-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-79",
      "name": "Мёд",
      "category": "deserty",
      "price": 150,
      "weight": "80 г",
      "description": "Этот мед создан для того, чтобы подсластить вашу жизнь! Прямиком с горной пасеки и прямо к вам на стол!",
      "image": "https://rest.guru/wp-content/uploads/myod-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-80",
      "name": "Мильфей с ягодами и малиновым соусом",
      "category": "deserty",
      "price": 490,
      "weight": "150 г",
      "description": "Немного хрустящий снаружи и потрясающе нежный внутри.",
      "image": "https://rest.guru/wp-content/uploads/milfej-s-yagodami-i-malinovym-sousom-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-81",
      "name": "Пахлава с халвичным мороженым и гранулами из черной смородины",
      "category": "deserty",
      "price": 490,
      "weight": "210 г",
      "description": "Дорогие, мы не можем сопротивляться наслаждению от его вкуса и вам того же советуем. Все ингредиенты готовятся на нашей кухне и мечтают оказаться на вашем столе!",
      "image": "https://rest.guru/wp-content/uploads/2022/09/pahlava-s-halvichnym-morozhenym-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-82",
      "name": "Чизкейк с виноградом в вине, с орехами и соленой карамелью",
      "category": "deserty",
      "price": 420,
      "weight": "130 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/chizkejk-s-vinogradom-v-vine-s-orehami-i-solenoj-karamelyu-1024x683.png",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-83",
      "name": "Шоколадный фондан с мятным мороженым",
      "category": "deserty",
      "price": 450,
      "weight": "150 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/shokoladnyj-fondan-s-myatnym-morozhenym-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-84",
      "name": "Красная аджика",
      "category": "sousy",
      "price": 100,
      "weight": "30 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/sous-krasnaya-adzhika-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-85",
      "name": "Сацебели",
      "category": "sousy",
      "price": 100,
      "weight": "30 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/sous-saczibeli-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-86",
      "name": "Соус из мацони",
      "category": "sousy",
      "price": 100,
      "weight": "30 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/sous-iz-maczoni-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-87",
      "name": "Ткемали",
      "category": "sousy",
      "price": 100,
      "weight": "30 г",
      "description": "",
      "image": "https://rest.guru/wp-content/uploads/sous-tkemali-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    },
    {
      "id": "guru-88",
      "name": "Инжир",
      "category": "varene-k-chayu",
      "price": 150,
      "weight": "50 г",
      "description": "Собственное производство варенья для нас, как отдельный вид искусства. Мы не можем иначе. И желаем вам насладиться этими вкусами.",
      "image": "https://rest.guru/wp-content/uploads/varene-inzhir-1024x683.jpg",
      "source": "https://rest.guru/menu/"
    }
  ],
  "harats": [
    {
      "id": "harats-1",
      "name": "Тартар из говядины",
      "category": "Холодные закуски",
      "price": 850,
      "weight": "150 гр",
      "description": "рубленое филе говядины с каперсами, красным луком и специями, заправленное трюфельным маслом. Подаётся с перепелиным яйцом, слайсами шампиньонов и крутонами",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 4,
        "sourceImage": "p3-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-2",
      "name": "Карпаччо из говядины",
      "category": "Холодные закуски",
      "price": 790,
      "weight": "100 гр",
      "description": "тонкие слайсы говядины, пармезан, оливковое масло, сок лимона",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 4,
        "sourceImage": "p3-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-3",
      "name": "Сырное ассорти",
      "category": "Холодные закуски",
      "price": 620,
      "weight": "110/20 гр",
      "description": "скаморца копчёная, грана падано, горгонзола, грецкие орехи, мёд",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 4,
        "sourceImage": "p3-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-4",
      "name": "Арахис",
      "category": "Холодные закуски",
      "price": 180,
      "weight": "80 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-5",
      "name": "Фисташки",
      "category": "Холодные закуски",
      "price": 420,
      "weight": "80 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-6",
      "name": "Куриные чипсы",
      "category": "Холодные закуски",
      "price": 370,
      "weight": "70 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-7",
      "name": "Свиные чипсы",
      "category": "Холодные закуски",
      "price": 390,
      "weight": "70 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-8",
      "name": "Закуска под виски",
      "category": "Холодные закуски",
      "price": 540,
      "weight": "120 гр",
      "description": "рулетики из ростбифа с руколой, вялеными томатами и фирменным соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 7,
        "sourceImage": "p6-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-9",
      "name": "Сельдь с картофелем",
      "category": "Холодные закуски",
      "price": 450,
      "weight": "290 гр",
      "description": "слабосолёная сельдь с маринованным луком и отварным картофелем с зеленью",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 7,
        "sourceImage": "p6-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-10",
      "name": "Русская закуска",
      "category": "Холодные закуски",
      "price": 880,
      "weight": "550/20 гр",
      "description": "сало, солёные огурцы, отварной картофель, капуста «Шукрут» и тосты с сельдью фирменного посола",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 0,
        "cols": 6,
        "rows": 10,
        "sourcePage": 7,
        "sourceImage": "p6-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-11",
      "name": "Салат с хрустящими баклажанами",
      "category": "Салаты",
      "price": 520,
      "weight": "220 гр",
      "description": "помидоры, жаренные в хрустящем кляре баклажаны, авокадо, кинза, соус сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 10,
        "sourceImage": "p9-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-12",
      "name": "Салат бургер",
      "category": "Салаты",
      "price": 650,
      "weight": "230 гр",
      "description": "салат романо, жареный говяжий фарш, помидоры, соленые огурцы, красный лук, соус гриль и пармезан",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 10,
        "sourceImage": "p9-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-13",
      "name": "Нисуаз",
      "category": "Салаты",
      "price": 620,
      "weight": "270 гр",
      "description": "микс салатов, тунец, мини-картофель, запечённый перец, перепелиное яйцо, красный лук, томаты черри, имбирная заправка",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 10,
        "sourceImage": "p9-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-14",
      "name": "Тёплый салат с курицей и соусом из креветок и пармезана",
      "category": "Салаты",
      "price": 520,
      "weight": "250 гр",
      "description": "филе куриной грудки, микс салатов, свежий огурец, огурцы кимчи, яйцо, соус из креветок и пармезана, картофельные чипсы",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 10,
        "sourceImage": "p9-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-15",
      "name": "Тальята из мраморной говядины",
      "category": "Салаты",
      "price": 820,
      "weight": "170 гр",
      "description": "тонко нарезанный стейк прожарки BlueRare, рукола, вяленые томаты, сыр пармезан и томаты черри, заправленные бальзамическим соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 11,
        "sourceImage": "p10-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-16",
      "name": "Цезарь с тигровыми креветками",
      "category": "Салаты",
      "price": 690,
      "weight": "200 гр",
      "description": "хрустящие листья салата, заправленные фирменным соусом цезарь, с томатами черри, сыром пармезан и крутонами",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 11.11111,
        "cols": 6,
        "rows": 10,
        "sourcePage": 11,
        "sourceImage": "p10-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-17",
      "name": "Цезарь с куриной грудкой",
      "category": "Салаты",
      "price": 520,
      "weight": "200 гр",
      "description": "хрустящие листья салата, заправленные фирменным соусом цезарь, с томатами черри, сыром пармезан и крутонами",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 11,
        "sourceImage": "p10-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-18",
      "name": "Крылышки с сыром и чесноком",
      "category": "Крылышки",
      "price": 690,
      "weight": "180/60/25 гр",
      "description": "хрустящие крылья с чесноком и чеддером, подаются с морковью и сельдереем",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 12,
        "sourceImage": "p11-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-19",
      "name": "Куриные крылышки гриль",
      "category": "Крылышки",
      "price": 620,
      "weight": "180/60/25 гр",
      "description": "крылья, глазированные фирменным соусом, подаются с морковью и сельдереем",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 12,
        "sourceImage": "p11-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-20",
      "name": "Куриные крылышки чили",
      "category": "Крылышки",
      "price": 680,
      "weight": "180/60/25 гр",
      "description": "хрустящие крылья, глазированные пикантным соусом, подаются с морковью и сельдереем",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 12,
        "sourceImage": "p11-7",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-21",
      "name": "Крылышки баффало",
      "category": "Крылышки",
      "price": 650,
      "weight": "180/60/25 гр",
      "description": "классические острые крылышки баффало, подаются с морковью и сельдереем",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 12,
        "sourceImage": "p11-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-22",
      "name": "Мясные сигары",
      "category": "Горячие закуски",
      "price": 680,
      "weight": "90/30 гр",
      "description": "хрустящие трубочки из теста для спринг-роллов с начинкой из томлёной говядины с сыром сулугуни. Подаём с чесночным соусом.",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 22.22222,
        "cols": 6,
        "rows": 10,
        "sourcePage": 13,
        "sourceImage": "p12-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-23",
      "name": "Жареные свиные ушки",
      "category": "Горячие закуски",
      "price": 420,
      "weight": "250 гр",
      "description": "в остро-сладком соусе",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 13,
        "sourceImage": "p12-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-24",
      "name": "Куриные стрипсы",
      "category": "Горячие закуски",
      "price": 420,
      "weight": "200/25 гр",
      "description": "кусочки нежного филе в хрустящем кляре, подаются с соусом сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 13,
        "sourceImage": "p12-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-25",
      "name": "Гарлики",
      "category": "Горячие закуски",
      "price": 200,
      "weight": "150 гр",
      "description": "горячие чесночные тосты из бородинского хлеба",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 13,
        "sourceImage": "p12-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-26",
      "name": "Фритто мисто",
      "category": "Горячие закуски",
      "price": 580,
      "weight": "190/30/30 гр",
      "description": "тигровые креветки, мясо мидий, кольца кальмара, щупальца кальмара, обжаренные в хрустящей панировке, подаются с чесночным соусом и соусом сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 13,
        "sourceImage": "p12-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-27",
      "name": "Рыба и чипсы",
      "category": "Горячие закуски",
      "price": 680,
      "weight": "180/110/30 гр",
      "description": "филе трески в хрустящем кляре с картофелем фри, соусом тартар и долькой лимона",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 14,
        "sourceImage": "p13-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-28",
      "name": "Кесадилья",
      "category": "Горячие закуски",
      "price": 660,
      "weight": "240/30 гр",
      "description": "тортилья с рваной говядиной, сыром чеддер и томатами. Подаём с соусом из авокадо",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 33.33333,
        "cols": 6,
        "rows": 10,
        "sourcePage": 14,
        "sourceImage": "p13-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-29",
      "name": "Жареный чечил",
      "category": "Горячие закуски",
      "price": 250,
      "weight": "50 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 14,
        "sourceImage": "p13-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-30",
      "name": "Сырные шарики с халапеньо",
      "category": "Горячие закуски",
      "price": 520,
      "weight": "180/25 гр",
      "description": "сыр моцарелла с рублеными перчиками халапеньо в панировке, подаются с соусом сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 14,
        "sourceImage": "p13-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-31",
      "name": "Сырные шарики с копчёным кальмаром",
      "category": "Горячие закуски",
      "price": 560,
      "weight": "180/25 гр",
      "description": "сыр моцарелла с рубленым кальмаром горячего копчения, подаются с соусом сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-32",
      "name": "Жареный сыр",
      "category": "Горячие закуски",
      "price": 520,
      "weight": "220/25 гр",
      "description": "сыр моцарелла в хрустящей панировке, подаётся с соусом блю чиз",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 14,
        "sourceImage": "p13-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-33",
      "name": "Попкорн из мидий",
      "category": "Горячие закуски",
      "price": 320,
      "weight": "120/30 гр",
      "description": "нежнейшее мясо мидий в хрустящем кляре, соус сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-34",
      "name": "Жареная мойва",
      "category": "Горячие закуски",
      "price": 450,
      "weight": "140/20/25 гр",
      "description": "подаётся с соусом тартар и жареными каперсами",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-35",
      "name": "Отварные креветки",
      "category": "Горячие закуски",
      "price": 880,
      "weight": "170/20 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-36",
      "name": "Кольца кальмара",
      "category": "Горячие закуски",
      "price": 540,
      "weight": "120/25 гр",
      "description": "в панировке, подаются с соусом тартар",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 44.44444,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-37",
      "name": "Жареные креветки",
      "category": "Горячие закуски",
      "price": 880,
      "weight": "170/20 гр",
      "description": "с чесноком и фирменным соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-38",
      "name": "Креветки в тесте с чоризо и моцареллой",
      "category": "Горячие закуски",
      "price": 580,
      "weight": "160/25 гр",
      "description": "подаются с чесночным соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-39",
      "name": "Тигровые креветки в панировке",
      "category": "Горячие закуски",
      "price": 650,
      "weight": "150/20/25 гр",
      "description": "подаются с соусом сладкий чили",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 15,
        "sourceImage": "p14-8",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-40",
      "name": "Ирландское море",
      "category": "Блюда на компанию",
      "price": 1500,
      "weight": "430/30/30 гр",
      "description": "мойва, щупальца кальмара, филе трески, тигровые креветки, подаются с чесночным соусом и соусом тартар",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 16,
        "sourceImage": "p15-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-41",
      "name": "Горячие пивные закуски",
      "category": "Блюда на компанию",
      "price": 1100,
      "weight": "750/30/25/25 гр",
      "description": "щупальца кальмара, куриные стрипсы, гарлики, жареный чечил, жареный сыр, арахис, соус блю чиз, соус тартар",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 16,
        "sourceImage": "p15-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-42",
      "name": "Ассорти крылышек",
      "category": "Блюда на компанию",
      "price": 1600,
      "weight": "200/200/200/40 гр",
      "description": "крылышки чили, крылышки гриль, крылышки с сыром и чесноком, соус блю чиз",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 55.55556,
        "cols": 6,
        "rows": 10,
        "sourcePage": 16,
        "sourceImage": "p15-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-43",
      "name": "Кальмар, креветки и картошка",
      "category": "Блюда на компанию",
      "price": 990,
      "weight": "160/100/100/25/25/25 гр",
      "description": "креветки в тесте, сырные шарики с кальмаром, картофель фри, кетчуп, соус сладкий чили, соус чесночный",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 16,
        "sourceImage": "p15-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-44",
      "name": "Ассорти колбасок",
      "category": "Блюда на компанию",
      "price": 2500,
      "weight": "1000/50 гр",
      "description": "подаются с баварской горчицей",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 16,
        "sourceImage": "p15-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-45",
      "name": "Креветки в соусе том ям",
      "category": "Креветки",
      "price": 850,
      "weight": "180/40 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 17,
        "sourceImage": "p16-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-46",
      "name": "Креветки в соусе четыре сыра",
      "category": "Креветки",
      "price": 890,
      "weight": "180/40 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 17,
        "sourceImage": "p16-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-47",
      "name": "Креветки в сливочно-чесночном соусе",
      "category": "Креветки",
      "price": 850,
      "weight": "180/40 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 17,
        "sourceImage": "p16-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-48",
      "name": "Креветки в соусе маринара",
      "category": "Креветки",
      "price": 820,
      "weight": "180/40 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 66.66667,
        "cols": 6,
        "rows": 10,
        "sourcePage": 17,
        "sourceImage": "p16-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-49",
      "name": "Креветки в трюфельном соусе",
      "category": "Креветки",
      "price": 850,
      "weight": "180/40 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 17,
        "sourceImage": "p16-7",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-50",
      "name": "Mexicano",
      "category": "Бургеры",
      "price": 770,
      "weight": "340 гр",
      "description": "говяжья котлета, помидор, микс салатов, запечённый перец, перчики халапеньо, сыр чеддер, бекон, мексиканский соус",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-51",
      "name": "Камамбербургер",
      "category": "Бургеры",
      "price": 790,
      "weight": "360 гр",
      "description": "говяжья котлета, жареный камамбер в панировке, руккола, чесночный соус",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 18,
        "sourceImage": "p17-6",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-52",
      "name": "Жареный петух",
      "category": "Бургеры",
      "price": 560,
      "weight": "330 гр",
      "description": "куриное филе в панировке, помидор, микс салатов, сыр чеддер, красный лук, соус цезарь",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 18,
        "sourceImage": "p17-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-53",
      "name": "Harat’s",
      "category": "Бургеры",
      "price": 790,
      "weight": "420 гр",
      "description": "две говяжьи котлеты, сыр чеддер, помидор, солёные огурчики, салат, красный лук, горчица, кетчуп, японский майонез",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-54",
      "name": "Бургер с говядиной и креветками",
      "category": "Бургеры",
      "price": 790,
      "weight": "370 гр",
      "description": "говяжья котлета, помидор, сыр чеддер, креветки в хрустящем кляре, листья салата, соус сладкий васаби",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-55",
      "name": "Шаманский бургер",
      "category": "Бургеры",
      "price": 670,
      "weight": "290 гр",
      "description": "говяжья котлета, сыр чеддер, салат романо, красный лук, трюфельный соус",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-56",
      "name": "Чизбургер хэ",
      "category": "Бургеры",
      "price": 760,
      "weight": "420 гр",
      "description": "говяжья котлета, бекон, сыр чеддер, солёные огурчики, салат, кетчуп, сырный соус, жареный лук",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-57",
      "name": "Хот-дог harats",
      "category": "Бургеры",
      "price": 590,
      "weight": "360 гр",
      "description": "черная булочка, свино-говяжьи колбаски, квашеная капуста, соленый огурец, домашний майонез, кетчуп, горчица, жареный лук",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 18,
        "sourceImage": "p17-5",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-58",
      "name": "Стейк из свиной шеи",
      "category": "Мясо",
      "price": 740,
      "weight": "200/140/120/25 гр",
      "description": "подаётся с толчёным картофелем с салом, капустой «Шукрут» и мексиканским соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 20,
        "sourceImage": "p19-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-59",
      "name": "Стейк из говядины",
      "category": "Мясо",
      "price": 1200,
      "weight": "120/40/30 гр",
      "description": "с соусом чёрный перец и жареным ромейном",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 77.77778,
        "cols": 6,
        "rows": 10,
        "sourcePage": 20,
        "sourceImage": "p19-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-60",
      "name": "Рулька",
      "category": "Мясо",
      "price": 1300,
      "weight": "1000/150/150 гр",
      "description": "подаётся с капустой «Шукрут» и картофелем",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 20,
        "sourceImage": "p19-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-61",
      "name": "Свиные рёбрышки",
      "category": "Мясо",
      "price": 960,
      "weight": "500 гр",
      "description": "глазированные в фирменном соусе",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-62",
      "name": "Филе трески и каннеллони со шпинатом",
      "category": "Горячие блюда",
      "price": 880,
      "weight": "265 гр",
      "description": "запечённая треска, подаётся на каннеллони со шпинатом и сливочным сыром с томатным соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 21,
        "sourceImage": "p20-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-63",
      "name": "Мясо по-дублински",
      "category": "Горячие блюда",
      "price": 720,
      "weight": "400 гр",
      "description": "свинина с картофелем, луком и томатами, запечённая под сыром моцарелла в сметанном соусе",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 21,
        "sourceImage": "p20-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-64",
      "name": "Жарёха с говядиной и грибами",
      "category": "Горячие блюда",
      "price": 790,
      "weight": "330 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-65",
      "name": "Жарёха со свининой и грибами",
      "category": "Горячие блюда",
      "price": 480,
      "weight": "330 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-66",
      "name": "Жарёха с курицей и грибами",
      "category": "Горячие блюда",
      "price": 450,
      "weight": "330 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-67",
      "name": "Спагетти карбонара",
      "category": "Горячие блюда",
      "price": 620,
      "weight": "310 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 22,
        "sourceImage": "p21-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-68",
      "name": "Спагетти с креветками",
      "category": "Горячие блюда",
      "price": 780,
      "weight": "300 гр",
      "description": "в сливочно-чесночном соусе",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 22,
        "sourceImage": "p21-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-69",
      "name": "Лазанья",
      "category": "Горячие блюда",
      "price": 820,
      "weight": "400 гр",
      "description": "листы лазаньи, соус болоньезе, сыр моцарелла с соусом из пармезана",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 100,
        "y": 88.88889,
        "cols": 6,
        "rows": 10,
        "sourcePage": 22,
        "sourceImage": "p21-4",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-70",
      "name": "Борщ с брискетом",
      "category": "Супы",
      "price": 550,
      "weight": "300/50/60 гр",
      "description": "сытное и ароматное блюдо подаётся с салом и бородинским хлебом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 0,
        "y": 100,
        "cols": 6,
        "rows": 10,
        "sourcePage": 23,
        "sourceImage": "p22-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-71",
      "name": "Ирландский похмельный суп",
      "category": "Супы",
      "price": 680,
      "weight": "450/45 гр",
      "description": "наваристый суп на основе куриного бульона и сливок с добавлением помидоров, картофеля и трески. Подаем с поджаренными тостами из багета",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 20,
        "y": 100,
        "cols": 6,
        "rows": 10,
        "sourcePage": 23,
        "sourceImage": "p22-3",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-72",
      "name": "Том ям",
      "category": "Супы",
      "price": 780,
      "weight": "460/15/15 гр",
      "description": "бульон с добавлением кокосового молока, креветки, щупальца кальмара, древесные грибы, черри, рис.",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 40,
        "y": 100,
        "cols": 6,
        "rows": 10,
        "sourcePage": 23,
        "sourceImage": "p22-9",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-73",
      "name": "Картофель фри",
      "category": "Гарниры",
      "price": 200,
      "weight": "100 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-74",
      "name": "Батат фри",
      "category": "Гарниры",
      "price": 390,
      "weight": "100/30/30 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-75",
      "name": "Жареные шампиньоны",
      "category": "Гарниры",
      "price": 270,
      "weight": "140 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-76",
      "name": "Капуста «шукрут»",
      "category": "Гарниры",
      "price": 160,
      "weight": "150 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-77",
      "name": "Бородинский хлеб",
      "category": "Гарниры",
      "price": 100,
      "weight": "180 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-78",
      "name": "Багет",
      "category": "Гарниры",
      "price": 100,
      "weight": "60 гр",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-79",
      "name": "Брауни",
      "category": "Десерты",
      "price": 580,
      "weight": "200 гр",
      "description": "с домашним мороженым и мятным соусом",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 60,
        "y": 100,
        "cols": 6,
        "rows": 10,
        "sourcePage": 25,
        "sourceImage": "p24-1",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-80",
      "name": "Хворост",
      "category": "Десерты",
      "price": 250,
      "weight": "140 гр",
      "description": "с соленой карамелью и мороженым",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/",
      "photoSprite": {
        "x": 80,
        "y": 100,
        "cols": 6,
        "rows": 10,
        "sourcePage": 25,
        "sourceImage": "p24-2",
        "url": "assets/harats-food.webp"
      }
    },
    {
      "id": "harats-81",
      "name": "Баварская горчица",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-82",
      "name": "Кетчуп",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-83",
      "name": "Блю чиз",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-84",
      "name": "Тартар",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-85",
      "name": "Чесночный",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-86",
      "name": "Сладкий чили",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-87",
      "name": "Сырный",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-88",
      "name": "Спайси",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-89",
      "name": "Барбекю",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-90",
      "name": "Сладкий васаби",
      "category": "Соусы",
      "price": 100,
      "weight": "25 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-91",
      "name": "Домашнее мороженое — Ванильное",
      "category": "Десерты",
      "price": 100,
      "weight": "1 шарик / 50 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    },
    {
      "id": "harats-92",
      "name": "Домашнее мороженое — Шоколадное",
      "category": "Десерты",
      "price": 150,
      "weight": "1 шарик / 50 г",
      "description": "",
      "image": "",
      "source": "https://smolensk.harats.com/nikolayeva/menu/"
    }
  ]
};
