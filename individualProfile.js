function createInfo() {
    var bakersList = document.getElementById("bakers");
    var bakers = data.ubiqumBakeOff[0].bakers;
    bakersList.innerHTML = "";
    var template = "";
    for (var i = 0; i < bakers.length; i++) {
        //this template creats the bakers list
        template += `  
                    <figure class="figure">
                        <img v-on:click="pages('bakersProfile', '${bakers[i].name}')" src="${bakers[i].image}" class="figure-img img-fluid rounded" alt="Baker 1">
                        <figcaption class="figure-caption">${bakers[i].name}</figcaption>
                    </figure>
        `;
    }
    bakersList.innerHTML = template;


    var judgesList = document.getElementById("judges");
    var judges = data.ubiqumBakeOff[0].judges;
    judgesList.innerHTML = "";
    var template = "";
    for (var i = 0; i < judges.length; i++) {
//this template creats the judges list
        template += `
                    <figure v-on:click="pages('judgesProfile', '${judges[i].name}')" class="figure">
                        <img src="${judges[i].image}" class="figure-img img-fluid rounded" alt="Baker 1">
                        <figcaption class="figure-caption">${judges[i].name}</figcaption>
                    </figure>
        `;
    }
    judgesList.innerHTML = template;


    var scoresList = document.getElementById("scores");

    scoresList.innerHTML = "";
    var template = "";
    for (var i = 0; i < bakers.length; i++) {
//this template populates the scores table
        template += `
                    <tr>
                            <td>${bakers[i].name}</td>
                            <td>${bakers[i].first_challenge_score}</td>
                            <td>${bakers[i].second_challenge_score}</td>
                            <td>${bakers[i].third_challenge_score}</td>
                           <td>${bakers[i].fourth_challenge_score}</td>
                        </tr>
        `;
    }
    scoresList.innerHTML = template;
}

createInfo();
