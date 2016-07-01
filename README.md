# bemの書き方

- Block
- Element
- Modifier

から成る。

### Block
モジュールの最小単位　BEMで起点となる

### Element
Block内を構成するもの

### Modifier
BlockまたはElementの状態を表すもの

[例:html]
```
<div class="box">
  <div class="box__items">
    <div class="box__item">
      aaaaaaaaa
    </div>
    <div class="box__item box__item--font-size_big">
      bbbbbbbbb
    </div>
    <div class="box__item box__item--font-size_small">
      ccccccccc
    </div>
  </div>
</div>

```
[例:css]
```
.Block{}

.Block--Modifier_value{}

.Block__Element{}

.Block__Element--Modifier_value{}

.Block__Element{}__Element{} //× Elementの入れ子はしない

```

- BlockとElementは「__」でつなぐ
- BlockとModifier 又は ElementとModifier「--」でつなぐ
- Modifierはkeyとvalueから成る。keyとvalueは「_」でつなぐ
- 単語と単語の間は「-」でつなぐ
- Block__Element__Elementのように、Elementの構造（親子関係や兄弟関係など）までは表現しない。
- シングルクラス = HTMLの各要素にクラスは一つだけで良い。そのかわりcssの記述は増えるのとscssのextendを使わないと厳しい
- マルチクラス = HTMLの各要素にクラスを複数つけていくのでhtmlの記述は増えるが、シングルより小回りが利くのと大規模、大人数で運用するときは向いている。今回はマルチで説明する。

[例:html]
```
    <!-- alert -->
    <section class="mod-section">
      <h2 class="mod-section__title">module1</h2>
      <div class="alert alert--state_success">成功</div>
      <div class="alert alert--state_warning">危険</div>
      <div class="alert alert--state_error">失敗</div>
      <div class="alert alert--state_info">お知らせ</div>
    </section>
    <!-- box -->
    <section class="mod-section">
      <h2 class="mod-section__title">module2</h2>
      <div class="box clearfix">
        <div class="box__pic">PIC</div>
        <div class="box__text">
          ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
        </div>
      </div>
      <div class="box clearfix">
        <div class="box__pic box__pic--pos_reverse">PIC</div>
        <div class="box__text box__text--pos_reverse">
          ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
        </div>
      </div>
      <div class="box">
        <div class="box__pic box__pic--pos_center">PIC</div>
        <div class="box__text box__text--pos_center">
          ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
        </div>
      </div>
    </section>
    <!-- ttl -->
    <section class="mod-section">
      <h2 class="mod-section__title">module3</h2>
      <div class="ttl">
        <h3 class="ttl__text">成功</h3>
        <a href="#" class="ttl__btn">ボタン</a>
      </div>
    </section>
    <!-- column -->
    <section class="mod-section">
      <h2 class="mod-section__title">module4</h2>
      <div class="column">
        <h1 class="column__title">title</h1>
        <div class="column__body">
          <p class="column__p">
            paraparaprara
          </p>
          <p class="column__p">
            paraparaprara
          </p>
        </div>
      </div>
    </section>

```
[例:scss]
```
/* ------------------------
alert
------------------------ */

.alert{
  border: 2px solid #333;
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  font-weight: bold;
  @include fs(14);
  color: #000;
  margin: 0 0 20px 0;

  // 成功
  #{&}--state_success{
    border-color: #494;
    background-color: rgba(68,153,68,0.3);
  }

  // 危険
  #{&}--state_warning{
    border-color: #DD0;
    background-color: rgba(221,221,0,0.3);
  }

  // 失敗
  #{&}--state_error{
    border-color: #C44;
    background-color: rgba(204,68,68,0.3);
  }

  // お知らせ
  #{&}--state_info{
    border-color: #48C;
    background-color: rgba(68,136,153,0.3);
  }

}


/* ------------------------
box
------------------------ */

// 写真右
.box{
  margin: 0 0 30px 0;

  #{&}__text{
    @include fs(14);
    margin: 0 0 0 130px;
  }
  #{&}__pic{
    width:100px;
    height: 100px;
    background: #000;
    float: left;
    font-size:16px;
    text-align: center;
    line-height:100px;
    color: #fff;
  }

   // 写真左
  #{&}__text--pos_reverse{
    margin: 0 130px 0 0;
  }
  #{&}__pic--pos_reverse{
    float: right;
  }

  // 中央寄せ
  #{&}__text--pos_center{
    margin: 0 0 0 0;
  }
  #{&}__pic--pos_center{
    float: none;
    margin: 0 auto 30px;
  }
}

/* -----------------------
ttl
------------------------ */
.ttl{
  border-left:2px solid #f00;
  border-top:1px solid #ccc;
  overflow: hidden;
  padding:7px;
    #{&}__text {
      @include fs(16);
      font-weight:bold;
      display:inline-block;
      float: left;
     }
    #{&}__btn {
      @include fs(14);
      display:inline-block;
      float:right;
      padding: 4px;
      border:2px solid #444;
      background: #ccc;
    }
}

/* -----------------------
column
------------------------ */

.column{
  border:1px solid #555;
  border-radius:4px;
  padding:7px;
  #{&}__title{
    @include fs(15);
    font-weight:bold;
    padding: 0 0 10px 0;
    margin: 0 0 10px 0;
    border-bottom: 1px solid #bbb;
  }
  #{&}__body{
    @include fs(13);
  }

  #{&}__p{
    margin: 0 0 5px 0;
  }

}

```

### 参考
- <a href="http://blog.ruedap.com/2013/10/29/block-element-modifier" target="_blank">BEMという命名規則とSass 3.3の新しい記法</a>
- <a href="https://app.codegrid.net/entry/bem-2" target="_blank">知っておきたいHTMLテンプレート設計法
第5回 BEMを用いた設計 1</a>
- <a href="https://app.codegrid.net/entry/bem-basic-2" target="_blank">BEMによるフロントエンドの設計
第2回 実装のポイント 前編</a>
- <a href="http://tsmd.hateblo.jp/entry/2013/12/12/004059" target="_blank">実践 めんどうくさくない BEM</a>
- <a href="https://html5experts.jp/kosei27/3297/" target="_blank">Sass 3.3で追加された「&」の新機能と@at-rootまとめ解説</a>
- <a href="http://www.adventar.org/calendars/61" target="_blank">BEM Advent Calendar 2013</a>
- <a href="https://tech.recruit-mp.co.jp/front-end/architecture-bootstrap-bem/" target="_blank">Bootstrap と BEM を組み合わせた CSS 設計パターンについて考える</a>

