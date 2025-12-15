import{M as ka,b as ya,T as wa}from"./bootstrap-CeGnflBh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const Aa={"/":"view-landing","/home":"view-landing","/form":"view-form","/preview":"view-preview","/result":"view-result","/draft":"view-draft","/history":"view-history","/doa":"view-doa","/settings":"view-settings"};function aa(){return window.location.hash.slice(1)||"/"}function Sa(a){document.querySelectorAll(".view-section").forEach(t=>{t.classList.add("d-none")});const i=document.getElementById(a);if(i){i.classList.remove("d-none"),window.scrollTo(0,0);const t=new CustomEvent("viewChanged",{detail:{viewId:a,path:aa()}});window.dispatchEvent(t)}else console.error(`View with ID "${a}" not found`)}function Ta(a){document.querySelectorAll(".navbar-nav .nav-link").forEach(i=>{const t=i.getAttribute("href");i.classList.remove("active"),(t===`#${a}`||a==="/"&&t==="#/")&&i.classList.add("active")})}function O(){const a=aa(),e=Aa[a];e?(Sa(e),Ta(a)):(console.warn(`Route "${a}" not found, redirecting to home`),v("/"))}function v(a){window.location.hash=`#${a}`}function Ea(){O(),window.addEventListener("hashchange",O),document.addEventListener("click",a=>{const e=a.target.closest('a[href^="#/"]');if(e){a.preventDefault();const i=e.getAttribute("href").slice(1);v(i)}})}let E=null,D=null,P=null;function Da(){return q(),E=a=>{a.key==="Escape"&&Pa()},D=a=>{La(a.target)},P=()=>{Ia()},document.addEventListener("keydown",E),document.addEventListener("show.bs.modal",D),document.addEventListener("hide.bs.modal",P),q}function q(){E&&(document.removeEventListener("keydown",E),E=null),D&&(document.removeEventListener("show.bs.modal",D),D=null),P&&(document.removeEventListener("hide.bs.modal",P),P=null)}function Pa(){const a=document.querySelector(".modal.show");if(a){const e=ka.getInstance(a);e&&e.hide()}}const B=new WeakMap;function La(a){if(!a)return;if(B.has(a)){const s=B.get(a);a.removeEventListener("keydown",s)}const e=a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=e[0],t=e[e.length-1];a.dataset.previousFocus=document.activeElement?.id||"",setTimeout(()=>{if(i)try{i.focus()}catch{}},100);const n=s=>{if(s.key==="Tab"){if(s.shiftKey){if(document.activeElement===i){s.preventDefault();try{t.focus()}catch{}}}else if(document.activeElement===t){s.preventDefault();try{i.focus()}catch{}}}};B.set(a,n),a.addEventListener("keydown",n)}function Ia(){const a=document.querySelector(".modal");if(a&&a.dataset.previousFocus){const e=document.getElementById(a.dataset.previousFocus);if(e){const i=e.hasAttribute("disabled"),t=e.offsetParent===null;if(!i&&!t)try{e.focus()}catch{}}}}function Ca(){document.addEventListener("keydown",a=>{if((a.ctrlKey||a.metaKey)&&a.key==="s"){a.preventDefault();const e=document.getElementById("btn-save-draft");e&&!e.disabled&&e.click()}if((a.ctrlKey||a.metaKey)&&a.key==="Enter"){const e=document.querySelector('button[type="submit"]');e&&!e.disabled&&e.click()}})}function xa(){const a=document.getElementById("view-landing");a.innerHTML=`
    <!-- Hero Section -->
    <div class="hero-section">
      <h1>
        Taaruf CV Kreator
      </h1>
      <p class="lead">Buat CV Ta'aruf Islami dengan Mudah dan Aman</p>
      <button class="btn btn-light btn-lg mt-3" id="btn-start">
        <i class="bi bi-pencil-square"></i> Buat CV Baru
      </button>
    </div>

    <!-- Privacy Notice -->
    <div class="alert privacy-notice" role="alert">
      <h5 class="alert-heading">
        <i class="bi bi-shield-lock"></i> Privasi Anda Terjamin
      </h5>
      <p class="mb-0">
        Semua data yang Anda masukkan <strong>hanya tersimpan di browser Anda</strong> 
        dan <strong>tidak dikirim ke server manapun</strong>. Data Anda sepenuhnya 
        aman dan terkendali oleh Anda.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="row g-4 mb-5">
      <div class="col-md-6 col-lg-3">
        <div class="card feature-card">
          <div class="card-body">
            <i class="bi bi-pencil-square"></i>
            <h5 class="card-title">Buat CV Baru</h5>
            <p class="card-text">Isi formulir lengkap untuk membuat CV Ta'aruf Anda</p>
            <button class="btn btn-primary btn-feature" data-route="/form">
              Mulai <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card feature-card">
          <div class="card-body">
            <i class="bi bi-file-earmark-text"></i>
            <h5 class="card-title">Draft Saya</h5>
            <p class="card-text">Lanjutkan mengisi CV yang belum selesai</p>
            <button class="btn btn-primary btn-feature" data-route="/draft">
              Lihat Draft <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card feature-card">
          <div class="card-body">
            <i class="bi bi-clock-history"></i>
            <h5 class="card-title">Riwayat CV</h5>
            <p class="card-text">Akses CV yang sudah pernah dibuat sebelumnya</p>
            <button class="btn btn-primary btn-feature" data-route="/history">
              Lihat Riwayat <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card feature-card">
          <div class="card-body">
            <i class="bi bi-book"></i>
            <h5 class="card-title">Doa & Hadits</h5>
            <p class="card-text">Doa dan hadits seputar pernikahan dalam Islam</p>
            <button class="btn btn-primary btn-feature" data-route="/doa">
              Baca <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="card">
          <div class="card-body p-4">
            <h3 class="card-title mb-3">
              <img 
                src="./married-couple.png" 
                alt="Married Couple Icon" 
                class="me-2"
                style="height: 40px; width: 40px; object-fit: contain; vertical-align: middle;"
              />
              Tentang CV Ta'aruf
            </h3>
            <p>
              <strong>Ta'aruf</strong> adalah proses perkenalan dalam Islam yang bertujuan 
              untuk menuju pernikahan. CV Ta'aruf berisi informasi pribadi, latar belakang 
              pendidikan, keluarga, praktik ibadah, dan visi pernikahan.
            </p>
            <p>
              Aplikasi <strong>Taaruf CV Kreator</strong> membantu Anda menyusun CV Ta'aruf 
              dengan format yang rapi dan sistematis, sehingga memudahkan proses perkenalan 
              dengan calon pasangan.
            </p>
            <p class="mb-0">
              <i class="bi bi-check-circle text-success"></i> Formulir lengkap 49 kolom<br>
              <i class="bi bi-check-circle text-success"></i> Format output yang rapi<br>
              <i class="bi bi-check-circle text-success"></i> Simpan draft & riwayat<br>
              <i class="bi bi-check-circle text-success"></i> 100% privasi terjaga
            </p>
          </div>
        </div>
      </div>
    </div>
  `,ja()}function ja(){const a=document.getElementById("btn-start");a&&a.addEventListener("click",()=>{v("/form")}),document.querySelectorAll(".btn-feature").forEach(i=>{i.addEventListener("click",t=>{const n=t.currentTarget.getAttribute("data-route");n&&v(n)})})}function V(){xa()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-landing"&&V()});(window.location.hash===""||window.location.hash==="#/"||window.location.hash==="#/home")&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V());const f={REQUIRED:"Kolom ini wajib diisi.",MIN_LENGTH:a=>`Minimal ${a} karakter.`,MAX_LENGTH:a=>`Maksimal ${a} karakter.`,EMAIL:"Format email tidak valid.",NUMBER:"Harus berupa angka.",MIN_VALUE:a=>`Nilai minimal adalah ${a}.`,MAX_VALUE:a=>`Nilai maksimal adalah ${a}.`,DATE_FUTURE:"Tanggal tidak boleh di masa depan.",PHONE:"Format nomor telepon tidak valid (10-15 digit).",CONDITIONAL:"Kolom ini wajib diisi berdasarkan pilihan sebelumnya.",PATTERN:"Format input tidak sesuai."},Ma={namaLengkap:{required:!0,minLength:3},tempatLahir:{required:!0},tanggalLahir:{required:!0,maxDate:"today"},jenisKelamin:{required:!0},tinggiBadan:{required:!0,min:100,max:250},beratBadan:{required:!0,min:30,max:200},pekerjaan:{required:!0},statusPernikahan:{required:!0},jumlahAnak:{conditional:!0,min:0,max:20},domisili:{required:!0},statusIzin:{required:!0},pendidikanTerakhir:{required:!0,minLength:10},infoAyah:{required:!0,minLength:10},infoIbu:{required:!0,minLength:10},urutanAnak:{required:!0,pattern:/^\d+\s+dari\s+\d+$/},shalatWajib:{required:!0},bacaanQuran:{required:!0},sifatPositif:{required:!0},sifatNegatif:{required:!0},merokok:{required:!0},statusHijab:{conditional:!0},statusJenggot:{conditional:!0},visiPernikahan:{required:!0,minLength:20},kriteriaPasangan:{required:!0,minLength:20},kesediaanPoligami:{conditional:!0},kesediaanDipoligami:{conditional:!0},noHP:{pattern:/^[0-9]{10,15}$/},email:{type:"email"}},Ha=a=>{const e=a.querySelectorAll("input, select, textarea");return Array.from(e).filter(i=>!i.closest(".d-none"))},ea=a=>a.nextElementSibling?.classList.contains("invalid-feedback")?a.nextElementSibling:null,Ka=(a,e)=>a.hasAttribute("required")&&!e?(y(a,f.REQUIRED),!1):!0,Ba=(a,e,i)=>i?.minLength&&e.length<i.minLength?(y(a,f.MIN_LENGTH(i.minLength)),!1):i?.maxLength&&e.length>i.maxLength?(y(a,f.MAX_LENGTH(i.maxLength)),!1):!0,Va=(a,e,i)=>{if(a.type!=="number")return!0;const t=parseFloat(e);return i?.min!==void 0&&t<i.min?(y(a,f.MIN_VALUE(i.min)),!1):i?.max!==void 0&&t>i.max?(y(a,f.MAX_VALUE(i.max)),!1):!0},$a=(a,e,i)=>{if(a.type!=="date"||i?.maxDate!=="today")return!0;const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t>n?(y(a,f.DATE_FUTURE),!1):!0},Na=(a,e,i,t)=>{if(!i?.pattern||!e)return!0;if(!i.pattern.test(e)){const n=t==="noHP"?f.PHONE:f.PATTERN;return y(a,n),!1}return!0},Ra=(a,e,i)=>i?.type!=="email"||!e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?!0:(y(a,f.EMAIL),!1),J=(a,e=!1)=>{try{const i=a.hasAttribute("required"),t=a.value.trim()!=="";if(e&&!(a.classList.contains("is-invalid")||a.classList.contains("is-valid")))return;if(L(a),!i&&!t){L(a);return}if(a.checkValidity())ta(a);else{const s=ea(a)?.textContent||f.REQUIRED;y(a,s)}}catch(i){console.error("[ValidationService] Error in validateFieldOnEvent:",i)}};function ia(a){try{if(!a)return console.error("[ValidationService] Field is null or undefined"),!1;const e=a.name||a.id,i=a.value.trim(),t=Ma[e];return L(a),a.closest(".d-none")?!0:Ka(a,i)?!i&&!a.hasAttribute("required")?!0:!Ba(a,i,t)||!Va(a,i,t)||!$a(a,i,t)||!Na(a,i,t,e)||!Ra(a,i,t)?!1:a.checkValidity()?(ta(a),!0):(y(a,a.validationMessage||f.REQUIRED),!1):!1}catch(e){return console.error("[ValidationService] Error in validateField:",e),!1}}function _a(a){try{if(!a)return console.error("[ValidationService] Form element is null or undefined"),{isValid:!1,firstInvalidField:null};const i=Ha(a).filter(t=>!ia(t));return{isValid:i.length===0,firstInvalidField:i[0]||null}}catch(e){return console.error("[ValidationService] Error in validateForm:",e),{isValid:!1,firstInvalidField:null}}}function y(a,e){a.classList.remove("is-valid"),a.classList.add("is-invalid");const i=ea(a);i&&(i.textContent=e)}function ta(a){a.classList.remove("is-invalid"),a.classList.add("is-valid")}function L(a){a.classList.remove("is-invalid","is-valid")}function Fa(a){try{if(!a){console.error("[ValidationService] Form element is null or undefined");return}a.querySelectorAll("input, select, textarea").forEach(i=>{i.addEventListener("blur",()=>{J(i,!1)}),i.addEventListener("input",()=>{J(i,!0)})})}catch(e){console.error("[ValidationService] Error initializing real-time validation:",e)}}const Oa=36,qa=2,Ja=6;function Wa(){if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();if(typeof crypto<"u"&&crypto.getRandomValues){const a=new Uint8Array(16);crypto.getRandomValues(a),a[6]=a[6]&15|64,a[8]=a[8]&63|128;const e=Array.from(a,i=>i.toString(16).padStart(2,"0")).join("");return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20)}`}throw new Error("Crypto API not available. Cannot generate secure UUID.")}function Ua(a="id"){const e=Date.now(),i=Math.random().toString(Oa).substring(qa,Ja);return`${a}_${e}_${i}`}function Ga(){return Ua("draft")}function Ya(){return`cv_${Wa()}`}function M(){return new Date().toISOString()}function za(a){if(!a)return null;const e=new Date(a);if(isNaN(e.getTime()))return null;const i=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],t=String(e.getDate()).padStart(2,"0"),n=i[e.getMonth()],s=e.getFullYear();return`${t} ${n} ${s}`}function $(a){if(!a)return null;const e=new Date(a);if(isNaN(e.getTime()))return null;const i=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],t=String(e.getDate()).padStart(2,"0"),n=i[e.getMonth()],s=e.getFullYear(),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return`${t} ${n} ${s}, ${o}:${l}`}function na(a,e=!1){return e?$(a):za(a)}const k={DRAFTS:"taaruf_cv_drafts",HISTORY:"taaruf_cv_history",SETTINGS:"taaruf_cv_settings"};M();function N(){try{const a="__storage_test__";return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(a){return console.error("localStorage is not available:",a),!1}}function I(a,e){try{if(!N())return{success:!1,message:"localStorage tidak tersedia. Pastikan browser Anda tidak dalam mode privat.",error:new Error("Storage not available")};const i=JSON.stringify(e);return localStorage.setItem(a,i),{success:!0,message:"Data berhasil disimpan"}}catch(i){return i.name==="QuotaExceededError"?{success:!1,message:"Penyimpanan penuh. Hapus draft/history lama untuk melanjutkan.",error:i}:{success:!1,message:`Gagal menyimpan data: ${i.message}`,error:i}}}function H(a){try{if(!N())return{success:!1,data:null,message:"localStorage tidak tersedia",error:new Error("Storage not available")};const e=localStorage.getItem(a);return e===null?{success:!0,data:null,message:"Data tidak ditemukan"}:{success:!0,data:JSON.parse(e),message:"Data berhasil dimuat"}}catch(e){return console.error(`Error loading data from ${a}:`,e),{success:!1,data:null,message:"Data corrupt atau format tidak valid. Pertimbangkan untuk reset data.",error:e}}}const Qa=(a,e=null)=>{const i=Ga(),t=M(),n=e||`Draft - ${a.namaLengkap||"Tanpa Nama"} - ${na(t)}`;return{id:i,name:n,createdAt:t,lastUpdated:t,data:a}},Xa=(a,e,i,t)=>{const n=M();return a.map(s=>s.id===e?{...s,lastUpdated:n,data:i,...t&&{name:t}}:s)};function Za(a,e=null,i=null){try{const n=H(k.DRAFTS).data||[];if(i){if(!n.some(m=>m.id===i))return{success:!1,message:"Draft tidak ditemukan"};const o=Xa(n,i,a,e),l=I(k.DRAFTS,o);return l.success?{...l,data:{id:i}}:l}else{const s=Qa(a,e),o=[...n,s],l=I(k.DRAFTS,o);return l.success?{...l,data:{id:s.id}}:l}}catch(t){return{success:!1,message:`Error saving draft: ${t.message}`,error:t}}}function R(){const a=H(k.DRAFTS);return a.success?a.data||[]:(console.error("Error loading drafts:",a.message),[])}function sa(a){return R().find(i=>i.id===a)||null}function ae(a){try{const e=R();if(!e.some(n=>n.id===a))return{success:!1,message:"Draft tidak ditemukan"};const t=e.filter(n=>n.id!==a);return I(k.DRAFTS,t)}catch(e){return{success:!1,message:`Error deleting draft: ${e.message}`,error:e}}}function ee(a,e,i=null){try{const n=H(k.HISTORY).data||[],s=Ya(),o=M(),l=i||`${a.namaLengkap} - ${na(o)}`,m={id:s,name:l,generatedAt:o,cvTextContent:e,sourceData:a},u=[...n,m],g=I(k.HISTORY,u);return g.success?{...g,data:{id:s}}:g}catch(t){return{success:!1,message:`Error saving history: ${t.message}`,error:t}}}function _(){const a=H(k.HISTORY);return a.success?a.data||[]:(console.error("Error loading history:",a.message),[])}function F(a){return _().find(i=>i.id===a)||null}function ie(a){try{const e=_();if(!e.some(n=>n.id===a))return{success:!1,message:"History tidak ditemukan"};const t=e.filter(n=>n.id!==a);return I(k.HISTORY,t)}catch(e){return{success:!1,message:`Error deleting history: ${e.message}`,error:e}}}function te(){try{return N()?(Object.values(k).forEach(a=>{localStorage.removeItem(a)}),{success:!0,message:"Semua data berhasil dihapus"}):{success:!1,message:"localStorage tidak tersedia"}}catch(a){return{success:!1,message:`Error clearing data: ${a.message}`,error:a}}}const ne="toast-container",se="toast",re="toast",oe="toast-header",le="toast-body",de=2,ce=9,W="Notifikasi",U="info",G=5e3,Y={success:{icon:"bi bi-check-circle-fill text-success",headerClass:"bg-success bg-opacity-10"},error:{icon:"bi bi-exclamation-circle-fill text-danger",headerClass:"bg-danger bg-opacity-10"},warning:{icon:"bi bi-exclamation-triangle-fill text-warning",headerClass:"bg-warning bg-opacity-10"},info:{icon:"bi bi-info-circle-fill text-primary",headerClass:"bg-primary bg-opacity-10"},loading:{icon:"spinner-border spinner-border-sm text-white",headerClass:"bg-danger text-white"}},d=(a,e)=>{let i;if(typeof a=="string")i={title:W,message:a,type:e||U,duration:G};else if(typeof a=="object"&&a!==null)i={title:a.title||W,message:a.message||"",type:a.type||U,duration:a.duration!==void 0?a.duration:G,onClose:a.onClose};else{console.error("[ToastNotification] Invalid options parameter");return}const{title:t,message:n,type:s,duration:o,onClose:l}=i,m=`${se}-${Date.now()}-${Math.random().toString(36).substr(de,ce)}`,u=document.getElementById(ne);if(!u){console.error("[ToastNotification] Toast container not found");return}const g=ue(s),w=`
    <div id="${m}" class="${re}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="${oe} ${g.headerClass}">
        <i class="${g.icon} me-2"></i>
        <strong class="me-auto">${t}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      ${n?`<div class="${le}">${n}</div>`:""}
    </div>
  `;u.insertAdjacentHTML("beforeend",w);const p=document.getElementById(m);if(!p){console.error("[ToastNotification] Failed to create toast element");return}const K=new bootstrap.Toast(p,{autohide:o>0,delay:o});p.addEventListener("hidden.bs.toast",()=>{p.remove(),typeof l=="function"&&l()}),K.show(),console.log(`[ToastNotification] Showed ${s} toast: ${t}`)},ue=a=>Y[a]||Y.info,me="spinner-border-sm",x="originalContent",j="originalDisabled";function C(a,e="Memproses..."){a&&(a.dataset[x]=a.innerHTML,a.dataset[j]=a.disabled,a.disabled=!0,a.innerHTML=`
    <span class="spinner-border ${me} me-2" role="status" aria-hidden="true"></span>
    ${e}
  `)}function S(a){a&&(a.dataset[x]&&(a.innerHTML=a.dataset[x],delete a.dataset[x]),a.dataset[j]!==void 0?(a.disabled=a.dataset[j]==="true",delete a.dataset[j]):a.disabled=!1)}const h={TEMP_DATA:"taaruf_cv_temp_data",DRAFT_TO_LOAD:"taaruf_cv_draft_to_load",GENERATED_TEXT:"taaruf_cv_generated_text",SOURCE_DATA:"taaruf_cv_source_data"};function be(){const a=document.getElementById("view-form");a.innerHTML=`
    <!-- Form Header -->
    <div class="mb-4">
      <h2>
        <i class="bi bi-pencil-square"></i> Formulir CV Ta'aruf
      </h2>
      <p class="text-muted">
        Isi formulir dengan lengkap dan jujur. Kolom bertanda 
        <span class="text-danger fw-bold">*</span> wajib diisi.
      </p>
    </div>

    <!-- Form Container -->
    <form id="cv-form" novalidate>
      
      <!-- Section 1: Data Pribadi -->
      <div class="form-section-header">
        <h3><i class="bi bi-person"></i> 1. Data Pribadi</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Nama Lengkap (Wajib) -->
            <div class="col-md-6">
              <label for="namaLengkap" class="form-label">
                Nama Lengkap <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="namaLengkap"
                name="namaLengkap"
                required
                minlength="3"
                placeholder="Contoh: Ahmad Fauzi bin Abdullah"
              />
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 3 karakter).</div>
            </div>

            <!-- Nama Panggilan (Opsional) -->
            <div class="col-md-6">
              <label for="namaPanggilan" class="form-label">
                Nama Panggilan
              </label>
              <input
                type="text"
                class="form-control"
                id="namaPanggilan"
                name="namaPanggilan"
                placeholder="Contoh: Ahmad"
              />
            </div>

            <!-- Tempat Lahir (Wajib) -->
            <div class="col-md-6">
              <label for="tempatLahir" class="form-label">
                Tempat Lahir <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="tempatLahir"
                name="tempatLahir"
                required
                placeholder="Contoh: Jakarta"
              />
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Tanggal Lahir (Wajib) -->
            <div class="col-md-6">
              <label for="tanggalLahir" class="form-label">
                Tanggal Lahir <span class="text-danger">*</span>
              </label>
              <input
                type="date"
                class="form-control"
                id="tanggalLahir"
                name="tanggalLahir"
                required
                max=""
              />
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Jenis Kelamin (Wajib) -->
            <div class="col-md-6">
              <label for="jenisKelamin" class="form-label">
                Jenis Kelamin <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="jenisKelamin"
                name="jenisKelamin"
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Tinggi Badan (Wajib) -->
            <div class="col-md-3">
              <label for="tinggiBadan" class="form-label">
                Tinggi Badan (cm) <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="tinggiBadan"
                name="tinggiBadan"
                required
                min="100"
                max="250"
                placeholder="170"
              />
              <div class="invalid-feedback">Nilai 100-250 cm.</div>
            </div>

            <!-- Berat Badan (Wajib) -->
            <div class="col-md-3">
              <label for="beratBadan" class="form-label">
                Berat Badan (kg) <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="beratBadan"
                name="beratBadan"
                required
                min="30"
                max="200"
                placeholder="65"
              />
              <div class="invalid-feedback">Nilai 30-200 kg.</div>
            </div>

            <!-- Warna Kulit (Opsional) -->
            <div class="col-md-6">
              <label for="warnaKulit" class="form-label">
                Warna Kulit
              </label>
              <input
                type="text"
                class="form-control"
                id="warnaKulit"
                name="warnaKulit"
                placeholder="Contoh: Sawo matang"
              />
            </div>

            <!-- Pekerjaan (Wajib) -->
            <div class="col-md-6">
              <label for="pekerjaan" class="form-label">
                Pekerjaan Saat Ini <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="pekerjaan"
                name="pekerjaan"
                required
                placeholder="Contoh: Software Engineer di PT ABC"
              />
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Status Pernikahan (Wajib) -->
            <div class="col-md-6">
              <label for="statusPernikahan" class="form-label">
                Status Pernikahan <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="statusPernikahan"
                name="statusPernikahan"
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Lajang">Lajang</option>
                <option value="Duda">Duda</option>
                <option value="Janda">Janda</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Jumlah Anak (Kondisional) -->
            <div class="col-md-6 conditional-field d-none" id="wrapper-jumlahAnak">
              <label for="jumlahAnak" class="form-label">
                Jumlah Anak <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control"
                id="jumlahAnak"
                name="jumlahAnak"
                min="0"
                max="20"
                placeholder="0"
              />
              <div class="invalid-feedback">Nilai 0-20.</div>
            </div>

            <!-- Pernah Khitbah (Opsional) -->
            <div class="col-md-6">
              <label for="pernahKhitbah" class="form-label">
                Pernah Khitbah
              </label>
              <select
                class="form-select"
                id="pernahKhitbah"
                name="pernahKhitbah"
              >
                <option value="">-- Pilih --</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
            </div>

            <!-- Suku Bangsa (Opsional) -->
            <div class="col-md-6">
              <label for="suku" class="form-label">
                Suku Bangsa
              </label>
              <input
                type="text"
                class="form-control"
                id="suku"
                name="suku"
                placeholder="Contoh: Jawa"
              />
            </div>

            <!-- Domisili (Wajib) -->
            <div class="col-md-6">
              <label for="domisili" class="form-label">
                Domisili Saat Ini <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="domisili"
                name="domisili"
                required
                placeholder="Contoh: Jakarta Selatan"
              />
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Kota Asal (Opsional) -->
            <div class="col-md-6">
              <label for="asalDaerah" class="form-label">
                Kota Asal
              </label>
              <input
                type="text"
                class="form-control"
                id="asalDaerah"
                name="asalDaerah"
                placeholder="Contoh: Bandung"
              />
            </div>

            <!-- Pengalaman Kerja (Opsional) -->
            <div class="col-12">
              <label for="pengalamanKerja" class="form-label">
                Pengalaman Kerja
              </label>
              <textarea
                class="form-control"
                id="pengalamanKerja"
                name="pengalamanKerja"
                rows="3"
                placeholder="Contoh: Software Engineer di PT XYZ (2020-2023), Junior Developer di CV ABC (2018-2020)"
              ></textarea>
            </div>

            <!-- Penghasilan Bulanan (Opsional) -->
            <div class="col-md-6">
              <label for="penghasilanBulanan" class="form-label">
                Penghasilan Bulanan
              </label>
              <select
                class="form-select"
                id="penghasilanBulanan"
                name="penghasilanBulanan"
              >
                <option value="">-- Pilih --</option>
                <option value="Di bawah 3 juta">Di bawah 3 juta</option>
                <option value="3 - 5 juta">3 - 5 juta</option>
                <option value="5 - 10 juta">5 - 10 juta</option>
                <option value="10 - 20 juta">10 - 20 juta</option>
                <option value="Di atas 20 juta">Di atas 20 juta</option>
                <option value="Tidak tetap">Tidak tetap</option>
              </select>
            </div>

            <!-- Status Tempat Tinggal (Opsional) -->
            <div class="col-md-6">
              <label for="statusRumah" class="form-label">
                Status Tempat Tinggal
              </label>
              <select
                class="form-select"
                id="statusRumah"
                name="statusRumah"
              >
                <option value="">-- Pilih --</option>
                <option value="Milik Sendiri">Milik Sendiri</option>
                <option value="Kontrak/Sewa">Kontrak/Sewa</option>
                <option value="Tinggal dengan Orang Tua">Tinggal dengan Orang Tua</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <!-- Status Izin Menikah (Wajib) -->
            <div class="col-md-6">
              <label for="statusIzin" class="form-label">
                Status Izin Menikah <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="statusIzin"
                name="statusIzin"
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Sudah">Sudah</option>
                <option value="Belum">Belum</option>
                <option value="Proses">Proses</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Riwayat Pendidikan -->
      <div class="form-section-header">
        <h3><i class="bi bi-mortarboard"></i> 2. Riwayat Pendidikan</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Pendidikan Terakhir (Wajib) -->
            <div class="col-12">
              <label for="pendidikanTerakhir" class="form-label">
                Pendidikan Terakhir <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="pendidikanTerakhir"
                name="pendidikanTerakhir"
                rows="3"
                required
                minlength="10"
                placeholder="Contoh: S1 Teknik Informatika, Universitas Indonesia (2015-2019), IPK 3.75"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 10 karakter).</div>
            </div>

            <!-- Pendidikan Non-Formal (Opsional) -->
            <div class="col-12">
              <label for="pendidikanNonFormal" class="form-label">
                Pendidikan Non-Formal
              </label>
              <textarea
                class="form-control"
                id="pendidikanNonFormal"
                name="pendidikanNonFormal"
                rows="3"
                placeholder="Contoh: Kursus Full-Stack Development di Dicoding (2020), Sertifikat AWS Cloud Practitioner (2021)"
              ></textarea>
            </div>

            <!-- Prestasi / Keahlian (Opsional) -->
            <div class="col-12">
              <label for="prestasi" class="form-label">
                Prestasi / Keahlian
              </label>
              <textarea
                class="form-control"
                id="prestasi"
                name="prestasi"
                rows="3"
                placeholder="Contoh: Juara 2 Lomba Karya Tulis Ilmiah Nasional, Mahir JavaScript & Python, Bisa berbahasa Inggris (TOEFL 550)"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Informasi Keluarga -->
      <div class="form-section-header">
        <h3><i class="bi bi-people"></i> 3. Informasi Keluarga</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Data Ayah (Wajib) -->
            <div class="col-12">
              <label for="infoAyah" class="form-label">
                Data Ayah <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="infoAyah"
                name="infoAyah"
                rows="3"
                required
                minlength="10"
                placeholder="Contoh: Bapak Ahmad bin Abdullah, Pegawai Swasta, Lahir di Bandung 1960"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 10 karakter).</div>
            </div>

            <!-- Data Ibu (Wajib) -->
            <div class="col-12">
              <label for="infoIbu" class="form-label">
                Data Ibu <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="infoIbu"
                name="infoIbu"
                rows="3"
                required
                minlength="10"
                placeholder="Contoh: Ibu Fatimah binti Ahmad, Ibu Rumah Tangga, Lahir di Jakarta 1965"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 10 karakter).</div>
            </div>

            <!-- Urutan Anak (Wajib) -->
            <div class="col-md-6">
              <label for="urutanAnak" class="form-label">
                Urutan Anak <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="urutanAnak"
                name="urutanAnak"
                required
                pattern="\\d+\\s+dari\\s+\\d+"
                placeholder="Contoh: 1 dari 3"
              />
              <div class="invalid-feedback">Format: "X dari Y" (contoh: 1 dari 3).</div>
            </div>

            <!-- Data Saudara (Opsional) -->
            <div class="col-12">
              <label for="infoSaudara" class="form-label">
                Data Saudara
              </label>
              <textarea
                class="form-control"
                id="infoSaudara"
                name="infoSaudara"
                rows="3"
                placeholder="Contoh: Kakak pertama (L) - Mahasiswa S2, Adik kedua (P) - SMA kelas 2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Ibadah & Agama -->
      <div class="form-section-header">
        <h3><i class="bi bi-moon-stars"></i> 4. Ibadah & Pemahaman Agama</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Status Muallaf (Opsional) -->
            <div class="col-md-6">
              <label for="statusMuallaf" class="form-label">
                Status Muallaf
              </label>
              <input
                type="text"
                class="form-control"
                id="statusMuallaf"
                name="statusMuallaf"
                placeholder="Contoh: Muallaf sejak 2015"
              />
            </div>

            <!-- Shalat Wajib (Wajib) -->
            <div class="col-12">
              <label for="shalatWajib" class="form-label">
                Pelaksanaan Shalat Wajib <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="shalatWajib"
                name="shalatWajib"
                rows="2"
                required
                placeholder="Contoh: Alhamdulillah 5 waktu tepat waktu, di masjid untuk shalat Jumat"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Ibadah Sunnah (Opsional) -->
            <div class="col-12">
              <label for="ibadahSunnah" class="form-label">
                Kebiasaan Ibadah Sunnah
              </label>
              <textarea
                class="form-control"
                id="ibadahSunnah"
                name="ibadahSunnah"
                rows="2"
                placeholder="Contoh: Puasa Senin-Kamis, Shalat Tahajud, Qiyamullail"
              ></textarea>
            </div>

            <!-- Bacaan Al-Qur'an (Wajib) -->
            <div class="col-12">
              <label for="bacaanQuran" class="form-label">
                Kemampuan Baca Al-Qur'an <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="bacaanQuran"
                name="bacaanQuran"
                rows="2"
                required
                placeholder="Contoh: Alhamdulillah bisa membaca dengan tartil, sedang mempelajari tajwid"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Kajian Favorit (Opsional) -->
            <div class="col-md-6">
              <label for="kajianFavorit" class="form-label">
                Kajian / Ustadz Favorit
              </label>
              <textarea
                class="form-control"
                id="kajianFavorit"
                name="kajianFavorit"
                rows="2"
                placeholder="Contoh: Ustadz Adi Hidayat, Kajian Fiqih Keluarga"
              ></textarea>
            </div>

            <!-- Afiliasi Organisasi (Opsional) -->
            <div class="col-md-6">
              <label for="afiliasiOrganisasi" class="form-label">
                Organisasi Islam
              </label>
              <input
                type="text"
                class="form-control"
                id="afiliasiOrganisasi"
                name="afiliasiOrganisasi"
                placeholder="Contoh: Pemuda Masjid Al-Ikhlas, Relawan Dakwah"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Profil Diri & Kebiasaan -->
      <div class="form-section-header">
        <h3><i class="bi bi-card-text"></i> 5. Profil Diri & Kebiasaan</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Hobi (Opsional) -->
            <div class="col-12">
              <label for="hobi" class="form-label">
                Hobi / Kegemaran
              </label>
              <input
                type="text"
                class="form-control"
                id="hobi"
                name="hobi"
                placeholder="Contoh: Membaca, Olahraga, Traveling, Menulis"
              />
            </div>

            <!-- Sifat Positif (Wajib) -->
            <div class="col-12">
              <label for="sifatPositif" class="form-label">
                Sifat Positif <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="sifatPositif"
                name="sifatPositif"
                rows="2"
                required
                placeholder="Contoh: Disiplin, bertanggung jawab, mudah bergaul, suka menolong"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Sifat Negatif (Wajib) -->
            <div class="col-12">
              <label for="sifatNegatif" class="form-label">
                Sifat Negatif <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="sifatNegatif"
                name="sifatNegatif"
                rows="2"
                required
                placeholder="Contoh: Kadang terlalu perfeksionis, susah tidur jika ada masalah"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Riwayat Penyakit (Opsional) -->
            <div class="col-12">
              <label for="riwayatPenyakit" class="form-label">
                Riwayat Penyakit
              </label>
              <textarea
                class="form-control"
                id="riwayatPenyakit"
                name="riwayatPenyakit"
                rows="2"
                placeholder="Contoh: Tidak ada, atau Pernah asma saat kecil (sudah sembuh)"
              ></textarea>
            </div>

            <!-- Kebiasaan Merokok (Wajib) -->
            <div class="col-md-6">
              <label for="merokok" class="form-label">
                Kebiasaan Merokok <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="merokok"
                name="merokok"
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
                <option value="Pernah (sudah berhenti)">Pernah (sudah berhenti)</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Status Hijab - Kondisional Perempuan -->
            <div class="col-md-6 conditional-field d-none" id="wrapper-statusHijab">
              <label for="statusHijab" class="form-label">
                Status Hijab (Akhwat) <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="statusHijab"
                name="statusHijab"
              >
                <option value="">-- Pilih --</option>
                <option value="Syar'i">Syar'i</option>
                <option value="Non-Syar'i">Non-Syar'i</option>
                <option value="Bercadar">Bercadar</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Status Jenggot - Kondisional Laki-laki -->
            <div class="col-md-6 conditional-field d-none" id="wrapper-statusJenggot">
              <label for="statusJenggot" class="form-label">
                Status Jenggot (Ikhwan) <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="statusJenggot"
                name="statusJenggot"
              >
                <option value="">-- Pilih --</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Visi Misi Hidup (Opsional) -->
            <div class="col-12">
              <label for="visiMisiHidup" class="form-label">
                Visi Misi Hidup
              </label>
              <textarea
                class="form-control"
                id="visiMisiHidup"
                name="visiMisiHidup"
                rows="3"
                placeholder="Contoh: Menjadi hamba Allah yang taat, bermanfaat untuk sesama, dan membangun keluarga sakinah"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 6: Visi Pernikahan -->
      <div class="form-section-header">
        <h3><i class="bi bi-heart"></i> 6. Visi Pernikahan</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- Visi & Misi Pernikahan (Wajib) -->
            <div class="col-12">
              <label for="visiPernikahan" class="form-label">
                Visi & Misi Pernikahan <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="visiPernikahan"
                name="visiPernikahan"
                rows="3"
                required
                minlength="20"
                placeholder="Contoh: Membangun keluarga yang sakinah mawaddah warahmah, saling mengingatkan dalam kebaikan, mendidik anak-anak menjadi generasi Rabbani"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 20 karakter).</div>
            </div>

            <!-- Kriteria Calon Pasangan (Wajib) -->
            <div class="col-12">
              <label for="kriteriaPasangan" class="form-label">
                Kriteria Calon Pasangan <span class="text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="kriteriaPasangan"
                name="kriteriaPasangan"
                rows="3"
                required
                minlength="20"
                placeholder="Contoh: Beriman dan bertakwa, menjaga ibadah, memiliki akhlak yang baik, bisa menjadi imam/pemimpin keluarga, saling mendukung dalam mencapai tujuan"
              ></textarea>
              <div class="invalid-feedback">Kolom ini wajib diisi (minimal 20 karakter).</div>
            </div>

            <!-- Pandangan tentang Mahar (Opsional) -->
            <div class="col-12">
              <label for="pandanganMahar" class="form-label">
                Pandangan tentang Mahar
              </label>
              <textarea
                class="form-control"
                id="pandanganMahar"
                name="pandanganMahar"
                rows="2"
                placeholder="Contoh: Mahar sesuai kemampuan, yang penting adalah kesungguhan dan tanggung jawab"
              ></textarea>
            </div>

            <!-- Kesediaan Poligami - Kondisional Laki-laki -->
            <div class="col-md-6 conditional-field d-none" id="wrapper-kesediaanPoligami">
              <label for="kesediaanPoligami" class="form-label">
                Pandangan Poligami (Ikhwan) <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="kesediaanPoligami"
                name="kesediaanPoligami"
              >
                <option value="">-- Pilih --</option>
                <option value="Bersedia">Bersedia</option>
                <option value="Tidak Bersedia">Tidak Bersedia</option>
                <option value="Kondisional">Kondisional</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Kesediaan Dipoligami - Kondisional Perempuan -->
            <div class="col-md-6 conditional-field d-none" id="wrapper-kesediaanDipoligami">
              <label for="kesediaanDipoligami" class="form-label">
                Kesediaan Dipoligami (Akhwat) <span class="text-danger">*</span>
              </label>
              <select
                class="form-select"
                id="kesediaanDipoligami"
                name="kesediaanDipoligami"
              >
                <option value="">-- Pilih --</option>
                <option value="Bersedia">Bersedia</option>
                <option value="Tidak Bersedia">Tidak Bersedia</option>
                <option value="Kondisional">Kondisional</option>
              </select>
              <div class="invalid-feedback">Kolom ini wajib diisi.</div>
            </div>

            <!-- Pandangan Istri Bekerja (Opsional) -->
            <div class="col-md-6">
              <label for="pandanganNafkah" class="form-label">
                Pandangan Istri Bekerja
              </label>
              <select
                class="form-select"
                id="pandanganNafkah"
                name="pandanganNafkah"
              >
                <option value="">-- Pilih --</option>
                <option value="IRT Penuh">IRT Penuh</option>
                <option value="Boleh Bekerja">Boleh Bekerja</option>
                <option value="Kondisional">Kondisional</option>
              </select>
            </div>

            <!-- Kesediaan Pindah Domisili (Opsional) -->
            <div class="col-md-6">
              <label for="kesediaanPindah" class="form-label">
                Kesediaan Pindah Domisili
              </label>
              <select
                class="form-select"
                id="kesediaanPindah"
                name="kesediaanPindah"
              >
                <option value="">-- Pilih --</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
                <option value="Bisa Didiskusikan">Bisa Didiskusikan</option>
              </select>
            </div>

            <!-- Target Waktu Menikah (Opsional) -->
            <div class="col-md-6">
              <label for="targetMenikah" class="form-label">
                Target Waktu Menikah
              </label>
              <input
                type="text"
                class="form-control"
                id="targetMenikah"
                name="targetMenikah"
                placeholder="Contoh: 6 bulan, atau Secepat mungkin jika ada jodoh"
              />
            </div>

            <!-- Rencana Setelah Menikah (Opsional) -->
            <div class="col-12">
              <label for="rencanaSetelahMenikah" class="form-label">
                Rencana Pasca Nikah
              </label>
              <textarea
                class="form-control"
                id="rencanaSetelahMenikah"
                name="rencanaSetelahMenikah"
                rows="3"
                placeholder="Contoh: Tinggal bersama orang tua selama 1 tahun, lalu mencari rumah sendiri, fokus membangun karier dan finansial keluarga"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 7: Informasi Kontak -->
      <div class="form-section-header">
        <h3><i class="bi bi-telephone"></i> 7. Informasi Kontak</h3>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <!-- No WhatsApp (Opsional) -->
            <div class="col-md-6">
              <label for="noHP" class="form-label">
                No WhatsApp Aktif
              </label>
              <input
                type="tel"
                class="form-control"
                id="noHP"
                name="noHP"
                pattern="[0-9]{10,15}"
                placeholder="Contoh: 081234567890"
              />
              <div class="invalid-feedback">Gunakan angka saja (10-15 digit).</div>
            </div>

            <!-- Email (Opsional) -->
            <div class="col-md-6">
              <label for="email" class="form-label">
                Alamat Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Contoh: ahmad.fauzi@email.com"
              />
              <div class="invalid-feedback">Format email tidak valid.</div>
            </div>

            <!-- Akun Media Sosial (Opsional) -->
            <div class="col-md-6">
              <label for="akunSosmed" class="form-label">
                Akun Media Sosial
              </label>
              <input
                type="text"
                class="form-control"
                id="akunSosmed"
                name="akunSosmed"
                placeholder="Contoh: @ahmad_fauzi (Instagram)"
              />
            </div>

            <!-- Kontak Wali (Opsional) -->
            <div class="col-md-6">
              <label for="kontakWali" class="form-label">
                Kontak Wali / Mediator
              </label>
              <input
                type="text"
                class="form-control"
                id="kontakWali"
                name="kontakWali"
                placeholder="Contoh: Bapak Abdullah (081234567890)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Action Bar (Sticky Bottom) -->
      <div class="action-bar">
        <div class="d-flex justify-content-between flex-wrap gap-2">
          <button type="button" class="btn btn-outline-secondary" id="btn-reset-form">
            <i class="bi bi-arrow-clockwise"></i> Reset Form
          </button>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-outline-primary" id="btn-save-draft">
              <i class="bi bi-save"></i> Simpan Draft
            </button>
            <button type="submit" class="btn btn-primary" id="btn-preview">
              <i class="bi bi-eye"></i> Preview CV
            </button>
          </div>
        </div>
      </div>
    </form>

    <!-- Spacing for sticky action bar -->
    <div style="height: 80px;"></div>
  `;const e=new Date().toISOString().split("T")[0],i=document.getElementById("tanggalLahir");i&&i.setAttribute("max",e),ge()}function ge(){const a=document.getElementById("cv-form"),e=document.getElementById("btn-reset-form"),i=document.getElementById("btn-save-draft"),t=document.getElementById("jenisKelamin"),n=document.getElementById("statusPernikahan");t&&t.addEventListener("change",ra),n&&n.addEventListener("change",oa),pe(a),a&&a.addEventListener("submit",s=>{s.preventDefault(),ve()}),e&&e.addEventListener("click",()=>{fe()}),i&&i.addEventListener("click",()=>{he()})}function ra(a){const e=a.target.value,i=document.getElementById("wrapper-statusJenggot"),t=document.getElementById("wrapper-kesediaanPoligami"),n=document.getElementById("statusJenggot"),s=document.getElementById("kesediaanPoligami"),o=document.getElementById("wrapper-statusHijab"),l=document.getElementById("wrapper-kesediaanDipoligami"),m=document.getElementById("statusHijab"),u=document.getElementById("kesediaanDipoligami");e==="Laki-laki"?(i.classList.remove("d-none"),t.classList.remove("d-none"),n.setAttribute("required","required"),s.setAttribute("required","required"),o.classList.add("d-none"),l.classList.add("d-none"),m.removeAttribute("required"),u.removeAttribute("required"),m.value="",u.value=""):e==="Perempuan"?(o.classList.remove("d-none"),l.classList.remove("d-none"),m.setAttribute("required","required"),u.setAttribute("required","required"),i.classList.add("d-none"),t.classList.add("d-none"),n.removeAttribute("required"),s.removeAttribute("required"),n.value="",s.value=""):(i.classList.add("d-none"),t.classList.add("d-none"),o.classList.add("d-none"),l.classList.add("d-none"),n.removeAttribute("required"),s.removeAttribute("required"),m.removeAttribute("required"),u.removeAttribute("required"))}function oa(a){const e=a.target.value,i=document.getElementById("wrapper-jumlahAnak"),t=document.getElementById("jumlahAnak");e==="Duda"||e==="Janda"?(i.classList.remove("d-none"),t.setAttribute("required","required")):(i.classList.add("d-none"),t.removeAttribute("required"),t.value="")}function pe(a){a.querySelectorAll("input, select, textarea").forEach(i=>{i.addEventListener("blur",()=>{ia(i)}),i.addEventListener("input",()=>{i.classList.contains("is-invalid")&&L(i)})})}function la(){const a=document.getElementById("cv-form"),e={};return a.querySelectorAll("input, select, textarea").forEach(t=>{const n=t.name||t.id,s=t.value.trim();t.closest(".d-none")||!n||(e[n]=s)}),e}function he(){const a=document.getElementById("btn-save-draft"),e=la();if(!Object.values(e).some(t=>t!=="")){d("Tidak ada data untuk disimpan","warning");return}C(a,"Menyimpan..."),setTimeout(()=>{const t=Za(e);S(a),t.success?(d("Draft berhasil disimpan! Anda dapat melanjutkan nanti.","success"),console.log("[FormView] Draft saved with ID:",t.data?.id)):(d(t.message||"Gagal menyimpan draft","error"),console.error("[FormView] Save draft failed:",t))},500)}function z(a){const e=document.getElementById("cv-form");!e||!a||(Object.keys(a).forEach(i=>{const t=e.querySelector(`[name="${i}"], #${i}`);t&&a[i]&&(t.value=a[i],(i==="jenisKelamin"||i==="statusPernikahan")&&t.dispatchEvent(new Event("change")))}),console.log("[FormView] Draft loaded successfully"),d("Draft berhasil dimuat","success"))}function ve(){const a=document.getElementById("cv-form"),e=_a(a);if(!e.isValid){d("Form belum lengkap. Periksa field yang ditandai merah.","error"),e.firstInvalidField&&(e.firstInvalidField.scrollIntoView({behavior:"smooth",block:"center"}),e.firstInvalidField.focus());return}const i=la();try{sessionStorage.setItem(h.TEMP_DATA,JSON.stringify(i)),console.log("[FormView] Form data saved to sessionStorage"),v("/preview")}catch(t){console.error("[FormView] Error saving to sessionStorage:",t),d("Gagal menyimpan data. Silakan coba lagi.","error")}}function fe(){if(confirm("Apakah Anda yakin ingin mereset semua isian form?")){const a=document.getElementById("cv-form");a.reset(),ra({target:{value:""}}),oa({target:{value:"Lajang"}}),a.querySelectorAll("input, select, textarea").forEach(i=>L(i)),console.log("[FormView] Form reset"),d("Form berhasil direset","info")}}function ke(){be();const a=document.getElementById("cv-form");a&&Fa(a);const e=sessionStorage.getItem(h.DRAFT_TO_LOAD);if(e)try{const t=JSON.parse(e);setTimeout(()=>{z(t),sessionStorage.removeItem(h.DRAFT_TO_LOAD),console.log("[FormView] Draft loaded from Draft page")},100),console.log("[FormView] Form view initialized with draft data");return}catch(t){console.error("[FormView] Error loading draft:",t),d("Gagal memuat draft","error")}const i=sessionStorage.getItem(h.TEMP_DATA);if(i)try{const t=JSON.parse(i);setTimeout(()=>{z(t),sessionStorage.removeItem(h.TEMP_DATA),console.log("[FormView] Restored data from preview (temp data cleared)")},100),console.log("[FormView] Form view initialized with preview data");return}catch(t){console.error("[FormView] Error loading temp data:",t),d("Gagal memuat data dari preview","error")}console.log("[FormView] Form view initialized with real-time validation")}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-form"&&ke()});const da=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ye=a=>{if(!a||a==="")return"-";try{const e=a.split("-");if(e.length!==3)return"-";const[i,t,n]=e,s=parseInt(i,10),o=parseInt(t,10),l=parseInt(n,10);return isNaN(s)||isNaN(o)||isNaN(l)||o<1||o>12||l<1||l>31?"-":`${l} ${da[o-1]} ${s}`}catch(e){return console.error("[cvGeneratorService] Error formatting date:",e),"-"}},r=a=>a==null||a===""?"-":String(a).trim(),we=()=>{const a=new Date,e=a.getDate(),i=da[a.getMonth()],t=a.getFullYear();return`${e} ${i} ${t}`},A=a=>`${a}
${"-".repeat(64)}
`,c=(a,e)=>`${a.padEnd(20)}: ${e}
`,b=(a,e)=>`${a}:
${e}

`,Ae=a=>{const e="=".repeat(64);return[e,"                    CURRICULUM VITAE TA'ARUF",e,`Tanggal Pembuatan: ${a}`,""].join(`
`)},Se=(a,e)=>{const i=[A("I. DATA PRIBADI"),c("Nama Lengkap",r(a.namaLengkap)),c("Nama Panggilan",r(a.namaPanggilan)),c("Tempat, Tgl Lahir",`${r(a.tempatLahir)}, ${e}`),c("Jenis Kelamin",r(a.jenisKelamin)),c("Tinggi / Berat",`${r(a.tinggiBadan)} cm / ${r(a.beratBadan)} kg`),c("Warna Kulit",r(a.warnaKulit)),c("Suku Bangsa",r(a.suku)),c("Domisili Saat Ini",r(a.domisili)),c("Asal Daerah",r(a.asalDaerah)),c("Pekerjaan",r(a.pekerjaan)),c("Pengalaman Kerja",r(a.pengalamanKerja)),c("Penghasilan Bulanan",r(a.penghasilanBulanan)),c("Status Tempat Tinggal",r(a.statusRumah)),c("Status Pernikahan",r(a.statusPernikahan))];return(a.statusPernikahan==="Duda"||a.statusPernikahan==="Janda")&&i.push(c("Jumlah Anak",r(a.jumlahAnak))),i.push(c("Pernah Khitbah",r(a.pernahKhitbah)),c("Status Izin Wali",r(a.statusIzin)),`
`),i.join("")},Te=a=>[A("II. RIWAYAT PENDIDIKAN"),b("Pendidikan Terakhir",r(a.pendidikanTerakhir)),b("Pendidikan Non-Formal",r(a.pendidikanNonFormal)),b("Prestasi / Keahlian Khusus",r(a.prestasi))].join(""),Ee=a=>[A("III. INFORMASI KELUARGA"),b("Data Ayah",r(a.infoAyah)),b("Data Ibu",r(a.infoIbu)),`Anak ke: ${r(a.urutanAnak)}

`,b("Data Saudara",r(a.infoSaudara))].join(""),De=a=>[A("IV. IBADAH & PEMAHAMAN AGAMA"),c("Status Muallaf",r(a.statusMuallaf)),`
`,b("Pelaksanaan Shalat Wajib",r(a.shalatWajib)),b("Kebiasaan Ibadah Sunnah",r(a.ibadahSunnah)),b("Kemampuan Baca Al-Qur'an & Hafalan",r(a.bacaanQuran)),b("Kajian / Ustadz Favorit",r(a.kajianFavorit)),b("Organisasi / Komunitas Islam",r(a.afiliasiOrganisasi))].join(""),Pe=a=>{const e=[A("V. PROFIL DIRI & KEBIASAAN"),c("Hobi / Kegemaran",r(a.hobi)),c("Merokok",r(a.merokok))];return a.jenisKelamin==="Laki-laki"&&e.push(c("Status Jenggot",r(a.statusJenggot))),a.jenisKelamin==="Perempuan"&&e.push(c("Status Hijab",r(a.statusHijab))),e.push(`
`,b("Sifat Positif (Kelebihan)",r(a.sifatPositif)),b("Sifat Negatif (Kekurangan)",r(a.sifatNegatif)),b("Riwayat Penyakit",r(a.riwayatPenyakit)),b("Visi Misi Hidup",r(a.visiMisiHidup))),e.join("")},Le=a=>{const e=[A("VI. VISI PERNIKAHAN"),b("Visi & Misi Pernikahan",r(a.visiPernikahan)),b("Kriteria Calon Pasangan",r(a.kriteriaPasangan)),b("Pandangan tentang Mahar",r(a.pandanganMahar))];return a.jenisKelamin==="Laki-laki"&&e.push(c("Pandangan tentang Poligami",r(a.kesediaanPoligami))),a.jenisKelamin==="Perempuan"&&e.push(c("Kesediaan Dipoligami",r(a.kesediaanDipoligami))),e.push(c("Pandangan Istri Bekerja",r(a.pandanganNafkah)),c("Kesediaan Pindah Domisili",r(a.kesediaanPindah)),c("Target Waktu Menikah",r(a.targetMenikah)),`
`,b("Rencana Setelah Menikah",r(a.rencanaSetelahMenikah))),e.join("")},Ie=a=>[A("VII. KONTAK (Untuk Keperluan Mediator)"),c("No HP/WhatsApp",r(a.noHP)),c("Email",r(a.email)),c("Akun Sosmed",r(a.akunSosmed)),c("Kontak Wali",r(a.kontakWali)),`
`].join(""),Ce=()=>{const a="=".repeat(64);return[a,"*Data ini diisi dengan sebenar-benarnya dan dapat","dipertanggungjawabkan.*",a].join(`
`)},xe=a=>{try{if(!a||typeof a!="object")throw new Error("[cvGeneratorService] Data must be a non-null object");const e=we(),i=ye(a.tanggalLahir);return[Ae(e),Se(a,i),Te(a),Ee(a),De(a),Pe(a),Le(a),Ie(a),Ce()].join(`
`)}catch(e){throw console.error("[cvGeneratorService] Error generating CV:",e),e}};function je(){const a=document.getElementById("view-preview"),e=ca();if(Object.keys(e).length===0){d("Tidak ada data untuk di-preview. Silakan isi formulir terlebih dahulu.","warning"),v("/form");return}const i=Me(e);a.innerHTML=`
    <!-- Preview Header -->
    <div class="mb-4">
      <h2>
        <i class="bi bi-eye"></i> Preview Data CV Ta'aruf
      </h2>
      <p class="text-muted">
        Periksa kembali data Anda sebelum men-generate CV. 
        Pastikan semua informasi sudah benar.
      </p>
    </div>

    <!-- Preview Container -->
    <div class="card mb-4">
      <div class="card-body">
        <div id="preview-content">
          ${i}
        </div>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" id="btn-back-to-form">
          <i class="bi bi-arrow-left"></i> Kembali ke Edit
        </button>
        <button type="button" class="btn btn-success" id="btn-generate-cv">
          <i class="bi bi-file-earmark-check"></i> Generate CV
        </button>
      </div>
    </div>

    <!-- Spacing for sticky action bar -->
    <div style="height: 80px;"></div>
  `,He()}function ca(){try{const a=sessionStorage.getItem(h.TEMP_DATA);return a?JSON.parse(a):{}}catch(a){return console.error("[PreviewView] Error loading form data:",a),{}}}function Me(a){let e="";const i=t=>t||"-";return e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-person"></i> 1. Data Pribadi
      </h5>
      <div class="row g-2">
        <div class="col-md-6"><strong>Nama Lengkap:</strong> ${i(a.namaLengkap)}</div>
        <div class="col-md-6"><strong>Nama Panggilan:</strong> ${i(a.namaPanggilan)}</div>
        <div class="col-md-6"><strong>Tempat Lahir:</strong> ${i(a.tempatLahir)}</div>
        <div class="col-md-6"><strong>Tanggal Lahir:</strong> ${i(a.tanggalLahir)}</div>
        <div class="col-md-6"><strong>Jenis Kelamin:</strong> ${i(a.jenisKelamin)}</div>
        <div class="col-md-6"><strong>Tinggi/Berat:</strong> ${i(a.tinggiBadan)} cm / ${i(a.beratBadan)} kg</div>
        <div class="col-md-6"><strong>Warna Kulit:</strong> ${i(a.warnaKulit)}</div>
        <div class="col-md-6"><strong>Suku:</strong> ${i(a.suku)}</div>
        <div class="col-md-6"><strong>Domisili:</strong> ${i(a.domisili)}</div>
        <div class="col-md-6"><strong>Asal Daerah:</strong> ${i(a.asalDaerah)}</div>
        <div class="col-md-6"><strong>Pekerjaan:</strong> ${i(a.pekerjaan)}</div>
        <div class="col-md-6"><strong>Penghasilan:</strong> ${i(a.penghasilanBulanan)}</div>
        <div class="col-md-6"><strong>Status Rumah:</strong> ${i(a.statusRumah)}</div>
        <div class="col-md-6"><strong>Status Pernikahan:</strong> ${i(a.statusPernikahan)}</div>
        ${a.statusPernikahan==="Duda"||a.statusPernikahan==="Janda"?`<div class="col-md-6"><strong>Jumlah Anak:</strong> ${i(a.jumlahAnak)}</div>`:""}
        <div class="col-md-6"><strong>Pernah Khitbah:</strong> ${i(a.pernahKhitbah)}</div>
        <div class="col-md-6"><strong>Status Izin Menikah:</strong> ${i(a.statusIzin)}</div>
      </div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-mortarboard"></i> 2. Riwayat Pendidikan
      </h5>
      <div class="mb-2"><strong>Pendidikan Terakhir:</strong><br>${i(a.pendidikanTerakhir)}</div>
      <div class="mb-2"><strong>Pendidikan Non-Formal:</strong><br>${i(a.pendidikanNonFormal)}</div>
      <div class="mb-2"><strong>Prestasi/Keahlian:</strong><br>${i(a.prestasi)}</div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-people"></i> 3. Informasi Keluarga
      </h5>
      <div class="mb-2"><strong>Data Ayah:</strong><br>${i(a.infoAyah)}</div>
      <div class="mb-2"><strong>Data Ibu:</strong><br>${i(a.infoIbu)}</div>
      <div class="mb-2"><strong>Urutan Anak:</strong> ${i(a.urutanAnak)}</div>
      <div class="mb-2"><strong>Data Saudara:</strong><br>${i(a.infoSaudara)}</div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-moon-stars"></i> 4. Ibadah & Pemahaman Agama
      </h5>
      <div class="mb-2"><strong>Status Muallaf:</strong> ${i(a.statusMuallaf)}</div>
      <div class="mb-2"><strong>Shalat Wajib:</strong><br>${i(a.shalatWajib)}</div>
      <div class="mb-2"><strong>Ibadah Sunnah:</strong><br>${i(a.ibadahSunnah)}</div>
      <div class="mb-2"><strong>Bacaan Al-Qur'an:</strong><br>${i(a.bacaanQuran)}</div>
      <div class="mb-2"><strong>Kajian Favorit:</strong><br>${i(a.kajianFavorit)}</div>
      <div class="mb-2"><strong>Organisasi Islam:</strong> ${i(a.afiliasiOrganisasi)}</div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-card-text"></i> 5. Profil Diri & Kebiasaan
      </h5>
      <div class="mb-2"><strong>Hobi:</strong> ${i(a.hobi)}</div>
      <div class="mb-2"><strong>Merokok:</strong> ${i(a.merokok)}</div>
      ${a.jenisKelamin==="Laki-laki"?`<div class="mb-2"><strong>Status Jenggot:</strong> ${i(a.statusJenggot)}</div>`:""}
      ${a.jenisKelamin==="Perempuan"?`<div class="mb-2"><strong>Status Hijab:</strong> ${i(a.statusHijab)}</div>`:""}
      <div class="mb-2"><strong>Sifat Positif:</strong><br>${i(a.sifatPositif)}</div>
      <div class="mb-2"><strong>Sifat Negatif:</strong><br>${i(a.sifatNegatif)}</div>
      <div class="mb-2"><strong>Riwayat Penyakit:</strong><br>${i(a.riwayatPenyakit)}</div>
      <div class="mb-2"><strong>Visi Misi Hidup:</strong><br>${i(a.visiMisiHidup)}</div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-heart"></i> 6. Visi Pernikahan
      </h5>
      <div class="mb-2"><strong>Visi & Misi Pernikahan:</strong><br>${i(a.visiPernikahan)}</div>
      <div class="mb-2"><strong>Kriteria Pasangan:</strong><br>${i(a.kriteriaPasangan)}</div>
      <div class="mb-2"><strong>Pandangan Mahar:</strong><br>${i(a.pandanganMahar)}</div>
      ${a.jenisKelamin==="Laki-laki"?`<div class="mb-2"><strong>Pandangan Poligami:</strong> ${i(a.kesediaanPoligami)}</div>`:""}
      ${a.jenisKelamin==="Perempuan"?`<div class="mb-2"><strong>Kesediaan Dipoligami:</strong> ${i(a.kesediaanDipoligami)}</div>`:""}
      <div class="mb-2"><strong>Pandangan Istri Bekerja:</strong> ${i(a.pandanganNafkah)}</div>
      <div class="mb-2"><strong>Kesediaan Pindah:</strong> ${i(a.kesediaanPindah)}</div>
      <div class="mb-2"><strong>Target Menikah:</strong> ${i(a.targetMenikah)}</div>
      <div class="mb-2"><strong>Rencana Setelah Menikah:</strong><br>${i(a.rencanaSetelahMenikah)}</div>
    </div>
  `,e+=`
    <div class="preview-section mb-4">
      <h5 class="text-primary mb-3">
        <i class="bi bi-telephone"></i> 7. Informasi Kontak
      </h5>
      <div class="row g-2">
        <div class="col-md-6"><strong>No HP/WhatsApp:</strong> ${i(a.noHP)}</div>
        <div class="col-md-6"><strong>Email:</strong> ${i(a.email)}</div>
        <div class="col-md-6"><strong>Akun Sosmed:</strong> ${i(a.akunSosmed)}</div>
        <div class="col-md-6"><strong>Kontak Wali:</strong> ${i(a.kontakWali)}</div>
      </div>
    </div>
  `,e}function He(){const a=document.getElementById("btn-back-to-form"),e=document.getElementById("btn-generate-cv");a&&a.addEventListener("click",()=>{v("/form")}),e&&e.addEventListener("click",Ke)}function Ke(){const a=ca();if(!a){d("Data tidak ditemukan. Silakan isi formulir terlebih dahulu.","error"),v("/form");return}const e=document.getElementById("btn-generate-cv"),i=e.innerHTML;e.disabled=!0,e.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Generating...',setTimeout(()=>{try{const t=xe(a);if(!t)throw new Error("Failed to generate CV text");sessionStorage.setItem("taaruf_cv_generated_text",t),sessionStorage.setItem("taaruf_cv_source_data",JSON.stringify(a)),console.log("[PreviewView] CV generated successfully"),v("/result")}catch(t){console.error("[PreviewView] Error generating CV:",t),d("Gagal men-generate CV. Silakan coba lagi.","error"),e.disabled=!1,e.innerHTML=i}},500)}function Be(){je()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-preview"&&Be()});function Ve(){const a=document.getElementById("view-result"),e=sessionStorage.getItem(h.GENERATED_TEXT);if(!e){d("Tidak ada CV yang di-generate. Silakan isi formulir terlebih dahulu.","warning"),v("/form");return}const i=e.length.toLocaleString("id-ID");a.innerHTML=`
    <!-- Success Alert -->
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">
        <i class="bi bi-check-circle"></i> CV Ta'aruf Berhasil Dibuat!
      </h4>
      <p class="mb-0">
        CV Anda telah berhasil di-generate. Anda dapat menyalin teks di bawah 
        atau menyimpannya ke riwayat untuk diakses nanti.
      </p>
    </div>

    <!-- Output Area -->
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">
          <i class="bi bi-file-earmark-text"></i> CV Ta'aruf Anda
        </h5>
        <span class="badge bg-secondary">${i} karakter</span>
      </div>
      <div class="card-body">
        <textarea 
          id="cv-output" 
          class="form-control cv-preview" 
          rows="25" 
          readonly
          style="font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;"
        >${e}</textarea>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <div class="d-flex gap-2 flex-wrap">
          <button type="button" class="btn btn-primary" id="btn-copy-cv">
            <i class="bi bi-clipboard"></i> Copy to Clipboard
          </button>
          <button type="button" class="btn btn-success" id="btn-save-history">
            <i class="bi bi-save"></i> Simpan ke History
          </button>
          <button type="button" class="btn btn-outline-info" id="btn-print-cv">
            <i class="bi bi-printer"></i> Print
          </button>
        </div>
        <div class="d-flex gap-2 flex-wrap">
          <button type="button" class="btn btn-outline-secondary" id="btn-new-cv">
            <i class="bi bi-plus-circle"></i> Buat CV Baru
          </button>
          <button type="button" class="btn btn-outline-primary" id="btn-back-home">
            <i class="bi bi-house"></i> Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>

    <!-- Spacing for sticky action bar -->
    <div style="height: 80px;"></div>
  `,Fe()}async function $e(){const a=document.getElementById("cv-output"),e=document.getElementById("btn-copy-cv");if(a)try{await navigator.clipboard.writeText(a.value),d("CV berhasil disalin ke clipboard!","success");const i=e.innerHTML;e.innerHTML='<i class="bi bi-check"></i> Tersalin!',e.classList.add("btn-success"),e.classList.remove("btn-primary"),setTimeout(()=>{e.innerHTML=i,e.classList.remove("btn-success"),e.classList.add("btn-primary")},2e3),console.log("[ResultView] CV copied to clipboard via Clipboard API")}catch(i){console.warn("[ResultView] Clipboard API failed, trying execCommand:",i);try{a.select(),document.execCommand("copy"),d("CV berhasil disalin ke clipboard!","success"),console.log("[ResultView] CV copied via execCommand")}catch(t){console.error("[ResultView] All copy methods failed:",t),d("Gagal menyalin. Silakan gunakan Ctrl+A dan Ctrl+C.","error")}}}function Ne(){const a=sessionStorage.getItem(h.GENERATED_TEXT),e=sessionStorage.getItem(h.SOURCE_DATA);if(!a||!e){d("Data CV tidak ditemukan. Tidak dapat menyimpan ke history.","error");return}try{const i=JSON.parse(e),t=ee(i,a);if(t.success){d("CV berhasil disimpan ke history!","success"),console.log("[ResultView] CV saved to history:",t.data?.id);const n=document.getElementById("btn-save-history");n&&(n.disabled=!0,n.innerHTML='<i class="bi bi-check-circle"></i> Sudah Disimpan')}else d(t.message||"Gagal menyimpan ke history","error"),console.error("[ResultView] Save history failed:",t)}catch(i){console.error("[ResultView] Failed to save history:",i),d("Gagal menyimpan ke history. Silakan coba lagi.","error")}}function Re(){const a=sessionStorage.getItem(h.GENERATED_TEXT);if(!a){d("Tidak ada CV untuk dicetak.","error");return}const e=window.open("","_blank");e.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CV Ta'aruf - Print</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          font-size: 12pt;
          line-height: 1.6;
          margin: 2cm;
          white-space: pre-wrap;
        }
        @media print {
          body { margin: 1cm; }
        }
      </style>
    </head>
    <body>${a}</body>
    </html>
  `),e.document.close(),e.focus(),setTimeout(()=>{e.print()},250),console.log("[ResultView] Print dialog opened")}function _e(){sessionStorage.removeItem(h.TEMP_DATA),sessionStorage.removeItem(h.GENERATED_TEXT),sessionStorage.removeItem(h.SOURCE_DATA),d("Membuat CV baru. Silakan isi formulir.","info"),v("/form"),console.log("[ResultView] Starting new CV, sessionStorage cleared")}function Fe(){const a=document.getElementById("btn-copy-cv"),e=document.getElementById("btn-save-history"),i=document.getElementById("btn-print-cv"),t=document.getElementById("btn-new-cv"),n=document.getElementById("btn-back-home");a&&a.addEventListener("click",$e),e&&e.addEventListener("click",Ne),i&&i.addEventListener("click",Re),t&&t.addEventListener("click",_e),n&&n.addEventListener("click",()=>{v("/")})}function Oe(){Ve(),sessionStorage.removeItem(h.TEMP_DATA),console.log("[ResultView] Cleared temporary form data")}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-result"&&Oe()});function qe(){const a=document.getElementById("view-draft");a.innerHTML=`
    <!-- Page Header -->
    <div class="mb-4">
      <h2>
        <i class="bi bi-file-earmark-text"></i> Draft Saya
      </h2>
      <p class="text-muted">
        Kelola draft CV yang belum selesai. Anda dapat melanjutkan mengisi 
        atau menghapus draft yang tidak diperlukan.
      </p>
    </div>

    <!-- Draft List Container -->
    <div id="draft-list-container">
      <!-- Draft list will be loaded here dynamically -->
    </div>
  `,ua()}function ua(){const a=document.getElementById("draft-list-container"),i=R().sort((t,n)=>new Date(n.lastUpdated)-new Date(t.lastUpdated));i.length===0?Je(a):We(a,i),console.log(`[DraftView] Loaded ${i.length} drafts`)}function Je(a){a.innerHTML=`
    <div class="card">
      <div class="card-body empty-state">
        <i class="bi bi-inbox"></i>
        <h4>Belum Ada Draft Tersimpan</h4>
        <p class="text-muted">
          Draft akan tersimpan otomatis saat Anda klik tombol "Simpan Draft" 
          di halaman formulir.
        </p>
        <button class="btn btn-primary" id="btn-create-new">
          <i class="bi bi-plus-circle"></i> Buat CV Baru
        </button>
      </div>
    </div>
  `;const e=document.getElementById("btn-create-new");e&&e.addEventListener("click",()=>{v("/form")})}function We(a,e){let i='<div class="list-group">';e.forEach(n=>{i+=`
      <div class="list-group-item draft-card">
        <div class="d-flex w-100 justify-content-between align-items-start">
          <div>
            <h5 class="mb-1">${n.name||"Draft Tanpa Nama"}</h5>
            <p class="mb-1 text-muted small">
              <i class="bi bi-clock"></i> 
              Terakhir diupdate: ${$(n.lastUpdated)}
            </p>
            ${n.data.namaLengkap?`<p class="mb-1"><strong>Nama:</strong> ${n.data.namaLengkap}</p>`:""}
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-primary btn-load-draft" data-id="${n.id}" data-bs-toggle="tooltip" data-bs-placement="top" title="Muat draft ini ke formulir">
              <i class="bi bi-arrow-right-circle"></i> Load
            </button>
            <button class="btn btn-sm btn-danger btn-delete-draft" data-id="${n.id}" data-bs-toggle="tooltip" data-bs-placement="top" title="Hapus draft ini secara permanen">
              <i class="bi bi-trash"></i> Hapus
            </button>
          </div>
        </div>
      </div>
    `}),i+="</div>",a.innerHTML=i,Ye(),[].slice.call(a.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(n=>{new bootstrap.Tooltip(n)})}function Ue(a,e){const i=sa(a);if(!i){d("Draft tidak ditemukan","error");return}e&&C(e,"Memuat..."),setTimeout(()=>{sessionStorage.setItem(h.DRAFT_TO_LOAD,JSON.stringify(i.data)),v("/form"),console.log("[DraftView] Loading draft:",a),d("Memuat draft ke formulir...","loading")},300)}function Ge(a){const e=sa(a);if(!e){d("Draft tidak ditemukan","error");return}const i=`Apakah Anda yakin ingin menghapus draft "${e.name}"?

