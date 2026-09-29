import { HistoricalRecord } from '../types';
import { AiParsedCriteria } from '../components/modals/AiFilterModal';

export interface SearchResult {
  record: HistoricalRecord;
  score: number;
  matchReasons: string[];
}

/**
 * Intelligent natural language parser for historical costume research
 */
export function parseNaturalLanguageQuery(query: string): AiParsedCriteria {
  const q = query.trim().toLowerCase();

  // 1. Era detection
  let era = '전체 시대 (BC ~ 19C)';
  if (q.includes('고대') || q.includes('로마') || q.includes('그리스') || q.includes('검투사') || q.includes('글래디에이터') || q.includes('벤허') || q.includes('클레오파트라')) {
    era = '고대 그리스·로마 (BC 1C ~ AD 2C)';
  } else if (q.includes('12세기') || q.includes('12c') || q.includes('십자군')) {
    era = '12세기 (십자군 시대)';
  } else if (q.includes('13세기') || q.includes('13c')) {
    era = '13세기 (중세 성기)';
  } else if (q.includes('14세기') || q.includes('14c') || q.includes('백년전쟁') || q.includes('장미의 이름') || q.includes('라스트 듀얼')) {
    era = '14세기 (고딕 / 백년전쟁)';
  } else if (q.includes('15세기') || q.includes('15c') || q.includes('아쟁쿠르') || q.includes('더 킹') || q.includes('헨리 5세')) {
    era = '15세기 (르네상스 / 백년전쟁)';
  } else if (q.includes('16세기') || q.includes('16c') || q.includes('튜더') || q.includes('울프 홀') || q.includes('엘리자베스') || q.includes('불린')) {
    era = '16세기 (튜더 왕조 르네상스)';
  } else if (q.includes('17세기') || q.includes('17c') || q.includes('바로크') || q.includes('네덜란드') || q.includes('베르메르') || q.includes('남한산성') || q.includes('병자호란')) {
    era = '17세기 (네덜란드 황금기 / 바로크 / 조선 중기)';
  } else if (q.includes('18세기') || q.includes('18c') || q.includes('로코코') || q.includes('조지') || q.includes('배리') || q.includes('베리') || q.includes('앙투아네트') || q.includes('상의원') || q.includes('사도')) {
    era = '18세기 (로코코 / 조지 왕조 / 조선 후기)';
  } else if (q.includes('19세기') || q.includes('19c') || q.includes('빅토리아') || q.includes('섭정') || q.includes('리젠시') || q.includes('남북전쟁') || q.includes('오만과 편견') || q.includes('작은 아씨들') || q.includes('엠마')) {
    era = '19세기 (섭정기 / 빅토리아 / 남북전쟁)';
  } else if (q.includes('중세')) {
    era = '중세 (12~14세기)';
  } else if (q.includes('르네상스')) {
    era = '15~16세기 르네상스';
  } else if (q.includes('조선') || q.includes('한복')) {
    era = '조선 왕조 (17~18세기)';
  }

  // 2. Region detection
  let region = '유럽 및 동아시아 (Pan-Region)';
  if (q.includes('조선') || q.includes('한국') || q.includes('한양') || q.includes('한복') || q.includes('상의원') || q.includes('사도') || q.includes('남한산성')) {
    region = '조선 한양 왕실';
  } else if (q.includes('북독일') || q.includes('뤼베크') || q.includes('함부르크') || q.includes('한자')) {
    region = '북독일 / 한자 동맹';
  } else if (q.includes('영국') || q.includes('잉글랜드') || q.includes('튜더') || q.includes('런던') || q.includes('조지') || q.includes('울프 홀') || q.includes('오만과 편견')) {
    region = '잉글랜드 / 브리튼 왕국';
  } else if (q.includes('프랑스') || q.includes('베르사유') || q.includes('파리') || q.includes('아쟁쿠르') || q.includes('앙투아네트') || q.includes('라스트 듀얼')) {
    region = '프랑스 왕국 (파리/베르사유)';
  } else if (q.includes('이탈리아') || q.includes('로마') || q.includes('피에몬테') || q.includes('바티칸') || q.includes('베네치아') || q.includes('장미의 이름')) {
    region = '이탈리아 반도 (로마/피에몬테)';
  } else if (q.includes('네덜란드') || q.includes('플랑드르') || q.includes('델프트') || q.includes('베르메르')) {
    region = '네덜란드 (델프트)';
  } else if (q.includes('스코틀랜드') || q.includes('하이랜드') || q.includes('아웃로')) {
    region = '스코틀랜드 하이랜드';
  } else if (q.includes('예루살렘') || q.includes('레반트') || q.includes('십자군')) {
    region = '레반트 / 예루살렘 왕국';
  } else if (q.includes('미국') || q.includes('남북전쟁') || q.includes('작은 아씨들') || q.includes('순수의 시대')) {
    region = '미국 (뉴잉글랜드/뉴욕)';
  }

  // 3. Social Status detection
  let status = '전체 계층';
  if (q.includes('십자군') || q.includes('기사') || q.includes('갑옷') || q.includes('갑주') || q.includes('군인') || q.includes('전투') || q.includes('무구') || q.includes('전사') || q.includes('군대')) {
    status = '기사·무관 군사 계층';
  } else if (q.includes('수도사') || q.includes('수녀') || q.includes('신부') || q.includes('성직자') || q.includes('수도원')) {
    status = '수도회 성직자 계급';
  } else if (q.includes('왕') || q.includes('왕비') || q.includes('귀족') || q.includes('궁정') || q.includes('공주') || q.includes('영주') || q.includes('헨리') || q.includes('앙투아네트') || q.includes('영조')) {
    status = '왕실 및 대귀족 계급';
  } else if (q.includes('검투사') || q.includes('글래디에이터')) {
    status = '검투사 및 군단병';
  } else if (q.includes('상인') || q.includes('길드') || q.includes('선주') || q.includes('시민') || q.includes('화가')) {
    status = '상인·길드 시민 계급';
  } else if (q.includes('하녀') || q.includes('서민') || q.includes('평민') || q.includes('농민')) {
    status = '도시 평민·하녀 계층';
  } else if (q.includes('침선장') || q.includes('바느질') || q.includes('재단사')) {
    status = '왕실 침선장 장인';
  }

  // 4. Gender detection
  let gender = '전체 (남녀 공용)';
  if (q.includes('여성') || q.includes('여인') || q.includes('부인') || q.includes('소녀') || q.includes('왕비') || q.includes('수녀') || q.includes('드레스') || q.includes('베일') || q.includes('코르셋') || q.includes('파니에') || q.includes('크리놀린') || q.includes('적의')) {
    gender = '여성 (Lady)';
  } else if (q.includes('남성') || q.includes('기사') || q.includes('수도사') || q.includes('왕') || q.includes('선주') || q.includes('더블릿') || q.includes('갑옷') || q.includes('프록코트') || q.includes('곤룡포') || q.includes('도포')) {
    gender = '남성 (Lord / Knight)';
  }

  // 5. Garment elements detection
  const detectedGarments: string[] = [];
  const garmentDictionary: Record<string, string> = {
    '십자군': '십자군 튜닉 & 슈르코',
    '게이블': '게이블 후드(Gable Hood)',
    '프렌치': '프렌치 후드(French Hood)',
    '크루젤러': '크루젤러(주름 베일)',
    '윔플': '윔플(Wimple)',
    '베일': '린넨 베일',
    '슈르코': '모직 슈르코(Surcoat)',
    '코트하르디': '코트하르디(Cottehardie)',
    '갬비슨': '누비 갬비슨(Gambeson)',
    '갑옷': '강철 판금/사슬 갑주',
    '갑주': '강철 갑주',
    '사슬': '쇠사슬 갑옷(Hauberk)',
    '체인메일': '체인메일(Hauberk)',
    '바시넷': '바시넷(Bascinet) 투구',
    '케틀햇': '케틀햇(Kettle Hat) 철모',
    '샤프롱': '샤프롱(Chaperon)',
    '우플랑드': '우플랑드(Houppelande)',
    '더블릿': '더블릿(Doublet)',
    '후드': '카울/게이블 후드',
    '코르셋': '본 코르셋(Corset)',
    '스테이즈': '스테이즈(Stays)',
    '카울': '카울 후드(Cowl)',
    '해빗': '수도사 복식(Habit)',
    '파니에': '파니에(Pannier)',
    '프록코트': '울 프록 코트(Frock Coat)',
    '웨이스트코트': '웨이스트코트(조끼)',
    '엠파이어': '엠파이어 실루엣 드레스',
    '스펜서': '스펜서(Spencer) 재킷',
    '펠리스': '펠리스(Pelisse) 코트',
    '크리놀린': '크리놀린(Crinoline)',
    '버슬': '버슬(Bustle) 드레스',
    '토가': '로마 토가(Toga)',
    '튜니카': '튜니카(Tunica)',
    '적의': '중전 대례복 진봉 적의(翟衣)',
    '곤룡포': '국왕 곤룡포(袞龍袍)',
    '도포': '사대부 도포(道袍)',
    '두정갑': '조선군 두정갑(頭釘甲)',
    '이엄': '방한용 털모자 이엄(耳掩)',
    '린넨': '천연 린넨',
    '모직': '고밀도 울(Wool)',
    '울': '방모직 울',
    '벨벳': '실크 벨벳'
  };

  for (const [k, v] of Object.entries(garmentDictionary)) {
    if (q.includes(k) && !detectedGarments.includes(v)) {
      detectedGarments.push(v);
    }
  }

  const garments = detectedGarments.length > 0
    ? detectedGarments.join(', ')
    : '해당 시대 대표 의복 구성 일체';

  return {
    era,
    region,
    status,
    gender,
    garments
  };
}

