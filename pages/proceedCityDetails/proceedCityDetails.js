Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseId:'',
    houseDetail:{},
    imgUrls: [
      '/img/dian1.jpg',
      '/img/dian2.jpg',
      '/img/dian3.jpg'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    const _this = this
    _this.setData({
      houseId: options.id
    })
    this.onDetails()
  },
  //获取房屋详情
  onDetails:function(){
    const _this = this
    wx.request({
      url: 'https://aileer.net/resource/houseDetail',
      method: 'GET',
      data: {
        houseId: this.data.houseId
      },
      success: function (res) {
        console.log(res.data.data)
        _this.setData({
          houseDetail:res.data.data
        })
      }
    })
    
  },
  // 评价
  appAppraise:function() {
    wx.navigateTo({
      url: '../appraise/appraise',
    })
  },
  // 预定
  onSchedule:function(){
    
    wx.navigateTo({
      url: '../reservePrice/reservePrice',
    })
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