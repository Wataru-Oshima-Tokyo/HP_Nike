<template lang="html">
  <div id="textbar">
    <!-- there is unknown blank space btw div and div in  the dropdownItems. Need to know why and fix-->
    <!-- ************** new release section **************** -->
    <div class="conatiner-fluid centering " v-show="newrelease">
      <div class="row zeroToOne"  style="width: 70%; height: auto; margin-top: 2%;" >
        <div class="col-3 fadeIn">
          <div class="dropdownTop">
            <p>注目のコレクション</p>
          </div>
          <div class="dropdownItems">
            <p>全ての新着商品</p>
          </div>
          <div class="dropdownItems">
            <p>メンバーショップ</p>
          </div>
          <div class="dropdownItems">
            <p>SNKRS</p>
          </div>
          <div class="dropdownItems">
            <p>ベストセラー/人気商品</p>
          </div>
          <div class="dropdownItems">
            <p>ナイキエアマックス</p>
          </div>
          <div class="dropdownItems">
            <p>エアフォース１</p>
          </div>
          <div class="dropdownItems">
            <p>Nike By Youでカスタマイズ</p>
          </div>
        </div>
          <div class="col-3 fadeIn">
            <div class="dropdownTop">
              <p>メンズ　新着商品</p>
            </div>
            <div class="dropdownItems">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>ウェア</p>
            </div>
            <div class="dropdownItems">
              <p>アクセサリー</p>
            </div>
            <div class="dropdownItems">
              <p>すべてのメンズ新着商品</p>
            </div>
          </div>

        <div class="col-3 fadeIn">
            <div class="dropdownTop">
              <p>レディース　新着商品</p>
            </div>
            <div class="dropdownItems">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>ウェア</p>
            </div>
            <div class="dropdownItems">
              <p>アクセサリー</p>
            </div>
            <div class="dropdownItems">
              <p>すべてのレディース新着商品</p>
            </div>
        </div>
          <div class="col-3 fadeIn">
            <div class="dropdownTop">
              <p>キッズ　新着商品</p>
            </div>
            <div class="dropdownItems">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>ウェア</p>
            </div>
            <div class="dropdownItems">
              <p>アクセサリー</p>
            </div>
            <div class="dropdownItems">
              <p>すべてのキッズ新着商品</p>
            </div>
        </div>
      </div>
    </div>
    
    <!-- ************** men"s section **************** -->
    <div class="conatiner-fluid centering " v-show="men">
      <div class="row row-cols-5 zeroToOne"  style="width: 95%; height: auto; margin-top: 2%;" >
        <div class="col fadeIn">
          <div class="dropdownTop">
            <p>注目のコレクション</p>
          </div>
          <div class="dropdownItems">
            <p>新着商品</p>
          </div>
          <div class="dropdownItems">
            <p>メンバーショップ</p>
          </div>
          <div class="dropdownItems">
            <p>SNKRS</p>
          </div>
          <div class="dropdownItems">
            <p>ベストセラー/人気商品</p>
          </div>
          <div class="dropdownItems">
            <p>ナイキエアマックス</p>
          </div>
          <div class="dropdownItems">
            <p>エアフォース１</p>
          </div>
          <div class="dropdownItems">
            <p>Nike By Youでカスタマイズ</p>
          </div>
        </div>
          <div class="col fadeIn">
            <div class="dropdownTop">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>ライフスタイル</p>
            </div>
            <div class="dropdownItems">
              <p>ランニング</p>
            </div>
            <div class="dropdownItems">
              <p>バスケットボール</p>
            </div>
            <div class="dropdownItems">
              <p>ジョーダン</p>
            </div>
            <div class="dropdownItems">
              <p>ジム＆トレーニング</p>
            </div>
            <div class="dropdownItems">
              <p>サッカー/フットボール</p>
            </div>
            <div class="dropdownItems">
              <p>スケートボード</p>
            </div>
            <div class="dropdownItems">
              <p>ゴルフ</p>
            </div>
            <div class="dropdownItems">
              <p>テニス</p>
            </div>
            <div class="dropdownItems">
              <p>サンダル</p>
            </div>
            <div class="dropdownItems">
              <p>フライイーズ</p>
            </div>
            <div class="dropdownItems">
              <p>Nike By Youでカスタマイズ</p>
            </div>
          </div>

        <div class="col fadeIn">
            <div class="dropdownTop">
              <p>ウエア</p>
            </div>
            <div class="dropdownItems">
              <p>パーカー＆トレーナー</p>
            </div>
            <div class="dropdownItems">
              <p>ジャケット＆ベスト</p>
            </div>
            <div class="dropdownItems">
              <p>ボアジャケット</p>
            </div>
            <div class="dropdownItems">
              <p>パンツ＆タイツ</p>
            </div>
            <div class="dropdownItems">
              <p>ハーフパンツ/ショートパンツ</p>
            </div>
            <div class="dropdownItems">
              <p>スポーツインナー/コンプレッションウエア</p>
            </div>
            <div class="dropdownItems">
              <p>セットアップ</p>
            </div>

            <div class="dropdownTop">
              <p>アクセサリー</p>
            </div>
            <div class="dropdownItems">
              <p>バッグ＆バックパック</p>
            </div>
            <div class="dropdownItems">
              <p>キャップ＆ヘッドウエア</p>
            </div>
            <div class="dropdownItems">
              <p>サングラス</p>
            </div>
            <div class="dropdownItems">
              <p>ソックス</p>
            </div>
        </div>
          <div class="col fadeIn">
            <div class="dropdownTop">
              <p>スポーツ</p>
            </div>
            <div class="dropdownItems">
              <p>ランニング</p>
            </div>
            <div class="dropdownItems">
              <p>バスケットボール</p>
            </div>
            <div class="dropdownItems">
              <p>トレーニング＆ジム</p>
            </div>
            <div class="dropdownItems">
              <p>サッカー/フットボール</p>
            </div>
            <div class="dropdownItems">
              <p>ゴルフ</p>
            </div>
            <div class="dropdownItems">
              <p>テニス</p>
            </div>
            <div class="dropdownItems">
              <p>スケートボード</p>
            </div>
            <div class="dropdownItems">
              <p>ヨガ</p>
            </div>
            <div class="dropdownItems">
              <p>野球/ベースボール</p>
            </div>
            <div class="dropdownTop">
              <p>チームユニフォーム</p>
            </div>
            <div class="dropdownItems">
              <p>NBA</p>
            </div>
            <div class="dropdownItems">
              <p>サッカー/クラブチーム</p>
            </div>
            <div class="dropdownItems">
              <p>サッカー/各国代表ユニフォーム</p>
            </div>
        </div>
        <div class="col fadeIn">
          <div class="dropdownTop">
            <p>ブランド</p>
          </div>
          <div class="dropdownItems">
            <p>Nike Sportswear</p>
          </div>
          <div class="dropdownItems">
            <p>NikeLab</p>
          </div>
          <div class="dropdownItems">
            <p>Nike By You</p>
          </div>
          <div class="dropdownItems">
            <p>Jordan</p>
          </div>
          <div class="dropdownItems">
            <p>ACG</p>
          </div>
          <div class="dropdownItems">
            <p>Apple Watch Nike</p>
          </div>
          <div class="dropdownTop">
            <p>プライス別で見る</p>
          </div>
          <div class="dropdownTop">
            <p>シューズ</p>
          </div>
          <div class="dropdownItems">
            <p>10,000円未満</p>
          </div>
          <div class="dropdownItems">
            <p>10,000円~14,999円</p>
          </div>
          <div class="dropdownItems">
            <p>15,000円以上</p>
          </div>
          <div class="dropdownItems">
            <p>ウエア</p>
          </div>
          <div class="dropdownItems">
            <p>3,000円~5,000円</p>
          </div>
          <div class="dropdownItems">
            <p>5,000円~9,999円</p>
          </div>
          <div class="dropdownItems">
            <p>10,000円~14,999円</p>
          </div>
          <div class="dropdownItems">
            <p>15,000円以上</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ************** women"s section **************** -->
      <div class="conatiner-fluid centering " v-show="women">
        <div class="row row-cols-5 zeroToOne"  style="width: 95%; height: auto; margin-top: 2%;" >
          <div class="col fadeIn">
            <div class="dropdownTop">
              <p>注目のコレクション</p>
            </div>
            <div class="dropdownItems">
              <p>新着商品</p>
            </div>
            <div class="dropdownItems">
              <p>メンバーショップ</p>
            </div>
            <div class="dropdownItems">
              <p>SNKRS</p>
            </div>
            <div class="dropdownItems">
              <p>ベストセラー/人気商品</p>
            </div>
            <div class="dropdownItems">
              <p>冬のおすすめアイテム</p>
            </div>
            <div class="dropdownItems">
              <p>ジョギング</p>
            </div>
            <div class="dropdownItems">
              <p>ヨガコレクション</p>
            </div>
            <div class="dropdownItems">
              <p>おすすめのフリースコレクション</p>
            </div>
            <div class="dropdownItems">
              <p>レデイースエアマックス</p>
            </div>
            <div class="dropdownItems">
              <p>レデイースエアフォース１</p>
            </div>
            <div class="dropdownItems">
              <p>スポーツブラの選び方ガイド</p>
            </div>
            <div class="dropdownItems">
              <p>クリアランスセール</p>
            </div>
          </div>
            <div class="col fadeIn">
              <div class="dropdownTop">
                <p>シューズ</p>
              </div>
              <div class="dropdownItems">
                <p>ライフスタイル</p>
              </div>
              <div class="dropdownItems">
                <p>ランニング</p>
              </div>
              <div class="dropdownItems">
                <p>バスケットボール</p>
              </div>
              <div class="dropdownItems">
                <p>ジョーダン</p>
              </div>
              <div class="dropdownItems">
                <p>ジム＆トレーニング</p>
              </div>
              <div class="dropdownItems">
                <p>サッカー/フットボール</p>
              </div>
              <div class="dropdownItems">
                <p>スケートボード</p>
              </div>
              <div class="dropdownItems">
                <p>ゴルフ</p>
              </div>
              <div class="dropdownItems">
                <p>テニス</p>
              </div>
              <div class="dropdownItems">
                <p>サンダル</p>
              </div>
              <div class="dropdownItems">
                <p>フライイーズ</p>
              </div>
              <div class="dropdownItems">
                <p>Nike By Youでカスタマイズ</p>
              </div>
            </div>

          <div class="col fadeIn">
              <div class="dropdownTop">
                <p>ウエア</p>
              </div>
              <div class="dropdownItems">
                <p>スポーツブラ</p>
              </div>
              <div class="dropdownItems">
                <p>トップス＆Tシャツ</p>
              </div>
              <div class="dropdownItems">
                <p>パーカー＆トレーナー</p>
              </div>
              <div class="dropdownItems">
                <p>ジャケット＆ベスト</p>
              </div>
              <div class="dropdownItems">
                <p>ボアジャケット</p>
              </div>
              <div class="dropdownItems">
                <p>パンツ＆タイツ</p>
              </div>
              <div class="dropdownItems">
                <p>スカート＆ドレス</p>
              </div>
              <div class="dropdownItems">
                <p>ショートパンツ</p>
              </div>
              <div class="dropdownItems">
                <p>ショートパンツ</p>
              </div>
              <div class="dropdownItems">
                <p>スポーツインナー/コンプレッションウエア</p>
              </div>
              <div class="dropdownItems">
                <p>セットアップ</p>
              </div>

              <div class="dropdownTop">
                <p>アクセサリー</p>
              </div>
              <div class="dropdownItems">
                <p>キャップ＆ヘッドウエア</p>
              </div>
              <div class="dropdownItems">
                <p>バッグ＆バックパック</p>
              </div>
              <div class="dropdownItems">
                <p>サングラス</p>
              </div>
              <div class="dropdownItems">
                <p>ソックス</p>
              </div>
          </div>
            <div class="col fadeIn">
              <div class="dropdownTop">
                <p>スポーツ</p>
              </div>
              <div class="dropdownItems">
                <p>ランニング</p>
              </div>
              <div class="dropdownItems">
                <p>トレーニング＆ジム</p>
              </div>
              <div class="dropdownItems">
                <p>ヨガ</p>
              </div>
              <div class="dropdownItems">
                <p>ゴルフ</p>
              </div>
              <div class="dropdownItems">
                <p>テニス</p>
              </div>
              <div class="dropdownItems">
                <p>スケートボード</p>
              </div>
              <div class="dropdownItems">
                <p>バスケットボール</p>
              </div>

              <div class="dropdownItems">
                <p>サッカー/フットボール</p>
              </div>
          </div>
          <div class="col fadeIn">
            <div class="dropdownTop">
              <p>ブランド</p>
            </div>
            <div class="dropdownItems">
              <p>Nike Sportswear</p>
            </div>
            <div class="dropdownItems">
              <p>NikeLab</p>
            </div>
            <div class="dropdownItems">
              <p>Nike By You</p>
            </div>
            <div class="dropdownItems">
              <p>Jordan</p>
            </div>
            <div class="dropdownItems">
              <p>ACG</p>
            </div>
            <div class="dropdownItems">
              <p>Apple Watch Nike</p>
            </div>
            <div class="dropdownTop">
              <p>プライス別で見る</p>
            </div>
            <div class="dropdownTop">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>10,000円未満</p>
            </div>
            <div class="dropdownItems">
              <p>10,000円~14,999円</p>
            </div>
            <div class="dropdownItems">
              <p>15,000円以上</p>
            </div>
            <div class="dropdownItems">
              <p>ウエア</p>
            </div>
            <div class="dropdownItems">
              <p>3,000円~5,000円</p>
            </div>
            <div class="dropdownItems">
              <p>5,000円~9,999円</p>
            </div>
            <div class="dropdownItems">
              <p>10,000円~14,999円</p>
            </div>
            <div class="dropdownItems">
              <p>15,000円以上</p>
            </div>
          </div>
        </div>
      </div>

    <!-- ************** kids"s section **************** -->
    <div class="conatiner-fluid centering " v-show="kids">
      <div class="row row-cols-5 zeroToOne"  style="width: 95%; height: auto; margin-top: 2%;" >
        <div class="col fadeIn">
          <div class="dropdownTop">
            <p>注目のコレクション</p>
          </div>
          <div class="dropdownItems">
            <p>全てのキッズ</p>
          </div>
          <div class="dropdownItems">
            <p>新着商品</p>
          </div>
          <div class="dropdownItems">
            <p>ベストセラー/人気商品</p>
          </div>
          <div class="dropdownItems">
            <p>冬のおすすめアイテム</p>
          </div>
          <div class="dropdownItems">
            <p>おすすめのフリースコレクション</p>
          </div>
          <div class="dropdownItems">
            <p>ランドセル</p>
          </div>
          <div class="dropdownItems">
            <p>スクールアイテム</p>
          </div>
          <div class="dropdownItems">
            <p>親子リンクコーデ</p>
          </div>
          <div class="dropdownItems">
            <p>キッズスリッポン</p>
          </div>
          <div class="dropdownItems">
            <p>キッズエアマックス</p>
          </div>
          <div class="dropdownItems">
            <p>キッズエアフォース１</p>
          </div>
          <div class="dropdownItems">
            <p>クリアランスセール</p>
          </div>
        </div>
          <div class="col fadeIn">
            <div class="dropdownTop">
              <p>シューズ</p>
            </div>
            <div class="dropdownItems">
              <p>ライフスタイル</p>
            </div>
            <div class="dropdownItems">
              <p>ランニング</p>
            </div>
            <div class="dropdownItems">
              <p>サッカー/フットボール</p>
            </div>
            <div class="dropdownItems">
              <p>バスケットボール</p>
            </div>
            <div class="dropdownItems">
              <p>ジョーダン</p>
            </div>
            <div class="dropdownItems">
              <p>サンダル</p>
            </div>
            <div class="dropdownTop">
              <p>アクセサリー</p>
            </div>
            <div class="dropdownItems">
              <p>バッグ＆バックパック</p>
            </div>
            <div class="dropdownItems">
              <p>キャップ＆ヘッドウエア</p>
            </div>
            <div class="dropdownItems">
              <p>ソックス</p>
            </div>
          </div>



        <div class="col fadeIn">
            <div class="dropdownTop">
              <p>ウエア</p>
            </div>
            <div class="dropdownItems">
              <p>トップス＆Tシャツ</p>
            </div>
            <div class="dropdownItems">
              <p>パーカー＆トレーナー</p>
            </div>
            <div class="dropdownItems">
              <p>ジャケット＆ベスト</p>
            </div>
            <div class="dropdownItems">
              <p>パンツ＆タイツ</p>
            </div>
            <div class="dropdownItems">
              <p>ショートパンツ</p>
            </div>
            <div class="dropdownItems">
              <p>ショートパンツ</p>
            </div>
            <div class="dropdownItems">
              <p>ジャージ</p>
            </div>
            <div class="dropdownItems">
              <p>セットアップ</p>
            </div>
            <div class="dropdownItems">
              <p>スポーツブラ</p>
            </div>
            <div class="dropdownItems">
              <p>ドレス/スカート</p>
            </div>
        </div>

        <div class="col fadeIn">
          <div class="dropdownTop">
            <p>性別で見る</p>
          </div>
          <div class="dropdownItems">
            <p>ボーイズ</p>
          </div>
          <div class="dropdownItems">
            <p>ガールズ</p>
          </div>
          <div class="dropdownTop">
            <p>サイズ別で見る</p>
          </div>
          <div class="dropdownTop">
            <p>シューズ</p>
          </div>
          <div class="dropdownItems">
            <p>ベビー（8~16cm）</p>
          </div>
          <div class="dropdownItems">
            <p>リトルキッズ（16.5~22cm）</p>
          </div>
          <div class="dropdownItems">
            <p>ジュニア（22.5~25cm）</p>
          </div>
          <div class="dropdownTop">
            <p>ウエア</p>
          </div>
          <div class="dropdownItems">
            <p>ジュニア（130~160cm）</p>
          </div>
          <div class="dropdownTop">
            <p>サイズガイド</p>
          </div>
        </div>
        <div class="col fadeIn">
          <div class="dropdownTop">
            <p>プライス別で見る</p>
          </div>
          <div class="dropdownItems">
            <p>3,000円未満</p>
          </div>
          <div class="dropdownItems">
            <p>3,000円~5,000円</p>
          </div>
          <div class="dropdownItems">
            <p>5,000円~9,999円</p>
          </div>
          <div class="dropdownItems">
            <p>10,000円~14,999円</p>
          </div>
          <div class="dropdownItems">
            <p>15,000円以上</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'textbar',
    props: ['sort'],
    data: function() {

        if (this.sort == "newrelease") {
            return {
                newrelease: true,
            }
        } else if (this.sort == "men") {
            return {
                men: true
            }

        } else if (this.sort == "women") {
            return {
                women: true
            }

        } else {
            return {
                kids: true,
                mark: 'できてない'
            }
        }

    },
}
</script>

<style lang="css" scoped>
</style>
