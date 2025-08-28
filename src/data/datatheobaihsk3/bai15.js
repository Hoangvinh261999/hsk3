const vocabulary2 = [
  {
    id: 217,
    chinese: "留学",
    pinyin: "liúxué",
    meaning: "Du học",
    example: {
      sentence: "他计划去中国留学。",
      pinyin: "Tā jìhuà qù Zhōngguó liúxué.",
      translation: "Anh ấy dự định đi du học ở Trung Quốc."
    },
    usage: "Động từ; chỉ việc học tập ở nước ngoài."
  },
  {
    id: 218,
    chinese: "水平",
    pinyin: "shuǐpíng",
    meaning: "Trình độ",
    example: {
      sentence: "他的汉语水平很高。",
      pinyin: "Tā de Hànyǔ shuǐpíng hěn gāo.",
      translation: "Trình độ tiếng Trung của anh ấy rất cao."
    },
    usage: "Danh từ; mức độ kiến thức hoặc kỹ năng."
  },
  {
    id: 219,
    chinese: "提高",
    pinyin: "tígāo",
    meaning: "Nâng cao, tiến bộ",
    example: {
      sentence: "努力学习可以提高水平。",
      pinyin: "Nǔlì xuéxí kěyǐ tígāo shuǐpíng.",
      translation: "Học tập chăm chỉ có thể nâng cao trình độ."
    },
    usage: "Động từ; làm cho tốt hơn, tăng lên."
  },
  {
    id: 220,
    chinese: "练习",
    pinyin: "liànxí",
    meaning: "Bài tập",
    example: {
      sentence: "请完成这些练习。",
      pinyin: "Qǐng wánchéng zhèxiē liànxí.",
      translation: "Xin hãy hoàn thành những bài tập này."
    },
    usage: "Danh từ/động từ; luyện tập, làm bài tập."
  },
  {
    id: 221,
    chinese: "完成",
    pinyin: "wánchéng",
    meaning: "Hoàn thành",
    example: {
      sentence: "我完成了今天的工作。",
      pinyin: "Wǒ wánchéng le jīntiān de gōngzuò.",
      translation: "Tôi đã hoàn thành công việc hôm nay."
    },
    usage: "Động từ; làm xong một việc."
  },
  {
    id: 222,
    chinese: "句子",
    pinyin: "jùzi",
    meaning: "Câu",
    example: {
      sentence: "这个句子很长。",
      pinyin: "Zhège jùzi hěn cháng.",
      translation: "Câu này rất dài."
    },
    usage: "Danh từ; đơn vị ngữ pháp, một câu hoàn chỉnh."
  },
  {
    id: 223,
    chinese: "其他",
    pinyin: "qítā",
    meaning: "Cái khác",
    example: {
      sentence: "我不想吃米饭，想吃其他的。",
      pinyin: "Wǒ bù xiǎng chī mǐfàn, xiǎng chī qítā de.",
      translation: "Tôi không muốn ăn cơm, muốn ăn món khác."
    },
    usage: "Đại từ; chỉ cái khác ngoài cái đã nói."
  },
  {
    id: 224,
    chinese: "发",
    pinyin: "fā",
    meaning: "Gửi, gửi đi",
    example: {
      sentence: "我给你发了一封邮件。",
      pinyin: "Wǒ gěi nǐ fā le yī fēng yóujiàn.",
      translation: "Tôi đã gửi cho bạn một email."
    },
    usage: "Động từ; gửi thông tin, tin nhắn, thư."
  },
  {
    id: 225,
    chinese: "要求",
    pinyin: "yāoqiú",
    meaning: "Yêu cầu",
    example: {
      sentence: "老师对我们有很多要求。",
      pinyin: "Lǎoshī duì wǒmen yǒu hěn duō yāoqiú.",
      translation: "Giáo viên có nhiều yêu cầu đối với chúng tôi."
    },
    usage: "Danh từ/động từ; điều kiện hoặc đề nghị ai làm gì."
  },
  {
    id: 226,
    chinese: "注意",
    pinyin: "zhùyì",
    meaning: "Chú ý",
    example: {
      sentence: "过马路要注意安全。",
      pinyin: "Guò mǎlù yào zhùyì ānquán.",
      translation: "Qua đường phải chú ý an toàn."
    },
    usage: "Động từ; tập trung để không bỏ sót hoặc xảy ra nguy hiểm."
  },
  {
    id: 227,
    chinese: "上网",
    pinyin: "shàngwǎng",
    meaning: "Lên mạng",
    example: {
      sentence: "我每天上网看新闻。",
      pinyin: "Wǒ měitiān shàngwǎng kàn xīnwén.",
      translation: "Tôi lên mạng đọc tin tức mỗi ngày."
    },
    usage: "Động từ; sử dụng internet để lướt web, tìm thông tin."
  },
  {
    id: 228,
    chinese: "除了",
    pinyin: "chúle",
    meaning: "Ngoài ra",
    example: {
      sentence: "除了汉语，我还会英语。",
      pinyin: "Chúle Hànyǔ, wǒ hái huì Yīngyǔ.",
      translation: "Ngoài tiếng Trung, tôi còn biết tiếng Anh."
    },
    usage: "Giới từ; diễn đạt sự bổ sung hoặc loại trừ."
  },
  {
    id: 229,
    chinese: "新闻",
    pinyin: "xīnwén",
    meaning: "Tin tức",
    example: {
      sentence: "我每天看新闻。",
      pinyin: "Wǒ měitiān kàn xīnwén.",
      translation: "Tôi đọc tin tức mỗi ngày."
    },
    usage: "Danh từ; thông tin mới về các sự kiện."
  },
  {
    id: 230,
    chinese: "花",
    pinyin: "huā",
    meaning: "Tốn, tiêu tốn",
    example: {
      sentence: "我花了很多时间学习。",
      pinyin: "Wǒ huā le hěn duō shíjiān xuéxí.",
      translation: "Tôi đã tốn nhiều thời gian học tập."
    },
    usage: "Động từ; tiêu tốn thời gian hoặc tiền bạc."
  },
  {
    id: 231,
    chinese: "极了",
    pinyin: "jíle",
    meaning: "Hết sức, cực kỳ",
    example: {
      sentence: "今天的天气好极了。",
      pinyin: "Jīntiān de tiānqì hǎo jíle.",
      translation: "Thời tiết hôm nay tốt cực kỳ."
    },
    usage: "Trạng từ; nhấn mạnh mức độ cao của tính từ."
  },
  {
    id: 232,
    chinese: "节日",
    pinyin: "jiérì",
    meaning: "Ngày lễ",
    example: {
      sentence: "春节是中国最重要的节日。",
      pinyin: "Chūnjié shì Zhōngguó zuì zhòngyào de jiérì.",
      translation: "Tết Nguyên Đán là ngày lễ quan trọng nhất của Trung Quốc."
    },
    usage: "Danh từ; ngày kỷ niệm hoặc lễ hội."
  },
  {
    id: 233,
    chinese: "举行",
    pinyin: "jǔxíng",
    meaning: "Tổ chức, hội họp, thi đấu",
    example: {
      sentence: "学校举行了一场运动会。",
      pinyin: "Xuéxiào jǔxíng le yī chǎng yùndònghuì.",
      translation: "Nhà trường tổ chức một cuộc thi thể thao."
    },
    usage: "Động từ; tổ chức sự kiện, cuộc họp, hoạt động."
  },
  {
    id: 234,
    chinese: "世界",
    pinyin: "shìjiè",
    meaning: "Thế giới",
    example: {
      sentence: "世界很大，我想去看看。",
      pinyin: "Shìjiè hěn dà, wǒ xiǎng qù kànkàn.",
      translation: "Thế giới rất rộng, tôi muốn đi xem."
    },
    usage: "Danh từ; trái đất và tất cả các quốc gia, khu vực."
  },
  {
    id: 235,
    chinese: "街道",
    pinyin: "jiēdào",
    meaning: "Đường, đường phố",
    example: {
      sentence: "街道上有很多商店。",
      pinyin: "Jiēdào shàng yǒu hěn duō shāngdiàn.",
      translation: "Trên đường phố có nhiều cửa hàng."
    },
    usage: "Danh từ; đường phố nơi xe cộ và người đi lại."
  },
  {
    id: 236,
    chinese: "各",
    pinyin: "gè",
    meaning: "Mỗi",
    example: {
      sentence: "各位同学请注意。",
      pinyin: "Gè wèi tóngxué qǐng zhùyì.",
      translation: "Mỗi bạn học sinh xin hãy chú ý."
    },
    usage: "Đại từ; chỉ từng người hoặc từng cái riêng lẻ."
  },
  {
    id: 237,
    chinese: "文化",
    pinyin: "wénhuà",
    meaning: "Văn hoá",
    example: {
      sentence: "我对中国文化很感兴趣。",
      pinyin: "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.",
      translation: "Tôi rất quan tâm đến văn hóa Trung Quốc."
    },
    usage: "Danh từ; tổng thể phong tục, tập quán, tri thức của một dân tộc."
  }
];

export default vocabulary2;
