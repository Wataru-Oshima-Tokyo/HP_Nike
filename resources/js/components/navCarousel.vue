<template>
<div id="navCarousel">


    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000;background-color: #f0f1f5; height: 70px;position: relative;" v-model="slide" :interval="4000">
        <b-carousel-slide style="height: 120px;">
            <div class="container-fluid centering" style="background-color: transparent; height: auto;">
                <p class="navCarouselFont">メンバー送料無料 <br> ゲストは15,000円(税込)以上のお買い上げで送料無料 <a href="#" style="color: white;">さらに詳しく</a></p>
            </div>
        </b-carousel-slide>
        <b-carousel-slide style="height: 120px;">
            <div class="container-fluid centering" style="background-color: transparent; height: auto;">
                <p class="navCarouselFont">最新のプロダクト、特別なサービス、限定コンテンツが集結。 <br> <a href="#" style="color: white;">NIKEアプリをチェック</a></p>
            </div>
        </b-carousel-slide>
        <b-carousel-slide style="height: 120px;">
            <div class="container-fluid centering" style="background-color: transparent; height: auto;">
                <p class="navCarouselFont">学生・教職員割引で10%OFF <br> 全国の大学生・大学院生・教職員が対象 <a href="#" style="color: white;">さらに詳しく</a></p>
            </div>
        </b-carousel-slide>
        <b-carousel-slide style="height: 120px;">
            <div class="container-fluid centering" style="background-color: transparent; height: auto;">
                <p class="navCarouselFont">全国のコンビニでギフトカードを発売中 <br> <a href="#" style="color: white;">さらに詳しく</a></p>

            </div>
        </b-carousel-slide>

    </b-carousel>
</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>

<style lang="css" scoped>
</style>
