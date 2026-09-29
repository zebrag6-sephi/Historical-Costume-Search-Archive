import { HistoricalRecord, ComparisonReport, ProjectBoard, LexiconWord } from '../types';

export const HISTORICAL_RECORDS: HistoricalRecord[] = [
  // 1. 울프 홀 (Wolf Hall, 2015, BBC)
  {
    id: 'wolf-hall',
    title: '울프 홀',
    originalTitle: 'Wolf Hall (2015, 영국 BBC 6부작 대하드라마, 마크 라일런스 주연)',
    mediaType: '영국 BBC 대하 역사 드라마 (피터 코스민스키 연출)',
    year: 2015,
    era: '16세기 전반 (1520~1535년 튜더 왕조)',
    eraCategory: '르네상스',
    region: '잉글랜드 런던 궁정 (헨리 8세 시대)',
    guild: '튜더 왕실 관료 및 궁정 귀족',
    socialStatus: '국왕 헨리 8세, 토머스 크롬웰, 앤 불린',
    category: '16C 튜더 왕가 여성 코르셋 & 게이블 후드',
    accuracyScore: 97,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3S2wwTAfEZdNJoJ8bHKnIgDkJ9qX2nkBrG6Ilyx2JJHtoU4UqUBHFITFuIR3GRz9Sj5fTXfO1PKfr4PJ2pyzy_3R1gMa-M4ceHILBQXH4oyePn6CWa2yEfZCFGGYSr9qJ5I7VDMsvH7TPgqiOAmi6x2IvY1DbR8DMBdCsaxbgHZJkFE17n-K3E24bRSBSS8kpT3aG6lynbtp1_AjfwMWcMETFctJEF2tSXy0csLUSuwfcOBCzUOAl-Q',
    alt: '16th century Tudor dynasty English noblewoman wearing an embroidered gable hood with black velvet veil and rigid stiffened square-neck corset gown.',
    organization: '영국 왕립 역사학회 및 빅토리아&앨버트 박물관(V&A) 복식팀',
    judgmentSummary: '기하학적 건축미를 띤 게이블 후드(Gable Hood)와 스퀘어 네크라인 본 코르셋 가운을 한스 홀바인의 초상화 사료와 100% 일치하게 고증한 역대 튜더 사극 최고 걸작.',
    sources: ['헨리 8세 왕실 옷장 기록부(Great Wardrobe Accounts)', '한스 홀바인(Hans Holbein) 영국 궁정 초상화'],
    creatorTips: '영국식 게이블 후드의 각진 박공 지붕 형태와 고래수염으로 빳빳하게 세운 스퀘어 네크라인 보디스가 튜더 왕가 특유의 위엄을 만들어냅니다. 자연광과 촛불 아래 묵직한 직물 질감을 살리는 것이 핵심입니다.',
    palette: [
      { hex: '#1c1917', name: '잉글리시 블랙 벨벳' },
      { hex: '#b45309', name: '앤틱 골드 다마스크' },
      { hex: '#fdfbf7', name: '천연 린넨 화이트' }
    ],
    tags: ['#튜더', '#게이블 후드', '#코르셋', '#영국궁정', '#16C르네상스', '#여성복식'],
    aliases: ['울프 홀', '울프홀', 'wolf hall', '게이블 후드', '튜더 왕조', '헨리 8세', '토머스 크롬웰', '마크 라일런스'],
    shortVerdict: '기하학적 건축미를 띤 게이블 후드와 튜더 왕가 코르셋 가운 사료 완벽 복원.',
    parts: [
      {
        id: 'wh1',
        number: 1,
        partName: '헤드기어 / 후드',
        title: '잉글리시 게이블 후드 (Gable Hood)',
        subtitle: '박공지붕 형태의 목제 프레임 베일',
        description: '기하학적 5각형 박공 프레임에 진주 자수 밴드와 검은 벨벳 베일을 결합한 튜더 왕비/궁녀의 상징. 이마를 드러내지 않고 머리카락을 완전히 머리망(Caul)에 수납.',
        material: '실크 벨벳 + 진주 + 리넨',
        technique: '골격 프레임 결속',
        matchRate: 98
      },
      {
        id: 'wh2',
        number: 2,
        partName: '상의 / 보디스',
        title: '튜더 스퀘어 네크라인 보디스',
        subtitle: '고래수염 본 보강 멍텅구리 실루엣',
        description: '가슴을 평평하게 압박하고 어깨선을 강조하는 각진 네크라인. 촘촘한 다마스크 문양과 묵직한 안감.',
        material: '실크 다마스크 + 양모 펠트 안감',
        technique: '고래수염 본 삽입 손바느질',
        matchRate: 97
      }
    ]
  },

  // 2. 천일의 스캔들 (The Other Boleyn Girl, 2008)
  {
    id: 'other-boleyn-girl',
    title: '천일의 스캔들',
    originalTitle: 'The Other Boleyn Girl (2008, 저스틴 채드윅 감독, 나탈리 포트만·스칼렛 요한슨 주연)',
    mediaType: '할리우드 역사 드라마 영화 (샌디 파월 의상감독)',
    year: 2008,
    era: '16세기 전반 (1525~1536년 튜더 왕조)',
    eraCategory: '르네상스',
    region: '잉글랜드 런던 궁정',
    guild: '불린 가문 및 궁정 귀족',
    socialStatus: '앤 불린, 메리 불린, 국왕 헨리 8세',
    category: '16C 튜더 궁정 드레스 (드라마틱 각색군)',
    accuracyScore: 72,
    accuracyGrade: 'SELECTIVE',
    anachronismRate: 28,
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSD8jZbCzKgSzV3kleYpE12cJiblqN85XZvMgqchTVXk-1Mx_mZ_wbc1RQs_Dp-09MGKCaYg0R4b8-PK6uvT9BltDzpAEUv05HWZ6CN2mXj-jQG-OTiRmeiy1tR56AMGdu0GHLqSGsYieresXxR0RqVR4XqmwQDSHHcLkiNgCJjWbSTEP7VlNDeaOFX60GT_KcY477GoOJOCcBG10FEAyl7fSF27QitL2bBhpHIEiTqUBT6VfJZhACwA',
    alt: 'The Other Boleyn Girl period costume with emerald green silk gown and modified French hood pushed back on modern hair.',
    organization: '영국 복식사 연구자 비평 대조군',
    judgmentSummary: '채도 높은 화학 염료풍의 비비드 에메랄드 그린 실크와 현대 드레스풍 스위트하트 네크라인, 뒤로 과도하게 젖힌 프렌치 후드 등 극적 시각화를 위한 각색 요소(아나크로니즘 약 28%)가 혼재되어 있어 주의 요망.',
    sources: ['샌디 파월(Sandy Powell) 의상 디자인 프로덕션 노트', 'V&A 박물관 튜더 복식 비교 비평집'],
    creatorTips: '역사적 고증 면에서는 울프 홀에 비해 현대적 각색이 많으나, 캐릭터의 야망과 매력을 강조하는 선명한 원색 배색과 극적인 실루엣 연출 아이디어로 참고하기에 우수합니다.',
    palette: [
      { hex: '#15803d', name: '비비드 에메랄드 그린 (현대 화학 염료풍)' },
      { hex: '#3b82f6', name: '사파이어 블루 실크' },
      { hex: '#d4cbb9', name: '골드 자수 트리밍' }
    ],
    tags: ['#천일의스캔들', '#프렌치후드', '#앤불린', '#네크라인각색', '#16C르네상스'],
    aliases: ['천일의 스캔들', '천일의스캔들', 'the other boleyn girl', '앤 불린', '프렌치 후드', '나탈리 포트만'],
    shortVerdict: '극적 시각화를 위한 비비드 실크와 현대적 네크라인 각색이 혼재된 대표작.',
    parts: [
      {
        id: 'ob1',
        number: 1,
        partName: '헤드기어',
        title: '각색된 프렌치 후드 (Modified French Hood)',
        subtitle: '헤어라인을 노출시킨 현대적 변형',
        description: '당대 규율과 달리 앞머리를 풍성하게 드러내고 후드를 정수리 뒤쪽으로 밀착시킨 영화적 변형.',
        material: '철사 와이어 + 벨벳 리본',
        technique: '현대 영화 의상 특수 제작',
        matchRate: 68
      }
    ]
  },

  // 3. 더 킹: 헨리 5세 (The King, 2019)
  {
    id: 'the-king-henry-v',
    title: '더 킹: 헨리 5세',
    originalTitle: 'The King (2019, 넷플릭스 영화, 데이비드 미쇼 연출, 티모시 샬라메 주연)',
    mediaType: '역사 전쟁 영화 (제인 페트리 의상감독)',
    year: 2019,
    era: '15세기 초 (1415년 백년전쟁)',
    eraCategory: '르네상스',
    region: '잉글랜드 / 북프랑스 (아쟁쿠르)',
    guild: '왕실 기사단 및 징집 궁수',
    socialStatus: '국왕 및 전열 기사 계층',
    category: '군사 전투 무구 및 궁정 정장',
    accuracyScore: 94,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSjdPsqRVMGo95me48YMlrK2-QzK0OKDzIY9HtBL98gyBXppSaAA8xE64mui6KA5ConpwL5xP3uijOCRaVvZEILk_UxaLL5ZcZ4-0-27B0axx-jWjTXcPS7_gIDW0nv5nFEwBIzWkJ3UAuAzkiz6JdwJxGXjjq70GtRpk_tX10j7F_5tZcaXUlX9qcDa_SHUjYOBXcnknojAH_DGUtvXJhs8mmRbeen5DYnltrBXOMnKcYwVxCSdJ-w',
    alt: 'Young King Henry V in battle-worn steel armor, wearing crimson velvet and ermine royal houppelande over tailored chausses in Agincourt 1415.',
    organization: '영국 로열 아머리즈(Royal Armouries) 무구 고증 자문',
    judgmentSummary: '아쟁쿠르 전투 무구 및 초기 란셋형 후드 실물 복원. 단련된 강철 판금의 마감과 아밍 포인트 가죽끈 결속 상태 극도로 우수.',
    sources: ['헨리 5세 왕실 무기고 목록(1414)', '프랑스 아쟁쿠르 기사 명부'],
    creatorTips: '진흙과 비에 젖은 양모 바지와 무광 강철 갑주의 텍스처 대비를 주목하세요. 갑옷 안쪽에는 반드시 누비 갬비슨(Arming Doublet) 레이어가 들어가야 인체 비례가 자연스럽습니다.',
    palette: [
      { hex: '#4a151b', name: '왕실 로열 크림슨' },
      { hex: '#5c646b', name: '단련 강철 메탈' },
      { hex: '#48382c', name: '아쟁쿠르 진흙 브라운' }
    ],
    tags: ['#기사', '#갑옷', '#아쟁쿠르 갑주', '#갬비슨', '#샤프롱', '#우플랑드', '#15C르네상스', '#영국'],
    aliases: ['더 킹: 헨리 5세', '더 킹', '더킹', '헨리 5세', 'the king', '아쟁쿠르', '티모시 샬라메', '백년전쟁'],
    shortVerdict: '아쟁쿠르 전투 무구 및 초기 란셋형 후드 실물 복원.',
    parts: [
      {
        id: 'tk1',
        number: 1,
        partName: '전투 외장',
        title: '아쟁쿠르 전열 판금 갑주',
        subtitle: '단련 강철 관절형 플레이트 아머',
        description: '1415년 전투 당시 잉글랜드 중장기병의 전형적인 리벳 결속 강철 흉갑과 견갑.',
        material: '단련 강철 + 가죽 스트랩',
        technique: '전통 단조 판금 세공',
        matchRate: 96
      },
      {
        id: 'tk2',
        number: 2,
        partName: '방호 속옷',
        title: '누비 갬비슨 (Arming Doublet)',
        subtitle: '충격 흡수용 양모 솜 누빔 안감',
        description: '판금 갑주의 마찰과 타격을 완충하기 위해 고밀도 린넨 사이에 양모 솜을 촘촘히 퀼팅.',
        material: '린넨 + 양모 충전재',
        technique: '다이아몬드 누비 바느질',
        matchRate: 95
      }
    ]
  },

  // 4. 장미의 이름 (The Name of the Rose, 1986)
  {
    id: 'name-of-the-rose',
    title: '장미의 이름',
    originalTitle: 'The Name of the Rose (1986, 장 자크 아노 연출, 숀 코너리 주연)',
    mediaType: '움베르토 에코 원작 명작 영화 (가브리엘라 페스쿠치 의상감독)',
    year: 1986,
    era: '14세기 전반 (1327년)',
    eraCategory: '중세 성기',
    region: '북이탈리아 피에몬테 베네딕토회 수도원',
    guild: '교단 수도회 성직자 계층',
    socialStatus: '수도원장 및 수사 / 탁발수도사',
    category: '중세 가톨릭 수도원 수단 복식',
    accuracyScore: 98,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_OobxUx3Hql7hvNL65gyEGUMMYJT3XSF2wwPvcNBIFq_5s2XYWmgLcKynqk1IZxqfGik6MXoYsGuR5jnjUNCUcbOkC9nlqAcgSYoGZqDmpFYqZznr_tHi7knC483Al06fRe46Svp5bItkNl2ZhcMNvP-ZhaAUO5EX9UyPFqlRLgOXCpLi4OG12FyxxxVkmB95HaDOminWfCpoq9b6jSfQ090QqNcacKV_teCrOmpZz3bXihmQV4WazA',
    alt: 'Cinematic still from a 14th century medieval monastery setting. Monks in coarse, undyed raw wool Benedictine habits with deep cowl hoods walk silently through a shadowy stone cloister.',
    organization: '바티칸 도서관 중세본 연구진 및 로마 가톨릭 전례사 학회',
    judgmentSummary: '거친 생 양모(Habit), 미표백 아마포 속옷, 토들 튜닉 및 프란체스코회/베네딕토회 교단별 규율 복식의 계층적 차이를 엄격하게 고증한 독보적 마스터피스.',
    sources: ['성 베네딕토 규칙서(Regula Benedicti) 라틴어 원전', '중세 피에몬테 수도원 재정기록'],
    creatorTips: '종교적 엄숙함을 나타내기 위한 거친 무염색 양모(Undyed Raw Wool)와 깊게 파인 카울 후드의 드레이프가 장엄한 분위기를 연출합니다.',
    palette: [
      { hex: '#2b2622', name: '생 흑양모 다크브라운' },
      { hex: '#4a4239', name: '풍화된 카울 애쉬' },
      { hex: '#d9cdb8', name: '삼베 로프 내추럴' }
    ],
    tags: ['#수도사', '#조직 거친 양모', '#카울 후드(Cowl)', '#삼베 매듭 띠', '#수도사 가죽 샌들', '#14C중세'],
    aliases: ['장미의 이름', '장미의이름', 'the name of the rose', '수도사', '수도원', '카울 후드', '카울', '해빗', '숀 코너리'],
    shortVerdict: '거친 양모 해빗과 카울 후드, 교단별 규율 복식의 계층적 차이 고증 완성.',
    parts: [
      {
        id: 'nr1',
        number: 1,
        partName: '수도사 외투 / 카울',
        title: '베네딕토회 카울 후드 & 해빗',
        subtitle: '무염색 거친 천연 양모 수단',
        description: '염색하지 않은 양털 본연의 흑갈색 섬유로 직조. 머리와 어깨를 완전히 덮는 넉넉한 후드 구조.',
        material: '생 양모 100%',
        technique: '수직 평직 직조',
        matchRate: 99
      },
      {
        id: 'nr2',
        number: 2,
        partName: '결속구',
        title: '삼베 매듭 띠 (Cincture)',
        subtitle: '세속적 사치를 배제한 로프 벨트',
        description: '가죽 벨트 대신 거친 삼베 노끈으로 허리를 결속하며 묵주(Rosary)를 매단 전통 수도사 착장.',
        material: '대마 및 삼베',
        technique: '수공예 매듭',
        matchRate: 97
      }
    ]
  },

  // 5. 킹덤 오브 헤븐 (Kingdom of Heaven, 2005)
  {
    id: 'kingdom-of-heaven',
    title: '킹덤 오브 헤븐',
    originalTitle: 'Kingdom of Heaven: Director\'s Cut (2005, 리들리 스콧 감독, 올랜도 블룸 주연)',
    mediaType: '역사 대서사 명작 영화 (잔티 예이츠 의상감독)',
    year: 2005,
    era: '12세기 후기 (1187년 제3차 십자군 전야)',
    eraCategory: '중세 성기',
    region: '예루살렘 왕국 및 서유럽 프랑스',
    guild: '십자군 기사단(구호기사단, 성전기사단) 및 현지 상인',
    socialStatus: '성채 영주 및 십자군 기사 계층',
    category: '12C 중세 사슬갑옷(Hauberk) 및 튜닉/슈르코',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IiwIlmgkF6ipNRIkB9ETryllIOlN2forbWI4gvKaBfbr_FeI2pgpSU0Ty6-aCm6sHYGP63EUbNs2EJvTcQyz-2bwlpCX_KLODXRmiH7b1QqV9qtJ-nSbKxf6vDEt8sbZb49v6dDI9QLM72WFlyNqaUlViKlSjmDDOqIAOOZRp2nJ6iTtiusdwU36iFN-jeGO4JGAcyROPNg9Io4M1F6qpo5o5FuCrP__5u08xdDwQyBrQlmf7TGEWw',
    alt: '12th century Crusader knight putting on a quilted linen gambeson arming doublet underneath heavy chainmail hauberk.',
    organization: '영국 타워 오브 런던 무기고 및 십자군 고문서 연구소',
    judgmentSummary: '리벳 결속 쇠사슬 갑옷(Hauberk)과 태양열 차단용 린넨 슈르코, 사막 모래바람을 막는 윔플 및 터번형 헤드랩의 실전적 레이어링 완벽 재현.',
    sources: ['기욤 드 티르(William of Tyre) 십자군 연대기', '예루살렘 고등법원 법전(Assises de Jérusalem)'],
    creatorTips: '중세 전기 십자군은 판금 갑옷이 아닌 쇠사슬(체인메일)과 누비 갬비슨의 조합이 정석입니다. 슈르코 위에 햇빛 반사를 막는 먼지 묻은 린넨 질감을 살려주세요.',
    palette: [
      { hex: '#44403c', name: '단련 쇠사슬 아이언' },
      { hex: '#d6cbb9', name: '사막 모래 린넨' },
      { hex: '#7f1d1d', name: '성전 기사단 크로스 레드' }
    ],
    tags: ['#십자군', '#기사', '#사슬갑옷', '#체인메일', '#갬비슨', '#슈르코', '#12C중세'],
    aliases: ['킹덤 오브 헤븐', '킹덤오브헤븐', 'kingdom of heaven', '십자군', '예루살렘', '발리앙', '사슬갑옷', '체인메일', '리들리 스콧', '12세기'],
    shortVerdict: '체인메일 사슬갑옷과 누비 갬비슨 언더레이어의 실전적 고증 완성.',
    parts: [
      {
        id: 'koh1',
        number: 1,
        partName: '방호 갑주',
        title: '리벳 결속 쇠사슬 갑옷 (Hauberk)',
        subtitle: '수천 개의 단철 고리를 엮은 체인메일',
        description: '12세기 십자군 기사들이 전신에 착용한 방호구. 머리를 보호하는 코이프(Coif)와 일체형.',
        material: '단철 고리 결속',
        technique: '수공예 리벳 체인 직조',
        matchRate: 98
      }
    ]
  },

  // 6. 라스트 듀얼: 최후의 결투 (The Last Duel, 2021)
  {
    id: 'the-last-duel',
    title: '라스트 듀얼: 최후의 결투',
    originalTitle: 'The Last Duel (2021, 리들리 스콧 감독, 맷 데이먼·아담 드라이버 주연)',
    mediaType: '백년전쟁 실화 역사 대작 (잔티 예이츠 의상감독)',
    year: 2021,
    era: '14세기 후기 (1386년 중세 프랑스)',
    eraCategory: '중세 성기',
    region: '프랑스 노르망디 및 파리',
    guild: '프랑스 왕실 기사단 및 고등법원',
    socialStatus: '봉건 영주 기사 및 법관 귀족',
    category: '14C 고딕 판금 갑주 및 여성 에냉/윔플 복식',
    accuracyScore: 94,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yt4Ly2862_flMUCzW_wEczrAiM6s-ttzj44A49aIeoIHgcnvfGbcwrFIVYn4Ss6ZJvhCxWuDaq-U7Fz9SJjoApWJX3v2sztmJ2osbeW-BOrJLrP3v-TP8g5oMY29OObaR3zQ1gV5bs4qTOzsVFjlB0TWm_LuC8Yn4HFmdY8RhvLizu-bTXKUVhcq4YhK01rJZH2oDFR_U0bsb4zZU_TyB06nNh0dnCBP2IU9WMf-Rx_P7NPV8E9lTA',
    alt: 'Late 14th century French noblewoman in deep blue woad velvet kirtle and sheer linen veil.',
    organization: '파리 국립클뤼니중세박물관(Musée de Cluny) 및 프랑스 무구협회',
    judgmentSummary: '1386년 역사상 마지막 사법 결투 당시의 리벳 결속 바시넷(Bascinet) 투구와 사슬 아벤타일, 귀부인 마르그리트의 린넨 윔플과 꼭두서니 염색 울 키틀(Kirtle) 완벽 재현.',
    sources: ['프랑스 국립도서관 장 프루아사르(Froissart) 연대기 사본', '생드니 수도원 연대기'],
    creatorTips: '14세기 말 프랑스 귀족의 우아함과 혹독한 결투 무구의 날카로움을 대비시키기에 최적의 레퍼런스입니다.',
    palette: [
      { hex: '#1e293b', name: '바시넷 투구 단련 강철' },
      { hex: '#1e3a5f', name: '노르망디 울 블루' },
      { hex: '#f5f5f4', name: '섬세한 린넨 윔플' }
    ],
    tags: ['#라스트듀얼', '#백년전쟁', '#프랑스기사', '#바시넷투구', '#윔플', '#14C중세'],
    aliases: ['라스트 듀얼: 최후의 결투', '라스트 듀얼', '라스트듀얼', 'the last duel', '바시넷', '바시넷 투구', '윔플', '백년전쟁', '14세기'],
    shortVerdict: '1386년 프랑스 바시넷 투구와 사슬 아벤타일, 귀부인 윔플 실물 고증.',
    parts: []
  },

  // 7. 아웃로 킹 (Outlaw King, 2018)
  {
    id: 'outlaw-king',
    title: '아웃로 킹',
    originalTitle: 'Outlaw King (2018, 넷플릭스 영화, 데이비드 맥켄지 감독, 크리스 파인 주연)',
    mediaType: '역사 전쟁 영화 (로버트 1세 브루스)',
    year: 2018,
    era: '14세기 초반 (1306년)',
    eraCategory: '중세 성기',
    region: '스코틀랜드 하이랜드 및 잉글랜드',
    guild: '스코틀랜드 씨족 기사 및 전열 무장',
    socialStatus: '스코틀랜드 국왕 및 전사 계층',
    category: '14C 중세 방호 무구 및 모직 복식',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ6hnCkeiBkv8tauMhXkh1_EJGwJS3c2sLXM87TUV0dpyhziFeucpcttQAsT8f_LT0_E6VtYrJmWKsAeMkotnW4C3sOssSrFNQ40TjF3fxCFgn_nP-XMJebF-r1EMyDUFY-PWK-MukiVoJwmJdsCtcHYFB3tcnrC_30OcejNr5rD1fgpr8hbja8Unp2j2zQWllN0LiSUPCoD1nfbmEa3Ugzgx4zuGqeaa0vZIsw8AGpxOgT4B2quNOw',
    alt: 'Medieval Scottish warrior in leather gambeson and kettle hat helmet.',
    organization: '에든버러 스코틀랜드 국립박물관(National Museum of Scotland) 고증 자문',
    judgmentSummary: '14세기 초 케틀 햇(Kettle Hat) 철모, 두터운 누비 갬비슨, 황동 버클 가죽 하네스 결속 방식이 당대 사료 도판과 완벽히 부합.',
    sources: ['스코틀랜드 왕립 헌장집', '배넉번 전투(1314) 사료 도판'],
    creatorTips: '하이랜드 기후에 최적화된 거친 울 타탄 튜닉과 흙먼지가 묻은 가죽 하네스가 생생한 중세 북유럽 야전 분위기를 전달합니다.',
    palette: [
      { hex: '#292524', name: '단조 철모 다크 아이언' },
      { hex: '#3f4238', name: '하이랜드 모스 그린' },
      { hex: '#78350f', name: '가죽 버클 새들' }
    ],
    tags: ['#기사', '#갬비슨', '#철모', '#케틀햇', '#스코틀랜드', '#14C중세'],
    aliases: ['아웃로 킹', '아웃로킹', 'outlaw king', '스코틀랜드', '케틀햇', '철모', '로버트 브루스', '14세기'],
    shortVerdict: '14세기 초 케틀 햇 철모와 누비 갬비슨 결속 방식 사료 부합.',
    parts: []
  },

  // 8. 진주 귀걸이를 한 소녀 (Girl with a Pearl Earring, 2003)
  {
    id: 'girl-pearl-earring',
    title: '진주 귀걸이를 한 소녀',
    originalTitle: 'Girl with a Pearl Earring (2003, 피터 웨버 연출, 스칼렛 요한슨 주연)',
    mediaType: '아카데미 의상상 노미네이트 명작 영화',
    year: 2003,
    era: '17세기 네덜란드 황금기 (1665년)',
    eraCategory: '바로크·로코코',
    region: '네덜란드 델프트 (Delft)',
    guild: '성 루카 화가 길드 및 시민 계층',
    socialStatus: '화가 요하네스 베르메르 가문 및 하녀',
    category: '17C 네덜란드 시민 및 하녀 일상복',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWzq_3mASXoP_BqR0-urUzKtlvZdoyrGIOdwCe1-kd4qb93Y0MT2JbOt2b86JCvBX3XZos3WqytDS-L0FYowq7B59E9gG6m5RW0MPcN0YWg93-06NEz2t8LQTaq7KoCbkXpbPIC-Khyq4svc1DHUHr7WdQovkhxOEnPcYW7iewtJZQ9874o4MJaCVRQbEQP1J0EVvWbTjTBaELuMX7yOt81qd4Frwbq9N3mDTjeblvQeQKN5BKjmB6_w',
    alt: 'Dutch Golden Age green woolen gown and headdress textile detail.',
    organization: '헤이그 마우리츠하위스(Mauritshuis) 미술관 복식 고증팀',
    judgmentSummary: '미표백 거친 린넨 헤드랩, 울 보디스, 천연 울트라마린(청금석 안료) 염색의 농담 표현이 17세기 베르메르 회화 사료와 100% 일치.',
    sources: ['델프트 성 루카 길드 아카이브', '요하네스 베르메르 유품 목록(1676)'],
    creatorTips: '화려한 레이스 대신 델프트 서민 하녀의 뻣뻣하고 구김 있는 아마포 헤드랩과 투박한 양모 직물 텍스처를 구현할 때 사실감이 살아납니다.',
    palette: [
      { hex: '#1e3a5f', name: '청금석 울트라마린 블루' },
      { hex: '#b45309', name: '오커 옐로우' },
      { hex: '#e7e5e4', name: '미표백 린넨 에크루' }
    ],
    tags: ['#네덜란드', '#린넨', '#헤드랩', '#보디스', '#17C바로크', '#서민복식'],
    aliases: ['진주 귀걸이를 한 소녀', '진주 귀걸이', '진주귀걸이', 'girl with a pearl earring', '베르메르', '델프트', '17세기'],
    shortVerdict: '17세기 네덜란드 델프트 시민 및 하녀 복식 회화 사료 완벽 일치.',
    parts: []
  },

  // 9. 마리 앙투아네트 (Marie Antoinette, 2006)
  {
    id: 'marie-antoinette',
    title: '마리 앙투아네트',
    originalTitle: 'Marie Antoinette (2006, 소피아 코폴라 감독, 커스틴 던스트 주연)',
    mediaType: '아카데미 의상상 수상 명작 영화 (밀레나 카노네로 의상감독)',
    year: 2006,
    era: '18세기 후기 (1770~1789년 프랑스 로코코)',
    eraCategory: '바로크·로코코',
    region: '프랑스 베르사유 궁정 및 파리',
    guild: '프랑스 부르봉 왕실 및 오트쿠튀르 패션 상인',
    socialStatus: '왕비 마리 앙투아네트 및 궁정 귀부인',
    category: '18C 프랑스 로코코 궁정 드레스 (로브 아 라 프랑세즈)',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxRnAw4ENEEiM3XszZffFWc_nSuB7CNIM_qyTJaGU__YWXCiGWAsY-4cJNKbXoSJezA2QwPJpXhFFZ4S8Yw93-ssEBIn30XiJoytVBf7IZ5qiISBnJootg4Av-1Y_S_wRZzwmgGYrwXb6r7rIpsa_7ikpIF5LWyh020jj6GfOJzLzZaueXq4Bx6SdSKeZXqSwSi2b_o41yzyVHQLReijQbl3hDgvm1a0sH-TXUS0l2htyLV-j1UhE2dA',
    alt: '18th century French Rococo silk court dress with wide side hoops and pastel ribbon trimmings.',
    organization: '파리 갈리에라 의상박물관(Palais Galliera) 및 베르사유 궁전 학예실',
    judgmentSummary: '좌우로 넓게 퍼지는 파니에(Pannier) 골격, 와토 주름(Watteau pleat)이 달린 로브 아 라 프랑세즈, 파스텔 실크 타프타의 광택을 완벽하게 재현하여 아카데미 의상상 수상.',
    sources: ['로즈 베르탱(Rose Bertin) 왕실 납품 장부', '베르사유 궁정 의례집'],
    creatorTips: '18세기 로코코는 원형 스커트가 아닌 좌우로만 과장되게 벌어지는 파니에 프레임과 가슴을 V자로 납작하게 조이는 스테이즈(Stays) 코르셋 실루엣이 결정적입니다.',
    palette: [
      { hex: '#fbcfe8', name: '로코코 베이비 핑크 타프타' },
      { hex: '#dbeafe', name: '마리 스카이 블루' },
      { hex: '#fef3c7', name: '샴페인 골드 자수' }
    ],
    tags: ['#로코코', '#마리앙투아네트', '#파니에', '#코르셋', '#베르사유', '#18C로코코'],
    aliases: ['마리 앙투아네트', '마리앙투아네트', 'marie antoinette', '로코코', '파니에', '베르사유', '18세기'],
    shortVerdict: '파니에와 와토 주름을 살린 로브 아 라 프랑세즈 아카데미 수상작.',
    parts: []
  },

  // 10. 배리 린든 (Barry Lyndon, 1975)
  {
    id: 'barry-lyndon',
    title: '배리 린든',
    originalTitle: 'Barry Lyndon (1975, 스탠리 큐브릭 감독, 아카데미 4개 부문 수상)',
    mediaType: '영화사상 최고의 복식 고증 걸작 (밀레나 카노네로 의상감독)',
    year: 1975,
    era: '18세기 중후반 (1750~1780년대 7년 전쟁)',
    eraCategory: '바로크·로코코',
    region: '영국, 아일랜드, 프로이센 및 프랑스',
    guild: '프로이센 보병 연대 및 영국 귀족원',
    socialStatus: '군인 및 조지 왕조 상류 귀족',
    category: '18C 유럽 군복 및 조지 왕조 귀족 테일러링',
    accuracyScore: 99,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABXuM-mvZcEnLQ2NlSYBKT27zVvbBwuenU8paHQLYQ9wRU5acRMfMT4HKPBkIk1t-_S0SGmWsrj2nCnrbsQnM2UFNyInYTokALZZqpscXNE6t5GzEDhtntuUWFAvPcclPDNuuCFJjN56S_JTqwyeoF93-9qEc5dcbRKDT1s04-xdVPX1N8n-SMJogUw5Df-kR4TSxIwaYu9flnE6ik5-Yrd7Ijj4VeH5ew0EJt2G4FxXr24V_vTtfHVQ',
    alt: '18th century European aristocrat in tailored waistcoat and velvet frock coat.',
    organization: '영국 빅토리아&앨버트 박물관 및 유럽 왕립 군사박물관',
    judgmentSummary: '실제 18세기 박물관 유물 옷을 분해하여 동일한 손바느질과 천연 염색 기법으로 복원. 전 장면을 자연광과 촛불 조명으로만 촬영하여 복식사학계에서 불멸의 기준점으로 인정받음.',
    sources: ['18세기 조지 왕조 실물 복식 유물', '토머스 게인즈버러 및 윌리엄 호가스 회화'],
    creatorTips: '실제 18세기 의복의 뻣뻣한 울 코트(Frock Coat)와 빽빽하게 채워진 단추선, 목을 조이는 린넨 스톡(Stock) 타이를 관찰하면 당시 신사 계층의 꼿꼿한 자세를 이해할 수 있습니다.',
    palette: [
      { hex: '#1e3a8a', name: '프로이센 로열 네이비' },
      { hex: '#991b1b', name: '브리티시 레드코트' },
      { hex: '#fef08a', name: '실크 브로케이드 골드' }
    ],
    tags: ['#배리린든', '#18C유럽', '#조지왕조', '#프록코트', '#군복', '#스탠리큐브릭'],
    aliases: ['배리 린든', '베리 린든', '배리린든', '베리린든', 'barry lyndon', '조지왕조', '프록코트', '18세기'],
    shortVerdict: '실제 18세기 유물 실측 복원 및 촛불 촬영 복식사 최고 마스터피스.',
    parts: []
  },

  // 11. 오만과 편견 (Pride & Prejudice, 2005)
  {
    id: 'pride-and-prejudice',
    title: '오만과 편견',
    originalTitle: 'Pride & Prejudice (2005, 조 라이트 감독, 키이라 나이틀리 주연)',
    mediaType: '제인 오스틴 원작 명작 영화 (재클린 듀란 의상감독)',
    year: 2005,
    era: '18세기 말~19세기 초 (1797년 섭정 시대/조지 왕조)',
    eraCategory: '근대·빅토리아',
    region: '잉글랜드 하트퍼드셔 및 펨벌리',
    guild: '잉글랜드 젠트리(Gentry) 지주 계층',
    socialStatus: '시골 지주 베넷 가문 및 다아시 귀족',
    category: '섭정 시대(Regency) 엠파이어 실루엣 드레스',
    accuracyScore: 94,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0zXYt9eX4THmIpoc3GAKLBhBLQXCj7TLk4Ago4-ZpOaVYg1IweA57vHXk0o3dABzRJQCYFusPALPiCyLpI5o85NepHnAdiI1OtXM-O0KXB0uu3PJnw_65YQitZ4KjGsATtp2UUYheHvdE34LPjAEH5-62iCRc0JhiZqTdOhI-HogI4_RAUX1jQIoWzDqTU1xuy3M7lWsIoyGgSro5QpIdzG76HckvPl9KuMlMM3x-8hjAmW6Q-rDARA',
    alt: 'Regency era high waisted white muslin dress and wool spencer jacket.',
    organization: '영국 바스 복식박물관(Fashion Museum Bath) 및 제인 오스틴 소사이어티',
    judgmentSummary: '가슴 바로 아래에서 떨어지는 하이웨이스트 엠파이어 실루엣, 가벼운 면 머슬린(Muslin) 드레스, 짧은 스펜서(Spencer) 재킷을 당대 시골 젠트리의 생활상에 맞게 탁월히 고증.',
    sources: ['바스 패션 박물관 섭정기 의상 컬렉션', '당대 영국 패션 저널 <더 레이디스 매거진>'],
    creatorTips: '영국 리젠시 시대의 핵심은 과장된 코르셋을 버리고 고대 그리스 조각처럼 자연스럽게 흘러내리는 얇은 흰색 면 머슬린과 야외 산책용 스펜서 재킷의 실용미입니다.',
    palette: [
      { hex: '#fafaf9', name: '영국 면 머슬린 화이트' },
      { hex: '#57534e', name: '울 스펜서 브라운' },
      { hex: '#365314', name: '하트퍼드셔 모스 올리브' }
    ],
    tags: ['#오만과편견', '#리젠시', '#엠파이어드레스', '#스펜서재킷', '#19C빅토리아', '#영국'],
    aliases: ['오만과 편견', '오만과편견', 'pride and prejudice', '엠파이어 드레스', '스펜서', '리젠시', '19세기'],
    shortVerdict: '섭정기 엠파이어 실루엣과 면 머슬린 드레스 사료 완벽 구현.',
    parts: []
  },

  // 12. 글래디에이터 (Gladiator, 2000)
  {
    id: 'gladiator',
    title: '글래디에이터',
    originalTitle: 'Gladiator (2000, 리들리 스콧 감독, 러셀 크로우 주연)',
    mediaType: '아카데미 작품상 및 의상상 수상작 (잔티 예이츠 의상감독)',
    year: 2000,
    era: '고대 로마 제국 (AD 180년 콤모두스 황제 시대)',
    eraCategory: '고대 그리스·로마',
    region: '로마 제국 콜로세움 및 게르마니아 전선',
    guild: '로마 군단병, 검투사 양성소, 원로원',
    socialStatus: '로마 군단 총사령관 및 검투사 / 원로원 의원',
    category: '로마 군단 판금 흉갑(Lorica Musculata) 및 원로원 토가',
    accuracyScore: 92,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACSkq0ViSk5QHR4fTjyX3OZpdhK_CyA8R_8KgvVxDDWhNZsIQwMtF_Jee-m-hehcA8-rWWXaj5AykRVjYOfTzlVI0pVp3HTsnRMKNni_xaiM_iVjh_HngYs_cYsQvRQGmCDbI3ryiSriYaRlXZy2LF4Zp7wjO9njyTklSGNeFCt7pX2WeuqvmeHkRUTM_vxyV2_snS4B_ebRZtovpw9d4DQ9JsPH-6FDobYPnJH4b6oqFlCx9z9iczZQ',
    alt: 'Roman general and gladiator wearing detailed leather and embossed bronze muscle cuirass in ancient arena.',
    organization: '로마 카피톨리노 박물관 및 영국 로마 군사학회',
    judgmentSummary: '게르마니아 전선의 가죽 튜니카와 청동 양각 근육 흉갑(Lorica Musculata), 원로원 의원의 자주색 띠 토가(Toga Praetexta)의 드레이프를 고대 로마 유물과 일치하게 복원하여 아카데미 의상상 수상.',
    sources: ['마르쿠스 아우렐리우스 원주 부조', '폼페이 출토 검투사 헬멧 및 흉갑'],
    creatorTips: '로마 의상은 봉제선이 적고 넓은 양모 천을 몸에 감아 흘러내리게 하는 드레이퍼리(Drapery)와 근육 형태를 본뜬 가죽/청동 흉갑의 중후한 금속 광택이 특징입니다.',
    palette: [
      { hex: '#78350f', name: '단련 가죽 브론즈' },
      { hex: '#4c0519', name: '임페리얼 로마 퍼플' },
      { hex: '#f5f5f4', name: '천연 양모 튜니카' }
    ],
    tags: ['#로마제국', '#글래디에이터', '#갑주', '#토가', '#튜니카', '#고대'],
    aliases: ['글래디에이터', 'gladiator', '로마', '검투사', '막시무스', '토가', '흉갑', '고대'],
    shortVerdict: '로마 군단 흉갑과 원로원 토가 드레이프 아카데미 의상상 수상작.',
    parts: []
  },

  // 13. 작은 아씨들 (Little Women, 2019)
  {
    id: 'little-women',
    title: '작은 아씨들',
    originalTitle: 'Little Women (2019, 그레타 거윅 감독, 아카데미 의상상 수상)',
    mediaType: '아카데미 의상상 수상 영화 (재클린 듀란 의상감독)',
    year: 2019,
    era: '19세기 중반 (1861~1868년 미국 남북전쟁)',
    eraCategory: '근대·빅토리아',
    region: '미국 매사추세츠 콩코드',
    guild: '초월주의 지식인 마치 가문',
    socialStatus: '몰락한 중산층 및 뉴욕 예술가 계층',
    category: '빅토리아 시대 여성 크리놀린 드레스 및 남성풍 조끼',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKCRmyoWAPX2gI6ZvskbWMl5-DXawfvGBNkbwYqS7n4CxWpHFdHoRgj7PU8at6n-FcIIMtRrbumRYxsgOnBXkNF5wtR3RjrZA8JW8l2Bmn4vDCuEZUsg463yFdTm5gvkVriyHkvjmqvO82XaiDiQg-lxWitLCDWPLPNv5aXr0MhMEX2K1_fGsEng9dFtVELbcL_6nDAK0IsGxADcpM3h7BRid9yq0C_5zO-HbnFWcM_sBYr9p0M6fNeg',
    alt: '19th century Victorian American daily cotton dress and woolen knit shawl.',
    organization: '미국 메트로폴리탄 미술관 코스튬 인스티튜트',
    judgmentSummary: '남북전쟁기 면화 부족 상황을 반영한 면 프린트 드레스, 실용적인 니트 숄, 조 마치의 남성풍 웨이스트코트 믹스매치를 당대 사진 사료와 부합하게 구현.',
    sources: ['미국 남북전쟁 당시 앰브로타입 사진 사료', '루이자 메이 올컷 생가 오차드 하우스 보관 유물'],
    creatorTips: '전형적인 풍성한 무도회 크리놀린뿐 아니라, 가정에서 입는 소박한 프린트 코튼 드레스와 붉은 털실 숄의 편안한 레이어링이 캐릭터의 일상성을 극대화합니다.',
    palette: [
      { hex: '#7f1d1d', name: '빈티지 매더 레드 숄' },
      { hex: '#1e3a5f', name: '워시드 인디고 코튼' },
      { hex: '#d97706', name: '앤틱 머스타드 벨벳' }
    ],
    tags: ['#작은아씨들', '#19C빅토리아', '#크리놀린', '#남북전쟁', '#린넨셔츠'],
    aliases: ['작은 아씨들', '작은아씨들', 'little women', '남북전쟁', '크리놀린', '조 마치', '19세기'],
    shortVerdict: '남북전쟁기 면화 드레스와 남성풍 조끼 믹스매치 아카데미 수상작.',
    parts: []
  },

  // 14. 상의원 (The Royal Tailor, 2014)
  {
    id: 'royal-tailor',
    title: '상의원',
    originalTitle: 'The Royal Tailor (2014, 이원석 감독, 한석규·고수·박신혜·유연석 주연)',
    mediaType: '조선 왕실 침선장 배경 한국 정통 사극 영화',
    year: 2014,
    era: '18세기 조선 후기 (영조·정조 연간)',
    eraCategory: '근대·빅토리아',
    region: '한양 창덕궁 상의원(尙衣院)',
    guild: '왕실 어의 및 침선장 장인 길드',
    socialStatus: '어침장 조돌석, 천재 바느질꾼 이공진, 왕과 중전',
    category: '조선 왕실 면복·적의·곤룡포 및 사대부 도포',
    accuracyScore: 94,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8TCPixq0DBAj4c2yBweidsYXeixUv2c3BLCJm7W7RGLfjHv84znZpx4K0yDSjGRK4pDzoTpSlmE4NYKQ0RsGvNbS4UcgcpnWPPeg-M-p_1hEZwxtZEfHooUzPdcUZWHqo2jOKoyqlc8DuGCWEdRstasZdTRGVnEOjw2Dh7dj5cMK94IIOYabDVD3J-QjSj-6MxC5O_9skWhB4TiBTi1HTOgroemUECiw0UYyHYubY17jWAnw-4GCM7A',
    alt: 'Joseon royal palace costume restoration of embroidered ceremonial robe and traditional silk hanbok.',
    organization: '국립고궁박물관 및 한국전통복식학회 고증 자문 (조상경 의상감독)',
    judgmentSummary: '조선 왕실 의궤(국혼정례, 상의원발기)를 기반으로 중전의 진봉 적의(翟衣)와 국왕의 곤룡포 보(補) 자수를 실물 크기로 재현한 한국 사극 복식 최고의 역작.',
    sources: ['조선왕조 국조오례의(國朝五禮儀)', '장서각 소장 궁중 발기'],
    creatorTips: '궁중 예복의 엄격한 자수 배치와 대비되는 이공진의 날렵한 도포 옷고름 및 겹단 치마의 풍성한 볼륨 곡선미가 한국 전통 복식의 정수를 보여줍니다.',
    palette: [
      { hex: '#1e3a8a', name: '왕실 적의 대청 감청색' },
      { hex: '#991b1b', name: '곤룡포 대홍색' },
      { hex: '#fef08a', name: '오조룡보 금사 자수' }
    ],
    tags: ['#상의원', '#조선왕실', '#적의', '#곤룡포', '#도포', '#한국사극', '#한복'],
    aliases: ['상의원', 'the royal tailor', '조선', '한복', '적의', '곤룡포', '도포', '18세기'],
    shortVerdict: '조선 왕실 의궤 기반 적의와 곤룡포 금사 자수 실물 고증.',
    parts: []
  },

  // 15. 사도 (The Throne, 2015)
  {
    id: 'the-throne',
    title: '사도',
    originalTitle: 'The Throne (2015, 이준익 감독, 송강호·유아인 주연)',
    mediaType: '조선 왕실 실화 정통 역사 영화 (심현섭 의상감독)',
    year: 2015,
    era: '18세기 조선 (1762년 영조·사도세자)',
    eraCategory: '근대·빅토리아',
    region: '한양 창경궁 문정전',
    guild: '조선 왕실 및 도제조 침선',
    socialStatus: '국왕 영조, 사도세자, 혜경궁 홍씨',
    category: '조선 군복 융복(戎服)·철릭 및 삼년상 상복(喪服)',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8TCPixq0DBAj4c2yBweidsYXeixUv2c3BLCJm7W7RGLfjHv84znZpx4K0yDSjGRK4pDzoTpSlmE4NYKQ0RsGvNbS4UcgcpnWPPeg-M-p_1hEZwxtZEfHooUzPdcUZWHqo2jOKoyqlc8DuGCWEdRstasZdTRGVnEOjw2Dh7dj5cMK94IIOYabDVD3J-QjSj-6MxC5O_9skWhB4TiBTi1HTOgroemUECiw0UYyHYubY17jWAnw-4GCM7A',
    alt: 'Joseon crown prince in traditional indigo silk Cheollik and King Yeongjo in crimson royal robe.',
    organization: '한국학중앙연구원 장서각 및 국립민속박물관',
    judgmentSummary: '영조의 검소한 모시 곤룡포와 사도세자의 군복 융복(철릭, 전립), 혜경궁 홍씨의 옥색 당의와 참최 삼년상 상복까지 조선 후기 전례 복식의 정수를 엄격하게 재현.',
    sources: ['영조실록(英祖實錄)', '한중록(恨中錄)', '국조상례보편(國朝喪禮補編)'],
    creatorTips: '조선 후기 무관과 왕세자가 착용한 철릭의 주름 잡힌 하의 실루엣과 붉은 융복 끈의 역동적인 연출이 특징입니다.',
    palette: [
      { hex: '#1c1917', name: '영조 흑립 먹색' },
      { hex: '#831843', name: '왕실 자색 명주' },
      { hex: '#f5f5f4', name: '모시 상복 백색' }
    ],
    tags: ['#사도', '#조선왕실', '#융복', '#철릭', '#상복', '#한국사극', '#한복'],
    aliases: ['사도', 'the throne', '사도세자', '영조', '송강호', '유아인', '조선', '한복', '융복', '철릭', '18세기'],
    shortVerdict: '영조와 사도세자의 군복 융복과 전례 상복 완벽 사료 실증.',
    parts: []
  },

  // 16. 남한산성 (The Fortress, 2017)
  {
    id: 'the-fortress',
    title: '남한산성',
    originalTitle: 'The Fortress (2017, 황동혁 감독, 이병헌·김윤석·박해일 주연)',
    mediaType: '병자호란 사실주의 전쟁 영화 (조상경 의상감독)',
    year: 2017,
    era: '17세기 조선 (1636년 병자호란)',
    eraCategory: '바로크·로코코',
    region: '남한산성 행궁 및 삼전도',
    guild: '조선 훈련도감 군관 및 청나라 팔기군',
    socialStatus: '인조, 예조판서 김상헌, 이조판서 최명길, 조선 군졸',
    category: '조선 중기 두정갑(頭釘甲)·철갑 및 방한용 이엄(耳掩)',
    accuracyScore: 97,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ6hnCkeiBkv8tauMhXkh1_EJGwJS3c2sLXM87TUV0dpyhziFeucpcttQAsT8f_LT0_E6VtYrJmWKsAeMkotnW4C3sOssSrFNQ40TjF3fxCFgn_nP-XMJebF-r1EMyDUFY-PWK-MukiVoJwmJdsCtcHYFB3tcnrC_30OcejNr5rD1fgpr8hbja8Unp2j2zQWllN0LiSUPCoD1nfbmEa3Ugzgx4zuGqeaa0vZIsw8AGpxOgT4B2quNOw',
    alt: 'Joseon soldier in heavy winter quilted armor with brass rivets and fur ear flap hat standing in frozen snow.',
    organization: '육군박물관 및 전쟁기념관 전통무구 연구소',
    judgmentSummary: '혹한의 산성 방어를 위해 가죽 안쪽에 쇠판을 덧대고 겉에 놋쇠 못을 박은 두정갑(頭釘甲), 털을 덧댄 방한모 이엄(耳掩), 서릿발 어린 무명 방한복을 한국 전쟁 영화 사상 가장 사실적으로 복원.',
    sources: ['승정원일기 병자년 기록', '육군박물관 소장 조선 중기 두정갑 유물'],
    creatorTips: '화려한 장식 대신 살을 에는 칼바람에 닳아 해진 솜 누빔 무명포와 청동 두정못의 차가운 금속성을 살릴 때 극도의 긴장감이 연출됩니다.',
    palette: [
      { hex: '#374151', name: '두정갑 무쇠 철색' },
      { hex: '#78350f', name: '이엄 방한 수달피' },
      { hex: '#e5e7eb', name: '혹한 설원 잿빛' }
    ],
    tags: ['#남한산성', '#두정갑', '#이엄', '#갑옷', '#병자호란', '#조선', '#한국사극'],
    aliases: ['남한산성', 'the fortress', '병자호란', '인조', '이병헌', '김윤석', '두정갑', '철갑', '이엄', '17세기'],
    shortVerdict: '조선 중기 실물 두정갑과 혹한 방한 이엄의 사실주의 무구 고증.',
    parts: []
  },

  // 17. 엘리자베스 (Elizabeth, 1998)
  {
    id: 'elizabeth-1998',
    title: '엘리자베스',
    originalTitle: 'Elizabeth (1998, 세카르 카푸르 감독, 케이트 블란쳇 주연)',
    mediaType: '아카데미 7개 부문 노미네이트 명작 (알렉산드라 번 의상감독)',
    year: 1998,
    era: '16세기 후기 (1558~1603년 엘리자베스 1세 조)',
    eraCategory: '르네상스',
    region: '잉글랜드 런던 화이트홀 궁정',
    guild: '잉글랜드 왕실 패션 직조사 길드',
    socialStatus: '여왕 엘리자베스 1세 및 궁정 귀족',
    category: '16C 후기 러프 칼라(Ruff) & 파딩게일(Farthingale) 드레스',
    accuracyScore: 94,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3S2wwTAfEZdNJoJ8bHKnIgDkJ9qX2nkBrG6Ilyx2JJHtoU4UqUBHFITFuIR3GRz9Sj5fTXfO1PKfr4PJ2pyzy_3R1gMa-M4ceHILBQXH4oyePn6CWa2yEfZCFGGYSr9qJ5I7VDMsvH7TPgqiOAmi6x2IvY1DbR8DMBdCsaxbgHZJkFE17n-K3E24bRSBSS8kpT3aG6lynbtp1_AjfwMWcMETFctJEF2tSXy0csLUSuwfcOBCzUOAl-Q',
    alt: 'Queen Elizabeth I in ornate white lace ruff collar and heavily embroidered golden silk gown.',
    organization: '영국 국립초상화미술관(National Portrait Gallery)',
    judgmentSummary: '목을 둘러싼 거대한 레이스 주름 러프 칼라(Ruff Collar)와 스페인식 원추형 파딩게일(Farthingale), 앤틱 진주 자수를 당대 엘리자베스 여왕 초상화 사료와 직조감까지 일치하게 재현.',
    sources: ['엘리자베스 1세 펠리칸 초상화(Pelican Portrait)', '하트필드 하우스 보관 왕실 의상 목록'],
    creatorTips: '전분(Starch)을 먹여 빳빳하게 주름잡은 러프 칼라가 얼굴을 감싸는 백색 프레임 역할을 하여 군주의 초월적 권위를 강조합니다.',
    palette: [
      { hex: '#fafaf9', name: '전분 먹인 순백 레이스' },
      { hex: '#ca8a04', name: '엘리자베스 골드 브로케이드' },
      { hex: '#450a0a', name: '임페리얼 버건디 벨벳' }
    ],
    tags: ['#엘리자베스', '#러프칼라', '#파딩게일', '#16C르네상스', '#튜더', '#영국궁정'],
    aliases: ['엘리자베스', 'elizabeth', '케이트 블란쳇', '러프 칼라', '러프', '파딩게일', '16세기'],
    shortVerdict: '여왕의 대관식 가운과 러프 칼라 초상화 원형 완벽 복원.',
    parts: []
  },

  // 18. 위험한 관계 (Dangerous Liaisons, 1988)
  {
    id: 'dangerous-liaisons',
    title: '위험한 관계',
    originalTitle: 'Dangerous Liaisons (1988, 스티븐 프리어스 감독, 아카데미 의상상 수상)',
    mediaType: '아카데미 의상상 수상작 (제임스 애치슨 의상감독)',
    year: 1988,
    era: '18세기 후기 (1780년대 프랑스 앙시앵 레짐)',
    eraCategory: '바로크·로코코',
    region: '프랑스 파리 귀족 살롱 및 교외 저택',
    guild: '파리 패션 마르샹 드 모드(Marchandes de Modes)',
    socialStatus: '메르퇴유 후작 부인, 발몽 자작, 투르벨 부인',
    category: '18C 프랑스 로코코 코르셋 스테이즈 & 실크 드레스',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxRnAw4ENEEiM3XszZffFWc_nSuB7CNIM_qyTJaGU__YWXCiGWAsY-4cJNKbXoSJezA2QwPJpXhFFZ4S8Yw93-ssEBIn30XiJoytVBf7IZ5qiISBnJootg4Av-1Y_S_wRZzwmgGYrwXb6r7rIpsa_7ikpIF5LWyh020jj6GfOJzLzZaueXq4Bx6SdSKeZXqSwSi2b_o41yzyVHQLReijQbl3hDgvm1a0sH-TXUS0l2htyLV-j1UhE2dA',
    alt: '18th century French aristocratic woman wearing finely laced silk stays and flowing rococo gown in private boudoir.',
    organization: '파리 루브르 박물관 장식미술관',
    judgmentSummary: '오프닝에서 메르퇴유 후작 부인이 스테이즈(Stays) 코르셋을 끈으로 조이고 로브를 갖춰 입는 착장 과정을 박물관 사료 그대로 재현하여 복식사학 최고의 명장면으로 손꼽힘.',
    sources: ['드니 디드로 백과전서(Encyclopédie) 복식 도판', '18세기 파리 오트쿠튀르 아카이브'],
    creatorTips: '단순한 드레스 겉모습만이 아니라, 페티코트 속치마, 포켓 파우치, 뼈대로 엮은 스테이즈 코르셋 등 18세기 여성 복식의 복합적인 내부 레이어를 시각화하기에 최적입니다.',
    palette: [
      { hex: '#fdf2f8', name: '살롱 실크 파우더 로즈' },
      { hex: '#0f766e', name: '딥 틸 그린 타프타' },
      { hex: '#fef08a', name: '골드 레이스 트리밍' }
    ],
    tags: ['#위험한관계', '#로코코', '#스테이즈', '#코르셋', '#파리살롱', '#18C로코코'],
    aliases: ['위험한 관계', '위험한관계', 'dangerous liaisons', '스테이즈', '코르셋', '로코코', '18세기'],
    shortVerdict: '18세기 프랑스 귀족의 스테이즈 코르셋 착장 과정 사료 실증.',
    parts: []
  },

  // 19. 공작부인: 세기의 스캔들 (The Duchess, 2008)
  {
    id: 'the-duchess',
    title: '공작부인: 세기의 스캔들',
    originalTitle: 'The Duchess (2008, 사울 딥 감독, 키이라 나이틀리 주연)',
    mediaType: '아카데미 의상상 수상 영화 (마이클 오코너 의상감독)',
    year: 2008,
    era: '18세기 후기 (1774~1790년 영국 조지 왕조)',
    eraCategory: '바로크·로코코',
    region: '영국 런던 데번셔 하우스 및 바스',
    guild: '런던 왕실 여성 모자점 및 드레스 제작소',
    socialStatus: '데번셔 공작부인 조지아나 카벤디시',
    category: '18C 영국 조지 왕조 대형 깃털 모자 & 실크 가운',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABXuM-mvZcEnLQ2NlSYBKT27zVvbBwuenU8paHQLYQ9wRU5acRMfMT4HKPBkIk1t-_S0SGmWsrj2nCnrbsQnM2UFNyInYTokALZZqpscXNE6t5GzEDhtntuUWFAvPcclPDNuuCFJjN56S_JTqwyeoF93-9qEc5dcbRKDT1s04-xdVPX1N8n-SMJogUw5Df-kR4TSxIwaYu9flnE6ik5-Yrd7Ijj4VeH5ew0EJt2G4FxXr24V_vTtfHVQ',
    alt: '18th century British duchess wearing monumental feathered wide brim hat and ruffled silk gown.',
    organization: '영국 내셔널 트러스트(National Trust) 및 채츠워스 하우스',
    judgmentSummary: '당대 최고의 패션 아이콘이었던 조지아나 공작부인의 3피트 높이 타조 깃털 장식 모자, 휘그당 정치 집회용 제복풍 드레스, 실크 가운을 유물과 완벽 일치하게 복원하여 오스카 의상상 수상.',
    sources: ['채츠워스 하우스(Chatsworth House) 데번셔 가문 유물', '토머스 게인즈버러의 조지아나 초상화'],
    creatorTips: '과장된 볼륨의 가발 헤어스타일 위에 얹힌 거대한 챙 모자와 군복에서 모티브를 가져온 남성풍 테일러드 칼라가 결합된 18세기 말 영국의 독특한 패션 양식입니다.',
    palette: [
      { hex: '#1e3a8a', name: '휘그당 폴리티컬 블루' },
      { hex: '#fef3c7', name: '타조 깃털 크림 화이트' },
      { hex: '#831843', name: '데번셔 벨벳 플럼' }
    ],
    tags: ['#공작부인', '#조지왕조', '#깃털모자', '#실크가운', '#18C유럽', '#영국귀족'],
    aliases: ['공작부인: 세기의 스캔들', '공작부인', 'the duchess', '조지아나', '키이라 나이틀리', '조지왕조', '18세기'],
    shortVerdict: '타조 깃털 모자와 휘그당 정치 제복 드레스 아카데미 수상작.',
    parts: []
  },

  // 20. 엠마 (Emma., 2020)
  {
    id: 'emma-2020',
    title: '엠마',
    originalTitle: 'Emma. (2020, 오텀 드 와일드 감독, 안야 테일러 조이 주연)',
    mediaType: '아카데미 의상상 노미네이트 명작 (알렉산드라 번 의상감독)',
    year: 2020,
    era: '19세기 초 (1815년 영국 섭정기)',
    eraCategory: '근대·빅토리아',
    region: '영국 하이버리 마을 및 돈웰 애비',
    guild: '잉글랜드 시골 상류층 젠트리',
    socialStatus: '엠마 우드하우스 및 나이틀리 가문',
    category: '섭정기 파스텔 펠리스(Pelisse) 코트 & 본넷(Bonnet)',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0zXYt9eX4THmIpoc3GAKLBhBLQXCj7TLk4Ago4-ZpOaVYg1IweA57vHXk0o3dABzRJQCYFusPALPiCyLpI5o85NepHnAdiI1OtXM-O0KXB0uu3PJnw_65YQitZ4KjGsATtp2UUYheHvdE34LPjAEH5-62iCRc0JhiZqTdOhI-HogI4_RAUX1jQIoWzDqTU1xuy3M7lWsIoyGgSro5QpIdzG76HckvPl9KuMlMM3x-8hjAmW6Q-rDARA',
    alt: 'Regency lady in vibrant yellow wool pelisse coat and woven straw bonnet walking through English country garden.',
    organization: '영국 찰스 디킨스 박물관 및 패션 인스티튜트',
    judgmentSummary: '원작 소설의 시대상인 1815년 당시의 선명한 머스타드 옐로우 펠리스(Pelisse) 외투, 셔미제트(Chemisette) 목 레이스, 밀짚 본넷의 각도까지 당대 패션 플레이트와 완벽히 일치시킨 시각미의 극치.',
    sources: ['당대 패션 저널 <라 벨 아셈블레(La Belle Assemblée)>', '빅토리아&앨버트 박물관 섭정기 컬렉션'],
    creatorTips: '무채색 위주의 전형적인 사극 톤을 벗어나 19세기 초 실제 유행했던 밝은 파스텔톤과 비비드 옐로우 모직의 경쾌한 색채 조화를 참고하기에 최고의 작품입니다.',
    palette: [
      { hex: '#eab308', name: '엠마 머스타드 펠리스' },
      { hex: '#fdf4ff', name: '셔미제트 화이트 무슬린' },
      { hex: '#fed7aa', name: '밀짚 본넷 스트로' }
    ],
    tags: ['#엠마', '#리젠시', '#펠리스', '#본넷', '#19C빅토리아', '#영국'],
    aliases: ['엠마', 'emma', '안야 테일러 조이', '펠리스', '셔미제트', '본넷', '리젠시', '19세기'],
    shortVerdict: '1815년 섭정기 패션 플레이트의 선명한 색채와 펠리스 코트 복각.',
    parts: []
  },

  // 21. 순수의 시대 (The Age of Innocence, 1993)
  {
    id: 'age-of-innocence',
    title: '순수의 시대',
    originalTitle: 'The Age of Innocence (1993, 마틴 스코세이지 감독, 아카데미 의상상 수상)',
    mediaType: '아카데미 의상상 수상 영화 (가브리엘라 페스쿠치 의상감독)',
    year: 1993,
    era: '19세기 후기 (1870년대 뉴욕 도금시대)',
    eraCategory: '근대·빅토리아',
    region: '미국 뉴욕 맨해튼 상류 사회',
    guild: '파리 샤를 프레데릭 워스(Worth) 오트쿠튀르 하우스',
    socialStatus: '뉴욕 귀족 뉴랜드 아처, 올렌스카 백작부인',
    category: '19C 후기 버슬(Bustle) 실루엣 이브닝 드레스',
    accuracyScore: 97,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKCRmyoWAPX2gI6ZvskbWMl5-DXawfvGBNkbwYqS7n4CxWpHFdHoRgj7PU8at6n-FcIIMtRrbumRYxsgOnBXkNF5wtR3RjrZA8JW8l2Bmn4vDCuEZUsg463yFdTm5gvkVriyHkvjmqvO82XaiDiQg-lxWitLCDWPLPNv5aXr0MhMEX2K1_fGsEng9dFtVELbcL_6nDAK0IsGxADcpM3h7BRid9yq0C_5zO-HbnFWcM_sBYr9p0M6fNeg',
    alt: '1870s Gilded Age high society woman in crimson silk velvet evening dress with elaborate back bustle.',
    organization: '뉴욕 메트로폴리탄 미술관(The Met) 코스튬 인스티튜트',
    judgmentSummary: '엉덩이 뒤쪽을 수평으로 극단적으로 돌출시킨 버슬(Bustle) 구조와 파리 워스(House of Worth) 하우스의 실크 벨벳 이브닝 가운, 남성의 엄격한 화이트 타이 연미복을 박물관 유물 수준으로 복원.',
    sources: ['샤를 프레데릭 워스 오트쿠튀르 실물 드레스', '1870년대 뉴욕 아카데미 오브 뮤직 오페라 사진집'],
    creatorTips: '19세기 후반 도금시대의 핵심은 뒤쪽으로만 풍성하게 쏟아져 내리는 버슬 드레이프와 촘촘한 싸개 단추, 긴 실크 오페라 글러브의 절제된 화려함입니다.',
    palette: [
      { hex: '#881337', name: '올렌스카 크림슨 벨벳' },
      { hex: '#f8fafc', name: '메이 웰랜드 퓨어 화이트' },
      { hex: '#0f172a', name: '화이트 타이 이브닝 블랙' }
    ],
    tags: ['#순수의시대', '#버슬드레스', '#도금시대', '#19C빅토리아', '#연미복'],
    aliases: ['순수의 시대', '순수의시대', 'the age of innocence', '버슬', '버슬 드레스', '도금시대', '19세기'],
    shortVerdict: '1870년대 파리 워스 하우스의 정교한 버슬 드레스 오스카 수상작.',
    parts: []
  },

  // 22. 영 빅토리아 (The Young Victoria, 2009)
  {
    id: 'young-victoria',
    title: '영 빅토리아',
    originalTitle: 'The Young Victoria (2009, 장 마크 발레 연출, 에밀리 블런트 주연)',
    mediaType: '아카데미 의상상 수상 영화 (샌디 파월 의상감독)',
    year: 2009,
    era: '19세기 전반 (1837~1840년 빅토리아 여왕 즉위기)',
    eraCategory: '근대·빅토리아',
    region: '영국 런던 켄싱턴 궁전 및 버킹엄 궁전',
    guild: '영국 왕립 호놀턴(Honiton) 레이스 직조 장인',
    socialStatus: '빅토리아 여왕 및 앨버트 공',
    category: '19C 초기 빅토리아 대관식 정장 & 호놀턴 레이스 웨딩드레스',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0zXYt9eX4THmIpoc3GAKLBhBLQXCj7TLk4Ago4-ZpOaVYg1IweA57vHXk0o3dABzRJQCYFusPALPiCyLpI5o85NepHnAdiI1OtXM-O0KXB0uu3PJnw_65YQitZ4KjGsATtp2UUYheHvdE34LPjAEH5-62iCRc0JhiZqTdOhI-HogI4_RAUX1jQIoWzDqTU1xuy3M7lWsIoyGgSro5QpIdzG76HckvPl9KuMlMM3x-8hjAmW6Q-rDARA',
    alt: 'Young Queen Victoria wearing historic white Honiton lace wedding gown and floral orange blossom wreath.',
    organization: '영국 왕실 컬렉션 트러스트(Royal Collection Trust)',
    judgmentSummary: '1840년 빅토리아 여왕이 서구 웨딩드레스의 표준으로 확립한 호놀턴(Honiton) 수제 레이스와 백색 실크 새틴 웨딩드레스, 1838년 대관식 금사 예복을 실물 크기로 재현하여 아카데미 의상상 수상.',
    sources: ['켄싱턴 궁전 소장 빅토리아 여왕 웨딩드레스 실물', '왕실 대관식 회화 기록'],
    creatorTips: '오늘날 순백색 웨딩드레스의 기원이 된 호놀턴 레이스와 오렌지 블로섬 화관의 정초한 디테일을 역사적으로 탐구할 수 있는 필독 레퍼런스입니다.',
    palette: [
      { hex: '#fdfbf7', name: '영국 호놀턴 레이스 화이트' },
      { hex: '#b45309', name: '대관식 금사 자수' },
      { hex: '#166534', name: '오렌지 블로섬 리프 그린' }
    ],
    tags: ['#영빅토리아', '#빅토리아여왕', '#웨딩드레스', '#호놀턴레이스', '#19C빅토리아'],
    aliases: ['영 빅토리아', '영빅토리아', 'the young victoria', '빅토리아 여왕', '웨딩드레스', '19세기'],
    shortVerdict: '백색 호놀턴 레이스 웨딩드레스와 대관식 예복의 역사적 복원.',
    parts: []
  },

  // 23. 벤허 (Ben-Hur, 1959)
  {
    id: 'ben-hur',
    title: '벤허',
    originalTitle: 'Ben-Hur (1959, 윌리엄 와일러 감독, 아카데미 11개 부문 수상)',
    mediaType: '아카데미 의상상 수상 대작 (엘리자베스 하펜든 의상감독)',
    year: 1959,
    era: '고대 로마 제국 (AD 1세기 로마 및 유대 총독령)',
    eraCategory: '고대 그리스·로마',
    region: '로마 제국 예루살렘, 로마 안티오크',
    guild: '로마 전차 경기단 및 군단병',
    socialStatus: '유대 귀족 유다 벤허, 로마 호민관 멧살라',
    category: '1C 고대 로마 군단 흉갑(Lorica) & 유대 전통 키톤',
    accuracyScore: 93,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACSkq0ViSk5QHR4fTjyX3OZpdhK_CyA8R_8KgvVxDDWhNZsIQwMtF_Jee-m-hehcA8-rWWXaj5AykRVjYOfTzlVI0pVp3HTsnRMKNni_xaiM_iVjh_HngYs_cYsQvRQGmCDbI3ryiSriYaRlXZy2LF4Zp7wjO9njyTklSGNeFCt7pX2WeuqvmeHkRUTM_vxyV2_snS4B_ebRZtovpw9d4DQ9JsPH-6FDobYPnJH4b6oqFlCx9z9iczZQ',
    alt: 'Ancient Roman tribune in leather muscle cuirass and red woolen cape standing before chariot arena.',
    organization: '바티칸 박물관 및 이탈리아 고고학 연구소',
    judgmentSummary: '로마 군단 호민관의 붉은 모직 사굼(Sagum) 망토, 단련된 가죽 흉갑, 전차 경기용 색상별 가죽 튜니카와 유대 민족의 소박한 린넨 키톤을 거대한 스케일로 고증.',
    sources: ['트라야누스 원주 부조', '사해문서 발굴 고대 린넨 섬유 분석 사료'],
    creatorTips: '고대 지중해 세계의 엄격한 로마 군단 정복과 중동 사막 기후에 맞춘 유대 민족의 넉넉한 튜니카 핏의 계급적 대비가 강렬한 인상을 줍니다.',
    palette: [
      { hex: '#991b1b', name: '로마 호민관 사굼 레드' },
      { hex: '#78350f', name: '전차 경기용 가죽 하네스' },
      { hex: '#f5f5f4', name: '유대 아마포 린넨' }
    ],
    tags: ['#벤허', '#로마제국', '#군단병', '#키톤', '#튜니카', '#고대'],
    aliases: ['벤허', 'ben-hur', '찰톤 헤스톤', '로마', '전차경주', '키톤', '고대'],
    shortVerdict: '고대 로마 군단 장교 흉갑과 전차 경기용 튜니카 오스카 수상작.',
    parts: []
  },

  // 24. 왕의 춤 (Le Roi Danse, 2000)
  {
    id: 'le-roi-danse',
    title: '왕의 춤',
    originalTitle: 'Le Roi Danse (2000, 제라르 코르비오 감독, 브누아 마지멜 주연)',
    mediaType: '바로크 궁정 예술 실화 영화 (올리비에 베리오 의상감독)',
    year: 2000,
    era: '17세기 후기 (1660~1680년대 프랑스 바로크)',
    eraCategory: '바로크·로코코',
    region: '프랑스 파리 루브르 및 베르사유 궁정',
    guild: '프랑스 왕립 아카데미 및 궁정 테일러',
    socialStatus: '태양왕 루이 14세, 작곡가 장 밥티스트 륄리',
    category: '17C 프랑스 바로크 쥐스토코르(Justaucorps) & 페리위그(Periwig)',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABXuM-mvZcEnLQ2NlSYBKT27zVvbBwuenU8paHQLYQ9wRU5acRMfMT4HKPBkIk1t-_S0SGmWsrj2nCnrbsQnM2UFNyInYTokALZZqpscXNE6t5GzEDhtntuUWFAvPcclPDNuuCFJjN56S_JTqwyeoF93-9qEc5dcbRKDT1s04-xdVPX1N8n-SMJogUw5Df-kR4TSxIwaYu9flnE6ik5-Yrd7Ijj4VeH5ew0EJt2G4FxXr24V_vTtfHVQ',
    alt: 'Sun King Louis XIV in glittering gold brocade justaucorps and voluminous powdered periwig dancing on baroque stage.',
    organization: '프랑스 베르사유 바로크 음악 센터(CMBV)',
    judgmentSummary: '태양왕 루이 14세의 금사 브로케이드 쥐스토코르(Justaucorps), 거대한 풀 보텀 페리위그(Periwig) 가발, 프랑스 레이스 크라바트(Cravat)를 당대 왕실 무도회 기록화와 완벽히 일치하게 재현.',
    sources: ['베르사유 궁전 루이 14세 발레 의상 도판(1653)', '프랑스 국립도서관 판화실'],
    creatorTips: '17세기 바로크 남성 복식의 절정인 무릎길이 쥐스토코르의 넓게 퍼지는 옷자락과 목의 화려한 레이스 크라바트, 리본 장식 힐 슈즈의 화려한 선율을 포착하는 것이 포인트입니다.',
    palette: [
      { hex: '#ca8a04', name: '태양왕 골드 브로케이드' },
      { hex: '#1e3a8a', name: '왕실 플뢰르 드 리스 블루' },
      { hex: '#f5f5f4', name: '프랑스 레이스 크라바트' }
    ],
    tags: ['#왕의춤', '#루이14세', '#쥐스토코르', '#바로크', '#17C바로크', '#프랑스궁정'],
    aliases: ['왕의 춤', '왕의춤', 'le roi danse', '루이 14세', '쥐스토코르', '페리위그', '바로크', '17세기'],
    shortVerdict: '루이 14세의 황금빛 쥐스토코르와 바로크 궁정 의례복 실물 복각.',
    parts: []
  }
];

