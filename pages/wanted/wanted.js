// pages/wanted/wanted.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roles: ['蒙奇·D·路飞', '罗罗诺亚·索隆', '乌索普', '文斯莫克·山治', '娜美', '托尼托尼·乔巴', '妮可·罗宾', '弗兰奇', '布鲁克', '甚平', '艾斯', '巴基', '阿龙', '阿普', '巴托洛米奥', '贝拉米', '波克慕斯', '布洛基', '茶胡子', '大谎话家', '德雷克', '费雪泰格', '冯克雷', '基拉', '杰克', '卡里布', '卡彭·贝基', '卡文迪许', '克洛', '罗', '罗西欧'],
  },
  showDetail: function (e) {
    wx.navigateTo({
      url: `../detail/detail?role=${e.target.dataset.role}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})