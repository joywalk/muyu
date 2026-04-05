# 电子木鱼 - 快速启动指南

## 🚀 5分钟快速启动

### 步骤 1：准备木鱼图片（1分钟）

#### 推荐方式：使用在线转换工具
1. 打开浏览器，访问：https://svgtopng.com/
2. 上传 `/home/project/muyu/images/fish.svg` 文件
3. 点击"Convert"转换
4. 下载生成的 PNG 文件
5. 重命名为 `fish.png`
6. 移动到 `/home/project/muyu/images/` 目录

#### 快速方案：使用占位符（测试用）
```bash
# 如果暂时无法转换，可以先使用一个简单的白色方块
# 修改 pages/index/index.wxml 中的图片标签为：
<view class="fish-placeholder">🐟</view>
```

并在 `pages/index/index.wxss` 中添加：
```css
.fish-placeholder {
  font-size: 120rpx;
  width: 160rpx;
  height: 160rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### 步骤 2：准备木鱼音效（2分钟）

#### 推荐方式：下载免费音效
1. 访问 Freesound.org：https://freesound.org/
2. 搜索 "wooden fish hit" 或 "temple block"
3. 试听几个音效，选择最合适的
4. 下载 MP3 格式
5. 重命名为 `fish-sound.mp3`
6. 移动到 `/home/project/muyu/audio/` 目录

#### 其他免费音效网站
- Mixkit：https://mixkit.co/free-sound-effects/
- Pixabay：https://pixabay.com/music/sound-effects/

#### 快速方案：使用占位符（测试用）
```bash
# 1. 创建临时音频文件
touch /home/project/muyu/audio/fish-sound.mp3

# 2. 临时禁用音效
# 修改 pages/index/index.js 中的 defaultSettings：
const defaultSettings = {
  soundEnabled: false,  // 临时关闭音效
  vibrationEnabled: true,
  increment: 1,
  showAnimation: true
};
```

---

### 步骤 3：导入微信开发者工具（1分钟）

1. 打开微信开发者工具
2. 点击"导入项目"
3. 选择目录：`/home/project/muyu`
4. 填写 AppID（使用测试号或正式号）
5. 项目名称：电子木鱼
6. 点击"导入"

---

### 步骤 4：运行测试（1分钟）

1. 点击"编译"按钮
2. 在模拟器中查看效果
3. 点击木鱼测试音效和动画
4. 测试快速连点是否流畅
5. 检查设置页面功能

---

## ✅ 验收清单

### 基础功能
- [ ] 点击木鱼能播放音效
- [ ] 木鱼有缩放动画反馈
- [ ] 显示 "+1" 浮动动画
- [ ] 功德数值正确递增
- [ ] 手机震动（如果开启）

### 性能测试
- [ ] 快速连点不卡顿
- [ ] 音效播放流畅
- [ ] 动画显示正常
- [ ] 响应延迟 < 100ms

### 设置功能
- [ ] 音效开关正常
- [ ] 震动开关正常
- [ ] 增量设置正常（+1/+2/+3/+5/+10）
- [ ] 动画开关正常
- [ ] 功德清零功能正常（二次确认）

### 数据持久化
- [ ] 刷新页面后功德值保持
- [ ] 关闭小程序后重新打开功德值保持
- [ ] 设置更改后保存成功

---

## 🎨 自定义样式

### 更改木鱼图标
将新的 PNG 图片命名为 `fish.png`，放入 `images/` 目录。

### 更改配色
修改 `pages/index/index.wxss`：
```css
/* 木鱼背景渐变 */
.fish-box {
  background: linear-gradient(135deg, #你的主色 0%, #你的辅色 100%);
}

/* 功德数值颜色 */
.count-number {
  color: #你的颜色;
}

/* +1 动画颜色 */
.plus-text {
  color: #你的颜色;
}
```

### 更改音效
将新的 MP3 文件命名为 `fish-sound.mp3`，放入 `audio/` 目录。

---

## 📱 真机测试

### iOS 设备
1. 在微信开发者工具中点击"真机调试"
2. 使用微信扫描二维码
3. 在手机上打开小程序
4. 测试所有功能

### Android 设备
1. 同上步骤
2. 特别测试音效播放（Android 音频策略不同）

---

## 🐛 常见问题

### Q1: 图片不显示
**A**: 检查图片路径是否正确：
- 确保文件名是 `fish.png`
- 确保在 `images/` 目录下
- 确保文件格式是 PNG

### Q2: 音效不播放
**A**: 检查以下几点：
- 确保音效开关已开启
- 确保手机未静音
- iOS 需要用户交互后才能播放音频
- 检查音效文件是否损坏

### Q3: 快速连点音效卡顿
**A**:
- 代码已使用音频池优化
- 如果仍有问题，增加音频池大小（修改 `poolSize`）
- 检查音效文件大小（建议 < 100KB）

### Q4: 震动不工作
**A**:
- 确保震动开关已开启
- 某些 Android 设备可能不支持震动
- 检查系统设置中的震动权限

### Q5: 功德值丢失
**A**:
- 微信小程序存储空间有限（10MB）
- 用户清除缓存会丢失数据
- 后续可考虑使用云存储

---

## 📤 发布到小程序平台

### 步骤

1. **提交审核**
   - 在微信开发者工具中点击"上传"
   - 填写版本号和备注
   - 等待上传完成

2. **提交审核**
   - 登录微信公众平台：https://mp.weixin.qq.com/
   - 进入"版本管理"
   - 点击"提交审核"
   - 填写审核信息

3. **等待审核**
   - 审核时间通常 1-7 个工作日
   - 可以在微信公众平台查看进度

4. **发布上线**
   - 审核通过后点击"发布"
   - 小程序正式上线

### 注意事项

- 确保所有资源文件都有版权许可
- 确保没有违反微信平台规则
- 提供完整的小程序信息（简介、截图等）

---

## 🔄 更新日志

### v1.0.0（当前版本）
- ✅ 核心敲击功能
- ✅ 音频实例池优化
- ✅ 功德数据持久化
- ✅ 设置页面
- ✅ 响应式设计

---

## 📞 技术支持

如有问题，请检查：
1. 项目文档：`README.md`
2. 图片指南：`images/PLACEHOLDER_INSTRUCTIONS.md`
3. 音效指南：`audio/AUDIO_GUIDE.md`
4. 微信小程序官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/

---

## 🎯 下一步计划

### 功能扩展
- [ ] 多种木鱼皮肤
- [ ] 多种音效选择
- [ ] 成就系统
- [ ] 排行榜
- [ ] 云端同步
- [ ] 分享功能
- [ ] 夜间模式

### 性能优化
- [ ] WebP 格式图片
- [ ] 音效预加载优化
- [ ] 动画性能优化

---

**祝开发顺利！** 🎉
