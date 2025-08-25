const words = [
  {
    id: 80,
    chinese: "眼镜",
    pinyin: "yǎnjìng",
    meaning: "Mắt kính",
    example: {
      sentence: "我需要一副新的眼镜。",
      pinyin: "Wǒ xūyào yī fù xīn de yǎnjìng.",
      translation: "Tôi cần một chiếc kính mới."
    },
    usage: "Danh từ; chỉ vật dụng để hỗ trợ thị lực."
  },
  {
    id: 81,
    chinese: "突然",
    pinyin: "tūrán",
    meaning: "Bỗng nhiên, bỗng dưng",
    example: {
      sentence: "天气突然变冷了。",
      pinyin: "Tiānqì tūrán biàn lěng le.",
      translation: "Thời tiết bỗng nhiên trở lạnh."
    },
    usage: "Phó từ; biểu thị sự thay đổi bất ngờ."
  },
  {
    id: 82,
    chinese: "离开",
    pinyin: "líkāi",
    meaning: "Rời khỏi, tách khỏi",
    example: {
      sentence: "他已经离开学校了。",
      pinyin: "Tā yǐjīng líkāi xuéxiào le.",
      translation: "Anh ấy đã rời khỏi trường."
    },
    usage: "Động từ; chỉ hành động rời một nơi hoặc người."
  },
  {
    id: 83,
    chinese: "清楚",
    pinyin: "qīngchu",
    meaning: "Rõ ràng",
    example: {
      sentence: "你说得很清楚。",
      pinyin: "Nǐ shuō de hěn qīngchu.",
      translation: "Bạn nói rất rõ ràng."
    },
    usage: "Tính từ; biểu thị sự rõ ràng, minh bạch."
  },
  {
    id: 84,
    chinese: "刚才",
    pinyin: "gāngcái",
    meaning: "Lúc nãy",
    example: {
      sentence: "我刚才在打电话。",
      pinyin: "Wǒ gāngcái zài dǎ diànhuà.",
      translation: "Lúc nãy tôi đang gọi điện thoại."
    },
    usage: "Danh từ chỉ thời gian; ám chỉ thời điểm vừa xảy ra."
  },
  {
    id: 85,
    chinese: "帮忙",
    pinyin: "bāngmáng",
    meaning: "Giúp, giúp đỡ",
    example: {
      sentence: "谢谢你帮忙。",
      pinyin: "Xièxiè nǐ bāngmáng.",
      translation: "Cảm ơn bạn đã giúp đỡ."
    },
    usage: "Động từ; biểu thị hành động giúp đỡ ai đó."
  },
  {
    id: 86,
    chinese: "特别",
    pinyin: "tèbié",
    meaning: "Vô cùng, rất",
    example: {
      sentence: "他特别喜欢运动。",
      pinyin: "Tā tèbié xǐhuān yùndòng.",
      translation: "Anh ấy rất thích thể thao."
    },
    usage: "Phó từ; biểu thị mức độ cao."
  },
  {
    id: 87,
    chinese: "讲",
    pinyin: "jiǎng",
    meaning: "Giải thích, nói",
    example: {
      sentence: "老师在讲故事。",
      pinyin: "Lǎoshī zài jiǎng gùshì.",
      translation: "Thầy giáo đang kể chuyện."
    },
    usage: "Động từ; chỉ hành động nói hoặc giải thích."
  },
  {
    id: 88,
    chinese: "明白",
    pinyin: "míngbai",
    meaning: "Rõ ràng, dễ hiểu",
    example: {
      sentence: "我明白你的意思。",
      pinyin: "Wǒ míngbai nǐ de yìsi.",
      translation: "Tôi hiểu ý của bạn."
    },
    usage: "Tính từ hoặc động từ; biểu thị sự hiểu rõ."
  },
  {
    id: 89,
    chinese: "锻炼",
    pinyin: "duànliàn",
    meaning: "Tập thể dục",
    example: {
      sentence: "每天锻炼身体很重要。",
      pinyin: "Měitiān duànliàn shēntǐ hěn zhòngyào.",
      translation: "Tập thể dục mỗi ngày rất quan trọng."
    },
    usage: "Động từ; chỉ hoạt động rèn luyện thân thể."
  },
  {
    id: 90,
    chinese: "音乐",
    pinyin: "yīnyuè",
    meaning: "Âm nhạc",
    example: {
      sentence: "我喜欢听音乐。",
      pinyin: "Wǒ xǐhuān tīng yīnyuè.",
      translation: "Tôi thích nghe nhạc."
    },
    usage: "Danh từ; chỉ thể loại nghệ thuật âm thanh."
  },
  {
    id: 91,
    chinese: "公园",
    pinyin: "gōngyuán",
    meaning: "Công viên",
    example: {
      sentence: "我们去公园散步吧。",
      pinyin: "Wǒmen qù gōngyuán sànbù ba.",
      translation: "Chúng ta đi dạo công viên nhé."
    },
    usage: "Danh từ; chỉ nơi công cộng có cây xanh."
  },
  {
    id: 92,
    chinese: "聊天",
    pinyin: "liáotiān",
    meaning: "Tán gẫu",
    example: {
      sentence: "他们在聊天。",
      pinyin: "Tāmen zài liáotiān.",
      translation: "Họ đang tán gẫu."
    },
    usage: "Động từ; biểu thị hành động trò chuyện thoải mái."
  },
  {
    id: 93,
    chinese: "睡着",
    pinyin: "shuìzháo",
    meaning: "Ngủ được",
    example: {
      sentence: "孩子已经睡着了。",
      pinyin: "Háizi yǐjīng shuìzháo le.",
      translation: "Đứa trẻ đã ngủ rồi."
    },
    usage: "Động từ; chỉ trạng thái bắt đầu ngủ."
  },
  {
    id: 94,
    chinese: "更",
    pinyin: "gèng",
    meaning: "Càng, hơn nữa",
    example: {
      sentence: "他比我更高。",
      pinyin: "Tā bǐ wǒ gèng gāo.",
      translation: "Anh ấy cao hơn tôi."
    },
    usage: "Phó từ; dùng để nhấn mạnh sự so sánh hoặc mức độ."
  }
];

export default words;
