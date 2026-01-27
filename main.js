/* ================= Workers Data ================= */

const workersData = [

    {
        id:1,
        name:"م. أحمد عبد الله",
        job:"مقاولات عامة",
        location:"غزة - الرمال",
        rating:4.9,
        exp:"15 سنة",
        status:"available",
        phone:"0599123456",
        icon:"fa-hard-hat",
        bio:"مهندس مدني متخصص في تقييم الأضرار وإعادة ترميم المباني السكنية.",
        skills:["خرسانة","إدارة مشاريع","تشطيبات","سلامة"]
    },

    {
        id:2,
        name:"شركة النور للطاقة",
        job:"طاقة شمسية",
        location:"خانيونس",
        rating:4.8,
        exp:"8 سنوات",
        status:"busy",
        phone:"0599654321",
        icon:"fa-solar-panel",
        bio:"حلول الطاقة البديلة المتكاملة.",
        skills:["ألواح","انفرتر","بطاريات","تمديدات"]
    },

    {
        id:3,
        name:"سالم للسباكة",
        job:"تمديدات صحية",
        location:"جباليا",
        rating:4.7,
        exp:"12 سنة",
        status:"available",
        phone:"0599987654",
        icon:"fa-faucet",
        bio:"فني سباكة محترف.",
        skills:["حمامات","تسريب","مضخات","فلاتر"]
    },

    {
        id:4,
        name:"فن الديكور",
        job:"دهان وجبس",
        location:"دير البلح",
        rating:4.6,
        exp:"6 سنوات",
        status:"available",
        phone:"0599112233",
        icon:"fa-paint-roller",
        bio:"دهان وديكور احترافي.",
        skills:["دهان","جبس","ورق","ألوان"]
    },

    {
        id:5,
        name:"إبراهيم للكهرباء",
        job:"كهرباء منازل",
        location:"رفح",
        rating:5.0,
        exp:"10 سنوات",
        status:"available",
        phone:"0599778899",
        icon:"fa-bolt",
        bio:"كهربائي معتمد.",
        skills:["تأسيس","سمارت","قواطع","مولدات"]
    }

];


/* ================= Render Workers ================= */

function renderWorkers(){

    const container = document.getElementById("workers-container");
    let html = "";

    workersData.forEach((w,i)=>{

        const statusClass = w.status==="available" ? "bg-success":"bg-secondary";
        const statusText  = w.status==="available" ? "متاح":"مشغول";

        let stars = "";

        for(let x=0;x<5;x++){

            if(x < Math.floor(w.rating)){
                stars += <i class="fas fa-star text-warning"></i>;
            }
            else if(x < w.rating){
                stars += <i class="fas fa-star-half-alt text-warning"></i>;
            }
            else{
                stars += <i class="far fa-star text-muted opacity-25"></i>;
            }
        }

        html += 

        <div class="col-lg-4 col-md-6 animate__animated animate__fadeInUp" style="animation-delay:${i*100}ms">

        <div class="card worker-card h-100 shadow-sm border-0 position-relative">

        <span class="badge ${statusClass} position-absolute top-0 end-0 m-3">
        ${statusText}
        </span>

        <div class="card-body text-center p-4">

        <div class="icon-wrapper mb-3">
        <i class="fas ${w.icon} fa-2x"></i>
        </div>

        <h5 class="fw-bold">${w.name}</h5>
        <p class="text-primary fw-bold small">${w.job}</p>

        <div class="text-muted small mb-3">

        <div>
        <i class="fas fa-map-marker-alt text-danger"></i>
        ${w.location}
        </div>

        <div class="mt-1">
        <span class="fw-bold">${w.rating}</span>
        ${stars}
        (${w.exp})
        </div>

        </div>

        <button onclick="openModal(${w.id})"
        class="btn btn-outline-primary w-100 rounded-pill fw-bold">
        عرض التفاصيل
        </button>

        </div>
        </div>
        </div>
        ;
    });

    container.innerHTML = html;
}


/* ================= Modal ================= */

function openModal(id){

    const w = workersData.find(x=>x.id===id);
    if(!w) return;

    document.getElementById("modalName").innerText = w.name;
    document.getElementById("modalJob").innerText = w.job;

    document.getElementById("modalLocation").innerHTML =
    <i class="fas fa-map-marker-alt"></i> ${w.location};
document.getElementById("modalExp").innerHTML =
    <i class="fas fa-history"></i> ${w.exp};

    document.getElementById("modalRating").innerHTML =
    <i class="fas fa-star"></i> ${w.rating};

    document.getElementById("modalBio").innerText = w.bio;

    document.getElementById("modalPhone").innerText = w.phone;


    const icon = document.getElementById("modalIcon");
    icon.className = fas ${w.icon} text-primary fa-3x;


    const skillsBox = document.getElementById("modalSkills");

    skillsBox.innerHTML = w.skills.map(s=>
        <span class="badge bg-light border me-1 mb-1">${s}</span>
    ).join("");


    const whatsappBtn = document.getElementById("whatsappBtn");

    const phone = w.phone.replace(/^0/,"972");

    whatsappBtn.href =
    https://wa.me/${phone}?text=مرحبا ${encodeURIComponent(w.name)};


    document.getElementById("modalPhoneBtn").onclick = ()=>{
        window.location.href = tel:${w.phone};
    };


    new bootstrap.Modal(
        document.getElementById("workerModal")
    ).show();
}




    const msg = document.getElementById("successMsg");
/* ================= Form (jQuery Version) ================= */

function validateForm(e){
    e.preventDefault();

    // 1. جلب القيم باستخدام jQuery ($)
    const name = $("#name").val().trim();
    const service = $("#serviceType").val();

    // التحقق من الحقول
    if(!name || !service){
        alert("يرجى تعبئة جميع الحقول");
        return false;
    }

    // 2. استخدام تأثيرات الحركة (Animations) المطلوبة في التقييم
    const msg = $("#successMsg");

    // إظهار الرسالة بحركة انزلاق (SlideDown)
    msg.removeClass("d-none").hide().slideDown(600);

    // تفريغ النموذج
    $("#serviceForm")[0].reset();

    // إخفاء الرسالة بعد 4 ثواني بحركة تلاشي (FadeOut)
    setTimeout(()=>{
        msg.fadeOut(600, function(){
            $(this).addClass("d-none").show();
        });
    }, 4000);

    return false;
}
}


/* ================= Dark Mode & Init ================= */

document.addEventListener("DOMContentLoaded",()=>{

    renderWorkers();


    const btn = document.getElementById("darkModeToggle");
    const body = document.body;
    const icon = btn.querySelector("i");
    const text = btn.querySelector("span");


    if(localStorage.getItem("theme")==="dark"){

        body.classList.add("dark-mode");

        icon.className="fas fa-sun";
        text.innerText="مظهر نهاري";
    }


    btn.onclick = ()=>{

        body.classList.toggle("dark-mode");

        if(body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");

            icon.className="fas fa-sun";
            text.innerText="مظهر نهاري";

        }else{

            localStorage.setItem("theme","light");

            icon.className="fas fa-moon";
            text.innerText="مظهر داكن";
        }
    };


    window.addEventListener("scroll",()=>{

        const nav = document.getElementById("mainNav");

        if(window.scrollY>50){
            nav.classList.add("shadow-sm");
        }else{
            nav.classList.remove("shadow-sm");
        }

    });

});