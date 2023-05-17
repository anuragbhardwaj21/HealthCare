function navbar() {
  return `
    <div id="leftNavItems">
        <a href=""> Medicines</a>
        <a href=""> Doctor</a>
        <a href=""> Pharmacy</a>
        <a href=""> Other Services</a>
    </div>
    <div id="rightNavItems">
        <a href="../HealthCare/index.html">🏠</a>
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
      "I have been a customer of this e-commerce medicine store for quite some time now, and I am consistently impressed by their exceptional service.",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    rating: 4.8,
  },
  {
    name: "Liam Wilson",
    comment:
      "I cannot express enough how grateful I am for this e-commerce medicine store. As someone who relies on regular medications, this store has made my life so much easier.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4.7,
  },
  {
    name: "Ava Martin",
    comment:
      "Shopping for medicines from this e-commerce store has been a game-changer for me. As a busy professional, I appreciate the convenience it offers. ",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    rating: 4.1,
  },
  {
    name: "Noah Clark",
    comment:
      "This e-commerce medicine store is a blessing for those who value convenience and accessibility.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 3.9,
  },
  {
    name: "Isabella Rodriguez",
    comment:
      "I cannot speak highly enough about this e-commerce medicine store. The convenience it offers is unparalleled.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 3.8,
  },
  {
    name: "Mia Thompson",
    comment:
      "I have been a loyal customer of this e-commerce medicine store for years, and I cannot recommend it enough.",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    rating: 4.4,
  },
  {
    name: "James Lee",
    comment:
      "I am extremely satisfied with the services provided by this e-commerce medicine store. The website is well-designed and easy to navigate.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 4.7,
  },
  {
    name: "Charlotte Harris",
    comment:
      "This e-commerce medicine store has been a game-changer for me. I have found it to be a reliable source for all my medication needs.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4,
  },
  {
    name: "Benjamin Young",
    comment:
      "I cannot speak highly enough about this e-commerce medicine store. It has been a reliable source for all my medication needs.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 4.4,
  },
  {
    name: "Harper Lewis",
    comment:
      "As a regular customer of this e-commerce medicine store, I am consistently impressed by their exceptional service.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 4.1,
  },
  {
    name: "Evelyn Turner",
    comment:
      "I have been a satisfied customer of this e-commerce medicine store for a long time. The convenience it offers is unparalleled.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    rating: 4.4,
  },
  {
    name: "William Roberts",
    comment:
      "This e-commerce medicine store has been a reliable source for all my medication needs.",
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

function reviewCard(i) {
  return `
    <div id="upper-story-card">
      <img src="${commentData[i].image}" alt="${commentData[i].name}" />
      <span>${commentData[i].rating} ⭐</span>
      <p>${commentData[i].name}</p>
    </div>
    <div id="lower-story-card">
      <p>${commentData[i].comment}
      </p>
    </div>
  `;
}

var greenData1=[
  {
    numbers: "5+",
    caption:"Years of Experience"
  },
  {
    numbers: "300+",
    caption:"Healthcare Practioners"
  },
  {
    numbers: "500+",
    caption:"Satisfied Clients"
  },
  {
    numbers: "100+",
    caption:"Awards"
  },
]

function greenCard(i) {
  return `
  <p>${greenData1[i].numbers}</p>
  <span>${greenData1[i].caption}</span>
  `;
}
export { navbar, footer, commentData, data, reviewCard, greenCard };
