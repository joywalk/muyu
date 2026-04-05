App({
  onLaunch() {
    // 初始化设置
    this.initSettings();
  },

  initSettings() {
    const defaultSettings = {
      soundEnabled: true,
      vibrationEnabled: true,
      increment: 1,
      showAnimation: true
    };

    const savedSettings = wx.getStorageSync('settings');
    if (!savedSettings) {
      wx.setStorageSync('settings', defaultSettings);
    }
  }
});
