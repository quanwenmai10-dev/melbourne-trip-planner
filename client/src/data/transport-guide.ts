export interface TransportHub {
  name: string;
  type: 'metro' | 'tram' | 'bus';
  distance: string;
  walkTime: string;
  lines: string[];
  description: string;
}

export interface RouteDirection {
  from: string;
  to: string;
  method: 'metro' | 'tram' | 'bus' | 'uber' | 'walk' | 'train';
  duration: string;
  cost: string;
  steps: string[];
  tips: string;
}

export interface DayTransport {
  day: number;
  routes: RouteDirection[];
  notes: string;
}

// 住宿地附近的交通枢纽
export const accommodationTransportHubs: TransportHub[] = [
  {
    name: 'Melbourne Central Station',
    type: 'metro',
    distance: '240m (步行)',
    walkTime: '3分钟',
    lines: ['Cranbourne Line', 'Pakenham Line', 'Sunbury Line', 'Werribee Line'],
    description: '最近的火车站，可到达Belgrave (蒸汽火车)、Yarra Valley (热气球接送点)'
  },
  {
    name: 'Flagstaff Station',
    type: 'metro',
    distance: '300m (步行)',
    walkTime: '4分钟',
    lines: ['Sunbury Line', 'Werribee Line'],
    description: '另一个主要火车站，可作为备选'
  },
  {
    name: 'RMIT University/Swanston St (Tram #7)',
    type: 'tram',
    distance: '100m (步行)',
    walkTime: '1分钟',
    lines: ['Tram #7'],
    description: '最近的电车站，可到达Carlton、South Yarra等'
  },
  {
    name: 'Swanston St/La Trobe St (Tram #3, #5, #6, #8, #16, #19)',
    type: 'tram',
    distance: '150m (步行)',
    walkTime: '2分钟',
    lines: ['Tram #3', 'Tram #5', 'Tram #6', 'Tram #8', 'Tram #16', 'Tram #19'],
    description: '主要电车交汇点，可到达大多数景点'
  },
  {
    name: 'Free Tram Zone',
    type: 'tram',
    distance: '步行即可',
    walkTime: '0分钟',
    lines: ['所有电车'],
    description: 'CBD内所有电车免费，包括City Circle Tram'
  }
];

