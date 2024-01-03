import orderImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import "./Order.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ITEMS_PER_PAGE = 6;

const Order = ({ onPageChange }) => {
  const [menu] = useMenu();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "deshi"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const filterItemsByCategory = (category) => {
    return menu.filter((items) => items.category === category);
  };

  const currentCategory = categories[tabIndex];
  const filteredItems = filterItemsByCategory(currentCategory);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    onPageChange(selectedPage); // assuming onPageChange is defined and should handle page changes
  };

  console.log("category:", currentCategory);
  console.log("filteredItems:", filteredItems);

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>

      <section className="py-10">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1); // Reset page when switching tabs
          }}
          selectedTabClassName="selected-tab font-bold text-[#BB8506] "
        >
          <TabList className="flex flex-cols font-semibold justify-center text-[#151515]">
            {categories.map((cat, index) => (
              <Tab key={index}>{cat}</Tab>
            ))}
          </TabList>

          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-3 gap-16 p-10 justify-center items-center">
                {currentItems.map((items) => (
                  <ProductCard key={items._key} items={items}></ProductCard>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                  <ul className="pagination flex">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        } px-3 py-2 mx-1 cursor-pointer rounded-full`}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
