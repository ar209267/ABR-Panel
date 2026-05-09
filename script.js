// Navigation System
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update sidebar active class
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });
}

// Sidebar Toggle for Mobile
function toggleSidebar() {
    let sb = document.getElementById('sidebar');
    sb.style.display = sb.style.display === 'block' ? 'none' : 'block';
}

// Calculate Price Logic
function calculateCharge() {
    const qty = document.getElementById('qty').value;
    const rate = 0.0012; // Example: $1.20 per 1000
    const total = qty * rate;
    document.getElementById('totalCharge').innerText = '$' + total.toFixed(4);
}

// Handle Payment Submission
function handlePayment(event) {
    event.preventDefault();
    alert("আপনার পেমেন্ট রিকোয়েস্টটি এডমিনের (Atiq) কাছে পাঠানো হয়েছে। যাচাই শেষে ব্যালেন্স যোগ হবে।");
}

// Initial Setup
console.log("ABR Panel v1.0 Loaded - Professional Edition");
function calculateCharge() {
    const qtyInput = document.getElementById('qty');
    const chargeDisplay = document.getElementById('totalCharge');
    
    // আপনার টার্গেট রেট: ৫০০০ ফলোয়ার = ১ ডলার
    // সুতরাং ১টি ফলোয়ারের দাম = ১ / ৫০০০ = ০.০০০২ ডলার
    const ratePerFollower = 0.0002; 
    
    let quantity = parseFloat(qtyInput.value);
    
    if (isNaN(quantity) || quantity <= 0) {
        chargeDisplay.innerText = "$0.0000";
    } else {
        let total = quantity * ratePerFollower;
        // ৪টি দশমিক স্থান পর্যন্ত দেখাবে যাতে ছোট অ্যামাউন্টও বোঝা যায়
        chargeDisplay.innerText = "$" + total.toFixed(4); 
    }

}
function calculateTotal() {
    let pricePer1k = document.getElementById('service').value;
    let qty = document.getElementById('quantity').value;
    let total = (pricePer1k / 1000) * qty;
    
    document.getElementById('totalCharge').innerText = "$" + total.toFixed(3);
}

function updatePrice() {
    calculateTotal();
}
