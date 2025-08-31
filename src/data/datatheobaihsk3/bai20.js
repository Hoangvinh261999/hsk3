
const vocabulary4 = [
  {
    id: 297,
    chinese: "照相机",
    pinyin: "zhàoxiàngjī",
    meaning: "Máy ảnh",
    example: {
      sentence: "他买了一台照相机。",
      pinyin: "Tā mǎile yì tái zhàoxiàngjī.",
      translation: "Anh ấy đã mua một chiếc máy ảnh."
    },
    usage: "Danh từ; thiết bị dùng để chụp ảnh."
  },
  {
    id: 298,
    chinese: "被",
    pinyin: "bèi",
    meaning: "Chỉ thể bị động, bị",
    example: {
      sentence: "他被老师批评了。",
      pinyin: "Tā bèi lǎoshī pīpíng le.",
      translation: "Anh ấy bị thầy giáo phê bình."
    },
    usage: "Giới từ; dùng để biểu thị câu bị động."
  },
  {
    id: 299,
    chinese: "难过",
    pinyin: "nánguò",
    meaning: "Buồn",
    example: {
      sentence: "她听到这个消息很难过。",
      pinyin: "Tā tīngdào zhège xiāoxi hěn nánguò.",
      translation: "Cô ấy rất buồn khi nghe tin này."
    },
    usage: "Tính từ; diễn tả tâm trạng buồn bã."
  },
  {
    id: 300,
    chinese: "东",
    pinyin: "dōng",
    meaning: "Phía đông",
    example: {
      sentence: "太阳从东边升起。",
      pinyin: "Tàiyáng cóng dōng biān shēng qǐ.",
      translation: "Mặt trời mọc từ phía đông."
    },
    usage: "Danh từ; chỉ phương hướng đông."
  },
  {
    id: 301,
    chinese: "信用卡",
    pinyin: "xìnyòngkǎ",
    meaning: "Thẻ tín dụng",
    example: {
      sentence: "我用信用卡付款。",
      pinyin: "Wǒ yòng xìnyòngkǎ fùkuǎn.",
      translation: "Tôi thanh toán bằng thẻ tín dụng."
    },
    usage: "Danh từ; công cụ thanh toán điện tử."
  },
  {
    id: 302,
    chinese: "关心",
    pinyin: "guānxīn",
    meaning: "Quan tâm, chú ý",
    example: {
      sentence: "父母非常关心我们的学习。",
      pinyin: "Fùmǔ fēicháng guānxīn wǒmen de xuéxí.",
      translation: "Cha mẹ rất quan tâm đến việc học của chúng tôi."
    },
    usage: "Động từ; biểu thị sự quan tâm."
  },
  {
    id: 303,
    chinese: "只有……才……",
    pinyin: "zhǐyǒu...cái...",
    meaning: "Chỉ có...thì/mới...",
    example: {
      sentence: "只有努力学习，才能取得好成绩。",
      pinyin: "Zhǐyǒu nǔlì xuéxí, cáinéng qǔdé hǎo chéngjì.",
      translation: "Chỉ có chăm chỉ học tập thì mới đạt được thành tích tốt."
    },
    usage: "Cấu trúc; dùng để biểu thị điều kiện duy nhất."
  },
  {
    id: 304,
    chinese: "成绩",
    pinyin: "chéngjì",
    meaning: "Thành tích",
    example: {
      sentence: "他的成绩很好。",
      pinyin: "Tā de chéngjì hěn hǎo.",
      translation: "Thành tích của anh ấy rất tốt."
    },
    usage: "Danh từ; kết quả học tập hoặc công việc."
  },
  {
    id: 305,
    chinese: "碗",
    pinyin: "wǎn",
    meaning: "Bát, chén",
    example: {
      sentence: "我想要一碗米饭。",
      pinyin: "Wǒ xiǎng yào yì wǎn mǐfàn.",
      translation: "Tôi muốn một bát cơm."
    },
    usage: "Danh từ; vật dụng để đựng thức ăn, hoặc lượng từ cho đồ ăn."
  },
  {
    id: 306,
    chinese: "分",
    pinyin: "fēn",
    meaning: "Phân biệt",
    example: {
      sentence: "我分不清这两种颜色。",
      pinyin: "Wǒ fēn bù qīng zhè liǎng zhǒng yánsè.",
      translation: "Tôi không phân biệt được hai màu này."
    },
    usage: "Động từ; chỉ hành động phân tách hoặc phân biệt."
  },
  {
    id: 307,
    chinese: "解决",
    pinyin: "jiějué",
    meaning: "Giải quyết",
    example: {
      sentence: "我们需要解决这个问题。",
      pinyin: "Wǒmen xūyào jiějué zhège wèntí.",
      translation: "Chúng ta cần giải quyết vấn đề này."
    },
    usage: "Động từ; xử lý và tìm cách giải quyết."
  },
  {
    id: 308,
    chinese: "试",
    pinyin: "shì",
    meaning: "Thử",
    example: {
      sentence: "请试一下这件衣服。",
      pinyin: "Qǐng shì yíxià zhè jiàn yīfu.",
      translation: "Hãy thử bộ quần áo này."
    },
    usage: "Động từ; thử nghiệm, thử mặc."
  },
  {
    id: 309,
    chinese: "真正",
    pinyin: "zhēnzhèng",
    meaning: "Thật sự",
    example: {
      sentence: "他是真正的朋友。",
      pinyin: "Tā shì zhēnzhèng de péngyou.",
      translation: "Anh ấy là một người bạn thật sự."
    },
    usage: "Trạng từ/Tính từ; diễn tả sự chân thật."
  },
  {
    id: 310,
    chinese: "多么",
    pinyin: "duōme",
    meaning: "Mức độ tương đối cao, mấy, bao nhiêu",
    example: {
      sentence: "这个地方多么美丽啊！",
      pinyin: "Zhège dìfang duōme měilì a!",
      translation: "Nơi này đẹp biết bao!"
    },
    usage: "Phó từ; dùng trong câu cảm thán để chỉ mức độ."
  }
];

export default vocabulary4;
