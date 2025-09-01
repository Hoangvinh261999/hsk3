const vocabulary = [
  {
    id: 251,
    chinese: "请假",
    pinyin: "qǐngjià",
    meaning: "Xin nghỉ phép",
    example: {
      sentence: "我想请假一天。",
      pinyin: "Wǒ xiǎng qǐngjià yì tiān.",
      translation: "Tôi muốn xin nghỉ một ngày."
    },
    usage: "Động từ; dùng khi xin nghỉ học hoặc nghỉ làm."
  },
  {
    id: 252,
    chinese: "一共",
    pinyin: "yígòng",
    meaning: "Tổng cộng",
    example: {
      sentence: "我们一共五个人。",
      pinyin: "Wǒmen yígòng wǔ gèrén.",
      translation: "Chúng tôi tổng cộng có năm người."
    },
    usage: "Trạng từ; dùng để chỉ tổng số lượng hoặc tổng cộng."
  },
  {
    id: 253,
    chinese: "邻居",
    pinyin: "línjū",
    meaning: "Láng giềng, hang xóm",
    example: {
      sentence: "我的邻居很友好。",
      pinyin: "Wǒ de línjū hěn yǒuhǎo.",
      translation: "Hàng xóm của tôi rất thân thiện."
    },
    usage: "Danh từ; chỉ người sống gần nhà mình."
  },
  {
    id: 254,
    chinese: "后来",
    pinyin: "hòulái",
    meaning: "Sau này",
    example: {
      sentence: "后来他去了北京。",
      pinyin: "Hòulái tā qùle Běijīng.",
      translation: "Sau này anh ấy đã đi Bắc Kinh."
    },
    usage: "Phó từ; chỉ sự việc xảy ra sau đó."
  },
  {
    id: 255,
    chinese: "爱好",
    pinyin: "àihào",
    meaning: "Sở thích",
    example: {
      sentence: "我的爱好是读书。",
      pinyin: "Wǒ de àihào shì dúshū.",
      translation: "Sở thích của tôi là đọc sách."
    },
    usage: "Danh từ; chỉ điều ai đó thích làm."
  },
  {
    id: 256,
    chinese: "办法",
    pinyin: "bànfǎ",
    meaning: "Cách, biện pháp",
    example: {
      sentence: "这个办法很好。",
      pinyin: "Zhège bànfǎ hěn hǎo.",
      translation: "Biện pháp này rất tốt."
    },
    usage: "Danh từ; chỉ phương pháp hoặc cách giải quyết vấn đề."
  },
  {
    id: 257,
    chinese: "饱",
    pinyin: "bǎo",
    meaning: "No",
    example: {
      sentence: "我吃饱了。",
      pinyin: "Wǒ chī bǎo le.",
      translation: "Tôi ăn no rồi."
    },
    usage: "Tính từ; chỉ trạng thái ăn đủ no."
  },
  {
    id: 258,
    chinese: "为了",
    pinyin: "wèile",
    meaning: "Để, vì",
    example: {
      sentence: "为了健康，你应该多运动。",
      pinyin: "Wèile jiànkāng, nǐ yīnggāi duō yùndòng.",
      translation: "Để khỏe mạnh, bạn nên tập thể dục nhiều hơn."
    },
    usage: "Giới từ; chỉ mục đích hoặc nguyên nhân."
  },
  {
    id: 259,
    chinese: "决定",
    pinyin: "juédìng",
    meaning: "Quyết định",
    example: {
      sentence: "我决定去中国学习。",
      pinyin: "Wǒ juédìng qù Zhōngguó xuéxí.",
      translation: "Tôi quyết định đi Trung Quốc học."
    },
    usage: "Động từ hoặc danh từ; chỉ hành động đưa ra lựa chọn hoặc quyết định."
  },
  {
    id: 260,
    chinese: "选择",
    pinyin: "xuǎnzé",
    meaning: "Lựa chọn",
    example: {
      sentence: "你可以选择喜欢的颜色。",
      pinyin: "Nǐ kěyǐ xuǎnzé xǐhuān de yánsè.",
      translation: "Bạn có thể chọn màu mà bạn thích."
    },
    usage: "Động từ; chỉ hành động chọn từ nhiều phương án."
  },
  {
    id: 261,
    chinese: "冬天",
    pinyin: "dōngtiān",
    meaning: "Mùa đông",
    example: {
      sentence: "冬天很冷。",
      pinyin: "Dōngtiān hěn lěng.",
      translation: "Mùa đông rất lạnh."
    },
    usage: "Danh từ; chỉ một trong bốn mùa."
  },
  {
    id: 262,
    chinese: "必须",
    pinyin: "bìxū",
    meaning: "Cần phải",
    example: {
      sentence: "你必须完成作业。",
      pinyin: "Nǐ bìxū wánchéng zuòyè.",
      translation: "Bạn cần phải hoàn thành bài tập."
    },
    usage: "Động từ khuyết thiếu; biểu thị sự bắt buộc."
  },
  {
    id: 263,
    chinese: "根据",
    pinyin: "gēnjù",
    meaning: "Căn cứ vào, dựa vào",
    example: {
      sentence: "根据天气预报，明天会下雨。",
      pinyin: "Gēnjù tiānqì yùbào, míngtiān huì xiàyǔ.",
      translation: "Theo dự báo thời tiết, ngày mai sẽ mưa."
    },
    usage: "Giới từ hoặc danh từ; chỉ căn cứ hoặc cơ sở."
  },
  {
    id: 264,
    chinese: "情况",
    pinyin: "qíngkuàng",
    meaning: "Tình hình, tình trạng",
    example: {
      sentence: "请告诉我实际情况。",
      pinyin: "Qǐng gàosù wǒ shíjì qíngkuàng.",
      translation: "Hãy nói cho tôi tình hình thực tế."
    },
    usage: "Danh từ; chỉ trạng thái hoặc tình trạng sự việc."
  },
  {
    id: 265,
    chinese: "口",
    pinyin: "kǒu",
    meaning: "Miệng",
    example: {
      sentence: "他的嘴里有一口糖。",
      pinyin: "Tā de zuǐ lǐ yǒu yì kǒu táng.",
      translation: "Trong miệng anh ấy có một viên kẹo."
    },
    usage: "Danh từ; chỉ miệng hoặc lượng (đếm người)."
  },
  {
    id: 266,
    chinese: "渴",
    pinyin: "kě",
    meaning: "Khát",
    example: {
      sentence: "我渴了，想喝水。",
      pinyin: "Wǒ kě le, xiǎng hē shuǐ.",
      translation: "Tôi khát rồi, muốn uống nước."
    },
    usage: "Tính từ; biểu thị cảm giác khát nước."
  }
];

export default vocabulary;
