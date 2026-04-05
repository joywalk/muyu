# 木鱼音效获取指南

## 音效要求

### 技术规格
- **格式**：MP3（推荐）或 M4A
- **时长**：0.3-0.5秒
- **采样率**：44.1kHz 或 48kHz
- **比特率**：128kbps 或更高
- **文件大小**：< 100KB（加载更快）

### 音效特征
- 声音短促、清脆
- 类似"咚"的敲击声
- 无明显回声
- 音量适中（不会太刺耳）
- 适合快速连点播放

## 免费音效资源网站

### 1. Freesound.org（推荐）
- 网址：https://freesound.org/
- 特点：社区驱动的音效库，质量高
- 搜索关键词：
  - "wooden fish"
  - "temple block"
  - "percussion hit"
  - "drum hit"
  - "clack"
  - "knock"

使用方法：
1. 注册账号（免费）
2. 搜索音效
3. 试听预览
4. 下载（注意查看许可协议）

### 2. Zapsplat.com
- 网址：https://www.zapsplat.com/
- 特点：免费音效库，需要注册
- 分类：Percussion → Drums → Hits

### 3. Mixkit.co
- 网址：https://mixkit.co/free-sound-effects/
- 特点：免费商用，无需注册
- 分类：Music & Audio → Sound Effects

### 4. Pixabay Audio
- 网址：https://pixabay.com/music/sound-effects/
- 特点：免费，商用许可
- 搜索：percussion, drum, hit

### 5. Adobe Stock Audio（免费区）
- 网址：https://stock.adobe.com/free/audio
- 特点：高质量，部分免费
- 搜索：wooden, percussion

## 下载与使用步骤

### 推荐流程

#### 步骤 1：搜索音效
在 Freesound.org 搜索以下关键词：
1. "wooden fish hit" - 最直接
2. "temple block" - 类似木鱼
3. "percussion short" - 短促打击乐
4. "drum hit" - 鼓点击音

#### 步骤 2：筛选质量
- 试听预览，选择最接近真实木鱼的声音
- 确保时长在 0.3-0.5秒之间
- 检查文件大小（< 100KB）

#### 步骤 3：下载
1. 点击下载按钮
2. 选择 MP3 格式
3. 重命名为 `fish-sound.mp3`
4. 放入 `/home/project/muyu/audio/` 目录

#### 步频 4：测试
```bash
# 播放测试
ffplay fish-sound.mp3  # 如果安装了 ffmpeg

# 或者用其他播放器打开
```

## 替代方案

### 方案 A：使用类似音效
如果没有找到木鱼音效，可以使用以下替代：

1. **短促鼓点击音**
   - 搜索：snare hit
   - 特点：短促清脆

2. **木块敲击**
   - 搜索：wood block
   - 特点：类似木鱼的声音

3. **手指敲击**
   - 搜索：finger snap
   - 特点：短促干净

4. **合成音效**
   - 使用音频编辑软件合成简单的"咚"声

### 方案 B：自制音效
使用 Audacity（免费）：

1. **下载 Audacity**：https://www.audacityteam.org/

2. **录制真实木鱼**：
   - 用手机录音
   - 导入 Audacity
   - 剪辑到 0.3-0.5秒
   - 去除背景噪音
   - 导出为 MP3

3. **合成简单音效**：
   - 使用正弦波合成器
   - 频率：150-300Hz
   - 添加快速衰减包络
   - 添加轻微噪音

### 方案 C：占位音效（测试用）

如果暂时无法获取音效，可以使用以下占位方案：

#### 方案 C1：使用系统提示音
```javascript
// pages/index/index.js
playSound() {
  // 使用系统音效作为占位
  wx.playBackgroundAudio({
    title: 'test',
    src: '/audio/fish-sound.mp3'
  });
}
```

#### 方案 C2：使用 Web Audio API（高级）
```javascript
// 合成简单的"咚"声
playSound() {
  const audioContext = wx.createInnerAudioContext();

  // 这里需要合成音频数据
  // 比较复杂，暂不展开
}
```

#### 方案 C3：临时禁用音效
```javascript
// 在设置中默认关闭音效
const defaultSettings = {
  soundEnabled: false,  // 暂时关闭
  vibrationEnabled: true,
  increment: 1,
  showAnimation: true
};
```

## 音效优化建议

### 剪辑与处理

如果下载的音效不够理想，可以进行优化：

1. **缩短时长**
   ```bash
   # 使用 ffmpeg 剪裁前 0.5秒
   ffmpeg -i input.mp3 -t 0.5 -c copy output.mp3
   ```

2. **调整音量**
   ```bash
   # 降低音量到 80%
   ffmpeg -i input.mp3 -filter:a "volume=0.8" output.mp3
   ```

3. **压缩文件**
   ```bash
   # 降低比特率到 128kbps
   ffmpeg -i input.mp3 -b:a 128k output.mp3
   ```

4. **去除静音**
   ```bash
   # 去除开头和结尾的静音
   ffmpeg -i input.mp3 -af "silenceremove=1:0:-50dB" output.mp3
   ```

### 使用 Audacity 处理

1. **修剪**：删除不需要的部分
2. **淡入淡出**：添加短促的淡入淡出（5-10ms）
3. **降噪**：去除背景噪音
4. **音量标准化**：调整到 -3dB

## 许可协议说明

### 常见许可类型

1. **CC0 (Creative Commons Zero)**
   - 完全免费，无限制
   - 可以商用
   - 无需署名

2. **CC BY (Attribution)**
   - 可以商用
   - 需要署名作者

3. **CC BY-ND (No Derivatives)**
   - 可以商用
   - 需要署名
   - 不能修改音效

4. **CC BY-NC (Non-Commercial)**
   - 不能商用
   - 需要署名
   - 可以修改

**建议**：优先选择 CC0 或 CC BY 许可的音效

## 快速测试方案

### 方案 1：使用现有音效占位
```bash
# 创建一个空的占位文件
touch /home/project/muyu/audio/fish-sound.mp3
```

### 方案 2：修改代码临时禁用
在 `pages/index/index.js` 中：
```javascript
playSound() {
  if (!this.data.settings.soundEnabled) {
    return;  // 临时禁用音效
  }
  // 正常播放逻辑...
}
```

## 推荐音效清单

### Freesound 搜索结果（示例）

1. "Wooden Fish Hit" - 长度 0.4s，大小 12KB
2. "Temple Block Hit" - 长度 0.3s，大小 8KB
3. "Percussion Short Hit" - 长度 0.5s，大小 15KB
4. "Wood Block Knock" - 长度 0.35s，大小 10KB

**注意**：以上仅为示例，请自行搜索下载

## 注意事项

1. **版权问题**：确保音效有商业使用许可
2. **文件大小**：MP3 文件尽量控制在 100KB 以内
3. **音量平衡**：不要太大声，避免刺耳
4. **音质清晰**：避免有杂音或回声
5. **加载速度**：文件越小，加载越快

## 总结

### 最快方案（推荐）
1. 访问 Freesound.org
2. 搜索 "wooden fish hit"
3. 下载最合适的音效
4. 重命名为 `fish-sound.mp3`
5. 放入 `/home/project/muyu/audio/` 目录

### 临时方案（测试用）
1. 暂时使用任何短音频占位
2. 测试代码逻辑
3. 后续替换为正式音效

### 最佳方案
1. 自行录制真实木鱼声音
2. 使用 Audacity 剪辑优化
3. 获得最佳效果

---

**建议**：优先使用 Freesound 等免费资源，确保有商用许可。
