import { HistoricalRecord, ComparisonReport, ProjectBoard, LexiconWord } from '../types';

export const HISTORICAL_RECORDS: HistoricalRecord[] = [
  {
    id: 'zdf-hanse',
    title: '테라 엑스: 한자 동맹의 비밀',
    originalTitle: 'Terra X: Die Deutsche Hanse - Eine heimliche Supermacht (2012, ZDF)',
    mediaType: '독일 공영 ZDF 2부작 역사 다큐드라마',
    year: 2012,
    era: '13세기 후기 (중세 성기, 1280년)',
    eraCategory: '중세 성기',
    region: '북독일 뤼베크 (Lübeck)',
    guild: '상인 자치 길드 계급',
    socialStatus: '대상인 부유 시민 계층',
    category: '여성 성인 정장 복식',
    accuracyScore: 96,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk4OCWDvo2cfF9cMgsgyGY18ixYp9_D6soqBVBtgFd6T0Q7DhWGymfZ55nw0jBPw6U3SmrMmFtXzoExsB7xilwuHstfchsrUov3pzkQRlmRceZosFDwZjtg2uJI1UoqPEry4FF76wst_fMQP7fFUINo0K4Ooyy3xRdYk_V1_qSA4RvnNUICPcujEOSTJBAHqIx4qkQILtpOYGhmZw81IyYoPTLgLcPcY_pEzhXyws5TZa2TxtYm6L5Jg',
    alt: 'Historical drama still of medieval Hanseatic merchant woman in Luebeck 1280, wearing authentic unbleached linen Kruseler pleated veil, loose wool surcoat dyed with muted plant woad.',
    organization: '뤼베크 시립 역사박물관(Museumsquartier St. Annen) 및 독일 역사학회 공식 검수 완료',
    judgmentSummary: '13세기 후기 북독일 한자 도시 뤼베크의 시민 계층 복식인 ‘크루젤러(Kruseler)’ 주름 베일과 튜닉 위의 모직 슈르코(Surcoat) 실루엣을 완벽하게 재현. 당대 길드 규약에 따른 모피 트리밍 너비까지 사료와 정확히 부합함.',
    sources: [
      '뤼베크 시 조례 문서 (Lübecker Ratsurkunden, 1282)',
      '작센슈피겔 (Sachsenspiegel) 하이델베르크 사본 삽화'
    ],
    creatorTips: '왕족·대귀족의 실크 벨벳이나 금박 문양 드레스와 달리, 한자 상인 계급 특유의 단정하면서도 묵직한 고밀도 모직 원단 질감 표현이 핵심입니다. 염료는 지나치게 밝은 군청색 대신 대청(Woad) 특유의 차분하고 깊은 감청색 계열을 채택하는 것이 13세기 북독일의 역사적 정취를 극대화합니다.',
    palette: [
      { hex: '#23374d', name: '대청(Woad) 딥 블루' },
      { hex: '#f4efe6', name: '미표백 천연 린넨' },
      { hex: '#8c6212', name: '황동 버클 앤틱 골드' }
    ],
    tags: ['#크루젤러 베일', '#울 슈르코', '#놋쇠 버클 가죽벨트', '#모피 트리밍', '#13C중세', '#북독일', '#한자동맹'],
    shortVerdict: '뤼베크 시립박물관 복식 고증팀 자문 완료. 13세기 후기 크루젤러(Kruseler) 주름 베일과 목탄 직조 모직 슈르코를 완벽히 재현함.',
    parts: [
      {
        id: 'p1',
        number: 1,
        partName: '머리 장식 / 베일',
        title: '크루젤러 (Kruseler)',
        subtitle: '다단 잔주름 프릴 고정 린넨 베일',
        description: '얼굴 가장자리를 따라 촘촘한 다단 러플을 핀으로 머리망(Crespine)에 고정. 기혼 상인 여성의 품위를 상징하며 표백된 고밀도 린넨 사용.',
        material: '린넨 100%',
        technique: '윔플(Wimple) 위 핀 고정',
        matchRate: 98,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUHq0C_w-lsq19w66H8KlhhIUpei6a0g7aScqQO2L9bqcmtIF22u6DwqJpedHvkBhB05IL9xoMHgdBHyiluw9gucs5bfATxJ371lx4e6SngrXVXpFOvCO0726K50lyWCDToa6NmazboJwJhNugkFmcRDrftwDJLSZvLH_9gebLbHDpIb4UPYYopxWzDxBMNu0vsmNpxOWsZc6ds3quw2qunvIJqgVOQJAuNRl7rxhLmzPJV_KQhNWggw',
        imageAlt: '13th century medieval Kruseler ruffled white linen wimple veil'
      },
      {
        id: 'p2',
        number: 2,
        partName: '겉옷 (OUTER)',
        title: '모직 슈르코 (Wool Surcoat)',
        subtitle: '오픈 암홀(Hell Windows) 슬릿 구조',
        description: '소매가 없고 옆구리가 깊게 파인 사이드 슬릿. 상인 신분 제한령(1282년 시조례)을 준수하여 1.5인치 너비의 다람쥐(Vair) 모피만 암홀에 배색.',
        material: '모직(Wool) + 다람쥐 모피',
        technique: '대청(Woad) 감청 염색',
        matchRate: 96,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9CvnIzX7X7OyZM3J9EbGVMw6tWM1BGbg_e1AHgK9ul9RvlZ_6yJVYrlh-GAylVWlHTFvq2ct5LQyxmNOj9bzMHlkB_YazDUkADW8knkaVdax7UYDq6dKCsnQRUmgKPzTHysWaYo0X-y5Hht42-nNxFzvgC8ANkS7dTGjcxziYEP38XtWsiWvmB0_5SgeDhKX0M4b5vsdYsMO5BgC4xs0OFthwatAnAMT6jQU9E3zRf0FCYhUFYPYG1g',
        imageAlt: '13th century side-slit sleeveless surcoat in deep woad-dyed wool'
      },
      {
        id: 'p3',
        number: 3,
        partName: '속옷 / 기본 튜닉',
        title: '코트하르디 (Cottehardie) & 슈미즈',
        subtitle: '몸에 밀착되는 롱 슬리브 구조',
        description: '몸에 타이트하게 밀착되는 롱 슬리브 코트하르디로 손목에는 놋쇠 단추 12개 배열. 최하단에는 피부 보호를 위한 미표백 천연 린넨 슈미즈(Chemise) 레이어드.',
        material: '린넨 & 연질 울',
        technique: '손목 단추 마감 및 이중 스티치',
        matchRate: 94
      },
      {
        id: 'p4',
        number: 4,
        partName: '장신구 / 휴대 소품',
        title: '놋쇠 버클 가죽 거들 & 아모니에르',
        subtitle: '길게 늘어뜨리는 중세 벨트와 인장 파우치',
        description: '황동 주조 버클 가죽 벨트와 자수 포켓 파우치(Aumoniere), 열쇠 및 길드 거래 장부 인장 보관용.',
        material: '황동 & 가죽 & 견사',
        technique: '13C 유물 복각 금속 주조',
        matchRate: 92
      }
    ]
  },
  {
    id: 'stortebeker',
    title: '스퇴르테베커: 북해의 해적',
    originalTitle: 'Störtebeker - Die Legende eines Seeräubers (2006, ARD/NDR)',
    mediaType: '독일 공영 ARD/NDR 2부작 대작 영화',
    year: 2006,
    era: '14세기 초 (1310~1390년)',
    eraCategory: '중세 성기',
    region: '북독일 함부르크 항구',
    guild: '해상 대상인 선주 가문 및 사략선',
    socialStatus: '선주 및 항만 거상 계층',
    category: '여성 항구 외출 복식',
    accuracyScore: 76,
    accuracyGrade: 'SELECTIVE',
    anachronismRate: 24,
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSD8jZbCzKgSzV3kleYpE12cJiblqN85XZvMgqchTVXk-1Mx_mZ_wbc1RQs_Dp-09MGKCaYg0R4b8-PK6uvT9BltDzpAEUv05HWZ6CN2mXj-jQG-OTiRmeiy1tR56AMGdu0GHLqSGsYieresXxR0RqVR4XqmwQDSHHcLkiNgCJjWbSTEP7VlNDeaOFX60GT_KcY477GoOJOCcBG10FEAyl7fSF27QitL2bBhpHIEiTqUBT6VfJZhACwA',
    alt: 'Historical cinematic shot of a maritime merchant woman in Hamburg port circa 1310, wearing tailored medieval bodice with fitted waist, saturated vibrant blue mantle, wool felt brimmed hat, harbor docks background.',
    organization: '함부르크 해양사 연구소 고증 참고',
    judgmentSummary: '외투 실루엣과 리넨 윔플 배치는 우수하나, 드라마틱 연출을 위해 14세기 후반식 와이드 네크라인과 채도 높은 현대 화학 염료풍 색감이 일부 혼재되어 주의 요망.',
    sources: ['함부르크 항구 관세 장부(1312)', '한자 해상 상업 관습 규범'],
    creatorTips: '실루엣과 시대적 고증은 기준작에 비해 각색이 들어가 있으나, 거친 항구 현장감을 살리는 소품 레이아웃(두터운 양모 펠트 모자, 실용적인 굵은 가죽 벨트) 아이디어는 훌륭한 참고가 됩니다.',
    palette: [
      { hex: '#194982', name: '코발트 블루 (화학 염료 풍)' },
      { hex: '#4a3b32', name: '워시드 브라운 울' },
      { hex: '#d4cbb9', name: '린넨 크림' }
    ],
    tags: ['#펠트 모자', '#리넨 윔플', '#모직 케이프', '#네크라인 주의', '#함부르크', '#해상상인'],
    shortVerdict: '외투 실루엣과 리넨 윔플 배치는 우수하나, 화학 염료 풍의 과도한 채도와 14세기 후반식 와이드 네크라인이 일부 혼재되어 주의 요망.',
    parts: [
      {
        id: 'nb1',
        number: 1,
        partName: '헤드기어',
        title: '양모 펠트 챙모자 & 윔플',
        subtitle: '14세기 중후반 유행의 혼조',
        description: '1310년 배경임에도 약 30년 앞선 펠트 브림 햇을 혼용. 야외 항만 작업성을 강조하기 위한 영화적 각색으로 판정.',
        material: '양모 펠트 + 린넨',
        technique: '압축 펠팅',
        matchRate: 72
      },
      {
        id: 'nb2',
        number: 2,
        partName: '상의 실루엣',
        title: '허리 라인 강조 보디스',
        subtitle: '후대 코르셋형 변형 네크라인',
        description: '13세기 전통적인 튜닉형 루즈핏 대신 허리선을 과도하게 조인 재단법이 사용됨.',
        material: '염색 모직',
        technique: '후대 테일러링',
        matchRate: 70
      }
    ]
  },
  {
    id: 'name-of-the-rose',
    title: '장미의 이름',
    originalTitle: 'The Name of the Rose (1986, 장 자크 아노 연출, 숀 코너리 주연)',
    mediaType: '움베르토 에코 원작 명작 영화',
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
    organization: '바티칸 도서관 중세본 연구진 및 가브리엘라 페스쿠치(Gabriella Pescucci) 의상팀',
    judgmentSummary: '거친 생 양모(Habit), 미표백 아마포 속옷, 토들 튜닉 및 프란체스코회/베네딕토회 교단별 규율 복식의 계층적 차이를 엄격하게 고증한 독보적 레퍼런스.',
    sources: ['성 베네딕토 규칙서(Regula Benedicti) 라틴어 원전', '중세 피에몬테 수도원 재정기록'],
    creatorTips: '종교적 엄숙함을 나타내기 위한 거친 무염색 양모(Undyed Raw Wool)와 깊게 파인 카울 후드의 드레이프가 장엄한 분위기를 연출합니다.',
    palette: [
      { hex: '#2b2622', name: '생 흑양모 다크브라운' },
      { hex: '#4a4239', name: '풍화된 카울 애쉬' },
      { hex: '#d9cdb8', name: '삼베 로프 내추럴' }
    ],
    tags: ['#수도사', '#조직 거친 양모', '#카울 후드(Cowl)', '#삼베 매듭 띠', '#수도사 가죽 샌들', '#14C중세'],
    shortVerdict: '거친 양모(Habit), 미표백 아마포 속옷, 토들 튜닉 및 프란체스코회/베네딕토회 교단별 규율 복식의 계층적 차이를 엄격하게 고증한 독보적 레퍼런스.',
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
  {
    id: 'the-king-henry-v',
    title: '더 킹: 헨리 5세',
    originalTitle: 'The King (2019, 넷플릭스 영화, 데이비드 미쇼 연출, 티모시 샬라메 주연)',
    mediaType: '역사 전쟁 영화',
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
    organization: '영국 로열 아머리즈(Royal Armouries) 무구 고증 자문 (의상감독 제인 페트리)',
    judgmentSummary: '아쟁쿠르 전투 무구 및 초기 란셋형 후드 실물 복원. 단련된 강철 판금의 마감과 아밍 포인트 가죽끈 결속 상태 극도로 우수.',
    sources: ['헨리 5세 왕실 무기고 목록(1414)', '프랑스 아쟁쿠르 기사 명부'],
    creatorTips: '진흙과 비에 젖은 양모 바지와 무광 강철 갑주의 텍스처 대비를 주목하세요. 갑옷 안쪽에는 반드시 누비 갬비슨(Arming Doublet) 레이어가 들어가야 인체 비례가 자연스럽습니다.',
    palette: [
      { hex: '#4a151b', name: '왕실 로열 크림슨' },
      { hex: '#5c646b', name: '단련 강철 메탈' },
      { hex: '#48382c', name: '아쟁쿠르 진흙 브라운' }
    ],
    tags: ['#기사', '#갑옷', '#아쟁쿠르 갑주', '#갬비슨', '#샤프롱', '#우플랑드', '#15C르네상스', '#영국'],
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
  {
    id: 'wolf-hall',
    title: '울프 홀',
    originalTitle: 'Wolf Hall (2015, 영국 BBC 6부작 대하드라마, 마크 라일런스 주연)',
    mediaType: '영국 BBC 대하 역사 드라마',
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
    creatorTips: '영국식 게이블 후드의 각진 박공 지붕 형태와 고래수염으로 빳빳하게 세운 스퀘어 네크라인 보디스가 튜더 왕가 특유의 위엄을 만들어냅니다.',
    palette: [
      { hex: '#1c1917', name: '잉글리시 블랙 벨벳' },
      { hex: '#b45309', name: '앤틱 골드 다마스크' },
      { hex: '#fdfbf7', name: '천연 린넨 화이트' }
    ],
    tags: ['#튜더', '#게이블 후드', '#코르셋', '#영국궁정', '#16C르네상스', '#여성복식'],
    shortVerdict: '기하학적 건축미를 띤 게이블 후드와 튜더 왕가 코르셋 가운 사료 완벽 복원.',
    parts: [
      {
        id: 'wh1',
        number: 1,
        partName: '헤드기어',
        title: '잉글리시 게이블 후드 (Gable Hood)',
        subtitle: '박공지붕 형태의 목제 프레임 베일',
        description: '기하학적 5각형 박공 프레임에 진주 자수 밴드와 검은 벨벳 베일을 결합한 튜더 왕비/궁녀의 상징.',
        material: '실크 벨벳 + 진주 + 리넨',
        technique: '골격 프레임 결속',
        matchRate: 98
      }
    ]
  },
  {
    id: 'kingdom-of-heaven',
    title: '킹덤 오브 헤븐',
    originalTitle: 'Kingdom of Heaven: Director\'s Cut (2005, 리들리 스콧 감독, 올랜도 블룸 주연)',
    mediaType: '역사 대서사 명작 영화',
    year: 2005,
    era: '12세기 후기 (1187년 제3차 십자군 전야)',
    eraCategory: '중세 성기',
    region: '예루살렘 왕국 및 서유럽 프랑스',
    guild: '십자군 기사단(구호기사단, 성전기사단) 및 현지 상인',
    socialStatus: '성채 영주 및 십자군 기사 계층',
    category: '12C 중세 사슬갑옷(Hauberk) 및 튜닉/슈르코',
    accuracyScore: 93,
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
    tags: ['#십자군', '#기사', '#사슬갑옷', '#갬비슨', '#슈르코', '#12C중세'],
    shortVerdict: '체인메일 사슬갑옷과 누비 갬비슨 언더레이어의 실전적 고증 완성.',
    parts: []
  },
  {
    id: 'the-borgias',
    title: '더 보르지아',
    originalTitle: 'The Borgias (2011~2013, 미국 Showtime 3부작 시리즈, 닐 조던 연출)',
    mediaType: '미국 쇼타임 역사 드라마 (에미상 의상상 수상작)',
    year: 2011,
    era: '15세기 후기 (1492년 이탈리아 르네상스)',
    eraCategory: '르네상스',
    region: '이탈리아 로마 및 바티칸 교황령',
    guild: '보르지아 가문 및 이탈리아 귀족 길드',
    socialStatus: '교황 알렉산데르 6세 및 체사레 보르자 귀족',
    category: '르네상스 남성 궁정 복식',
    accuracyScore: 88,
    accuracyGrade: 'SELECTIVE',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNIFUZbUha8iEC8r295RFxTQEBUMnEHNlvTObFMhGwH2DqyhNZr5AcYxaabZfuqNxCSX_M0NcJARrXGQrw1aAyis6OVy5CHF95kkVCrdmCWZxZjzgadSWIzsH1_tk064uvY7lZetXV4ggiQvNKVlOkHN41eA0Q-G1iqsgPSk2fdhXSl0stkfBuXvJ3K7QJy0Q7ePYTaJ7tI7Aj6_v5RfPrkxnF2ubvP9GhZhuYhc6JoHmhA9nfzQ_bhg',
    alt: 'Renaissance noble youth portrait representing Cesare Borgia in Rome 1492. Wearing a split-sleeve dark emerald Italian doublet embroidered with real spun gold threads.',
    organization: '피렌체 메디치 아카이브 및 가브리엘라 페스쿠치(Gabriella Pescucci) 의상팀',
    judgmentSummary: '초기 이탈리아 콰트로첸토(Quattrocento) 귀족 재단선. 슬릿 소매(Split Sleeve)와 금사 자수 더블릿, 화려한 실크 벨벳의 재단선이 매우 우수하나 극적 효과를 위한 채도 보정 적용됨.',
    sources: ['보르지아 궁정 의전록', '베네치아 대사 보고서'],
    creatorTips: '소매의 슬릿 사이로 빠져나오는 백색 슈미즈의 퍼프(Puff) 볼륨감이 핵심입니다.',
    palette: [
      { hex: '#163b28', name: '에메랄드 다크 그린' },
      { hex: '#9c7c38', name: '스펀 골드 견사' },
      { hex: '#1a181b', name: '베네치아 블랙 벨벳' }
    ],
    tags: ['#더블릿', '#벨벳', '#이탈리아', '#베네치아 귀족', '#15C르네상스'],
    shortVerdict: '초기 이탈리아 콰트로첸토(Quattrocento) 귀족 재단선과 슬릿 소매 복원.',
    parts: []
  },
  {
    id: 'girl-pearl-earring',
    title: '진주 귀걸이를 한 소녀',
    originalTitle: 'Girl with a Pearl Earring (2003, 피터 웨버 연출, 스칼렛 요한슨 주연)',
    mediaType: '아카데미 의상상 노미네이트 명작 영화',
    year: 2003,
    era: '17세기 네덜란드 황금기 (1665년)',
    eraCategory: '근대·빅토리아',
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
    shortVerdict: '17세기 네덜란드 델프트 시민 및 하녀 복식 회화 사료 완벽 일치.',
    parts: []
  },
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
    tags: ['#기사', '#갬비슨', '#철모', '#스코틀랜드', '#14C중세'],
    shortVerdict: '14세기 초 케틀 햇 철모와 누비 갬비슨 결속 방식 사료 부합.',
    parts: []
  }
];

export const COMPARISON_REPORT_DATA: ComparisonReport = {
  id: 'rep-082-c',
  folioRef: 'FOLIO REF. #082-C',
  title: '테라 엑스: 한자 동맹 vs 스퇴르테베커: 북해의 해적',
  createdDate: '2024.11.16',
  workAId: 'zdf-hanse',
  workBId: 'stortebeker',
  matchRate: 88.4,
  diffRate: '+20%p',
  anachronismB: 'B작품 24% 검출',
  pointsCount: 14,
  generalBrief: '두 작품 모두 13~14세기 북독일 상인 계층을 다루고 있으나, 공영 다큐드라마 「테라 엑스: 한자 동맹」은 뤼베크 시립박물관 사료 기반 실루엣과 주름 베일 고증이 매우 엄격한 반면, 영화 「스퇴르테베커」는 14세기 후반식 와이드 네크라인과 채도 높은 현대 염료 색감이 일부 섞여 있어 부분적 참고가 권장됩니다.',
  matrixItems: [
    {
      id: 'm1',
      category: '실루엣 & 핏',
      subCategory: 'Silhouette & Fit',
      workANote: '루즈한 A라인 튜닉 & 정통 13C 슈르코(Surcoat)',
      workBNote: '14세기풍 허리 라인 강조 (다소 현대적 각색)',
      workAHighlight: '당대 유행 완벽 반영',
      workBHighlight: '후대 코르셋형 변형',
      badge: 'A작품 우세',
      verdict: 'A'
    },
    {
      id: 'm2',
      category: '헤드기어 / 베일',
      subCategory: 'Headgear & Veils',
      workANote: '크루젤러(Kruseler) 주름 베일, 100% 린넨 핀 고정',
      workBNote: '양모 펠트 모자 혼용 (시대상 약 30년 앞섬)',
      workAHighlight: '유물 바느질 일치',
      workBHighlight: '연대 오차 감지 (+30y)',
      badge: '박물관급 정밀도',
      verdict: 'A'
    },
    {
      id: 'm3',
      category: '원단 및 염색',
      subCategory: 'Textile & Pigment',
      workANote: '천연 대청(Woad) 식물성 염색 특유의 은은한 블루',
      workBNote: '채도 높은 코발트 블루 (근현대 화학 염료 풍)',
      workAHighlight: '식물성 추출 안료',
      workBHighlight: '과도한 광택감',
      badge: '색채학 정밀 분석',
      verdict: 'A'
    },
    {
      id: 'm4',
      category: '소품 및 장신구',
      subCategory: 'Ornaments',
      workANote: '주조 놋쇠 버클, 실크 금사 자수 알모니에 파우치',
      workBNote: '단순 가죽 벨트와 거친 철제 링, 항구 상인풍',
      workAHighlight: '13C 유물 복각품',
      workBHighlight: '배치 아이디어 우수',
      badge: '상호 보완 권장',
      verdict: 'BOTH'
    }
  ],
  conclusion: '“원화 및 의상 제작 시 「테라 엑스: 한자 동맹」의 크루젤러 베일과 13C 슈르코 기본 레이어드를 기준으로 삼고, 「스퇴르테베커」는 거친 항구 현장감을 살리는 소품 레이아웃 아이디어 위주로 취사선택하는 것을 권장합니다.”',
  committee: '중세북유럽복식학회 연계',
  reliabilityScore: '98.4%'
};

export const INITIAL_PROJECT_BOARDS: ProjectBoard[] = [
  {
    id: 'proj-1',
    title: '13C 북독일 한자 상인 웹툰 기획',
    subtitle: '참조 레퍼런스 7편 · 복식 고증 레이어 3겹',
    status: 'writing',
    statusLabel: '활성 집필 중',
    updatedAt: '수정: 2시간 전',
    specimenCode: 'FOLIO SPECIMEN #07',
    specimenTitle: '뤼베크 시립 박물관 서랍본',
    deviation: '사료 비교 편차 안정권 (±3.2%)',
    curatorMemo: '“A작품 슈르코 핏감과 주름선 베이스 유지하되, B작품 한자 길드 항구 하선 장면의 목걸이 장신구와 가죽 파우치 소품 결합 예정.”',
    tags: ['#13C중세', '#한자동맹', '#여성상인', '#슈르코', '#크루젤러'],
    era: '13세기 중세 성기',
    purpose: '웹툰·일러스트',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQq0xp1rv4UYG-ltm1y1jo1RKyOoe7CEwBvoum7zNyLJDzd5u6W3C6pHh8AkYcF33FHvToyRwcL-8nlFS4Lmc5NgPYu5xuVqS3mz8SnyOxv6uJ-INpM-uGp8mRTPOyLq-bxFnKUtpNsBYm0zAIhSiFtuo3xAoHC-eygUiqPn9G9JW5eCJ5BPjBkq89NFI9J2Eaj-ZIq7ur55YyluToE2l2k0MT0-R1wpfkjl90n7xspLIofrUZyBfdjQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8TCPixq0DBAj4c2yBweidsYXeixUv2c3BLCJm7W7RGLfjHv84znZpx4K0yDSjGRK4pDzoTpSlmE4NYKQ0RsGvNbS4UcgcpnWPPeg-M-p_1hEZwxtZEfHooUzPdcUZWHqo2jOKoyqlc8DuGCWEdRstasZdTRGVnEOjw2Dh7dj5cMK94IIOYabDVD3J-QjSj-6MxC5O_9skWhB4TiBTi1HTOgroemUECiw0UYyHYubY17jWAnw-4GCM7A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ6hnCkeiBkv8tauMhXkh1_EJGwJS3c2sLXM87TUV0dpyhziFeucpcttQAsT8f_LT0_E6VtYrJmWKsAeMkotnW4C3sOssSrFNQ40TjF3fxCFgn_nP-XMJebF-r1EMyDUFY-PWK-MukiVoJwmJdsCtcHYFB3tcnrC_30OcejNr5rD1fgpr8hbja8Unp2j2zQWllN0LiSUPCoD1nfbmEa3Ugzgx4zuGqeaa0vZIsw8AGpxOgT4B2quNOw'
    ]
  },
  {
    id: 'proj-2',
    title: '15C 플랑드르 르네상스 시민 복식',
    subtitle: '참조 레퍼런스 4편 · 아르놀피니 부부 초상 대조군',
    status: 'verified',
    statusLabel: '검수 완료 100%',
    updatedAt: '수정: 3일 전',
    specimenCode: 'FOLIO SPECIMEN #15',
    specimenTitle: '브뤼헤 시립 박물관 아르놀피니 사료군',
    deviation: '고증 완벽 일치',
    curatorMemo: '“모직 호펠랑드의 묵직한 녹색 주름감과 풍성한 소매 퍼 트리밍 디테일 정리 완료.”',
    tags: ['#15C플랑드르', '#반에이크', '#우플랑드'],
    era: '15세기 르네상스',
    purpose: '영상 사극 고증',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWzq_3mASXoP_BqR0-urUzKtlvZdoyrGIOdwCe1-kd4qb93Y0MT2JbOt2b86JCvBX3XZos3WqytDS-L0FYowq7B59E9gG6m5RW0MPcN0YWg93-06NEz2t8LQTaq7KoCbkXpbPIC-Khyq4svc1DHUHr7WdQovkhxOEnPcYW7iewtJZQ9874o4MJaCVRQbEQP1J0EVvWbTjTBaELuMX7yOt81qd4Frwbq9N3mDTjeblvQeQKN5BKjmB6_w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxRnAw4ENEEiM3XszZffFWc_nSuB7CNIM_qyTJaGU__YWXCiGWAsY-4cJNKbXoSJezA2QwPJpXhFFZ4S8Yw93-ssEBIn30XiJoytVBf7IZ5qiISBnJootg4Av-1Y_S_wRZzwmgGYrwXb6r7rIpsa_7ikpIF5LWyh020jj6GfOJzLzZaueXq4Bx6SdSKeZXqSwSi2b_o41yzyVHQLReijQbl3hDgvm1a0sH-TXUS0l2htyLV-j1UhE2dA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0zXYt9eX4THmIpoc3GAKLBhBLQXCj7TLk4Ago4-ZpOaVYg1IweA57vHXk0o3dABzRJQCYFusPALPiCyLpI5o85NepHnAdiI1OtXM-O0KXB0uu3PJnw_65YQitZ4KjGsATtp2UUYheHvdE34LPjAEH5-62iCRc0JhiZqTdOhI-HogI4_RAUX1jQIoWzDqTU1xuy3M7lWsIoyGgSro5QpIdzG76HckvPl9KuMlMM3x-8hjAmW6Q-rDARA'
    ]
  },
  {
    id: 'proj-3',
    title: '14C 후기 잉글랜드 백년전쟁 기사 복장',
    subtitle: '참조 레퍼런스 5편 · 누비 갬비슨과 갑주 결속 연구',
    status: 'draft',
    statusLabel: '기획 초안',
    updatedAt: '수정: 1주일 전',
    specimenCode: 'FOLIO SPECIMEN #22',
    specimenTitle: '런던 타워 왕립 무기고 소장 아밍 포인트',
    tags: ['#14C백년전쟁', '#갬비슨', '#플레이트아머'],
    era: '14세기 고딕 복식',
    purpose: '학술 논고 및 웹툰',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IiwIlmgkF6ipNRIkB9ETryllIOlN2forbWI4gvKaBfbr_FeI2pgpSU0Ty6-aCm6sHYGP63EUbNs2EJvTcQyz-2bwlpCX_KLODXRmiH7b1QqV9qtJ-nSbKxf6vDEt8sbZb49v6dDI9QLM72WFlyNqaUlViKlSjmDDOqIAOOZRp2nJ6iTtiusdwU36iFN-jeGO4JGAcyROPNg9Io4M1F6qpo5o5FuCrP__5u08xdDwQyBrQlmf7TGEWw'
    ]
  }
];

