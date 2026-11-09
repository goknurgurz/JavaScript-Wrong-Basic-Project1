# PROJE GÖREVİ — SEPETİM
## Hatalı kodları bul, alışveriş sepetini çalışır hâle getir

Bu projede senden hazır bir uygulamayı yalnızca çalıştırman değil, içindeki sorunları araştırıp çözmen bekleniyor. HTML ve CSS tasarımı hazır. JavaScript dosyasında ise bilerek bırakılmış hatalar bulunuyor.

**Önemli:** Çözümü internetten veya başka birinden kopyalama. Önce kodu oku, sorunun nerede olduğunu tahmin et, sonra küçük değişikliklerle test et. Her şeyi baştan yazma.

## Projenin amacı

Kullanıcı ürünleri sepete ekleyebilmeli, ürün adetlerini artırıp azaltabilmeli, ürün silebilmeli ve sipariş tutarını görebilmeli.

### Yapman gerekenler

1. Proje klasörünü bilgisayarına indir ve VS Code ile aç.
2. `index.html` dosyasını tarayıcıda çalıştır. İstersen VS Code Live Server kullan.
3. Tarayıcıda Developer Tools / Console ekranını aç.
4. Önce uygulamayı hiçbir kodu değiştirmeden test et. Hangi işlemlerin çalışmadığını not al.
5. `js/app.js` dosyasını satır satır incele. `GOREV-KOD-OKUMA.md` dosyasındaki soruları cevapla.
6. Bulduğun hataları tek tek düzelt. Her düzeltmeden sonra sayfayı yenile ve tekrar dene.
7. Uygulamanın bütün test senaryolarını tamamla.
8. Son hâlini GitHub reposuna yükle.

## Uygulamanın sonunda çalışması gereken özellikler

- Üç ürünün her biri sepete eklenebilmeli.
- Aynı ürünü tekrar eklemek yeni satır oluşturmamalı; ürün adedi artmalı.
- Ürün adedi `+` ve `−` butonlarıyla değiştirilebilmeli.
- Adet sıfıra indiğinde ürün sepetten kaldırılmalı.
- `Sil` butonu ilgili ürünü kaldırmalı.
- Sepetteki toplam ürün adedi hem üst menüde hem sepet başlığında doğru görünmeli.
- Ara toplam doğru hesaplanmalı.
- 1.000 TL ve üzeri ara toplamda %10 indirim uygulanmalı.
- KDV, indirim düşüldükten sonraki tutar üzerinden %20 hesaplanmalı.
- Genel toplam doğru görünmeli.
- Sepet boşken sipariş tamamlanamamalı.
- Sepet boşaltıldığında boş sepet mesajı geri gelmeli.

## İş kuralları

- İndirim eşiği: 1.000 TL
- İndirim oranı: %10
- KDV oranı: %20
- KDV hesaplama yöntemi: İndirim sonrası tutar × %20
- Genel toplam: İndirim sonrası tutar + KDV

## Test senaryoları

| Test | Beklenen sonuç |
|---|---|
| Yalnızca Seramik Kupa ekle | Ara toplam 289 TL |
| Seramik Kupa'yı iki kez ekle | Tek satır, adet 2, ara toplam 578 TL |
| Günlük Defter + Vanilya Mum ekle | Ara toplam 778 TL, indirim yok |
| Üç üründen birer tane ekle | Ara toplam 1.067 TL, indirim 106,70 TL |
| Üç üründen birer tane ekle | KDV 192,06 TL, genel toplam 1.152,36 TL |
| Bir ürünü sil | Yalnızca seçilen ürün kaldırılır |
| Sepetteki son ürünü azalt | Boş sepet mesajı görünür |
| Sepet boşken siparişi tamamla | Uyarı gösterilir, sipariş oluşturulmaz |

## İpuçları

- `data-add`, `data-id` ve `data-action` özelliklerinin HTML ile JavaScript arasında nasıl eşleştiğini kontrol et.
- `find()` bir koşula göre eleman arar. Karşılaştırma yapmakla değer atamak aynı şey değildir.
- `price` değerinin veri türünü kontrol et. Sayısal işlem yaparken metin ve sayı farkına dikkat et.
- `reduce()` ile toplam hesaplarken başlangıç değerinin türünü incele.
- Sepet sayısı ile toplam ürün adedinin aynı şey olup olmadığını düşün.
- `=` atama, `===` karşılaştırma için kullanılır.
- KDV oranı yüzde 20 ise bunu matematiksel olarak nasıl ifade edeceğini düşün.
- Tarayıcı Console ekranındaki ilk hata mesajını oku. Bir hata başka kodların çalışmasını da engelleyebilir.

## Teslim etmen gerekenler

- Düzeltilmiş proje dosyaları
- `GOREV-KOD-OKUMA.md` içindeki soruların cevapları
- GitHub repo bağlantısı
- En az 3 ekran görüntüsü: ürünler, dolu sepet ve indirim uygulanmış sipariş özeti

**Kendini kontrol et:** Sadece uygulamanın çalışması yeterli değil. Yaptığın düzeltmeleri neden yaptığını açıklayabilmelisin.