// 每日详细交通路线
export const dayTransportGuides: DayTransport[] = [
  {
    day: 1,
    routes: [
      {
        from: '墨尔本机场 T2',
        to: '157 A\'Beckett Street (住宿)',
        method: 'uber',
        duration: '25-35分钟',
        cost: '$60-80 AUD',
        steps: [
          '1. 在机场T2航站楼出口等待Uber',
          '2. 选择"Uber Black"获得豪华体验',
          '3. 直接送达住宿地点',
          '4. 司机会帮助卸行李'
        ],
        tips: '建议提前在飞机上预约Uber，避免排队。如果想省钱可选择Uber X ($40-50)，或乘坐机场巴士Skybus ($20/人)'
      },
      {
        from: '住宿地',
        to: 'Hometown Asian Supermarket',
        method: 'walk',
        duration: '15分钟',
        cost: '免费',
        steps: [
          '1. 从A\'Beckett St向东走',
          '2. 过Swanston St',
          '3. 继续向东走到Spring St',
          '4. 向北走到Lonsdale St',
          '5. 抵达Hometown Asian Supermarket'
        ],
        tips: '这家超市在Lonsdale St和Spring St交叉口，是CBD最大的亚洲超市，有各种中式食材'
      }
    ],
    notes: '第1天主要是抵达和采购，交通相对简单。建议购买Myki卡以备后续使用。'
  },
  {
    day: 2,
    routes: [
      {
        from: '住宿地',
        to: 'NGV (National Gallery of Victoria)',
        method: 'walk',
        duration: '15分钟',
        cost: '免费 (Free Tram Zone)',
        steps: [
          '1. 从A\'Beckett St向南走到Flinders St',
          '2. 向东走到St Kilda Rd',
          '3. 沿St Kilda Rd向南走',
          '4. 抵达NGV (St Kilda Rd)'
        ],
        tips: '完全在Free Tram Zone内，也可乘坐Tram #8或#16直达'
      },
      {
        from: 'NGV',
        to: 'ACMI (Federation Square)',
        method: 'walk',
        duration: '10分钟',
        cost: '免费',
        steps: [
          '1. 从NGV向北走回Flinders St',
          '2. 向东走到Federation Square',
          '3. ACMI就在Federation Square内'
        ],
        tips: '两个景点很近，步行即可。Federation Square是墨尔本文化中心'
      },
      {
        from: 'ACMI',
        to: 'Lygon Street, Carlton (晚餐)',
        method: 'tram',
        duration: '15分钟',
        cost: '免费 (Free Tram Zone)',
        steps: [
          '1. 从Federation Square步行到Swanston St',
          '2. 乘坐Tram #1向北',
          '3. 在Lygon St下车',
          '4. 步行到Tiamo或Scopri餐厅'
        ],
        tips: 'Lygon St是"小意大利"，有很多意式餐厅。建议提前预订餐厅'
      }
    ],
    notes: '第2天大部分在Free Tram Zone内，交通费用为0。推荐步行和免费电车结合'
  },
  {
    day: 3,
    routes: [
      {
        from: '住宿地',
        to: 'Melbourne Museum (Carlton Gardens)',
        method: 'tram',
        duration: '10分钟',
        cost: '免费 (Free Tram Zone)',
        steps: [
          '1. 从住宿地步行到Swanston St',
          '2. 乘坐Tram #19向北',
          '3. 在Carlton Gardens下车',
          '4. 步行进入Melbourne Museum'
        ],
        tips: '也可乘坐Tram #1或#8。Carlton Gardens就在Tram #19沿线'
      },
      {
        from: 'Melbourne Museum',
        to: 'Old Melbourne Gaol',
        method: 'walk',
        duration: '20分钟',
        cost: '免费',
        steps: [
          '1. 从Melbourne Museum出来',
          '2. 向南走回Swanston St',
          '3. 向南走到Russell St',
          '4. 向东走到Russell St和La Trobe St交叉口',
          '5. 抵达Old Melbourne Gaol'
        ],
        tips: '两个景点都在Carlton区，步行可到达。也可乘坐Tram回到CBD再转乘'
      },
      {
        from: 'Old Melbourne Gaol',
        to: 'Lygon Street (晚餐)',
        method: 'tram',
        duration: '10分钟',
        cost: '免费 (Free Tram Zone)',
        steps: [
          '1. 从Old Melbourne Gaol步行到Swanston St',
          '2. 乘坐Tram #1向北',
          '3. 在Lygon St下车',
          '4. 选择Universal Restaurant或其他餐厅'
        ],
        tips: '推荐Universal Restaurant的炸鸡排(Chicken Parmigiana)，小朋友很喜欢'
      }
    ],
    notes: '第3天完全在Free Tram Zone内。Carlton区景点集中，电车和步行结合最方便'
  },
  {
    day: 4,
    routes: [
      {
        from: '住宿地',
        to: 'Yarra Valley (热气球接送)',
        method: 'uber',
        duration: '60分钟',
        cost: '包含在热气球费用中',
        steps: [
          '1. 早上4:30 AM在住宿地等待热气球公司接送',
          '2. 司机会准时到达并接您前往Yarra Valley',
          '3. 到达集合点后进行日出热气球飞行',
          '4. 飞行后享用香槟早餐',
          '5. 约10:30-11:00 AM返回CBD'
        ],
        tips: '热气球公司(Global Ballooning Australia)会提供往返接送。确保提前预订并告知司机您的准确地址'
      },
      {
        from: '住宿地',
        to: 'Scienceworks (Spotswood)',
        method: 'metro',
        duration: '25分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从住宿地步行到Melbourne Central Station (3分钟)',
          '2. 乘坐Werribee Line火车向西',
          '3. 在Spotswood Station下车',
          '4. 步行15分钟到Scienceworks',
          '或者在Yarraville Station下车，步行10分钟'
        ],
        tips: '使用Myki卡购买2小时票。Scienceworks在Spotswood，是Zone 1-2交界处'
      },
      {
        from: 'Scienceworks',
        to: '住宿地',
        method: 'metro',
        duration: '25分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从Scienceworks步行回Spotswood Station',
          '2. 乘坐Werribee Line火车向东',
          '3. 在Melbourne Central Station下车',
          '4. 步行回住宿地 (3分钟)'
        ],
        tips: '如果时间充裕，可在Yarraville Station下车探索当地社区'
      }
    ],
    notes: '第4天需要早起。热气球接送已包含，Scienceworks需要使用Myki卡。建议充值足够的余额'
  },
  {
    day: 5,
    routes: [
      {
        from: '住宿地',
        to: 'Belgrave Station (蒸汽火车)',
        method: 'metro',
        duration: '45分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从住宿地步行到Melbourne Central Station (3分钟)',
          '2. 乘坐Belgrave Line火车向东',
          '3. 在Belgrave Station下车',
          '4. 提前60分钟到达，办理登车手续',
          '5. 准时登上蒸汽火车'
        ],
        tips: '务必提前60分钟到达。Belgrave Line是墨尔本最东边的火车线。车票已预订，确保携带确认函'
      },
      {
        from: 'Belgrave Station',
        to: 'Lakeside (蒸汽火车)',
        method: 'train',
        duration: '1小时',
        cost: '已包含在蒸汽火车票中',
        steps: [
          '1. 登上Puffing Billy Railway蒸汽火车',
          '2. 体验著名的"伸腿坐法"',
          '3. 穿越丹德农山脉的原始雨林',
          '4. 在Lakeside停靠'
        ],
        tips: '这是一次独特的体验。建议穿着舒适的鞋子和衣服。中间座位最适合"伸腿坐法"'
      },
      {
        from: 'Lakeside',
        to: 'Belgrave Station (返程)',
        method: 'train',
        duration: '1小时',
        cost: '已包含在蒸汽火车票中',
        steps: [
          '1. 在Lakeside Visitor Centre用午餐',
          '2. 准时登上返程蒸汽火车',
          '3. 返回Belgrave Station'
        ],
        tips: 'Lakeside Visitor Centre有餐厅和咖啡馆。也可自带野餐食物'
      },
      {
        from: 'Belgrave Station',
        to: '住宿地',
        method: 'metro',
        duration: '45分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从Belgrave Station乘坐Belgrave Line火车向西',
          '2. 在Melbourne Central Station下车',
          '3. 步行回住宿地 (3分钟)'
        ],
        tips: '返程可能较晚，确保有足够的时间赶上火车'
      }
    ],
    notes: '第5天完全依赖火车。蒸汽火车是体验，交通相对简单。提前预留充足时间'
  },
  {
    day: 6,
    routes: [
      {
        from: '住宿地',
        to: 'University of Melbourne (Parkville)',
        method: 'metro',
        duration: '15分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从住宿地步行到Melbourne Central Station (3分钟)',
          '2. 乘坐Sunbury Line或Werribee Line火车向西',
          '3. 在Parkville Station下车',
          '4. 步行到University of Melbourne主校区'
        ],
        tips: '也可乘坐Tram #19向北，但火车更快。Parkville是Zone 1'
      },
      {
        from: 'University of Melbourne',
        to: 'State Library Victoria',
        method: 'metro',
        duration: '15分钟',
        cost: '$5.70 AUD (2小时票)',
        steps: [
          '1. 从Parkville Station乘坐火车向东',
          '2. 在Melbourne Central Station下车',
          '3. 步行到State Library Victoria (Swanston St)',
          '4. 或直接乘坐Tram #19向南回到CBD'
        ],
        tips: 'State Library就在Swanston St，步行即可。也可在CBD步行到达'
      },
      {
        from: 'State Library Victoria',
        to: '住宿地 / 晚餐地点',
        method: 'walk',
        duration: '10分钟',
        cost: '免费',
        steps: [
          '1. 从State Library步行回住宿地',
          '2. 或步行到Lonsdale St的Flower Drum餐厅'
        ],
        tips: 'Flower Drum距离住宿地很近，步行5分钟即可到达'
      }
    ],
    notes: '第6天主要在Zone 1内活动。大学和图书馆都是文化教育景点，交通便利'
  },
  {
    day: 7,
    routes: [
      {
        from: '住宿地',
        to: 'Royal Botanic Gardens',
        method: 'walk',
        duration: '20分钟',
        cost: '免费',
        steps: [
          '1. 从A\'Beckett St向南走到Flinders St',
          '2. 向东走到St Kilda Rd',
          '3. 沿St Kilda Rd向南走',
          '4. 进入Royal Botanic Gardens'
        ],
        tips: '也可乘坐Tram #8或#16直达。Gardens有多个入口，可随意探索'
      },
      {
        from: 'Royal Botanic Gardens',
        to: '住宿地',
        method: 'walk',
        duration: '20分钟',
        cost: '免费',
        steps: [
          '1. 从Gardens出来',
          '2. 沿St Kilda Rd向北走',
          '3. 回到住宿地'
        ],
        tips: '步行回程，享受最后的墨尔本时光'
      },
      {
        from: '住宿地',
        to: '墨尔本机场 T2',
        method: 'uber',
        duration: '25-35分钟',
        cost: '$60-80 AUD',
        steps: [
          '1. 整理行李，办理退房',
          '2. 预约Uber Black到机场',
          '3. 提前2小时到达机场',
          '4. 办理登机手续'
        ],
        tips: '建议提前预约Uber。如果想省钱可选Uber X或Skybus ($20/人)'
      }
    ],
    notes: '第7天是离境日。上午轻松游览植物园，下午前往机场。提前预留足够时间'
  }
];

