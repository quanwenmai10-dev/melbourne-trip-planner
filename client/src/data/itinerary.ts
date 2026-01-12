export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  cost: number;
  type: 'attraction' | 'dining' | 'transport' | 'rest';
  category?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  dayOfWeek: string;
  theme: string;
  activities: Activity[];
  totalCost: number;
  highlights: string[];
}

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: '1月30日',
    dayOfWeek: '周五',
    theme: '抵达与适应',
    activities: [
      {
        id: 'day1-1',
        time: '12:30 PM',
        title: '抵达墨尔本 T2',
        description: '国泰航空 CX105 航班抵达。办理入境手续，提取行李。',
        location: '墨尔本机场 T2',
        cost: 0,
        type: 'transport'
      },
      {
        id: 'day1-2',
        time: '14:00 PM',
        title: '前往住宿地',
        description: '乘坐 Uber Black 或私人接送前往 CBD。地址: 157 A\'Beckett Street',
        location: 'CBD',
        cost: 70,
        type: 'transport'
      },
      {
        id: 'day1-3',
        time: '15:00 PM',
        title: '办理入住 & 休息',
        description: '入住公寓，简单整理行李，适应时差。',
        location: '157 A\'Beckett Street',
        cost: 0,
        type: 'rest'
      },
      {
        id: 'day1-4',
        time: '16:30 PM',
        title: '生活采购',
        description: '前往 Hometown Asian Supermarket 购买食材，为家庭烹饪做准备。',
        location: 'Hometown Asian Supermarket',
        cost: 80,
        type: 'transport'
      },
      {
        id: 'day1-5',
        time: '18:30 PM',
        title: '家庭烹饪 / 休闲晚餐',
        description: '建议首晚在家简单烹饪，调整状态。或步行至附近的 Flower Drum (高端粤菜) 用餐。',
        location: 'CBD 公寓 / Flower Drum',
        cost: 0,
        type: 'dining'
      }
    ],
    totalCost: 150,
    highlights: ['抵达墨尔本', '购买 Myki 卡 ($50/人)', '适应时差']
  },
  {
    day: 2,
    date: '1月31日',
    dayOfWeek: '周六',
    theme: '艺术与高空体验',
    activities: [
      {
        id: 'day2-1',
        time: '10:00 AM',
        title: 'NGV 维多利亚国家美术馆',
        description: '参观 NGV Kids Summer Festival。体验 "Let\'s Party!" 儿童时尚展。',
        location: 'National Gallery of Victoria',
        cost: 0,
        type: 'attraction',
        category: '艺术'
      },
      {
        id: 'day2-2',
        time: '13:30 PM',
        title: 'ACMI 影像中心',
        description: '探索 Screen Worlds 展览。体验电影、电视和数字艺术的互动装置。',
        location: 'ACMI, Federation Square',
        cost: 0,
        type: 'attraction',
        category: '文化'
      },
      {
        id: 'day2-3',
        time: '16:00 PM',
        title: '联邦广场漫步',
        description: '欣赏亚拉河畔风景，感受墨尔本文化中心氛围。',
        location: 'Federation Square',
        cost: 0,
        type: 'attraction',
        category: '自然'
      },
      {
        id: 'day2-4',
        time: '18:30 PM',
        title: 'Lygon Street 美食街晚餐',
        description: '前往 "小意大利" 体验正宗意式美食。推荐: Tiamo 或 Scopri。',
        location: 'Lygon Street, Carlton',
        cost: 120,
        type: 'dining',
        category: '西餐'
      }
    ],
    totalCost: 120,
    highlights: ['免费美术馆和影像中心', '意式美食体验', '亚拉河畔风景']
  },
  {
    day: 3,
    date: '2月1日',
    dayOfWeek: '周日',
    theme: '历史与文化探索',
    activities: [
      {
        id: 'day3-1',
        time: '09:00 AM',
        title: '墨尔本博物馆',
        description: '探索澳洲历史、原住民文化和自然科学展览。适合10岁儿童的互动展区。',
        location: 'Melbourne Museum, Carlton Gardens',
        cost: 50,
        type: 'attraction',
        category: '文化'
      },
      {
        id: 'day3-2',
        time: '12:00 PM',
        title: '旧监狱参观',
        description: '参观历史悠久的旧监狱，了解澳洲殖民地历史。',
        location: 'Old Melbourne Gaol',
        cost: 45,
        type: 'attraction',
        category: '历史'
      },
      {
        id: 'day3-3',
        time: '14:30 PM',
        title: '午餐休息',
        description: '在博物馆附近的咖啡馆或餐厅用午餐。',
        location: 'Carlton',
        cost: 60,
        type: 'dining'
      },
      {
        id: 'day3-4',
        time: '18:30 PM',
        title: 'Lygon Street 意式晚餐',
        description: '继续体验 "小意大利" 的美食文化。推荐: Universal Restaurant (炸鸡排)。',
        location: 'Lygon Street, Carlton',
        cost: 120,
        type: 'dining',
        category: '西餐'
      }
    ],
    totalCost: 275,
    highlights: ['澳洲历史文化', '儿童友好的互动展', '意式美食']
  },
  {
    day: 4,
    date: '2月2日',
    dayOfWeek: '周一',
    theme: '天空与宇宙',
    activities: [
      {
        id: 'day4-1',
        time: '04:30 AM',
        title: 'Yarra Valley 热气球飞行',
        description: '在日出时分体验热气球飞行，俯瞰葡萄园美景。含香槟早餐和往返接送。',
        location: 'Yarra Valley',
        cost: 595,
        type: 'attraction',
        category: '豪华体验'
      },
      {
        id: 'day4-2',
        time: '13:00 PM',
        title: 'Scienceworks 科技馆',
        description: '参观 Melbourne Planetarium (16米圆顶天文馆)。体验互动科学展和 Lightning Room。',
        location: 'Scienceworks, Spotswood',
        cost: 50,
        type: 'attraction',
        category: '教育'
      },
      {
        id: 'day4-3',
        time: '17:00 PM',
        title: '简单晚餐',
        description: '早起后建议简单用餐并早些休息。',
        location: 'CBD 公寓',
        cost: 0,
        type: 'dining'
      }
    ],
    totalCost: 645,
    highlights: ['日出热气球体验', '天文馆沉浸式体验', '葡萄园美景']
  },
  {
    day: 5,
    date: '2月3日',
    dayOfWeek: '周二',
    theme: '蒸汽火车冒险',
    activities: [
      {
        id: 'day5-1',
        time: '09:30 AM',
        title: '抵达 Belgrave 车站',
        description: '提前60分钟办理登车手续。体验古老蒸汽火车的独特魅力。',
        location: 'Belgrave Station',
        cost: 0,
        type: 'transport'
      },
      {
        id: 'day5-2',
        time: '11:00 AM',
        title: '蒸汽火车发车',
        description: '体验著名的 "伸腿坐法" (Leg-dangling)。穿越丹德农山脉的原始雨林。',
        location: 'Puffing Billy Railway',
        cost: 224,
        type: 'attraction',
        category: '文化体验'
      },
      {
        id: 'day5-3',
        time: '12:00 PM',
        title: 'Lakeside 湖畔午餐',
        description: '在 Lakeside Visitor Centre 享用午餐。或在湖边野餐，享受自然风光。',
        location: 'Lakeside, Dandenong Ranges',
        cost: 50,
        type: 'dining'
      },
      {
        id: 'day5-4',
        time: '14:15 PM',
        title: '返程',
        description: '乘坐火车返回 Belgrave，结束愉快旅程。',
        location: 'Belgrave Station',
        cost: 0,
        type: 'transport'
      }
    ],
    totalCost: 274,
    highlights: ['蒸汽火车体验', '丹德农山脉雨林', '湖畔野餐']
  },
  {
    day: 6,
    date: '2月4日',
    dayOfWeek: '周三',
    theme: '大学与图书馆',
    activities: [
      {
        id: 'day6-1',
        time: '09:00 AM',
        title: '墨尔本大学校园参观',
        description: '免费1小时导览 + 自助探索。了解澳洲最顶尖大学的历史建筑和文化。Gothic Revival 建筑风格。',
        location: 'University of Melbourne, Parkville',
        cost: 0,
        type: 'attraction',
        category: '教育'
      },
      {
        id: 'day6-2',
        time: '12:00 PM',
        title: '午餐',
        description: '在大学附近的咖啡馆或餐厅用午餐。',
        location: 'Parkville',
        cost: 60,
        type: 'dining'
      },
      {
        id: 'day6-3',
        time: '14:00 PM',
        title: '维多利亚州立图书馆',
        description: '世界最美图书馆之一，建立于1854年。La Trobe Reading Room 标志性穹顶大厅。儿童友好的互动展览。',
        location: 'State Library Victoria',
        cost: 0,
        type: 'attraction',
        category: '文化'
      },
      {
        id: 'day6-4',
        time: '18:00 PM',
        title: '晚餐',
        description: '可选高端粤菜 Flower Drum 或家庭烹饪。',
        location: 'CBD',
        cost: 0,
        type: 'dining'
      }
    ],
    totalCost: 60,
    highlights: ['澳洲顶尖大学', '世界最美图书馆', '建筑与文化教育']
  },
  {
    day: 7,
    date: '2月5日',
    dayOfWeek: '周四',
    theme: '离境与告别',
    activities: [
      {
        id: 'day7-1',
        time: '09:00 AM',
        title: '皇家植物园',
        description: '在38公顷的自然绿洲中轻松散步，享受最后的墨尔本时光。',
        location: 'Royal Botanic Gardens',
        cost: 0,
        type: 'attraction',
        category: '自然'
      },
      {
        id: 'day7-2',
        time: '11:00 AM',
        title: '最后采购 & 退房',
        description: '购买纪念品，整理行李，办理退房手续 (10:00 AM 前)。',
        location: 'CBD 公寓',
        cost: 50,
        type: 'transport'
      },
      {
        id: 'day7-3',
        time: '12:00 PM',
        title: '前往机场',
        description: '乘坐 Uber Black 前往墨尔本机场 T2 航站楼。',
        location: '墨尔本机场 T2',
        cost: 70,
        type: 'transport'
      },
      {
        id: 'day7-4',
        time: '14:55 PM',
        title: '国泰航空 CX134 起飞',
        description: '从墨尔本飞往香港。',
        location: '墨尔本机场 T2',
        cost: 0,
        type: 'transport'
      }
    ],
    totalCost: 120,
    highlights: ['自然风光告别', '最后购物', '返回香港']
  }
];

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  pricePerPerson: number;
  rating: number;
  specialties: string[];
  notes: string;
  type: 'luxury' | 'casual' | 'local';
}

