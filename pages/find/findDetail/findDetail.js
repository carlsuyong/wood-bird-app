var WxParse = require('../wxParse/wxParse.js');
Page({
  data: {
    
  },

  onLoad: function (options) {
    const _this = this
    console.log(options.id)
    wx.request({
      url: 'https://aileer.net/discover/articleDetail',
      data:{
        id: options.id
      },
      method: 'get',
      success: function (res) {
        console.log(res)
      }
    })
    // var content = wx.getStorageSync('contents')
    // for(var i =0;i<content.length;i++){
    //   if (options.id==content[i].PostId){
    //     _this.setData({
    //       conse:content[i]
    //     })
    //     var article = _this.data.conse.Content
    //      WxParse.wxParse('article', 'html', article, _this, 0);
    //   }
    // }
  },

  
  onShow: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})