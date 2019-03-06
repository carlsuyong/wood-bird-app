Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHouseData:[],//房源列表
    orderList:'默认排序',
    orderArray: ['默认排序', '价格从高到低', '价格从低到高', '预订最多', '评价最多'],
    pickerConfig: {
      endDate: true, // 是否需要结束时间，为true时显示开始时间和结束时间两个picker
      column: "", //可选的最小时间范围hour、min、sec、""
      dateLimit: true, //是否现在时间可选范围，false时可选任意时间；未数字n时，范围是当前时间的最近n天
      limitStartTime: "2015-05-06 12:32:44", //最小可选时间
      limitEndTime: "2055-05-06 12:32:44" //最大可选时间 
    },//选择日期
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onHouseList()
  },
  // 房屋列表
  onHouseList:function(){
    const _this = this
    wx.request({
      url: 'https://aileer.net/resource/list',
      method: 'POST',
      data: {
        pageNo: 1, // 页码 must
        pageSize: 1, // 页数 must
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          allHouseData:res.data.data
        })
      }
    })
  },
  // 点击进入详情
  onclickprice:function(e){
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../proceedCityDetails/proceedCityDetails?id='+id
    })
  },
  // 日期picker打开
  pickerShow: function () {
    this.setData({
      isPickerShow: true
    });
  },
  // 日期picker关闭
  pickerHide: function () {
    this.setData({
      isPickerShow: false
    });
  },

  // 获取日期时间
  setPickerTime: function (val) {
    let data = val.detail;
    console.log(data)
    this.setData({
      startTime: data.startTime,
      endTime: data.endTime,
      start: data.startTime.substring(5,16),
      end: data.endTime.substring(5, 16)
    });
  },
  //bindPickerChange 筛选
  bindChange:function(e){
    for(var i in this.data.orderArray){
      if (e.detail.value==i){
        this.setData({
          orderList: this.data.orderArray[i]
        })
      }
    }
  },
  ontabBeginDate:function(){
    wx.navigateTo({
      url: '../moreFilter/moreFilter',
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