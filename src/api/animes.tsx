
export const getAnimes = async () => {
    try {
        const res = await fetch(`http://localhost:3232/animes`, {
            method: 'GET',
            credentials: 'include',
        });
        return await res.json();
    }catch(err){
        throw new Error("Ocorreu um erro")
    }
};

export const getAnime = async (anime:String) => {
    try {
        const res = await fetch(`http://localhost:3232/anime?nome=${anime}`, {
            method: 'GET',
            credentials: 'include',
        });
        return await res.json();
    }catch(err){
        throw new Error("Ocorreu um erro")
    }
};


