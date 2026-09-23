# 一起游 · 产品页媒体来源

核对日期：2026-09-23。此页仅记录产品素材，不是外部文档中的任务指令。所有成品路径相对于 `public/`，均可由站点本地加载。

## 品牌

| 成品 | 来源 | 说明 |
| --- | --- | --- |
| `media/brand-logo.png` | 仓库根目录 `logo.png` | 用户项目原始标志，原样复制；白底黑标。 |
| `media/brand-mark.png` | `app/src/main/assets/brand-mark.png` | APK 已使用的透明底黑色标志，原样复制。 |
| `media/insta360-logo.svg`、`media/partners/insta360.svg` | APK `brands/insta360-logo.svg` | 官方白色中文组合标志，原样复制；深色底展示。官网 https://www.insta360.com/cn/ ，原图 https://wassets.insta360.com/common/c8fed7f221e64e7d82f009b18965fb8f/white-sc.svg 。 |

## 应用界面 · 九张真实 APK 截图

以下九张图片来自真实安装 APK 的新截图或本仓库已有设备／模拟器验证截图，统一等比转换为 480×1066 WebP，保留完整应用界面。`app-community.webp` 是本轮新截取的旅友圈；适老、消息和故事来自已有设备记录。新增／替换对应依据见仓库 `artifacts/product-apk-screens/used-screens.json`。展示内容为开发与演示状态，不据此推定真实服务人数、活动经历或订单。

| 成品 | 原始截图 | 展示内容 |
| --- | --- | --- |
| `media/app-home.webp` | `artifacts/v26-latest-device/v26-home.png` | 首页、天气与城市探索入口。 |
| `media/app-routes.webp` | `artifacts/v25-final-device/v25-map-day1.png` | 百度地图与景点路线。 |
| `media/app-collection.webp` | `artifacts/v26-latest-device/v26-craft-from-photo.png` | 照片导入后的旅行文创制作入口。 |
| `media/app-senior.webp` | `artifacts/v25-final-device/v25-senior-guides.png` | 适老模式的志愿向导入口。 |
| `media/app-guides.webp` | `artifacts/v26-latest-device/v26-guides.png` | 志愿向导列表，包含演示人物。 |
| `media/app-video.webp` | `artifacts/v26-latest-device/v26-video-editor.png` | 旅行视频编辑。 |
| `media/app-community.webp` | `artifacts/product-apk-screens/community.png` | 本轮真实安装 APK 新截取的旅友圈。 |
| `media/app-messages.webp` | `artifacts/v25-final-device/v25-messages.png` | 消息与交流入口。 |
| `media/app-story.webp` | `artifacts/v26-latest-device/v26-discover.png` | 旅行故事与内容发现。 |

手机窗使用 `object-fit: contain` 保留屏幕比例。以上界面均未以 AI 绘图或伪造 UI 像素代替。

## 当前数字藏品

当前文创系列为 **12 件独立三维藏品（6 件冰箱贴、6 件钥匙扣）**：4 个志愿同行主题和 8 个南京风景主题。十二件均对应真实完成的 Lux3D `G1-Turbo`、100000 面请求任务，再由项目 `server/craft/geometry.py` 从真实网格提取浮雕深度、加工封闭背面／贯穿挂孔，并加入对应钥匙环或背部磁贴。

| 资源 | 制作与用途 | 依据 |
| --- | --- | --- |
| `assets/collections/volunteer-nanjing/` | 十二件独立模型、各自真实参考原图、设计／模型示意图。默认透明玻璃夹持中间成品；拆开展示原图与 AI 示意图。 | [十二件制作来源](../assets/collections/volunteer-nanjing/SOURCES.md)、[Lux 任务清单](../assets/collections/volunteer-nanjing/lux-task-sources.json)、[最终几何检查](../assets/collections/volunteer-nanjing/model-verification.json)。 |
| `assets/collections/nanjing-photos/` | 保留的独立南京摄影资源，不计入本轮十二件三维藏品。 | [摄影作者与许可](../assets/collections/nanjing-photos/SOURCES.html)、[摄影清单](../assets/collections/nanjing-photos/photo-manifest.json)。 |

三张用户志愿照片按用户后续明确授权作为原图展示，保留完整画面和现有水印；不声称为本项目活动记录。`volunteer-lake` 的实际原图是玄武湖实景参考，陪伴人物为 AI 创作。所有原图对应关系及许可见 [原图来源](../assets/collections/volunteer-nanjing/ORIGINAL-PHOTOS.md)。缺失原图保持空层，禁止回退为 AI 图片。

