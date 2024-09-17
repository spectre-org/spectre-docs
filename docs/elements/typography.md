---
title: Typography
description: 
order: 1
---

# Typography

Typography sets default styles for headings, paragraphs, semantic text, blockquote and lists elements.

## Headings

<div class="vp-raw docs-demo columns">
  <div class="column col-12">
    <h1>H1 Heading <small class="label">40px</small></h1>
  </div>
  <div class="column col-12">
    <h2>H2 Heading <small class="label">32px</small></h2>
  </div>
  <div class="column col-12">
    <h3>H3 Heading <small class="label">28px</small></h3>
  </div>
  <div class="column col-12">
    <h4>H4 Heading <small class="label">24px</small></h4>
  </div>
  <div class="column col-12">
    <h5>H5 Heading <small class="label">20px</small></h5>
  </div>
  <div class="column col-12">
    <h6>H6 Heading <small class="label">16px</small></h6>
  </div>
</div>

```html
<h1>H1 Heading</h1>
<h1>H1 Heading <small class="label">40px</small></h1>
<span class="h1">H1 Heading</span>
```

## Paragraphs

Lorem ipsum dolor sit amet, consectetur [adipiscing elit](#typography). Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.

Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.

```html
<p>Lorem ipsum dolor sit amet, ...</p>
<p>...</p>
```

## Semantic elements

<table class="table">
  <tbody>
      <tr>
        <td><code class="ml-2">abbr</code></td>
        <td><abbr title="Internationalization">I18N</abbr></td>
      </tr>
      <tr>
        <td>
          <code class="ml-2">b</code>
          <code class="ml-2">strong</code>
        </td>
        <td><strong>Bold</strong></td>
      </tr>
      <tr>
        <td><code class="ml-2">cite</code></td>
        <td><cite>Citation</cite></td>
      </tr>
      <tr>
        <td><code class="ml-2">em</code></td>
        <td><em>Emphasis</em></td>
      </tr>
      <tr>
        <td><code class="ml-2">code</code></td>
        <td><code>Hello World!</code></td>
      </tr>
      <tr>
        <td><code class="ml-2">del</code></td>
        <td><del>Deleted</del></td>
      </tr>
      <tr>
        <td><code class="ml-2">i</code></td>
        <td><i>Italic</i></td>
      </tr>
      <tr>
        <td><code class="ml-2">ins</code></td>
        <td><ins>Inserted</ins></td>
      </tr>
      <tr>
        <td><code class="ml-2">kbd</code></td>
        <td><kbd>Ctrl + S</kbd></td>
      </tr>
      <tr>
        <td><code class="ml-2">mark</code></td>
        <td><mark>Highlighted</mark></td>
      </tr>
      <tr>
        <td><code class="ml-2">ruby</code></td>
        <td><ruby>漢 <rt>kan</rt>字 <rt>ji</rt> </ruby></td>
      </tr>
      <tr>
        <td><code class="ml-2">s</code></td>
        <td><s>Strikethrough</s></td>
      </tr>
      <tr>
        <td><code class="ml-2">samp</code></td>
        <td><samp>Sample</samp></td>
      </tr>
      <tr>
        <td><code class="ml-2">sub</code></td>
        <td>Text <sub>Subscripted</sub></td>
      </tr>
      <tr>
        <td><code class="ml-2">sup</code></td>
        <td>Text <sup>Superscripted</sup></td>
      </tr>
      <tr>
        <td><code class="ml-2">time</code></td>
        <td><time>20:00</time></td>
      </tr>
      <tr>
        <td><code class="ml-2">u</code></td>
        <td><u>Underline</u></td>
      </tr>
      <tr>
        <td><code class="ml-2">var</code></td>
        <td><span><var>x</var> = <var>y</var> + 2</span></td>
      </tr>
  </tbody>
</table>


## Blockquote

> The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.
> 
> <cite>Bill Gates</cite> 

```html
<blockquote>
  <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. </p>
  <cite>Bill Gates</cite>
</blockquote>
```

## Lists

<div class="vp-raw docs-demo columns">
  <div class="column col-4 col-xs-12">
    <ul class="list">
      <li>List item 1</li>
      <li>List item 2
        <ul>
          <li>List item 2.1 which wraps over several lines</li>
          <li>List item 2.2 which wraps over several lines</li>
          <li>List item 2.3 which wraps over several lines</li>
        </ul>
      </li>
      <li>List item 3</li>
    </ul>
  </div>
  <div class="column col-4 col-xs-12">
    <ol class="list">
      <li>List item 1</li>
      <li>List item 2
        <ol>
          <li>List item 2.1 which wraps over several lines</li>
          <li>List item 2.2 which wraps over several lines</li>
          <li>List item 2.3 which wraps over several lines</li>
        </ol>
      </li>
      <li>List item 3</li>
    </ol>
  </div>
  <div class="column col-4 col-xs-12">
    <dl class="list">
      <dt>Description list term 1</dt>
      <dd>Description list description 1 which wraps over several lines</dd>
      <dt>Description list term 2</dt>
      <dd>Description list description 2 which wraps over several lines</dd>
      <dt>Description list term 3</dt>
      <dd>Description list description 3 which wraps over several lines</dd>
    </dl>
  </div>
</div>

```html
<!-- unordered list -->
<ul>
  <li>list item 1</li>
  <li>list item 2
    <ul>
      <li>list item 2.1</li>
      <li>list item 2.2</li>
      <li>list item 2.3</li>
    </ul>
  </li>
  <li>list item 3</li>
</ul>

<!-- description list -->
<dl>
  <dt>description list term</dt>
  <dd>description list description</dd>
</dl>
```

## Fonts

Spectre sets the most common and best `font-family` for each OS with fallback support in old systems.

```scss
// Western typography targeted
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;

// Monospace typography targeted
font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace;
```

### East Asian font optimizations


There are also fonts targeted to East Asian typography.

```scss
// Chinese (lang="zh" and lang="zh-Hans") targeted
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif;

// Chinese (lang="zh-Hant") targeted
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Hiragino Sans CNS", "Microsoft JhengHei", "Helvetica Neue", sans-serif;

// Japanese (lang="ja") targeted
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, "Helvetica Neue", sans-serif;

// Korean (lang="ko") targeted
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", "Helvetica Neue", sans-serif;

```


<div class="vp-raw docs-demo columns">
  <div class="column">
    <blockquote class="h5"><small class="lang-zh-hans">你好</small>, <small class="lang-ja">こんにちは</small>, <small class="lang-ko">안녕하세요</small></blockquote>
    <p class="h6">Chinese (Simplified)</p>
    <blockquote class="lang-zh-hans">革命不是请客吃饭，不是做文章，不是绘画绣花，不能那样雅致，那样从容不迫，“文质彬彬”，那样“温良恭俭让”。革命就是暴动，是一个阶级推翻一个阶级的暴烈的行动。</blockquote>
    <p class="h6">Chinese (Tranditional)</p>
    <blockquote class="lang-zh-hant">山不在高，有仙則名；水不在深，有龍則靈。斯是陋室，惟吾德馨。苔痕上階綠，草色入簾青；談笑有鴻儒，往來無白丁。可以調素琴，閱金經。無絲竹之亂耳，無案牘之勞形。南陽諸葛廬，西蜀子雲亭。孔子云：「何陋之有？」</blockquote>
    <p class="h6">Japanese</p>
    <blockquote class="lang-ja">祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。おごれる人も久しからず。ただ春の夜の夢のごとし。たけき者も遂にはほろびぬ、ひとへ‌​に風の前の塵に同じ。</blockquote>
    <p class="h6">Korean</p>
    <blockquote class="lang-ko">나라말이 중국과 달라, 한문・한자와 서로 통하지 아니하므로, 어리석은 백성들이 말하고자 하는 바가 있어도, 끝내 제 뜻을 펴지 못하는 사람이 많다. 내가 이를 불쌍히 여겨, 새로 스물 여덟 글자를 만드니, 사람마다 하여금 쉽게 익혀, 날마다 씀에 편하게 하고자 할 따름이다.</blockquote>
  </div>
</div>

Add the `lang` attribute to the `<html>` element or use the class `lang-zh`, `lang-zh-hans`, `lang-zh-hant`, `lang-ja` or `lang-ko` to have better Asian CJK (Chinese, Japanese and Korean) font support.

```html
<html lang="zh-Hans">……</html>

<p class="lang-zh-hans">革命不是请客吃饭，不是做文章……</p>
<p class="lang-ja">祇園精舎の鐘の声、諸行無常の響きあり……</p>
<p class="lang-ko">나라말이 중국과 달라, 한문・한자와 서로 통하지 아니하므로……</p>
```

And you can use the `lang-cjk` class or the `lang` attribute to add spacing between underlines and strike-through text for better Chinese and Japanese readability.

<div class="vp-raw docs-demo columns">
  <div class="column">
    <p lang="ja">
      <u>祇園</u><u>精舎</u>の鐘の声、諸行無常の響きあり。
    </p>
    <p lang="ja">
      <del>祇園</del><del>精舎</del>の鐘の声、諸行無常の響きあり。
    </p>
  </div>
</div>

```html
<p class="lang-cjk">
  <u>祇園</u><u>精舎</u>の鐘の声、諸行無常の響きあり。……
</p>
<p lang="ja">
  <del>祇園</del><del>精舎</del>の鐘の声、諸行無常の響きあり。……
</p>
```
