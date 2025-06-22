async function getImageByName(imgName) {
    return{
        imageName: imgName,
        url: `https://peldaKep.com/images/${imgName}`
    };
}

module.exports = {
    getImageByName
}