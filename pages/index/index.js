//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test:1
  },
  login:function(){
    debugger;
    if(this.data.test === 1){
      this.setData({
        test: 2
      });
      wx.navigateTo({
        url: '../info/info'
      })
    }else{
      this.setData({
        test: 1
      });
      wx.showToast({
        title: '用户名或密码不正确',
        icon: 'none',
        duration: 2000
      })
    }
  }
})
