// pages/wanted/wanted.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roles: ['蒙奇·D·路飞', '罗罗诺亚·索隆', '乌索普', '文斯莫克·山治', '娜美', '托尼托尼·乔巴', '妮可·罗宾', '弗兰奇', '布鲁克', '甚平',
      '亚尔丽塔', '克洛', '赞高', '恶龙', '沙·克洛克达尔', '达兹·波尼斯', '冯·克雷', '贝拉米', '萨奇斯',
      '乔拉可尔·米霍克', '巴索罗米·熊', '唐吉诃德·多弗朗明哥', '波雅·汉库克', '月光·莫利亚', '巴基',
      '尤斯塔斯·基德', '基拉', '乔艾莉·波妮', '斯库拉奇曼·阿普', 'X·德雷克', '特拉法尔加·罗', '培波',
      '爱德华·纽盖特', '马尔高', '波特卡斯·D·艾斯', '马歇尔·D·蒂奇','夏洛特·玲玲', '山贼王', '波克慕斯', '布洛基', '青鬼东利',
      '福克西', '茶胡子', '大谎话家', '费舍尔·泰格', '巴托洛米奥', '青椒', '卡里布', '卡彭·贝基', '卡文迪许', '罗西欧', '熊猫人', 
      '安布里奥·伊万科夫','M·凯撒·库朗','杰克'
    ],
    showRoles: [],
    originRoles: [],
    inputShowed: true,
    searchText: null
  },
  showInput: function (e) {
    this.setData({
      inputShowed: false
    });
  },
  hideInput: function (e) {
    this.setData({
      inputShowed: true,
      roles: this.data.originRoles,
      searchText: null
    });
  },
  confirmSearch: function (e) {
    var roles = this.data.originRoles.filter(v => {
      // if (!this.data.searchText) {
      //   return v
      // }
      if (v.indexOf(e.detail.value) >= 0) {
        return true
      } else {
        return false
      }
    })
    console.log(this.data.searchText, roles)
    this.setData({
      roles: roles
    });
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
    this.setData({
      originRoles: this.data.roles
    });
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