export const COMPARISON_REPORT_DATA: ComparisonReport = {
  id: 'rep-tudor-01',
  folioRef: 'FOLIO REF. #094-TUDOR',
  title: '울프 홀 vs 천일의 스캔들: 16C 튜더 궁정 복식 고증 대조',
  createdDate: '2024.11.16',
  workAId: 'wolf-hall',
  workBId: 'other-boleyn-girl',
  matchRate: 97.2,
  diffRate: '+25%p',
  anachronismB: 'B작품 28% 검출',
  pointsCount: 16,
  generalBrief: '두 작품 모두 1520~1530년대 영국 헨리 8세 궁정과 앤 불린 시대를 다루고 있으나, BBC 대하드라마 「울프 홀」은 한스 홀바인의 궁정 초상화 사료를 기반으로 게이블 후드의 엄격한 5각 프레임과 중량감 있는 울/벨벳 직조를 철저히 고증한 반면, 영화 「천일의 스캔들」은 극적 시각화를 위해 채도 높은 비비드 에메랄드 그린 실크와 뒤로 과도하게 젖힌 프렌치 후드, 노출된 스위트하트 네크라인 등 현대적 각색 요소(아나크로니즘 약 28%)가 혼재되어 있습니다.',
  matrixItems: [
    {
      id: 'm1',
      category: '실루엣 & 네크라인',
      subCategory: 'Silhouette & Neckline',
      workANote: '튜더 전통 스퀘어 네크라인 & 고래수염 보디스',
      workBNote: '현대 드레스풍 스위트하트 변형 네크라인 (가슴 노출 강조)',
      workAHighlight: '당대 홀바인 초상화 완벽 일치',
      workBHighlight: '후대 헐리우드 드레스 각색',
      badge: 'A작품 절대 우세',
      verdict: 'A'
    },
    {
      id: 'm2',
      category: '헤드기어 / 후드',
      subCategory: 'Headgear & Veils',
      workANote: '정통 잉글리시 게이블 후드 & 머리망(Caul) 결속',
      workBNote: '앞머리를 드러내고 정수리 뒤로 젖힌 프렌치 후드',
      workAHighlight: '박물관 유물 각도 및 수납 일치',
      workBHighlight: '연대 및 착장 규율 오차 감지',
      badge: '박물관급 정밀도',
      verdict: 'A'
    },
    {
      id: 'm3',
      category: '원단 및 염색',
      subCategory: 'Textile & Pigment',
      workANote: '중량감 있는 천연 염색 울, 미표백 린넨, 실크 벨벳',
      workBNote: '채도 높은 화학 염료풍의 비비드 에메랄드 그린 실크',
      workAHighlight: '촛불 조명 아래 당대 직조감 우수',
      workBHighlight: '과도한 현대적 광택감',
      badge: '색채학 정밀 분석',
      verdict: 'A'
    },
    {
      id: 'm4',
      category: '장신구 및 목걸이',
      subCategory: 'Jewelry & Ornaments',
      workANote: '역사 사료 기반 B 이니셜 진주 목걸이 및 실측 놋쇠 핀',
      workBNote: '화려한 영화용 커스텀 골드/에메랄드 주얼리 세트',
      workAHighlight: '16C 초상화 복각품',
      workBHighlight: '배치 아이디어 우수',
      badge: '상호 보완 권장',
      verdict: 'BOTH'
    }
  ],
  conclusion: '“원화 및 의상 제작 시 「울프 홀」의 잉글리시 게이블 후드와 튜더 왕가 보디스 기본 레이어드를 기준으로 삼고, 「천일의 스캔들」은 극적인 캐릭터 강조를 위한 채도 대비 및 실루엣 변형 아이디어 위주로 취사선택하는 것을 권장합니다.”',
  committee: '영국 왕립 역사학회 및 빅토리아&앨버트 박물관 연계',
  reliabilityScore: '98.8%'
};

