const words = [
  {
    id: 171,
    chinese: "太阳",
    pinyin: "tàiyáng",
    meaning: "Mặt trời",
    example: {
      sentence: "太阳从东边升起。",
      pinyin: "Tàiyáng cóng dōngbiān shēngqǐ.",
      translation: "Mặt trời mọc từ phía đông."
    },
    usage: "Danh từ; chỉ ngôi sao trung tâm hệ Mặt Trời."
  },
  {
    id: 172,
    chinese: "西",
    pinyin: "xī",
    meaning: "Phía tây, hướng tây",
    example: {
      sentence: "太阳在西边落下。",
      pinyin: "Tàiyáng zài xībiān luòxià.",
      translation: "Mặt trời lặn ở phía tây."
    },
    usage: "Danh từ; chỉ phương hướng tây."
  },
  {
    id: 173,
    chinese: "生气",
    pinyin: "shēngqì",
    meaning: "Giận, tức giận",
    example: {
      sentence: "他生气了，因为你迟到了。",
      pinyin: "Tā shēngqì le, yīnwèi nǐ chídào le.",
      translation: "Anh ấy tức giận vì bạn đến muộn."
    },
    usage: "Động từ/Trạng thái; biểu thị sự tức giận."
  },
  {
    id: 174,
    chinese: "行李箱",
    pinyin: "xínglixiāng",
    meaning: "Hành lý, vali",
    example: {
      sentence: "我带了两个行李箱去旅行。",
      pinyin: "Wǒ dàile liǎng gè xínglixiāng qù lǚxíng.",
      translation: "Tôi mang hai chiếc vali đi du lịch."
    },
    usage: "Danh từ; chỉ vali hoặc hộp hành lý."
  },
  {
    id: 175,
    chinese: "自己",
    pinyin: "zìjǐ",
    meaning: "Tự mình, bản thân",
    example: {
      sentence: "我自己可以完成这个任务。",
      pinyin: "Wǒ zìjǐ kěyǐ wánchéng zhège rènwu.",
      translation: "Tôi tự mình có thể hoàn thành nhiệm vụ này."
    },
    usage: "Đại từ; chỉ bản thân một người."
  },
  {
    id: 176,
    chinese: "包",
    pinyin: "bāo",
    meaning: "Cặp, túi",
    example: {
      sentence: "她买了一个新包。",
      pinyin: "Tā mǎile yí gè xīn bāo.",
      translation: "Cô ấy mua một cái túi mới."
    },
    usage: "Danh từ; chỉ túi xách, balo hoặc bao đựng."
  },
  {
    id: 177,
    chinese: "发现",
    pinyin: "fāxiàn",
    meaning: "Phát hiện",
    example: {
      sentence: "我发现了一个问题。",
      pinyin: "Wǒ fāxiànle yí gè wèntí.",
      translation: "Tôi phát hiện một vấn đề."
    },
    usage: "Động từ; nhận ra hoặc phát hiện điều gì."
  },
  {
    id: 178,
    chinese: "护照",
    pinyin: "hùzhào",
    meaning: "Hộ chiếu",
    example: {
      sentence: "请出示您的护照。",
      pinyin: "Qǐng chūshì nín de hùzhào.",
      translation: "Xin vui lòng xuất trình hộ chiếu của bạn."
    },
    usage: "Danh từ; giấy tờ xuất nhập cảnh quốc tế."
  },
  {
    id: 179,
    chinese: "起飞",
    pinyin: "qǐfēi",
    meaning: "Cất cánh",
    example: {
      sentence: "飞机准时起飞。",
      pinyin: "Fēijī zhǔnshí qǐfēi.",
      translation: "Máy bay cất cánh đúng giờ."
    },
    usage: "Động từ; chỉ máy bay rời khỏi mặt đất."
  },
  {
    id: 180,
    chinese: "司机",
    pinyin: "sījī",
    meaning: "Tài xế",
    example: {
      sentence: "司机开车很小心。",
      pinyin: "Sījī kāichē hěn xiǎoxīn.",
      translation: "Tài xế lái xe rất cẩn thận."
    },
    usage: "Danh từ; người điều khiển phương tiện giao thông."
  },
  {
    id: 181,
    chinese: "教",
    pinyin: "jiāo",
    meaning: "Dạy",
    example: {
      sentence: "老师教我们汉语。",
      pinyin: "Lǎoshī jiāo wǒmen Hànyǔ.",
      translation: "Giáo viên dạy chúng tôi tiếng Trung."
    },
    usage: "Động từ; chỉ hành động giảng dạy kiến thức."
  },
  {
    id: 182,
    chinese: "画",
    pinyin: "huà",
    meaning: "Vẽ, tranh",
    example: {
      sentence: "他画了一幅画。",
      pinyin: "Tā huàle yí fú huà.",
      translation: "Anh ấy vẽ một bức tranh."
    },
    usage: "Danh từ/động từ; có nghĩa là tranh vẽ hoặc hành động vẽ."
  },
  {
    id: 183,
    chinese: "需要",
    pinyin: "xūyào",
    meaning: "Cần",
    example: {
      sentence: "我需要一杯水。",
      pinyin: "Wǒ xūyào yì bēi shuǐ.",
      translation: "Tôi cần một cốc nước."
    },
    usage: "Động từ; biểu thị nhu cầu hoặc cần thiết."
  },
  {
    id: 184,
    chinese: "黑板",
    pinyin: "hēibǎn",
    meaning: "Bảng đen",
    example: {
      sentence: "老师在黑板上写字。",
      pinyin: "Lǎoshī zài hēibǎn shàng xiězì.",
      translation: "Giáo viên viết chữ trên bảng đen."
    },
    usage: "Danh từ; dụng cụ để viết phấn trong lớp học."
  }
];

export default words;