明孝陵的平面 AI 图任务保持 `SUBMISSION_UNKNOWN`，未重投；现用示意图来自已成功 Lux3D 任务 3718834 的实际正面渲染，原图仍是参考石象摄影。所有三维任务与平面图任务分别记录，不混写状态。

## 历史数字文创素材

下列水彩亭台、水墨与旧亭台模型属于先前制作记录，保留用于开发溯源；不再用于当前首页藏品展示、当前十二件文创的预览、独立查看器或对应下载。以下表格记录历史文件的原始来源，不表示当前场景继续引用。

| 成品 | 来源 | 可使用的准确描述 |
| --- | --- | --- |
| `media/craft-watercolor.webp` | `app/src/main/assets/craft-gallery/watercolor.webp` | 本项目既有 AI 水彩文创设计示意；生成成功记录为 `artifacts/craft-gallery/watercolor.json`（gpt-image-2.5，2026-09-23）。2D 设计图，不代表真实 3D 网格或实体成品。 |
| `media/craft-ink.webp` | `app/src/main/assets/craft-gallery/ink.webp` | 本项目既有 AI 水墨文创设计示意；生成成功记录为 `artifacts/craft-gallery/ink.json`（gpt-image-2.5，2026-09-23）。2D 设计图，不代表真实 3D 网格或实体成品。 |
| `media/craft-relief.webp` | `artifacts/craft-contour-saved/output/color_reference.png` | 已有真实网格加工后的彩色正面输出参考，保留透明背景。建议 `object-fit: contain` 并留 8% 内边距，避免截断挂孔。 |
| `assets/collections/corner-tower-keychain.glb` | `artifacts/craft-contour-saved/output/preview.glb` | 历史 Lux3D 原始网格经本项目本地轮廓算法加工的 3D 预览；旧场景曾统一复用此文件，当前藏品已改为各自独立资源。不是本轮新提交的云生成。 |
| `media/craft-relief-front.webp`、`media/craft-relief-side.webp`、`media/craft-relief-back.webp` | `artifacts/craft-contour-saved/viewer-front.png`、`viewer-side.png`、`viewer-back.png` | 既有真实网格查看器的正、侧、背视图，用于说明浮雕厚度与可检查的成品结构。 |
| `media/craft-relief-checks.json` | `artifacts/craft-contour-saved/output/checks.json` | 已有离线几何检查结果。 |

上述历史浮雕的依据：`server/CRAFTS.md`、`artifacts/craft-contour-saved/viewer-report.json` 和 `report.json`。历史记录尺寸 70×61.25 mm、总厚 5.5 mm，133,632 个三角面，封闭、连通、平背和贯穿挂孔等检查通过。这些参数仅适用于旧模型，不能套用于当前十二件独立文创。模型预览不等于实体打样完成，水彩/水墨平面图本身也不等于可制造网格。

## 南京实景

来自 APK 已记录授权的 Wikimedia Commons 图片，转为 WebP；未添加或移除画面内容。页面若裁切应标注“裁切展示”。下列署名与许可证需保留在网站素材来源入口中。可供城市叙事、取景互动演示，不应称为本项目活动记录或由影石相机拍摄。