export const INITIAL_PROJECT_BOARDS: ProjectBoard[] = [
  {
    id: 'proj-1',
    title: '16C 튜더 왕가 궁정 복식 웹툰 기획',
    subtitle: '참조 레퍼런스: 울프 홀 vs 천일의 스캔들 대조군',
    status: 'writing',
    statusLabel: '활성 집필 중',
    updatedAt: '수정: 2시간 전',
    specimenCode: 'FOLIO SPECIMEN #07',
    specimenTitle: '한스 홀바인 궁정 초상화 사료군',
    deviation: '사료 비교 편차 안정권 (±1.5%)',
    curatorMemo: '“울프 홀의 잉글리시 게이블 후드 핏감과 스퀘어 네크라인 본 베이스 유지하되, 천일의 스캔들의 극적인 원색 대비와 소품 아이디어를 선별 조합 예정.”',
    tags: ['#16C튜더', '#게이블후드', '#울프홀', '#코르셋', '#영국궁정'],
    era: '16세기 튜더 왕조',
    purpose: '웹툰·일러스트',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3S2wwTAfEZdNJoJ8bHKnIgDkJ9qX2nkBrG6Ilyx2JJHtoU4UqUBHFITFuIR3GRz9Sj5fTXfO1PKfr4PJ2pyzy_3R1gMa-M4ceHILBQXH4oyePn6CWa2yEfZCFGGYSr9qJ5I7VDMsvH7TPgqiOAmi6x2IvY1DbR8DMBdCsaxbgHZJkFE17n-K3E24bRSBSS8kpT3aG6lynbtp1_AjfwMWcMETFctJEF2tSXy0csLUSuwfcOBCzUOAl-Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSD8jZbCzKgSzV3kleYpE12cJiblqN85XZvMgqchTVXk-1Mx_mZ_wbc1RQs_Dp-09MGKCaYg0R4b8-PK6uvT9BltDzpAEUv05HWZ6CN2mXj-jQG-OTiRmeiy1tR56AMGdu0GHLqSGsYieresXxR0RqVR4XqmwQDSHHcLkiNgCJjWbSTEP7VlNDeaOFX60GT_KcY477GoOJOCcBG10FEAyl7fSF27QitL2bBhpHIEiTqUBT6VfJZhACwA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUHq0C_w-lsq19w66H8KlhhIUpei6a0g7aScqQO2L9bqcmtIF22u6DwqJpedHvkBhB05IL9xoMHgdBHyiluw9gucs5bfATxJ371lx4e6SngrXVXpFOvCO0726K50lyWCDToa6NmazboJwJhNugkFmcRDrftwDJLSZvLH_9gebLbHDpIb4UPYYopxWzDxBMNu0vsmNpxOWsZc6ds3quw2qunvIJqgVOQJAuNRl7rxhLmzPJV_KQhNWggw'
    ]
  },
  {
    id: 'proj-2',
    title: '15C 백년전쟁 기사 아머 & 갬비슨 연구',
    subtitle: '참조 레퍼런스: 더 킹: 헨리 5세 vs 라스트 듀얼',
    status: 'verified',
    statusLabel: '검수 완료 100%',
    updatedAt: '수정: 3일 전',
    specimenCode: 'FOLIO SPECIMEN #15',
    specimenTitle: '영국 로열 아머리즈 아쟁쿠르 무구 사료군',
    deviation: '고증 완벽 일치',
    curatorMemo: '“판금 갑주 안쪽의 다이아몬드 퀼팅 누비 갬비슨과 아밍 포인트 가죽끈 결속 세부 디테일 정리 완료.”',
    tags: ['#백년전쟁', '#아쟁쿠르', '#플레이트아머', '#더킹', '#갬비슨'],
    era: '15세기 르네상스/백년전쟁',
    purpose: '영상 사극 고증',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSjdPsqRVMGo95me48YMlrK2-QzK0OKDzIY9HtBL98gyBXppSaAA8xE64mui6KA5ConpwL5xP3uijOCRaVvZEILk_UxaLL5ZcZ4-0-27B0axx-jWjTXcPS7_gIDW0nv5nFEwBIzWkJ3UAuAzkiz6JdwJxGXjjq70GtRpk_tX10j7F_5tZcaXUlX9qcDa_SHUjYOBXcnknojAH_DGUtvXJhs8mmRbeen5DYnltrBXOMnKcYwVxCSdJ-w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yt4Ly2862_flMUCzW_wEczrAiM6s-ttzj44A49aIeoIHgcnvfGbcwrFIVYn4Ss6ZJvhCxWuDaq-U7Fz9SJjoApWJX3v2sztmJ2osbeW-BOrJLrP3v-TP8g5oMY29OObaR3zQ1gV5bs4qTOzsVFjlB0TWm_LuC8Yn4HFmdY8RhvLizu-bTXKUVhcq4YhK01rJZH2oDFR_U0bsb4zZU_TyB06nNh0dnCBP2IU9WMf-Rx_P7NPV8E9lTA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IiwIlmgkF6ipNRIkB9ETryllIOlN2forbWI4gvKaBfbr_FeI2pgpSU0Ty6-aCm6sHYGP63EUbNs2EJvTcQyz-2bwlpCX_KLODXRmiH7b1QqV9qtJ-nSbKxf6vDEt8sbZb49v6dDI9QLM72WFlyNqaUlViKlSjmDDOqIAOOZRp2nJ6iTtiusdwU36iFN-jeGO4JGAcyROPNg9Io4M1F6qpo5o5FuCrP__5u08xdDwQyBrQlmf7TGEWw'
    ]
  },
  {
    id: 'proj-3',
    title: '14C 중세 수도원 수단 복식 고증',
    subtitle: '참조 레퍼런스: 장미의 이름 (1327년 베네딕토회)',
    status: 'draft',
    statusLabel: '기획 초안',
    updatedAt: '수정: 1주일 전',
    specimenCode: 'FOLIO SPECIMEN #22',
    specimenTitle: '바티칸 도서관 중세 수도원 복제 규칙서 사본',
    tags: ['#장미의이름', '#수도사', '#카울후드', '#생양모', '#14C중세'],
    era: '14세기 중세 성기',
    purpose: '학술 논고 및 웹툰',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_OobxUx3Hql7hvNL65gyEGUMMYJT3XSF2wwPvcNBIFq_5s2XYWmgLcKynqk1IZxqfGik6MXoYsGuR5jnjUNCUcbOkC9nlqAcgSYoGZqDmpFYqZznr_tHi7knC483Al06fRe46Svp5bItkNl2ZhcMNvP-ZhaAUO5EX9UyPFqlRLgOXCpLi4OG12FyxxxVkmB95HaDOminWfCpoq9b6jSfQ090QqNcacKV_teCrOmpZz3bXihmQV4WazA'
    ]
  }
];