// Myki卡使用指南
export const myKiGuide = {
  whatIs: 'Myki是墨尔本公共交通的电子票卡，可用于地铁、电车和巴士',
  whereToBuy: [
    '机场T2航站楼的便利店或信息中心',
    'Melbourne Central Station的售票处',
    'Flagstaff Station的售票处',
    '便利店(7-Eleven等)',
    '在线购买: www.myki.com.au'
  ],
  cost: {
    card: '$6 AUD (卡片本身)',
    twoHourTicket: '$5.70 AUD (Zone 1-2)',
    dailyCap: '$11.40 AUD (全天无限乘坐)',
    sevenDayPass: '$55 AUD (7天无限乘坐)',
    freeTramZone: '免费 (CBD内所有电车)'
  },
  zones: {
    zone1: 'CBD和近郊 (包括Parkville, Carlton, South Yarra)',
    zone2: '远郊 (包括Belgrave, Spotswood, Yarra Valley)',
    bothZones: '大多数景点在Zone 1-2交界处'
  },
  tips: [
    '建议购买7天通票 ($55/人 x 4 = $220) 最划算',
    '或每天购买Daily Cap ($11.40/人 x 7 = $79.80/人)',
    'Free Tram Zone内所有电车免费，包括City Circle Tram',
    '周末票价更便宜，周六日Daily Cap为$7.50',
    '儿童票(5-15岁)半价',
    '保留Myki卡，可在下次旅行时重新充值'
  ],
  howToUse: [
    '在进入地铁/电车/巴士时，将Myki卡放在读卡器上',
    '听到"beep"声音表示成功',
    '下车时再次刷卡"touch off"',
    '如果忘记touch off，会被收取最高费用'
  ]
};

