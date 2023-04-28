

let myfavorites = [];
const postFava = (req,res) => {
    const character = req.body;

    myfavorites.push(character);

    return res.status(200).json(myfavorites);
}

const deleteFav = (req,res) => {
    const {id} = req.params;
    myfavorites = myfavorites.filter((favorite)=>{
        favorite.id !== +id
    })

    return res.status(200).json(myfavorites);
}

module.exports = {
    postFava,
    deleteFav
}