export const LEXICON_KEYWORDS: LexiconWord[] = [
  {
    id: 'lex-1',
    term: '게이블 후드',
    romanTerm: 'Gable Hood',
    count: 14,
    definition: '영국 튜더 왕조 전반기(헨리 8세 시대)에 유행한 5각형 박공지붕 모양의 건축적인 여성 모자로 뒤에 검은 벨벳 베일이 결합됨.',
    era: '16세기',
    category: '머리 장식/후드',
    frequency: 98
  },
  {
    id: 'lex-2',
    term: '프렌치 후드',
    romanTerm: 'French Hood',
    count: 12,
    definition: '앤 불린이 프랑스 궁정에서 들여온 둥근 초승달 모양의 모자로 머리카락 앞부분을 드러내어 게이블 후드보다 경쾌하고 우아한 실루엣을 연출.',
    era: '16세기',
    category: '머리 장식/후드',
    frequency: 92
  },
  {
    id: 'lex-3',
    term: '갬비슨',
    romanTerm: 'Gambeson',
    count: 11,
    definition: '단단한 린넨 사이에 양모 솜을 채워 누빈 충격 흡수용 무구 안감(Arming Doublet) 또는 중하위 전열병의 독립 방호복.',
    era: '11-15세기',
    category: '갑주/방호복',
    frequency: 90
  },
  {
    id: 'lex-4',
    term: '사슬갑옷 (하버크)',
    romanTerm: 'Hauberk',
    count: 10,
    definition: '수천 개의 단철 고리를 엮어 리벳으로 결속한 중세 전기의 대표적인 방호구로 십자군 기사들이 주로 착용함.',
    era: '11-14세기',
    category: '갑주/방호복',
    frequency: 94
  },
  {
    id: 'lex-5',
    term: '카울 후드',
    romanTerm: 'Cowl',
    count: 9,
    definition: '중세 가톨릭 수도사들이 머리와 어깨를 덮어 세속과의 단절과 침묵을 상징하는 깊고 헐렁한 무염색 양모 후드.',
    era: '12-14세기',
    category: '수도복/후드',
    frequency: 85
  },
  {
    id: 'lex-6',
    term: '코르셋 / 스테이즈',
    romanTerm: 'Corset / Stays',
    count: 8,
    definition: '고래수염이나 목제 본을 촘촘히 넣어 상체를 원추형 또는 스퀘어 실루엣으로 반듯하게 교정하는 르네상스~로코코 여성 보디스.',
    era: '16-18세기',
    category: '속옷/보디스',
    frequency: 88
  },
  {
    id: 'lex-7',
    term: '파니에',
    romanTerm: 'Pannier',
    count: 7,
    definition: '18세기 프랑스 로코코 궁정 드레스(로브 아 라 프랑세즈) 좌우를 과장되게 벌어지게 만드는 버들가지/고래수염 언더스커트 프레임.',
    era: '18세기',
    category: '속옷/스커트 프레임',
    frequency: 78
  },
  {
    id: 'lex-8',
    term: '프록 코트',
    romanTerm: 'Frock Coat',
    count: 7,
    definition: '18세기 신사들이 착용한 무릎길이의 테일러드 모직 외투로 빽빽한 단추와 꼿꼿한 스탠딩 칼라가 특징.',
    era: '18세기',
    category: '외투/코트',
    frequency: 82
  },
  {
    id: 'lex-9',
    term: '두정갑',
    romanTerm: 'Dujeonggap',
    count: 6,
    definition: '조선 중후기 군사들이 착용한 대표적인 갑주로 가죽이나 무명 옷 안쪽에 철판을 덧대고 겉에 놋쇠 못(두정)을 박아 고정한 방호복.',
    era: '17세기 조선',
    category: '조선 무구/갑주',
    frequency: 86
  },
  {
    id: 'lex-10',
    term: '적의 / 곤룡포',
    romanTerm: 'Jeogui & Gonryongpo',
    count: 5,
    definition: '조선 왕실 국혼 및 정사에 착용하는 중전의 꿩 무늬 대례복(적의)과 국왕의 붉은 집무복(곤룡포).',
    era: '18세기 조선',
    category: '조선 궁중 복식',
    frequency: 76
  }
];
