---
layout: page
title: certifications
permalink: /certifications/
description: Professional certifications and completed programs.
nav: true
nav_order: 4
---


<style>
.cert-row{
display:flex;
align-items:flex-start;
gap:25px;
margin-bottom:40px;
}

.cert-img{
width:260px;
cursor:pointer;
border-radius:8px;
box-shadow:0 3px 10px rgba(0,0,0,0.15);
transition:transform .2s;
}

.cert-img:hover{
transform:scale(1.03);
}

.cert-info{
flex:1;
}

.cert-title{
font-size:20px;
font-weight:600;
margin-bottom:10px;
}

.cert-info p{
margin:4px 0;
}

.modal {
display:none;
position:fixed;
z-index:999;
padding-top:60px;
left:0;
top:0;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.8);
}

.modal img{
display:block;
margin:auto;
max-width:80%;
}

.modal:target{
display:block;
}
</style>

---

<div class="cert-row">

<a href="#cert1">
<img src="/assets/img/certifications/azure.png" class="cert-img">
</a>

<div class="cert-info">

<div class="cert-title">
AWS Certified Cloud Practitioner
</div>

<p><strong>Date:</strong> January 2025</p>

<p><strong>Credential ID:</strong> ABC-123456</p>

<p><strong>Credential Link:</strong>  
<a href="https://www.credly.com/" target="_blank">View Credential</a></p>

</div>
</div>

<div id="cert1" class="modal">
<a href="#">
<img src="/assets/img/certifications/aws-ccp.jpg">
</a>
</div>

---

<div class="cert-row">

<a href="#cert2">
<img src="/assets/img/certifications/google-data.jpg" class="cert-img">
</a>

<div class="cert-info">

<div class="cert-title">
Google Data Analytics Certificate
</div>

<p><strong>Date:</strong> September 2024</p>

<p><strong>Credential ID:</strong> XYZ-987654</p>

<p><strong>Credential Link:</strong>  
<a href="https://coursera.org/" target="_blank">View Credential</a></p>

</div>
</div>

<div id="cert2" class="modal">
<a href="#">
<img src="/assets/img/certifications/google-data.jpg">
</a>
</div>
