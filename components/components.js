function navbar() {
  return `
    <div id="leftNavItems">
        <a href=""> Medicines</a>
        <a href=""> Doctor</a>
        <a href=""> Pharmacy</a>
        <a href=""> Other Services</a>
    </div>
    <div id="rightNavItems">
        <a href="">🏠</a>
        <a href="">Consult Now</a>
    </div>
    `;
}
function footer() {
  return `
    <div id="upperfooter">
        <table id="footertable">
        <tr>
            <td><a href=""> All Medicines </a></td>
            <td><a href=""> Doctors </a></td>
            <td><a href=""> Hospital </a></td>
            <td><a href=""> About Us </a></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href=""> Health & Care </a></td>
            <td><a href=""> Physiotherapy </a></td>
            <td><a href=""> Government Listed </a></td>
            <td><a href=""> Contact Us </a></td>
        </tr>
        <tr>
            <td><a href=""> Beauty Care </a></td>
            <td><a href=""> Heart Specialist </a></td>
            <td><a href=""> Top Private </a></td>
        </tr>
        </table>
    </div>
    <hr style="border-width: 0.2px" color="#525252" />
    <div id="lowerfooter">
        <p>©️ Healthcare 2023 All right reserved.</p>
        <div id="l-f-downloadbtns">
        <a href="https://www.apple.com/in/app-store/"
            ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
        /></a>
        <a href="https://play.google.com/"
            ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2880px-Google_Play_Store_badge_EN.svg.png?20220907104002"
            alt=""
        /></a>
        </div>
    </div>
    `;
}

