// pages/fengniaoguoji/fengniaoguoji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"4%",
     imgArr:[
       "https://i.loli.net/2020/09/09/536KxYHCcUZFi4e.jpg",
       "https://i.loli.net/2020/09/09/vHC27RAjD3fUclq.jpg",
       "https://s1.ax1x.com/2020/09/09/w1PvFA.jpg",
       "https://s1.ax1x.com/2020/09/09/w1iVFs.jpg",
       "https://s1.ax1x.com/2020/09/15/w6Fxmt.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kCtS.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kA6s.jpg",
       "https://s1.ax1x.com/2020/09/15/w6km7V.md.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kKtU.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kUAK.jpg",
       "https://s1.ax1x.com/2020/09/15/w6k2Af.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kqEV.jpg",
       "https://s1.ax1x.com/2020/09/15/w6kxgJ.md.jpg"
     ]
  },

  // previewImg:function(e){
  //   console.log(e.currentTarget.dataset.index);
  //   var index = e.currentTarget.dataset.index;
  //   var imgArr = this.data.imgArr;
  //   wx.previewImage({
  //     current: imgArr[index],     //当前图片地址
  //     urls: imgArr,               //所有要预览的图片的地址集合 数组形式
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },
  fanhuidj:function(){
    wx.reLaunch({
       url: "../index/index"
     })
 },

 zhuyefanhuidj:function(){
  wx.reLaunch({
     url: "../index/index"
   })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    console.log(windowHeight);
    if(windowHeight>800){
      this.setData({
        top: "6%"
      })
    }else{
      this.setData({
        top: "4%"
      })
    }
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