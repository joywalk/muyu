# 木鱼图片使用说明

## 已创建的文件

### 1. fish.svg（推荐使用）
简约禅意风格的木鱼图标，包含渐变效果和细节。

### 2. fish-simple.svg（备选）
更简化的版本，适合需要更小文件大小的场景。

## 转换为 PNG 的方法

### 方法 1：在线转换（最简单）
1. 访问以下任意网站：
   - https://convertio.co/zh/svg-png/
   - https://cloudconvert.com/svg-to-png
   - https://svgtopng.com/

2. 上传 `fish.svg` 或 `fish-simple.svg`

3. 下载转换后的 PNG 文件

4. 重命名为 `fish.png`

5. 放入 `/home/project/muyu/images/` 目录

### 方法 2：命令行转换（Linux/Mac）
```bash
# 安装 ImageMagick（如果没有）
sudo apt-get install imagemagick  # Ubuntu/Debian
brew install imagemagick          # macOS

# 转换 SVG 到 PNG
convert /home/project/muyu/images/fish.svg /home/project/muyu/images/fish.png

# 指定尺寸
convert -resize 200x200 /home/project/muyu/images/fish.svg /home/project/muyu/images/fish.png
```

### 方法 3：浏览器截图
1. 用浏览器打开 `fish.svg` 文件
2. 使用截图工具截图
3. 保存为 PNG 格式
4. 调整大小为 200x200px
5. 重命名为 `fish.png`

## 临时占位方案（测试用）

如果暂时无法转换 SVG，可以使用以下临时方案：

### 方案 A：使用 Emoji
修改 `pages/index/index.wxml`：
```xml
<!-- 将图片替换为 Emoji -->
<text class="fish-emoji">🐟</text>
```

修改 `pages/index/index.wxss`：
```css
.fish-emoji {
  font-size: 120rpx;
}
```

### 方案 B：使用纯 CSS 绘制
```css
.fish-css {
  width: 160rpx;
  height: 160rpx;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
}
```

## 推荐尺寸

- **尺寸**：200x200px
- **格式**：PNG（支持透明背景）
- **文件大小**：< 50KB（加载更快）

## 设计风格建议

如果你想自己设计木鱼图标：

### 必备元素
- 木鱼主体（圆形/椭圆形）
- 木棒（敲击工具）
- 中间开口（木鱼特征）

### 风格选择
1. **简约风格**：线条简单，白色背景
2. **禅意风格**：淡雅配色，留白充足
3. **现代风格**：渐变效果，简洁图标

### 配色建议
- 木鱼主体：白色/浅灰色
- 木棒：棕色/金色渐变
- 背景：透明（便于适配）

## 在线资源

### 免费图标网站
- Iconfont（阿里图标库）：https://www.iconfont.cn/
- Iconify：https://iconify.design/
- Flaticon：https://www.flaticon.com/

搜索关键词：
- "wooden fish"
- "temple"
- "zen"
- "meditation"

## 注意事项

1. **版权问题**：确保使用的图标有商业使用许可
2. **文件大小**：PNG 文件尽量控制在 50KB 以内
3. **清晰度**：至少 2x 分辨率（400x400px），然后缩小到 200x200px
4. **背景透明**：使用 PNG 格式，支持透明背景

## 快速测试

如果你只是想快速测试代码，可以先使用以下占位符：

```bash
# 创建一个简单的白色占位图
convert -size 200x200 xc:white /home/project/muyu/images/fish.png
```

或者直接在代码中临时注释掉图片：
```xml
<!-- <image class="fish-image" src="/images/fish.png" mode="aspectFit"></image> -->
```

---

**建议**：优先使用已创建的 SVG 文件转换，保证最佳质量。
