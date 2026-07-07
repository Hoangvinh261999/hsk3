const vocabularyFactory = [
  {
    id: 1,
    chinese: "今天",
    pinyin: "jīntiān",
    meaning: "Hôm nay",
    example: {
      sentence: "今天開始生產新產品。",
      pinyin: "Jīntiān kāishǐ shēngchǎn xīn chǎnpǐn.",
      translation: "Hôm nay bắt đầu sản xuất sản phẩm mới."
    },
    usage: "Danh từ chỉ thời gian."
  },
  {
    id: 2,
    chinese: "我們",
    pinyin: "wǒmen",
    meaning: "Chúng tôi, chúng ta",
    example: {
      sentence: "我們一起工作。",
      pinyin: "Wǒmen yìqǐ gōngzuò.",
      translation: "Chúng ta cùng làm việc."
    },
    usage: "Đại từ nhân xưng số nhiều."
  },
  {
    id: 3,
    chinese: "開始",
    pinyin: "kāishǐ",
    meaning: "Bắt đầu",
    example: {
      sentence: "八點開始開會。",
      pinyin: "Bādiǎn kāishǐ kāihuì.",
      translation: "8 giờ bắt đầu họp."
    },
    usage: "Động từ; bắt đầu một hoạt động."
  },
  {
    id: 4,
    chinese: "轉換",
    pinyin: "zhuǎnhuàn",
    meaning: "Chuyển đổi",
    example: {
      sentence: "工廠開始轉換新產品。",
      pinyin: "Gōngchǎng kāishǐ zhuǎnhuàn xīn chǎnpǐn.",
      translation: "Nhà máy bắt đầu chuyển sang sản phẩm mới."
    },
    usage: "Động từ; chuyển từ trạng thái hoặc loại này sang loại khác."
  },
  {
    id: 5,
    chinese: "新型體",
    pinyin: "xīn xíng tǐ",
    meaning: "Mẫu mới, kiểu mới",
    example: {
      sentence: "這是新的型體。",
      pinyin: "Zhè shì xīn de xíngtǐ.",
      translation: "Đây là mẫu mới."
    },
    usage: "Danh từ; thường dùng trong sản xuất để chỉ model hoặc phiên bản mới."
  },
  {
    id: 6,
    chinese: "每個人",
    pinyin: "měi gè rén",
    meaning: "Mỗi người",
    example: {
      sentence: "每個人都要努力。",
      pinyin: "Měi gè rén dōu yào nǔlì.",
      translation: "Mỗi người đều phải cố gắng."
    },
    usage: "Cụm danh từ."
  },
  {
    id: 7,
    chinese: "注意",
    pinyin: "zhùyì",
    meaning: "Chú ý",
    example: {
      sentence: "請注意安全。",
      pinyin: "Qǐng zhùyì ānquán.",
      translation: "Xin hãy chú ý an toàn."
    },
    usage: "Động từ."
  },
  {
    id: 8,
    chinese: "仔細",
    pinyin: "zǐxì",
    meaning: "Cẩn thận, kỹ lưỡng",
    example: {
      sentence: "請仔細檢查。",
      pinyin: "Qǐng zǐxì jiǎnchá.",
      translation: "Hãy kiểm tra cẩn thận."
    },
    usage: "Tính từ hoặc trạng từ."
  },
  {
    id: 9,
    chinese: "檢查",
    pinyin: "jiǎnchá",
    meaning: "Kiểm tra",
    example: {
      sentence: "請檢查產品。",
      pinyin: "Qǐng jiǎnchá chǎnpǐn.",
      translation: "Hãy kiểm tra sản phẩm."
    },
    usage: "Động từ."
  },
  {
    id: 10,
    chinese: "生產線",
    pinyin: "shēngchǎnxiàn",
    meaning: "Dây chuyền sản xuất",
    example: {
      sentence: "生產線正在運作。",
      pinyin: "Shēngchǎnxiàn zhèngzài yùnzuò.",
      translation: "Dây chuyền sản xuất đang hoạt động."
    },
    usage: "Danh từ."
  },
  {
    id: 11,
    chinese: "出現",
    pinyin: "chūxiàn",
    meaning: "Xuất hiện",
    example: {
      sentence: "問題又出現了。",
      pinyin: "Wèntí yòu chūxiàn le.",
      translation: "Vấn đề lại xuất hiện."
    },
    usage: "Động từ."
  },
  {
    id: 12,
    chinese: "異常",
    pinyin: "yìcháng",
    meaning: "Bất thường",
    example: {
      sentence: "設備出現異常。",
      pinyin: "Shèbèi chūxiàn yìcháng.",
      translation: "Thiết bị xuất hiện bất thường."
    },
    usage: "Danh từ hoặc tính từ; rất hay dùng trong nhà máy."
  },  {
    id: 13,
    chinese: "工作",
    pinyin: "gōngzuò",
    meaning: "Công việc; làm việc",
    example: {
      sentence: "今天的工作很多。",
      pinyin: "Jīntiān de gōngzuò hěn duō.",
      translation: "Hôm nay có rất nhiều công việc."
    },
    usage: "Danh từ hoặc động từ; chỉ công việc hoặc hành động làm việc."
  },
  {
    id: 14,
    chinese: "處理",
    pinyin: "chǔlǐ",
    meaning: "Xử lý",
    example: {
      sentence: "我要處理這個問題。",
      pinyin: "Wǒ yào chǔlǐ zhège wèntí.",
      translation: "Tôi phải xử lý vấn đề này."
    },
    usage: "Động từ; xử lý công việc, sự cố hoặc tài liệu."
  },
  {
    id: 15,
    chinese: "問題",
    pinyin: "wèntí",
    meaning: "Vấn đề",
    example: {
      sentence: "這個問題很重要。",
      pinyin: "Zhège wèntí hěn zhòngyào.",
      translation: "Vấn đề này rất quan trọng."
    },
    usage: "Danh từ."
  },
  {
    id: 16,
    chinese: "解釋報告",
    pinyin: "jiěshì bàogào",
    meaning: "Báo cáo giải trình",
    example: {
      sentence: "請下午交解釋報告。",
      pinyin: "Qǐng xiàwǔ jiāo jiěshì bàogào.",
      translation: "Chiều nay hãy nộp báo cáo giải trình."
    },
    usage: "Danh từ; tài liệu giải thích nguyên nhân của một sự việc."
  },
  {
    id: 17,
    chinese: "經常",
    pinyin: "jīngcháng",
    meaning: "Thường xuyên",
    example: {
      sentence: "他經常加班。",
      pinyin: "Tā jīngcháng jiābān.",
      translation: "Anh ấy thường xuyên tăng ca."
    },
    usage: "Phó từ."
  },
  {
    id: 18,
    chinese: "開會",
    pinyin: "kāihuì",
    meaning: "Họp",
    example: {
      sentence: "主管正在開會。",
      pinyin: "Zhǔguǎn zhèngzài kāihuì.",
      translation: "Quản lý đang họp."
    },
    usage: "Động từ."
  },
  {
    id: 19,
    chinese: "覺得",
    pinyin: "juéde",
    meaning: "Cảm thấy",
    example: {
      sentence: "我覺得很累。",
      pinyin: "Wǒ juéde hěn lèi.",
      translation: "Tôi cảm thấy rất mệt."
    },
    usage: "Động từ diễn tả cảm nhận hoặc ý kiến."
  },
  {
    id: 20,
    chinese: "壓力",
    pinyin: "yālì",
    meaning: "Áp lực",
    example: {
      sentence: "最近工作壓力很大。",
      pinyin: "Zuìjìn gōngzuò yālì hěn dà.",
      translation: "Gần đây áp lực công việc rất lớn."
    },
    usage: "Danh từ."
  },
  {
    id: 21,
    chinese: "品質",
    pinyin: "pǐnzhì",
    meaning: "Chất lượng",
    example: {
      sentence: "品質非常重要。",
      pinyin: "Pǐnzhì fēicháng zhòngyào.",
      translation: "Chất lượng vô cùng quan trọng."
    },
    usage: "Danh từ; thường dùng trong QC và sản xuất."
  },
  {
    id: 22,
    chinese: "檢討",
    pinyin: "jiǎntǎo",
    meaning: "Kiểm thảo; rút kinh nghiệm",
    example: {
      sentence: "下午要開檢討會。",
      pinyin: "Xiàwǔ yào kāi jiǎntǎo huì.",
      translation: "Chiều nay sẽ họp rút kinh nghiệm."
    },
    usage: "Động từ hoặc danh từ; rất phổ biến trong doanh nghiệp Đài Loan."
  },
  {
    id: 23,
    chinese: "會議",
    pinyin: "huìyì",
    meaning: "Cuộc họp",
    example: {
      sentence: "今天有重要的會議。",
      pinyin: "Jīntiān yǒu zhòngyào de huìyì.",
      translation: "Hôm nay có một cuộc họp quan trọng."
    },
    usage: "Danh từ."
  },
  {
    id: 24,
    chinese: "缺席",
    pinyin: "quēxí",
    meaning: "Vắng mặt",
    example: {
      sentence: "他今天缺席了。",
      pinyin: "Tā jīntiān quēxí le.",
      translation: "Hôm nay anh ấy đã vắng mặt."
    },
    usage: "Động từ."
  },
  {
    id: 25,
    chinese: "聯繫",
    pinyin: "liánxì",
    meaning: "Liên hệ",
    example: {
      sentence: "請先聯繫主管。",
      pinyin: "Qǐng xiān liánxì zhǔguǎn.",
      translation: "Hãy liên hệ với quản lý trước."
    },
    usage: "Động từ."
  },
  {
    id: 26,
    chinese: "代理人",
    pinyin: "dàilǐrén",
    meaning: "Người đại diện",
    example: {
      sentence: "請代理人參加會議。",
      pinyin: "Qǐng dàilǐrén cānjiā huìyì.",
      translation: "Hãy để người đại diện tham dự cuộc họp."
    },
    usage: "Danh từ."
  },  {
    id: 27,
    chinese: "下班",
    pinyin: "xiàbān",
    meaning: "Tan ca, tan làm",
    example: {
      sentence: "今天六點下班。",
      pinyin: "Jīntiān liù diǎn xiàbān.",
      translation: "Hôm nay 6 giờ tan ca."
    },
    usage: "Động từ; kết thúc giờ làm việc."
  },
  {
    id: 28,
    chinese: "晚點",
    pinyin: "wǎn diǎn",
    meaning: "Muộn hơn",
    example: {
      sentence: "今天要晚點下班。",
      pinyin: "Jīntiān yào wǎn diǎn xiàbān.",
      translation: "Hôm nay phải tan ca muộn hơn."
    },
    usage: "Trạng từ; chỉ thời gian muộn hơn bình thường."
  },
  {
    id: 29,
    chinese: "完成",
    pinyin: "wánchéng",
    meaning: "Hoàn thành",
    example: {
      sentence: "工作還沒完成。",
      pinyin: "Gōngzuò hái méi wánchéng.",
      translation: "Công việc vẫn chưa hoàn thành."
    },
    usage: "Động từ."
  },
  {
    id: 30,
    chinese: "提醒",
    pinyin: "tíxǐng",
    meaning: "Nhắc nhở",
    example: {
      sentence: "請提醒大家注意安全。",
      pinyin: "Qǐng tíxǐng dàjiā zhùyì ānquán.",
      translation: "Hãy nhắc mọi người chú ý an toàn."
    },
    usage: "Động từ."
  },
  {
    id: 31,
    chinese: "員工",
    pinyin: "yuángōng",
    meaning: "Nhân viên",
    example: {
      sentence: "新員工今天報到。",
      pinyin: "Xīn yuángōng jīntiān bàodào.",
      translation: "Nhân viên mới hôm nay đến nhận việc."
    },
    usage: "Danh từ."
  },
  {
    id: 32,
    chinese: "作業",
    pinyin: "zuòyè",
    meaning: "Thao tác, tác nghiệp",
    example: {
      sentence: "請按照標準作業。",
      pinyin: "Qǐng ànzhào biāozhǔn zuòyè.",
      translation: "Hãy thao tác theo đúng tiêu chuẩn."
    },
    usage: "Danh từ/động từ; trong nhà máy nghĩa là thao tác sản xuất."
  },
  {
    id: 33,
    chinese: "NG",
    pinyin: "ēn jī",
    meaning: "Hàng lỗi, không đạt tiêu chuẩn",
    example: {
      sentence: "今天NG很多。",
      pinyin: "Jīntiān ēn jī hěn duō.",
      translation: "Hôm nay có rất nhiều hàng lỗi."
    },
    usage: "Thuật ngữ trong nhà máy; viết tắt của 'No Good'."
  },
  {
    id: 34,
    chinese: "生產計劃",
    pinyin: "shēngchǎn jìhuà",
    meaning: "Kế hoạch sản xuất",
    example: {
      sentence: "今天的生產計劃已完成。",
      pinyin: "Jīntiān de shēngchǎn jìhuà yǐ wánchéng.",
      translation: "Kế hoạch sản xuất hôm nay đã hoàn thành."
    },
    usage: "Danh từ."
  },
  {
    id: 35,
    chinese: "幹部",
    pinyin: "gànbù",
    meaning: "Cán bộ, quản lý",
    example: {
      sentence: "幹部正在安排工作。",
      pinyin: "Gànbù zhèngzài ānpái gōngzuò.",
      translation: "Cán bộ đang sắp xếp công việc."
    },
    usage: "Danh từ; thường dùng để chỉ quản lý cấp tổ hoặc cấp bộ phận."
  },
  {
    id: 36,
    chinese: "安排",
    pinyin: "ānpái",
    meaning: "Sắp xếp, bố trí",
    example: {
      sentence: "請安排明天的工作。",
      pinyin: "Qǐng ānpái míngtiān de gōngzuò.",
      translation: "Hãy sắp xếp công việc cho ngày mai."
    },
    usage: "Động từ."
  },
  {
    id: 37,
    chinese: "變化",
    pinyin: "biànhuà",
    meaning: "Thay đổi",
    example: {
      sentence: "計劃有一些變化。",
      pinyin: "Jìhuà yǒu yìxiē biànhuà.",
      translation: "Kế hoạch có một vài thay đổi."
    },
    usage: "Danh từ hoặc động từ."
  },
  {
    id: 38,
    chinese: "群組",
    pinyin: "qúnzǔ",
    meaning: "Nhóm (chat, làm việc)",
    example: {
      sentence: "請在群組通知大家。",
      pinyin: "Qǐng zài qúnzǔ tōngzhī dàjiā.",
      translation: "Hãy thông báo cho mọi người trong nhóm."
    },
    usage: "Danh từ."
  },
  {
    id: 39,
    chinese: "通知",
    pinyin: "tōngzhī",
    meaning: "Thông báo",
    example: {
      sentence: "我會通知大家。",
      pinyin: "Wǒ huì tōngzhī dàjiā.",
      translation: "Tôi sẽ thông báo cho mọi người."
    },
    usage: "Động từ hoặc danh từ."
  },
  {
    id: 40,
    chinese: "盡快",
    pinyin: "jǐnkuài",
    meaning: "Càng sớm càng tốt",
    example: {
      sentence: "請盡快完成工作。",
      pinyin: "Qǐng jǐnkuài wánchéng gōngzuò.",
      translation: "Hãy hoàn thành công việc càng sớm càng tốt."
    },
    usage: "Trạng từ."
  },
    {
    id: 41,
    chinese: "準備",
    pinyin: "zhǔnbèi",
    meaning: "Chuẩn bị",
    example: {
      sentence: "請準備明天的材料。",
      pinyin: "Qǐng zhǔnbèi míngtiān de cáiliào.",
      translation: "Hãy chuẩn bị nguyên vật liệu cho ngày mai."
    },
    usage: "Động từ; chuẩn bị người, vật hoặc kế hoạch trước khi thực hiện."
  },
  {
    id: 42,
    chinese: "培訓",
    pinyin: "péixùn",
    meaning: "Đào tạo",
    example: {
      sentence: "公司正在培訓新員工。",
      pinyin: "Gōngsī zhèngzài péixùn xīn yuángōng.",
      translation: "Công ty đang đào tạo nhân viên mới."
    },
    usage: "Động từ hoặc danh từ."
  },
  {
    id: 43,
    chinese: "新產品",
    pinyin: "xīn chǎnpǐn",
    meaning: "Sản phẩm mới",
    example: {
      sentence: "工廠開始生產新產品。",
      pinyin: "Gōngchǎng kāishǐ shēngchǎn xīn chǎnpǐn.",
      translation: "Nhà máy bắt đầu sản xuất sản phẩm mới."
    },
    usage: "Danh từ."
  },
  {
    id: 44,
    chinese: "工具",
    pinyin: "gōngjù",
    meaning: "Công cụ, dụng cụ",
    example: {
      sentence: "請把工具放回原位。",
      pinyin: "Qǐng bǎ gōngjù fàng huí yuánwèi.",
      translation: "Hãy đặt dụng cụ về đúng vị trí."
    },
    usage: "Danh từ."
  },
  {
    id: 45,
    chinese: "相關",
    pinyin: "xiāngguān",
    meaning: "Liên quan",
    example: {
      sentence: "請通知相關人員。",
      pinyin: "Qǐng tōngzhī xiāngguān rényuán.",
      translation: "Hãy thông báo cho những người liên quan."
    },
    usage: "Tính từ."
  },
  {
    id: 46,
    chinese: "倉庫",
    pinyin: "cāngkù",
    meaning: "Kho hàng",
    example: {
      sentence: "材料已送到倉庫。",
      pinyin: "Cáiliào yǐ sòng dào cāngkù.",
      translation: "Nguyên vật liệu đã được chuyển vào kho."
    },
    usage: "Danh từ."
  },
  {
    id: 47,
    chinese: "材料",
    pinyin: "cáiliào",
    meaning: "Nguyên vật liệu",
    example: {
      sentence: "材料已經準備好了。",
      pinyin: "Cáiliào yǐjīng zhǔnbèi hǎo le.",
      translation: "Nguyên vật liệu đã được chuẩn bị xong."
    },
    usage: "Danh từ."
  },
  {
    id: 48,
    chinese: "出貨",
    pinyin: "chūhuò",
    meaning: "Xuất hàng",
    example: {
      sentence: "今天要出貨一千件。",
      pinyin: "Jīntiān yào chūhuò yìqiān jiàn.",
      translation: "Hôm nay sẽ xuất 1.000 sản phẩm."
    },
    usage: "Động từ; dùng trong kho vận và logistics."
  },
  {
    id: 49,
    chinese: "通知單",
    pinyin: "tōngzhīdān",
    meaning: "Phiếu thông báo",
    example: {
      sentence: "請確認出貨通知單。",
      pinyin: "Qǐng quèrèn chūhuò tōngzhīdān.",
      translation: "Hãy xác nhận phiếu thông báo xuất hàng."
    },
    usage: "Danh từ."
  },
  {
    id: 50,
    chinese: "倉管員",
    pinyin: "cāngguǎnyuán",
    meaning: "Nhân viên quản lý kho",
    example: {
      sentence: "倉管員正在點貨。",
      pinyin: "Cāngguǎnyuán zhèngzài diǎnhuò.",
      translation: "Nhân viên kho đang kiểm đếm hàng."
    },
    usage: "Danh từ."
  },
  {
    id: 51,
    chinese: "名稱",
    pinyin: "míngchēng",
    meaning: "Tên gọi",
    example: {
      sentence: "請確認材料名稱。",
      pinyin: "Qǐng quèrèn cáiliào míngchēng.",
      translation: "Hãy xác nhận tên nguyên vật liệu."
    },
    usage: "Danh từ."
  },
  {
    id: 52,
    chinese: "型號",
    pinyin: "xínghào",
    meaning: "Mã sản phẩm, model",
    example: {
      sentence: "請確認產品型號。",
      pinyin: "Qǐng quèrèn chǎnpǐn xínghào.",
      translation: "Hãy xác nhận model sản phẩm."
    },
    usage: "Danh từ."
  },
  {
    id: 53,
    chinese: "數量",
    pinyin: "shùliàng",
    meaning: "Số lượng",
    example: {
      sentence: "請確認數量。",
      pinyin: "Qǐng quèrèn shùliàng.",
      translation: "Hãy xác nhận số lượng."
    },
    usage: "Danh từ."
  },
  {
    id: 54,
    chinese: "規範",
    pinyin: "guīfàn",
    meaning: "Quy cách, tiêu chuẩn",
    example: {
      sentence: "產品符合規範。",
      pinyin: "Chǎnpǐn fúhé guīfàn.",
      translation: "Sản phẩm đạt đúng tiêu chuẩn."
    },
    usage: "Danh từ; cũng có thể dùng như động từ 'chuẩn hóa'."
  },
  {
    id: 55,
    chinese: "準確",
    pinyin: "zhǔnquè",
    meaning: "Chính xác",
    example: {
      sentence: "資料必須準確。",
      pinyin: "Zīliào bìxū zhǔnquè.",
      translation: "Dữ liệu phải chính xác."
    },
    usage: "Tính từ."
  },
    {
    id: 56,
    chinese: "下週",
    pinyin: "xià zhōu",
    meaning: "Tuần sau",
    example: {
      sentence: "下週我們要開會。",
      pinyin: "Xià zhōu wǒmen yào kāihuì.",
      translation: "Tuần sau chúng ta sẽ họp."
    },
    usage: "Danh từ chỉ thời gian."
  },
  {
    id: 57,
    chinese: "之前",
    pinyin: "zhīqián",
    meaning: "Trước",
    example: {
      sentence: "請在下班之前完成。",
      pinyin: "Qǐng zài xiàbān zhīqián wánchéng.",
      translation: "Hãy hoàn thành trước khi tan ca."
    },
    usage: "Danh từ phương vị."
  },
  {
    id: 58,
    chinese: "討論",
    pinyin: "tǎolùn",
    meaning: "Thảo luận",
    example: {
      sentence: "我們一起討論這個問題。",
      pinyin: "Wǒmen yìqǐ tǎolùn zhège wèntí.",
      translation: "Chúng ta cùng thảo luận vấn đề này."
    },
    usage: "Động từ."
  },
  {
    id: 59,
    chinese: "下午",
    pinyin: "xiàwǔ",
    meaning: "Buổi chiều",
    example: {
      sentence: "下午一點開會。",
      pinyin: "Xiàwǔ yì diǎn kāihuì.",
      translation: "1 giờ chiều họp."
    },
    usage: "Danh từ chỉ thời gian."
  },
  {
    id: 60,
    chinese: "可以",
    pinyin: "kěyǐ",
    meaning: "Có thể, được",
    example: {
      sentence: "現在可以開始嗎？",
      pinyin: "Xiànzài kěyǐ kāishǐ ma?",
      translation: "Bây giờ có thể bắt đầu không?"
    },
    usage: "Động từ khiếm khuyết."
  },
  {
    id: 61,
    chinese: "打電話",
    pinyin: "dǎ diànhuà",
    meaning: "Gọi điện thoại",
    example: {
      sentence: "請先打電話給我。",
      pinyin: "Qǐng xiān dǎ diànhuà gěi wǒ.",
      translation: "Hãy gọi điện cho tôi trước."
    },
    usage: "Động từ."
  },
  {
    id: 62,
    chinese: "客戶",
    pinyin: "kèhù",
    meaning: "Khách hàng",
    example: {
      sentence: "客戶今天來工廠。",
      pinyin: "Kèhù jīntiān lái gōngchǎng.",
      translation: "Khách hàng hôm nay đến nhà máy."
    },
    usage: "Danh từ."
  },
  {
    id: 63,
    chinese: "延後",
    pinyin: "yánhòu",
    meaning: "Hoãn lại",
    example: {
      sentence: "會議延後半小時。",
      pinyin: "Huìyì yánhòu bàn xiǎoshí.",
      translation: "Cuộc họp hoãn 30 phút."
    },
    usage: "Động từ."
  },
  {
    id: 64,
    chinese: "半小時",
    pinyin: "bàn xiǎoshí",
    meaning: "Nửa tiếng",
    example: {
      sentence: "請等半小時。",
      pinyin: "Qǐng děng bàn xiǎoshí.",
      translation: "Hãy đợi nửa tiếng."
    },
    usage: "Lượng từ thời gian."
  },
  {
    id: 65,
    chinese: "繼續",
    pinyin: "jìxù",
    meaning: "Tiếp tục",
    example: {
      sentence: "請繼續工作。",
      pinyin: "Qǐng jìxù gōngzuò.",
      translation: "Hãy tiếp tục làm việc."
    },
    usage: "Động từ."
  },
  {
    id: 66,
    chinese: "回去",
    pinyin: "huíqù",
    meaning: "Quay về",
    example: {
      sentence: "大家先回去工作。",
      pinyin: "Dàjiā xiān huíqù gōngzuò.",
      translation: "Mọi người hãy quay về làm việc trước."
    },
    usage: "Động từ chỉ hướng."
  },
  {
    id: 67,
    chinese: "態度",
    pinyin: "tàidù",
    meaning: "Thái độ",
    example: {
      sentence: "他的工作態度很好。",
      pinyin: "Tā de gōngzuò tàidù hěn hǎo.",
      translation: "Thái độ làm việc của anh ấy rất tốt."
    },
    usage: "Danh từ."
  },
  {
    id: 68,
    chinese: "積極",
    pinyin: "jījí",
    meaning: "Tích cực",
    example: {
      sentence: "他工作很積極。",
      pinyin: "Tā gōngzuò hěn jījí.",
      translation: "Anh ấy làm việc rất tích cực."
    },
    usage: "Tính từ."
  },
  {
    id: 69,
    chinese: "認真",
    pinyin: "rènzhēn",
    meaning: "Nghiêm túc",
    example: {
      sentence: "請認真工作。",
      pinyin: "Qǐng rènzhēn gōngzuò.",
      translation: "Hãy làm việc nghiêm túc."
    },
    usage: "Tính từ."
  },
  {
    id: 70,
    chinese: "負責",
    pinyin: "fùzé",
    meaning: "Chịu trách nhiệm; có trách nhiệm",
    example: {
      sentence: "他負責品質管理。",
      pinyin: "Tā fùzé pǐnzhì guǎnlǐ.",
      translation: "Anh ấy phụ trách quản lý chất lượng."
    },
    usage: "Động từ hoặc tính từ."
  },
  {
    id: 71,
    chinese: "性格",
    pinyin: "xìnggé",
    meaning: "Tính cách",
    example: {
      sentence: "她的性格很好。",
      pinyin: "Tā de xìnggé hěn hǎo.",
      translation: "Tính cách của cô ấy rất tốt."
    },
    usage: "Danh từ."
  },
  {
    id: 72,
    chinese: "開朗",
    pinyin: "kāilǎng",
    meaning: "Cởi mở, vui vẻ",
    example: {
      sentence: "他很開朗。",
      pinyin: "Tā hěn kāilǎng.",
      translation: "Anh ấy rất cởi mở."
    },
    usage: "Tính từ."
  },
  {
    id: 73,
    chinese: "承受",
    pinyin: "chéngshòu",
    meaning: "Chịu đựng",
    example: {
      sentence: "他能承受工作壓力。",
      pinyin: "Tā néng chéngshòu gōngzuò yālì.",
      translation: "Anh ấy có thể chịu được áp lực công việc."
    },
    usage: "Động từ."
  },
  {
    id: 74,
    chinese: "提拔",
    pinyin: "tíbá",
    meaning: "Đề bạt, thăng chức",
    example: {
      sentence: "他被提拔為組長。",
      pinyin: "Tā bèi tíbá wéi zǔzhǎng.",
      translation: "Anh ấy được đề bạt làm tổ trưởng."
    },
    usage: "Động từ."
  },
  {
    id: 75,
    chinese: "普通員工",
    pinyin: "pǔtōng yuángōng",
    meaning: "Nhân viên bình thường",
    example: {
      sentence: "他以前是普通員工。",
      pinyin: "Tā yǐqián shì pǔtōng yuángōng.",
      translation: "Trước đây anh ấy là nhân viên bình thường."
    },
    usage: "Danh từ."
  },
  {
    id: 76,
    chinese: "組長",
    pinyin: "zǔzhǎng",
    meaning: "Tổ trưởng",
    example: {
      sentence: "組長正在安排工作。",
      pinyin: "Zǔzhǎng zhèngzài ānpái gōngzuò.",
      translation: "Tổ trưởng đang phân công công việc."
    },
    usage: "Danh từ."
  },
  {
    id: 77,
    chinese: "中文",
    pinyin: "Zhōngwén",
    meaning: "Tiếng Trung",
    example: {
      sentence: "他的中文很好。",
      pinyin: "Tā de Zhōngwén hěn hǎo.",
      translation: "Tiếng Trung của anh ấy rất tốt."
    },
    usage: "Danh từ."
  },
  {
    id: 78,
    chinese: "能力",
    pinyin: "nénglì",
    meaning: "Năng lực",
    example: {
      sentence: "他的工作能力很強。",
      pinyin: "Tā de gōngzuò nénglì hěn qiáng.",
      translation: "Năng lực làm việc của anh ấy rất tốt."
    },
    usage: "Danh từ."
  },
  {
    id: 79,
    chinese: "溝通",
    pinyin: "gōutōng",
    meaning: "Giao tiếp, trao đổi",
    example: {
      sentence: "我們需要多溝通。",
      pinyin: "Wǒmen xūyào duō gōutōng.",
      translation: "Chúng ta cần giao tiếp nhiều hơn."
    },
    usage: "Động từ hoặc danh từ."
  },
  {
    id: 80,
    chinese: "開心",
    pinyin: "kāixīn",
    meaning: "Vui vẻ, hạnh phúc",
    example: {
      sentence: "今天我很開心。",
      pinyin: "Jīntiān wǒ hěn kāixīn.",
      translation: "Hôm nay tôi rất vui."
    },
    usage: "Tính từ."
  },
];

export default vocabularyFactory;