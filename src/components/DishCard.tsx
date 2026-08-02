import type {Dish} from "../types";

interface DishCardProps {
    dish: Dish;
}

function DishCard ({dish}: DishCardProps) {
    return (
        <div className="cursor-pointer overflow-hidden rounded-2xl bg-[#F5EDE0] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img src={dish.image} alt={dish.name} className="h-52 w-full object-cover"/>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#1C1410]">
                        {dish.name}
                    </h3>
                    <span className="font-semibold text-[#C1440E]">{dish.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#1C1410]/70">{dish.description}</p>
            </div>
        </div>
    );
}

export default DishCard;