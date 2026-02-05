const s = ['NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'HT', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI', 'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB', 'CAN', 'EM', 'SUB', 'ESC', 'FS', 'GS', 'RS', 'US'];
// https://zh.wikipedia.org/wiki/Unicode%E5%8D%80%E6%AE%B5
const l = [
  ['0000-007F', '基本拉丁字母', 'Basic Latin[g]'],
  ['0080-00FF', '拉丁字母补充-1', 'Latin-1 Supplement[h]'],
  ['0100-017F', '拉丁字母扩展-A', 'Latin Extended-A'],
  ['0180-024F', '拉丁字母扩展-B', 'Latin Extended-B'],
  ['0250-02AF', '国际音标扩展', 'IPA Extensions'],
  ['02B0-02FF', '占位修饰符号', 'Spacing Modifier Letters'],
  ['0300-036F', '组合附加符号', 'Combining Diacritical Marks'],
  ['0370-03FF', '希腊字母和科普特字母', 'Greek and Coptic'],
  ['0400-04FF', '西里尔字母', 'Cyrillic'],
  ['0500-052F', '西里尔字母补充', 'Cyrillic Supplement'],
  ['0530-058F', '亚美尼亚字母', 'Armenian'],
  ['0590-05FF', '希伯来文字母', 'Hebrew'],
  ['0600-06FF', '阿拉伯文字母', 'Arabic'],
  ['0700-074F', '叙利亚字母', 'Syriac'],
  ['0750-077F', '阿拉伯文补充', 'Arabic Supplement'],
  ['0780-07BF', '它拿字母', 'Thaana'],
  ['07C0-07FF', '西非书面文字', 'NKo'],
  ['0800-083F', '撒玛利亚字母', 'Samaritan'],
  ['0840-085F', '曼达安字母', 'Mandaic'],
  ['0860-086F', '叙利亚文补充', 'Syriac Supplement'],
  ['0870-089F', '阿拉伯字母扩展-B', 'Arabic Extended-B'],
  ['08A0-08FF', '阿拉伯字母扩展-A', 'Arabic Extended-A'],
  ['0900-097F', '天城文', 'Devanagari'],
  ['0980-09FF', '孟加拉文', 'Bengali'],
  ['0A00-0A7F', '古木基文', 'Gurmukhi'],
  ['0A80-0AFF', '古吉拉特文', 'Gujarati'],
  ['0B00-0B7F', '奥里亚文', 'Oriya'],
  ['0B80-0BFF', '泰米尔文', 'Tamil'],
  ['0C00-0C7F', '泰卢固文', 'Telugu'],
  ['0C80-0CFF', '卡纳达文', 'Kannada'],
  ['0D00-0D7F', '马拉雅拉姆文', 'Malayalam'],
  ['0D80-0DFF', '僧伽罗文', 'Sinhala'],
  ['0E00-0E7F', '泰文', 'Thai'],
  ['0E80-0EFF', '寮文', 'Lao'],
  ['0F00-0FFF', '藏文', 'Tibetan'],
  ['1000-109F', '缅甸文', 'Myanmar'],
  ['10A0-10FF', '格鲁吉亚字母', 'Georgian'],
  ['1100-11FF', '谚文字母', 'Hangul Jamo'],
  ['1200-137F', '埃塞俄比亚字母', 'Ethiopic'],
  ['1380-139F', '埃塞俄比亚字母补充', 'Ethiopic Supplement'],
  ['13A0-13FF', '切罗基文', 'Cherokee'],
  ['1400-167F', '统一加拿大原住民音节文字', 'Unified Canadian Aboriginal Syllabics'],
  ['1680-169F', '欧甘字母', 'Ogham'],
  ['16A0-16FF', '卢恩字母', 'Runic'],
  ['1700-171F', '他加禄字母', 'Tagalog'],
  ['1720-173F', '哈努诺文', 'Hanunoo'],
  ['1740-175F', '布希德字母', 'Buhid'],
  ['1760-177F', '塔格班瓦字母', 'Tagbanwa'],
  ['1780-17FF', '高棉文', 'Khmer'],
  ['1800-18AF', '蒙古文', 'Mongolian'],
  ['18B0-18FF', '统一加拿大原住民音节文字扩展', 'Unified Canadian Aboriginal Syllabics Extended'],
  ['1900-194F', '林布文', 'Limbu'],
  ['1950-197F', '德宏傣文', 'Tai Le'],
  ['1980-19DF', '新傣仂文', 'New Tai Lue'],
  ['19E0-19FF', '高棉文符号', 'Khmer Symbols'],
  ['1A00-1A1F', '布吉文', 'Buginese'],
  ['1A20-1AAF', '老傣仂文', 'Tai Tham'],
  ['1AB0-1AFF', '组合附加符号扩展', 'Combining Diacritical Marks Extended'],
  ['1B00-1B7F', '巴厘字母', 'Balinese'],
  ['1B80-1BBF', '巽他字母', 'Sundanese'],
  ['1BC0-1BFF', '巴塔克字母', 'Batak'],
  ['1C00-1C4F', '绒巴文', 'Lepcha'],
  ['1C50-1C7F', '桑塔利文', 'Ol Chiki'],
  ['1C80-1C8F', '西里尔字母扩展-C', 'Cyrillic Extended-C'],
  ['1C90-1CBF', '格鲁吉亚字母扩展', 'Georgian Extended'],
  ['1CC0-1CCF', '巽他字母补充', 'Sundanese Supplement'],
  ['1CD0-1CFF', '吠陀扩展', 'Vedic Extensions'],
  ['1D00-1D7F', '音标扩展', 'Phonetic Extensions'],
  ['1D80-1DBF', '音标扩展补充', 'Phonetic Extensions Supplement'],
  ['1DC0-1DFF', '组合附加符号补充', 'Combining Diacritical Marks Supplement'],
  ['1E00-1EFF', '拉丁字母扩展附加', 'Latin Extended Additional'],
  ['1F00-1FFF', '希腊字母扩展', 'Greek Extended'],
  ['2000-206F', '一般标点', 'General Punctuation'],
  ['2070-209F', '上标及下标', 'Superscripts and Subscripts'],
  ['20A0-20CF', '货币符号', 'Currency Symbols'],
  ['20D0-20FF', '符号用组合附加符号', 'Combining Diacritical Marks for Symbols'],
  ['2100-214F', '类字母符号', 'Letterlike Symbols'],
  ['2150-218F', '数字形式', 'Number Forms'],
  ['2190-21FF', '箭头', 'Arrows'],
  ['2200-22FF', '数学运算符', 'Mathematical Operators'],
  ['2300-23FF', '杂项技术符号', 'Miscellaneous Technical'],
  ['2400-243F', '控制图形', 'Control Pictures'],
  ['2440-245F', '光学字符识别', 'Optical Character Recognition'],
  ['2460-24FF', '带圈字母数字', 'Enclosed Alphanumerics'],
  ['2500-257F', '制表符', 'Box Drawing'],
  ['2580-259F', '方块元素', 'Block Elements'],
  ['25A0-25FF', '几何图形', 'Geometric Shapes'],
  ['2600-26FF', '杂项符号', 'Miscellaneous Symbols'],
  ['2700-27BF', '装饰符号', 'Dingbats'],
  ['27C0-27EF', '杂项数学符号-A', 'Miscellaneous Mathematical Symbols-A'],
  ['27F0-27FF', '追加箭头-A', 'Supplemental Arrows-A'],
  ['2800-28FF', '点字图案', 'Braille Patterns'],
  ['2900-297F', '追加箭头-B', 'Supplemental Arrows-B'],
  ['2980-29FF', '杂项数学符号-B', 'Miscellaneous Mathematical Symbols-B'],
  ['2A00-2AFF', '补充数学运算符', 'Supplemental Mathematical Operators'],
  ['2B00-2BFF', '杂项符号和箭头', 'Miscellaneous Symbols and Arrows'],
  ['2C00-2C5F', '格拉哥里字母', 'Glagolitic'],
  ['2C60-2C7F', '拉丁字母扩展-C', 'Latin Extended-C'],
  ['2C80-2CFF', '科普特字母', 'Coptic'],
  ['2D00-2D2F', '格鲁吉亚字母补充', 'Georgian Supplement'],
  ['2D30-2D7F', '提非纳文', 'Tifinagh'],
  ['2D80-2DDF', '埃塞俄比亚字母扩展', 'Ethiopic Extended'],
  ['2DE0-2DFF', '西里尔字母扩展-A', 'Cyrillic Extended-A'],
  ['2E00-2E7F', '补充标点', 'Supplemental Punctuation'],
  ['2E80-2EFF', '中日韩汉字部首补充', 'CJK Radicals Supplement'],
  ['2F00-2FDF', '康熙部首', 'Kangxi Radicals'],
  ['2FF0-2FFF', '表意文字描述字符', 'Ideographic Description Characters'],
  ['3000-303F', '中日韩符号和标点', 'CJK Symbols and Punctuation'],
  ['3040-309F', '平假名', 'Hiragana'],
  ['30A0-30FF', '片假名', 'Katakana'],
  ['3100-312F', '注音符号', 'Bopomofo'],
  ['3130-318F', '谚文兼容字母', 'Hangul Compatibility Jamo'],
  ['3190-319F', '汉文训读符号', 'Kanbun'],
  ['31A0-31BF', '注音符号扩展', 'Bopomofo Extended'],
  ['31C0-31EF', '中日韩笔画', 'CJK Strokes'],
  ['31F0-31FF', '片假名语音扩展', 'Katakana Phonetic Extensions'],
  ['3200-32FF', '中日韩带圈字符及月份', 'Enclosed CJK Letters and Months'],
  ['3300-33FF', '中日韩兼容字符', 'CJK Compatibility'],
  ['3400-4DBF', '中日韩统一表意文字扩展区A', 'CJK Unified Ideographs Extension-A'],
  ['4DC0-4DFF', '易经六十四卦符号', 'Yijing Hexagram Symbols'],
  ['4E00-9FFF', '中日韩统一表意文字 (基本区)', 'CJK Unified Ideographs'],
  ['A000-A48F', '彝文音节', 'Yi Syllables'],
  ['A490-A4CF', '彝文部首', 'Yi Radicals'],
  ['A4D0-A4FF', '傈僳文', 'Lisu'],
  ['A500-A63F', '瓦伊文', 'Vai'],
  ['A640-A69F', '西里尔字母扩展-B', 'Cyrillic Extended-B'],
  ['A6A0-A6FF', '巴姆穆文字', 'Bamum'],
  ['A700-A71F', '声调修饰符号', 'Modifier Tone Letters'],
  ['A720-A7FF', '拉丁字母扩展-D', 'Latin Extended-D'],
  ['A800-A82F', '锡尔赫特文', 'Syloti Nagri'],
  ['A830-A83F', '通用印度数字形式', 'Common Indic Number Forms'],
  ['A840-A87F', '八思巴文', 'Phags-pa'],
  ['A880-A8DF', '条拉什特拉文', 'Saurashtra'],
  ['A8E0-A8FF', '天城文扩展', 'Devanagari Extended'],
  ['A900-A92F', '克耶字母', 'Kayah Li'],
  ['A930-A95F', '勒姜字母', 'Rejang'],
  ['A960-A97F', '谚文字母扩展-A', 'Hangul Jamo Extended-A'],
  ['A980-A9DF', '爪哇字母', 'Javanese'],
  ['A9E0-A9FF', '缅甸文扩展-B', 'Myanmar Extended-B'],
  ['AA00-AA5F', '占文', 'Cham'],
  ['AA60-AA7F', '缅甸文扩展-A', 'Myanmar Extended-A'],
  ['AA80-AADF', '傣越文', 'Tai Viet'],
  ['AAE0-AAFF', '梅泰文扩展', 'Meetei Mayek Extensions'],
  ['AB00-AB2F', '埃塞俄比亚字母扩展-A', 'Ethiopic Extended-A'],
  ['AB30-AB6F', '拉丁字母扩展-E', 'Latin Extended-E'],
  ['AB70-ABBF', '切罗基文补充', 'Cherokee Supplement'],
  ['ABC0-ABFF', '梅泰文', 'Meetei Mayek'],
  ['AC00-D7AF', '谚文音节', 'Hangul Syllables'],
  ['D7B0-D7FF', '谚文字母扩展-B', 'Hangul Jamo Extended-B'],
  ['D800-DB7F', '高半代用区', 'High Surrogates'],
  ['DB80-DBFF', '高半私人代用区', 'High Private Use Surrogates'],
  ['DC00-DFFF', '低半代用区', 'Low Surrogates'],
  ['E000-F8FF', '私用区', 'Private Use Area'],
  ['F900-FAFF', '中日韩兼容表意文字', 'CJK Compatibility Ideographs'],
  ['FB00-FB4F', '字母表达形式', 'Alphabetic Presentation Forms'],
  ['FB50-FDFF', '阿拉伯字母表达形式-A', 'Arabic Presentation Forms-A'],
  ['FE00-FE0F', '变体选择符', 'Variation Selectors'],
  ['FE10-FE1F', '竖排形式', 'Vertical Forms'],
  ['FE20-FE2F', '组合用半符号', 'Combining Half Marks'],
  ['FE30-FE4F', '中日韩兼容形式', 'CJK Compatibility Forms'],
  ['FE50-FE6F', '小写变体形式', 'Small Form Variants'],
  ['FE70-FEFF', '阿拉伯字母表达形式-B', 'Arabic Presentation Forms-B'],
  ['FF00-FFEF', '半角及全角字符', 'Halfwidth and Fullwidth Forms'],
  ['FFF0-FFFF', '特殊', 'Specials'],
  ['10000-1007F', '线形文字B音节文字', 'Linear B Syllabary'],
  ['10080-100FF', '线形文字B表意文字', 'Linear B Ideograms'],
  ['10100-1013F', '爱琴海数字', 'Aegean Numbers'],
  ['10140-1018F', '古希腊数字', 'Ancient Greek Numbers'],
  ['10190-101CF', '古代符号', 'Ancient Symbols'],
  ['101D0-101FF', '斐斯托斯圆盘', 'Phaistos Disc'],
  ['10280-1029F', '吕基亚字母', 'Lycian'],
  ['102A0-102DF', '卡里亚字母', 'Carian'],
  ['102E0-102FF', '科普特闰余数字', 'Coptic Epact Numbers'],
  ['10300-1032F', '古意大利字母', 'Old Italic'],
  ['10330-1034F', '哥特字母', 'Gothic'],
  ['10350-1037F', '古彼尔姆文', 'Old Permic'],
  ['10380-1039F', '乌加里特字母', 'Ugaritic'],
  ['103A0-103DF', '古波斯楔形文字', 'Old Persian'],
  ['10400-1044F', '德瑟雷特字母', 'Deseret'],
  ['10450-1047F', '萧伯纳字母', 'Shavian'],
  ['10480-104AF', '奥斯曼亚字母', 'Osmanya'],
  ['104B0-104FF', '欧塞奇字母', 'Osage'],
  ['10500-1052F', '爱尔巴桑字母', 'Elbasan'],
  ['10530-1056F', '高加条阿尔巴尼亚字母', 'Caucasian Albanian'],
  ['10570-105BF', '维斯库奇文', 'Vithkuqi'],
  ['10600-1077F', '线形文字A', 'Linear A'],
  ['10780-107BF', '拉丁字母扩展-F', 'Latin Extended-F'],
  ['10800-1083F', '塞浦路斯音节文字', 'Cypriot Syllabary'],
  ['10840-1085F', '帝国亚拉姆文', 'Imperial Aramaic'],
  ['10860-1087F', '帕尔迈拉字母', 'Palmyrene'],
  ['10880-108AF', '纳巴泰字母', 'Nabataean'],
  ['108E0-108FF', '哈特拉文', 'Hatran'],
  ['10900-1091F', '腓尼基字母', 'Phoenician'],
  ['10920-1093F', '吕底亚字母', 'Lydian'],
  ['10940-1095F', '吕底亚字母', 'Sidetic'],
  ['10980-1099F', '麦罗埃文圣书体', 'Meroitic Hieroglyphs'],
  ['109A0-109FF', '麦罗埃文草书体', 'Meroitic Cursive'],
  ['10A00-10A5F', '佉卢文', 'Kharoshthi'],
  ['10A60-10A7F', '古南阿拉伯字母', 'Old South Arabian'],
  ['10A80-10A9F', '古北阿拉伯字母', 'Old North Arabian'],
  ['10AC0-10AFF', '摩尼字母', 'Manichaean'],
  ['10B00-10B3F', '阿维斯陀字母', 'Avestan'],
  ['10B40-10B5F', '碑刻帕提亚文', 'Inscriptional Parthian'],
  ['10B60-10B7F', '碑刻巴列维文', 'Inscriptional Pahlavi'],
  ['10B80-10BAF', '诗篇巴列维文', 'Psalter Pahlavi'],
  ['10C00-10C4F', '古突厥文', 'Old Turkic'],
  ['10C80-10CFF', '古匈牙利字母', 'Old Hungarian'],
  ['10D00-10D3F', '哈乃斐罗兴亚文', 'Hanifi Rohingya'],
  ['10D40-10D8F', '加莱文', 'Garay'],
  ['10E60-10E7F', '卢米文数字', 'Rumi Numeral Symbols'],
  ['10E80-10EBF', '雅兹迪文', 'Yezidi'],
  ['10EC0-10EFF', '阿拉伯字母扩展-C', 'Arabic Extended-C'],
  ['10F00-10F2F', '古粟特字母', 'Old Sogdian'],
  ['10F30-10F6F', '粟特字母', 'Sogdian'],
  ['10F70-10FAF', '回鹘字母', 'Old Uyghur'],
  ['10FB0-10FDF', '花剌子模字母', 'Chorasmian'],
  ['10FE0-10FFF', '埃利迈文', 'Elymaic'],
  ['11000-1107F', '婆罗米文', 'Brahmi'],
  ['11080-110CF', '凯提文', 'Kaithi'],
  ['110D0-110FF', '条拉僧平文字', 'Sora Sompeng'],
  ['11100-1114F', '查克马文', 'Chakma'],
  ['11150-1117F', '马哈佳尼文', 'Mahajani'],
  ['11180-111DF', '夏拉达文', 'Sharada'],
  ['111E0-111FF', '古僧伽罗文数字', 'Sinhala Archaic Numbers'],
  ['11200-1124F', '科杰基文', 'Khojki'],
  ['11280-112AF', '穆尔塔尼文', 'Multani'],
  ['112B0-112FF', '库达瓦迪文', 'Khudawadi'],
  ['11300-1137F', '古兰塔文', 'Grantha'],
  ['11300-113FF', '古兰塔文', 'Tulu-Tigalari'],
  ['11400-1147F', '纽瓦字母', 'Newa'],
  ['11480-114DF', '底罗仆多文', 'Tirhuta'],
  ['11580-115FF', '悉昙文字', 'Siddham'],
  ['11600-1165F', '莫迪文', 'Modi'],
  ['11660-1167F', '蒙古文补充', 'Mongolian Supplement'],
  ['11680-116CF', '塔克里文', 'Takri'],
  ['116D0-116FF', '缅甸文扩展-C', 'Myanmar Extended-C'],
  ['11700-1174F', '阿洪姆文', 'Ahom'],
  ['11800-1184F', '多格拉文', 'Dogra'],
  ['118A0-118FF', '瓦兰齐地文', 'Warang Citi'],
  ['11900-1195F', '岛屿字母', 'Dhives Akuru (Dives Akuru)'],
  ['119A0-119FF', '南迪城文', 'Nandinagari'],
  ['11A00-11A4F', '札那巴札尔方形字母', 'Zanabazar Square'],
  ['11A50-11AAF', '条永布文字', 'Soyombo'],
  ['11AB0-11ABF', '加拿大原住民音节文字扩展-A', 'Unified Canadian Aboriginal Syllabics Extended-A'],
  ['11AC0-11AFF', '包钦豪文', 'Pau Cin Hau'],
  ['11B00-11B5F', '天城文扩展-A', 'Devanagari Extended-A'],
  ['11B60-11B7F', '夏拉达文补充', 'Sharada Supplement'],
  ['11BC0-11BFF', '苏努瓦尔文', 'Sunuwar'],
  ['11C00-11C6F', '拜克舒基文', 'Bhaiksuki'],
  ['11C70-11CBF', '玛钦文', 'Marchen'],
  ['11D00-11D5F', '马萨拉姆贡德文字', 'Masaram Gondi'],
  ['11D60-11DAF', '托隆希基文', 'Tolong Siki'],
  ['11DB0-11DEF', '贡贾拉贡德文字', 'Gunjala Gondi'],
  ['11EE0-11EFF', '望加锡文', 'Makasar'],
  ['11F00-11F5F', '卡维文', 'Kawi'],
  ['11FB0-11FBF', '老傈僳文补充', 'Lisu Supplement'],
  ['11FC0-11FFF', '泰米尔文补充', 'Tamil Supplement'],
  ['12000-123FF', '楔形文字', 'Cuneiform'],
  ['12400-1247F', '楔形文字数字和标点符号', 'Cuneiform Numbers and Punctuation'],
  ['12480-1254F', '早期王朝楔形文字', 'Early Dynastic Cuneiform'],
  ['12F90-12FFF', '塞浦路斯-米诺斯文字', 'Cypro-Minoan'],
  ['13000-1342F', '埃及圣书体', 'Egyptian Hieroglyphs'],
  ['13430-1345F', '埃及圣书体格式控制', 'Egyptian Hieroglyph Format Controls'],
  ['13460-143FF', '埃及圣书体扩展-A', 'Egyptian Hieroglyphs Extended-A'],
  ['14400-1467F', '安纳托利亚象形文字', 'Anatolian Hieroglyphs'],
  ['16100-1613F', '古隆凯玛文', 'Gurung Khema'],
  ['16800-16A3F', '巴姆穆文字补充', 'Bamum Supplement'],
  ['16A40-16A6F', '默禄文', 'Mro'],
  ['16A70-16ACF', '唐萨文', 'Tangsa'],
  ['16AD0-16AFF', '巴萨文', 'Bassa Vah'],
  ['16B00-16B8F', '救世苗文', 'Pahawh Hmong'],
  ['16D40-16D7F', '基拉特拉伊文', 'Kirat Rai'],
  ['16E40-16E9F', '梅德法伊德林文', 'Medefaidrin'],
  ['16EA0-16EDF', '贝里亚埃尔菲', 'Beria Erfe'],
  ['16F00-16F9F', '柏格理苗文', 'Miao'],
  ['16FE0-16FFF', '表意符号和标点符号', 'Ideographic Symbols and Punctuation'],
  ['17000-187FF', '西夏文', 'Tangut'],
  ['18800-18AFF', '西夏文部件', 'Tangut Components'],
  ['18B00-18CFF', '契丹小字', 'Khitan Small Script'],
  ['18D00-18D7F', '西夏文补充', 'Tangut Supplement'],
  ['18D80-18DFF', '西夏文部件补充', 'Tangut Components Supplement'],
  ['1AFF0-1AFFF', '假名扩展-B', 'Kana Extended-B'],
  ['1B000-1B0FF', '假名补充', 'Kana Supplement'],
  ['1B100-1B12F', '假名扩展-A', 'Kana Extended-A'],
  ['1B130-1B16F', '小型假名扩展', 'Small Kana Extension'],
  ['1B170-1B2FF', '女书', 'Nushu'],
  ['1BC00-1BC9F', '杜普雷速记', 'Duployan'],
  ['1BCA0-1BCAF', '速记格式控制符', 'Shorthand Format Controls'],
  ['1CC00-1CEBF', '遗留计算符号补充', 'Symbols for Legacy Computing Supplement'],
  ['1CEC0-1CEFF', '杂项符号 补充', 'Miscellaneous Symbols Supplement'],
  ['1CF00-1CFCF', '赞玫尼圣歌音乐符号', 'Znamenny Musical Notation'],
  ['1D000-1D0FF', '拜占庭音乐符号', 'Byzantine Musical Symbols'],
  ['1D100-1D1FF', '音乐符号', 'Musical Symbols'],
  ['1D200-1D24F', '古希腊音乐记号', 'Ancient Greek Musical Notation'],
  ['1D2C0-1D2DF', '卡克托维克数字', 'Kaktovik Numerals'],
  ['1D2E0-1D2FF', '玛雅数字', 'Mayan Numerals'],
  ['1D300-1D35F', '太玄经符号', 'Tai Xuan Jing Symbols'],
  ['1D360-1D37F', '算筹', 'Counting Rod Numerals'],
  ['1D400-1D7FF', '字母和数字符号', 'Mathematical Alphanumeric Symbols'],
  ['1D800-1DAAF', '萨顿书写符号', 'Sutton SignWriting'],
  ['1DF00-1DFFF', '拉丁字母扩展-G', 'Latin Extended-G'],
  ['1E000-1E02F', '格拉哥里字母补充', 'Glagolitic Supplement'],
  ['1E030-1E08F', '西里尔字母扩展-D', 'Cyrillic Extended-D'],
  ['1E100-1E14F', '创世纪苗文', 'Nyiakeng Puachue Hmong'],
  ['1E290-1E2BF', '投投文', 'Toto'],
  ['1E2C0-1E2FF', '文乔字母', 'Wancho'],
  ['1E4D0-1E4FF', '蒙达里字母', 'Nag Mundari'],
  ['1E5D0-1E5FF', '奥纳尔文', 'Ol Onal'],
  ['1E6C0-1E6FF', '侥文'],
  ['1E7E0-1E7FF', '埃塞俄比亚字母扩展-B', 'Ethiopic Extended-B'],
  ['1E800-1E8DF', '门德基卡库文', 'Mende Kikakui'],
  ['1E900-1E95F', '阿德拉姆字母', 'Adlam'],
  ['1EC70-1ECBF', '印度西亚格数字', 'Indic Siyaq Numbers'],
  ['1ED00-1ED4F', '奥斯曼西亚格数字', 'Ottoman Siyaq Numbers'],
  ['1EE00-1EEFF', '阿拉伯字母数字符号', 'Arabic Mathematical Alphabetic Symbols'],
  ['1F000-1F02F', '麻将牌', 'Mahjong Tiles'],
  ['1F030-1F09F', '多米诺骨牌', 'Domino Tiles'],
  ['1F0A0-1F0FF', '扑克牌', 'Playing Cards'],
  ['1F100-1F1FF', '带圈字母数字补充', 'Enclosed Alphanumeric Supplement'],
  ['1F200-1F2FF', '带圈表意文字补充', 'Enclosed Ideographic Supplement'],
  ['1F300-1F5FF', '杂项符号和象形文字', 'Miscellaneous Symbols and Pictographs'],
  ['1F600-1F64F', '表情符号', 'Emoticons'],
  ['1F650-1F67F', '装饰符号', 'Ornamental Dingbats'],
  ['1F680-1F6FF', '交通和地图符号', 'Transport and Map Symbols'],
  ['1F700-1F77F', '炼金术符号', 'Alchemical Symbols'],
  ['1F780-1F7FF', '几何图形扩展', 'Geometric Shapes Extended'],
  ['1F800-1F8FF', '追加箭头-C', 'Supplemental Arrows-C'],
  ['1F900-1F9FF', '补充符号和象形文字', 'Supplemental Symbols and Pictographs'],
  ['1FA00-1FA6F', '棋类符号', 'Chess Symbols'],
  ['1FA70-1FAFF', '符号和象形文字扩展-A', 'Symbols and Pictographs Extended-A'],
  ['1FB00-1FBFF', '遗留计算符号', 'Symbols for Legacy Computing'],
  ['20000-2A6DF', '中日韩统一表意文字扩展区B', 'CJK Unified Ideographs Extension B'],
  ['2A700-2B73F', '中日韩统一表意文字扩展区C', 'CJK Unified Ideographs Extension C'],
  ['2B740-2B81F', '中日韩统一表意文字扩展区D', 'CJK Unified Ideographs Extension D'],
  ['2B820-2CEAF', '中日韩统一表意文字扩展区E', 'CJK Unified Ideographs Extension E'],
  ['2CEB0-2EBEF', '中日韩统一表意文字扩展区F', 'CJK Unified Ideographs Extension F'],
  ['2EBF0-2EE5F', '中日韩统一表意文字扩展区I', 'CJK Unified Ideographs Extension I'],
  ['2F800-2FA1F', '中日韩兼容表意文字补充区', 'CJK Compatibility Ideographs Supplement'],
  ['30000-3134F', '中日韩统一表意文字扩展区G', 'CJK Unified Ideographs Extension G'],
  ['31350-323AF', '中日韩统一表意文字扩展区H', 'CJK Unified Ideographs Extension H'],
  ['323B0-3347F', '中日韩统一表意文字扩展区J', 'CJK Unified Ideographs Extension J'],
  ['E0000-E007F', '标签', 'Tags'],
  ['E0100-E01EF', '变体选择符补充', 'Variation Selectors Supplement'],
  ['F0000-FFFFF', '补充私人使用区-A', 'Supplementary Private Use Area-A'],
  ['100000-10FFFF', '补充私人使用区-B', 'Supplementary Private Use Area-B'],
];

