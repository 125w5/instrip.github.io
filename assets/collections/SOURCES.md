# 一起游 · 旅行藏品资源

当前文创系列为 **12 件独立三维文创：6 件冰箱贴、6 件钥匙扣**。每件拥有对应真实原图、设计或 AI 模型示意图、独立 GLB、下载资源及几何验证，避免所有档案共用一件示例模型。

## 志愿同行与南京文创

`volunteer-nanjing/` 包含 4 个志愿同行主题与 8 个南京风景主题。十二件均由独立完成的 Lux3D `G1-Turbo` 云任务生成并下载原始网格，任务请求 100000 面、GLB 与 PBR。项目 `server/craft/geometry.py` 根据真实网格深度加工为浮雕，完成封闭背面或贯穿挂孔，并在本地加入与成品形态相符的钥匙环或磁贴。

| 作品 ID | 主题 | 成品形态 |
| --- | --- | --- |
| `company-photo` | 把笑容留下 | 冰箱贴 |
| `phone-help` | 把世界连接 | 钥匙扣 |
| `warm-company` | 陪伴的温度 | 冰箱贴 |
| `xuanwu-walk` | 玄武湖慢行 | 钥匙扣 |
| `qinhuai-lights` | 秦淮灯影 | 冰箱贴 |
| `laomendong-street` | 老门东巷遇 | 钥匙扣 |
| `zhongshan-green` | 钟山绿意 | 冰箱贴 |
| `nanjing-museum` | 博物院一日 | 钥匙扣 |
| `volunteer-lake` | 湖畔有你 | 钥匙扣 |
| `mingxiaoling` | 明孝陵石象 | 冰箱贴 |
| `jiming-temple` | 鸡鸣寺望城 | 钥匙扣 |
| `nanda-gulou` | 南大林荫 | 冰箱贴 |

`*-original.webp` 为真实生成参考的照片或照片拼板，`*-front.png` 为对应设计／模型示意图，`.webp` 为藏品预览，`.glb` 为当前独立成品。每件磁贴与钥匙扣结构分别处理，实际尺寸、三角面、闭合检查与文件校验以最终 [model-verification.json](./volunteer-nanjing/model-verification.json) 为准。

明孝陵平面 AI 图任务保持 `SUBMISSION_UNKNOWN` 且未重投；其 `mingxiaoling-front.png` 是成功 Lux3D 任务 **3718834** 的实际正面渲染，类型单独记为 `rendered-from-AI-model`，并记录当前图片 SHA-256。原图仍是明孝陵石象实景摄影。

三张用户志愿陪伴照片按后续明确授权展示，保留完整画面与水印。`volunteer-lake` 使用真实生成输入的玄武湖实景参考，陪伴人物为 AI 创作。不存在以 AI 图补做原图的回退路径；原图无法加载时保持该层为空。人物和景物不被标注为本项目或影石设备拍摄的活动记录。

- [十二件制作与任务来源](./volunteer-nanjing/SOURCES.md)
- [十二件生成与当前文件校验](./volunteer-nanjing/generation-manifest.json)
- [真实 Lux 任务编号与参数](./volunteer-nanjing/lux-task-sources.json)
- [原图作者、许可与对应关系](./volunteer-nanjing/ORIGINAL-PHOTOS.md)
- [原图机器清单](./volunteer-nanjing/original-photo-sources.json)

## 保留的南京摄影资源

`nanjing-photos/` 保留 16 张开放许可南京照片，覆盖 8 个地点。它们是独立摄影素材，不计入本轮十二件三维文创。源图复用 Android 项目地点素材；`originals/*.jpg` 保留项目已有 JPEG 分辨率，网页副本转为 WebP。

作者、原作品页、许可、修改说明和校验值见 [photo-manifest.json](./nanjing-photos/photo-manifest.json) 与 [摄影来源页](./nanjing-photos/SOURCES.html)。这些摄影资料保留原许可，不推定为团队活动记录或影石拍摄。

## 品牌与三层展示

`brand-logo.png` 是项目提供的根目录 `logo.png` 原样副本；既有 `xuanwu.jpg`、`fuzimiao.jpg` 署名保留在 `photo-credits.json`。

默认前后两层为清透玻璃，图片隐藏，中间显示完整的真实文创。拆开时前层原图、后层设计／AI 模型示意图渐显，合拢时渐隐；中间成品保持完整，可旋转、缩放、查看正背面及下载。展示为生成设计与真实网格预览；实体制作仍须工艺验证与打样。

旧亭台、水彩和水墨资源仅保留为历史开发资料，不作为当前十二件作品的统一模型或默认原图。
