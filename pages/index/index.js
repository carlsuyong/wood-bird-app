//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cityData: [{
      cityId: '1',
      cityName: '# 北京',
      isCheck: true
    }, {
      cityId: '2',
      cityName: '# 上海',
      isCheck: false
    }, {
      cityId: '3',
      cityName: '# 重庆',
      isCheck: false
    }, {
      cityId: '4',
      cityName: '# 杭州',
      isCheck: false
    }, {
      cityId: '5',
      cityName: '# 成都',
      isCheck: false
    }, {
      cityId: '6',
      cityName: '# 苏州',
      isCheck: false
    }, {
      cityId: '7',
      cityName: '# 广州',
      isCheck: false
    }, {
      cityId: '8',
      cityName: '# 深圳',
      isCheck: false
    }] //特价房源
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    const _this = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.request({
    //   url: 'https://aileer.net/home',
    //   method:'GET',
    //   success:function(res){
    //     console.log(res.data.data.banners)
    //     _this.setData({
    //       banners: res.data.data.banners[0]
    //     })
    //   }
    // })
  },
  //城市详情页面
  onClickDetail: function() {
    wx.navigateTo({
      url: '../cityHouseDetails/cityHouseDetails'
    })
  },
  //搜索页面
  onClickSearch: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // 具体房价
  onPrice: function() {
    wx.navigateTo({
      url: '../proceedCityDetails/proceedCityDetails',
    })
  },
  // 特价房源筛选
  cityIsCheck: function(inde) {
    const _this = this
    let ids = inde.currentTarget.dataset.id
    let citys = _this.data.cityData
    for (var i in citys) {
      if (citys[i].cityId == ids) {
        citys[i].isCheck = true
      } else {
        citys[i].isCheck = false
      }
    }
    _this.setData({
      cityData: citys
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})