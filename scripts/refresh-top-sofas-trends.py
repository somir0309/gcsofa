import json
import re
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "top-sofas-data.js"


BASE_RULE = {
    "trend": "基础客厅沙发需求稳定，关键词更适合做常备款监控，重点看价格带、评论量和差评集中点。",
    "pain": ["担心坐感偏硬或塌陷", "担心实物尺寸和页面描述不一致", "担心安装麻烦或运输破损"],
    "descriptors": ["百搭", "耐看", "现代", "容易搭配"],
    "fabrics": ["高克重磨毛布", "耐磨科技布", "可拆洗混纺布"],
    "positive": ["外观比预期高级", "坐感适合日常会客", "安装流程容易理解"],
    "negative": ["色差和布料手感不稳定", "坐垫支撑感不足", "包装磕碰影响体验"],
    "buyer": ["首次布置客厅用户", "预算敏感家庭", "门店基础款客户"],
    "spec": "优先做2.1-2.3米三人位和紧凑双人位，控制包装体积和安装步骤。",
    "advice": "适合作为稳定跑量款，先用面料、坐深和包装效率拉开差异。",
    "risk": 42,
}


RULES = [
    {
        "pattern": r"沙发床|折叠|抽拉床",
        "trend": "沙发床关键词同时覆盖客厅、客房、出租屋和单间人群，热度来自一物两用和节省空间。",
        "pain": ["床态不够平整", "折叠五金异响或卡顿", "坐垫太薄导致久坐不舒服", "展开后占地尺寸超预期"],
        "descriptors": ["两用", "省空间", "可折叠", "客房备用", "小户型"],
        "fabrics": ["耐磨麻布", "防污科技布", "高弹针织复合布"],
        "positive": ["展开收起方便", "适合临时留宿", "小空间利用率高", "价格比独立床更容易接受"],
        "negative": ["睡感偏硬", "展开结构不够稳", "安装说明不清楚", "坐深和床长不适合高个用户"],
        "buyer": ["单间租房用户", "公寓业主", "小户型家庭", "客房备用需求客户"],
        "spec": "建议重点做1.8-2.0米宽、三档靠背、可拆洗布套，床态长度要标清。",
        "advice": "优先开发结构稳定、包装小、安装步骤少的款式；详情页必须把坐态和床态尺寸讲清楚。",
        "risk": 58,
    },
    {
        "pattern": r"电动|躺椅|按摩|充电",
        "trend": "功能沙发热度来自舒适升级和客厅影音场景，用户愿意为电动、躺姿、充电和杯架支付溢价。",
        "pain": ["电机和五金售后风险高", "靠背放倒后占墙距离不清楚", "皮面夏天闷热或易开裂", "重量大导致搬运困难"],
        "descriptors": ["电动", "高客单", "影音客厅", "舒适躺靠", "功能升级"],
        "fabrics": ["耐刮仿皮", "半苯胺触感皮", "耐污科技皮"],
        "positive": ["躺靠角度舒服", "充电和杯架很实用", "看电视休息体验好", "功能演示能带动成交"],
        "negative": ["电机噪音或故障", "皮面气味明显", "靠墙空间要求大", "运输安装费力"],
        "buyer": ["家庭影音用户", "中高预算客户", "注重舒适性的中老年用户"],
        "spec": "优先标配静音电机、USB/Type-C接口、离墙距离说明和可拆包装方案。",
        "advice": "适合做高利润款，但必须把电机质保、靠墙距离和售后配件准备好。",
        "risk": 68,
    },
    {
        "pattern": r"云朵|深坐|软包|羊羔绒|弧形",
        "trend": "云朵感、深坐和包裹感仍是社媒平台强关键词，成交依赖视觉柔软度和真实坐感口碑。",
        "pain": ["坐垫过软容易塌", "低矮造型不适合老人起身", "浅色面料不耐脏", "体积大导致运费高"],
        "descriptors": ["松弛感", "包裹感", "软糯", "奶油风", "高颜值"],
        "fabrics": ["羊羔绒复合布", "磨毛绒感科技布", "高克重雪尼尔"],
        "positive": ["外观柔和高级", "坐深适合盘腿和躺靠", "拍照视频效果好", "客厅氛围提升明显"],
        "negative": ["支撑不足", "浅色不耐脏", "坐垫回弹慢", "占空间比想象大"],
        "buyer": ["年轻家庭", "内容平台种草用户", "追求颜值的中高预算客户"],
        "spec": "建议坐深做到60-68cm，坐垫用高回弹海绵加羽绒棉，浅色款加可拆洗或防污说明。",
        "advice": "适合做视觉爆款，关键是把柔软外观和支撑结构同时做好，避免只软不耐坐。",
        "risk": 55,
    },
    {
        "pattern": r"组合|模块|L型|U型|贵妃|储物",
        "trend": "模块化组合沙发需求强，用户在意户型适配、左右互换、储物和后期扩展能力。",
        "pain": ["模块拼接容易滑动", "贵妃方向买错", "大件进门和电梯尺寸不确定", "储物五金耐用性存疑"],
        "descriptors": ["模块化", "可组合", "可换方向", "家庭客厅", "收纳友好"],
        "fabrics": ["耐磨科技布", "防污雪尼尔", "高密度混纺布"],
        "positive": ["能按客厅大小自由组合", "贵妃位躺靠舒服", "储物让客厅更整洁", "家庭多人使用更实用"],
        "negative": ["模块会移位", "安装件不够牢", "尺寸偏大", "面料清洁难度高"],
        "buyer": ["有家庭客厅的用户", "新房装修客户", "需要多人座位的家庭"],
        "spec": "建议做左右互换贵妃、隐藏连接扣、可拆洗套和进门尺寸提示。",
        "advice": "优先跟进，适合用规格标准化和模块扩展做系列款，能覆盖多个价格带。",
        "risk": 50,
    },
    {
        "pattern": r"小户型|公寓|单间|宿舍|双人|盒装|快装",
        "trend": "小户型和盒装快装关键词增长稳定，核心需求是低门槛购买、易搬运、易安装。",
        "pain": ["坐宽不足", "靠背偏低", "包装轻但稳定性差", "低价款面料和海绵寿命短"],
        "descriptors": ["紧凑", "轻量", "快装", "租房友好", "低预算"],
        "fabrics": ["耐磨平纹布", "可拆洗棉麻布", "防污科技布"],
        "positive": ["尺寸适合小空间", "搬运安装省心", "价格容易接受", "租房场景很匹配"],
        "negative": ["坐感单薄", "承重感不足", "靠背支撑弱", "实物看起来偏小"],
        "buyer": ["租房用户", "学生宿舍用户", "小公寓用户", "低预算首购客户"],
        "spec": "建议做1.2-1.8米宽、盒装拆装结构，页面重点标注承重和安装时间。",
        "advice": "适合做引流款，但要避免过度压低成本导致差评集中在坐感和寿命。",
        "risk": 60,
    },
    {
        "pattern": r"丝绒|金属脚|彩色|设计款|中古",
        "trend": "设计感沙发靠颜色、面料和脚型出圈，热度更依赖视觉差异和社媒内容传播。",
        "pain": ["颜色实物和图片差异大", "丝绒易留痕", "金属脚刮地板", "风格强导致适配面窄"],
        "descriptors": ["复古", "轻奢", "高饱和", "金属脚", "出片"],
        "fabrics": ["短绒丝绒", "抗压痕绒布", "高密度绒感布"],
        "positive": ["颜色漂亮", "拍照效果好", "小空间也有装饰感", "价格不高但显高级"],
        "negative": ["色差明显", "绒面容易压痕", "坐垫支撑一般", "腿脚安装不稳"],
        "buyer": ["年轻女性用户", "公寓软装用户", "短视频内容用户"],
        "spec": "建议先做奶油白、墨绿、焦糖、灰蓝等安全色，并准备同款布样说明。",
        "advice": "适合做内容款和引流款，颜色必须控制稳定，避免只靠图片吸引导致退货。",
        "risk": 57,
    },
    {
        "pattern": r"真皮|仿皮|皮革",
        "trend": "皮感沙发仍有稳定需求，用户关注高级感、清洁便利和耐用性，价格带弹性较大。",
        "pain": ["皮面气味", "夏天闷热冬天偏冷", "低价仿皮易开裂", "划痕和宠物抓痕明显"],
        "descriptors": ["高级感", "易打理", "稳重", "商务客厅", "耐看"],
        "fabrics": ["耐刮科技皮", "纳帕纹仿皮", "接触面真皮加侧背仿皮"],
        "positive": ["清洁方便", "客厅显档次", "支撑感强", "适合长期使用"],
        "negative": ["气味散得慢", "皮面开裂担忧", "坐感偏硬", "运输压痕明显"],
        "buyer": ["中高预算家庭", "办公室会客区", "偏稳重风格客户"],
        "spec": "建议明确接触面材质、耐刮测试、气味处理和保养方式。",
        "advice": "适合做利润款，材质说明必须透明，低价仿皮款要控制售后风险。",
        "risk": 62,
    },
    {
        "pattern": r"耐污|宠物|可拆洗|家庭",
        "trend": "宠物友好、耐污和可拆洗是家庭用户高频痛点关键词，卖点直接、复购和口碑空间大。",
        "pain": ["毛发清理困难", "套布拆装麻烦", "防污效果宣传过度", "浅色面料易显脏"],
        "descriptors": ["耐污", "宠物友好", "可拆洗", "家庭耐用", "易清洁"],
        "fabrics": ["防污科技布", "猫抓布", "可机洗混纺布"],
        "positive": ["有宠物也好打理", "孩子弄脏后容易清洁", "套布能拆洗更安心", "家庭日常使用省心"],
        "negative": ["防污效果不如预期", "拆洗后缩水或变形", "毛发粘附", "拉链和魔术贴不耐用"],
        "buyer": ["有小孩家庭", "养宠家庭", "高频使用客厅用户"],
        "spec": "建议做可拆洗坐垫套、耐磨测试说明、防污视频和替换套销售方案。",
        "advice": "适合做长期口碑款，详情页一定要用清洁测试和替换套降低顾虑。",
        "risk": 48,
    },
    {
        "pattern": r"卷扶手|美式|经典",
        "trend": "经典美式款热度不爆但需求稳定，适合门店样板间和传统家装客户。",
        "pain": ["款式显厚重", "扶手占空间", "年轻用户觉得不够轻盈", "布面花色容易过时"],
        "descriptors": ["经典", "稳重", "美式", "厚实", "会客"],
        "fabrics": ["高密雪尼尔", "细纹棉麻布", "耐磨提花布"],
        "positive": ["看起来厚实有质感", "扶手靠感舒服", "适合传统装修", "评分稳定"],
        "negative": ["体积偏大", "风格不够年轻", "扶手浪费座宽", "运输成本高"],
        "buyer": ["传统装修家庭", "门店样板间客户", "偏稳重审美用户"],
        "spec": "建议保留舒适扶手，但缩窄外扶手宽度，颜色以米灰、浅咖为主。",
        "advice": "适合作为稳款，不建议押太多颜色，重点做面料质感和尺寸优化。",
        "risk": 45,
    },
    {
        "pattern": r"游戏|灯带|杯架",
        "trend": "游戏风和影音功能关键词适合短视频种草，成交来自场景演示和年轻用户冲动购买。",
        "pain": ["灯带质感廉价", "杯架清洁困难", "功能件增加售后", "风格过强导致复购面窄"],
        "descriptors": ["游戏房", "灯带", "杯架", "沉浸式", "年轻化"],
        "fabrics": ["耐磨科技皮", "黑灰拼色布", "防水仿皮"],
        "positive": ["视觉冲击强", "看电影打游戏方便", "杯架和收纳实用", "短视频展示效果好"],
        "negative": ["灯带容易坏", "坐感不如预期", "占地较大", "清洁死角多"],
        "buyer": ["游戏房用户", "影音娱乐用户", "年轻男性用户"],
        "spec": "建议控制灯带为可替换低压件，杯架模块可拆洗，颜色以黑灰和深咖为主。",
        "advice": "适合做内容款，功能件要可维修，否则差评会集中在小配件。",
        "risk": 66,
    },
    {
        "pattern": r"豆袋|地垫|懒人|充气",
        "trend": "轻休闲沙发靠低价、轻量和年轻场景带来流量，但耐用性和坐感评价波动大。",
        "pain": ["支撑不足", "长期使用变形", "充气款漏气", "外观休闲但不适合正式客厅"],
        "descriptors": ["轻休闲", "低价", "年轻", "移动方便", "宿舍友好"],
        "fabrics": ["耐磨牛津布", "短毛绒外套", "可拆洗帆布"],
        "positive": ["价格低", "移动方便", "适合宿舍和游戏区", "拍视频有松弛感"],
        "negative": ["不够支撑", "容易塌", "充气或填充寿命短", "清洁不方便"],
        "buyer": ["宿舍用户", "年轻租房用户", "休闲区用户"],
        "spec": "建议做可拆洗外套和可补充填充物方案，避免主打长期客厅使用。",
        "advice": "只适合做流量补充款，不建议作为主力高客单方向。",
        "risk": 72,
    },
    {
        "pattern": r"户外|庭院",
        "trend": "户外套装具有季节性，需求集中在庭院、阳台和露台，材质耐候性决定口碑。",
        "pain": ["日晒褪色", "雨水后发霉", "坐垫收纳麻烦", "旺季后销量波动大"],
        "descriptors": ["户外", "庭院", "耐候", "套装", "季节性"],
        "fabrics": ["防水涤纶", "户外特斯林", "防霉快干布"],
        "positive": ["庭院氛围好", "套装搭配省心", "坐垫舒适", "适合聚会"],
        "negative": ["防水不持久", "藤编松动", "坐垫难收纳", "包装大运费高"],
        "buyer": ["庭院用户", "露台阳台用户", "度假民宿客户"],
        "spec": "建议重点说明防水等级、坐垫收纳、抗UV和替换坐垫方案。",
        "advice": "适合季节性备货，旺季前测试小批量，不建议全年重库存。",
        "risk": 59,
    },
]


