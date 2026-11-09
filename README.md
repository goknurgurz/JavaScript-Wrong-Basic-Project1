Sepetim: JavaScript Hata Ayıklama Projesi

HTML, CSS ve JavaScript ile hazırlanmış mini bir alışveriş sepeti uygulaması. Tasarım hazır, ancak js/app.js dosyasında bilerek bırakılmış hatalar var. Senden bu hataları bulup düzeltmen ve sepeti çalışır hâle getirmen bekleniyor.

Sepetim ürün listesi

Ana sayfa ve ürün listesi

Sepetim sepet özeti

Sepet ve sipariş özeti

🎯 Projenin amacı

Bu çalışma ile şunları pekiştirmen hedefleniyor:

var, let, const kullanımı
Veri türleri (string, number) ve tür dönüşümleri
Operatörler: =, ===, >, >=
find(), filter(), map(), reduce() metotları
DOM seçimi ve dataset kullanımı
Olay dinleyicileri (event listener)
Konsol hata mesajlarını okuma ve hata ayıklama

✨ Uygulama özellikleri
Ürünleri sepete ekleme
Aynı ürünü tekrar eklediğinde adedi artırma
+ ve − butonlarıyla adet değiştirme
Ürünü sepetten silme
Ara toplam, indirim, KDV ve genel toplam hesaplama
Sepet boşken sipariş tamamlamayı engelleme
Mobil uyumlu (responsive) tasarım

📁 Proje yapısı
text
sepetim/
├── index.html              # Sayfa yapısı (hazır)
├── css/
│   └── style.css           # Tasarım (hazır)
├── js/
│   └── app.js              # Üzerinde çalışacağın dosya
├── images/
│   ├── ekran-1.png         # README ekran görüntüsü 1
│   └── ekran-2.png         # README ekran görüntüsü 2
├── GOREV.md                # Yapman gereken görevler ve test senaryoları
├── GOREV-KOD-OKUMA.md      # Kod okuma ve analiz soruları
└── README.md

🚀 Projeyi çalıştırma
Projeyi bilgisayarına indir:
bash
   git clone https://github.com/goknurgurz/JavaScript-Wrong-Basic-Project1.git
Klasörü VS Code ile aç.
html css kismini istersen uzerinden gec fakat JAVASCRIPTI ADIM ADIM YAPMAN ISTIYORUM
index.html dosyasını tarayıcıda aç. İstersen VS Code'da Live Server eklentisini kullanabilirsin.
Tarayıcıda Developer Tools → Console ekranını aç (F12).

Herhangi bir kurulum ya da paket yüklemesi gerekmiyor.

📋 Yapman gerekenler

Uygulamayı hiçbir şeyi değiştirmeden test et ve çalışmayan işlemleri not al.
js/app.js dosyasını satır satır oku.
GOREV-KOD-OKUMA.md dosyasındaki soruları cevapla.
Hataları tek tek bul ve düzelt. Her düzeltmeden sonra sayfayı yenileyip tekrar test et.
GOREV.md dosyasındaki test senaryolarını tamamla.
Projeni kendi GitHub hesabına yükle.

Önemli: Kodu baştan yazma ve çözümü internetten kopyalama. Önce hatayı bulmaya çalış, sonra neden o şekilde düzelttiğini açıklayabilecek hâle gel.

💡 İş kuralları

Kural	Değer
İndirim eşiği	1.000 TL ve üzeri
İndirim oranı	%10
KDV oranı	%20
KDV hesabı	İndirim sonrası tutar × %20
Genel toplam	İndirim sonrası tutar + KDV

✅ Test senaryoları
Test	Beklenen sonuç
Yalnızca Seramik Kupa ekle	Ara toplam 289 TL
Seramik Kupa'yı iki kez ekle	Tek satır, adet 2, ara toplam 578 TL
Günlük Defter + Vanilya Mum ekle	Ara toplam 778 TL, indirim yok
Üç üründen birer tane ekle	Ara toplam 1.067 TL, indirim 106,70 TL
Üç üründen birer tane ekle	KDV 192,06 TL, genel toplam 1.152,36 TL
Bir ürünü sil	Yalnızca seçilen ürün kaldırılır
Sepetteki son ürünü azalt	Boş sepet mesajı görünür
Sepet boşken siparişi tamamla	Uyarı gösterilir, sipariş oluşturulmaz

📤 Teslim
Düzeltilmiş proje dosyaları
GOREV-KOD-OKUMA.md içindeki soruların cevapları
GitHub repo bağlantısı
En az 3 ekran görüntüsü: ürünler, dolu sepet ve indirim uygulanmış sipariş özeti


📝 Not

Bu proje eğitim amaçlı hazırlanmıştır. Kod içindeki hatalar öğrenme sürecinin bir parçası olarak bilerek bırakılmıştır.

# JavaScript-Wrong-Basic-Project1

