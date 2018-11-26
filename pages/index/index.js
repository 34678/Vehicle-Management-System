//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test:1,
    items: [
      { name: 'rootuser', value: '管理员' },
      { name: 'user', value: '业主', checked: 'true' },
    ],
    User:''
  },
  login:function(){
    debugger;
    let data = this.data;
    if(data.test === 1){
      this.setData({
        test: 2
      });
      if (data.User === 'rootuser'){
        wx.navigateTo({
          url: '../rootuser/rootuser'
        })
      }else{
        wx.navigateTo({
          url: '../info/info'
        })
      }
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
  },
  radioChange:function(e){
    debugger;
    let val = e.detail.value;
    let self = this;
    this.setData({
      User: val
    })
  }
})