/**
 * Common film title phonetic aliases and keyword dictionary
 */
const FILM_ALIAS_MAP: Record<string, string[]> = {
  'barry-lyndon': ['배리 린든', '베리 린든', '배리린든', '베리린든', 'barry lyndon', 'barry', '큐브릭', '조지왕조', '프록코트', '18세기 유럽 군복'],
  'kingdom-of-heaven': ['킹덤 오브 헤븐', '킹덤오브헤븐', 'kingdom of heaven', '십자군', '예루살렘', '발리앙', '사슬갑옷', '체인메일', '리들리 스콧'],
  'wolf-hall': ['울프 홀', '울프홀', 'wolf hall', '게이블 후드', '게이블후드', '튜더', '헨리 8세', '토머스 크롬웰', '마크 라일런스'],
  'other-boleyn-girl': ['천일의 스캔들', '천일의스캔들', 'the other boleyn girl', '앤 불린', '앤불린', '메리 불린', '프렌치 후드'],
  'the-king-henry-v': ['더 킹: 헨리 5세', '더 킹', '더킹', '헨리 5세', '헨리5세', 'the king', '아쟁쿠르', '티모시 샬라메'],
  'name-of-the-rose': ['장미의 이름', '장미의이름', 'the name of the rose', '수도사', '수도원', '카울 후드', '카울후드', '해빗', '움베르토 에코', '숀 코너리'],
  'the-last-duel': ['라스트 듀얼: 최후의 결투', '라스트 듀얼', '라스트듀얼', '최후의 결투', 'the last duel', '백년전쟁', '바시넷', '바시넷 투구', '윔플', '멧 데이먼', '아담 드라이버'],
  'outlaw-king': ['아웃로 킹', '아웃로킹', 'outlaw king', '스코틀랜드', '로버트 브루스', '케틀햇', '철모', '크리스 파인'],
  'girl-pearl-earring': ['진주 귀걸이를 한 소녀', '진주 귀걸이', '진주귀걸이', 'girl with a pearl earring', '베르메르', '델프트', '스칼렛 요한슨', '헤드랩'],
  'marie-antoinette': ['마리 앙투아네트', '마리앙투아네트', 'marie antoinette', '로코코', '파니에', '베르사유', '커스틴 던스트', '소피아 코폴라'],
  'pride-and-prejudice': ['오만과 편견', '오만과편견', 'pride and prejudice', 'pride & prejudice', '엠파이어 드레스', '스펜서', '제인 오스틴', '키이라 나이틀리', '다아시'],
  'gladiator': ['글래디에이터', 'gladiator', '로마', '검투사', '막시무스', '러셀 크로우', '토가', '흉갑'],
  'little-women': ['작은 아씨들', '작은아씨들', 'little women', '남북전쟁', '크리놀린', '조 마치', '웨이스트코트', '그레타 거윅'],
  'royal-tailor': ['상의원', 'the royal tailor', '조선', '한복', '적의', '곤룡포', '도포', '조돌석', '이공진', '한석규', '고수', '박신혜'],
  'the-throne': ['사도', 'the throne', '영조', '사도세자', '송강호', '유아인', '조선', '융복', '철릭', '상복'],
  'the-fortress': ['남한산성', 'the fortress', '병자호란', '인조', '이병헌', '김윤석', '두정갑', '철갑', '이엄', '전립'],
  'elizabeth-1998': ['엘리자베스', 'elizabeth', '케이트 블란쳇', '러프 칼라', '러프', '파딩게일', '16세기'],
  'dangerous-liaisons': ['위험한 관계', 'dangerous liaisons', '스테이즈', '글렌 클로즈', '존 말코비치', '미셸 파이퍼', '로코코 드레스'],
  'the-duchess': ['공작부인: 세기의 스캔들', '공작부인', 'the duchess', '조지아나', '키이라 나이틀리', '18세기 영국'],
  'emma-2020': ['엠마', 'emma', '안야 테일러 조이', '펠리스', '셔미제트', '본넷', '리젠시'],
  'age-of-innocence': ['순수의 시대', 'the age of innocence', '다니엘 데이 루이스', '미셸 파이퍼', '버슬', '도금시대'],
  'young-victoria': ['영 빅토리아', 'the young victoria', '에밀리 블런트', '빅토리아 여왕', '웨딩드레스'],
  'ben-hur': ['벤허', 'ben-hur', '찰톤 헤스톤', '로마 군단', '키톤', '전차경주'],
  'le-roi-danse': ['왕의 춤', 'le roi danse', '루이 14세', '쥐스토코르', '페리위그', '바로크 궁정']
};

