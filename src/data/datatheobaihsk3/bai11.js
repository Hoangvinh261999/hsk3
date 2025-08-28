const words = [
  {
    id: 152,
    chinese: "图书馆",
    pinyin: "túshūguǎn",
    meaning: "Thư viện",
    example: {
      sentence: "我在图书馆看书。",
      pinyin: "Wǒ zài túshūguǎn kàn shū.",
      translation: "Tôi đọc sách ở thư viện."
    },
    usage: "Danh từ; nơi cho mượn và đọc sách."
  },
  {
    id: 153,
    chinese: "借",
    pinyin: "jiè",
    meaning: "Mượn, vay",
    example: {
      sentence: "我想借这本书。",
      pinyin: "Wǒ xiǎng jiè zhè běn shū.",
      translation: "Tôi muốn mượn cuốn sách này."
    },
    usage: "Động từ; mượn hoặc vay thứ gì đó."
  },
  {
    id: 154,
    chinese: "词典",
    pinyin: "cídiǎn",
    meaning: "Từ điển",
    example: {
      sentence: "我买了一本汉英词典。",
      pinyin: "Wǒ mǎile yì běn Hàn-Yīng cídiǎn.",
      translation: "Tôi đã mua một cuốn từ điển Hán - Anh."
    },
    usage: "Danh từ; sách dùng để tra từ."
  },
  {
    id: 155,
    chinese: "还",
    pinyin: "huán",
    meaning: "Trả",
    example: {
      sentence: "记得还书给图书馆。",
      pinyin: "Jìdé huán shū gěi túshūguǎn.",
      translation: "Nhớ trả sách cho thư viện."
    },
    usage: "Động từ; trả lại thứ đã mượn."
  },
  {
    id: 156,
    chinese: "灯",
    pinyin: "dēng",
    meaning: "Đèn",
    example: {
      sentence: "请把灯打开。",
      pinyin: "Qǐng bǎ dēng dǎkāi.",
      translation: "Xin hãy bật đèn lên."
    },
    usage: "Danh từ; thiết bị chiếu sáng."
  },
  {
    id: 157,
    chinese: "会议",
    pinyin: "huìyì",
    meaning: "Hội nghị, cuộc họp",
    example: {
      sentence: "会议将在下午三点开始。",
      pinyin: "Huìyì jiāng zài xiàwǔ sān diǎn kāishǐ.",
      translation: "Cuộc họp sẽ bắt đầu lúc 3 giờ chiều."
    },
    usage: "Danh từ; buổi họp hoặc hội nghị."
  },
  {
    id: 158,
    chinese: "结束",
    pinyin: "jiéshù",
    meaning: "Kết thúc, chấm dứt",
    example: {
      sentence: "会议在五点结束。",
      pinyin: "Huìyì zài wǔ diǎn jiéshù.",
      translation: "Cuộc họp kết thúc lúc 5 giờ."
    },
    usage: "Động từ; hoàn thành hoặc dừng lại."
  },
  {
    id: 159,
    chinese: "忘记",
    pinyin: "wàngjì",
    meaning: "Quên",
    example: {
      sentence: "我忘记带钥匙了。",
      pinyin: "Wǒ wàngjì dài yàoshi le.",
      translation: "Tôi quên mang chìa khóa rồi."
    },
    usage: "Động từ; quên việc gì đó."
  },
  {
    id: 160,
    chinese: "空调",
    pinyin: "kōngtiáo",
    meaning: "Máy điều hòa không khí, máy lạnh",
    example: {
      sentence: "请打开空调。",
      pinyin: "Qǐng dǎkāi kōngtiáo.",
      translation: "Xin hãy bật máy lạnh."
    },
    usage: "Danh từ; thiết bị làm mát không khí."
  },
  {
    id: 161,
    chinese: "关",
    pinyin: "guān",
    meaning: "Tắt, đóng",
    example: {
      sentence: "请关门。",
      pinyin: "Qǐng guān mén.",
      translation: "Xin hãy đóng cửa."
    },
    usage: "Động từ; tắt thiết bị hoặc đóng cửa."
  },
  {
    id: 162,
    chinese: "地铁",
    pinyin: "dìtiě",
    meaning: "Tàu điện ngầm",
    example: {
      sentence: "我们坐地铁去市中心。",
      pinyin: "Wǒmen zuò dìtiě qù shì zhōngxīn.",
      translation: "Chúng tôi đi tàu điện ngầm đến trung tâm thành phố."
    },
    usage: "Danh từ; phương tiện giao thông công cộng dưới lòng đất."
  },
  {
    id: 163,
    chinese: "双",
    pinyin: "shuāng",
    meaning: "Đôi (lượng từ)",
    example: {
      sentence: "我买了一双鞋。",
      pinyin: "Wǒ mǎile yì shuāng xié.",
      translation: "Tôi mua một đôi giày."
    },
    usage: "Lượng từ; chỉ cặp đồ vật (giày, đũa...)."
  },
  {
    id: 164,
    chinese: "筷子",
    pinyin: "kuàizi",
    meaning: "Đũa",
    example: {
      sentence: "我会用筷子吃饭。",
      pinyin: "Wǒ huì yòng kuàizi chīfàn.",
      translation: "Tôi biết dùng đũa để ăn."
    },
    usage: "Danh từ; dụng cụ ăn uống của người Á Đông."
  },
  {
    id: 165,
    chinese: "啤酒",
    pinyin: "píjiǔ",
    meaning: "Bia, rượu",
    example: {
      sentence: "他喜欢喝啤酒。",
      pinyin: "Tā xǐhuān hē píjiǔ.",
      translation: "Anh ấy thích uống bia."
    },
    usage: "Danh từ; đồ uống có cồn."
  },
  {
    id: 166,
    chinese: "口",
    pinyin: "kǒu",
    meaning: "Miếng, ngụm, hớp",
    example: {
      sentence: "他喝了一口水。",
      pinyin: "Tā hēle yì kǒu shuǐ.",
      translation: "Anh ấy uống một ngụm nước."
    },
    usage: "Danh từ/lượng từ; chỉ số lượng nhỏ (miếng, ngụm)."
  },
  {
    id: 167,
    chinese: "瓶子",
    pinyin: "píngzi",
    meaning: "Lọ, bình",
    example: {
      sentence: "桌子上有一个瓶子。",
      pinyin: "Zhuōzi shàng yǒu yí ge píngzi.",
      translation: "Trên bàn có một cái chai."
    },
    usage: "Danh từ; vật chứa hình trụ, thường đựng chất lỏng."
  },
  {
    id: 168,
    chinese: "笔记本",
    pinyin: "bǐjìběn",
    meaning: "Máy tính xách tay, laptop",
    example: {
      sentence: "我买了一台新的笔记本。",
      pinyin: "Wǒ mǎile yì tái xīn de bǐjìběn.",
      translation: "Tôi đã mua một chiếc laptop mới."
    },
    usage: "Danh từ; thiết bị máy tính xách tay."
  },
  {
    id: 169,
    chinese: "电子邮件",
    pinyin: "diànzǐ yóujiàn",
    meaning: "Email",
    example: {
      sentence: "我给你发了一封电子邮件。",
      pinyin: "Wǒ gěi nǐ fāle yì fēng diànzǐ yóujiàn.",
      translation: "Tôi đã gửi cho bạn một email."
    },
    usage: "Danh từ; thư điện tử gửi qua mạng."
  },
  {
    id: 170,
    chinese: "习惯",
    pinyin: "xíguàn",
    meaning: "Quen, thói quen",
    example: {
      sentence: "我习惯早起。",
      pinyin: "Wǒ xíguàn zǎoqǐ.",
      translation: "Tôi quen với việc dậy sớm."
    },
    usage: "Danh từ/động từ; chỉ thói quen hoặc việc thích ứng."
  }
];

export default words;
