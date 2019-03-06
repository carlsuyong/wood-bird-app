Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //预定
  onyuding:function(){
    const _this = this
    wx.request({
      url: 'https://aileer.net/order/generateOrder',
      method: 'POST',
      data: {
        houseId: '5c7e1d2b1ba3525002111d7c', // 房源Id must
        userId: '5c500d5dbdba7720f428ec83', // 用户Id must
        beginTime: '1551768742967', // 入住日期 must
        endTime: '1551941542967', // 离开日期 must
        name: '苏先生', // 房客姓名 option
        phone: '18621390339', // 手机号 must
        totalPrice: '685', // 总价 must
      },
      success: function (res) {
        console.log(res)
      }
    })
    wx.showToast({
      title: '预订成功',
      icon: 'success',
      duration: 2000
    })
    _this.check()
  },
  check:function(){
    setTimeout(function () {
      wx.switchTab({
        url: '../order/order',
      })
    }, 2000) 
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