export const restaurants: Restaurant[] = [
  {
    id: 'rest-1',
    name: 'Attica',
    cuisine: '澳洲现代',
    location: 'Ripponlea',
    pricePerPerson: 280,
    rating: 5,
    specialties: ['分子美食', '本地食材', '创意菜肴'],
    notes: '澳洲最佳餐厅，需提前2-3周预订。电话: +61 3 9530 0111',
    type: 'luxury'
  },
  {
    id: 'rest-2',
    name: 'Vue de Monde',
    cuisine: '法式',
    location: 'Rialto Tower 55楼',
    pricePerPerson: 220,
    rating: 5,
    specialties: ['高空美食', '城市景观', '精致法菜'],
    notes: '俯瞰整个墨尔本城市景观的高端法餐厅',
    type: 'luxury'
  },
  {
    id: 'rest-3',
    name: 'Flower Drum',
    cuisine: '粤菜',
    location: 'Market Lane, CBD',
    pricePerPerson: 120,
    rating: 5,
    specialties: ['高端粤菜', '非辣选项', '家庭友好'],
    notes: '距离住宿很近，有非辣选项，小朋友友好。电话: +61 3 9662 3655',
    type: 'casual'
  },
  {
    id: 'rest-4',
    name: 'Tiamo',
    cuisine: '意式',
    location: 'Lygon Street, Carlton',
    pricePerPerson: 100,
    rating: 4.5,
    specialties: ['意式面食', '披萨', '意式冰淇淋'],
    notes: '"小意大利" 经典餐厅，适合家庭用餐',
    type: 'casual'
  },
  {
    id: 'rest-5',
    name: 'Scopri',
    cuisine: '意式',
    location: 'Lygon Street, Carlton',
    pricePerPerson: 110,
    rating: 4.5,
    specialties: ['意式烹饪', '新鲜食材', '传统菜肴'],
    notes: 'Lygon Street 另一个优质选择',
    type: 'casual'
  },
  {
    id: 'rest-6',
    name: 'Universal Restaurant',
    cuisine: '意式',
    location: 'Lygon Street, Carlton',
    pricePerPerson: 95,
    rating: 4.5,
    specialties: ['炸鸡排 (Chicken Parmigiana)', '意式美食'],
    notes: '以巨大的炸鸡排闻名，小朋友通常很喜欢',
    type: 'casual'
  },
  {
    id: 'rest-7',
    name: 'Chin Chin',
    cuisine: '泰菜',
    location: 'Flinders Lane, CBD',
    pricePerPerson: 90,
    rating: 4.5,
    specialties: ['高端泰菜', '可定制非辣', '创意菜肴'],
    notes: '可定制非辣菜肴',
    type: 'casual'
  },
  {
    id: 'rest-8',
    name: 'Pidapipo',
    cuisine: '意式冰淇淋',
    location: 'Lygon Street, Carlton',
    pricePerPerson: 15,
    rating: 5,
    specialties: ['意式冰淇淋 (Gelato)', '天然食材'],
    notes: 'Lygon Street 最好的冰淇淋店，饭后必尝',
    type: 'casual'
  }
];