Tindakan ini tidak dapat dibatalkan.`;if(!confirm(i))return;const t=ae(a);t.success?(d("Draft berhasil dihapus","success"),console.log("[DraftView] Deleted draft:",a),ua()):(d(t.message||"Gagal menghapus draft","error"),console.error("[DraftView] Delete failed:",t))}function Ye(){const a=document.getElementById("draft-list-container");if(!a)return;a.addEventListener("click",i=>{const t=i.target.closest(".btn-load-draft");if(t){const s=t.getAttribute("data-id");Ue(s,t);return}const n=i.target.closest(".btn-delete-draft");if(n){const s=n.getAttribute("data-id");Ge(s);return}}),[].slice.call(a.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(i=>{new bootstrap.Tooltip(i)})}function ze(){qe()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-draft"&&ze()});function Qe(){const a=document.getElementById("view-history");a.innerHTML=`
    <!-- Page Header -->
    <div class="mb-4">
      <h2>
        <i class="bi bi-clock-history"></i> Riwayat CV
      </h2>
      <p class="text-muted">
        Lihat dan kelola CV yang sudah pernah Anda buat sebelumnya.
      </p>
    </div>

    <!-- History List Container -->
    <div id="history-list-container">
      <!-- History list will be loaded here dynamically -->
    </div>

    <!-- View Modal -->
    <div class="modal fade" id="modalViewHistory" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="bi bi-file-earmark-text"></i> CV Ta'aruf
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <pre id="modal-cv-content" class="cv-preview" style="white-space: pre-wrap;"></pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            <button type="button" class="btn btn-primary" id="btn-modal-copy">
              <i class="bi bi-clipboard"></i> Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  `,ma()}function ma(){const a=document.getElementById("history-list-container"),i=_().sort((t,n)=>new Date(n.generatedAt)-new Date(t.generatedAt));i.length===0?Xe(a):Ze(a,i),console.log(`[HistoryView] Loaded ${i.length} history items`)}function Xe(a){a.innerHTML=`
    <div class="card">
      <div class="card-body empty-state">
        <i class="bi bi-hourglass-split"></i>
        <h4>Belum Ada Riwayat CV</h4>
        <p class="text-muted">
          Riwayat CV akan tersimpan otomatis setelah Anda selesai membuat CV 
          dan klik tombol "Simpan ke History".
        </p>
        <button class="btn btn-primary" id="btn-create-new">
          <i class="bi bi-plus-circle"></i> Buat CV Sekarang
        </button>
      </div>
    </div>
  `;const e=document.getElementById("btn-create-new");e&&e.addEventListener("click",()=>{v("/form")})}function Ze(a,e){let i='<div class="list-group">';e.forEach(n=>{i+=`
      <div class="list-group-item history-card">
        <div class="d-flex w-100 justify-content-between align-items-start">
          <div>
            <h5 class="mb-1">${n.name||"CV Ta'aruf"}</h5>
            <p class="mb-1 text-muted small">
              <i class="bi bi-calendar"></i> 
              Dibuat: ${$(n.generatedAt)}
            </p>
            ${n.sourceData&&n.sourceData.namaLengkap?`<p class="mb-1"><strong>Nama:</strong> ${n.sourceData.namaLengkap}</p>`:""}
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-view-history" data-id="${n.id}" data-bs-toggle="tooltip" data-bs-placement="top" title="Lihat CV dalam modal" style="background-color: #1a7431; color: white; border-color: #1a7431;">
              <i class="bi bi-eye"></i> Lihat
            </button>
            <button class="btn btn-sm btn-primary btn-copy-history" data-id="${n.id}" data-bs-toggle="tooltip" data-bs-placement="top" title="Salin CV ke clipboard">
              <i class="bi bi-clipboard"></i> Copy
            </button>
            <button class="btn btn-sm btn-danger btn-delete-history" data-id="${n.id}" data-bs-toggle="tooltip" data-bs-placement="top" title="Hapus riwayat ini secara permanen">
              <i class="bi bi-trash"></i> Hapus
            </button>
          </div>
        </div>
      </div>
    `}),i+="</div>",a.innerHTML=i,ti(),[].slice.call(a.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(n=>{new bootstrap.Tooltip(n)})}function ai(a){const e=F(a);if(!e){d("Riwayat tidak ditemukan","error");return}const i=document.getElementById("modalViewHistory"),t=document.getElementById("modal-cv-content");if(!i||!t)return;t.textContent=e.cvTextContent,i.dataset.currentHistoryId=a,new bootstrap.Modal(i).show(),console.log("[HistoryView] Viewing history:",a)}async function ba(a,e){const i=F(a);if(!i){d("Riwayat tidak ditemukan","error");return}e&&C(e,"Menyalin...");try{await navigator.clipboard.writeText(i.cvTextContent),e&&S(e),d("CV berhasil disalin ke clipboard!","success"),console.log("[HistoryView] CV copied from history:",a)}catch(t){console.warn("[HistoryView] Clipboard API failed, trying fallback:",t);const n=document.createElement("textarea");n.value=i.cvTextContent,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();try{document.execCommand("copy"),e&&S(e),d("CV berhasil disalin ke clipboard!","success"),console.log("[HistoryView] CV copied via execCommand")}catch(s){console.error("[HistoryView] All copy methods failed:",s),e&&S(e),d("Gagal menyalin. Silakan gunakan tombol View lalu copy manual.","error")}document.body.removeChild(n)}}function ei(a,e){const i=F(a);if(!i){d("Riwayat tidak ditemukan","error");return}const t=`Apakah Anda yakin ingin menghapus CV "${i.name}"?

