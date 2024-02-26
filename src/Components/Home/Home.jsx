import CategorySlider from "../CategorySlider/CategorySlider";
import Products from "../Products/Products";
import HomeSlider from "../Slider/HomeSlider";

export default function Home() {
    return (
        <div className="container px-0 mt-5 products-container rounded-3">
            <HomeSlider />
            <CategorySlider />
            <Products />
        </div>
    );
}
