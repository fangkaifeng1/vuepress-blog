import{_ as n,o as s,c as a,a as e}from"./app-rhaCkHXY.js";const o={},t=e(`<p>cookie: 当我们在浏览器中访问网站时，网站可以使用 Cookie 来存储和获取有关用户的信息。Cookie 是存储在用户计算机上的小型文本文件，由网站发送到浏览器，并在浏览器的 Cookie 存储中进行保存。</p><p>Cookie 的主要目的是跟踪和识别用户，以提供个性化的网站体验。它可以存储用户的偏好设置、登录状态、购物车内容等信息。</p><p>以下是 Cookie 的一些重要概念和特点：</p><ol><li><p><strong>name=value</strong>：键值对，设置 Cookie 的名称及相对应的值，都必须是字符串类型,如果值为 Unicode 字符，需要为字符编码。如果值为二进制数据，则需要使用 BASE64 编码。</p></li><li><p><strong>domain</strong>：Cookie 可以与特定的域关联，表示它只能由该域中的网站访问。这是为了保护用户的隐私和安全。</p></li><li><p><strong>path</strong>： 指定 cookie 在哪个路径（路由）下生效，默认是 &#39;/&#39;。如果设置为 /abc，则只有 /abc 下的路由可以访问到该 cookie，如：/abc/read。</p></li><li><p><strong>expires</strong>： 过期时间，在设置的某个时间点后该 cookie 就会失效。一般浏览器的 cookie 都是默认储存的，当关闭浏览器结束这个会话的时候，这个 cookie 也就会被删除</p></li><li><p><strong>secure</strong>：Cookie 可以设置一个安全标志，表示它只能通过安全的 HTTPS 连接进行传输。这有助于防止敏感信息在不安全的网络中被窃取。</p></li><li><p>maxAge :cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器即失效，浏览器也不会以任何形式保存该 cookie 。如果为 0，表示删除该 cookie 。默认为 -1。</p></li><li><p>httpOnly :如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息，但还是能通过 Application 中手动修改 cookie，所以只是在一定程度上可以防止 XSS 攻击，不是绝对的安全</p></li></ol><p>保存cookie值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> dataCookie <span class="token operator">=</span> <span class="token string">&#39;110&#39;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;token&#39;</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> dataCookie<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//获取指定名称的cookie值</span>
    <span class="token comment">// (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；</span>
    <span class="token keyword">var</span> arr <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;(^| )&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;=([^;]*)(;|$)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">unescape</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> cookieData <span class="token operator">=</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//cookie赋值给变量。\`\`\`</span>
<span class="token literal-property property">localStorage和sessionStorage</span><span class="token operator">:</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">javascript
var name = &#39;sessionData&#39;;
var num = 120;
sessionStorage.setItem(name, num);//存储数据
sessionStorage.setItem(&#39;value2&#39;, 119);
let dataAll = sessionStorage.valueOf();//获取全部数据
console.log(dataAll, &#39;获取全部数据&#39;);
var dataSession = sessionStorage.getItem(name);//获取指定键名数据
var dataSession2 = sessionStorage.sessionData;//sessionStorage是js对象，也可以使用key的方式来获取值
console.log(dataSession, dataSession2, &#39;获取指定键名数据&#39;);
sessionStorage.removeItem(name); //删除指定键名数据
console.log(dataAll, &#39;获取全部数据1&#39;);
sessionStorage.clear();//清空缓存数据：localStorage.clear();
console.log(dataAll, &#39;获取全部数据2&#39;);  </span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>

生命周期：
cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效

localStorage：除非被手动清除，否则将会永久保存。

sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。
存放数据大小：cookie：4KB左右
localStorage和sessionStorage：可以保存5MB的信息。
http请求：cookie：每次都会携带在<span class="token constant">HTTP</span>头中，如果使用cookie保存过多数据会带来性能问题
localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信
易用性：cookie：需要程序员自己封装，源生的Cookie接口不友好
localStorage和sessionStorage：源生接口可以接受，亦可再次封装来对Object和Array有更好的支持

应用场景：从安全性来说，因为每次http请求都会携带cookie信息，这样无形中浪费了带宽，所以cookie应该尽可能少的使用，
另外cookie还需要指定作用域，不可以跨域调用，限制比较多。但是用来识别用户登录来说，cookie还是比stprage更好用的。
其他情况下，可以使用storage，就用storage。
storage在存储数据的大小上面秒杀了cookie，现在基本上很少使用cookie了<span class="token punctuation">.</span>
localStorage和sessionStorage唯一的差别一个是永久保存在浏览器里面，一个是关闭网页就清除了信息。localStorage可以用来夸页面传递参数，
sessionStorage用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[t];function l(c,p){return s(),a("div",null,i)}const u=n(o,[["render",l],["__file","cookie、localStorage、sessionStorage.html.vue"]]);export{u as default};
