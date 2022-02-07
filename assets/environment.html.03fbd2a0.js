import{_ as r,r as t,o as i,c as s,b as a,d as o,F as u,e,a as l}from"./app.3f8a3d0a.js";const d={},m=a("h1",{id:"classroom-ortam\u0131",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#classroom-ortam\u0131","aria-hidden":"true"},"#"),e(" Classroom ortam\u0131")],-1),c=a("p",null,"Classroom \xE7al\u0131\u015Fma ortam\u0131 ve \xF6zellikleri.",-1),k=a("h2",{id:"giris",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#giris","aria-hidden":"true"},"#"),e(" Giri\u015F")],-1),p=e(`Classroom ortam\u0131 WSL yoluyla Windows \xFCzerinde \xE7al\u0131\u015Fan bir Linux da\u011F\u0131t\u0131m\u0131n\u0131 i\xE7eren iki bile\u015Fenli bir yaz\u0131l\u0131m kolleksiyonudur. Ortamda esas olan, yani s\u0131n\u0131f \xE7al\u0131\u015Fmas\u0131n\u0131 y\xFCr\xFCtt\xFC\u011F\xFCn\xFCz ortam Linux taraf\u0131d\u0131r. Windows taraf\u0131n\u0131n bir i\u015Flevi Linux taraf\u0131n\u0131 desteklemek olmakla beraber \xE7ok \xF6nemli bir i\u015Flevi daha vard\u0131r: \u0130\u015F ak\u0131\u015F\u0131nda g\xF6r\xFClen "kaynak kod d\xFCzenleme" eylemleri (VS Code'un "`),h={href:"https://code.visualstudio.com/docs/remote/remote-overview",target:"_blank",rel:"noopener noreferrer"},_=e("Uzaktan D\xFCzenleme"),y=e('" \xF6zelli\u011Fi sayesinde) '),g=a("strong",null,"d\xFCzenledi\u011Finiz dosya Linux taraf\u0131nda olsa bile",-1),b=e(" daima Windows \xFCzerinde kurulu olan VS Code ile ger\xE7ekle\u015Fir."),f=l('<div class="custom-container warning"><p class="custom-container-title">Uyar\u0131</p><p>VS Code sadece Windows taraf\u0131nda kurulur, Linux taraf\u0131nda VS Code kurulu de\u011Fildir.</p></div><p>Bu dok\xFCmanlarda &quot;<strong>Classroom</strong>&quot; s\xF6zc\xFC\u011F\xFCn\xFC ba\u011Flama g\xF6re de\u011Fi\u015Fen bir ka\xE7 farkl\u0131 terkip i\xE7inde kullan\u0131yoruz. &quot;Classroom ortam\u0131&quot;n\u0131 anlamak i\xE7in a\u015Fa\u011F\u0131da \xF6zetlenen terminolojiye hakim olmam\u0131z gerekiyor.</p><ul><li><p>&quot;<strong>Classroom ortam\u0131</strong>&quot; (veya &quot;<strong>Classroom \xE7al\u0131\u015Fma ortam\u0131</strong>&quot;) terimi &quot;Windows taraf\u0131&quot; ve &quot;Linux taraf\u0131&quot; olarak adland\u0131r\u0131lan iki bile\u015Fenden olu\u015Fan ortam\u0131n b\xFCt\xFCn\xFCn\xFC anlat\u0131yor.</p></li><li><p>&quot;<strong>Windows taraf\u0131</strong>&quot;, s\u0131n\u0131f \xE7al\u0131\u015Fmalar\u0131nda kullan\u0131lmak \xFCzere VS Code ba\u015Fta olmak \xFCzere Windows&#39;a kurulan baz\u0131 yaz\u0131l\u0131mlar\u0131 ve bu taraf\u0131n y\xF6netilmesi (\xF6r. kurulum ve g\xFCncelleme yap\u0131lmas\u0131) amac\u0131yla Windows&#39;a <code>classroom</code> ad\u0131yla kurulan bir komut sat\u0131r\u0131 program\u0131 olan &quot;<strong>Windows Classroom y\xF6neticisi</strong>&quot;ni anlat\u0131yor.</p></li><li><p>&quot;<strong>Linux taraf\u0131</strong>&quot; kurulum sonras\u0131nda Windows \xFCzerinde <code>C:\\Classroom</code> klas\xF6r\xFCnde bulunan ve WSL&#39;de <code>Classroom</code> ad\u0131yla g\xF6r\xFCnen Ubuntu tabanl\u0131 da\u011F\u0131t\u0131m\u0131 ve bu taraf\u0131n y\xF6netilmesi amac\u0131yla Linux&#39;a <code>classroom</code> ad\u0131yla kurulan bir komut sat\u0131r\u0131 program\u0131 olan &quot;<strong>Linux Classroom y\xF6neticisi</strong>&quot;ni anlat\u0131yor.</p></li><li><p>Burada ge\xE7en &quot;da\u011F\u0131t\u0131m&quot; terimi WSL terminolojisindeki anlam\u0131yla (&quot;distribution&quot;) kullan\u0131lm\u0131\u015Ft\u0131r ve ger\xE7ek anlamda bir da\u011F\u0131t\u0131m de\u011Fildir. Terimdeki bu n\xFCans\u0131 unutmamak kayd\u0131yla buna &quot;<strong>Classroom da\u011F\u0131t\u0131m\u0131</strong>&quot; diyoruz. &quot;Classroom da\u011F\u0131t\u0131m\u0131&quot;na kurulum sonras\u0131nda Masa\xFCst\xFCnde &quot;Classroom Terminal&quot; k\u0131sayoluyla veya VS Code \xFCzerinde &quot;Classroom&quot; ad\u0131yla eri\u015Febiliyorsunuz.</p></li><li><p>&quot;Windows taraf\u0131&quot; \xF6ncelikli olmakla birlikte k\u0131smen &quot;Linux taraf\u0131&quot;n\u0131 da y\xF6netebilen &quot;Windows Classroom y\xF6neticisi&quot;ne, terim kar\u0131\u015F\u0131kl\u0131\u011Fa yol a\xE7mayacaksa, k\u0131saca &quot;<strong>Classroom y\xF6neticisi</strong>&quot; diyoruz. Her iki taraf\u0131n y\xF6netici programlar\u0131n\u0131 anlatmak i\xE7in &quot;<strong>Classroom y\xF6neticileri</strong> terimini kullan\u0131yoruz. Classroom y\xF6neticilerinin kullan\u0131m\u0131 <a href="./manager">ilgili dok\xFCmanda</a> \xF6zetlenmi\u015Ftir.</p></li><li><p>Github \xFCzerinde programlama al\u0131\u015Ft\u0131rmalar\u0131 (&quot;assignments&quot;) yay\u0131nlayan ve g\xF6nderdi\u011Finiz \xE7\xF6z\xFCmleri de\u011Ferlendiren s\u0131n\u0131f ortam\u0131. Terimi bu anlamda &quot;<strong>Github Classroom</strong>&quot; bi\xE7iminde kullan\u0131yoruz.</p></li></ul><h2 id="ozellikler" tabindex="-1"><a class="header-anchor" href="#ozellikler" aria-hidden="true">#</a> \xD6zellikler</h2><p>&quot;Classroom ortam\u0131&quot;n\u0131n g\xF6ze \xE7arpabilecek temel \xF6zellikleri a\u015Fa\u011F\u0131da sunulmu\u015Ftur.</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>',6),q=a("li",null,[a("p",null,[e('2 ad\u0131ml\u0131 "idempotent" (tekrar tekrar \xE7al\u0131\u015Ft\u0131r\u0131labilir) kurulum/g\xFCncelleme yapan ve '),a("strong",null,"otomatik yenilenen"),e(' "Classroom y\xF6neticisi"')])],-1),z=a("li",null,[a("p",null,"\xC7ok dilli (\u015Fimdilik \u0130ngilizce ve T\xFCrk\xE7e)")],-1),v=a("li",null,[a("p",null,"Terminal'de tam UTF-8 deste\u011Fi")],-1),C=e("\xD6ntan\u0131ml\u0131 olarak "),w={href:"https://docs.microsoft.com/en-us/windows/wsl/",target:"_blank",rel:"noopener noreferrer"},x=e("WSL1"),W=e(", "),L={href:"https://docs.microsoft.com/en-us/windows/wsl/compare-versions",target:"_blank",rel:"noopener noreferrer"},S=e("WSL2"),T=e(" deste\u011Fi haz\u0131r"),V={href:"https://scoop.sh",target:"_blank",rel:"noopener noreferrer"},G=e("Scoop"),B=e(" ile paket y\xF6netimi"),U={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},F=e("Git"),j=e(" kurulu"),N={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},E=e("VS Code"),H=e(" desteklenen programlama dilleri i\xE7in yararl\u0131 eklentilerle ve Github Classroom entegrasyonuyla kurulu"),I={href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701",target:"_blank",rel:"noopener noreferrer"},P=e("Windows Terminal"),D=e(" kurulu (Windows 10 i\xE7in; Windows 11'de zaten kurulu geliyor)"),J=e("Windows Terminal'de "),K={href:"https://github.com/microsoft/cascadia-code",target:"_blank",rel:"noopener noreferrer"},M=e("Cascadia Font"),O=e(" ayarl\u0131"),Q=a("li",null,[a("p",null,"\u0130ste\u011Fe ba\u011Fl\u0131 ilave kurulum ve yap\u0131land\u0131rmalar\u0131 ger\xE7ekle\u015Ftiren provizyonlama betikleri")],-1),R=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"Uyar\u0131"),a("p",null,[e("Windows taraf\u0131nda kurulan Git yaz\u0131l\u0131m\u0131n\u0131 Linux taraf\u0131nda da haz\u0131r kurulu olan Git yaz\u0131l\u0131m\u0131yla kar\u0131\u015Ft\u0131rmay\u0131n. Kaynak kod d\xFCzenlemeleri (\xF6nerilen kullan\u0131m senaryosunda) Windows taraf\u0131ndaki VS Code ile ger\xE7ekle\u015Fti\u011Finden, pratikte kullanaca\u011F\u0131n\u0131z Git "),a("strong",null,"Windows taraf\u0131na kurulan"),e(" ve VS Code'da etkin olan Git yaz\u0131l\u0131m\u0131d\u0131r.")])],-1),A=a("h3",{id:"linux",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),e(" Linux")],-1),X=a("li",null,[a("p",null,[e('2 ad\u0131ml\u0131 "idempotent" (tekrar tekrar \xE7al\u0131\u015Ft\u0131r\u0131labilir) kurulum/g\xFCncelleme yapan ve '),a("strong",null,"otomatik yenilenen"),e(' "Classroom y\xF6neticisi"')])],-1),Y={href:"https://cloud-images.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},Z=e("Ubuntu Bulutundaki"),$=e(" en g\xFCncel Ubuntu WSL imaj\u0131na dayal\u0131 taban da\u011F\u0131t\u0131m"),aa=l("<li><p>Sistem geneli haz\u0131r yap\u0131land\u0131r\u0131lm\u0131\u015F Tmux \xFCzerinde Bash kabu\u011Fu (&quot;login shell&quot; Tmux)</p></li><li><p>\xD6ntan\u0131ml\u0131 olarak kurulan ve yap\u0131land\u0131r\u0131lan programlama dilleri ve \xE7al\u0131\u015Fma zaman\u0131 ortamlar\u0131</p><ul><li><p>C (GCC ve TCC)</p></li><li><p>Python (Python 3 ve Pip3 paket y\xF6neticisi)</p></li><li><p>Ruby (Bundler haz\u0131r)</p></li><li><p>Javascript (Node.js 17.x s\xFCr\xFCm\xFC)</p></li><li><p>Typescript</p></li><li><p>SQLite3 veritaban\u0131 (LiteCLI haz\u0131r)</p></li></ul></li><li><p>\u0130ste\u011Fe ba\u011Fl\u0131 ilave kurulum ve yap\u0131land\u0131rmalar ger\xE7ekle\u015Ftiren provizyonlama betikleri</p></li><li><p>S\u0131n\u0131f \xE7al\u0131\u015Fmalar\u0131nda ve &quot;Github workflow&quot;larda kullan\u0131labilecek LFH (&quot;Local File Hierarchy&quot;) standard\u0131na uygun g\xF6rev betikleri</p></li>",4);function ea(na,oa){const n=t("ExternalLinkIcon");return i(),s(u,null,[m,c,k,a("p",null,[p,a("a",h,[_,o(n)]),y,g,b]),f,a("ul",null,[q,z,v,a("li",null,[a("p",null,[C,a("a",w,[x,o(n)]),W,a("a",L,[S,o(n)]),T])]),a("li",null,[a("p",null,[a("a",V,[G,o(n)]),B])]),a("li",null,[a("p",null,[a("a",U,[F,o(n)]),j])]),a("li",null,[a("p",null,[a("a",N,[E,o(n)]),H])]),a("li",null,[a("p",null,[a("a",I,[P,o(n)]),D])]),a("li",null,[a("p",null,[J,a("a",K,[M,o(n)]),O])]),Q]),R,A,a("ul",null,[X,a("li",null,[a("p",null,[a("a",Y,[Z,o(n)]),$])]),aa])],64)}var ra=r(d,[["render",ea]]);export{ra as default};
