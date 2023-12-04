document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var modalText = document.getElementById('modal-text');
    var galleryImages = document.querySelectorAll('.produk img');
    var closeBtn = document.getElementById('close-modal');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = image.src;

            var nama = image.nextElementSibling.querySelector('span').textContent.trim();
            var harga = "-"; 
            var jumlah = "-"; 

            modalText.innerHTML = `
                <p style="color: black;">Nama Produk: ${nama}</p>
                <p style="color: black;">Harga Produk: ${harga}</p>
                <p style="color: black;">Jumlah: ${jumlah}</p>
            `;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});