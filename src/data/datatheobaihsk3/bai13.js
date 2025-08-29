const words = [
  {
    id: 185,
    chinese: "终于",
    pinyin: "zhōngyú",
    meaning: "Cuối cùng",
    example: {
      sentence: "我们终于到达了目的地。",
      pinyin: "Wǒmen zhōngyú dàodá le mùdìdì.",
      translation: "Chúng tôi cuối cùng đã đến đích."
    },
    usage: "Trạng từ; dùng để diễn tả việc gì đó xảy ra sau một thời gian chờ đợi."
  },
  {
    id: 186,
    chinese: "爷爷",
    pinyin: "yéye",
    meaning: "Ông nội",
    example: {
      sentence: "我周末常去看爷爷。",
      pinyin: "Wǒ zhōumò cháng qù kàn yéye.",
      translation: "Cuối tuần tôi thường đi thăm ông nội."
    },
    usage: "Danh từ; gọi người ông (bên nội)."
  },
  {
    id: 187,
    chinese: "礼物",
    pinyin: "lǐwù",
    meaning: "Quà biếu, quà tặng",
    example: {
      sentence: "她给我一个漂亮的礼物。",
      pinyin: "Tā gěi wǒ yí gè piàoliang de lǐwù.",
      translation: "Cô ấy tặng tôi một món quà đẹp."
    },
    usage: "Danh từ; đồ dùng để tặng người khác."
  },
  {
    id: 188,
    chinese: "奶奶",
    pinyin: "nǎinai",
    meaning: "Bà nội",
    example: {
      sentence: "奶奶会做很好吃的饭菜。",
      pinyin: "Nǎinai huì zuò hěn hǎochī de fàncai.",
      translation: "Bà nội nấu đồ ăn rất ngon."
    },
    usage: "Danh từ; gọi người bà (bên nội)."
  },
  {
    id: 189,
    chinese: "遇到",
    pinyin: "yùdào",
    meaning: "Tình cờ gặp",
    example: {
      sentence: "昨天我在街上遇到一个老朋友。",
      pinyin: "Zuótiān wǒ zài jiē shàng yùdào yí gè lǎo péngyou.",
      translation: "Hôm qua tôi tình cờ gặp một người bạn cũ trên phố."
    },
    usage: "Động từ; gặp phải hoặc tình cờ gặp ai đó/điều gì đó."
  },
  {
    id: 190,
    chinese: "一边",
    pinyin: "yìbiān",
    meaning: "Vừa (làm việc này vừa làm việc kia)",
    example: {
      sentence: "她一边吃饭一边看电视。",
      pinyin: "Tā yìbiān chīfàn yìbiān kàn diànshì.",
      translation: "Cô ấy vừa ăn vừa xem TV."
    },
    usage: "Liên từ/ trạng từ; dùng để chỉ hai hành động xảy ra cùng lúc."
  },
  {
    id: 191,
    chinese: "过去",
    pinyin: "guòqù",
    meaning: "Quá khứ",
    example: {
      sentence: "过去的事情就让它过去吧。",
      pinyin: "Guòqù de shìqing jiù ràng tā guòqù ba.",
      translation: "Việc đã qua thì hãy để nó qua đi."
    },
    usage: "Danh từ; chỉ thời gian đã qua hoặc trước đây."
  },
  {
    id: 192,
    chinese: "一般",
    pinyin: "yìbān",
    meaning: "Thông thường",
    example: {
      sentence: "我一般早上七点起床。",
      pinyin: "Wǒ yìbān zǎoshang qī diǎn qǐchuáng.",
      translation: "Tôi thông thường thức dậy lúc 7 giờ sáng."
    },
    usage: "Trạng từ; diễn tả thói quen hoặc mức độ chung chung."
  },
  {
    id: 193,
    chinese: "愿意",
    pinyin: "yuànyì",
    meaning: "Muốn, sẵn sàng",
    example: {
      sentence: "如果你需要，我愿意帮忙。",
      pinyin: "Rúguǒ nǐ xūyào, wǒ yuànyì bāngmáng.",
      translation: "Nếu bạn cần, tôi sẵn lòng giúp đỡ."
    },
    usage: "Động từ; diễn tả ý muốn hoặc sự sẵn lòng làm việc gì đó."
  },
  {
    id: 194,
    chinese: "起来",
    pinyin: "qǐlái",
    meaning: "Lên, đi lên (động thái bắt đầu hành động)",
    example: {
      sentence: "请站起来。",
      pinyin: "Qǐng zhàn qǐlái.",
      translation: "Hãy đứng lên."
    },
    usage: "Bổ ngữ/ động từ phụ; thường dùng sau động từ để biểu thị hướng lên hoặc bắt đầu hành động."
  },
  {
    id: 195,
    chinese: "应该",
    pinyin: "yīnggāi",
    meaning: "Nên, cần phải",
    example: {
      sentence: "你应该多锻炼身体。",
      pinyin: "Nǐ yīnggāi duō duànliàn shēntǐ.",
      translation: "Bạn nên tập thể dục nhiều hơn."
    },
    usage: "Động từ khuyết thiếu biểu thị nghĩa nên làm điều gì."
  },
  {
    id: 196,
    chinese: "生活",
    pinyin: "shēnghuó",
    meaning: "Đời sống, cuộc sống",
    example: {
      sentence: "城市生活很方便。",
      pinyin: "Chéngshì shēnghuó hěn fāngbiàn.",
      translation: "Cuộc sống ở thành phố rất thuận tiện."
    },
    usage: "Danh từ; chỉ sinh hoạt và đời sống hàng ngày."
  },
  {
    id: 197,
    chinese: "校长",
    pinyin: "xiàozhǎng",
    meaning: "Hiệu trưởng",
    example: {
      sentence: "校长今天有一个重要会议。",
      pinyin: "Xiàozhǎng jīntiān yǒu yí gè zhòngyào huìyì.",
      translation: "Hiệu trưởng hôm nay có một cuộc họp quan trọng."
    },
    usage: "Danh từ; người đứng đầu trường học."
  },
  {
    id: 198,
    chinese: "坏",
    pinyin: "huài",
    meaning: "Quá, quá mức / xấu",
    example: {
      sentence: "天气变坏了，我们改天再去。",
      pinyin: "Tiānqì biàn huài le, wǒmen gǎitiān zài qù.",
      translation: "Thời tiết trở xấu, chúng ta đi vào ngày khác."
    },
    usage: "Tính từ; thường nghĩa xấu, hỏng. Trong một số ngữ cảnh có thể diễn đạt mức độ tiêu cực."
  },
  {
    id: 199,
    chinese: "经常",
    pinyin: "jīngcháng",
    meaning: "Thường xuyên",
    example: {
      sentence: "我经常去那家咖啡店。",
      pinyin: "Wǒ jīngcháng qù nà jiā kāfēidiàn.",
      translation: "Tôi thường xuyên đến quán cà phê đó."
    },
    usage: "Trạng từ; chỉ tần suất cao, thường làm việc gì đó."
  }
];

export default words;
