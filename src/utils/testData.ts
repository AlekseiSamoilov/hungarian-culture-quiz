import type { Question } from '../types/index.js';
import { maskAnswer } from './answerMasking';

// Вопросы по венгерской культуре на основе материалов PDF
export const hungarianCultureQuestions: Question[] = [
    // Вопросы по истории - Honfoglalás (Завоевание родины)
    {
        id: 'hist_001',
        type: 'multiple_choice',
        category: 'történelem', // история
        difficulty: 2,
        question: 'Mikor foglalták el a magyarok a Kárpát-medencét?',
        options: ['885-886', '895-896', '905-906', '915-916'],
        correctAnswer: maskAnswer(1),
        explanation: 'A honfoglalás 895-896-ban történt Árpád vezér vezetésével. Több száz éves sztyeppei vándorlást követően a 7 magyar törzs foglalta el a Kárpát-medencét. | Завоевание родины произошло в 895-896 годах под руководством вождя Арпада. После нескольких сотен лет кочевания в степи 7 венгерских племен заняли Карпатский бассейн.',
        image: null
    },
    {
        id: 'hist_002',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Ki vezette a honfoglaló magyarokat?',
        correctAnswer: maskAnswer(['Árpád', 'Arpad']),
        explanation: 'Árpád vezér vezetésével foglalták el a magyarok a Kárpát-medencét. Az Árpád-ház lett a Magyar Királyság első uralkodóháza. | Под руководством вождя Арпада венгры заняли Карпатский бассейн. Династия Арпадов стала первой правящей династией Венгерского королевства.',
        image: null
    },
    {
        id: 'hist_003',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 1,
        question: 'Mikor koronázták meg I. Szent István királyt?',
        options: ['1000. december 25.', '1001. január 1.', '1002. január 1.', '1003. december 25.'],
        correctAnswer: maskAnswer(1),
        explanation: '1001. január 1-én koronázták meg I. Szent István királyt. Ő volt az első keresztény magyar király, aki alatt az ország véglegesen a nyugati keresztény kultúra mellett kötelezte el magát. | 1 января 1001 года был коронован король Святой Иштван I. Он был первым христианским венгерским королем, при котором страна окончательно приняла западную христианскую культуру.',
        image: null
    },
    {
        id: 'hist_004',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Milyen rendszert szervezett meg Szent István?',
        correctAnswer: maskAnswer(['vármegyerendszer', 'vármegye rendszer']),
        explanation: 'Szent István megszervezte a vármegyerendszert, tíz egyházmegyét, püspökségeket és érsekségeket alapított. Ez lett a Magyar Királyság közigazgatási alapja. | Святой Иштван организовал систему комитатов (областей), основал десять епархий, епископства и архиепископства. Это стало административной основой Венгерского королевства.',
        image: null
    },

    // Средневековье
    {
        id: 'hist_005',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor győzték le a magyarok az oszmanokat Nándorfehérvárnál?',
        options: ['1446', '1456', '1466', '1476'],
        correctAnswer: maskAnswer(1),
        explanation: '1456-ban Hunyadi János vezetésével a magyar és a csatlakozott keresztény seregek Nándorfehérvárnál (ma Belgrád) fényes győzelmet arattak az oszmánok felett, ezzel 70 évre feltartóztatva a törökök európai terjeszkedését. A déli harangszó e diadalra emlékeztet. | В 1456 году под руководством Яноша Хуньяди венгерские и союзные христианские войска одержали блестящую победу над османами у Нандорфехервара (современный Белград), остановив турецкую экспансию в Европе на 70 лет. Южный колокольный звон напоминает об этой победе.',
        image: null
    },
    {
        id: 'hist_006',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Ki volt Hunyadi János fia, aki alatt élte fénykorát a reneszánsz kori Magyarország?',
        correctAnswer: maskAnswer(['Hunyadi Mátyás', 'Mátyás király', 'Matyas kiraly']),
        explanation: 'Hunyadi Mátyás uralkodása (1458-1490) alatt élte fénykorát a reneszánsz kori Magyarország, amely Európa egyik legerősebb államává vált. | При правлении Матьяша Хуньяди (1458-1490) Венгрия эпохи Возрождения переживала свой расцвет и стала одним из сильнейших государств Европы.',
        image: null
    },

    // Турецкое владычество
    {
        id: 'hist_007',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor szenvedtek a magyarok súlyos vereséget Mohácsnál?',
        options: ['1525. augusztus 29.', '1526. augusztus 29.', '1527. augusztus 29.', '1528. augusztus 29.'],
        correctAnswer: maskAnswer(1),
        explanation: '1526. augusztus 29-én Mohácsnál a magyar seregek súlyos vereséget szenvedtek az oszmánok ellen. Ez a csata végzetes fordulatot hozott a magyar történelemben. | 29 августа 1526 года при Мохаче венгерские войска потерпели тяжелое поражение от османов. Эта битва принесла роковой поворот в венгерской истории.',
        image: null
    },
    {
        id: 'hist_008',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 1,
        question: 'Mikor foglalták el a törökök Budát?',
        options: ['1540', '1541', '1542', '1543'],
        correctAnswer: maskAnswer(1),
        explanation: '1541-ben a törökök elfoglalták Budát, a Magyar Királyság központját. Az ország közel 150 évre 3 részre szakadt. | В 1541 году турки захватили Буду, центр Венгерского королевства. Страна на почти 150 лет разделилась на 3 части.',
        image: null
    },
    {
        id: 'hist_009',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Melyik vár ostroma emelkedik ki a XVI. század háborúi közül?',
        correctAnswer: maskAnswer(['Eger', 'Eger ostroma']),
        explanation: 'A XVI. században folyamatosak voltak a háborúk, ezek közül is kiemelkedik Eger ostroma (1552). Ez a heroikus védelem a magyar ellenállás szimbóluma lett. | В XVI веке войны были постоянными, среди них выделяется осада Эгера (1552). Эта героическая оборона стала символом венгерского сопротивления.',
        image: null
    },
    {
        id: 'hist_010',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor foglalták vissza Budát a Habsburgok?',
        options: ['1685. szeptember 2.', '1686. szeptember 2.', '1687. szeptember 2.', '1688. szeptember 2.'],
        correctAnswer: maskAnswer(1),
        explanation: '1686. szeptember 2-án a Habsburgok vezetésével az európai keresztény sereg visszafoglalta Budát, a következő években az Oszmán Birodalom elvesztette Kárpát-medencei területeinek jelentős részét. | 2 сентября 1686 года под руководством Габсбургов европейская христианская армия отвоевала Буду, в последующие годы Османская империя потеряла значительную часть своих территорий в Карпатском бассейне.',
        image: null
    },

    // Габсбургское правление
    {
        id: 'hist_011',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Ki vezette a Habsburg elnyomás elleni nemzeti felkelést 1703-1711 között?',
        options: ['I. Rákóczi György', 'II. Rákóczi Ferenc', 'III. Rákóczi György', 'I. Rákóczi Ferenc'],
        correctAnswer: maskAnswer(1),
        explanation: 'A Habsburg elnyomás ellen 1703-1711 között nemzeti felkelés tört ki II. Rákóczi Ferenc vezetésével. Ez volt az egyik legnagyobb szabadságharc a Habsburg uralom ellen. | Против габсбургского угнетения в 1703-1711 годах вспыхнуло национальное восстание под руководством Ференца Ракоци II. Это была одна из крупнейших освободительных войн против габсбургского правления.',
        image: null
    },
    {
        id: 'hist_012',
        type: 'text_input',
        category: 'történelem',
        difficulty: 1,
        question: 'Mennyi ideig tartott a török hódoltság Magyarországon?',
        correctAnswer: maskAnswer(['150 év', '150', 'százötven év']),
        explanation: 'A török hódoltság kora 1526-1686 között tartott, tehát közel 150 évig. Ezalatt az ország három részre szakadt: a török hódoltsági terület, a Habsburg uralom alatti rész és az Erdélyi Fejedelemség. | Эпоха турецкого владычества длилась с 1526 по 1686 год, то есть почти 150 лет. За это время страна разделилась на три части: территория турецкого владычества, часть под властью Габсбургов и Трансильванское княжество.',
        image: null
    },

    // Национальные символы
    {
        id: 'symb_001',
        type: 'multiple_choice',
        category: 'nemzeti jelképek', // национальные символы
        difficulty: 1,
        question: 'Melyek Magyarország legfontosabb nemzeti jelképei?',
        options: ['Zászló, Szent Korona, Himnusz, címer', 'Zászló, címer, parlament', 'Szent Korona, Duna, címer', 'Himnusz, zászló, Budapest'],
        correctAnswer: maskAnswer(0),
        explanation: 'A legfontosabb nemzeti jelképeink: Zászló, Szent Korona, Himnusz és Magyarország címere. Ezek képviselik Magyarország nemzeti identitását. | Важнейшие национальные символы: флаг, Святая корона, гимн и герб Венгрии. Они представляют национальную идентичность Венгрии.',
        image: null
    },
    {
        id: 'symb_002',
        type: 'text_input',
        category: 'nemzeti jelképek',
        difficulty: 1,
        question: 'Mi Magyarország fővárosa?',
        correctAnswer: maskAnswer(['Budapest']),
        explanation: 'Magyarország fővárosa Budapest. A város a Duna két partján terül el, Buda és Pest egyesítésével alakult ki. | Столица Венгрии - Будапешт. Город расположен на двух берегах Дуная и образовался путем объединения Буды и Пешта.',
        image: null
    },

    // География - Административное деление
    {
        id: 'geo_001',
        type: 'multiple_choice',
        category: 'földrajz', // география
        difficulty: 2,
        question: 'Hány vármegyéje van Magyarországnak?',
        options: ['17', '18', '19', '20'],
        correctAnswer: maskAnswer(2),
        explanation: 'Magyarország tizenkilenc vármegyéje van. Ezek: Győr-Moson-Sopron, Hajdú-Bihar, Heves, Jász-Nagykun-Szolnok, Komárom-Esztergom, Nógrád, Pest, Somogy, Szabolcs-Szatmár-Bereg, Tolna, Vas, Veszprém, Zala, Baranya, Borsod-Abaúj-Zemplén, Bács-Kiskun, Békés, Csongrád-Csanád, Fejér. | У Венгрии девятнадцать областей (медье).',
        image: null
    },
    {
        id: 'geo_002',
        type: 'text_input',
        category: 'földrajz',
        difficulty: 2,
        question: 'Melyik vármegyében található Budapest?',
        correctAnswer: maskAnswer(['Pest']),
        explanation: 'Budapest Pest vármegyében található. Pest vármegye Magyarország legnagyobb lakosságú vármegyéje, központja Budapest. | Будапешт находится в области Пешт. Область Пешт - самая населенная область Венгрии, центром которой является Будапешт.',
        image: null
    },

    // Европейский Союз
    {
        id: 'eu_001',
        type: 'multiple_choice',
        category: 'Európai Unió',
        difficulty: 1,
        question: 'Mikor csatlakozott Magyarország az Európai Unióhoz?',
        options: ['2003. május 1.', '2004. május 1.', '2005. május 1.', '2006. május 1.'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország 2004. május 1-jén csatlakozott az Európai Unióhoz. Ez történelmi jelentőségű esemény volt a magyar külpolitikában. | Венгрия присоединилась к Европейскому союзу 1 мая 2004 года. Это было событие исторического значения во внешней политике Венгрии.',
        image: null
    },
    {
        id: 'eu_002',
        type: 'multiple_choice',
        category: 'Európai Unió',
        difficulty: 1,
        question: 'Mikor csatlakozott Magyarország a schengeni övezethez?',
        options: ['2006', '2007', '2008', '2009'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország 2007-ben csatlakozott a schengeni övezethez, amely a határok szabad átjárhatóságát biztosítja. | Венгрия присоединилась к шенгенской зоне в 2007 году, которая обеспечивает свободное пересечение границ.',
        image: null
    },
    {
        id: 'eu_003',
        type: 'text_input',
        category: 'Európai Unió',
        difficulty: 1,
        question: 'Mi az Európai Unió központja?',
        correctAnswer: maskAnswer(['Brüsszel', 'Brussels']),
        explanation: 'Az Európai Unió központja Brüsszel. Itt található az Európai Bizottság, a Tanács és más fontos uniós intézmények székhelye. | Центр Европейского союза - Брюссель. Здесь находится штаб-квартира Европейской комиссии, Совета и других важных институтов ЕС.',
        image: null
    },
    {
        id: 'eu_004',
        type: 'multiple_choice',
        category: 'Európai Unió',
        difficulty: 2,
        question: 'Hány fővel képviselteti magát Magyarország az Európai Parlamentben?',
        options: ['19', '20', '21', '22'],
        correctAnswer: maskAnswer(2),
        explanation: 'Magyarország 21 fővel képviselteti magát az Európai Parlamentben. Az európai uniós parlamenti választásokat ötévente tartják. | Венгрия представлена в Европейском парламенте 21 депутатом. Выборы в Европейский парламент проводятся каждые пять лет.',
        image: null
    },
    {
        id: 'eu_005',
        type: 'multiple_choice',
        category: 'Európai Unió',
        difficulty: 1,
        question: 'Hány polgár él az Európai Unióban?',
        options: ['400 millió', '450 millió', '500 millió', '550 millió'],
        correctAnswer: maskAnswer(1),
        explanation: 'Az Európai Unióban 450 millió polgár él. Ez teszi az EU-t a világ egyik legnagyobb gazdasági és politikai egységévé. | В Европейском союзе живет 450 миллионов граждан. Это делает ЕС одним из крупнейших экономических и политических объединений в мире.',
        image: null
    },

    // Конституция
    {
        id: 'const_001',
        type: 'multiple_choice',
        category: 'Alaptörvény', // основной закон
        difficulty: 2,
        question: 'Mikor fogadta el az Országgyűlés Magyarország új Alaptörvényét?',
        options: ['2011. március 18.', '2011. április 18.', '2011. május 18.', '2011. június 18.'],
        correctAnswer: maskAnswer(1),
        explanation: 'Az Országgyűlés 2011. április 18-án fogadta el Magyarország új Alaptörvényét, amely 2012. január 1-én lépett hatályba. | Государственное собрание приняло новый Основной закон Венгрии 18 апреля 2011 года, который вступил в силу 1 января 2012 года.',
        image: null
    },
    {
        id: 'const_002',
        type: 'multiple_choice',
        category: 'Alaptörvény',
        difficulty: 1,
        question: 'Mikor lépett hatályba Magyarország Alaptörvénye?',
        options: ['2011. január 1.', '2012. január 1.', '2013. január 1.', '2010. január 1.'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország Alaptörvénye 2012. január 1-én lépett hatályba. Az Alaptörvény különleges, a többi törvény felett álló, legmagasabb jogi erővel bíró norma. | Основной закон Венгрии вступил в силу 1 января 2012 года. Основной закон - это особая норма, стоящая над другими законами и обладающая высшей юридической силой.',
        image: null
    },
    {
        id: 'const_003',
        type: 'text_input',
        category: 'Alaptörvény',
        difficulty: 2,
        question: 'Mi az Alaptörvény másik neve?',
        correctAnswer: maskAnswer(['alkotmány', 'Magyarország alkotmánya']),
        explanation: 'Az Alaptörvény Magyarország alkotmánya. Magyarország jogrendjének alapja, amely meghatározza az ország működésének alapelveit. | Основной закон - это конституция Венгрии. Основа правовой системы Венгрии, которая определяет основные принципы функционирования страны.',
        image: null
    },

    // Венгерские традиции (на основе раздела Hungarikumok)
    {
        id: 'cult_001',
        type: 'text_input',
        category: 'kultúra', // культура
        difficulty: 2,
        question: 'Mi a hungarikum szó jelentése?',
        correctAnswer: maskAnswer(['magyar vonatkozású', 'tipikusan magyar', 'magyarsagra jellemzo']),
        explanation: 'A hungarikumok azok az alkotások, jellegzetes tárgyak, szokások, amelyek tipikusan magyar vonatkozásúak, semmilyen más népre nem jellemzőek, csak a magyarokra. A „hungarikum" szó Magyarország latin nevéből ered (Hungária). | Хунгарикумы - это произведения, характерные предметы, обычаи, которые типично венгерские, не характерны ни для какого другого народа, только для венгров. Слово «хунгарикум» происходит от латинского названия Венгрии (Hungária).',
        image: null
    },
    {
        id: 'cult_002',
        type: 'multiple_choice',
        category: 'kultúra',
        difficulty: 2,
        question: 'Melyek tartoznak a hungarikum ételek közé?',
        options: ['gulyásleves, lángos, schnitzel', 'gulyásleves, bajai halászlé, dobostorta', 'pizza, gulyásleves, hamburger', 'sushi, dobostorta, lángos'],
        correctAnswer: maskAnswer(1),
        explanation: 'A hungarikum ételek közé tartozik: gulyásleves, bajai és tiszai halászlé, dobostorta, Pick téliszalámi. Ezek tipikusan magyar ételek. | К хунгарикум блюдам относятся: гуляш, байская и тисская уха, торт Добош, зимняя салями Пик. Это типично венгерские блюда.',
        image: null
    },
    {
        id: 'cult_003',
        type: 'text_input',
        category: 'kultúra',
        difficulty: 2,
        question: 'Milyen hungarikum italok vannak?',
        correctAnswer: maskAnswer(['magyar borok', 'tokaji aszú', 'pálinka']),
        explanation: 'A hungarikum italok között vannak: magyar borok (tokaji aszú, egri bikavér), pálinkák. A tokaji aszú világszerte híres magyar desszertbor. | Среди хунгарикум напитков есть: венгерские вина (токайское асу, эгерская бычья кровь), палинка. Токайское асу - всемирно известное венгерское десертное вино.',
        image: null
    },

    // ВТОРОЙ РАЗДЕЛ: География и общие сведения о Венгрии

    // Государственное устройство
    {
        id: 'state_001',
        type: 'text_input',
        category: 'államforma', // государственное устройство
        difficulty: 1,
        question: 'Mi Magyarország államformája?',
        correctAnswer: maskAnswer(['köztársaság']),
        explanation: 'Magyarország államformája köztársaság. A köztársasági elnök az államfő, aki kifejezi a nemzet egységét. | Государственная форма Венгрии - республика. Президент республики является главой государства, который выражает единство нации.',
        image: null
    },
    {
        id: 'state_002',
        type: 'multiple_choice',
        category: 'államforma',
        difficulty: 2,
        question: 'Ki Magyarország jelenlegi köztársasági elnöke?',
        options: ['Dr. Áder János', 'Dr. Sulyok Tamás', 'Orbán Viktor', 'Dr. Novák Katalin'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország köztársasági elnöke Dr. Sulyok Tamás. Az Országgyűlés választja 5 évre titkos szavazással, legfeljebb egy alkalommal újraválasztható. | Президент Венгрии - доктор Тамаш Шульок. Государственное собрание избирает его на 5 лет тайным голосованием, может быть переизбран максимум один раз.',
        image: null
    },
    {
        id: 'state_003',
        type: 'multiple_choice',
        category: 'államforma',
        difficulty: 2,
        question: 'Hány évre választják meg a köztársasági elnököt?',
        options: ['4 év', '5 év', '6 év', '7 év'],
        correctAnswer: maskAnswer(1),
        explanation: 'A köztársasági elnököt az Országgyűlés 5 évre választja titkos szavazással. Legfeljebb egy alkalommal újraválasztható, a Magyar Honvédség főparancsnoka. | Президента республики Государственное собрание избирает на 5 лет тайным голосованием. Максимум может быть переизбран один раз, является главнокомандующим Венгерских сил обороны.',
        image: null
    },

    // География
    {
        id: 'geo_003',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 1,
        question: 'Mekkora Magyarország területe?',
        options: ['83 ezer km²', '93 ezer km²', '103 ezer km²', '113 ezer km²'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország területe 93 ezer km². Ez teszi Magyarországot Európa közepesen nagy országává. | Территория Венгрии составляет 93 тысячи км². Это делает Венгрию среднего размера страной в Европе.',
        image: null
    },
    {
        id: 'geo_004',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 1,
        question: 'Mennyi Magyarország népessége?',
        options: ['8,6 millió fő', '9,6 millió fő', '10,6 millió fő', '11,6 millió fő'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország népessége 9,6 millió fő. A népesség többsége magyar, de jelentős nemzetiségi kisebbségek is élnek az országban. | Население Венгрии составляет 9,6 миллиона человек. Большинство населения венгры, но в стране также живут значительные национальные меньшинства.',
        image: null
    },
    {
        id: 'geo_005',
        type: 'text_input',
        category: 'földrajz',
        difficulty: 1,
        question: 'Mi Magyarország pénzneme?',
        correctAnswer: maskAnswer(['forint']),
        explanation: 'Magyarország pénzneme a forint. A forint az egyik legrégebbi európai pénznem neve, amely a firenzei aranyforintból származik. | Валютой Венгрии является форинт. Форинт - одно из старейших европейских названий валют, происходящее от флорентийского золотого флорина.',
        image: null
    },
    {
        id: 'geo_006',
        type: 'text_input',
        category: 'földrajz',
        difficulty: 1,
        question: 'Mi Magyarország hivatalos nyelve?',
        correctAnswer: maskAnswer(['magyar']),
        explanation: 'Magyarország hivatalos nyelve a magyar. A magyar nyelv a finnugor nyelvcsaládba tartozik, és egyedülálló Európában. | Официальный язык Венгрии - венгерский. Венгерский язык принадлежит к финно-угорской языковой семье и уникален в Европе.',
        image: null
    },

    // Тájegységek (регионы)
    {
        id: 'geo_007',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 2,
        question: 'Melyek Magyarország fő tájegységei?',
        options: ['Alföld, Felföld, Dunántúl', 'Alföld, Alpokalja, Dunántúli-dombság, Dunántúl-középhegység, Északi-középhegység, Kisalföld', 'Nagyalföld, Kisalföld, Mátra', 'Puszta, Hegyvidék, Dunántúl'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország tájegységei: Alföld, Alpokalja, Dunántúli-dombság, Dunántúl-középhegység, Északi-középhegység, Kisalföld. Ezek alkotják az ország természetföldrajzi felosztását. | Регионы Венгрии: Альфёльд, Альпокалья, Задунайская возвышенность, Задунайское среднегорье, Северное среднегорье, Кишальфёльд. Они составляют физико-географическое деление страны.',
        image: null
    },

    // Vizek (водные объекты)
    {
        id: 'geo_008',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 1,
        question: 'Melyek Magyarország legnagyobb tavai?',
        options: ['Balaton, Tisza-tó, Hévíz', 'Balaton, Fertő tó, Velencei-tó', 'Balaton, Öreg-tó, Sóstó', 'Fertő tó, Velencei-tó, Tisza-tó'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország legnagyobb tavai: Balaton, Fertő tó, Velencei-tó. A Balaton Közép-Európa legnagyobb tava, a Fertő tó határ menti tó Ausztriával. | Крупнейшие озера Венгрии: Балатон, озеро Ферте, Веленцейское озеро. Балатон - крупнейшее озеро Центральной Европы, озеро Ферте - пограничное озеро с Австрией.',
        image: null
    },
    {
        id: 'geo_009',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 1,
        question: 'Melyek Magyarország legnagyobb folyói?',
        options: ['Duna, Tisza, Szamos, Körös', 'Duna, Tisza, Dráva, Rába', 'Tisza, Dráva, Maros, Szava', 'Duna, Rába, Zala, Ipoly'],
        correctAnswer: maskAnswer(1),
        explanation: 'Magyarország legnagyobb folyói: Duna, Tisza, Dráva, Rába. A Duna Európa második leghosszabb folyója, a Tisza a Duna legnagyobb mellékfolyója. | Крупнейшие реки Венгрии: Дунай, Тиса, Драва, Раба. Дунай - вторая по длине река Европы, Тиса - крупнейший приток Дуная.',
        image: null
    },

    // Szomszédos országok (соседние страны)
    {
        id: 'geo_010',
        type: 'multiple_choice',
        category: 'földrajz',
        difficulty: 2,
        question: 'Hány országgal határos Magyarország?',
        options: ['5', '6', '7', '8'],
        correctAnswer: maskAnswer(2),
        explanation: 'Magyarország 7 országgal határos: Szlovákia, Ukrajna, Románia, Szerbia, Horvátország, Szlovénia, Ausztria. Ez teszi Magyarországot az egyik legtöbb szomszéddal rendelkező európai országgá. | Венгрия граничит с 7 странами: Словакия, Украина, Румыния, Сербия, Хорватия, Словения, Австрия. Это делает Венгрию одной из европейских стран с наибольшим количеством соседей.',
        image: null
    },
    {
        id: 'geo_011',
        type: 'text_input',
        category: 'földrajz',
        difficulty: 2,
        question: 'Nevezz meg három szomszédos országot!',
        correctAnswer: maskAnswer(['Szlovákia Ausztria Románia', 'Ausztria Szlovákia Szerbia', 'Románia Szerbia Horvátország']),
        explanation: 'Magyarország szomszédos országai: Szlovákia, Ukrajna, Románia, Szerbia, Horvátország, Szlovénia, Ausztria. Bármelyik három helyes válasz. | Соседние страны Венгрии: Словакия, Украина, Румыния, Сербия, Хорватия, Словения, Австрия. Любые три являются правильным ответом.',
        image: null
    },

    // Nemzetiségek (национальности)
    {
        id: 'nat_001',
        type: 'multiple_choice',
        category: 'nemzetiségek', // национальности
        difficulty: 2,
        question: 'Mely nemzetiségek élnek Magyarországon?',
        options: ['Csak magyarok', 'Magyar, német, roma, szlovák', 'Bolgár, görög, horvát, lengyel, német, örmény, roma, román, ruszin, szerb, szlovák, szlovén, ukrán', 'Magyar, osztrák, orosz'],
        correctAnswer: maskAnswer(2),
        explanation: 'Magyarország nemzetiségei: bolgár, görög, horvát, lengyel, német, örmény, roma, román, ruszin, szerb, szlovák, szlovén és ukrán. Az ország soknemzetiségű, ami történelmi fejlődésének eredménye. | Национальности Венгрии: болгары, греки, хорваты, поляки, немцы, армяне, цыгане, румыны, русины, сербы, словаки, словенцы и украинцы. Страна многонациональная, что является результатом ее исторического развития.',
        image: null
    },

    // Trianoni békeszerződés (Трианонский мирный договор)
    {
        id: 'hist_013',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor írták alá a trianoni békeszerződést?',
        options: ['1919. június 4.', '1920. június 4.', '1921. június 4.', '1918. június 4.'],
        correctAnswer: maskAnswer(1),
        explanation: 'A trianoni békeszerződést 1920. június 4-én íratták alá Magyarországgal a győztes hatalmak az első világháborút lezáró békeként. | Трианонский мирный договор был подписан с Венгрией 4 июня 1920 года державами-победительницами как мир, завершающий Первую мировую войну.',
        image: null
    },
    {
        id: 'hist_014',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Milyen területi változásokat okozott a trianoni békeszerződés?',
        options: ['Magyarország területe nőtt', 'Magyarország elveszítette területének kétharmadát', 'Magyarország területe felére csökkent', 'Nem változott a terület'],
        correctAnswer: maskAnswer(1),
        explanation: 'A békediktátum következtében Magyarország elveszítette területének mintegy kétharmadát, népessége pedig 18,2 millió főről 7,6 millió főre csökkent. A magyar nemzet egyharmada, 3,3 millió magyar rekedt határainkon kívül. | В результате мирного диктата Венгрия потеряла около двух третей своей территории, а население сократилось с 18,2 миллиона до 7,6 миллиона человек. Треть венгерской нации, 3,3 миллиона венгров оказались за пределами границ.',
        image: null
    },
    {
        id: 'hist_015',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Hányan rekedt ki magyar a határon túl a trianoni béke után?',
        correctAnswer: maskAnswer(['3,3 millió', '3.3 millió']),
        explanation: 'A trianoni békeszerződés után 3,3 millió magyar rekedt határainkon kívül, ami a magyar nemzet egyharmadát jelentette. Ez lett az egyik legfájdalmasabb következménye a békeszerződésnek. | После Трианонского мирного договора 3,3 миллиона венгров оказались за пределами границ, что составляло треть венгерской нации. Это стало одним из самых болезненных последствий мирного договора.',
        image: null
    },
    // ТРЕТИЙ РАЗДЕЛ: Европейская и венгерская литература и музыка
    // 27 вопросов для добавления в основной файл

    // Европейская литература
    {
        id: 'lit_eur_001',
        type: 'multiple_choice',
        category: 'európai irodalom', // европейская литература
        difficulty: 1,
        question: 'Ki írta a "Rómeó és Júlia" című művet?',
        options: ['William Shakespeare', 'Voltaire', 'Johann Wolfgang von Goethe', 'Charles Dickens'],
        correctAnswer: maskAnswer(0),
        explanation: 'William Shakespeare írta a "Rómeó és Júlia" című tragédiát. Shakespeare az angol irodalom és a világirodalom egyik legnagyobb alakja. | "Ромео и Джульетту" написал Уильям Шекспир. Шекспир - одна из величайших фигур английской и мировой литературы.',
        image: null
    },
    {
        id: 'lit_eur_002',
        type: 'text_input',
        category: 'európai irodalom',
        difficulty: 2,
        question: 'Voltaire melyik művét említi a tananyag?',
        correctAnswer: maskAnswer(['Candide']),
        explanation: 'Voltaire "Candide" című műve az európai felvilágosodás irodalmának kiemelkedő alkotása. A mű filozófiai szatíra, amely a kor optimizmusát kritizálja. | "Кандид" Вольтера - выдающееся произведение литературы европейского Просвещения. Это философская сатира, критикующая оптимизм эпохи.',
        image: null
    },
    {
        id: 'lit_eur_003',
        type: 'multiple_choice',
        category: 'európai irodalom',
        difficulty: 2,
        question: 'Johann Wolfgang von Goethe melyik műve szerepel a tananyagban?',
        options: ['Werther', 'Faust', 'Wilhelm Meister', 'Iphigenie'],
        correctAnswer: maskAnswer(1),
        explanation: 'Johann Wolfgang von Goethe "Faust" című műve a német és az európai irodalom legnagyobb alkotásai közé tartozik. A mű az emberi tudásvágy és a megváltás témáját dolgozza fel. | "Фауст" Иоганна Вольфганга фон Гёте относится к величайшим произведениям немецкой и европейской литературы. Произведение обрабатывает тему человеческой жажды знаний и спасения.',
        image: null
    },

    // Европейская музыка
    {
        id: 'mus_eur_001',
        type: 'multiple_choice',
        category: 'európai zene', // европейская музыка
        difficulty: 1,
        question: 'Ki szerezte az Európai Unió himnuszát?',
        options: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
        correctAnswer: maskAnswer(1),
        explanation: 'Ludwig van Beethoven IX. szimfóniájának negyedik tétele vált az Európai Unió himnuszává. A dallam Friedrich von Schiller "Örömóda" című költeményének megzenésített változata. | Четвертая часть IX симфонии Людвига ван Бетховена стала гимном Европейского союза. Мелодия - это музыкальная версия стихотворения Фридриха фон Шиллера "Ода к радости".',
        image: null
    },
    {
        id: 'mus_eur_002',
        type: 'text_input',
        category: 'európai zene',
        difficulty: 2,
        question: 'Melyik év(ben) mutatta be Beethoven a IX. szimfóniát?',
        correctAnswer: maskAnswer(['1824']),
        explanation: 'Ludwig van Beethoven 1824-ben mutatta be IX. szimfóniáját. Ennek negyedik tétele, az Örömóda vált az Európai Unió jelképévé. | Людвиг ван Бетховен представил свою IX симфонию в 1824 году. Четвертая часть, Ода к радости, стала символом Европейского союза.',
        image: null
    },
    {
        id: 'mus_eur_003',
        type: 'multiple_choice',
        category: 'európai zene',
        difficulty: 1,
        question: 'Wolfgang Amadeus Mozart melyik operája szerepel a tananyagban?',
        options: ['Don Giovanni', 'A varázsfuvola', 'Figaro házassága', 'Così fan tutte'],
        correctAnswer: maskAnswer(1),
        explanation: 'Wolfgang Amadeus Mozart "A varázsfuvola" című operája a klasszikus zene egyik legismertebb műve. Mozart az osztrák zeneszerző, a bécsi klasszika képviselője. | Опера Вольфганга Амадея Моцарта "Волшебная флейта" - одно из самых известных произведений классической музыки. Моцарт - австрийский композитор, представитель венского классицизма.',
        image: null
    },
    {
        id: 'mus_eur_004',
        type: 'text_input',
        category: 'európai zene',
        difficulty: 2,
        question: 'Pjotr Iljics Csajkovszkij melyik balettje szerepel a tananyagban?',
        correctAnswer: maskAnswer(['A hattyúk tava']),
        explanation: 'Pjotr Iljics Csajkovszkij "A hattyúk tava" című balettje a világirodalom egyik legismertebb balettje. A orosz zeneszerző a romantikus zene kiemelkedő alakja. | Балет Петра Ильича Чайковского "Лебединое озеро" - один из самых известных балетов в мировой литературе. Русский композитор - выдающаяся фигура романтической музыки.',
        image: null
    },

    // Венгерская музыка
    {
        id: 'mus_hun_001',
        type: 'multiple_choice',
        category: 'magyar zene', // венгерская музыка
        difficulty: 1,
        question: 'Kik voltak a magyar népzenekutatás két leghíresebb képviselője?',
        options: ['Liszt Ferenc és Erkel Ferenc', 'Bartók Béla és Kodály Zoltán', 'Erkel Ferenc és Kodály Zoltán', 'Bartók Béla és Liszt Ferenc'],
        correctAnswer: maskAnswer(1),
        explanation: 'Bartók Béla és Kodály Zoltán a magyar népzenekutatás két leghíresebb képviselője. Ők gyűjtötték és kutatták a magyar népdalokat az 1900-as évektől kezdődően. | Бела Барток и Золтан Кодай - два самых известных представителя венгерского исследования народной музыки. Они собирали и исследовали венгерские народные песни с 1900-х годов.',
        image: null
    },
    {
        id: 'mus_hun_002',
        type: 'text_input',
        category: 'magyar zene',
        difficulty: 2,
        question: 'Mikor kezdték gyűjteni a magyar népdalokat?',
        correctAnswer: maskAnswer(['1800-as évektől', '19. század']),
        explanation: 'A népdalokat az 1800-as évektől kezdték gyűjteni, dallamukat lekottázni, szövegüket lejegyezni. Ez volt a magyar népzenekutatás kezdete. | Народные песни начали собирать с 1800-х годов, записывать их мелодии нотами, записывать тексты. Это было началом венгерского исследования народной музыки.',
        image: null
    },
    {
        id: 'mus_hun_003',
        type: 'multiple_choice',
        category: 'magyar zene',
        difficulty: 2,
        question: 'Erkel Ferenc melyik operája szerepel a tananyagban?',
        options: ['Hunyadi László', 'Bánk bán', 'Dózsa György', 'István király'],
        correctAnswer: maskAnswer(1),
        explanation: 'Erkel Ferenc "Bánk bán" operája a magyar opera történetének legjelentősebb műve. Erkel Ferenc a magyar nemzeti opera megteremtője. | Опера Ференца Эркеля "Банк бан" - самое значительное произведение в истории венгерской оперы. Ференц Эркель - создатель венгерской национальной оперы.',
        image: null
    },
    {
        id: 'mus_hun_004',
        type: 'text_input',
        category: 'magyar zene',
        difficulty: 2,
        question: 'Liszt Ferenc melyik műveit említi a tananyag?',
        correctAnswer: maskAnswer(['Magyar rapszódiák']),
        explanation: 'Liszt Ferenc "Magyar rapszódiák" című művei világhírűek. Liszt Ferenc zongoravirtuóz és zeneszerző volt, aki a magyar népzene elemeit használta fel műveiben. | "Венгерские рапсодии" Ференца Листа всемирно известны. Ференц Лист был пианистом-виртуозом и композитором, который использовал элементы венгерской народной музыки в своих произведениях.',
        image: null
    },
    {
        id: 'mus_hun_005',
        type: 'multiple_choice',
        category: 'magyar zene',
        difficulty: 2,
        question: 'Bartók Béla melyik operája szerepel a tananyagban?',
        options: ['A fából faragott királyfi', 'A kékszakállú herceg vára', 'A csodálatos mandarin', 'Mikrokozmosz'],
        correctAnswer: maskAnswer(1),
        explanation: 'Bartók Béla "A kékszakállú herceg vára" című operája a magyar zene 20. századi remekműve. Bartók a magyar népzene kutatója és modern zeneszerző volt. | Опера Белы Бартока "Замок герцога Синяя Борода" - шедевр венгерской музыки XX века. Барток был исследователем венгерской народной музыки и современным композитором.',
        image: null
    },
    {
        id: 'mus_hun_006',
        type: 'text_input',
        category: 'magyar zene',
        difficulty: 2,
        question: 'Kodály Zoltán melyik művét említi a tananyag?',
        correctAnswer: maskAnswer(['Háry János']),
        explanation: 'Kodály Zoltán "Háry János" című zenei meséje a magyar zeneirodalm egyik legismertebb műve. A mű magyar népdalokra épül és Háry János kalandjait meséli el. | Музыкальная сказка Золтана Кодая "Хари Янош" - одно из самых известных произведений венгерской музыкальной литературы. Произведение основано на венгерских народных песнях и рассказывает о приключениях Хари Яноша.',
        image: null
    },

    // Венгерская литература - Ренессанс и барокко
    {
        id: 'lit_hun_001',
        type: 'multiple_choice',
        category: 'magyar irodalom', // венгерская литература
        difficulty: 2,
        question: 'Ki volt a reneszánsz irodalom kiemelkedő alakja, aki a "Pannónia dicsérete" című művet írta?',
        options: ['Balassi Bálint', 'Janus Pannonius', 'Zrínyi Miklós', 'Kazinczy Ferenc'],
        correctAnswer: maskAnswer(1),
        explanation: 'Janus Pannonius írta a "Pannónia dicsérete" című művet. Ő volt a magyar reneszánsz irodalom kiemelkedő alakja, humanista költő és püspök. | "Хвалу Паннонии" написал Янус Паннониус. Он был выдающейся фигурой венгерской литературы эпохи Возрождения, поэтом-гуманистом и епископом.',
        image: null
    },
    {
        id: 'lit_hun_002',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Balassi Bálint melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Hogy Júliára talála, így köszöne néki']),
        explanation: 'Balassi Bálint "Hogy Júliára talála, így köszöne néki" című műve a reneszánsz kori magyar irodalom jelentős alkotása. Balassi a magyar reneszánsz líra megteremtője. | Произведение Балинта Балашши "Как встретил Юлию, так приветствовал ее" - значительное творение венгерской литературы эпохи Возрождения. Балашши - создатель венгерской ренессансной лирики.',
        image: null
    },
    {
        id: 'lit_hun_003',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Ki írta a "Szigeti veszedelem" című művet?',
        options: ['Balassi Bálint', 'Janus Pannonius', 'Zrínyi Miklós', 'Csokonai Vitéz Mihály'],
        correctAnswer: maskAnswer(2),
        explanation: 'Zrínyi Miklós írta a "Szigeti veszedelem" című eposzát. Ez a mű a barokk irodalom kiemelkedő alkotása, amely a szigetvári ostromot örökíti meg. | "Сигетскую печаль" написал Миклош Зриньи. Это произведение - выдающееся творение литературы барокко, которое увековечивает осаду Сигетвара.',
        image: null
    },

    // Венгерская литература - Просвещение и классицизм
    {
        id: 'lit_hun_004',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Csokonai Vitéz Mihály melyik műve szerepel a tananyagban?',
        options: ['Dorottya', 'A reményhez', 'Lillafüredi', 'Anakreoni dalok'],
        correctAnswer: maskAnswer(1),
        explanation: 'Csokonai Vitéz Mihály "A reményhez" című verse a felvilágosodás irodalmának kiemelkedő műve. Csokonai a magyar felvilágosodás nagy költője volt. | Стихотворение Михая Чоконаи Витеза "К надежде" - выдающееся произведение литературы Просвещения. Чоконаи был великим поэтом венгерского Просвещения.',
        image: null
    },
    {
        id: 'lit_hun_005',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Batsányi János melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['A franciaországi változásokra']),
        explanation: 'Batsányi János "A franciaországi változásokra" című verse a felvilágosodás kori magyar irodalom jelentős műve. A vers a francia forradalomra reflektál. | Стихотворение Яноша Баташни "На французские изменения" - значительное произведение венгерской литературы эпохи Просвещения. Стихотворение отражает французскую революцию.',
        image: null
    },
    {
        id: 'lit_hun_006',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Ki volt a hazai nyelvújítás vezéralakja?',
        options: ['Berzsenyi Dániel', 'Kazinczy Ferenc', 'Csokonai Vitéz Mihály', 'Batsányi János'],
        correctAnswer: maskAnswer(1),
        explanation: 'Kazinczy Ferenc volt a hazai nyelvújítás vezéralakja. Ő szervezte és irányította a magyar nyelv megújítását, modernizálását a 18-19. század fordulóján. | Ференц Казинци был ведущей фигурой отечественного языкового обновления. Он организовал и руководил обновлением, модернизацией венгерского языка на рубеже XVIII-XIX веков.',
        image: null
    },
    {
        id: 'lit_hun_007',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Berzsenyi Dániel melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Az első szerelem']),
        explanation: 'Berzsenyi Dániel "Az első szerelem" című verse a klasszicista irodalom jelentős műve. Berzsenyi a magyar klasszicizmus kiemelkedő költője volt. | Стихотворение Даниела Берженьи "Первая любовь" - значительное произведение классицистской литературы. Берженьи был выдающимся поэтом венгерского классицизма.',
        image: null
    },

    // Венгерская литература - Романтизм
    {
        id: 'lit_hun_008',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 1,
        question: 'Ki írta a magyar nemzeti himnuszt?',
        options: ['Vörösmarty Mihály', 'Kölcsey Ferenc', 'Petőfi Sándor', 'Arany János'],
        correctAnswer: maskAnswer(1),
        explanation: 'Kölcsey Ferenc írta a "Himnusz" című verset, amely Magyarország nemzeti himnusza lett. A vers 1823-ban íródott és Erkel Ferenc zenésítette meg. | Ференц Кёльчеи написал стихотворение "Гимн", которое стало национальным гимном Венгрии. Стихотворение было написано в 1823 году, и Ференц Эркель положил его на музыку.',
        image: null
    },
    {
        id: 'lit_hun_009',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Vörösmarty Mihály melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Szózat']),
        explanation: 'Vörösmarty Mihály "Szózat" című verse a magyar romantika egyik legjelentősebb műve. A vers a magyar nemzet sorsáról és jövőjéről szól. | Стихотворение Михая Вёрёшмарти "Призыв" - одно из самых значительных произведений венгерского романтизма. Стихотворение о судьбе и будущем венгерской нации.',
        image: null
    },
    {
        id: 'lit_hun_010',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 1,
        question: 'Petőfi Sándor melyik műve szerepel a tananyagban?',
        options: ['János vitéz', 'Nemzeti dal', 'Egy gondolat bánt engemet', 'Szabadság, szerelem'],
        correctAnswer: maskAnswer(1),
        explanation: 'Petőfi Sándor "Nemzeti dal" című verse a magyar romantika és az 1848-as forradalom egyik legfontosabb műve. "Talpra magyar, hí a haza!" kezdetű vers. | Стихотворение Шандора Петёфи "Национальная песня" - одно из важнейших произведений венгерского романтизма и революции 1848 года. Стихотворение начинается словами "Вставай, венгр, зовет отчизна!"',
        image: null
    },
    {
        id: 'lit_hun_011',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Jókai Mór melyik regénye szerepel a tananyagban?',
        options: ['Az arany ember', 'A kőszívű ember fiai', 'Egy magyar nábob', 'A janicsárok végnapjai'],
        correctAnswer: maskAnswer(1),
        explanation: 'Jókai Mór "A kőszívű ember fiai" című regénye a magyar romantikus regényirodalom kiemelkedő műve. A regény az 1848-49-es szabadságharc eseményeit dolgozza fel. | Роман Мора Йокаи "Сыновья человека с каменным сердцем" - выдающееся произведение венгерской романтической прозы. Роман обрабатывает события освободительной войны 1848-49 годов.',
        image: null
    },
    {
        id: 'lit_hun_012',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Arany János melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['A walesi bárdok']),
        explanation: 'Arany János "A walesi bárdok" című balladája a magyar romantika mestermūve. A ballada III. Eduárd walesi hadjáratát és a bárdok sorsát dolgozza fel. | Баллада Яноша Арани "Валлийские барды" - шедевр венгерского романтизма. Баллада обрабатывает валлийский поход Эдуарда III и судьбу бардов.',
        image: null
    },
    {
        id: 'lit_hun_013',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Katona József melyik drámája szerepel a tananyagban?',
        options: ['Jeruzsálem pusztulása', 'Bánk bán', 'Vajda tornya', 'Ziska'],
        correctAnswer: maskAnswer(1),
        explanation: 'Katona József "Bánk bán" című drámája a magyar romantikus dráma legjelentősebb műve. A dráma a 13. századi magyar történelem eseményeit dolgozza fel. | Драма Йожефа Катоны "Банк бан" - самое значительное произведение венгерской романтической драмы. Драма обрабатывает события венгерской истории XIII века.',
        image: null
    },
    {
        id: 'lit_hun_014',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Madách Imre melyik művét említi a tananyag?',
        correctAnswer: maskAnswer(['Az ember tragédiája']),
        explanation: 'Madách Imre "Az ember tragédiája" című drámai költeménye a magyar irodalom egyik legnagyobb műve. A mű az emberiség történetét és jövőjét mutatja be. | Драматическая поэма Имре Мадача "Трагедия человека" - одно из величайших произведений венгерской литературы. Произведение представляет историю и будущее человечества.',
        image: null
    },

    // Венгерская литература - XX век
    {
        id: 'lit_hun_015',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Ady Endre melyik műve szerepel a tananyagban?',
        options: ['Góg és Magóg fia vagyok én', 'Elbocsátó, szép üzenet', 'A Hét-országúton', 'Kocsi-út az éjszakában'],
        correctAnswer: maskAnswer(1),
        explanation: 'Ady Endre "Elbocsátó, szép üzenet" című verse a 20. századi magyar líra meghatározó műve. Ady a magyar költészet megújítója volt. | Стихотворение Эндре Ади "Прощальное, прекрасное послание" - определяющее произведение венгерской лирики XX века. Ади был обновителем венгерской поэзии.',
        image: null
    },
    {
        id: 'lit_hun_016',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Móricz Zsigmond melyik regénye szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Rokonok']),
        explanation: 'Móricz Zsigmond "Rokonok" című regénye a 20. századi magyar próza jelentős műve. Móricz a magyar realizmus nagy képviselője volt. | Роман Жигмонда Мориса "Родственники" - значительное произведение венгерской прозы XX века. Мориц был великим представителем венгерского реализма.',
        image: null
    },
    {
        id: 'lit_hun_017',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Kosztolányi Dezső melyik regénye szerepel a tananyagban?',
        options: ['Pacsirta', 'Édes Anna', 'Nero, a véres költő', 'Aranysárkány'],
        correctAnswer: maskAnswer(1),
        explanation: 'Kosztolányi Dezső "Édes Anna" című regénye a 20. századi magyar irodalom klasszikusa. A regény egy cselédlány sorsát mutatja be a polgári családban. | Роман Дежё Костоланьи "Милая Анна" - классика венгерской литературы XX века. Роман представляет судьбу служанки в буржуазной семье.',
        image: null
    },
    {
        id: 'lit_hun_018',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Karinthy Frigyes melyik műve szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Így írtok ti']),
        explanation: 'Karinthy Frigyes "Így írtok ti" című irodalmi paródiagyűjteménye a magyar humor és szatíra klasszikus műve. Karinthy nagy humorista és író volt. | Сборник литературных пародий Фридеша Каринти "Так вы пишете" - классическое произведение венгерского юмора и сатиры. Каринти был великим юмористом и писателем.',
        image: null
    },
    {
        id: 'lit_hun_019',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'József Attila melyik verse szerepel a tananyagban?',
        options: ['Óda', 'Tiszta szívvel', 'Mama', 'Külvárosi éj'],
        correctAnswer: maskAnswer(1),
        explanation: 'József Attila "Tiszta szívvel" című verse a 20. századi magyar líra kiemelkedő műve. József Attila a magyar költészet egyik legnagyobb alakja. | Стихотворение Аттилы Йожефа "С чистым сердцем" - выдающееся произведение венгерской лирики XX века. Аттила Йожеф - одна из величайших фигур венгерской поэзии.',
        image: null
    },
    {
        id: 'lit_hun_020',
        type: 'text_input',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Radnóti Miklós melyik versének részlete szerepel a tananyagban?',
        correctAnswer: maskAnswer(['Nem tudhatom']),
        explanation: 'Radnóti Miklós "Nem tudhatom" című verse a 20. századi magyar líra megrázó műve. Radnóti a Holocaust áldozata lett, versei a háború borzalmairól tanúskodnak. | Стихотворение Миклоша Радноти "Не могу знать" - потрясающее произведение венгерской лирики XX века. Радноти стал жертвой Холокоста, его стихи свидетельствуют об ужасах войны.',
        image: null
    },
    {
        id: 'lit_hun_021',
        type: 'multiple_choice',
        category: 'magyar irodalom',
        difficulty: 2,
        question: 'Márai Sándor melyik műve szerepel a tananyagban?',
        options: ['Szindbád hazamegy', 'Egy polgár vallomása', 'A gyertyák csonkig égnek', 'Eszter hagyatéka'],
        correctAnswer: maskAnswer(1),
        explanation: 'Márai Sándor "Egy polgár vallomása" című műve a 20. századi magyar próza jelentős alkotása. Márai a polgári értékek krónikása volt. | Произведение Шандора Мараи "Исповедь буржуа" - значительное творение венгерской прозы XX века. Мараи был хроникером буржуазных ценностей.',
        image: null
    },

    // Irodalmi központok és intézmények
    {
        id: 'lit_inst_001',
        type: 'multiple_choice',
        category: 'irodalmi intézmények', // литературные институты
        difficulty: 2,
        question: 'Az 1820-as években melyik város vált az ország irodalmi központjává?',
        options: ['Debrecen', 'Szeged', 'Pest-Buda', 'Pécs'],
        correctAnswer: maskAnswer(2),
        explanation: 'Az 1820-as éveket a politikai és az irodalom szoros összefonódása jellemezte, ekkor vált Pest-Buda az ország irodalmi központjává. Itt indultak újságok, folyóiratok. | 1820-е годы характеризовались тесным переплетением политики и литературы, тогда Пешт-Буда стала литературным центром страны. Здесь начали издаваться газеты и журналы.',
        image: null
    },
    {
        id: 'lit_inst_002',
        type: 'text_input',
        category: 'irodalmi intézmények',
        difficulty: 2,
        question: 'Mikor kezdte meg működését a Magyar Tudományos Akadémia?',
        correctAnswer: maskAnswer(['1820-as évek', '1825']),
        explanation: 'A Magyar Tudományos Akadémia az 1820-as években kezdte meg működését. Az akadémia a magyar tudomány és irodalom fejlesztésének központja lett. | Венгерская академия наук начала свою деятельность в 1820-х годах. Академия стала центром развития венгерской науки и литературы.',
        image: null
    },
    {
        id: 'lit_inst_003',
        type: 'multiple_choice',
        category: 'irodalmi intézmények',
        difficulty: 2,
        question: 'Mikor nyitotta meg kapuit a Pesti Magyar Színház?',
        options: ['1835', '1837', '1839', '1841'],
        correctAnswer: maskAnswer(1),
        explanation: '1837-ben nyitotta meg kapuit a Pesti Magyar Színház, amely a Nemzeti Színház elődje volt. Ez fontos mérföldkő volt a magyar kultúra fejlődésében. | В 1837 году открыл свои двери Пештский венгерский театр, который был предшественником Национального театра. Это была важная веха в развитии венгерской культуры.',
        image: null
    },

    // Történelmi kontextus (1956-os forradalom)
    {
        id: 'hist_1956_001',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor tört ki az 1956-os forradalom?',
        options: ['november 2.', 'november 4.', 'október 23.', 'október 25.'],
        correctAnswer: maskAnswer(2),
        explanation: 'Az 1956-os magyar forradalom október 23-án tört ki. Ez a nap ma nemzeti ünnep Magyarországon, az 1956-os forradalom és szabadságharc emléknapja. | Венгерская революция 1956 года вспыхнула 23 октября. Этот день сегодня является национальным праздником в Венгрии, днем памяти революции и освободительной войны 1956 года.',
        image: null
    },
    {
        id: 'hist_1956_002',
        type: 'multiple_choice',
        category: 'történelem',
        difficulty: 2,
        question: 'Mikor verték le a szovjet csapatok az 1956-os forradalmat?',
        options: ['november 2.', 'november 4.', 'november 6.', 'november 8.'],
        correctAnswer: maskAnswer(1),
        explanation: 'November 4-én a szovjet csapatok ígéretük ellenére, miszerint elhagyják az országot, megkezdték a magyar fegyveres ellenállás felszámolását. | 4 ноября советские войска, вопреки своему обещанию покинуть страну, начали ликвидацию венгерского вооруженного сопротивления.',
        image: null
    },
    {
        id: 'hist_1956_003',
        type: 'text_input',
        category: 'történelem',
        difficulty: 2,
        question: 'Ki lett Magyarország vezetésére kijelölve a szovjet csapatok által?',
        correctAnswer: maskAnswer(['Kádár János']),
        explanation: 'Visszaállt a kommunista egypártrendszer, Magyarország vezetésére Kádár Jánost jelölték ki, Nagy Imrét pedig kivégezték. A Kádár János nevével fémjelzett kommunista korszak 1956-tól egészen 1989-ig tartott. | Восстановилась коммунистическая однопартийная система, на руководство Венгрией был назначен Янош Кадар, а Имре Надь был казнен. Коммунистическая эпоха, связанная с именем Яноша Кадара, длилась с 1956 по 1989 год.',
        image: null
    },

    // Európai Unió alapvető jogok kontextusában
    {
        id: 'eu_rights_001',
        type: 'multiple_choice',
        category: 'európai értékek', // европейские ценности
        difficulty: 2,
        question: 'Mely értékeket tartja szem előtt az Európai Unió?',
        options: ['Gazdasági növekedés', 'Demokratikus értékek, emberi jogok', 'Katonai erő', 'Technológiai fejlődés'],
        correctAnswer: maskAnswer(1),
        explanation: 'Az Európai Unió a demokratikus értékeket, emberi jogokat, jogállamiságot és az európai kultúra megőrzését tartja szem előtt. Ezek az alapvető európai értékek. | Европейский союз придерживается демократических ценностей, прав человека, правового государства и сохранения европейской культуры. Это основные европейские ценности.',
        image: null
    }
];