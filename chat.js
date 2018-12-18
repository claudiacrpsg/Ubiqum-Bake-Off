document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);
document.getElementById("logOut").addEventListener("click", logOut);



getPosts();

function login() {
    //https://firebase.google.com/docs/auth/web/google-signin
    // Provider
    var provider = new firebase.auth.GoogleAuthProvider();
    // How to Log In
    firebase.auth().signInWithPopup(provider).then(function () {
        example.pages("chat"); //waits for the log in to be done before moving on
    }).then(function (){
        getPosts();
    });
         
    console.log("login");
}


function writeNewPost() {
    //https://firebase.google.com/docs/database/web/read-and-write
    var textToSend = document.getElementById("textInput").value;
    textToSend.innerHTML = "";
    // Values
    var message = {
        message: textToSend,
        name: firebase.auth().currentUser.displayName,
        photo: firebase.auth().currentUser.photoURL,
    }
    console.log(firebase.auth().currentUser);
    firebase.database().ref("ubiqum-bake-off").push(message)
    console.log(message);
    // A post entry.
    // Get a key for a new Post.
    //Write data
    console.log("write");
}


function getPosts() {
    var posts = document.getElementById("posts");
    firebase.database().ref("ubiqum-bake-off").on("value", function (data) {
        
        posts.innerHTML = "";



        var messages = data.val();

        for (var key in messages) {
            var text = document.createElement("div");
            var element = messages[key];
            var image = document.createElement("img");
            image.setAttribute("src", element.photo);


            if (element.name == firebase.auth().currentUser.displayName) { //to target the user
                text.setAttribute("class", "owner")
            }

            if (element.name !== firebase.auth().currentUser.displayName) { //to target the guests
                text.setAttribute("class", "guest")
            }

            //            text.append(image);
            text.append(element.name + " says: ");
            text.append(element.message);
            posts.append(text);
            document.getElementById('textInput').value = ''; //to make the text on the input disapear after sending a message

        }
        posts.scrollTop = posts.scrollHeight; //for the automatic scroll down


    })

    console.log("getting posts");
}


function logOut() {

    firebase.auth().signOut().then(function () {
        example.pages("signin");
    }).catch(function (error) {
        // An error happened.
    });



    console.log("log out");
}
