async function getUserProfile(userId) {
    const users ={
        10: {id: 10, name: "Teszt User", email:"tesztuser@email.com"},
        20: {id: 20, name: "Halász Gergő", email:"halaszgergo22@gmail.com"},
        30: {id: 30, name: "Userke A Harmadik", email:"userharom@email.com"}
    };

    if(!users[userId]){
        return "Nincs ilyen felhasználó!";
    }else{
        return users[userId];
    };
}

module.exports = {
    getUserProfile
}