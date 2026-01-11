# Eugene Wang Personal Website

**🌐 [eugene.tw](https://eugene.tw)**

> 王佑哲個人品牌網站 - 採用 Spatial Bento 2.0 設計系統

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://eugene.tw)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 關於本專案

這是王佑哲（Eugene Wang）的個人品牌網站，展示創業經歷、演講分享與專業成就。網站採用現代化的 Bento Grid 佈局設計，結合報紙美學與空間感交互效果，打造獨特的視覺體驗。

### 主要特色

- **🎨 Spatial Bento 2.0 設計系統**：採用 Bento Grid 佈局，融合報紙質感與現代設計
- **✨ 精緻互動效果**：3D 傾斜效果、磁吸按鈕、隨機淡入動畫
- **📱 完全響應式設計**：支援桌面、平板、手機等各種裝置
- **🚀 純靜態網站**：無需後端，易於部署與維護
- **♿ SEO 優化**：完整的 meta tags、Open Graph 與 Twitter Card 支援
- **🎯 無框架依賴**：使用原生 JavaScript，僅引入必要的第三方函式庫

## 技術架構

### 核心技術

- **HTML5**：語意化標籤，提升可訪問性
- **CSS3**：
  - CSS Grid 佈局系統
  - CSS Variables 主題系統
  - Backdrop Filter 毛玻璃效果
  - Custom Animations
- **JavaScript (ES6+)**：
  - 隨機淡入動畫
  - 磁吸式按鈕效果
  - Modal 互動系統
  - Scroll 視差效果

### 第三方函式庫

- [Vanilla Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) - 3D 傾斜效果
- [Font Awesome](https://fontawesome.com/) - 圖標系統
- [Google Fonts](https://fonts.google.com/) - 字型支援
  - Inter - 英文無襯線字體
  - Noto Sans TC - 中文無襯線字體
  - Noto Serif TC - 中文襯線字體
  - Playfair Display - 英文襯線字體

## 專案結構

```
eugene.tw/
├── index.html              # 主頁面
├── css/
│   └── style.css          # 樣式表
├── js/
│   └── script.js          # 互動腳本
├── assets/
│   ├── images/            # 圖片資源
│   │   ├── avatar.jpg
│   │   ├── tedxtalk.png
│   │   └── ...
│   ├── favicon/           # Favicon 相關檔案
│   └── hand-wave.png      # 手掌 emoji favicon
├── spec.md                # 設計規格文件
├── .gitignore
└── README.md
```

## 設計系統

### 色彩配置

網站採用「報紙美學」色彩系統：

- **背景色**：`#F5F2EB` - 溫暖的米白紙張色
- **次要背景**：`#EAE6DC` - 稍深的奶油色
- **卡片背景**：`rgba(255, 255, 255, 0.7)` - 半透明白色
- **主要文字**：`#1A1A1A` - 接近黑色
- **強調色**：`#C41E3A` - 經典編輯紅
- **次要強調**：`#8B4513` - 復古棕色
- **Substack 品牌色**：`#FF6719`

### 佈局系統

採用 4 欄 Grid 系統（桌面版）：

| 區塊 | 尺寸 | 內容 |
|------|------|------|
| Hero Card | 2×2 | 形象照片 + 姓名 |
| Social Card | 1×1 | Facebook 連結 |
| Identity Card | 1×1 | 創業輔導業師 |
| Newsletter Card | 2×1 | Substack 電子報 |
| About Card | 2×1 | 個人簡介 |
| TEDx Card | 2×1 | TEDx 演講 |
| Trait Cards | 3×1 | 特質展示（3 張） |
| Venture Cards | 3×1 | 創業經歷（3 張） |

### 互動效果

1. **3D 傾斜效果**
   - 使用 Vanilla Tilt.js
   - 最大傾斜角度：3 度
   - 光澤效果：0.1-0.2

2. **磁吸式按鈕**
   - 僅在桌面版啟用
   - 跟隨滑鼠移動
   - 最大偏移：15px

3. **隨機淡入動畫**
   - 卡片隨機順序淡入
   - 每張卡片間隔：30ms
   - 動畫時長：300ms
   - 從下方 60px 淡入

4. **Scroll 視差效果**
   - Hero 標題跟隨捲動
   - 移動速度：0.15x

## 本地開發

### 環境需求

- 現代瀏覽器（支援 ES6+、CSS Grid、Backdrop Filter）
- 本地伺服器（可選，但建議使用以避免 CORS 問題）

### 快速開始

1. **Clone 專案**

```bash
git clone https://github.com/eugg/2026-personal-website.git
cd 2026-personal-website
```

2. **啟動本地伺服器**

使用 Python 3：
```bash
python -m http.server 8000
```

或使用 Node.js：
```bash
npx serve
```

或使用 VS Code Live Server 擴充功能

3. **開啟瀏覽器**

訪問 `http://localhost:8000`

### 開發建議

- 建議使用本地伺服器預覽，避免 `file://` 協議的限制
- 修改 CSS 變數（`:root`）即可快速調整主題
- 圖片建議使用 WebP 格式以獲得更好的壓縮比
- 測試時請檢查各種螢幕尺寸的響應式表現

## 部署

### 支援的平台

本專案為純靜態網站，可部署至任何靜態網站託管服務：

- ✅ GitHub Pages
- ✅ Netlify
- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ AWS S3 + CloudFront
- ✅ 任何支援靜態網站的主機

### GitHub Pages 部署

1. 在 GitHub 專案設定中啟用 Pages
2. 選擇分支（通常為 `main` 或 `master`）
3. 選擇根目錄 `/` 作為來源
4. 儲存設定，等待部署完成

### Netlify 一鍵部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugg/2026-personal-website)

### 自訂網域

修改 `index.html` 中的以下項目：

```html
<link rel="canonical" href="https://your-domain.com/">
<meta property="og:url" content="https://your-domain.com/">
<meta name="twitter:url" content="https://your-domain.com/">
```

## 自訂與修改

### 更換個人資訊

1. **修改文字內容**：編輯 `index.html` 中的對應區塊
2. **更換照片**：替換 `assets/images/` 中的圖片檔案
3. **調整色彩**：修改 `css/style.css` 中的 CSS 變數
4. **修改社群連結**：更新 `index.html` 中的連結

### 主題客製化

在 `css/style.css` 的 `:root` 區塊修改變數：

```css
:root {
    --bg-color: #F5F2EB;           /* 背景色 */
    --accent-color: #C41E3A;       /* 強調色 */
    --font-main: 'Noto Sans TC';   /* 主要字體 */
    /* ... 更多變數 */
}
```

### 新增 Modal

參考現有 Modal 的 HTML 結構，並在 `js/script.js` 中加入對應的事件監聽器。

## 瀏覽器支援

| Browser | Version |
|---------|---------|
| Chrome | ≥ 88 |
| Firefox | ≥ 87 |
| Safari | ≥ 14 |
| Edge | ≥ 88 |

需要支援的特性：
- CSS Grid
- CSS Variables
- Backdrop Filter
- ES6+ JavaScript

## 效能優化

- ✅ 圖片已壓縮優化
- ✅ 使用 CDN 載入第三方函式庫
- ✅ CSS 與 JS 已最小化（生產環境建議）
- ✅ 字體使用 `font-display: swap`
- ✅ 使用 `preconnect` 預先連接字體服務

### 建議的進一步優化

- 將圖片轉換為 WebP 格式
- 實作 lazy loading
- 加入 Service Worker 支援離線訪問
- 使用 Lighthouse 進行效能審查

## 授權條款

本專案採用 MIT License 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 作者

**王佑哲 Eugene Wang**

- 網站：[eugene.tw](https://eugene.tw)
- Facebook：[@euwang](https://www.facebook.com/euwang)
- Substack：[積極的迷惘人](https://euwang.substack.com)
- TEDx Talk：[沒有方向？先從當個積極的迷惘人開始！](https://www.youtube.com/watch?v=4FJEbzPhqq8)

## 致謝

- 設計靈感來自現代 Bento Grid 佈局趨勢
- 感謝 [Vanilla Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) 提供優秀的 3D 效果函式庫
- 感謝 Google Fonts 與 Font Awesome 提供免費資源

## 貢獻

歡迎提交 Issue 或 Pull Request！

如果你發現任何問題或有改進建議，請：

1. Fork 本專案
2. 建立你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

---

**如果這個專案對你有幫助，請給個 ⭐ Star！**