let unicodeNames = {};

async function loadUnicodeNames() {
  const res = await fetch("/js/unicode-names.json");
  if (!res.ok) {
    throw new Error("Failed to load unicode-names.json");
  }
  unicodeNames = await res.json();
}

const d = function (a, b, c, cp) {
  let title = a + '-' + b + ': ' + c;
  a = parseInt(a, 16);
  let x = Math.floor(a / 16);
  b = parseInt(b, 16);
  let y = Math.ceil(b / 16);

  let container = document.querySelector('.container');
  let table = document.createElement('table');
  table.setAttribute('class', "w-full min-w-full table-auto text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400");

  let caption = document.createElement('caption');
  caption.setAttribute('class', 'text-sm uppercase');
  caption.innerText = title;
  table.appendChild(caption);

  let thead = document.getElementById('ut').getElementsByTagName('thead')[0];
  // let clone = thead.cloneNode(true);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
  for (let i = x; i < y; i++) {
    let row = tbody.insertRow(-1);
    row.setAttribute("class", "bg-white border-b dark:bg-gray-800 dark:border-gray-700");
    let th = document.createElement("TH");
    th.setAttribute("scope", "row");
    th.setAttribute("class", "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase");
    let k = (i * 16).toString(16).toUpperCase().padStart(4, '0').replace(/0$/, '_');
    th.innerHTML = k;
    row.appendChild(th);
    for (let j = 0; j < 16; j++) {
      let cell = row.insertCell(j + 1);
      cell.setAttribute("class", "px-6 py-4 font-medium");
      let k = i * 16 + j;
      if (k <= 31) {
        cell.innerHTML = s[k];
      } else if (k == 127) {
        cell.innerHTML = 'DEL';
      } else {
        cell.innerHTML = '&#' + k + ';';
        cell.title = unicodeNames[k] ?? "";
      }
      if (cp == k) {
        cell.setAttribute("class", "text-red-600");
      }
    }
  }
  table.appendChild(tbody);
  container.appendChild(table);
}

