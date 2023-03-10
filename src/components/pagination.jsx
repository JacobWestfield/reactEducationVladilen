import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);
    if (pageCount === 1) return null;
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map((page) => {
                        return (
                            <li
                                className={
                                    page === currentPage
                                        ? "page-item active"
                                        : "page-item"
                                }
                                key={("page_", page)}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => onPageChange(page)}
                                    href="#"
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
