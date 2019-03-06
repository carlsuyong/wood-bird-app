Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMin: 0, //左边滑块最小值
    leftMax: 200, //左边滑块最大值
    rightMin: 200, //右边滑块的最小值
    rightMax: 1000, //右边滑块最大值
    leftValue: 0, //左边滑块默认值
    rightValue: 1000, //右边滑块默认值
    leftWidth: '60', //左边滑块可滑动长度：百分比
    rightWidth: '60', //右边滑块可滑动长度：百分比
    numArray: [1,2,3,4,5,6,7,8,9,10],//入住人数
    checkinNum:1,
    lendType:[{
      name:'单间',
      ischeck:true
    }, {
        name: '整套',
        ischeck: true
      }, {
        name: '床位',
        ischeck: true
      }], //出租类型
    bedType: [{
      name: '单人床',
      ischeck: true
    }, {
      name: '双人床',
      ischeck: true
    }, {
      name: '其他',
      ischeck: true
    }],//床型
    roomType: [{
      name: '一室',
      ischeck: true
    }, {
        name: '二室',
      ischeck: true
    }, {
        name: '三室',
      ischeck: true
      }]//户型
  },

  // 左边滑块滑动的值
  leftChange: function (e) {
    console.log('左边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      leftValue: e.detail.value //设置左边当前值
    })
  },
  // 右边滑块滑动的值
  rightChange: function (e) {
    console.log('右边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      rightValue: e.detail.value,
    })
  },
  //bindPickerChange 筛选
  bindChange: function (e) {
    for (var i in this.data.numArray) {
      if (e.detail.value == i) {
        this.setData({
          checkinNum: this.data.numArray[i]
        })
      }
    }
  },
  // 
  checkboxChange(e) {
    const checked = e.detail.value
    const changed = {}
    for (let i = 0; i < this.data.lendType.length; i++) {
      if (checked.indexOf(this.data.lendType[i].name) !== -1) {
        changed['lendType[' + i + '].ischeck'] = true
      } else {
        changed['lendType[' + i + '].ischeck'] = false
      }
    }
    console.log(changed)
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