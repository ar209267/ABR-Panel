<script>
    // বর্তমান মার্কেট প্রাইস অনুযায়ী সার্ভিস লিস্ট (প্রতি ১০০০ ইউনিটের দাম)
    const services = {
        'fb': [
            {name: 'FB Page Followers (Non-Drop) - $1.20/1k', price: 1.20},
            {name: 'FB Profile Followers - $0.90/1k', price: 0.90},
            {name: 'FB Post Likes (Real) - $0.40/1k', price: 0.40},
            {name: 'FB Video Views - $0.60/1k', price: 0.60}
        ],
        'yt': [
            {name: 'YT Watch Time (4000 Hours Pack) - $12.00/1k', price: 12.00},
            {name: 'YT Subscribers (Non-Drop) - $4.50/1k', price: 4.50},
            {name: 'YT Views (High Retention) - $2.10/1k', price: 2.10},
            {name: 'YT Shorts Views - $1.15/1k', price: 1.15}
        ],
        'ig': [
            {name: 'Instagram Followers - $0.80/1k', price: 0.80},
            {name: 'Instagram Likes - $0.25/1k', price: 0.25}
        ]
    };

    function filterServices() {
        const cat = document.getElementById('mainCategory').value;
        const list = document.getElementById('serviceList');
        list.innerHTML = '<option value="0">Select Service</option>';
        
        if(services[cat]) {
            services[cat].forEach(s => {
                let option = document.createElement('option');
                option.text = s.name;
                option.value = s.price;
                list.add(option);
            });
        }
    }

    function calculateTotal() {
        const price = document.getElementById('serviceList').value;
        const qty = document.getElementById('quantity').value;
        
        if(price > 0 && qty > 0) {
            const usd = (price * qty) / 1000;
            const bdtRate = 120; // ১ ডলার = ১২০ টাকা (বর্তমান বাজার দর অনুযায়ী)
            const bdt = usd * bdtRate;

            document.getElementById('chargeUSD').innerText = '$' + usd.toFixed(2);
            document.getElementById('chargeBDT').innerText = '৳' + bdt.toFixed(2);
        }
    }
</script>
