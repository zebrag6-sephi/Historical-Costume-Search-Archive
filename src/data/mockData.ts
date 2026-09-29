import { HistoricalRecord, ComparisonReport, ProjectBoard, LexiconWord } from '../types';

export const HISTORICAL_RECORDS: HistoricalRecord[] = [
  {
    id: 'hanse-women',
    title: '한자 동맹의 여인들',
    originalTitle: 'Die Hanse-Kauffrau (1280년 신성로마제국 뤼베크)',
    mediaType: '독일 ZDF 6부작 미니시리즈',
    year: 2021,
    era: '13세기 후기 (중세 성기)',
    eraCategory: '중세 성기',
    region: '북독일 뤼베크 (Lübeck)',
    guild: '상인 자치 길드 계급',
    socialStatus: '대상인 부유 시민 계층',
    category: '여성 성인 정장 복식',
    accuracyScore: 92,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk4OCWDvo2cfF9cMgsgyGY18ixYp9_D6soqBVBtgFd6T0Q7DhWGymfZ55nw0jBPw6U3SmrMmFtXzoExsB7xilwuHstfchsrUov3pzkQRlmRceZosFDwZjtg2uJI1UoqPEry4FF76wst_fMQP7fFUINo0K4Ooyy3xRdYk_V1_qSA4RvnNUICPcujEOSTJBAHqIx4qkQILtpOYGhmZw81IyYoPTLgLcPcY_pEzhXyws5TZa2TxtYm6L5Jg',
    alt: 'Historical drama still of medieval Hanseatic merchant woman in Luebeck 1280, wearing authentic unbleached linen Kruseler pleated veil, loose wool surcoat dyed with muted plant woad, cinematic natural museum lighting, warm archival beige tones, high historical accuracy.',
    organization: '뤼베크 시립 역사박물관(Museumsquartier St. Annen) 및 중세복식사학회 공식 검수 완료',
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
    tags: ['#크루젤러 베일', '#울 슈르코', '#놋쇠 버클 가죽벨트', '#모피 트리밍', '#13C중세'],
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
        matchRate: 96,
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
        matchRate: 94,
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
        matchRate: 92
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
        matchRate: 90
      }
    ]
  },
  {
    id: 'north-sea-merchants',
    title: '북해의 상인',
    originalTitle: 'Merchants of the North',
    mediaType: '독립 장편 사극 영화',
    year: 2018,
    era: '14세기 초 (1310년)',
    eraCategory: '중세 성기',
    region: '북독일 함부르크 항구',
    guild: '해상 대상인 선주 가문',
    socialStatus: '선주 및 항만 거상 계층',
    category: '여성 항구 외출 복식',
    accuracyScore: 74,
    accuracyGrade: 'SELECTIVE',
    anachronismRate: 26,
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSD8jZbCzKgSzV3kleYpE12cJiblqN85XZvMgqchTVXk-1Mx_mZ_wbc1RQs_Dp-09MGKCaYg0R4b8-PK6uvT9BltDzpAEUv05HWZ6CN2mXj-jQG-OTiRmeiy1tR56AMGdu0GHLqSGsYieresXxR0RqVR4XqmwQDSHHcLkiNgCJjWbSTEP7VlNDeaOFX60GT_KcY477GoOJOCcBG10FEAyl7fSF27QitL2bBhpHIEiTqUBT6VfJZhACwA',
    alt: 'Historical cinematic shot of a maritime merchant woman in Hamburg port circa 1310, wearing tailored medieval bodice with fitted waist, saturated vibrant blue mantle, wool felt brimmed hat, harbor docks background.',
    organization: '함부르크 해양사 연구소 고증 참고',
    judgmentSummary: '외투 실루엣과 리넨 윔플 배치는 우수하나, 화학 염료 풍의 과도한 채도와 14세기 후반식 와이드 네크라인이 일부 혼재되어 주의 요망.',
    sources: ['함부르크 항구 관세 장부(1312)', '한자 해상 상업 관습 규범'],
    creatorTips: '실루엣과 시대적 고증은 기준작에 비해 각색이 들어가 있으나, 거친 항구 현장감을 살리는 소품 레이아웃(두터운 양모 펠트 모자, 실용적인 굵은 가죽 벨트) 아이디어는 훌륭한 참고가 됩니다.',
    palette: [
      { hex: '#194982', name: '코발트 블루 (화학 염료 풍)' },
      { hex: '#4a3b32', name: '워시드 브라운 울' },
      { hex: '#d4cbb9', name: '린넨 크림' }
    ],
    tags: ['#펠트 모자', '#리넨 윔플', '#모직 케이프', '#네크라인 주의'],
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
        matchRate: 70
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
        matchRate: 68
      }
    ]
  },
  {
    id: 'dawn-over-rhine',
    title: '라인강의 새벽',
    originalTitle: 'Dawn over the Rhine (1260년 쾰른 자치도시)',
    mediaType: '아르테(ARTE) 합작 다큐드라마',
    year: 2015,
    era: '13세기 중기 (1260년)',
    eraCategory: '중세 성기',
    region: '서독일 쾰른 (Köln)',
    guild: '라인강 포도주 및 염직 길드',
    socialStatus: '파트리치어(Patrizier) 명문가',
    category: '여성 귀족/대상인 실내 정장',
    accuracyScore: 95,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yt4Ly2862_flMUCzW_wEczrAiM6s-ttzj44A49aIeoIHgcnvfGbcwrFIVYn4Ss6ZJvhCxWuDaq-U7Fz9SJjoApWJX3v2sztmJ2osbeW-BOrJLrP3v-TP8g5oMY29OObaR3zQ1gV5bs4qTOzsVFjlB0TWm_LuC8Yn4HFmdY8RhvLizu-bTXKUVhcq4YhK01rJZH2oDFR_U0bsb4zZU_TyB06nNh0dnCBP2IU9WMf-Rx_P7NPV8E9lTA',
    alt: 'Historical scene from Dawn over Rhine river, set in 1260 Cologne. Wealthy patrician burgher lady wearing plant-dyed woad blue cotehardie with tight buttons down the forearm, pure white linen undertunic and delicate silk bonnet.',
    organization: '쾰른 시립 역사박물관 및 라인란트 직조연구소',
    judgmentSummary: '대청(Woad) 및 꼭두서니(Madder) 당대 천연 식물성 염색 발색을 엄밀히 재현. 언더가먼트 리넨의 실밥 마감까지 13세기 직조 방식 준수.',
    sources: ['쾰른 대성당 참사회 회계장부(1265)', '중세 라인란트 길드 복제령'],
    creatorTips: '13세기 중반 쾰른의 번영기를 대변하는 절제된 실크 보닛과 손목의 촘촘한 단추선 디테일이 최고의 작화 레퍼런스입니다.',
    palette: [
      { hex: '#26425a', name: '정통 대청 인디고' },
      { hex: '#c5a059', name: '천연 꼭두서니 골드' },
      { hex: '#fffbf5', name: '표백 린넨' }
    ],
    tags: ['#코트(Cote)', '#린넨 언더가먼트', '#실크 보닛', '#천연대청염색', '#13C중세'],
    shortVerdict: '대청(Woad) 및 꼭두서니(Madder) 당대 천연 식물성 염색 발색을 엄밀히 재현. 언더가먼트 리넨의 실밥 마감까지 13세기 직조 방식 준수.',
    parts: []
  },
  {
    id: 'name-of-the-rose',
    title: '장미의 이름',
    originalTitle: 'The Name of the Rose (1327년 북이탈리아 베네딕토회)',
    mediaType: '역사 사극 명작 영화',
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
    organization: '바티칸 도서관 중세본 연구원 및 로마 가톨릭 전례사 학회',
    judgmentSummary: '거친 양모(Habit), 미표백 아마포 속옷, 토들 튜닉 및 프란체스코회/베네딕토회 교단별 규율 복식의 계층적 차이를 엄격하게 고증한 독보적 레퍼런스.',
    sources: ['성 베네딕토 규칙서(Regula Benedicti) 라틴어 원전', '중세 피에몬테 수도원 재정기록'],
    creatorTips: '종교적 엄숙함을 나타내기 위한 거친 무염색 양모(Undyed Raw Wool)와 깊게 파인 카울 후드의 드레이프가 장엄한 분위기를 연출합니다.',
    palette: [
      { hex: '#2b2622', name: '생 흑양모 다크브라운' },
      { hex: '#4a4239', name: '풍화된 카울 애쉬' },
      { hex: '#d9cdb8', name: '삼베 로프 내추럴' }
    ],
    tags: ['#조직 거친 양모', '#카울 후드(Cowl)', '#삼베 매듭 띠', '#수도사 가죽 샌들'],
    shortVerdict: '거친 양모(Habit), 미표백 아마포 속옷, 토들 튜닉 및 프란체스코회/베네딕토회 교단별 규율 복식의 계층적 차이를 엄격하게 고증한 독보적 레퍼런스.',
    parts: []
  },
  {
    id: 'the-king-henry-v',
    title: '더 킹: 헨리 5세',
    originalTitle: 'The King (1415년 아쟁쿠르 전투)',
    mediaType: '역사 전쟁 영화',
    year: 2019,
    era: '15세기 초 (1415년)',
    eraCategory: '르네상스',
    region: '잉글랜드 / 북프랑스',
    guild: '왕실 기사단 및 징집 궁수',
    socialStatus: '국왕 및 전열 기사 계층',
    category: '군사 전투 무구 및 궁정 정장',
    accuracyScore: 91,
    accuracyGrade: 'AUTHENTIC',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSjdPsqRVMGo95me48YMlrK2-QzK0OKDzIY9HtBL98gyBXppSaAA8xE64mui6KA5ConpwL5xP3uijOCRaVvZEILk_UxaLL5ZcZ4-0-27B0axx-jWjTXcPS7_gIDW0nv5nFEwBIzWkJ3UAuAzkiz6JdwJxGXjjq70GtRpk_tX10j7F_5tZcaXUlX9qcDa_SHUjYOBXcnknojAH_DGUtvXJhs8mmRbeen5DYnltrBXOMnKcYwVxCSdJ-w',
    alt: 'Young King Henry V in battle-worn steel armor, wearing crimson velvet and ermine royal houppelande over tailored chausses in Agincourt 1415.',
    organization: '영국 로열 아머리즈(Royal Armouries) 무구 고증 자문',
    judgmentSummary: '아쟁쿠르 전투 무구 및 초기 란셋형 후드 실물 복원. 단련된 강철 판금의 마감과 아밍 포인트 가죽끈 결속 상태 극도로 우수.',
    sources: ['헨리 5세 왕실 무기고 목록(1414)', '프랑스 아쟁쿠르 기사 명부'],
    creatorTips: '진흙과 비에 젖은 양모 바지와 무광 강철 갑주의 텍스처 대비를 주목하세요.',
    palette: [
      { hex: '#4a151b', name: '왕실 로열 크림슨' },
      { hex: '#5c646b', name: '단련 강철 메탈' },
      { hex: '#48382c', name: '아쟁쿠르 진흙 브라운' }
    ],
    tags: ['#샤프롱', '#아쟁쿠르 갑주', '#우플랑드', '#15C르네상스'],
    shortVerdict: '아쟁쿠르 전투 무구 및 초기 란셋형 후드 실물 복원.',
    parts: []
  },
  {
    id: 'cesare-borgia',
    title: '체이사레: 파괴의 창조자',
    originalTitle: 'Cesare Borgia (1492년 로마)',
    mediaType: '역사 사극 드라마',
    year: 2020,
    era: '15세기 후기 (1492년)',
    eraCategory: '르네상스',
    region: '이탈리아 로마 및 바티칸',
    guild: '교황령 보르지아 가문 귀족',
    socialStatus: '이탈리아 대귀족 성직자',
    category: '르네상스 남성 궁정 복식',
    accuracyScore: 82,
    accuracyGrade: 'SELECTIVE',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNIFUZbUha8iEC8r295RFxTQEBUMnEHNlvTObFMhGwH2DqyhNZr5AcYxaabZfuqNxCSX_M0NcJARrXGQrw1aAyis6OVy5CHF95kkVCrdmCWZxZjzgadSWIzsH1_tk064uvY7lZetXV4ggiQvNKVlOkHN41eA0Q-G1iqsgPSk2fdhXSl0stkfBuXvJ3K7QJy0Q7ePYTaJ7tI7Aj6_v5RfPrkxnF2ubvP9GhZhuYhc6JoHmhA9nfzQ_bhg',
    alt: 'Renaissance noble youth portrait representing Cesare Borgia in Rome 1492, wearing split-sleeve emerald doublet embroidered with real spun gold threads.',
    organization: '피렌체 우피치 미술관 복식사 자문실',
    judgmentSummary: '초기 이탈리아 콰트로첸토(Quattrocento) 귀족 재단선. 화려한 금사 자수와 슬릿 소매 배색이 매우 세밀함.',
    sources: ['보르지아 궁정 의전록', '베네치아 대사 보고서'],
    creatorTips: '소매의 슬릿 사이로 빠져나오는 백색 슈미즈의 퍼프(Puff) 볼륨감이 핵심입니다.',
    palette: [
      { hex: '#163b28', name: '에메랄드 다크 그린' },
      { hex: '#9c7c38', name: '스펀 골드 견사' },
      { hex: '#1a181b', name: '베네치아 블랙 벨벳' }
    ],
    tags: ['#더블릿', '#벨벳', '#베네치아 귀족', '#15C르네상스'],
    shortVerdict: '초기 이탈리아 콰트로첸토(Quattrocento) 귀족 재단선.',
    parts: []
  }
];