FEATURE_EXTRAS = [
    (r"储物", {
        "positive": ["储物空间能提升客厅整洁度"],
        "negative": ["储物盖板和铰链耐用性容易被差评提到"],
        "pain": ["储物结构承重和开合顺滑度需要验证"],
        "descriptors": ["隐藏收纳"],
    }),
    (r"可拆洗", {
        "positive": ["可拆洗让家庭用户更放心"],
        "negative": ["拆洗后缩水、褪色或套回困难会影响评价"],
        "pain": ["套布拆装便利性必须真实验证"],
        "descriptors": ["可维护"],
    }),
    (r"低价", {
        "negative": ["低价款容易被评价坐感单薄、寿命短"],
        "pain": ["不能只压价格，要保住海绵和框架底线"],
        "descriptors": ["高性价比"],
    }),
    (r"高客单", {
        "positive": ["高客单用户更在意质感和服务承诺"],
        "negative": ["价格越高，对细节、包装和售后的容忍度越低"],
        "pain": ["质保、安装和配送体验必须同步升级"],
        "descriptors": ["质感款"],
    }),
    (r"杯架|充电接口", {
        "positive": ["杯架和充电口能提高场景使用便利性"],
        "negative": ["接口损坏、杯架松动会造成集中差评"],
        "pain": ["功能件要可替换，避免小配件拖累整款口碑"],
        "descriptors": ["场景功能"],
    }),
]


