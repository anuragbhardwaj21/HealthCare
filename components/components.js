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
export { navbar, footer };
