const filter = require('../../../utils/filter');
const app = getApp();

Component({
  data: {
    imgHost: app.globalData.imgHost,
    comicList: [],
    itemWidth: '',
    comicImgHeight: 0
  },
  properties: {
    recommendBook: {
      type: Object,
      value: {},
    },
  },
  ready: function() {
    this.filterComic();
  },
  methods: {
    // 过滤需要显示的数据
    filterComic: function() {
      let itemWidth;
      let comicList = filter.filterDataList(this.properties.recommendBook);
      const percentWidth = 100;
      const length = comicList.length;
      const middle = 4;
      // 判断数组长度 设置对应的百分比width
      if (length < middle) {
        itemWidth = (percentWidth - 1) / length;
      } else if (length > middle && length % 2 !== 0) {
        itemWidth = (percentWidth - 1) / ((length - 1) / 2);
        comicList.pop()
      } else {
        itemWidth = (percentWidth - 1) / (length / 2);
      }

      this.setData({
        itemWidth,
        comicList,
      });
    },
    // 图片加载完毕
    imgLoad: function(e) {
      this.createSelectorQuery()
        .select('.comic-img')
        .boundingClientRect((rect) => {
          this.setData({
            comicImgHeight: rect.height
          })
        })
        .exec();
    },
  },
});