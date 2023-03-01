import CardItem from "./hotels/CardItem";
// import { fetchHotels } from "../services/PropertyList.service";
const PropertyList = () => {
  // const cards = fetchHotels;
  return (
    <div className="container" style={{ backgroundColor: "" }}>
      <div className="d-flex text-center flex-wrap justify-content-around margin-bottom">
        {/* {
        cards.map((card)=>(
            <CardItem {...card} key={card.id}/>
        ))
      } */}
      </div>
    </div>
  );
};

export default PropertyList;
