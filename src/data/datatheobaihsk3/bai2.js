const vocabulary2 = [
  {
    id: 16,
    chinese: "腿",
    pinyin: "tuǐ",
    meaning: "Chân",
    example: {
      sentence: "他的腿受伤了。",
      pinyin: "Tā de tuǐ shòushāng le.",
      translation: "Chân của anh ấy bị thương."
    },
    usage: "Danh từ chỉ bộ phận cơ thể từ hông xuống bàn chân."
  },
  {
    id: 17,
    chinese: "疼",
    pinyin: "téng",
    meaning: "Đau, nhức",
    example: {
      sentence: "我头疼。",
      pinyin: "Wǒ tóu téng.",
      translation: "Tôi đau đầu."
    },
    usage: "Động từ chỉ cảm giác đau."
  },
  {
    id: 18,
    chinese: "脚",
    pinyin: "jiǎo",
    meaning: "Bàn chân",
    example: {
      sentence: "她的脚很小。",
      pinyin: "Tā de jiǎo hěn xiǎo.",
      translation: "Bàn chân của cô ấy rất nhỏ."
    },
    usage: "Danh từ chỉ phần cuối của chân dùng để đi."
  },
  {
    id: 19,
    chinese: "树",
    pinyin: "shù",
    meaning: "Cây",
    example: {
      sentence: "花园里有很多树。",
      pinyin: "Huāyuán lǐ yǒu hěn duō shù.",
      translation: "Trong vườn có nhiều cây."
    },
    usage: "Danh từ chỉ thực vật có thân gỗ."
  },
  {
    id: 20,
    chinese: "容易",
    pinyin: "róngyì",
    meaning: "Dễ, dễ dàng",
    example: {
      sentence: "这个题目很容易。",
      pinyin: "Zhège tímù hěn róngyì.",
      translation: "Đề bài này rất dễ."
    },
    usage: "Tính từ chỉ mức độ dễ dàng."
  },
  {
    id: 21,
    chinese: "难",
    pinyin: "nán",
    meaning: "Khó, khó khăn",
    example: {
      sentence: "这件事很难做。",
      pinyin: "Zhè jiàn shì hěn nán zuò.",
      translation: "Việc này rất khó làm."
    },
    usage: "Tính từ chỉ sự khó khăn."
  },
  {
    id: 22,
    chinese: "太太",
    pinyin: "tàitai",
    meaning: "Bà",
    example: {
      sentence: "王太太很热情。",
      pinyin: "Wáng tàitai hěn rèqíng.",
      translation: "Bà Vương rất nhiệt tình."
    },
    usage: "Danh từ chỉ người phụ nữ đã có chồng hoặc cách gọi tôn trọng."
  },
  {
    id: 23,
    chinese: "秘书",
    pinyin: "mìshū",
    meaning: "Thư ký",
    example: {
      sentence: "他是经理的秘书。",
      pinyin: "Tā shì jīnglǐ de mìshū.",
      translation: "Anh ấy là thư ký của giám đốc."
    },
    usage: "Danh từ chỉ chức vụ trợ lý hành chính."
  },
  {
    id: 24,
    chinese: "经理",
    pinyin: "jīnglǐ",
    meaning: "Giám đốc",
    example: {
      sentence: "经理正在开会。",
      pinyin: "Jīnglǐ zhèngzài kāihuì.",
      translation: "Giám đốc đang họp."
    },
    usage: "Danh từ chỉ người quản lý cấp cao."
  },
  {
    id: 25,
    chinese: "办公室",
    pinyin: "bàngōngshì",
    meaning: "Văn phòng",
    example: {
      sentence: "他在办公室工作。",
      pinyin: "Tā zài bàngōngshì gōngzuò.",
      translation: "Anh ấy làm việc ở văn phòng."
    },
    usage: "Danh từ chỉ nơi làm việc."
  },
  {
    id: 26,
    chinese: "辆",
    pinyin: "liàng",
    meaning: "Lượng từ cho xe cộ",
    example: {
      sentence: "我有一辆车。",
      pinyin: "Wǒ yǒu yī liàng chē.",
      translation: "Tôi có một chiếc xe."
    },
    usage: "Lượng từ chỉ phương tiện có bánh như xe đạp, ô tô."
  },
  {
    id: 27,
    chinese: "楼",
    pinyin: "lóu",
    meaning: "Tòa nhà, lầu",
    example: {
      sentence: "我们住在五楼。",
      pinyin: "Wǒmen zhù zài wǔ lóu.",
      translation: "Chúng tôi ở tầng 5."
    },
    usage: "Danh từ chỉ tòa nhà hoặc tầng lầu."
  },
  {
    id: 28,
    chinese: "拿",
    pinyin: "ná",
    meaning: "Cầm, lấy",
    example: {
      sentence: "请帮我拿一下这本书。",
      pinyin: "Qǐng bāng wǒ ná yīxià zhè běn shū.",
      translation: "Làm ơn giúp tôi cầm cuốn sách này."
    },
    usage: "Động từ chỉ hành động cầm nắm."
  },
  {
    id: 29,
    chinese: "把",
    pinyin: "bǎ",
    meaning: "Lượng từ cho vật có tay cầm, cán cầm",
    example: {
      sentence: "我买了一把椅子。",
      pinyin: "Wǒ mǎile yī bǎ yǐzi.",
      translation: "Tôi đã mua một cái ghế."
    },
    usage: "Lượng từ dùng cho đồ vật có tay cầm như ghế, dao, ô."
  },
  {
    id: 30,
    chinese: "伞",
    pinyin: "sǎn",
    meaning: "Ô, dù",
    example: {
      sentence: "今天下雨，别忘了带伞。",
      pinyin: "Jīntiān xià yǔ, bié wàngle dài sǎn.",
      translation: "Hôm nay trời mưa, đừng quên mang ô."
    },
    usage: "Danh từ chỉ vật dụng che mưa hoặc nắng."
  },
  {
    id: 31,
    chinese: "胖",
    pinyin: "pàng",
    meaning: "Béo, mập",
    example: {
      sentence: "他最近有点胖。",
      pinyin: "Tā zuìjìn yǒudiǎn pàng.",
      translation: "Gần đây anh ấy hơi mập."
    },
    usage: "Tính từ chỉ dáng người nhiều thịt."
  },
  {
    id: 32,
    chinese: "瘦",
    pinyin: "shòu",
    meaning: "Gầy, còm",
    example: {
      sentence: "她比以前瘦了。",
      pinyin: "Tā bǐ yǐqián shòu le.",
      translation: "Cô ấy gầy hơn trước."
    },
    usage: "Tính từ chỉ dáng người ít thịt."
  },
  {
    id: 33,
    chinese: "其实",
    pinyin: "qíshí",
    meaning: "Thật ra",
    example: {
      sentence: "我其实不太喜欢咖啡。",
      pinyin: "Wǒ qíshí bù tài xǐhuān kāfēi.",
      translation: "Thật ra tôi không thích cà phê lắm."
    },
    usage: "Trạng từ dùng để biểu thị sự thật."
  }
];

export default vocabulary2;
