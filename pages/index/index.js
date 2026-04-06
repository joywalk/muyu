// pages/index/index.js
const app = getApp();

Page({
  data: {
    count: 0,
    settings: {
      soundEnabled: true,
      vibrationEnabled: true,
      increment: 1,
      showAnimation: true
    },
    animation: null,
    plusAnimations: [],
    audioPool: [],
    poolIndex: 0
  },

  onLoad() {
    // 加载保存的设置
    const savedSettings = wx.getStorageSync('settings');
    if (savedSettings) {
      this.setData({
        settings: savedSettings
      });
    }

    // 加载保存的计数
    const savedCount = wx.getStorageSync('count');
    if (savedCount) {
      this.setData({
        count: savedCount
      });
    }

    // 创建动画
    this.createAnimation();

    // 初始化音频池
    this.initAudioPool();
  },

  // 创建点击动画
  createAnimation() {
    const animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out'
    });

    this.setData({
      animation: animation
    });
  },

  // 初始化音频池（解决连点卡顿问题）
  initAudioPool() {
    const poolSize = 5; // 音频池大小
    const audioPool = [];

    for (let i = 0; i < poolSize; i++) {
      const audio = wx.createInnerAudioContext();
      audio.src = '/audio/fish-sound.mp3';
      audio.loop = false;
      audio.volume = 1.0;

      audio.onEnded(() => {
        // 播放完成后重置
      });

      audio.onError((res) => {
        console.log('音频播放错误', res);
      });

      audioPool.push(audio);
    }

    this.setData({
      audioPool: audioPool
    });
  },

  // 点击木鱼
  tapFish() {
    const increment = this.data.settings.increment;
    const newCount = this.data.count + increment;

    // 更新计数
    this.setData({
      count: newCount
    });

    // 保存计数到本地存储
    wx.setStorageSync('count', newCount);

    // 播放音效
    if (this.data.settings.soundEnabled) {
      this.playSound();
    }

    // 震动
    if (this.data.settings.vibrationEnabled) {
      wx.vibrateShort({
        type: 'light'
      });
    }

    // 执行动画
    if (this.data.settings.showAnimation) {
      this.performAnimation();
      this.showPlusAnimation();
    }
  },

  // 播放音效（使用音频池）
  playSound() {
    const pool = this.data.audioPool;
    const index = this.data.poolIndex;

    if (pool[index]) {
      try {
        pool[index].stop();
        pool[index].play();
      } catch (e) {
        console.log('播放音频失败', e);
      }
    }

    // 轮询下一个音频
    const nextIndex = (index + 1) % pool.length;
    this.setData({
      poolIndex: nextIndex
    });
  },

  // 执行木鱼缩放动画
  performAnimation() {
    const animation = this.data.animation;

    // 缩放动画
    animation.scale(0.9).step();
    animation.scale(1).step();

    this.setData({
      animation: animation.export()
    });

    // 重置动画
    setTimeout(() => {
      animation.scale(1).step();
      this.setData({
        animation: animation.export()
      });
    }, 200);
  },

  // 显示 +1 动画
  showPlusAnimation() {
    const increment = this.data.settings.increment;
    const plusAnimations = this.data.plusAnimations;

    // 创建新动画
    const newAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-out'
    });

    // 随机 X 轴偏移（±10px）
    const offsetX = Math.random() * 20 - 10;

    newAnimation
      .translateY(0)
      .opacity(1)
      .step();

    newAnimation
      .translateY(-50)
      .opacity(0)
      .step({ duration: 1000 });

    const animationData = {
      id: Date.now(),
      animation: newAnimation.export(),
      text: `+${increment}`,
      offsetX: offsetX
    };

    // 添加新动画
    plusAnimations.push(animationData);

    // 限制最大同时显示的动画数量（12个）
    if (plusAnimations.length > 12) {
      plusAnimations.shift(); // 移除最旧的动画
    }

    this.setData({
      plusAnimations: plusAnimations
    });

    // 1秒后移除动画
    setTimeout(() => {
      const currentAnimations = this.data.plusAnimations;
      const filteredAnimations = currentAnimations.filter(
        item => item.id !== animationData.id
      );

      this.setData({
        plusAnimations: filteredAnimations
      });
    }, 1000);
  },

  // 跳转到设置页面
  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  },

  onShow() {
    // 页面显示时重新加载设置
    const savedSettings = wx.getStorageSync('settings');
    if (savedSettings) {
      this.setData({
        settings: savedSettings
      });
    }

    // 页面显示时重新加载计数（解决清零功德后不生效的问题）
    const savedCount = wx.getStorageSync('count');
    if (savedCount !== '' && savedCount !== null && savedCount !== undefined) {
      this.setData({
        count: Number(savedCount)
      });
    }
  },

  onUnload() {
    // 页面卸载时释放音频资源
    const pool = this.data.audioPool;
    pool.forEach(audio => {
      if (audio) {
        audio.destroy();
      }
    });
  }
});
