import orderImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import './Order.css'

const Order = () => {
  const [menu] = useMenu();
  const salads = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soups = menu.filter((items) => items.category === "soup");
  const dessert = menu.filter((items) => items.category === "dessert");
  const drinks = menu.filter(items => items.category === "drinks")

  return (
    <div>
      <Cover
        img={orderImg}
        header={"OUR SHOP"}
        subHeader={"Would you like to try a dish?"}
      ></Cover>

      <section className="py-10">
        <Tabs selectedTabClassName="selected-tab font-bold text-[#BB8506] ">
          <TabList className="flex flex-cols font-semibold justify-center  text-[#151515]  ">
            <div>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className=" grid grid-cols-3 gap-16 p-10 justify-center items-center">
            {
            salads.map((items) => (
              <ProductCard 
              key={items._key} 
              items={items}>
              </ProductCard>
            ))}
            </div>
          </TabPanel>


          <TabPanel>
          <div className=" grid grid-cols-3 gap-16 p-10 justify-center items-center">
            {
            pizza.map((items) => (
              <ProductCard 
              key={items._key} 
              items={items}>
              </ProductCard>
            ))}
            </div>
          </TabPanel>


          <TabPanel>
            <div className=" grid grid-cols-3 gap-16 p-10 justify-center items-center">
            {
            soups.map((items) => (
              <ProductCard 
              key={items._key} 
              items={items}>
              </ProductCard>
            ))}
            </div>
          </TabPanel>


          <TabPanel>
            <div className=" grid grid-cols-3 gap-16 p-10 justify-center items-center">
            {
            dessert.map((items) => (
              <ProductCard 
              key={items._key} 
              items={items}>
              </ProductCard>
            ))}
            </div>
          </TabPanel>


          <TabPanel>
            <div className=" grid grid-cols-3 gap-16 p-10 justify-center items-center">
            {
            drinks.map((items) => (
              <ProductCard 
              key={items._key} 
              items={items}>
              </ProductCard>
            ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
