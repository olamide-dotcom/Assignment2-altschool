import { useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import '/src/App.css';

export default function images(props) {
    const { results } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(results.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(results.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, results]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % results.length;
        setItemOffset(newOffset);
    };

    return (
        <>
                 <div className="images">
                {currentItems.map(image =>{
                    return (
                        <div className="image">
                            <img src={image.picture.large} alt={image.name} />
                            <p><b>Name: {image.name.title} {image.name.first} {image.name.last} </b></p>
                            <p> Email: {image.email} </p>
                            <p>Phone: {image.cell} || Nationality: {image.location.country} </p>
                        </div>
                      );
                }
                )}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="nxt>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<prev"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
}
