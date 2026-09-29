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
  let era = '전체 시대 (12C ~ 17C)';
  if (q.includes('12세기') || q.includes('12c') || q.includes('십자군')) {
    era = '12세기 (십자군 시대)';
  } else if (q.includes('13세기') || q.includes('13c')) {
    era = '13세기 (중세 성기)';
  } else if (q.includes('14세기') || q.includes('14c') || q.includes('백년전쟁')) {
    era = '14세기 (고딕 / 백년전쟁)';
  } else if (q.includes('15세기') || q.includes('15c') || q.includes('아쟁쿠르')) {
    era = '15세기 (르네상스 / 아쟁쿠르)';
  } else if (q.includes('16세기') || q.includes('16c') || q.includes('튜더')) {
    era = '16세기 (튜더 왕조 르네상스)';
  } else if (q.includes('17세기') || q.includes('17c') || q.includes('바로크') || q.includes('네덜란드')) {
    era = '17세기 (네덜란드 황금기 / 바로크)';
  } else if (q.includes('중세')) {
    era = '중세 (12~14세기)';
  } else if (q.includes('르네상스')) {
    era = '15~16세기 르네상스';
  }

  // 2. Region detection
  let region = '유럽 전역 (Pan-Europe)';
  if (q.includes('북독일') || q.includes('뤼베크') || q.includes('함부르크') || q.includes('한자')) {
    region = '북독일 / 한자 동맹';
  } else if (q.includes('영국') || q.includes('잉글랜드') || q.includes('튜더') || q.includes('런던')) {
    region = '잉글랜드 / 브리튼';
  } else if (q.includes('프랑스') || q.includes('아쟁쿠르')) {
    region = '프랑스 왕국';
  } else if (q.includes('이탈리아') || q.includes('로마') || q.includes('피에몬테') || q.includes('바티칸') || q.includes('베네치아')) {
    region = '이탈리아 반도 (로마/피에몬테)';
  } else if (q.includes('네덜란드') || q.includes('플랑드르') || q.includes('델프트')) {
    region = '네덜란드 / 플랑드르';
  } else if (q.includes('스코틀랜드')) {
    region = '스코틀랜드 하이랜드';
  } else if (q.includes('예루살렘') || q.includes('레반트')) {
    region = '레반트 / 예루살렘';
  }

  // 3. Social Status detection
  let status = '전체 계층';
  if (q.includes('상인') || q.includes('길드') || q.includes('선주') || q.includes('시민')) {
    status = '상인·길드 시민 계급';
  } else if (q.includes('기사') || q.includes('갑옷') || q.includes('갑주') || q.includes('군인') || q.includes('전투') || q.includes('무구') || q.includes('전사')) {
    status = '기사·무관 전사 계층';
  } else if (q.includes('수도사') || q.includes('수녀') || q.includes('신부') || q.includes('성직자') || q.includes('수도원')) {
    status = '수도회 성직자 계급';
  } else if (q.includes('왕') || q.includes('왕비') || q.includes('귀족') || q.includes('궁정') || q.includes('공주') || q.includes('영주')) {
    status = '왕실 및 대귀족 계급';
  } else if (q.includes('하녀') || q.includes('서민') || q.includes('평민') || q.includes('농민')) {
    status = '도시 평민·하녀 계층';
  }

  // 4. Gender detection
  let gender = '전체 (남녀 공용)';
  if (q.includes('여성') || q.includes('여인') || q.includes('부인') || q.includes('소녀') || q.includes('왕비') || q.includes('수녀') || q.includes('드레스') || q.includes('베일') || q.includes('코르셋')) {
    gender = '여성 (Frau / Lady)';
  } else if (q.includes('남성') || q.includes('기사') || q.includes('수도사') || q.includes('왕') || q.includes('선주') || q.includes('더블릿') || q.includes('갑옷')) {
    gender = '남성 (Lord / Knight)';
  }

  // 5. Garment elements detection
  const detectedGarments: string[] = [];
  const garmentDictionary: Record<string, string> = {
    '크루젤러': '크루젤러(주름 베일)',
    '윔플': '윔플(Wimple)',
    '베일': '린넨 베일',
    '슈르코': '모직 슈르코(Surcoat)',
    '코트하르디': '코트하르디(Cottehardie)',
    '갬비슨': '누비 갬비슨(Gambeson)',
    '갑옷': '판금/사슬 갑주',
    '갑주': '강철 갑주',
    '사슬': '체인메일(Hauberk)',
    '샤프롱': '샤프롱(Chaperon)',
    '더블릿': '더블릿(Doublet)',
    '게이블': '게이블 후드(Gable Hood)',
    '후드': '카울/게이블 후드',
    '코르셋': '본 코르셋(Kirtle)',
    '카울': '카울 후드(Cowl)',
    '해빗': '수도사 복식(Habit)',
    '호펠랑드': '호펠랑드(Houppelande)',
    '린넨': '천연 린넨',
    '모직': '고밀도 울(Wool)',
    '울': '방모직 울',
    '벨벳': '실크 벨벳',
    '대청': '대청(Woad) 식물염색',
    '아모니에르': '아모니에르(파우치)',
    '버클': '놋쇠 버클 벨트',
    '헤드랩': '린넨 헤드랩'
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
 * Searches records using multi-tiered semantic scoring
 */
export function searchHistoricalRecords(
  records: HistoricalRecord[],
  query: string,
  filterAccuracy: string = 'all',
  filterEra: string = 'all'
): SearchResult[] {
  const cleanQ = query.trim().toLowerCase();
  const tokens = cleanQ.split(/\s+/).filter(t => t.length > 0);

  const results: SearchResult[] = records.map(record => {
    let score = 0;
    const matchReasons: string[] = [];

    // Filter checks
    if (filterAccuracy !== 'all' && record.accuracyGrade !== filterAccuracy) {
      return { record, score: -1, matchReasons: [] };
    }

    if (filterEra !== 'all' && !record.era.includes(filterEra) && !record.eraCategory.includes(filterEra)) {
      return { record, score: -1, matchReasons: [] };
    }

    // Default base score is based on costume accuracy
    score += record.accuracyScore * 0.5;

    if (tokens.length === 0) {
      return { record, score, matchReasons: ['사료 신뢰도 종합 평가순'] };
    }

    const titleLower = record.title.toLowerCase();
    const origLower = record.originalTitle.toLowerCase();
    const eraLower = record.era.toLowerCase();
    const regionLower = record.region.toLowerCase();
    const guildLower = record.guild.toLowerCase();
    const statusLower = record.socialStatus.toLowerCase();
    const summaryLower = record.judgmentSummary.toLowerCase();
    const tipsLower = record.creatorTips.toLowerCase();
    const tagsLower = record.tags.map(t => t.toLowerCase()).join(' ');
    const partsLower = record.parts.map(p => `${p.title} ${p.partName} ${p.description}`).join(' ').toLowerCase();

    for (const token of tokens) {
      // 1. Direct Title Match (+100)
      if (titleLower.includes(token) || origLower.includes(token)) {
        score += 100;
        matchReasons.push(`작품명 일치: "${token}"`);
      }

      // 2. Era Match (+40)
      if (eraLower.includes(token)) {
        score += 45;
        matchReasons.push(`시대 일치 (${token})`);
      }

      // 3. Garments & Anatomy Match (+50)
      if (partsLower.includes(token) || tagsLower.includes(token)) {
        score += 50;
        matchReasons.push(`복식 구성 일치: #${token}`);
      }

      // 4. Region or Guild Match (+35)
      if (regionLower.includes(token) || guildLower.includes(token)) {
        score += 35;
        matchReasons.push(`지역·길드 일치: ${token}`);
      }

      // 5. Social Status Match (+30)
      if (statusLower.includes(token)) {
        score += 30;
        matchReasons.push(`신분·계층 일치: ${token}`);
      }

      // 6. Curatorial Summary or Tips Match (+20)
      if (summaryLower.includes(token) || tipsLower.includes(token)) {
        score += 20;
        if (!matchReasons.some(r => r.includes('사료 고증'))) {
          matchReasons.push(`사료 고증 분석 키워드 일치`);
        }
      }
    }

    // Deduplicate match reasons
    const uniqueReasons = Array.from(new Set(matchReasons));

    return {
      record,
      score,
      matchReasons: uniqueReasons
    };
  });

  return results
    .filter(r => r.score >= 0)
    .sort((a, b) => b.score - a.score);
}
