import SlidableImage from "../../components/slidable-image/SlidableImage";

import fryGray from '../../public/images/fry-gray.jpeg';
import fryColor from '../../public/images/fry-color.jpg';
import Banner from "../../components/banner/Banner";

export default function FirstPost() {
  return <main style={{position: 'relative' }}><SlidableImage firstImage={fryGray} secondImage={fryColor} text={'Streamowana w FULL HD'} />
	<Banner 
	  background='#489699'
	  image={fryGray}
	  heading='Futurama oficjalnie otrzyma nowy sezon!'
	  description='"Futurama" zakończyła swoje drugie wcielenie we wrześniu 2013 roku. Teraz kultowy serial ma oficjalnie powrócić po dziesięciu latach przerwy. Niewiele animacji dla dorosłych zasłużyło na to bardziej niż produkcja Matta Groeninga'
	/>

    </main>
}
