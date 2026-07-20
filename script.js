// ১. হোয়াটস‌অ্যাপ বাটন ক্লিক অ্যালার্ট
document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", () => {
        let productName = button.parentElement.querySelector("h3").innerText;
        let whatsappUrl = `https://wa.me/8801700000000?text=Hello,%20I%20want%20to%20order%20this:%20${encodeURIComponent(productName)}`;
        window.open(whatsappUrl, "_blank");
    });
});

// ২. স্ক্রোল টু টপ বাটন
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
