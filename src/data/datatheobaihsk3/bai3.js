const vocabulary3 = [
  {
    id: 34,
    chinese: "还是",
    pinyin: "háishì",
    meaning: "Hay là",
    example: {
      sentence: "我们去看电影还是去逛街？",
      pinyin: "Wǒmen qù kàn diànyǐng háishì qù guàngjiē?",
      translation: "Chúng ta đi xem phim hay đi dạo phố?"
    },
    usage: "Liên từ dùng trong câu hỏi để đưa ra sự lựa chọn."
  },
  {
    id: 35,
    chinese: "爬山",
    pinyin: "páshān",
    meaning: "Leo núi",
    example: {
      sentence: "周末我们去爬山吧。",
      pinyin: "Zhōumò wǒmen qù páshān ba.",
      translation: "Cuối tuần chúng ta đi leo núi nhé."
    },
    usage: "Động từ chỉ hoạt động leo lên núi."
  },
  {
    id: 36,
    chinese: "小心",
    pinyin: "xiǎoxīn",
    meaning: "Cẩn thận",
    example: {
      sentence: "过马路要小心。",
      pinyin: "Guò mǎlù yào xiǎoxīn.",
      translation: "Qua đường phải cẩn thận."
    },
    usage: "Động từ hoặc tính từ chỉ sự chú ý để tránh nguy hiểm."
  },
  {
    id: 37,
    chinese: "条",
    pinyin: "tiáo",
    meaning: "Lượng từ cho quần áo cái váy, cái quần",
    example: {
      sentence: "我买了一条裙子。",
      pinyin: "Wǒ mǎile yī tiáo qúnzi.",
      translation: "Tôi mua một cái váy."
    },
    usage: "Lượng từ cho vật dài như quần, váy, đường, sông."
  },
  {
    id: 38,
    chinese: "裤子",
    pinyin: "kùzi",
    meaning: "Cái quần",
    example: {
      sentence: "这条裤子很好看。",
      pinyin: "Zhè tiáo kùzi hěn hǎokàn.",
      translation: "Chiếc quần này rất đẹp."
    },
    usage: "Danh từ chỉ quần mặc ở phần dưới cơ thể."
  },
  {
    id: 39,
    chinese: "记得",
    pinyin: "jìde",
    meaning: "Còn nhớ",
    example: {
      sentence: "你还记得他吗？",
      pinyin: "Nǐ hái jìde tā ma?",
      translation: "Bạn còn nhớ anh ấy không?"
    },
    usage: "Động từ chỉ việc nhớ một điều gì đó trong quá khứ."
  },
  {
    id: 40,
    chinese: "衬衫",
    pinyin: "chènshān",
    meaning: "Áo sơ mi",
    example: {
      sentence: "这件衬衫多少钱？",
      pinyin: "Zhè jiàn chènshān duōshǎo qián?",
      translation: "Chiếc áo sơ mi này bao nhiêu tiền?"
    },
    usage: "Danh từ chỉ loại áo sơ mi."
  },
  {
    id: 41,
    chinese: "元",
    pinyin: "yuán",
    meaning: "Đơn vị tiền tệ",
    example: {
      sentence: "这本书十元。",
      pinyin: "Zhè běn shū shí yuán.",
      translation: "Cuốn sách này 10 tệ."
    },
    usage: "Danh từ chỉ đơn vị tiền tệ Trung Quốc."
  },
  {
    id: 42,
    chinese: "新鲜",
    pinyin: "xīnxiān",
    meaning: "Tươi",
    example: {
      sentence: "这些水果很新鲜。",
      pinyin: "Zhèxiē shuǐguǒ hěn xīnxiān.",
      translation: "Những trái cây này rất tươi."
    },
    usage: "Tính từ chỉ độ tươi mới của thực phẩm."
  },
  {
    id: 43,
    chinese: "甜",
    pinyin: "tián",
    meaning: "Ngọt",
    example: {
      sentence: "这个苹果很甜。",
      pinyin: "Zhège píngguǒ hěn tián.",
      translation: "Quả táo này rất ngọt."
    },
    usage: "Tính từ chỉ vị ngọt của thức ăn."
  },
  {
    id: 44,
    chinese: "只",
    pinyin: "zhǐ",
    meaning: "Chỉ",
    example: {
      sentence: "我只想休息。",
      pinyin: "Wǒ zhǐ xiǎng xiūxi.",
      translation: "Tôi chỉ muốn nghỉ ngơi."
    },
    usage: "Trạng từ chỉ giới hạn phạm vi."
  },
  {
    id: 45,
    chinese: "放",
    pinyin: "fàng",
    meaning: "Đặt, để",
    example: {
      sentence: "把书放在桌子上。",
      pinyin: "Bǎ shū fàng zài zhuōzi shàng.",
      translation: "Đặt sách lên bàn."
    },
    usage: "Động từ chỉ hành động đặt, để một vật vào vị trí."
  },
  {
    id: 46,
    chinese: "饮料",
    pinyin: "yǐnliào",
    meaning: "Đồ uống",
    example: {
      sentence: "你想喝什么饮料？",
      pinyin: "Nǐ xiǎng hē shénme yǐnliào?",
      translation: "Bạn muốn uống đồ uống gì?"
    },
    usage: "Danh từ chỉ thức uống."
  },
  {
    id: 47,
    chinese: "或者",
    pinyin: "huòzhě",
    meaning: "Hoặc",
    example: {
      sentence: "我们可以坐火车或者飞机去。",
      pinyin: "Wǒmen kěyǐ zuò huǒchē huòzhě fēijī qù.",
      translation: "Chúng ta có thể đi bằng tàu hỏa hoặc máy bay."
    },
    usage: "Liên từ dùng trong câu trần thuật để đưa ra lựa chọn."
  },
  {
    id: 48,
    chinese: "舒服",
    pinyin: "shūfu",
    meaning: "Dễ chịu",
    example: {
      sentence: "这个房间很舒服。",
      pinyin: "Zhège fángjiān hěn shūfu.",
      translation: "Căn phòng này rất dễ chịu."
    },
    usage: "Tính từ chỉ trạng thái thoải mái."
  },
  {
    id: 49,
    chinese: "花",
    pinyin: "huā",
    meaning: "Hoa",
    example: {
      sentence: "花园里有很多花。",
      pinyin: "Huāyuán lǐ yǒu hěn duō huā.",
      translation: "Trong vườn có rất nhiều hoa."
    },
    usage: "Danh từ chỉ loài thực vật nở hoa."
  },
  {
    id: 50,
    chinese: "绿",
    pinyin: "lǜ",
    meaning: "Có màu xanh",
    example: {
      sentence: "这件衣服是绿色的。",
      pinyin: "Zhè jiàn yīfu shì lǜsè de.",
      translation: "Chiếc áo này có màu xanh lá."
    },
    usage: "Tính từ chỉ màu xanh lá cây."
  }
];

export default vocabulary3;