Tindakan ini tidak dapat dibatalkan.`;confirm(t)&&(e&&C(e,"Menghapus..."),setTimeout(()=>{const n=ie(a);e&&S(e),n.success?(d("Riwayat CV berhasil dihapus","success"),console.log("[HistoryView] Deleted history:",a),ma()):(d(n.message||"Gagal menghapus riwayat","error"),console.error("[HistoryView] Delete failed:",n))},300))}async function ii(){const e=document.getElementById("modalViewHistory")?.dataset.currentHistoryId;if(!e){d("ID riwayat tidak ditemukan","error");return}await ba(e)}function ti(){const a=document.getElementById("history-list-container");if(!a)return;a.addEventListener("click",t=>{const n=t.target.closest(".btn-view-history");if(n){const l=n.getAttribute("data-id");ai(l);return}const s=t.target.closest(".btn-copy-history");if(s){const l=s.getAttribute("data-id");ba(l,s);return}const o=t.target.closest(".btn-delete-history");if(o){const l=o.getAttribute("data-id");ei(l,o);return}});const e=document.getElementById("btn-modal-copy");e&&e.addEventListener("click",ii),[].slice.call(a.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(t=>{new bootstrap.Tooltip(t)})}function ni(){Qe()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-history"&&ni()});const si="modulepreload",ri=function(a){return"/pembuat-cv-taaruf-islam/"+a},Q={},oi=function(e,i,t){let n=Promise.resolve();if(i&&i.length>0){let m=function(u){return Promise.all(u.map(g=>Promise.resolve(g).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");n=m(i.map(u=>{if(u=ri(u),u in Q)return;Q[u]=!0;const g=u.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${w}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":si,g||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),g)return new Promise((K,fa)=>{p.addEventListener("load",K),p.addEventListener("error",()=>fa(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return n.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},li=[{id:"DJ-01",category:"doa-jodoh",title:"Doa Nabi Musa AS Mencari Jodoh",arabic:"رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",translation:"Ya Tuhanku, sesungguhnya aku sangat memerlukan kebaikan apapun yang Engkau turunkan kepadaku.",source:"QS. Al-Qashash: 24"},{id:"DJ-02",category:"doa-jodoh",title:"Doa Memohon Pasangan Shalih",arabic:"رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",translation:"Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menjadi penyejuk mata kami, dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.",source:"QS. Al-Furqan: 74"},{id:"DJ-03",category:"doa-jodoh",title:"Doa Istikharah",arabic:"اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ...",translation:"Ya Allah, aku memohon pilihan yang terbaik kepada-Mu dengan ilmu-Mu, aku memohon kekuatan dengan kekuasaan-Mu, dan aku memohon karunia-Mu yang agung...",source:"HR. Bukhari no. 1162"},{id:"DK-01",category:"doa-khitbah",title:"Doa Ketika Melihat Calon Pasangan",arabic:"اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ",translation:"Ya Allah, aku memohon kepada-Mu kebaikannya dan kebaikan yang Engkau ciptakan dalam dirinya, dan aku berlindung kepada-Mu dari keburukannya dan keburukan yang Engkau ciptakan dalam dirinya.",source:"HR. Abu Dawud no. 2160"},{id:"DW-01",category:"doa-walimah",title:"Doa Pengantin untuk Pasangan",arabic:"بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",translation:"Semoga Allah memberkahimu dan memberkahi atasmu, serta mengumpulkan kalian berdua dalam kebaikan.",source:"HR. Abu Dawud no. 2130"},{id:"DW-02",category:"doa-walimah",title:"Doa Malam Pertama",arabic:"اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ",translation:"Ya Allah, aku memohon kepada-Mu kebaikannya dan kebaikan yang Engkau ciptakan padanya, dan aku berlindung kepada-Mu dari keburukannya dan keburukan yang Engkau ciptakan padanya.",source:"HR. Abu Dawud no. 2160"},{id:"DW-03",category:"doa-walimah",title:"Doa Sebelum Berhubungan Suami Istri",arabic:"بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",translation:"Dengan nama Allah. Ya Allah, jauhkanlah kami dari setan dan jauhkanlah setan dari apa yang Engkau rezekikan kepada kami.",source:"HR. Bukhari no. 141"},{id:"HK-01",category:"hadits-menikah",title:"Menikah Setengah Agama",arabic:"إِذَا تَزَوَّجَ الْعَبْدُ فَقَدِ اسْتَكْمَلَ نِصْفَ الدِّينِ فَلْيَتَّقِ اللَّهَ فِي النِّصْفِ الْبَاقِي",translation:"Jika seorang hamba menikah, maka ia telah menyempurnakan setengah agamanya. Maka bertakwalah kepada Allah pada setengah sisanya.",source:"HR. Al-Baihaqi dalam Syu'abul Iman no. 5486, Al-Hakim no. 2681"},{id:"HK-02",category:"hadits-menikah",title:"Anjuran Menikah bagi Pemuda",arabic:"يَا مَعْشَرَ الشَّبَابِ مَنِ اسْتَطَاعَ مِنْكُمُ الْبَاءَةَ فَلْيَتَزَوَّجْ فَإِنَّهُ أَغَضُّ لِلْبَصَرِ وَأَحْصَنُ لِلْفَرْجِ",translation:"Wahai para pemuda, barangsiapa di antara kalian yang mampu menikah, maka menikahlah. Karena menikah lebih menundukkan pandangan dan lebih menjaga kemaluan.",source:"HR. Bukhari no. 5066"},{id:"HK-03",category:"hadits-menikah",title:"Menikah adalah Sunnahku",arabic:"النِّكَاحُ مِنْ سُنَّتِي فَمَنْ لَمْ يَعْمَلْ بِسُنَّتِي فَلَيْسَ مِنِّي",translation:"Menikah adalah sunnahku. Barangsiapa yang tidak mengamalkan sunnahku, maka ia bukan dari golonganku.",source:"HR. Ibnu Majah no. 1846"},{id:"HP-01",category:"hadits-pasangan",title:"Empat Kriteria Memilih Wanita",arabic:"تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ لِمَالِهَا وَلِحَسَبِهَا وَجَمَالِهَا وَلِدِينِهَا فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ",translation:"Wanita dinikahi karena empat hal: hartanya, keturunannya, kecantikannya, dan agamanya. Pilihlah yang beragama, niscaya kamu beruntung.",source:"HR. Bukhari no. 5090"},{id:"HP-02",category:"hadits-pasangan",title:"Kriteria Memilih Pria",arabic:"إِذَا خَطَبَ إِلَيْكُمْ مَنْ تَرْضَوْنَ دِينَهُ وَخُلُقَهُ فَزَوِّجُوهُ إِلَّا تَفْعَلُوا تَكُنْ فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ عَرِيضٌ",translation:"Jika datang kepada kalian seorang lelaki yang agama dan akhlaknya kalian ridhai, maka nikahkanlah. Jika tidak, akan terjadi fitnah di muka bumi dan kerusakan yang besar.",source:"HR. Tirmidzi no. 1084"},{id:"HP-03",category:"hadits-pasangan",title:"Wanita Shalihah Sebaik-baik Perhiasan",arabic:"الدُّنْيَا مَتَاعٌ وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَةُ",translation:"Dunia adalah perhiasan, dan sebaik-baik perhiasan dunia adalah wanita yang shalihah.",source:"HR. Muslim no. 1467"}];function di(a){return li.filter(e=>e.category===a)}const ci="doa-card",ga="btn-copy-doa-card",ui=2e3,mi="data-category",X="data-id",bi="data-content",pa=a=>{const{id:e,title:i,arabic:t,translation:n,source:s,category:o=""}=a,l=T(i),m=T(t),u=T(n),g=T(s),w=`${t}

