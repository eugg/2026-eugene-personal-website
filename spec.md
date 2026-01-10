▍ Project Specification: Eugene Wang Personal Brand Site (Bento 2.0) - Updated
1. 核心設計語彙 (Design Language)
風格名稱： Spatial Bento 2.0 (空間感便當盒 2.0)

色調 (Palette)：

背景：#0A0A0A (深空黑)

卡片：rgba(255, 255, 255, 0.03) (極低透明度)

強調色：依據 Substack 品牌色或電路感螢光藍。

質感要求：

毛玻璃 (Glassmorphism)： backdrop-filter: blur(20px)。

發光邊框： border: 1px solid rgba(255, 255, 255, 0.1)，Hover 時亮度增加。

影像處理： 所有照片需帶有輕微的深色遮罩 (Overlay)，確保上方文字的閱讀性，並在 Hover 時恢復亮度。

2. 影像資產規格 (Media Assets & Placeholders)
為了確保開發階段的視覺協調，請使用以下規格的佔位圖：

A. 形象照片 (Hero Profile)
位置： Slot A (2x2 大格)

比例： 1:1 (正方形)

視覺風格： 深色背景、高對比度、帶有細微的 3D 景深感。

佔位符代碼範例： images/placeholder-hero.png

B. 演講照片 - 全景 (Talk Photo - Stage View)
位置： Slot D (創業經歷輪播) 或 Slot G (演講專區)

比例： 16:9 (寬螢幕)

視覺描述： 模擬演講廳舞台感，大螢幕投影效果。

佔位符代碼範例： images/placeholder-talk-stage.png

C. 演講照片 - 特寫 (Talk Photo - Action Shot)
位置： Slot G (演講專區)

比例： 16:9 (寬螢幕)

視覺描述： 近距離拍攝講者動態，帶有動感模糊或抽象聲波效果。

佔位符代碼範例： images/placeholder-talk-action.png

3. 佈局架構 (Grid Layout)
Desktop (4-column grid)
Slot A (2x2): 形象區 (Hero Card)

內容： 形象照片 (1:1) + 動能文字「積極的迷惘人」。

效果： 照片在滑鼠移入時緩慢縮放 (Zoom-in)，文字隨捲動改變粗細。

Slot B (1x1): 動態計數器 - 顯示「演講數百場」。

Slot C (1x1): 社群節點 - 帶有懸浮感的 Logo 圖標。

Slot D (2x1): 創業經歷卡片

內容： 演講照片 (全景) 做為背景 + 經歷文字。

Slot E (1x1): 身分卡 - 台大 EiMBA 業師。

Slot F (1x2): 電子報卡片 - 整合 Substack RSS 標題。

4. 技術組件行為 (Interactive Components)
A. 影像 Hover 效果 (Tactile Image Effect)
所有帶有圖片的卡片在 hover 時，圖片應產生 scale(1.05) 的變化。

卡片內部的文字與圖片需具有不同的移動速度（視覺差 Parallax）。

B. 空間感傾斜 (3.D Tilt)
使用 framer-motion 或 vanilla-tilt 為所有 .bento-card 加入 3D 傾斜效果。

當滑鼠靠近圖片卡片時，卡片會向滑鼠方向微微傾斜。

C. 動能排版 (Kinetic Typography)
標題文字應連結到 window.scrollY。

捲動時，文字寬度 (font-stretch) 或粗細 (font-weight) 會產生連續性的變化。

5. Antigravity 執行指令 (Prompt)
"請根據更新後的 spec.md 實作網站。特別注意影像佔位符的比例與位置。所有的影像卡片需具備深色毛玻璃質感，且在 Hover 時能展現出圖片的細節。英雄區請確保形象照片與『積極的迷惘人』文字動畫能完美融合。"

💡 開發備註
圖片路徑請預設為 /assets/images/。

如果真實照片尚未到位，請先用 SVG 或 Canvas 繪製帶有「Eugene Wang」字樣的深色漸層圖。
