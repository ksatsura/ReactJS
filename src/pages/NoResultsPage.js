// import
import React from 'react';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import FilmCollection from '../components/FilmCollection/FilmCollection';
import ResultsArea from '../components/ResultsArea/ResultsArea';
import Footer from '../components/Footer/Footer';
import '../style.css';

const NoResultsPage = (props) => {

    return (
        <React.Fragment>
            <SearchHeader />
            <div className='results-area' id='no-films' ></div>
            <div className='films-container'>
                <p className='no-films'>No films found</p>
            </div>
            <FilmCollection noResults={true}/>
            <Footer />
        </React.Fragment>
    );
};

export default NoResultsPage;