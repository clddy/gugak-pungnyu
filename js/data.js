// 목데이터 — 실제 서비스에서는 서버 API로 대체 (국악)
// tier: 프로(국공립·직업) | 전공·입시 | 교육·취미 | 오브리(행사·축제·의례)
const JOBS = [
  {
    id: 1, type: "offer", cat: "객원/대타", tier: "프로", inst: "현악", instDetail: "가야금",
    title: "시립국악관현악단 정기공연 가야금 객원 2명 급구",
    org: "○○시립국악관현악단", region: "서울", pay: "회당 15만원 (연습 3회 포함)",
    when: "연습 7/21~23, 공연 7/25(금)",
    personnel: "가야금 2명", qualification: "국악과 졸업 이상 또는 동등 경력",
    rehearsal: "7/21(화)~23(목) 19시 · 단 연습실", concertDate: "7/25(금) 저녁 · 국악당 대극장",
    program: "창작 국악관현악 <혼>, 김희조 뱃노래 주제에 의한 변주곡",
    date: "2026-07-06", deadline: "2026-07-12", urgent: true,
    body: "7월 정기공연 가야금 객원 2명을 모십니다.\n\n· 연습: 7/21~23 저녁 7시, 공연 7/25(금) 저녁\n· 25현 가야금 지참(악단 보유 3대 대여 가능)\n· 창작 국악관현악 위주\n\n이력과 연주 영상 링크를 보내주세요."
  },
  {
    id: 2, type: "offer", cat: "반주", tier: "전공·입시", inst: "타악", instDetail: "북",
    title: "판소리 입시 고수(북 반주) 구합니다 (주 2회)",
    org: "서초 ○○판소리연구소", region: "서울", pay: "회당 6만원",
    when: "화/금 오후",
    qualification: "고법 경력자, 단가·눈대목 반주 가능",
    date: "2026-07-05", deadline: "상시", urgent: false,
    body: "판소리 입시생 소리 공부를 함께할 고수님을 찾습니다.\n\n· 춘향가·심청가 눈대목 중심\n· 진양~자진모리 장단 능숙\n· 오래 함께하실 분 우대"
  },
  {
    id: 3, type: "offer", cat: "행사연주", tier: "오브리", inst: "타악", instDetail: "사물놀이",
    title: "개업·잔치 사물놀이 팀 단원 (주말 위주)",
    org: "신명나라 이벤트", region: "경기", pay: "건당 12만원 + 교통비",
    when: "주말 1~3건",
    personnel: "꽹과리·장구·북·징 각 1",
    date: "2026-07-04", deadline: "2026-07-20", urgent: false,
    body: "수도권 개업·돌잔치·축제 사물놀이 상시 팀원을 모집합니다.\n\n· 웃다리·삼도농악 판제 숙지\n· 상모 가능자 우대, 차량 소지 우대"
  },
  {
    id: 4, type: "offer", cat: "단원모집", tier: "프로", inst: "관악", instDetail: "대금",
    title: "국악관현악단 대금 단원 오디션 (정단원 1명)",
    org: "△△시립국악단", region: "인천", pay: "규정 급여 (정단원)",
    personnel: "대금 1명", qualification: "국악과 졸업 이상",
    contract: "정단원 · 1년 계약 후 심사 위촉", auditionDate: "8/18(화) 지정곡 + 시창",
    date: "2026-07-03", deadline: "2026-07-25", urgent: false,
    body: "대금 정단원 1명을 공개 오디션으로 선발합니다.\n\n· 지정곡: 대금산조(한 바탕 중 발췌), 정악(청성곡)\n· 국악관현악 발췌 별도 공지\n· 4대 보험, 정기공연 다수"
  },
  {
    id: 5, type: "offer", cat: "강사/레슨", tier: "교육·취미", inst: "현악", instDetail: "가야금",
    title: "방과후 가야금 강사 모집 (초등, 주 2일)",
    org: "인천 ○○초 방과후", region: "인천", pay: "시간당 4만원",
    when: "주 2일 (요일 협의)",
    qualification: "국악과 졸업 또는 지도 경력",
    date: "2026-07-02", deadline: "상시", urgent: false,
    body: "초등 방과후 가야금반 지도 강사님을 모십니다.\n\n· 12현 가야금(교육용 보유)\n· 기초 산조·민요 반주 지도\n· 성범죄경력 조회 필수"
  },
  {
    id: 6, type: "offer", cat: "지휘/음악감독", tier: "프로", inst: "지휘", instDetail: "지휘·집박",
    title: "청소년 국악관현악단 상임지휘자 초빙",
    org: "○○문화재단", region: "경기", pay: "월 사례비 협의",
    when: "주 1회 연습 + 연 2회 공연",
    qualification: "국악관현악 지휘·편곡 가능",
    date: "2026-07-01", deadline: "2026-07-31", urgent: false,
    body: "청소년 국악관현악단을 이끌어주실 지휘자님을 찾습니다.\n\n· 창작곡 편곡 가능하신 분 우대\n· 청소년 지도 경험 우대"
  },
  {
    id: 7, type: "offer", cat: "강사/레슨", tier: "전공·입시", inst: "현악", instDetail: "해금",
    title: "유스 국악관현악단 해금 파트 트레이너",
    org: "대전 청소년국악단", region: "대전", pay: "회당 10만원",
    when: "격주 토 오후",
    date: "2026-06-30", deadline: "2026-07-25", urgent: false,
    body: "청소년 국악관현악단 해금 파트 지도 선생님을 모집합니다.\n\n· 여름 캠프(8월 첫째 주) 참여 가능\n· 파트 연습·합주 지도"
  },
  {
    id: 8, type: "offer", cat: "단원모집", tier: "프로", inst: "성악", instDetail: "판소리",
    title: "국립 창극단 소리 단원 오디션 (남·여)",
    org: "국립○○창극단", region: "서울", pay: "규정 급여 (정단원)",
    personnel: "소리 단원 2명", qualification: "판소리 전공, 완창 경력 우대",
    contract: "정단원 · 4대 보험", auditionDate: "1차 서류·영상 / 2차 실기(눈대목 1대목 + 지정)",
    date: "2026-06-28", deadline: "2026-07-18", urgent: false,
    body: "창극단 소리 단원 2명을 오디션으로 선발합니다.\n\n· 1차 서류 및 영상\n· 2차 실기(자유 눈대목 + 지정 대목)\n· 연 2회 정기공연 외 다수"
  },
  {
    id: 9, type: "seek", cat: "객원/대타", tier: "프로", inst: "현악", instDetail: "해금",
    title: "[해금] 국악관현악 객원·행사 연주 가능합니다",
    org: "김○○ (국악과 석사 졸)", region: "서울", pay: "협의",
    date: "2026-07-06", deadline: "상시", urgent: false,
    body: "해금 전공, 국악과 석사 졸업했습니다.\n\n· 시립국악단 객원 경력 3년\n· 창작·정악·반주 모두 가능\n· 수도권·충청 이동 가능\n\n연주 영상 포트폴리오 보유."
  },
  {
    id: 10, type: "seek", cat: "행사연주", tier: "오브리", inst: "관악", instDetail: "피리",
    title: "[피리·태평소] 잔치·의례·축제 연주",
    org: "이○○", region: "경기", pay: "건당 협의",
    date: "2026-07-03", deadline: "상시", urgent: false,
    body: "피리·태평소 전공입니다.\n\n· 대취타·시나위·굿거리 가능\n· 개업·행사·전통혼례 다수\n· 경기·서울 활동"
  },
  {
    id: 11, type: "seek", cat: "반주", tier: "전공·입시", inst: "타악", instDetail: "장구",
    title: "[장구] 무용·민요 반주, 입시 장단 반주 가능",
    org: "박○○", region: "서울", pay: "시간당 4만원~",
    date: "2026-07-01", deadline: "상시", urgent: false,
    body: "장구 반주 전문입니다.\n\n· 살풀이·태평무 등 무용 반주\n· 민요·판소리 장단\n· 입시 반주 경력 5년"
  },
  {
    id: 12, type: "offer", cat: "행사연주", tier: "오브리", inst: "현악", instDetail: "가야금",
    title: "전통 혼례 가야금 병창·산조 연주자 섭외",
    org: "고운날 웨딩", region: "서울", pay: "건당 18만원",
    when: "주말 예식",
    date: "2026-06-27", deadline: "2026-08-01", urgent: false,
    body: "전통 혼례·행사 가야금 병창 연주자를 섭외합니다.\n\n· 병창 레퍼토리(사랑가·새타령 등) 보유자\n· 한복·이동 가능자"
  },
  {
    id: 13, type: "offer", cat: "객원/대타", tier: "전공·입시", inst: "타악", instDetail: "아쟁",
    instDetails: ["아쟁", "장구"],
    title: "청소년 국악축제 객원 — 아쟁1·타악2 (재학생만)",
    org: "○○청소년 국악축제", region: "경기", pay: "페이 20만원",
    when: "8/9·8/15 연습, 8/16 공연",
    personnel: "아쟁 1 · 타악 2", qualification: "국악과 학부·석사 재학생",
    rehearsal: "8/9·8/15 · 성남 연습실", concertDate: "8/16(일) 17시 · 아트센터",
    program: "창작 국악관현악, 사물놀이 협주곡",
    date: "2026-07-06", deadline: "2026-08-01", urgent: false,
    body: "학부·석사 재학생 객원을 모집합니다(졸업생 불가).\n\n· 아쟁 1, 타악(장구·꽹과리) 2\n· 연습·공연 모두 성남 지역\n· 카톡으로 연락 주세요."
  },
  {
    id: 14, type: "offer", cat: "강사/레슨", tier: "교육·취미", inst: "관악", instDetail: "단소",
    title: "문화센터 단소·소금 강사 (성인 취미)",
    org: "수원 ○○문화센터", region: "경기", pay: "레슨당 3.5만원",
    when: "주 1일 (오전)",
    date: "2026-06-25", deadline: "상시", urgent: false,
    body: "성인 취미 단소·소금 강사님을 모십니다.\n\n· 기초 운지·정간보 지도\n· 국악과 졸업 또는 지도 경력"
  }
];

const CATS = ["객원/대타", "단원모집", "반주", "행사연주", "강사/레슨", "지휘/음악감독"];
