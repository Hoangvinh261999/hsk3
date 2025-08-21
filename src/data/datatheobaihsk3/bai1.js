const vocabulary1 = [
  {
    id: 1,
    chinese: "周末",
    pinyin: "zhōumò",
    meaning: "Cuối tuần",
    example: {
      sentence: "这个周末你有什么打算？",
      pinyin: "Zhège zhōumò nǐ yǒu shénme dǎsuàn?",
      translation: "Cuối tuần này bạn có kế hoạch gì?"
    },
    usage: "Danh từ chỉ thời gian cuối tuần."
  },
  {
    id: 2,
    chinese: "打算",
    pinyin: "dǎsuàn",
    meaning: "Kế hoạch, dự định",
    example: {
      sentence: "我打算明天去买东西。",
      pinyin: "Wǒ dǎsuàn míngtiān qù mǎi dōngxi.",
      translation: "Tôi dự định ngày mai đi mua đồ."
    },
    usage: "Động từ chỉ dự định, kế hoạch."
  },
  {
    id: 3,
    chinese: "啊",
    pinyin: "a",
    meaning: "Trợ từ khẳng định, biện minh",
    example: {
      sentence: "好啊，我们一起去吧！",
      pinyin: "Hǎo a, wǒmen yīqǐ qù ba!",
      translation: "Được mà, chúng ta cùng đi nhé!"
    },
    usage: "Trợ từ dùng để nhấn mạnh hoặc biểu thị cảm xúc."
  },
  {
    id: 4,
    chinese: "跟",
    pinyin: "gēn",
    meaning: "Cùng, với",
    example: {
      sentence: "我跟朋友一起看电影。",
      pinyin: "Wǒ gēn péngyǒu yīqǐ kàn diànyǐng.",
      translation: "Tôi xem phim cùng với bạn."
    },
    usage: "Giới từ chỉ cùng ai đó làm việc gì."
  },
  {
    id: 5,
    chinese: "一直",
    pinyin: "yīzhí",
    meaning: "Suốt, liên tục",
    example: {
      sentence: "他一直在学习。",
      pinyin: "Tā yīzhí zài xuéxí.",
      translation: "Anh ấy học liên tục."
    },
    usage: "Trạng từ chỉ hành động liên tục, không ngừng."
  },
  {
    id: 6,
    chinese: "游戏",
    pinyin: "yóuxì",
    meaning: "Trò chơi",
    example: {
      sentence: "小孩子们正在玩游戏。",
      pinyin: "Xiǎo háizimen zhèngzài wán yóuxì.",
      translation: "Bọn trẻ đang chơi trò chơi."
    },
    usage: "Danh từ chỉ trò chơi, game."
  },
  {
    id: 7,
    chinese: "作业",
    pinyin: "zuòyè",
    meaning: "Bài tập về nhà",
    example: {
      sentence: "我还没做完作业。",
      pinyin: "Wǒ hái méi zuò wán zuòyè.",
      translation: "Tôi vẫn chưa làm xong bài tập về nhà."
    },
    usage: "Danh từ chỉ bài tập cho học sinh, sinh viên."
  },
  {
    id: 8,
    chinese: "着急",
    pinyin: "zháojí",
    meaning: "Lo lắng",
    example: {
      sentence: "别着急，我们还有时间。",
      pinyin: "Bié zháojí, wǒmen hái yǒu shíjiān.",
      translation: "Đừng lo lắng, chúng ta vẫn còn thời gian."
    },
    usage: "Động từ chỉ trạng thái lo lắng, sốt ruột."
  },
  {
    id: 9,
    chinese: "复习",
    pinyin: "fùxí",
    meaning: "Ôn tập",
    example: {
      sentence: "考试前要好好复习。",
      pinyin: "Kǎoshì qián yào hǎohǎo fùxí.",
      translation: "Trước kỳ thi phải ôn tập thật tốt."
    },
    usage: "Động từ chỉ việc ôn lại bài học."
  },
  {
    id: 10,
    chinese: "南方",
    pinyin: "nánfāng",
    meaning: "Phía nam",
    example: {
      sentence: "我住在中国的南方。",
      pinyin: "Wǒ zhù zài Zhōngguó de nánfāng.",
      translation: "Tôi sống ở phía nam Trung Quốc."
    },
    usage: "Danh từ chỉ phương hướng phía nam."
  },
  {
    id: 11,
    chinese: "北方",
    pinyin: "běifāng",
    meaning: "Phía bắc",
    example: {
      sentence: "冬天北方很冷。",
      pinyin: "Dōngtiān běifāng hěn lěng.",
      translation: "Mùa đông phía bắc rất lạnh."
    },
    usage: "Danh từ chỉ phương hướng phía bắc."
  },
  {
    id: 12,
    chinese: "面包",
    pinyin: "miànbāo",
    meaning: "Bánh mì",
    example: {
      sentence: "我喜欢吃面包。",
      pinyin: "Wǒ xǐhuān chī miànbāo.",
      translation: "Tôi thích ăn bánh mì."
    },
    usage: "Danh từ chỉ loại thực phẩm làm từ bột mì."
  },
  {
    id: 13,
    chinese: "带",
    pinyin: "dài",
    meaning: "Mang theo",
    example: {
      sentence: "请带上你的护照。",
      pinyin: "Qǐng dài shàng nǐ de hùzhào.",
      translation: "Vui lòng mang theo hộ chiếu của bạn."
    },
    usage: "Động từ chỉ hành động mang theo một vật."
  },
  {
    id: 14,
    chinese: "地图",
    pinyin: "dìtú",
    meaning: "Bản đồ",
    example: {
      sentence: "这是一张世界地图。",
      pinyin: "Zhè shì yī zhāng shìjiè dìtú.",
      translation: "Đây là một tấm bản đồ thế giới."
    },
    usage: "Danh từ chỉ bản đồ dùng để định vị địa lý."
  },
  {
    id: 15,
    chinese: "搬",
    pinyin: "bān",
    meaning: "Dọn, dời",
    example: {
      sentence: "他们下个月搬家。",
      pinyin: "Tāmen xià gè yuè bānjiā.",
      translation: "Họ sẽ dọn nhà vào tháng sau."
    },
    usage: "Động từ chỉ hành động di chuyển đồ đạc hoặc chuyển nhà."
  }
];

export default vocabulary1;
