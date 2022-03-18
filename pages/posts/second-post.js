import SlidableImage from "../../components/slidable-image/SlidableImage";

import fryGray from '../../public/images/fry-gray.jpeg';
import fryColor from '../../public/images/fry-color.jpg';

export default function FirstPost() {
  return <div><SlidableImage firstImage={fryColor} secondImage={fryGray} text={'Streamowana w FULL HD'} /></div>
}