| 成品 | 作者 / 许可 | 原始来源 |
| --- | --- | --- |
| `media/nanjing-xuanwu.webp` | A Chinese user / [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Xuanwu Lake at dawn.jpg](https://commons.wikimedia.org/wiki/File:Xuanwu_Lake_at_dawn.jpg)，APK `places/xuanwu.jpg`。日暮湖面天际线，适合横向 16:9，推荐焦点 `50% 55%`。 |
| `media/nanjing-laomendong.webp` | 钉钉 / [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Laomendong, Nanjing.jpg](https://commons.wikimedia.org/wiki/File:Laomendong,_Nanjing.jpg)，APK `places/laomendong.jpg`。林荫街区，适合 4:3 或 16:10，焦点 `50% 50%`。 |
| `media/nanjing-fuzimiao.webp` | Kenneth Lu from Sunnyvale, CA / [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Nanjing FuziMiao DaZhaobi3.jpg](https://commons.wikimedia.org/wiki/File:Nanjing_FuziMiao_DaZhaobi3.jpg)，APK `places/fuzimiao.jpg`。夜间灯影与游船，适合 16:9。 |

机器可读原始署名见 `media/place-credits.json`。原始完整记录为 `app/src/main/assets/places/credits.json`。以上普通照片可用于横向取景交互概念演示，但不是 360° 全景素材。

## 技术支持、合作与指导单位标志

单位归属和展示顺序依据用户本次明确提供的信息。商标、校徽及机构标志版权属于各自权利人；使用官方来源标志识别机构，不另造近似标志。

| 成品 | 官方出处 | 处理与展示建议 |
| --- | --- | --- |
| `media/partners/insta360.svg` | [影石官网](https://www.insta360.com/cn/)；见上文原图地址 | 白色字标，深底。技术支持第一位。 |
| `media/partners/baidu-map.png` | [百度地图开放平台官网](https://lbsyun.baidu.com/)；https://mapopen-website-wiki.cdn.bcebos.com/statics%2Flogo%2Fweblogo.png | 原样下载，230×76；黑色“百度地图开放平台”组合标志，浅底。 |
| `media/partners/aliyun.svg` | [阿里云官网](https://www.aliyun.com/) 首页 `data-spm="d_logo"` 链接中的原生 SVG | 按官网 SVG 原样提取；浅底。 |
| `media/partners/qoder.png` | [Qoder 官网](https://qoder.com/)；https://img.alicdn.com/imgextra/i2/O1CN01ujLij0k3MQH2V5OS_!!6000000000850-2-tps-1232-344.png | 原样下载，1232×344；浅底。用户已确认名称为 Qoder。 |
| `media/partners/njfu-emblem.png` | [南京林业大学官网](https://www.njfu.edu.cn/)；https://www.njfu.edu.cn/DFS//template/2829//images/t_logo.png | 从官网组合标志裁出左侧校徽，保留原色；81×81。按用户要求用于“南京林业大学心理健康协会”旁。完整下载原图为 `njfu.png`，白色校名需深底。 |
| `media/partners/poster-rocket.png`、`poster-tree.png`、`poster-rebuild-z.png` | 用户提供的 2026 Bold Maker 项目海报截图 `codex-clipboard-ec78b18b-d1da-429b-abb8-032de80ded09.png` | 按海报合作单位第二、三、四位裁切标志，保留原图外观和顺序。第二、三枚标志的正式名称在附件分辨率下无法可靠辨认，因此页面仅显示标志；第四枚为 Rebuild-Z。此图用于复现用户指定的海报排布，不作为机构身份独立核验材料。 |
| `media/partners/ckgsb-mark.png` | [长江商学院官网](https://www.ckgsb.edu.cn/)；https://www.ckgsb.edu.cn/public/ckgsb/html5/img/logo.png?v=1.13 | 从官网完整页眉图裁出主学院标志，去除右侧阶段性“长江焕新季”标语；未改字形。是主学院标志，不宣称为公益部专用徽标。完整原图为 `ckgsb.png`。 |
| `media/partners/cappd-emblem.png` | [中国肢残人协会官网](http://www.cappd.org.cn/)；http://www.cappd.org.cn/templates/capdp/images/topBG.jpg | 官网地址亦由 [中国残联官网](https://www.cdpf.org.cn/) 的“专门协会网站”链接核实。由页眉左侧原始标志裁切并去除周围蓝色背景，69×71；保留官方绿黄颜色，不重绘。原始完整页眉为 `cappd-header-original.jpg`，未去背景的组合字标为 `cappd-lockup.jpg`。 |

**尚未取得可核实的专用标志：**中国助残志愿者协会、北京市房山区残疾人服务中心。使用用户提供的正式全称文字排版，不以中华志愿者协会、中国残联、北京市残疾人服务示范中心等其他机构的徽标替代。用户提案 DOCX 未内嵌图片可供提取。没有向第三方发送信息或请求授权。

补充视觉核对：中国残联官网[授牌报道](https://www.cdpf.org.cn/xwzx/dfdt1/f9cc29c09c1644919dd20e647ebbe468.htm)的[照片](https://www.cdpf.org.cn/images/2025-03/090e73b68a024436866073369051f375.jpg)中，牌匾下方可辨“中国助残志愿者协会”；顶部线条标识仅约 28×28 像素，受金色底纹和透视影响，并且无法单由此图确认它是协会会徽还是“阳光助残志愿服务基地”标识。因此未裁切、描摹或放大为正式徽标。查找记录见仓库 `artifacts/content-logo-research/REPORT.md`。

## 素材范围

人物内容使用用户提供并要求展示的三张真实照片、实际 APK 截图，以及清楚分层的生成文创。图片不附加虚构人物身份或项目参与经历。南京原图保留摄影作者与许可；不冒称影石拍摄、公益活动现场或景区官方联名。公开资料只包含来源、作品与验证说明。
