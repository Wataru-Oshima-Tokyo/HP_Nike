<template>
  <div id="collectionContainer" class="containerPosition" v-b-hover="searchWidth">

    <h2 style="margin-left: 20px;">注目のコレクション</h2>
    <ul class="horizontal-list" style="margin: 10px;">

      <li class="item">
        <div>
          <b-img :src="'/assets/shreyas-nadkar-4zkTNalqAxw-unsplash.jpg'" fluid alt="Responsive image" style="heihgt: 200px;" ></b-img>
        </div>
      </li>
      <li class="item">
        <div>
          <b-img :src="'/assets/mael-balland-6GpIMAj0OJU-unsplash.jpg'" fluid alt="Responsive image" ></b-img>
        </div>
      </li>
      <li class="item">
        <div>
          <b-img :src="'/assets/thanuj-mathew-acI94l6iuMQ-unsplash.jpg'" fluid alt="Responsive image" ></b-img>
        </div>
      </li>
      <li class="item">
        <div>
          <b-img :src="'/assets/jorge-salvador-6Yx199x_Q7g-unsplash.jpg'" fluid alt="Responsive image" ></b-img>
        </div>
      </li>
      <li class="item">
        <div>
          <b-img :src="'/assets/mael-balland-D7WRi8YvzcU-unsplash.jpg'" fluid alt="Responsive image" ></b-img>
        </div>
      </li>
      <li class="item">
        <div>
          <b-img :src="'/assets/svyatoslav-romanov-BZRzXrv_3uY-unsplash.jpg'" fluid alt="Responsive image" ></b-img>
        </div>
      </li>
    </ul>
    <div class="fadeIn" v-if="wider">
    <a href=""@click.prevent="scrollingLeft" class="scrollRightBtnPosition" style="color:#f0f1f5;">
      <b-icon icon="arrow-right-circle" font-scale="2.5" ></b-icon>
    </a>
    <a href=""@click.prevent="scrollingRight" class="scrollLeftBtnPosition" style="color:#f0f1f5;">
      <b-icon icon="arrow-left-circle" font-scale="2.5" ></b-icon>
    </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        left:0,
        right:0,
        works: false,
        msg: "",
        wider: false,
      }
    },
    methods: {
      scrollingLeft(work) {
        this.left = this.left +1;
        let target = document.querySelector('.horizontal-list');
        let scrollItem = document.querySelector('.item');
        let itemWidth = scrollItem.offsetWidth;
        let scrollLength = itemWidth*.95;
        let maxLnegth = target.children.length * scrollLength -window.innerWidth;
        var windowLeft = maxLnegth - this.left*scrollLength;
        target.scrollLeft += scrollLength;
        this.works = true;
        this.msg = window.innerWidth + ", " + windowLeft;
      },
      scrollingRight(work) {
      this.right = this.right +1;
      let target = document.querySelector('.horizontal-list');
      let scrollItem = document.querySelector('.item');
      let itemWidth = scrollItem.offsetWidth;
      let scrollLength = itemWidth*.95;
      let maxLnegth = target.children.length * scrollLength -window.innerWidth;
      var windowRight = maxLnegth - this.left*scrollLength;
      target.scrollLeft -= scrollLength;
      this.works = true;
      this.msg = window.innerWidth + ", " + windowRight;
    },
    searchWidth(show) {
      let target=window.innerWidth
      if (target >= 1000) {
        this.wider= show;
      } else {
        this.winder = !show;
      }
    }
    }
  }
</script>

<style lang="css" scoped>


.horizontal-list {
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 40px;
    }

.item {
      /* 横スクロール用 */
      display: inline-block;
      width: 300px;
      /* 見た目調整 */
      margin: 16px;
      height: 400px;
      padding: 16px;
      font-size: 48px;
    }
  .containerPosition {
    position: relative;
  }
  .scrollLeftBtnPosition {
    position: absolute;
    top: 250px;
    left: 2%;
  }
  .scrollRightBtnPosition {
    position: absolute;
    top: 250px;
    right: 2%;
  }
</style>