const getCodePoint = function (q) {
  if (q.includes('-')) {
    return null;
  }
  // 1️⃣ 形如 "10191"
  if (/^[0-9a-fA-F]+$/.test(q)) {
    return parseInt(q, 16);
  }

  // 2️⃣ 单个字符（含非 BMP）
  if (q.length > 0) {
    return decodeURIComponent(q).codePointAt(0);
  }

  return null;
}

const e = function (p) {
  const q = (p.startsWith('Q=') || p.startsWith('q=')) ? p.slice(2) : p;
  const cp = getCodePoint(q);
  let [s, t] = [-1, 0];
  if (q.includes('-')) {
    [s, t] = q.split('-').map(x => parseInt(x, 16));
  }

  for (let i = 0, h = l.length; i < h; i++) {
    const range = l[i][0];
    const [start, end] = range.split('-').map(x => parseInt(x, 16));
    let link = '/unicode.html?q=' + range;

    if (cp !== null) {
      if (cp >= start && cp <= end) {
        [s, t] = [start, end];
      }
    }

    if (start <= s && t <= end) {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      let a = l[i][0].split('-')[0];
      let b = l[i][0].split('-')[1];
      d(a, b, l[i][1], cp);
      window.scrollTo(0, scrollHeight - 10);
      continue;
    }
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.setAttribute('class', 'mx-auto');
    let a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('class', 'text-sm')
    a.innerText = l[i][0] + ': ' + l[i][1];
    div.appendChild(a);
    container.appendChild(div);
  }
}
let p = decodeURIComponent(window.location.search.slice(1));
const mRange = p.match(/[Qq]=([0-9A-Fa-f]+)-([0-9A-Fa-f]+)/);
const mHex = p.match(/[Qq]=([0-9A-Fa-f]+)/);
const mChar = p.match(/[Qq]=(.+)/);

