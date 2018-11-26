// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:[
      {
        carsitenum:11231232,
        carnumber:[32131,31232,3312,4312,5312,3126,127],
      },
      {
        carsitenum: 1213123123,
        carnumber: [1312313, 31232, 3213,2134, 3215, 126, 27],
      }

    ],
    ifchecked:{},
  },
  add:function(e){
    let index = e.target.dataset.index;
    let ifcheck = this.data.ifchecked[index];
    if(ifcheck){
      // 临时车
      wx.navigateTo({
        url: '../rentcar/rentcar'
      })
    }else{
      // 业主车
      wx.navigateTo({
        url: '../car/car'
      })
    }
  },
  edit: function (e){
    debugger;
    let id = e.target.dataset.carid;
    wx.navigateTo({
      url: `../car/car?carid=${id}`
    })
  },
  checkboxChange(e){
    let val = e.target.dataset.index;
    let ifcheck = e.detail.value[0]?true:false;
    let str = `ifchecked.${val}`;
    this.setData({
      [str]: ifcheck
    })
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