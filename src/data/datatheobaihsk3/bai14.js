const vocabulary = [
  {
    id: 200,
    chinese: "打扫",
    pinyin: "dǎsǎo",
    meaning: "Quét dọn",
    example: {
      sentence: "我每天打扫房间。",
      pinyin: "Wǒ měitiān dǎsǎo fángjiān.",
      translation: "Tôi quét dọn phòng mỗi ngày."
    },
    usage: "Động từ; chỉ hành động quét dọn, làm sạch một nơi."
  },
  {
    id: 201,
    chinese: "干净",
    pinyin: "gānjìng",
    meaning: "Sạch sẽ",
    example: {
      sentence: "房间很干净。",
      pinyin: "Fángjiān hěn gānjìng.",
      translation: "Phòng rất sạch sẽ."
    },
    usage: "Tính từ; miêu tả trạng thái sạch sẽ, không bẩn."
  },
  {
    id: 202,
    chinese: "然后",
    pinyin: "ránhòu",
    meaning: "Sau đó",
    example: {
      sentence: "先吃饭，然后去看电影。",
      pinyin: "Xiān chīfàn, ránhòu qù kàn diànyǐng.",
      translation: "Trước ăn cơm, sau đó đi xem phim."
    },
    usage: "Liên từ; chỉ trình tự, xảy ra tiếp theo."
  },
  {
    id: 203,
    chinese: "冰箱",
    pinyin: "bīngxiāng",
    meaning: "Tủ lạnh",
    example: {
      sentence: "冰箱里有很多水果。",
      pinyin: "Bīngxiāng lǐ yǒu hěn duō shuǐguǒ.",
      translation: "Trong tủ lạnh có nhiều trái cây."
    },
    usage: "Danh từ; đồ dùng điện lạnh để bảo quản thực phẩm."
  },
  {
    id: 204,
    chinese: "洗澡",
    pinyin: "xǐzǎo",
    meaning: "Tắm, tắm rửa",
    example: {
      sentence: "我每天晚上洗澡。",
      pinyin: "Wǒ měitiān wǎnshang xǐzǎo.",
      translation: "Tôi tắm mỗi tối."
    },
    usage: "Động từ; chỉ hành động rửa cơ thể để sạch sẽ."
  },
  {
    id: 205,
    chinese: "节目",
    pinyin: "jiémù",
    meaning: "Chương trình truyền hình",
    example: {
      sentence: "这个节目很有趣。",
      pinyin: "Zhège jiémù hěn yǒuqù.",
      translation: "Chương trình này rất thú vị."
    },
    usage: "Danh từ; thường dùng cho các chương trình giải trí, TV."
  },
  {
    id: 206,
    chinese: "月亮",
    pinyin: "yuèliang",
    meaning: "Mặt trăng",
    example: {
      sentence: "今晚的月亮很圆。",
      pinyin: "Jīnwǎn de yuèliang hěn yuán.",
      translation: "Mặt trăng tối nay rất tròn."
    },
    usage: "Danh từ; chỉ vệ tinh tự nhiên của Trái Đất."
  },
  {
    id: 207,
    chinese: "像",
    pinyin: "xiàng",
    meaning: "Giống",
    example: {
      sentence: "你长得像你妈妈。",
      pinyin: "Nǐ zhǎng de xiàng nǐ māma.",
      translation: "Bạn trông giống mẹ bạn."
    },
    usage: "Động từ; chỉ sự giống nhau về hình dáng, tính chất."
  },
  {
    id: 208,
    chinese: "盘子",
    pinyin: "pánzi",
    meaning: "Đĩa, mâm",
    example: {
      sentence: "桌子上有一个盘子。",
      pinyin: "Zhuōzi shàng yǒu yī gè pánzi.",
      translation: "Trên bàn có một cái đĩa."
    },
    usage: "Danh từ; vật dụng để đựng thức ăn."
  },
  {
    id: 209,
    chinese: "刮风",
    pinyin: "guāfēng",
    meaning: "Nổi gió",
    example: {
      sentence: "今天刮风了，别出门。",
      pinyin: "Jīntiān guāfēng le, bié chūmén.",
      translation: "Hôm nay nổi gió rồi, đừng ra ngoài."
    },
    usage: "Động từ; chỉ hiện tượng gió thổi mạnh."
  },
  {
    id: 210,
    chinese: "叔叔",
    pinyin: "shūshu",
    meaning: "Chú",
    example: {
      sentence: "叔叔给我买了礼物。",
      pinyin: "Shūshu gěi wǒ mǎi le lǐwù.",
      translation: "Chú mua quà cho tôi."
    },
    usage: "Danh từ; gọi em trai của bố hoặc người đàn ông cùng tuổi bố."
  },
  {
    id: 211,
    chinese: "阿姨",
    pinyin: "āyí",
    meaning: "Dì, cô",
    example: {
      sentence: "阿姨在厨房做饭。",
      pinyin: "Āyí zài chúfáng zuòfàn.",
      translation: "Dì đang nấu ăn trong bếp."
    },
    usage: "Danh từ; chỉ chị/em gái của mẹ hoặc phụ nữ cùng tuổi mẹ."
  },
  {
    id: 212,
    chinese: "故事",
    pinyin: "gùshi",
    meaning: "Truyện, câu truyện",
    example: {
      sentence: "爷爷讲了一个有趣的故事。",
      pinyin: "Yéye jiǎng le yī gè yǒuqù de gùshi.",
      translation: "Ông kể một câu chuyện thú vị."
    },
    usage: "Danh từ; kể lại sự kiện, tình tiết để giải trí hoặc giáo dục."
  },
  {
    id: 213,
    chinese: "声音",
    pinyin: "shēngyīn",
    meaning: "Âm thanh, tiếng",
    example: {
      sentence: "我听到了奇怪的声音。",
      pinyin: "Wǒ tīng dào le qíguài de shēngyīn.",
      translation: "Tôi nghe thấy một âm thanh lạ."
    },
    usage: "Danh từ; chỉ tiếng phát ra từ người hoặc vật."
  },
  {
    id: 214,
    chinese: "菜单",
    pinyin: "càidān",
    meaning: "Thực đơn",
    example: {
      sentence: "请把菜单拿给我。",
      pinyin: "Qǐng bǎ càidān ná gěi wǒ.",
      translation: "Làm ơn đưa thực đơn cho tôi."
    },
    usage: "Danh từ; danh sách món ăn trong quán ăn, nhà hàng."
  },
  {
    id: 215,
    chinese: "简单",
    pinyin: "jiǎndān",
    meaning: "Đơn giản",
    example: {
      sentence: "这个问题很简单。",
      pinyin: "Zhège wèntí hěn jiǎndān.",
      translation: "Câu hỏi này rất đơn giản."
    },
    usage: "Tính từ; chỉ mức độ dễ, không phức tạp."
  },
  {
    id: 216,
    chinese: "香蕉",
    pinyin: "xiāngjiāo",
    meaning: "Chuối tiêu",
    example: {
      sentence: "我喜欢吃香蕉。",
      pinyin: "Wǒ xǐhuān chī xiāngjiāo.",
      translation: "Tôi thích ăn chuối."
    },
    usage: "Danh từ; loại trái cây có vỏ màu vàng, dài, vị ngọt."
  }
];

export default vocabulary;
