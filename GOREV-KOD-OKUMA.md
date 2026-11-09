# KOD OKUMA DOSYASI
## Sepetim — JavaScript hata ayıklama çalışması

Bu dosyayı kodları düzeltmeden önce doldur. Cevapları doğrudan bu Markdown dosyasına yazabilirsin. Amacımız kodu ezberlemek değil, okuyup ne yaptığını anlayabilmek.

### 1. Genel kod akışı

1. `products` dizisinin görevi ne? İçindeki her ürün hangi bilgilere sahip?
2. `cart` değişkeni başlangıçta neden boş bir dizi?
3. `TAX_RATE`, `DISCOUNT_LIMIT` ve `DISCOUNT_RATE` neden `const` ile tanımlanmış olabilir?
4. `querySelector()` ne yapar? Örneğin `subtotalElement` hangi HTML elemanını seçiyor?
5. `renderCart()` fonksiyonu uygulamada hangi işleri yapıyor?

### 2. Fonksiyonları anlama

6. `formatPrice()` fonksiyonuna `289` gönderilirse ne yapmasını bekleriz?
7. `showToast()` fonksiyonu hangi iki işlemi gerçekleştiriyor?
8. `addToCart()` içinde ürün önce nereden bulunuyor, daha sonra sepet içinde olup olmadığı nasıl kontrol ediliyor?
9. `changeQuantity()` fonksiyonuna `-1` gönderilirse ne olması gerekiyor?
10. `removeFromCart()` neden `filter()` kullanıyor?
11. `calculateTotals()` hangi dört değeri hesaplayıp geri döndürüyor?
12. `renderCart()` içinde `map()` neden kullanılmış?

### 3. Hata avı

Aşağıdaki bölümlerde sorun olabilecek satırları bul. Her biri için şu üç şeyi yaz:

- Sorunlu satır veya bölüm hangisi?
- Neden hatalı?
- Nasıl düzelttin?

| No | İncelenecek bölüm | Bulduğun sorun / açıklaman |
|---|---|---|
| 1 | Ürün ekleme butonlarının event listener bölümü | |
| 2 | `products.find()` kullanılan bölüm | |
| 3 | Sepetteki ürünün adetini artıran bölüm | |
| 4 | `calculateTotals()` içindeki `reduce()` işlemi | |
| 5 | Toplam ürün adedini hesaplayan bölüm | |
| 6 | KDV hesaplama satırı | |
| 7 | Sepet boş mu kontrolü | |

### 4. Veri türleri

13. `products` dizisinde fiyatlardan biri neden diğerlerinden farklı davranabilir?
14. `"289" + 1` işleminin sonucu ne olur? Peki `289 + 1`?
15. `typeof` operatörünü kullanarak ürün fiyatlarının türlerini nasıl kontrol edersin?
16. `quantity` değerinin sayı olarak kalması neden önemli?

### 5. Kendi testlerin

Aşağıdaki işlemleri uygulayıp gerçek sonucu yaz:

| İşlem | Uygulamanın verdiği sonuç | Beklenen sonuç |
|---|---|---|
| Kupa ekle | | |
| Kupa'yı tekrar ekle | | |
| Adedi azalt | | |
| Ürünü sil | | |
| 1.000 TL üzeri sepet oluştur | | |
| Boş sepetle siparişi tamamla | | |

### 6. Kısa değerlendirme

17. En çok zorlandığın hata hangisiydi? Neden?
18. Console ekranında gördüğün bir hata mesajını kendi cümlelerinle açıkla.
19. Bir sonraki benzer hatayı kendin bulabilmek için hangi adımları izlersin?
20. Projeye kendi eklediğin bir özellik var mı? Varsa nasıl çalışıyor?

> Not: Bu dosyanın cevaplarını kendi cümlelerinle yaz. Sadece düzeltilmiş kodu teslim etmek, kodu anladığını göstermeye yetmez.
