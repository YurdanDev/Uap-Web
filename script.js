function penambahan (){
addEventListener('submit', function(event){
    event.preventDefault();
    var kode = document.getElementById('kode').value;
    var barang = document.getElementById('barang').value;
    var harga = document.getElementById('harga').value;
    
    if (kode === '' || barang === '' || harga ==='') {
        alert('Semua field harus diisi!');
    } else {
        alert('Penambahan barang berhasil!\nKode: ' + kode + '\nBarang: ' + barang +'\nHarga: ' + harga);
    }
}

function hasil() {
    var  harga= parseFloat(document.getElementById('').value);
    var hasil =  + ;
    alert('Hasil penjumlahan: ' + hasil);
    document.getElementById('').value = '';
}
