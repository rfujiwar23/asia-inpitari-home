var vm = new Vue({
  el: "#about",
  data: {
    characteristics: [
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        titleText: '週2回の集中ケアマスク',
        bodyText: `サロンメニュー「アジアインピタリトリートメント」
        専用のご自宅用集中ケアマスクです。
        週2回にご使用いただくことで、最大4週間の効果の持続を実感できます。`,
        backgroundColor: "red",
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        titleText: 'サロンケアと同一成分',
        bodyText: `サロンメニュー「アジアインピタリトリートメント」
        と同じ成分で構成されている、最強の1ステップトリートメントです。`,
        backgroundColor: "orange",
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        titleText: 'サロンケアの持続',
        bodyText: `サロンケアで瞬間吸着させた
        補修成分と保湿成分を補いながら、
        インカラミ効果と手触りの持続をサポートします。`,
        backgroundColor: "red",
      },
    ]
  }
});

var vm = new Vue({
  el: "#steps",
  data: {
    steps2use: [
      {
        id: 1,
        image: 'assets/images/tokio-home_001.png',
        bodyText: `シャンプーの後に塗布します。このときに、水気はしっかりめに切ります。`,
        backgroundColor: "orange",
      },
      {
        id: 2,
        image: 'assets/images/tokio-home_002.png',
        bodyText: `手のひらの100円玉程の大きさを出します。`,
        backgroundColor: "sky",
      },
      {
        id: 3,
        image: 'assets/images/tokio-home_003.png',
        bodyText: `手のひらの上で、しっかりとクリームを伸ばします。`,
        backgroundColor: "orange",
      },
      {
        id: 4,
        image: 'assets/images/tokio-home_004.png',
        bodyText: `全体の、中間から毛先にかけて塗布します。`,
        backgroundColor: "sky",
      },
    ]
  }
});
