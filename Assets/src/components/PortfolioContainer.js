import React, {useState} from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


const renderPage = () => {
    if (currentPage === 'About') {
        return <About/>;
    }
    if (currentPage === 'Contact') {
        return <Contact/>;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio/>;
    }
        return <Resume/>;
    }

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
);
}

export default PortfolioContainer;