// pages/index/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl:"",
    rotate:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      picUrl:options.picUrl,
      rotate:options.rotate
    })

  },
gofit: function(){
  // /pages/index/result/result?picUrl='+picUrl+'&rotate='+rotate
  wx.navigateTo({
    url: '/pages/index/result/result?picUrl='+ this.data.picUrl + '&rotate='+ this.data.rotate
  })
},
gopredict: function(){
  wx.navigateTo({
    url: '/pages/index/prediction/prediction_select/index?picUrl='+this.data.picUrl+'&rotate='+this.data.rotate
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