// 交通成本总结
export const transportCostSummary = {
  day1: {
    description: '抵达和采购',
    costs: [
      { item: 'Uber Black 机场到住宿', cost: 70 },
      { item: '步行采购', cost: 0 }
    ],
    total: 70
  },
  day2: {
    description: '艺术与高空体验',
    costs: [
      { item: 'Free Tram Zone (全天免费)', cost: 0 },
      { item: 'Tram #1到Lygon Street', cost: 0 }
    ],
    total: 0
  },
  day3: {
    description: '历史与文化',
    costs: [
      { item: 'Free Tram Zone (全天免费)', cost: 0 }
    ],
    total: 0
  },
  day4: {
    description: '热气球和科技馆',
    costs: [
      { item: '热气球接送 (包含)', cost: 0 },
      { item: 'Myki 2小时票到Scienceworks', cost: 5.70 },
      { item: '返程Myki票', cost: 5.70 }
    ],
    total: 11.40
  },
  day5: {
    description: '蒸汽火车',
    costs: [
      { item: 'Myki 2小时票到Belgrave', cost: 5.70 },
      { item: '蒸汽火车 (已预订)', cost: 0 },
      { item: '返程Myki票', cost: 5.70 }
    ],
    total: 11.40
  },
  day6: {
    description: '大学和图书馆',
    costs: [
      { item: 'Myki 2小时票到Parkville', cost: 5.70 },
      { item: '返程Myki票', cost: 5.70 }
    ],
    total: 11.40
  },
  day7: {
    description: '离境',
    costs: [
      { item: '步行到植物园', cost: 0 },
      { item: 'Uber Black 到机场', cost: 70 }
    ],
    total: 70
  },
  grandTotal: 174.20
};
