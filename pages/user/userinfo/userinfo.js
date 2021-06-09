// pages/user/userinfo/userinfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "未知",
    name: "未知",
    phone: "未知",
    wxid: "未知"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.data.baseUrl + "/user",
      method:"GET",
      header: {
        token: wx.getStorageSync('token')
      },
      success(res) {
        console.log(res.data.user)
        let data = res.data.user
        that.setData({
          id: data.id,
          name: data.name,
          phone: data.phone,
          wxid: data.wxid
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