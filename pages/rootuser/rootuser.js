// pages/rootuser/rootuser.js
Page({
  data:{
    date:'请选择日期',
    modalHidden:true
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 点击修改按钮弹出 二次确认框
   */
  change(){
    this.setData({
      modalHidden: false
    })

  },
  modalChange: function (e) {
  
    var val = e.type;
    if(val === "confirm"){
      // 点击确认修改发送请求
      wx.showToast({
        title: '提交成功',
        icon: 'none',
        duration: 2000
      })
    }
    this.setData({
      modalHidden: true
    })
  },
})