/**
 * Cleans user query into meaningful tokens
 */
function extractSearchTokens(rawQuery: string): string[] {
  // Normalize query
  const cleaned = rawQuery
    .replace(/[#,.:;?!~'"(){}[\]/\\|`^]/g, ' ')
    .trim()
    .toLowerCase();

  if (!cleaned) return [];

  // Stop words in Korean that don't add historical search value on their own
  const stopWords = new Set([
    '의', '에', '을', '를', '과', '와', '은', '는', '이', '가',
    '한', '및', '관련', '비교', '추천', '검색', '있는', '등의',
    '보여줘', '알려줘', '찾아줘', '어떤'
  ]);

  const rawTokens = cleaned.split(/\s+/).filter(t => t.length > 0 && !stopWords.has(t));
  return Array.from(new Set(rawTokens));
}

/**
 * Searches records using strictly matched semantic & keyword scoring.
 *
 * CRITICAL RULE:
 * When a query is provided, records MUST match at least one search token/alias.
 * Records that have zero match with the query will NEVER be returned.
 */
export function searchHistoricalRecords(
  records: HistoricalRecord[],
  query: string,
  filterAccuracy: string = 'all',
  filterEra: string = 'all'
): SearchResult[] {
  const cleanQ = query.trim().toLowerCase();
  const tokens = extractSearchTokens(cleanQ);

  const results: SearchResult[] = records.map(record => {
    // 1. Check dropdown / button filters first
    if (filterAccuracy !== 'all' && record.accuracyGrade !== filterAccuracy) {
      return { record, score: -1, matchReasons: [] };
    }

    if (filterEra !== 'all') {
      const eraFilterNorm = filterEra.toLowerCase();
      const inEra = record.era.toLowerCase().includes(eraFilterNorm) ||
                    record.eraCategory.toLowerCase().includes(eraFilterNorm);
      if (!inEra) {
        return { record, score: -1, matchReasons: [] };
      }
    }

    // 2. If NO search query provided, return all filtered records sorted by accuracy
    if (tokens.length === 0 && !cleanQ) {
      return {
        record,
        score: record.accuracyScore + (record.year ? (record.year % 100) * 0.01 : 0),
        matchReasons: ['사료 신뢰도 종합 평가순']
      };
    }

    // 3. Search query is provided -> STRICT MATCHING EVALUATION
    let matchScore = 0;
    let matchedTokensCount = 0;
    const matchReasons: string[] = [];

    // Check pre-configured film aliases
    const aliases = [
      ...(FILM_ALIAS_MAP[record.id] || []),
      ...(record.aliases || [])
    ].map(a => a.toLowerCase());

    // Check if the entire clean query matches an alias
    let matchedWholeAlias = false;
    for (const alias of aliases) {
      if (cleanQ.includes(alias) || alias.includes(cleanQ)) {
        matchedWholeAlias = true;
        matchScore += 180;
        matchedTokensCount += 2;
        matchReasons.push(`작품/대표 키워드 일치: "${alias}"`);
        break;
      }
    }

    // Prepare lowercased text fields for matching
    const titleLower = record.title.toLowerCase();
    const origLower = record.originalTitle.toLowerCase();
    const eraLower = record.era.toLowerCase();
    const eraCatLower = record.eraCategory.toLowerCase();
    const regionLower = record.region.toLowerCase();
    const guildLower = record.guild.toLowerCase();
    const statusLower = record.socialStatus.toLowerCase();
    const catLower = record.category.toLowerCase();
    const summaryLower = record.judgmentSummary.toLowerCase();
    const tipsLower = record.creatorTips.toLowerCase();
    const tagsCombined = record.tags.map(t => t.toLowerCase()).join(' ');
    const partsCombined = record.parts
      .map(p => `${p.title} ${p.partName} ${p.subtitle} ${p.description} ${p.material}`)
      .join(' ')
      .toLowerCase();

    for (const token of tokens) {
      let tokenMatched = false;

      // Check Alias
      if (!matchedWholeAlias && aliases.some(a => a.includes(token))) {
        matchScore += 120;
        tokenMatched = true;
        matchReasons.push(`대표 키워드: ${token}`);
      }

      // Title & Original Title Match (+100)
      if (titleLower.includes(token) || origLower.includes(token)) {
        matchScore += 100;
        tokenMatched = true;
        matchReasons.push(`작품명 일치: "${token}"`);
      }

      // Era Match (+60)
      if (eraLower.includes(token) || eraCatLower.includes(token)) {
        matchScore += 60;
        tokenMatched = true;
        matchReasons.push(`시대 일치: ${token}`);
      }

      // Tags Match (+70)
      if (tagsCombined.includes(token)) {
        matchScore += 70;
        tokenMatched = true;
        matchReasons.push(`핵심 태그: #${token}`);
      }

      // Costume Parts & Anatomy (+50)
      if (partsCombined.includes(token) || catLower.includes(token)) {
        matchScore += 50;
        tokenMatched = true;
        matchReasons.push(`복식 구성 일치: ${token}`);
      }

      // Region & Guild Match (+35)
      if (regionLower.includes(token) || guildLower.includes(token)) {
        matchScore += 35;
        tokenMatched = true;
        matchReasons.push(`지역·길드 일치: ${token}`);
      }

      // Social Status & Role Match (+35)
      if (statusLower.includes(token)) {
        matchScore += 35;
        tokenMatched = true;
        matchReasons.push(`신분·계층 일치: ${token}`);
      }

      // Summary or Curatorial Tips Match (+25)
      if (summaryLower.includes(token) || tipsLower.includes(token)) {
        matchScore += 25;
        tokenMatched = true;
        if (!matchReasons.some(r => r.includes('사료 고증'))) {
          matchReasons.push(`사료 분석 키워드 일치`);
        }
      }

      if (tokenMatched) {
        matchedTokensCount++;
      }
    }

    // CRITICAL: If zero tokens and zero aliases matched, DISCARD the record completely!
    if (matchedTokensCount === 0 || matchScore === 0) {
      return { record, score: -1, matchReasons: [] };
    }

    // Final score weights matched tokens count + quality score + base accuracy
    const finalScore = (matchedTokensCount * 60) + matchScore + (record.accuracyScore * 0.1);

    return {
      record,
      score: finalScore,
      matchReasons: Array.from(new Set(matchReasons))
    };
  });

  // Filter out all non-matching records and sort by score descending
  return results
    .filter(r => r.score >= 0)
    .sort((a, b) => b.score - a.score);
}
