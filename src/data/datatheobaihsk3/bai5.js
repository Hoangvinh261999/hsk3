// hsk3_words_65_onward.js
const hsk3Words = [
  {
    id: 65,
    chinese: "发烧",
    pinyin: "fāshāo",
    meaning: "Sốt",
    example: {
      sentence: "他昨天发烧了，没去上班。",
      pinyin: "Tā zuótiān fāshāo le, méi qù shàngbān.",
      translation: "Hôm qua anh ấy bị sốt nên không đi làm."
    },
    usage: "Động từ; chỉ tình trạng sốt."
  },
  {
    id: 66,
    chinese: "给",
    pinyin: "gěi",
    meaning: "Cho, tặng; cho (giới từ)",
    example: {
      sentence: "老师给了我一本书。",
      pinyin: "Lǎoshī gěi le wǒ yì běn shū.",
      translation: "Cô giáo cho tôi một quyển sách."
    },
    usage: "Vừa là động từ “cho/tặng”, vừa là giới từ chỉ đối tượng."
  },
  {
    id: 67,
    chinese: "照顾",
    pinyin: "zhàogù",
    meaning: "Chăm sóc",
    example: {
      sentence: "请照顾好自己。",
      pinyin: "Qǐng zhàogù hǎo zìjǐ.",
      translation: "Hãy chăm sóc bản thân cho tốt."
    },
    usage: "Động từ; chăm sóc người/vật."
  },
  {
    id: 68,
    chinese: "需要",
    pinyin: "xūyào",
    meaning: "Cần",
    example: {
      sentence: "如果你需要帮助，告诉我。",
      pinyin: "Rúguǒ nǐ xūyào bāngzhù, gàosu wǒ.",
      translation: "Nếu bạn cần giúp, hãy nói với tôi."
    },
    usage: "Động từ; nhu cầu, cần thiết."
  },
  {
    id: 69,
    chinese: "用",
    pinyin: "yòng",
    meaning: "Dùng, sử dụng",
    example: {
      sentence: "这个手机很好用。",
      pinyin: "Zhège shǒujī hěn hǎo yòng.",
      translation: "Chiếc điện thoại này dùng rất tốt."
    },
    usage: "Động từ; sử dụng công cụ, phương tiện."
  },
  {
    id: 70,
    chinese: "感冒",
    pinyin: "gǎnmào",
    meaning: "Cảm mạo, bị cảm",
    example: {
      sentence: "天气变冷了，容易感冒。",
      pinyin: "Tiānqì biàn lěng le, róngyì gǎnmào.",
      translation: "Trời trở lạnh dễ bị cảm."
    },
    usage: "Danh/động từ; chỉ bệnh cảm mạo."
  },
  {
    id: 71,
    chinese: "张",
    pinyin: "Zhāng",
    meaning: "Họ Trương",
    example: {
      sentence: "他姓张，叫张明。",
      pinyin: "Tā xìng Zhāng, jiào Zhāng Míng.",
      translation: "Anh ấy họ Trương, tên Trương Minh."
    },
    usage: "Danh từ; họ người Trung Quốc."
  },
  {
    id: 72,
    chinese: "季节",
    pinyin: "jìjié",
    meaning: "Mùa (mùa trong năm)",
    example: {
      sentence: "这个城市四季分明，季节很清楚。",
      pinyin: "Zhège chéngshì sìjì fēnmíng, jìjié hěn qīngchǔ.",
      translation: "Thành phố này bốn mùa rõ rệt."
    },
    usage: "Danh từ; mùa (xuân, hạ, thu, đông)."
  },
  {
    id: 73,
    chinese: "春天",
    pinyin: "chūntiān",
    meaning: "Mùa xuân",
    example: {
      sentence: "春天花开，天气很舒服。",
      pinyin: "Chūntiān huā kāi, tiānqì hěn shūfu.",
      translation: "Mùa xuân hoa nở, thời tiết rất dễ chịu."
    },
    usage: "Danh từ; một trong bốn mùa."
  },
  {
    id: 74,
    chinese: "草",
    pinyin: "cǎo",
    meaning: "Cỏ",
    example: {
      sentence: "公园里的草很绿。",
      pinyin: "Gōngyuán lǐ de cǎo hěn lǜ.",
      translation: "Cỏ trong công viên rất xanh."
    },
    usage: "Danh từ; thực vật cỏ."
  },
  {
    id: 75,
    chinese: "夏天",
    pinyin: "xiàtiān",
    meaning: "Mùa hè",
    example: {
      sentence: "夏天常常很热。",
      pinyin: "Xiàtiān chángcháng hěn rè.",
      translation: "Mùa hè thường rất nóng."
    },
    usage: "Danh từ; một trong bốn mùa."
  },
  {
    id: 76,
    chinese: "裙子",
    pinyin: "qúnzi",
    meaning: "Váy",
    example: {
      sentence: "她穿了一条新裙子。",
      pinyin: "Tā chuān le yì tiáo xīn qúnzi.",
      translation: "Cô ấy mặc một chiếc váy mới."
    },
    usage: "Danh từ; quần áo nữ."
  },
  {
    id: 77,
    chinese: "最近",
    pinyin: "zuìjìn",
    meaning: "Gần đây, dạo này",
    example: {
      sentence: "你最近怎么样？",
      pinyin: "Nǐ zuìjìn zěnmeyàng?",
      translation: "Dạo này bạn thế nào?"
    },
    usage: "Trạng từ/ danh từ thời gian; chỉ thời gian gần đây."
  },
  {
    id: 78,
    chinese: "越",
    pinyin: "yuè",
    meaning: "Càng (kết cấu 越…越…)",
    example: {
      sentence: "天气越来​越冷。",
      pinyin: "Tiānqì yuèláiyuè lěng.",
      translation: "Thời tiết ngày càng lạnh."
    },
    usage: "Phó từ; thường dùng cấu trúc “越A越B”."
  },
  {
    id: 79,
    chinese: "当然",
    pinyin: "dāngrán",
    meaning: "Đương nhiên, dĩ nhiên",
    example: {
      sentence: "当然可以帮你。",
      pinyin: "Dāngrán kěyǐ bāng nǐ.",
      translation: "Đương nhiên là có thể giúp bạn."
    },
    usage: "Phó từ; biểu thị sự khẳng định mạnh."
  }
];
export default hsk3Words;