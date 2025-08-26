// Từ vựng từ id = 107 đến 151 (theo mẫu đã cho)

const words = [
  // Giữ nguyên các mục từ 107 đến 136...
  {
    id: 137,
    chinese: "个子",
    pinyin: "gèzi",
    meaning: "Vóc dáng, thân hình",
    example: {
      sentence: "她个子很高。",
      pinyin: "Tā gèzi hěn gāo.",
      translation: "Cô ấy có vóc dáng rất cao."
    },
    usage: "Danh từ; chỉ chiều cao, vóc dáng của con người."
  },
  {
    id: 138,
    chinese: "矮",
    pinyin: "ǎi",
    meaning: "Thấp",
    example: {
      sentence: "这个桌子有点矮。",
      pinyin: "Zhège zhuōzi yǒudiǎn ǎi.",
      translation: "Cái bàn này hơi thấp."
    },
    usage: "Tính từ; mô tả chiều cao thấp."
  },
  {
    id: 139,
    chinese: "历史",
    pinyin: "lìshǐ",
    meaning: "Môn lịch sử",
    example: {
      sentence: "我喜欢学习历史。",
      pinyin: "Wǒ xǐhuan xuéxí lìshǐ.",
      translation: "Tôi thích học lịch sử."
    },
    usage: "Danh từ; chỉ lịch sử hoặc môn học lịch sử."
  },
  {
    id: 140,
    chinese: "体育",
    pinyin: "tǐyù",
    meaning: "Môn thể dục",
    example: {
      sentence: "他在体育课上很积极。",
      pinyin: "Tā zài tǐyù kè shang hěn jījí.",
      translation: "Anh ấy rất tích cực trong giờ thể dục."
    },
    usage: "Danh từ; chỉ thể thao hoặc môn học thể dục."
  },
  {
    id: 141,
    chinese: "数学",
    pinyin: "shùxué",
    meaning: "Môn toán",
    example: {
      sentence: "数学题不容易。",
      pinyin: "Shùxué tí bù róngyì.",
      translation: "Bài toán không dễ."
    },
    usage: "Danh từ; môn học về số học và tính toán."
  },
  {
    id: 142,
    chinese: "方便",
    pinyin: "fāngbiàn",
    meaning: "Thuận tiện",
    example: {
      sentence: "这里买东西很方便。",
      pinyin: "Zhèlǐ mǎi dōngxi hěn fāngbiàn.",
      translation: "Mua đồ ở đây rất thuận tiện."
    },
    usage: "Tính từ; chỉ sự thuận lợi, dễ dàng."
  },
  {
    id: 143,
    chinese: "自行车",
    pinyin: "zìxíngchē",
    meaning: "Xe đạp",
    example: {
      sentence: "他骑自行车去学校。",
      pinyin: "Tā qí zìxíngchē qù xuéxiào.",
      translation: "Anh ấy đi xe đạp đến trường."
    },
    usage: "Danh từ; phương tiện giao thông hai bánh không động cơ."
  },
  {
    id: 144,
    chinese: "骑",
    pinyin: "qí",
    meaning: "Cưỡi, đi",
    example: {
      sentence: "我会骑马。",
      pinyin: "Wǒ huì qí mǎ.",
      translation: "Tôi biết cưỡi ngựa."
    },
    usage: "Động từ; chỉ hành động cưỡi (xe, ngựa)."
  },
  {
    id: 145,
    chinese: "旧",
    pinyin: "jiù",
    meaning: "Cũ",
    example: {
      sentence: "这件衣服太旧了。",
      pinyin: "Zhè jiàn yīfu tài jiù le.",
      translation: "Bộ quần áo này quá cũ rồi."
    },
    usage: "Tính từ; chỉ đồ vật đã qua sử dụng hoặc lâu năm."
  },
  {
    id: 146,
    chinese: "换",
    pinyin: "huàn",
    meaning: "Đổi",
    example: {
      sentence: "请帮我换一个房间。",
      pinyin: "Qǐng bāng wǒ huàn yí gè fángjiān.",
      translation: "Xin hãy giúp tôi đổi một phòng khác."
    },
    usage: "Động từ; đổi, thay đổi vật hoặc vị trí."
  },
  {
    id: 147,
    chinese: "地方",
    pinyin: "dìfang",
    meaning: "Chỗ, nơi",
    example: {
      sentence: "这个地方很漂亮。",
      pinyin: "Zhège dìfang hěn piàoliang.",
      translation: "Nơi này rất đẹp."
    },
    usage: "Danh từ; chỉ vị trí, địa điểm."
  },
  {
    id: 148,
    chinese: "中介",
    pinyin: "zhōngjiè",
    meaning: "Môi giới",
    example: {
      sentence: "我们通过中介找到了房子。",
      pinyin: "Wǒmen tōngguò zhōngjiè zhǎodào le fángzi.",
      translation: "Chúng tôi tìm được nhà thông qua môi giới."
    },
    usage: "Danh từ; chỉ cá nhân hoặc tổ chức trung gian."
  },
  {
    id: 149,
    chinese: "主要",
    pinyin: "zhǔyào",
    meaning: "Chủ yếu",
    example: {
      sentence: "他主要负责这个项目。",
      pinyin: "Tā zhǔyào fùzé zhège xiàngmù.",
      translation: "Anh ấy chủ yếu phụ trách dự án này."
    },
    usage: "Tính từ/phó từ; chỉ phần quan trọng nhất."
  },
  {
    id: 150,
    chinese: "环境",
    pinyin: "huánjìng",
    meaning: "Môi trường",
    example: {
      sentence: "这个城市的环境很好。",
      pinyin: "Zhège chéngshì de huánjìng hěn hǎo.",
      translation: "Môi trường của thành phố này rất tốt."
    },
    usage: "Danh từ; chỉ môi trường tự nhiên hoặc hoàn cảnh sống."
  },
  {
    id: 151,
    chinese: "附近",
    pinyin: "fùjìn",
    meaning: "Vùng lân cận",
    example: {
      sentence: "学校附近有很多饭店。",
      pinyin: "Xuéxiào fùjìn yǒu hěn duō fàndiàn.",
      translation: "Gần trường có nhiều nhà hàng."
    },
    usage: "Danh từ/trạng từ; chỉ khu vực xung quanh."
  }
];

export default words;