export const LEXICON_KEYWORDS: LexiconWord[] = [
  {
    id: 'lex-1',
    term: '크루젤러',
    romanTerm: 'Kruseler',
    count: 12,
    definition: '얼굴 가장자리를 따라 촘촘한 다단 잔주름 프릴을 핀으로 고정한 13-14세기 기혼 여성의 품위 있는 린넨 베일.',
    era: '13-14세기',
    category: '머리 장식/베일',
    frequency: 98
  },
  {
    id: 'lex-2',
    term: '코트하르디',
    romanTerm: 'Cotehardie',
    count: 8,
    definition: '몸체와 소매가 타이트하게 밀착되며 앞면이나 팔목에 단추를 촘촘히 배열한 중세 후기 대표 튜닉 겸 겉옷.',
    era: '14세기',
    category: '상의/튜닉',
    frequency: 85
  },
  {
    id: 'lex-3',
    term: '윔플',
    romanTerm: 'Wimple',
    count: 5,
    definition: '턱과 목 둘레를 감싸서 머리 위나 뒤쪽으로 고정하는 흰색 리넨 천. 중세 정숙한 여성과 수녀의 기본 착장.',
    era: '12-14세기',
    category: '베일/목가리개',
    frequency: 72
  },
  {
    id: 'lex-4',
    term: '모직 슈르코',
    romanTerm: 'Wool Surcote',
    count: 4,
    definition: '튜닉 위에 덧입는 겉옷으로, 양옆 옆구리가 깊게 파인 오픈 암홀(Hell Windows) 구조와 모피 트리밍이 특징.',
    era: '13-14세기',
    category: '외투/슈르코',
    frequency: 65
  },
  {
    id: 'lex-5',
    term: '갬비슨',
    romanTerm: 'Gambeson',
    count: 7,
    definition: '단단한 린넨 사이에 양모 솜을 채워 누빈 충격 흡수용 무구 안감 또는 중하위 전열병의 독립 방호복.',
    era: '11-15세기',
    category: '갑주/방호복',
    frequency: 88
  },
  {
    id: 'lex-6',
    term: '게이블 후드',
    romanTerm: 'Gable Hood',
    count: 5,
    definition: '영국 튜더 왕조 전반기에 유행한 삼각형 박공지붕 모양의 건축적인 여성 모자로 뒤에 벨벳 베일이 결합됨.',
    era: '16세기',
    category: '머리 장식/후드',
    frequency: 70
  },
  {
    id: 'lex-7',
    term: '아모니에르',
    romanTerm: 'Aumoniere',
    count: 3,
    definition: '허리 거들(벨트)에 달아 늘어뜨리는 자수 장식 주머니로 열쇠, 장부 인장, 동전 등을 휴대하는 중세 상인 필수품.',
    era: '13-15세기',
    category: '휴대 소품/파우치',
    frequency: 50
  },
  {
    id: 'lex-8',
    term: '샤프롱',
    romanTerm: 'Chaperon',
    count: 5,
    definition: '중세 후드를 머리 위에 얹고 꼬리(리리파이프)를 어깨나 목에 둘러 쓰는 독특한 14-15세기 남성용 모자.',
    era: '14-15세기',
    category: '모자/헤드웨어',
    frequency: 69
  }
];