"${n}"

Sumber: ${s}`,p=T(w);return`
    <div class="card ${ci}" ${X}="${e}" ${mi}="${o}">
      <div class="card-header">
        <h5 class="card-title mb-0">${l}</h5>
      </div>
      <div class="card-body">
        <p class="card-text arabic-text text-end fs-4" dir="rtl">
          ${m}
        </p>
        <hr>
        <p class="card-text"><em>"${u}"</em></p>
        <small class="text-muted">
          <i class="bi bi-book"></i> Sumber: ${g}
        </small>
      </div>
      <div class="card-footer">
        <button 
          class="btn btn-outline-primary btn-sm ${ga}" 
          ${bi}="${p}"
          ${X}="${e}"
        >
          <i class="bi bi-clipboard"></i> Copy
        </button>
      </div>
    </div>
  `},ha=(a,e)=>{const i=document.getElementById(a);if(!i){console.error(`[DoaHaditsCard] Container #${a} not found`);return}if(!Array.isArray(e)||e.length===0){i.innerHTML=`
      <div class="alert alert-info">
        <i class="bi bi-info-circle"></i>
        Tidak ada konten untuk kategori ini.
      </div>
    `;return}const t=e.map(n=>pa(n)).join("");i.innerHTML=t,va(a)},va=a=>{const e=document.getElementById(a);if(!e)return;e.querySelectorAll(`.${ga}`).forEach(t=>{t.addEventListener("click",async n=>{const s=n.currentTarget,o=s.getAttribute("data-content");s.getAttribute("data-id");const l=s.innerHTML;try{const m=gi(o);await navigator.clipboard.writeText(m),s.innerHTML='<i class="bi bi-check"></i> Tersalin!',s.classList.add("btn-success"),s.classList.remove("btn-outline-primary"),setTimeout(()=>{s.innerHTML=l,s.classList.remove("btn-success"),s.classList.add("btn-outline-primary")},ui)}catch(m){console.error("[DoaHaditsCard] Failed to copy:",m),alert("Gagal menyalin teks. Silakan copy manual.")}})})},T=a=>{const e=document.createElement("div");return e.textContent=a,e.innerHTML},gi=a=>{const e=document.createElement("textarea");return e.innerHTML=a,e.value},pi=Object.freeze(Object.defineProperty({__proto__:null,attachCopyListeners:va,createDoaHaditsCard:pa,renderDoaHaditsCards:ha},Symbol.toStringTag,{value:"Module"}));function hi(){const a=document.getElementById("view-doa");a.innerHTML=`
    <!-- Hero Card with Background Image -->
    <div class="card mb-4 overflow-hidden border-0 shadow">
      <div class="position-relative" style="height: 250px; background: linear-gradient(rgba(161, 29, 51, 0.5), rgba(100, 18, 32, 0.65)), url('./home_page_doa_cover.jpg') center/cover; background-size: cover; background-position: center;">
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
          <h1 class="display-5 fw-bold mb-3">
            <i class="bi bi-book"></i> Doa & Hadits Pernikahan
          </h1>
          <p class="lead mb-0">
            Kumpulan doa dan hadits tentang pernikahan dalam Islam yang dapat 
            menjadi panduan spiritual Anda.
          </p>
        </div>
      </div>
    </div>

    <!-- Category Tabs -->
    <ul class="nav nav-pills mb-4" id="doa-category-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link active" 
          id="tab-doa-jodoh" 
          data-bs-toggle="pill" 
          data-bs-target="#content-doa-jodoh" 
          type="button" 
          role="tab"
        >
          Doa Mencari Jodoh
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link" 
          id="tab-doa-khitbah" 
          data-bs-toggle="pill" 
          data-bs-target="#content-doa-khitbah" 
          type="button" 
          role="tab"
        >
          Doa Saat Khitbah
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link" 
          id="tab-doa-walimah" 
          data-bs-toggle="pill" 
          data-bs-target="#content-doa-walimah" 
          type="button" 
          role="tab"
        >
          Doa Walimah
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link" 
          id="tab-hadits-menikah" 
          data-bs-toggle="pill" 
          data-bs-target="#content-hadits-menikah" 
          type="button" 
          role="tab"
        >
          Hadits Menikah
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link" 
          id="tab-hadits-pasangan" 
          data-bs-toggle="pill" 
          data-bs-target="#content-hadits-pasangan" 
          type="button" 
          role="tab"
        >
          Hadits Kriteria Pasangan
        </button>
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content" id="doa-tab-content">
      <!-- Doa Mencari Jodoh -->
      <div class="tab-pane fade show active" id="content-doa-jodoh" role="tabpanel">
        <div id="cards-doa-jodoh"></div>
      </div>

      <!-- Doa Saat Khitbah -->
      <div class="tab-pane fade" id="content-doa-khitbah" role="tabpanel">
        <div id="cards-doa-khitbah"></div>
      </div>

      <!-- Doa Walimah -->
      <div class="tab-pane fade" id="content-doa-walimah" role="tabpanel">
        <div id="cards-doa-walimah"></div>
      </div>

      <!-- Hadits Menikah -->
      <div class="tab-pane fade" id="content-hadits-menikah" role="tabpanel">
        <div id="cards-hadits-menikah"></div>
      </div>

      <!-- Hadits Kriteria Pasangan -->
      <div class="tab-pane fade" id="content-hadits-pasangan" role="tabpanel">
        <div id="cards-hadits-pasangan"></div>
      </div>
    </div>
  `,vi()}function vi(){["doa-jodoh","doa-khitbah","doa-walimah","hadits-menikah","hadits-pasangan"].forEach(e=>{const i=`cards-${e}`,t=di(e);ha(i,t)}),fi()}function fi(){document.querySelectorAll('[data-bs-toggle="pill"]').forEach(e=>{e.addEventListener("shown.bs.tab",i=>{const t=i.target.getAttribute("data-bs-target");if(t){const n=document.querySelector(t);if(n){const s=n.querySelector('[id^="cards-"]');s&&oi(()=>Promise.resolve().then(()=>pi),void 0).then(o=>{o.attachCopyListeners(s.id)})}}})})}function ki(){hi()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-doa"&&ki()});function yi(){const a=document.getElementById("view-settings");a.innerHTML=`
    <!-- Page Header -->
    <div class="mb-4">
      <h2>
        <i class="bi bi-gear"></i> Pengaturan & Tentang Aplikasi
      </h2>
      <p class="text-muted">
        Informasi tentang aplikasi, pengembang, dan pengaturan data.
      </p>
    </div>

    <!-- Card 1: Tentang Aplikasi -->
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="bi bi-info-circle"></i> Tentang Aplikasi
        </h5>
      </div>
      <div class="card-body">
        <h4 class="card-title">Taaruf CV Kreator</h4>
        <p class="card-text">
          Aplikasi web untuk membuat CV Ta'aruf (perkenalan dalam rangka pernikahan Islami) 
          dengan mudah dan aman. Semua data disimpan lokal di browser Anda, tidak ada 
          transmisi data ke server.
        </p>
        <p class="card-text">
          <strong>Manfaat Aplikasi:</strong>
        </p>
        <ul>
          <li>Memudahkan penyusunan CV Ta'aruf dengan format terstruktur</li>
          <li>Menjaga privasi data pribadi Anda</li>
          <li>Menyediakan template lengkap 49 kolom informasi</li>
          <li>Dilengkapi doa dan hadits tentang pernikahan</li>
        </ul>
      </div>
    </div>

    <!-- Card 2: Informasi Developer -->
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="bi bi-code-slash"></i> Informasi Developer
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          <strong>Dikembangkan oleh:</strong> 
          <a 
            href="https://github.com/GulajavaMinistudio" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-decoration-none"
          >
            Gulajava Ministudio
          </a>
        </p>
        <p class="card-text">
          Aplikasi ini dikembangkan sebagai proyek open-source untuk membantu 
          Muslim dan Muslimah dalam proses ta'aruf.
        </p>
      </div>
    </div>

    <!-- Card 3: Tools & Teknologi -->
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="bi bi-tools"></i> Tools & Teknologi
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text mb-3">Aplikasi ini dibangun menggunakan:</p>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-primary">HTML5</span>
          <span class="badge bg-primary">CSS3</span>
          <span class="badge bg-primary">Vanilla JavaScript</span>
          <span class="badge bg-primary">Bootstrap 5</span>
          <span class="badge bg-primary">Vite</span>
          <span class="badge bg-primary">LocalStorage API</span>
          <span class="badge bg-primary">Visual Studio Code</span>
          <span class="badge bg-primary">GitHub Copilot AI</span>
          <span class="badge bg-primary">Google Antigravity</span>
        </div>
      </div>
    </div>

    <!-- Card 4: Versi Aplikasi -->
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="bi bi-tag"></i> Versi Aplikasi
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          <strong>Versi:</strong> 1.0<br>
          <strong>Tanggal Rilis:</strong> Desember 2025<br>
          <strong>Status:</strong> <span class="badge bg-success">Stable</span>
        </p>
      </div>
    </div>

    <!-- Card 5: Kebijakan Privasi -->
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="bi bi-shield-lock"></i> Kebijakan Privasi
        </h5>
      </div>
      <div class="card-body">
        <h6>Komitmen Privasi Kami</h6>
        <p class="card-text">
          Kami sangat menjaga privasi pengguna. Berikut adalah komitmen kami:
        </p>
        <ul class="mb-3">
          <li><strong>Tidak Ada Pengumpulan Data:</strong> Aplikasi ini tidak mengumpulkan, 
              menyimpan, atau mengirim data Anda ke server manapun.</li>
          <li><strong>Penyimpanan Lokal:</strong> Semua data disimpan di browser Anda 
              menggunakan teknologi LocalStorage.</li>
          <li><strong>Kendali Penuh:</strong> Anda memiliki kendali penuh atas data Anda 
              dan dapat menghapusnya kapan saja.</li>
          <li><strong>Tidak Ada Tracking:</strong> Tidak ada analytics, cookies tracking, 
              atau teknologi pelacakan lainnya.</li>
        </ul>
        <div class="alert alert-info mb-0">
          <i class="bi bi-lightbulb"></i>
          <strong>Catatan:</strong> Data Anda hanya tersimpan di browser ini. Jika Anda 
          membersihkan cache browser atau menggunakan mode incognito, data tidak akan 
          tersimpan permanen.
        </div>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="danger-zone">
      <h5>
        <i class="bi bi-exclamation-triangle"></i> Danger Zone
      </h5>
      <p class="text-muted mb-3">
        Tindakan di area ini bersifat permanen dan tidak dapat dibatalkan.
      </p>
      <button type="button" class="btn btn-danger" id="btn-reset-data">
        <i class="bi bi-trash"></i> Reset Semua Data
      </button>
      <p class="text-muted mt-2 mb-0">
        <small>
          Menghapus semua draft, riwayat CV, dan pengaturan. 
          Tindakan ini tidak dapat dibatalkan!
        </small>
      </p>
    </div>
  `,wi()}function wi(){const a=document.getElementById("btn-reset-data");a&&a.addEventListener("click",()=>{confirm(`⚠️ PERINGATAN!

Anda akan menghapus SEMUA data termasuk:
- Semua draft CV
- Semua riwayat CV
- Pengaturan aplikasi

Tindakan ini TIDAK DAPAT DIBATALKAN!

Apakah Anda yakin ingin melanjutkan?`)&&confirm(`Konfirmasi terakhir:

Apakah Anda BENAR-BENAR YAKIN ingin menghapus semua data?`)&&(console.log("[SettingsView] Clearing all data..."),C(a,"Menghapus..."),setTimeout(()=>{const t=te();t.success?(d("Semua data berhasil dihapus. Halaman akan dimuat ulang...","success"),setTimeout(()=>{window.location.reload()},1500)):(S(a),d(t.message||"Gagal menghapus data","error"),console.error("[SettingsView] Clear data failed:",t.error))},500))})}function Ai(){yi()}window.addEventListener("viewChanged",a=>{a.detail.viewId==="view-settings"&&Ai()});window.bootstrap=ya;function Z(){Ea(),Da(),Ca();const a=document.getElementById("year-footer");a&&(a.textContent=new Date().getFullYear()),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(i){return new wa(i)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z();
//# sourceMappingURL=index-BH0d87i8.js.map