var commentData = [
  {
    name: "Sophia Adams",
    comment:
      "I have been a customer of this e-commerce medicine store for quite some time now, and I am consistently impressed by their exceptional service. Not only do they offer a vast range of medicines, but their prices are also highly competitive. The website is user-friendly, making it easy to browse and place orders. The delivery is always prompt and the packaging is secure. I appreciate their attention to detail and their commitment to ensuring customer satisfaction. I have recommended this store to my friends and family, and they have all had positive experiences as well. If you are looking for a reliable online pharmacy, look no further!",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    rating: 4.8,
  },
  {
    name: "Liam Wilson",
    comment:
      "I cannot express enough how grateful I am for this e-commerce medicine store. As someone who relies on regular medications, this store has made my life so much easier. I no longer have to worry about rushing to the local pharmacy or running out of my prescriptions. The convenience of ordering my medications online and having them delivered right to my doorstep is truly invaluable. The store has a comprehensive selection of medicines, and their prices are reasonable. Their customer support team is always available to assist with any queries or concerns. I trust this store wholeheartedly and highly recommend it to anyone in need of quality medications and outstanding service.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4.7,
  },
  {
    name: "Ava Martin",
    comment:
      "Shopping for medicines from this e-commerce store has been a game-changer for me. As a busy professional, I appreciate the convenience it offers. The website is well-designed and easy to navigate, allowing me to quickly find the medications I need. The product descriptions are informative, and I feel confident in the quality of the medicines I receive. The checkout process is seamless, and I have never encountered any issues with payment or delivery. This store has exceeded my expectations in terms of reliability, efficiency, and customer service. I am a loyal customer and will continue to rely on this platform for all my medication needs.",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    rating: 4.1,
  },
  {
    name: "Noah Clark",
    comment:
      "This e-commerce medicine store is a blessing for those who value convenience and accessibility. I have been using their services for a while now, and I have never been disappointed. The store offers a comprehensive range of medicines, including both over-the-counter and prescription drugs. The website provides detailed information about each product, ensuring that I can make informed decisions about my healthcare. The ordering process is straightforward, and the delivery is always prompt. The team behind this store is dedicated to customer satisfaction and goes above and beyond to ensure a positive experience. If you are looking for a reliable online pharmacy, look no further. This store has it all!",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 3.9,
  },
  {
    name: "Isabella Rodriguez",
    comment:
      "I cannot speak highly enough about this e-commerce medicine store. The convenience it offers is unparalleled. Whether I need to refill a prescription or purchase over-the-counter medicines, I know I can rely on this store to deliver the products I need promptly. The website is intuitive, making it easy to search for specific medicines or browse through various categories. The prices are competitive, and the discounts and promotions are an added bonus. I have recommended this store to my friends and family, and they have all had positive experiences. Trustworthy, efficient, and customer-oriented - this store is a top choice for all your medication needs.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 3.8,
  },
  {
    name: "Mia Thompson",
    comment:
      "I have been a loyal customer of this e-commerce medicine store for years, and I cannot recommend it enough. The range of medicines they offer is extensive, covering both common and specialized treatments. The website is user-friendly, allowing for easy navigation and quick searches. The checkout process is smooth, and I appreciate the various payment options available. The delivery is always on time, and the packaging is secure. The customer support team is responsive and helpful. This store has consistently provided me with high-quality medications and excellent service. If you are looking for a reliable online pharmacy, Mia Thompson, look no further!",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    rating: 4.4,
  },
  {
    name: "James Lee",
    comment:
      "I am extremely satisfied with the services provided by this e-commerce medicine store. The website is well-designed and easy to navigate. I appreciate the detailed product descriptions and the availability of customer reviews, as it helps me make informed decisions. The ordering process is simple and secure, and the delivery is always prompt. I have never faced any issues with the quality of the medications I receive. The customer support team is professional and responsive, addressing any concerns or queries effectively. I highly recommend this store to anyone in need of reliable and convenient access to medications.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 4.7,
  },
  {
    name: "Charlotte Harris",
    comment:
      "This e-commerce medicine store has been a game-changer for me. I have found it to be a reliable source for all my medication needs. The website is user-friendly and offers a wide range of medicines. The prices are competitive, and I appreciate the discounts and promotions they frequently offer. The ordering process is straightforward, and the delivery is prompt. The customer service is exceptional, with the support team always ready to assist. I have recommended this store to my friends and family, and they have all had positive experiences. If you are in search of a trusted online pharmacy, look no further!",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4,
  },
  {
    name: "Benjamin Young",
    comment:
      "I cannot speak highly enough about this e-commerce medicine store. It has been a reliable source for all my medication needs. The website is easy to navigate, and the product descriptions are informative. The prices are reasonable, and the delivery is always on time. I have never encountered any issues with the quality of the medications I receive. The customer support team is responsive and helpful, addressing any concerns promptly. I highly recommend this store to anyone in need of a trustworthy online pharmacy.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 4.4,
  },
  {
    name: "Harper Lewis",
    comment:
      "As a regular customer of this e-commerce medicine store, I am consistently impressed by their exceptional service. The website is user-friendly and offers a wide range of medications. The prices are competitive, and the discounts and promotions are an added bonus. The ordering process is smooth, and the delivery is prompt. The customer support team is responsive and helpful, addressing any concerns or queries effectively. I trust this store for all my medication needs and highly recommend it to others seeking a reliable online pharmacy.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 4.1,
  },
  {
    name: "Evelyn Turner",
    comment:
      "I have been a satisfied customer of this e-commerce medicine store for a long time. The convenience it offers is unparalleled. The website is easy to navigate, and the ordering process is seamless. I have always received my medications on time, and the packaging is secure. The customer support team is responsive and addresses any queries promptly. I trust this store for the quality of medications they provide and the reliability of their service. I highly recommend this store to anyone looking for a convenient and trustworthy online pharmacy.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 4.4,
  },
  {
    name: "William Roberts",
    comment:
      "This e-commerce medicine store has been a reliable source for all my medication needs. The website is user-friendly, allowing me to easily find the medicines I require. The prices are reasonable, and I appreciate the availability of generic alternatives. The delivery is prompt, and the packaging is secure. The customer support team is responsive and helpful. I have had positive experiences with this store and continue to rely on it for my medication needs. I highly recommend William Roberts to anyone in search of a dependable online pharmacy.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4.7,
  },
];

var data = [
  {
    name: "Online Consultation",
    link: "./images/stethoscope.png",
  },
  {
    name: "Hospital",
    link: "./images/hospital-building.png",
  },
  {
    name: "Medicine",
    link: "./images/syringe.png",
  },
  {
    name: "Pathology Tests",
    link: "./images/blood-test.png",
  },
  {
    name: "Nursing",
    link: "./images/nurse.png",
  },
  {
    name: "Emergency",
    link: "./images/ambulance.png",
  },
];

export { navbar, footer, commentData, data };
