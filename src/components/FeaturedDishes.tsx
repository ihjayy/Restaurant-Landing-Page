import DishCard from "./DishCard";
import {dishes} from "../data/dishes";

function FeaturedDishes() {
    return (
        <section id="menu" className="bg-[#F5EDE0] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C1440E]">
                        Crowd Favorites
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-bold text-[#1C1410] sm:text-4xl">
                        Featured Dishes
                    </h2>
                    <p className="mt-3 text-[#1C1410]/70">
                        A few of the plates our regulars order again and again. 
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {dishes.map((dish) => (
                        <DishCard key={dish.id} dish={dish}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedDishes;