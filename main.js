var example = new Vue({
    el: "#showHide",  //id in html
    data: {
        bakers: data.ubiqumBakeOff[0].bakers, //from
        judges: data.ubiqumBakeOff[0].judges, //json
        target: "home", // id home in html
        name: "" // 
    },
    methods: {
        pages: function (id, name) { //parameters passed
            this.target = id;  //allows pages to change on click
            this.name = name;  //allows bakers/judges lists to be created and displayed with correct data (in the template)
        }
    },

computed: { //allows data to change when needed
    desiredBaker() {
        return this.bakers.find(baker => baker.name == this.name);  //allows bakers/judges data to be changed on click
    },
    desiredJudge() {
        return this.judges.find(judge => judge.name == this.name);
    }
}
});














//function createBakersProfile(data) {
//
//    const bakersProfile = document.getElementById("bakersProfile");
//
//    var bakers = data.ubiqumBakeOff[0].bakers;
//
//    bakersProfile.innerHTML = "";
//
//    var template = "";
//
//    for (let i = 0; i < bakers.length; i++) {
//
//        template += `
//<div class="profile">
//                <div class="container">
//                    <div class="profileContent">
//                        <div class="name">
//
//                            <h2 class="${bakers[i].name}"></h2>
//                            <figure class="figure">
//                                <img src="${bakers[i].image}" class="figure-img img-fluid rounded" alt="Baker 2">
//                            </figure>
//                        </div>
//                        <div class="info">
//                            <div class="country">
//                            <h4>Country: </h4>
//                            <h4 class="${bakers[i].country}"></h4>
//                            <div class="flags"><img src="${bakers[i].flag}"></div>
//                            </div>
//                            <h4>Favourite bakes: </h4>
//                            <h4 class="${bakers[i].favourite_bakes}"></h4>
//                            <h4>Course at Ubiqum:</h4>
//                            <h4 class="${bakers[i].course}"></h4>
//                            <h4>First Challenge Score:</h4>
//                            <h4 class="${bakers[i].first_challenge_score}"></h4>
//                            <h4>Second Challenge Score:</h4>
//                            <h4 class="${bakers[i].second_challenge_score}"></h4>
//                            <h4 class="${bakers[i].info}"></h4>
//                        </div>
//                    </div>
//                    <div v-on:click="pages('bakers')" class="menu">
//                        <div class="pickAnother">
//                            <a>
//                                <div class="pick">
//                                    <h6>Pick another baker!</h6>
//                                    <i class="fas fa-user-friends"></i>
//                                </div>
//                            </a>
//                        </div>
//                    </div>
//                </div>
//            </div>
//`;
//    }
//
//    bakersProfile.innerHTML = template;
//}
//






//function createTable(data) {
//
// const myTable = document.getElementById("table");
//
// var members = data.results[0].members;
//
// myTable.innerHTML = "";
//
// var template = "";
//
// for (let i = 0; i < members.length; i++) {
//
//   template += `
//   <tr>
//       <td class="${members[i].first_name}" style="background: ${members[i].url}"><a href="${members[i].url}">${members[i].first_name},${members[i].first_name}</a></td>
//       <td> ${members[i].party}</td>
//       <td>${members[i].state}</td>
//       <td>${members[i].seniority}</td>
//    </tr>
//   `;
//
// }
//
// myTable.innerHTML = template;
//}









//function createDiv (){
//    var bakers  = [];
//    for(i = 0; i < data.ubiqumBakeOff.bakers.length; i++){
//        bakers.push(data.ubiqumBakeOff.bakers.name);
//    }
//    console.log(bakers);
//}
//createDiv();



//var example = new Vue({
//    el: "#showHide",
//    data: {
//        target: "home",
//        navbar: false //for the second navbar to be hidden in the begining
//    },
//    methods: {
//
//        pages: function (id) { //replaces target by the diferent pages id
//            this.target = id;
//
//        },
//        toggleNavbar() { //for the second navbar to hide and show depending on the page
//            this.navbar = !this.navbar
//        },
//        
//        fullMethod(id){ //to allow the 2 functions to be executed on one v-on:click
//            this.pages(id);
//            this.toggleNavbar();
//        }
//    },
//});
//






//var y = document.getElementById("home");
//y.style.display = "block";
//
//function listeners() {
//    document.getElementById("home").addEventListener("click", function () {
//        hideShow();
//    });
//    document.getElementById("aboutMenu").addEventListener("click", function () {
//        hideShow();
//    });
//    document.getElementById("bakersJudges").addEventListener("click", function () {
//        hideShow();
//    });
//    document.getElementById("scores").addEventListener("click", function () {
//        hideShow();
//    });
//    document.getElementById("contact").addEventListener("click", function () {
//        hideShow();
//    });
//    document.getElementById("signin").addEventListener("click", function () {
//        hideShow();
//    });
//}
//listeners();
//
//
//
//function hideShow() {
//    var id = document.getElementById("id");
//    var dataTarget = document.querySelector("a[data-target]").innerHTML;
//   
//    if (id === dataTarget) {
//        y.style.display = "none";
//        dataTarget.style.display = "block";
//    } else {
//        dataTarget.style.display = "none";
//    }
//}
//
//hideShow();
//
////function showHide() {
////    
////    
////    if (x.style.display === "none") {
////        y.style.display = "none";
////        x.style.display = "block";
////    } else {
////        x.style.display = "none";
////    }
////}
