function searchMovie() {
    event.preventDefault(); // Prevent the form from submitting
    const movieName = document.getElementById('movie').value.toLowerCase().trim();
    
    // List of movies with their corresponding IDs
    const movies = {
        // action
        master: 'Master',
        kaala: 'Kaala',
        vishwaroopam: 'Vishwaroopam',
        valimai: 'Valimai',
        ayan: 'Ayan',
        pathuthala: 'PathuThala',
        pudhupettai: 'Pudhupettai',
        thanioruvan: 'ThaniOruvan',
        captain: 'Captain',

        // comedy
        friends: 'Friends',
        mannan:'Mannan',
        panchathandhiram:'Panchathandhiram',
        gemini:'Gemini',
        perazhagan:'Perazhagan',
        podapodi:'PodaPodi',
        thiruvilayaadalarambam:'ThiruvilayaadalArambam',
        comali:'Comali',
        bossengirabaskaran:'BossEngiraBaskaran',

        // Love card
        kaadhalukumariyadhai:'KaadhalukuMariyadhai',
        '7grainbowcolony':'7GRainbowColony',
        '96':'96',
        mounaragam:'MounaRagam',
        roja:'Roja',
        vinnaithandivaruvaaya:'VinnaiThandiVaruvaaya',
        lover:'Lover',
        okkanmani:'OkKanmani',
        alaipayudhae:'Alaipayudhae',
    };
    // Check if the movie exists in the list
    if (movies[movieName]) {
        // Navigate to the movie's section
        document.getElementById(movies[movieName]).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('This Movie Is Not Here!');
    }
}