def read_data():
    text = DATA_FILE.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.GCSOFA_TOP_SOFAS\s*=\s*(\{.*\});\s*$", text, re.S)
    if not match:
        raise RuntimeError("Cannot find window.GCSOFA_TOP_SOFAS object.")
    return json.loads(match.group(1))


def write_data(data):
    DATA_FILE.write_text(
        "window.GCSOFA_TOP_SOFAS = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def unique(items, limit=None):
    result = []
    for item in items:
        if item and item not in result:
            result.append(item)
    return result[:limit] if limit else result


def product_text(product):
    return " ".join([
        product.get("title", ""),
        product.get("category", ""),
        " ".join(product.get("tags") or []),
    ])


def pick_rule(product):
    text = product_text(product)
    for rule in RULES:
        if re.search(rule["pattern"], text):
            return rule
    return BASE_RULE


def collect(rule, product, key, limit):
    values = list(rule.get(key, []))
    text = product_text(product)
    for pattern, extra in FEATURE_EXTRAS:
        if re.search(pattern, text):
            values.extend(extra.get(key, []))
    return unique(values, limit)


def score_product(product, rule):
    rank = Number = float(product.get("rank") or 10)
    rating = float(product.get("rating") or 0)
    reviews = float(product.get("reviewCount") or 0)
    rank_score = max(0, 11 - rank) * 3
    rating_score = max(0, rating - 3.8) * 16
    review_score = min(reviews / 150, 24)
    signal_bonus = 8 if any(word in product.get("salesSignal", "") for word in ["畅销", "推荐", "精选", "爆款"]) else 3
    opportunity = round(min(96, 38 + rank_score + rating_score + review_score + signal_bonus))
    risk = round(min(90, rule.get("risk", 50) + (8 if rating < 4.2 else 0) + (5 if reviews < 300 else 0)))
    if opportunity >= 82 and risk <= 58:
        priority = "重点跟进"
    elif opportunity >= 74:
        priority = "小批量测试"
    elif risk >= 68:
        priority = "谨慎观察"
    else:
        priority = "常规监控"
    return {"opportunity": opportunity, "risk": risk, "priority": priority}


def enrich_product(product):
    product = dict(product)
    rule = pick_rule(product)
    tags = product.get("tags") or []
    trend_keyword = " / ".join(value for value in [product.get("title", ""), product.get("category", ""), "、".join(tags)] if value)
    score = score_product(product, rule)

    for key in ["image", "thumbnail", "localImage", "originalImage", "previousImage", "previousThumbnail"]:
        product.pop(key, None)

    product.update({
        "imageStatus": "disabled",
        "visualKeyword": trend_keyword,
        "trendKeyword": trend_keyword,
        "trendJudgement": rule["trend"],
        "customerPainPoints": collect(rule, product, "pain", 5),
        "descriptorWords": unique([*tags, *collect(rule, product, "descriptors", 8)], 10),
        "fabricRecommendations": collect(rule, product, "fabrics", 4),
        "positiveReviewThemes": collect(rule, product, "positive", 5),
        "negativeReviewThemes": collect(rule, product, "negative", 5),
        "buyerProfile": collect(rule, product, "buyer", 4),
        "specSuggestion": rule["spec"],
        "selectionAdvice": rule["advice"],
        "reviewCaptureFocus": [
            "优先抓取五星评论中的舒适度、安装、尺寸和面料评价。",
            "重点抓取一星/二星评论中的塌陷、色差、气味、破损和售后问题。",
            "把重复出现的差评关键词反推到结构、面料、包装和详情页说明。",
        ],
        "opportunityScore": score["opportunity"],
        "riskScore": score["risk"],
        "priority": score["priority"],
    })
    return product


def main():
    data = read_data()
    data["capturedAt"] = datetime.now().strftime("%Y-%m-%d")
    data["updateFrequency"] = "每天 09:00 重新抓取；抓取失败时保留上一版并标记状态"
    data["sourceMode"] = "全球热销关键词监控：不展示图片，聚焦关键词趋势、评论反馈、痛点和选品动作"
    data["products"] = [enrich_product(product) for product in data.get("products", [])]
    data["imageCache"] = {
        "mode": "disabled",
        "fallback": "",
        "note": "热销选品页不展示图片，只保留关键词、趋势判断、评论反馈和选品建议。",
    }
    data["imagePolicy"] = {
        "mode": "disabled",
        "rule": "本页不展示图片，避免网络图片与热销关键词不匹配影响判断。",
        "fallback": "insight-only",
    }
    data["insightPolicy"] = {
        "reviewRule": "围绕热销关键词抓取并整理好评重点、差评风险和重复出现的客户痛点。",
        "outputRule": "每款输出关键词、趋势判断、痛点、描述词、面料推荐、规格建议、机会分和风险分。",
        "selectionRule": "优先选择高机会、低售后风险、面料和结构能落地的款式；短视频爆款先小批量测试。",
    }
    write_data(data)
    print(json.dumps({"ok": True, "products": len(data.get("products", []))}, ensure_ascii=False))


if __name__ == "__main__":
    main()
