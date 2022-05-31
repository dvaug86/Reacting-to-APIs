import { useEffect, useState } from 'react';



const App = () => {
    const [page, setPage] = useState("home"); //origin of homepage
    const [films, setFilms] = useState([]);  //this will use the films endpoint
    const [people, setPeople] = useState([]); //this will use the people endpoint

    //when this effect is used all films will be listed
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))  //name is arbitrary, just represents that this will give a list of all films
    }, []);

    //when this effect is used all people will be listed
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, []);

    //this will be the function when filmbutton is clicked to send to film page
    const filmButton = (e) => {
        setPage("films");
    };

    //this will be the function when the peoplebutton is clicked to send to people page
    const peopleButton = (e) => {
        setPage("people");
    };

    //this will be the function to send page back to home screen
    const homeButton = (e) => {
        setPage("home");
    };

    if (page === "home") {

        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo" />
                </div>
                <h1 className="text-center">Films By Studio Ghibli</h1>
                <div className="d-flex justify-content-center">
                    <div className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                        <p className="card-text">This lab is designed to show off React abilities.
                            it utilizes conditional rendering, fetching data from a REST API utilizing an useEffect hook,
                            managing multiple array maps utilizing an useState hood, and Bootstrap for stylizing.
                        </p>

                    </div>
                </div>
                <div className='d-flex justify-content-center' >
                    <button type='button' className='btn btn-dark m-4' onClick={filmButton}>Films</button>
                    <button type='button' className='btn btn-dark m-4 ' onClick={peopleButton}>Characters</button>
                </div>

            </>
        );
    } else if (page === "films") {
        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo" />
                </div>
                <h1 className="text-center">Films By Studio Ghibli</h1>

                <main className="container  ">
                    <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                        {films.map((films) => (
                            <div key={`user-card-${films.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                                <img src={films.movie_banner} alt="..." className='card-img-top' />
                                <div className="card-body">
                                    <h1 className="card-title text-center text-decoration-underline">{films.title}</h1>
                                    <h2 className="text-center fst-italic">{films.original_title}</h2>
                                    <h4 className="text-center ">{films.original_title_romanised}</h4>
                                    <h6 className="text-left ">Director: {films.director}</h6>
                                    <h6 className="text-left ">Release Date: {films.release_date}</h6>
                                    <h6 className="text-left ">Rotten Tomatoe Score: {films.rt_score}</h6>
                                    <h6 className="text-left text-decoration-underline ">Description: </h6>
                                    <p className="card-text">{films.description}</p>
                                    <a href={films.url} className="card-link d-flex justify-content-center">Film Details</a>
                                </div>
                            </div>
                        ))}
                    </ul>
                </main>
                <div className='d-flex justify-content-center'>
                    <button type='button' className='btn btn-dark' onClick={homeButton}>Home</button>
                </div>
            </>
        )
    } else if (page === "people") {
        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo" />
                </div>
                <h1 className="text-center">Major Characters in Movies By Studio Ghibli</h1>


                <main className="container">
                <ul className="col-12 d-flex flex-wrap justify-content-evenly">

                        {people.map((people) => (
                            <div key={`user-card-${people.id}`} className='card shadow p-3 mb-5 bg-body rounded col-md-4 m-4'>
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="card-title text-center text-decoration-underline">{people.name}</h1>
                                        <h6 className="text-left ">Gender: {people.gender}</h6>                                    <h6 className="text-left ">Rotten Tomatoe Score: {films.rt_score}</h6>
                                        <h6 className="text-left ">Age: {people.age}</h6>
                                        <a href={people.url} className="card-link d-flex justify-content-center">Character Details</a>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <button type='button' className='btn btn-dark m-4' onClick={homeButton}>Home</button>
                </main>
                <div className='d-flex justify-content-center'>
                    <button type='button' className='btn btn-dark' onClick={homeButton}>Home</button>
                </div>
            </>
        )
    }
};
export default App;

