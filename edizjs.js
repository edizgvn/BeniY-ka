function hesapla() {
    let toplam = 0;
  
    const disYikama = document.querySelector('input[name="disYikama"]:checked');
    const icDisYikama = document.querySelector('input[name="icDisYikama"]:checked');
    const detayliTemizlik = document.querySelectorAll('input[name="detayli"]:checked');
    const odemeYontemi = document.querySelector('input[name="odeme"]:checked');
  
    if (disYikama) toplam += parseFloat(disYikama.value);
    if (icDisYikama) toplam += parseFloat(icDisYikama.value);
    detayliTemizlik.forEach(item => toplam += parseFloat(item.value));
  
    if (odemeYontemi) {
      const odemeDegeri = parseFloat(odemeYontemi.value);
      toplam = odemeDegeri < 0 ? toplam + odemeDegeri : toplam * (1 + odemeDegeri);
    }
  
    document.getElementById("totalAmount").innerText = `Toplam Ödenmesi Gereken Tutar: ${toplam.toFixed(2)} TL`;
  }
  