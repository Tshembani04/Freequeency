import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
const Banner = () => {
    return ( 
        <BannerContainer>
            <Carousel 
                showStatus={false} 
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                showArrows={false}
            >
                <div>
                    <img src="https://cdn.wallpapersafari.com/99/1/HTucEN.jpeg" />
                </div>
                <div>
                    <img src="https://airwallpaper.com/wp-content/uploads/wall001/Drake-Wallpaper-HD-620x349.jpg" />   
                </div>
                
            </Carousel>
            <Fader>

            </Fader>
        </BannerContainer>
        
     );
}
 
const BannerContainer = styled.div`
    position: absolute;
`;
const Fader = styled.div`
    position: absolute;
    background: rgb(6,6,4);
    background: linear-gradient(180deg,  transparent 5% , rgba(252,233,109,1) 95%);
    top: 0vh;
    width: 100%;
    height: 100%;
`;
export default Banner;