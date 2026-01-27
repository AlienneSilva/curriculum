async function fetchProfileData(){
    const url ='https://github.com/AlienneSilva/curriculum/tree/main/data/profile.json'
    const fetching = await fecth(url)
    return await fetching.json()
}