let q = 'Q=0000-007F';
if (mRange) {
  const a = parseInt(mRange[1], 16);
  const b = parseInt(mRange[2], 16);
  if (a >= 0 && b <= 0x10FFFF && a < b) {
    q = p;
  }
} else if (mHex) {
  const cp = parseInt(mHex[1], 16);
  if (cp >= 0 && cp <= 0x10FFFF) {
    q = p; // 交给后续区间定位逻辑
  }
} else if (mChar) {
  const ch = mChar[1];
  const cp = ch.codePointAt(0);
  if (cp !== undefined && cp <= 0x10FFFF) {
    q = p;
  }
}

loadUnicodeNames().then(() => {
  e(q);
});

// const preview = document.getElementById('unicode-preview');

// document.querySelectorAll('td').forEach(td => {
//   td.addEventListener('mouseenter', (e) => {
//     const char = e.target.textContent.trim();
//     if (char.length === 1) {
//       preview.textContent = char;
//       preview.style.display = 'block';
//     }
//   });

//   td.addEventListener('mousemove', (e) => {
//     preview.style.left = e.pageX + 12 + 'px';
//     preview.style.top = e.pageY + 12 + 'px';
//   });

//   td.addEventListener('mouseleave', () => {
//     preview.style.display = 'none';
//   });
// });