export const COMPARISON_REPORT_DATA: ComparisonReport = {
  id: 'rep-082-c',
  folioRef: 'FOLIO REF. #082-C',
  title: '한자 동맹의 여인들 vs 북해의 상인',
  createdDate: '2024.11.16',
  workAId: 'hanse-women',
  workBId: 'north-sea-merchants',
  matchRate: 88.4,
  diffRate: '+18%p',
  anachronismB: 'B작품 26% 검출',
  pointsCount: 14,
  generalBrief: '두 작품 모두 13~14세기 북독일 상인 계층을 다루고 있으나, 「한자 동맹의 여인들」은 당대 사료 기반 실루엣과 주름 베일 고증이 매우 엄격한 반면, 「북해의 상인」은 14세기 후반식 와이드 네크라인과 현대적 화학 염료 색감이 일부 섞여 있어 부분적 참고가 권장됩니다.',
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
  conclusion: '“원화 및 의상 제작 시 「한자 동맹의 여인들」의 크루젤러 베일과 13C 슈르코 기본 레이어드를 기준으로 삼고, 「북해의 상인」은 거친 항구 현장감을 살리는 소품 레이아웃 아이디어 위주로 취사선택하는 것을 권장합니다.”',
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
    term: '아모니에르',
    romanTerm: 'Aumoniere',
    count: 3,
    definition: '허리 거들(벨트)에 달아 늘어뜨리는 자수 장식 주머니로 열쇠, 장부 인장, 동전 등을 휴대하는 중세 상인 필수품.',
    era: '13-15세기',
    category: '휴대 소품/파우치',
    frequency: 50
  },
  {
    id: 'lex-6',
    term: '푸르푸앵',
    romanTerm: 'Pourpoint',
    count: 3,
    definition: '몸에 딱 맞는 누비 조끼 형태로, 갑옷 안감으로 입거나 하의 호즈(Hose)를 끈(포인트)으로 결속하는 남성 상의.',
    era: '14-15세기',
    category: '상의/언더가먼트',
    frequency: 45
  },
  {
    id: 'lex-7',
    term: '호펠랑드',
    romanTerm: 'Houppelande',
    count: 6,
    definition: '풍성한 주름과 바닥까지 끌리는 긴 소매, 높은 칼라를 가진 14세기 말-15세기 북유럽 부유 시민과 귀족의 겉옷.',
    era: '14-15세기',
    category: '외투/로브',
    frequency: 78
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
