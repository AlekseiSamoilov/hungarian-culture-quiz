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
    }
];