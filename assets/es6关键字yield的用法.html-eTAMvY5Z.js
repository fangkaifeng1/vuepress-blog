import{_ as n,o as s,c as a,a as t}from"./app-rhaCkHXY.js";const e={},p=t(`<p>在ES6（ECMAScript 2015）中， yield 是一个关键字，用于定义生成器函数（Generator Function）内部的暂停点。它允许在生成器函数中暂停执行，并返回一个产出的值。</p><p>生成器函数是一种特殊类型的函数，可以通过 function* 语法来声明。生成器函数内部使用 yield 关键字来指定暂停点，当生成器函数调用 next() 方法时，它会从上一个 yield 语句的位置继续执行。</p><p>以下是一个简单的示例，展示了 yield 的用法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">myGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">myGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个生成器函数 myGenerator ，它包含了三个 yield 语句。当我们调用 myGenerator() 创建一个生成器对象时，它会返回一个迭代器（Iterator）对象。 通过调用迭代器对象的 next() 方法，我们可以依次获取生成器函数中的每个 yield 语句的值。每次调用 next() 方法，生成器函数会从上一个 yield 语句的位置继续执行，直到遇到下一个 yield 语句或函数结束。 yield 关键字的主要作用是将生成器函数的执行状态暂停，并将一个值作为 next() 方法的返回结果。这使得生成器函数具有可暂停和可恢复执行的能力，可以用于实现惰性计算、异步操作和迭代器等功能。 需要注意的是， yield 关键字只能在生成器函数内部使用，不能在普通函数或箭头函数中使用。</p>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","es6关键字yield的用法.html.vue"]]);export{k as default};
