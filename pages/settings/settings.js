// pages/settings/settings.js
const app = getApp();

Page({
  data: {
    settings: {
      soundEnabled: true,
      vibrationEnabled: true,
      increment: 1,
      showAnimation: true
    },
    incrementOptions: [
      { value: 1, label: '+1' },
      { value: 2, label: '+2' },
      { value: 3, label: '+3' },
      { value: 5, label: '+5' },
      { value: 10, label: '+10' }
    ]
  },

  onLoad() {
    // 加载保存的设置
    const savedSettings = wx.getStorageSync('settings');
    if (savedSettings) {
      this.setData({
        settings: savedSettings
      });
    }
  },

  // 切换音效
  toggleSound(e) {
    const value = e.detail.value;
    const newSettings = {
      ...this.data.settings,
      soundEnabled: value
    };

    this.setData({
      settings: newSettings
    });

    // 保存设置
    wx.setStorageSync('settings', newSettings);
  },

  // 切换震动
  toggleVibration(e) {
    const value = e.detail.value;
    const newSettings = {
      ...this.data.settings,
      vibrationEnabled: value
    };

    this.setData({
      settings: newSettings
    });

    // 保存设置
    wx.setStorageSync('settings', newSettings);
  },

  // 切换动画
  toggleAnimation(e) {
    const value = e.detail.value;
    const newSettings = {
      ...this.data.settings,
      showAnimation: value
    };

    this.setData({
      settings: newSettings
    });

    // 保存设置
    wx.setStorageSync('settings', newSettings);
  },

  // 改变增量
  changeIncrement(e) {
    const index = e.detail.value;
    const increment = this.data.incrementOptions[index].value;
    const newSettings = {
      ...this.data.settings,
      increment: increment
    };

    this.setData({
      settings: newSettings
    });

    // 保存设置
    wx.setStorageSync('settings', newSettings);
  },

  // 清零功德（二次确认）
  resetCount() {
    wx.showModal({
      title: '确认清零',
      content: '确定要将功德值清零吗？此操作不可恢复。',
      confirmText: '清零',
      confirmColor: '#ff0000',
      success: (res) => {
        if (res.confirm) {
          // 清零功德值
          wx.setStorageSync('count', 0);
          wx.showToast({
            title: '功德已清零',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },

  // 返回首页
  goBack() {
    wx.navigateBack();
  }
});
