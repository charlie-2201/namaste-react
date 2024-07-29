import { CDN_URL } from "../common/constant";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="flex justify-between m-2 p-6 border-b-2 border-gray-200 text-left">

                    <div className=" w-9/12 py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price / 100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12">
                        <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
                        <div className="absolute -mt-4 mx-5 cursor-pointer">
                        <button className="py-1 w-20 text-center bg-white font-bold text-green-400 border rounded-lg">ADD</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemList;