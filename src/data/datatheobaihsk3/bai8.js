// Từ vựng từ id = 107 đến 123 (theo mẫu đã cho)
// Copy/paste để nối tiếp danh sách hiện có của bạn.

const words = [
  {
    id: 107,
    chinese: "又",
    pinyin: "yòu",
    meaning: "Lại",
    example: {
      sentence: "他又迟到了。",
      pinyin: "Tā yòu chídào le.",
      translation: "Anh ấy lại đến muộn."
    },
    usage: "Phó từ chỉ sự lặp lại trong quá khứ/đã xảy ra; tương lai thường dùng 再."
  },
  {
    id: 108,
    chinese: "满意",
    pinyin: "mǎnyì",
    meaning: "Hài lòng, vừa ý",
    example: {
      sentence: "我对结果很满意。",
      pinyin: "Wǒ duì jiéguǒ hěn mǎnyì.",
      translation: "Tôi rất hài lòng với kết quả."
    },
    usage: "Tính từ; cấu trúc thường dùng: 对…满意/不满意。"
  },
  {
    id: 109,
    chinese: "电梯",
    pinyin: "diàntī",
    meaning: "Thang máy",
    example: {
      sentence: "我们坐电梯上去吧。",
      pinyin: "Wǒmen zuò diàntī shàngqù ba.",
      translation: "Chúng ta đi thang máy lên nhé."
    },
    usage: "Danh từ; thường đi với 坐/乘。"
  },
  {
    id: 110,
    chinese: "层",
    pinyin: "céng",
    meaning: "Tầng",
    example: {
      sentence: "我住在五层。",
      pinyin: "Wǒ zhù zài wǔ céng.",
      translation: "Tôi ở tầng 5."
    },
    usage: "Danh từ/lượng từ chỉ tầng của tòa nhà."
  },
  {
    id: 111,
    chinese: "害怕",
    pinyin: "hàipà",
    meaning: "Sợ",
    example: {
      sentence: "她很害怕黑暗。",
      pinyin: "Tā hěn hàipà hēi'àn.",
      translation: "Cô ấy rất sợ bóng tối."
    },
    usage: "Động/tính từ; cấu trúc: 害怕+名词/动词短语。"
  },
  {
    id: 112,
    chinese: "熊猫",
    pinyin: "xióngmāo",
    meaning: "Gấu trúc",
    example: {
      sentence: "熊猫是中国的国宝。",
      pinyin: "Xióngmāo shì Zhōngguó de guóbǎo.",
      translation: "Gấu trúc là quốc bảo của Trung Quốc."
    },
    usage: "Danh từ chỉ loài vật."
  },
  {
    id: 113,
    chinese: "见面",
    pinyin: "jiànmiàn",
    meaning: "Gặp mặt, gặp nhau, gặp",
    example: {
      sentence: "明天见面聊吧。",
      pinyin: "Míngtiān jiànmiàn liáo ba.",
      translation: "Ngày mai gặp mặt nói chuyện nhé."
    },
    usage: "Động từ ly hợp; thường dùng với 跟/与：跟他见面。"
  },
  {
    id: 114,
    chinese: "安静",
    pinyin: "ānjìng",
    meaning: "Yên tĩnh",
    example: {
      sentence: "图书馆很安静。",
      pinyin: "Túshūguǎn hěn ānjìng.",
      translation: "Thư viện rất yên tĩnh."
    },
    usage: "Tính từ; mô tả môi trường/không gian/âm thanh."
  },
  {
    id: 115,
    chinese: "可乐",
    pinyin: "kělè",
    meaning: "coca",
    example: {
      sentence: "我想喝一瓶可乐。",
      pinyin: "Wǒ xiǎng hē yì píng kělè.",
      translation: "Tôi muốn uống một chai coca."
    },
    usage: "Danh từ; lượng từ thường dùng: 瓶、罐。"
  },
  {
    id: 116,
    chinese: "一会儿",
    pinyin: "yíhuìr",
    meaning: "Chốc lát, một lát",
    example: {
      sentence: "等我一会儿。",
      pinyin: "Děng wǒ yíhuìr.",
      translation: "Đợi tôi một lát."
    },
    usage: "Cụm chỉ khoảng thời gian ngắn; có thể viết 一会。"
  },
  {
    id: 117,
    chinese: "马上",
    pinyin: "mǎshàng",
    meaning: "Liền, ngay, lập tức",
    example: {
      sentence: "我马上回来。",
      pinyin: "Wǒ mǎshàng huílái.",
      translation: "Tôi quay lại ngay."
    },
    usage: "Phó từ chỉ thời gian rất gần, xảy ra ngay lập tức."
  },
  {
    id: 118,
    chinese: "洗手间",
    pinyin: "xǐshǒujiān",
    meaning: "nhà vệ sinh",
    example: {
      sentence: "请问洗手间在哪里？",
      pinyin: "Qǐngwèn xǐshǒujiān zài nǎlǐ?",
      translation: "Xin hỏi nhà vệ sinh ở đâu?"
    },
    usage: "Danh từ; đồng nghĩa: 卫生间/厕所 (khác sắc thái)."
  },
  {
    id: 119,
    chinese: "老",
    pinyin: "lǎo",
    meaning: "già, cũ",
    example: {
      sentence: "这件衣服有点儿老了。",
      pinyin: "Zhè jiàn yīfu yǒudiǎnr lǎo le.",
      translation: "Cái áo này hơi cũ rồi."
    },
    usage: "Tính từ; cũng dùng làm kính ngữ trước họ: 老王。"
  },
  {
    id: 120,
    chinese: "几乎",
    pinyin: "jīhū",
    meaning: "Hầu như, gần như",
    example: {
      sentence: "我几乎忘了这件事。",
      pinyin: "Wǒ jīhū wàng le zhè jiàn shì.",
      translation: "Tôi suýt nữa thì quên chuyện này."
    },
    usage: "Phó từ; thường kết hợp với 都/没/没有 để nhấn mạnh."
  },
  {
    id: 121,
    chinese: "变化",
    pinyin: "biànhuà",
    meaning: "Thay đổi",
    example: {
      sentence: "这几年城市变化很大。",
      pinyin: "Zhè jǐ nián chéngshì biànhuà hěn dà.",
      translation: "Vài năm gần đây thành phố thay đổi rất nhiều."
    },
    usage: "Vừa là danh từ vừa là động từ: 发生变化/情况变化。"
  },
  {
    id: 122,
    chinese: "健康",
    pinyin: "jiànkāng",
    meaning: "Khoẻ mạnh",
    example: {
      sentence: "保持健康很重要。",
      pinyin: "Bǎochí jiànkāng hěn zhòngyào.",
      translation: "Giữ gìn sức khỏe là rất quan trọng."
    },
    usage: "Danh/tính từ; thường đi với 保持/注意/影响。"
  },
  {
    id: 123,
    chinese: "重要",
    pinyin: "zhòngyào",
    meaning: "Quan trọng",
    example: {
      sentence: "这是一个很重要的问题。",
      pinyin: "Zhè shì yí gè hěn zhòngyào de wèntí.",
      translation: "Đây là một vấn đề rất quan trọng."
    },
    usage: "Tính từ; cấu trúc: 对…很重要/非常重要。"
  }
];

export default words;
