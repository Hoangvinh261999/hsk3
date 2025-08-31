const vocabulary2 = [
  {
    id: 267,
    chinese: "向",
    pinyin: "xiàng",
    meaning: "Đối với, về phía, phương hướng",
    example: {
      sentence: "他向我走过来。",
      pinyin: "Tā xiàng wǒ zǒu guòlái.",
      translation: "Anh ấy đi về phía tôi."
    },
    usage: "Giới từ; chỉ phương hướng hoặc đối tượng."
  },
  {
    id: 268,
    chinese: "万",
    pinyin: "wàn",
    meaning: "Vạn, mười nghìn",
    example: {
      sentence: "中国有十三亿五千万人口。",
      pinyin: "Zhōngguó yǒu shísān yì wǔ qiān wàn rénkǒu.",
      translation: "Trung Quốc có 1 tỷ 350 triệu dân."
    },
    usage: "Danh từ số lượng; chỉ 10.000."
  },
  {
    id: 269,
    chinese: "只",
    pinyin: "zhī",
    meaning: "Lượng từ, dùng cho động vật, con",
    example: {
      sentence: "我有一只猫。",
      pinyin: "Wǒ yǒu yì zhī māo.",
      translation: "Tôi có một con mèo."
    },
    usage: "Lượng từ; dùng cho động vật hoặc một số đồ vật."
  },
  {
    id: 270,
    chinese: "嘴",
    pinyin: "zuǐ",
    meaning: "Miệng",
    example: {
      sentence: "他的嘴里有糖。",
      pinyin: "Tā de zuǐ lǐ yǒu táng.",
      translation: "Trong miệng anh ấy có kẹo."
    },
    usage: "Danh từ; bộ phận dùng để ăn, nói."
  },
  {
    id: 271,
    chinese: "动物",
    pinyin: "dòngwù",
    meaning: "Động vật, loài vật",
    example: {
      sentence: "我喜欢小动物。",
      pinyin: "Wǒ xǐhuān xiǎo dòngwù.",
      translation: "Tôi thích động vật nhỏ."
    },
    usage: "Danh từ; chỉ loài động vật."
  },
  {
    id: 272,
    chinese: "段",
    pinyin: "duàn",
    meaning: "Khoảng, quãng",
    example: {
      sentence: "我们走了一段路。",
      pinyin: "Wǒmen zǒule yí duàn lù.",
      translation: "Chúng tôi đi một quãng đường."
    },
    usage: "Lượng từ; chỉ đoạn, quãng."
  },
  {
    id: 273,
    chinese: "不但，而且",
    pinyin: "bùdàn, érqiě",
    meaning: "Không những, mà còn",
    example: {
      sentence: "他不但聪明，而且很努力。",
      pinyin: "Tā bùdàn cōngmíng, érqiě hěn nǔlì.",
      translation: "Anh ấy không những thông minh mà còn rất chăm chỉ."
    },
    usage: "Liên từ; dùng để nối hai vế câu bổ sung ý."
  },
  {
    id: 274,
    chinese: "有名",
    pinyin: "yǒumíng",
    meaning: "Có tiếng, nổi tiếng",
    example: {
      sentence: "他是一位有名的歌手。",
      pinyin: "Tā shì yí wèi yǒumíng de gēshǒu.",
      translation: "Anh ấy là một ca sĩ nổi tiếng."
    },
    usage: "Tính từ; chỉ sự nổi tiếng, danh tiếng."
  },
  {
    id: 275,
    chinese: "关系",
    pinyin: "guānxì",
    meaning: "Về, liên quan tới, liên quan đến",
    example: {
      sentence: "这件事和我没有关系。",
      pinyin: "Zhè jiàn shì hé wǒ méiyǒu guānxì.",
      translation: "Việc này không liên quan đến tôi."
    },
    usage: "Danh từ; chỉ mối liên quan hoặc quan hệ."
  },
  {
    id: 276,
    chinese: "同意",
    pinyin: "tóngyì",
    meaning: "Đồng ý, tán thành",
    example: {
      sentence: "我同意你的意见。",
      pinyin: "Wǒ tóngyì nǐ de yìjiàn.",
      translation: "Tôi đồng ý với ý kiến của bạn."
    },
    usage: "Động từ; biểu thị sự đồng ý hoặc chấp thuận."
  },
  {
    id: 277,
    chinese: "相信",
    pinyin: "xiāngxìn",
    meaning: "Tin tưởng",
    example: {
      sentence: "我相信你。",
      pinyin: "Wǒ xiāngxìn nǐ.",
      translation: "Tôi tin bạn."
    },
    usage: "Động từ; biểu thị sự tin tưởng vào ai hoặc điều gì."
  },
  {
    id: 278,
    chinese: "机会",
    pinyin: "jīhuì",
    meaning: "Cơ hội",
    example: {
      sentence: "这是一个好机会。",
      pinyin: "Zhè shì yí gè hǎo jīhuì.",
      translation: "Đây là một cơ hội tốt."
    },
    usage: "Danh từ; chỉ cơ hội, dịp thuận lợi."
  },
  {
    id: 279,
    chinese: "国家",
    pinyin: "guójiā",
    meaning: "Đất nước, quốc gia",
    example: {
      sentence: "中国是一个美丽的国家。",
      pinyin: "Zhōngguó shì yí gè měilì de guójiā.",
      translation: "Trung Quốc là một đất nước xinh đẹp."
    },
    usage: "Danh từ; chỉ quốc gia, đất nước."
  },
  {
    id: 280,
    chinese: "种",
    pinyin: "zhǒng",
    meaning: "Loại, chủng, giống loài",
    example: {
      sentence: "你喜欢哪种颜色？",
      pinyin: "Nǐ xǐhuān nǎ zhǒng yánsè?",
      translation: "Bạn thích màu nào?"
    },
    usage: "Danh từ hoặc lượng từ; chỉ loại, chủng loại."
  },
  {
    id: 281,
    chinese: "特点",
    pinyin: "tèdiǎn",
    meaning: "Đặc điểm",
    example: {
      sentence: "每个人都有自己的特点。",
      pinyin: "Měi gèrén dōu yǒu zìjǐ de tèdiǎn.",
      translation: "Mỗi người đều có đặc điểm riêng."
    },
    usage: "Danh từ; chỉ tính chất nổi bật, đặc thù."
  },
  {
    id: 282,
    chinese: "奇怪",
    pinyin: "qíguài",
    meaning: "Kỳ lạ, lạ lùng",
    example: {
      sentence: "这件事很奇怪。",
      pinyin: "Zhè jiàn shì hěn qíguài.",
      translation: "Chuyện này rất kỳ lạ."
    },
    usage: "Tính từ; chỉ sự khác thường, lạ lùng."
  }
];

export default vocabulary2;
