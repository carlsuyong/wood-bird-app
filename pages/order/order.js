Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeClick: 1,
    orderData:[] //订单列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    _this.ondataActive()
  },
  // tab切换函数
  ontabClick: function (e) {
    const _this = this
    var tagid = e.currentTarget.dataset.type
    if (tagid === 1) {
      _this.setData({
        activeClick: tagid
      })
      _this.ondataActive()
    } else {
      _this.setData({
        activeClick: tagid
      })
      _this.ondataEnd()
    }
  },
  //订单列表进行中
  ondataActive:function(){
    const _this = this
    wx.request({
      url: 'https://aileer.net/order/getOrderList',
      method: 'POST',
      data: {
        status: 1, // 状态 0 进行中 1 已结果 must
        userId: '5c500d5dbdba7720f428ec83', // 用户Id must
        pageSize: 1, // 页数 must
        pageNo: 1, // 页码
      },
      success: function (res) {
        console.log(res.data.data)
        _this.setData({
          orderData: res.data.data
        })
      }
    })
  },
  //订单列表已结束
  ondataEnd: function () {
    const _this = this
    wx.request({
      url: 'https://aileer.net/order/getOrderList',
      method: 'POST',
      data: {
        status: 2, // 状态 0 进行中 1 已结果 must
        userId: '5c500d5dbdba7720f428ec83', // 用户Id must
        pageSize: 1, // 页数 must
        pageNo: 1, // 页码
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          orderData: res.data.data
        })
      }
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