export interface Attraction {
  id: string;
  name: string;
  category: string;
  location: string;
  ticketPrice: number;
  hours: string;
  website: string;
  description: string;
  highlights: string[];
  familyFriendly: boolean;
}

export const attractions: Attraction[] = [
  {
    id: 'attr-1',
    name: 'NGV (National Gallery of Victoria)',
    category: '艺术',
    location: 'St Kilda Road',
    ticketPrice: 0,
    hours: '10:00 AM - 5:00 PM',
    website: 'www.ngv.vic.gov.au',
    description: '维多利亚国家美术馆，展示澳洲和国际艺术作品。',
    highlights: ['NGV Kids Summer Festival', '儿童时尚展', '免费入场'],
    familyFriendly: true
  },
  {
    id: 'attr-2',
    name: 'ACMI (Australian Centre for the Moving Image)',
    category: '文化',
    location: 'Federation Square',
    ticketPrice: 0,
    hours: '10:00 AM - 5:00 PM',
    website: 'www.acmi.net.au',
    description: '澳洲电影、电视和数字艺术中心。',
    highlights: ['Screen Worlds 展览', '互动装置', '免费入场'],
    familyFriendly: true
  },
  {
    id: 'attr-3',
    name: 'Melbourne Museum',
    category: '文化',
    location: 'Carlton Gardens',
    ticketPrice: 50,
    hours: '10:00 AM - 5:00 PM',
    website: 'www.museumsvictoria.com.au',
    description: '澳洲历史、原住民文化和自然科学博物馆。',
    highlights: ['儿童互动展区', '澳洲历史', '原住民文化'],
    familyFriendly: true
  },
  {
    id: 'attr-4',
    name: 'Old Melbourne Gaol',
    category: '历史',
    location: 'Russell Street',
    ticketPrice: 45,
    hours: '9:30 AM - 5:00 PM',
    website: 'www.oldmelbournegaol.com.au',
    description: '历史悠久的旧监狱，了解澳洲殖民地历史。',
    highlights: ['历史建筑', '澳洲殖民地历史', '导览服务'],
    familyFriendly: true
  },
  {
    id: 'attr-5',
    name: 'Scienceworks',
    category: '教育',
    location: 'Spotswood',
    ticketPrice: 50,
    hours: '10:00 AM - 4:30 PM',
    website: 'www.scienceworksmuseum.com.au',
    description: '科技馆，包含 Melbourne Planetarium 和互动科学展。',
    highlights: ['16米圆顶天文馆', 'Lightning Room', '互动科学展'],
    familyFriendly: true
  },
  {
    id: 'attr-6',
    name: 'Puffing Billy Railway',
    category: '文化体验',
    location: 'Belgrave',
    ticketPrice: 224,
    hours: '已预订',
    website: 'www.puffingbillyrailway.org.au',
    description: '澳洲著名的蒸汽火车，体验 "伸腿坐法"。',
    highlights: ['蒸汽火车体验', '伸腿坐法', '丹德农山脉雨林'],
    familyFriendly: true
  },
  {
    id: 'attr-7',
    name: 'University of Melbourne',
    category: '教育',
    location: 'Parkville',
    ticketPrice: 0,
    hours: '校园开放',
    website: 'www.unimelb.edu.au',
    description: '澳洲最顶尖大学，免费校园参观和导览。',
    highlights: ['Gothic Revival 建筑', '澳洲顶尖大学', '免费导览'],
    familyFriendly: true
  },
  {
    id: 'attr-8',
    name: 'State Library Victoria',
    category: '文化',
    location: 'Swanston Street',
    ticketPrice: 0,
    hours: '10:00 AM - 6:00 PM',
    website: 'www.slv.vic.gov.au',
    description: '世界最美图书馆之一，建立于1854年。',
    highlights: ['La Trobe Reading Room', '儿童展览', '建筑美学'],
    familyFriendly: true
  },
  {
    id: 'attr-9',
    name: 'Royal Botanic Gardens',
    category: '自然',
    location: 'South Yarra',
    ticketPrice: 0,
    hours: '全天开放',
    website: 'www.rbg.vic.gov.au',
    description: '38公顷的自然绿洲，轻松散步和自然教育。',
    highlights: ['38公顷自然风光', '免费入场', '家庭友好'],
    familyFriendly: true
  },
  {
    id: 'attr-10',
    name: 'Yarra Valley Hot Air Balloon',
    category: '豪华体验',
    location: 'Yarra Valley',
    ticketPrice: 595,
    hours: '日出时分',
    website: 'www.globalballooning.com.au',
    description: '日出热气球飞行，俯瞰葡萄园美景，含香槟早餐。',
    highlights: ['日出飞行', '葡萄园美景', '香槟早餐'],
    familyFriendly: true
  }
];
