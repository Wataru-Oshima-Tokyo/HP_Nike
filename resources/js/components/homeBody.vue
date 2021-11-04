<template lang="html">
  <div id="homebody">
    <div class="container-fluid" style="width: 95%; height: auto; ">
      <div class="" style="position:relative;" >
      <b-img :src="'/assets/pexels-melvin-buezo-25291472.jpg'" fluid alt="Responsive image" ></b-img>
      <div class="container insertedContainerHigher">
          <p class="insertedContainerTextHigher1">Kipchoge Capsuleコレクション</p>
          <p class="insertedContainerTextHigher2">どこまでも走ろう<br></p>
          <button type="button" class="btn _btn-color btn-sm"　style="border-radius: 20px;">コレクションを見る</button>

    </div>
    </div>
    </div>
    <div class="contaienr-fluid my-5" style="padding: 20px;" >
      <BodyCarousel></BodyCarousel>
    </div>
    <div class="container-fluid centering" >
      <div class="row" style="width: 70%; height: auto; margin: 10px;">
        <div class="col-md-8">
          <h2>All Conditions Gear（あらゆる状況に対応するギア）。それは、アウトドア用として、デザインから、テスト、製造までを地球上で実施する地球製ギア。</h2>

          <p><br>今シーズンのテーマは、魔法のような存在を見出すこと。今年最初のACGコレクションでは、確かな実力と人気を誇る重ね着のバリエーションを忠実に継承。魔法のような存在と出会おう。</p>

          <p><br>※近日販売開始予定</p>
          <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">コレクションを見る</button>
          <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">詳細を見る</button>
        </div>
      </div>
    </div>


    <div class="container-fluid " style="width: 90%; height: auto; margin-top:20px; align-items: center">
      <a href="#"　style="text-decoration:none;">
          <b-img :src="'/assets/HNIMGL9247_TP_V.jpg'" fluid alt="Responsive image" ></b-img>
        <div class="text-center mx-auto my-5"　style="width: 60%;">
          <p style="color:#818190;">ナイキリアクトエスケープランは、<br>抜群のクッション性を誇るリアクトフォームを搭載した新しいランニングシュー<br>ズ。心と体をリセットし、<br>セルフケアのためにランニングを楽しむ女性のライフスタイルを全力でサポート。</p>
          <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">商品を見る</button>
        </div>
        </a>
      </div>

      <div class="container-fluid" style="width: 90%; height: auto; margin-top:20px; align-items: center">
        <div class="" style="position: relative;">
          <a href="#">
          <b-img :src="'/assets/TSURU814009_TP_V.jpg'" fluid alt="Responsive image" ></b-img>
          </a>
          <div class="" style="position: absolute; bottom: 5%; left: 2%;">
            <div class="container">
              <b style="color: red;">新着<br></b>
              <b style="color: red;font-size: 50px;">PG 5<br></b>
              <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">商品を見る</button>
              <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">今すぐカスタマイズ</button>
            </div>
        </div>


        </div>
      </div>

      <div class="container-fluid" style="width: 90%; height: auto; margin-top:60px; align-items: center">
        <a href="#"　style="text-decoration:none;">
            <b-img :src="'/assets/fashion-shoes-sneakers.jpg'" fluid alt="Responsive image" ></b-img>
            <div class="text-center mx-auto my-5"　style="width: 60%;">
              <h3　style="color:#818190;">スペクトラムパック</h3>
              <p style="color:#818190;">赤、青、緑の鮮やかなカラーは、プレーするキミを輝かせる。</p>
              <button type="button" class="btn btn-dark btn-md"　style="border-radius: 20px;">商品を見る</button>
            </div>
        </a>
      </div>

      <Collection></Collection>
  </div>
</template>

<script>
import BodyCarousel from "../components/bodyCarousel"
import Collection from "../components/collection"
export default {
    components: {
        BodyCarousel,
        Collection,
    }
}
</script>

<style lang="css" scoped>
</style>
