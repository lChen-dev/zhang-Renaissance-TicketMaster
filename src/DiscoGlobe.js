import Globe from 'globe.gl';

var myDomElement = document.getElementById( "DiscoGlobeApp" );
const DiscoGlobe = ({locationObj}) => {
const bData = locationObj._embedded.events.map((bey)=> ({
  lat: bey._embedded.venues[0].location.latitude,
  lng: bey._embedded.venues[0].location.longitude,
  name: bey._embedded.venues[0].name,
  text: bey._embedded.venues[0].city.name,
  city: bey._embedded.venues[0].city.name,
  state: bey._embedded.venues[0].state?.name,
  country: bey._embedded.venues[0].country.name,
  currency: bey.priceRanges?[0].currency : null,
  minPrice: bey.priceRanges?[0].min: null,
  maxPrice: bey.priceRanges?[0].max: null,
  size: 1
}));
const getTooltip = d => `
<div text-align: center">
<div><b>(${d.name}) (${d.text})</b></div>
<div>(${d.country})</div><div>(${d.city})</div>
</div>
`;
const myImageUrl = 'https://raw.githubusercontent.com/Rchrdlss3/Renaissance-Globe/main/Globe/media/discoglobe2.png'
const myGlobe = Globe()
console.log(myGlobe.labelLabel)
myGlobe(myDomElement)
    .globeImageUrl(myImageUrl)
    .pointsData(bData)
    .backgroundColor("rgba(255,255,255,0)")
    .labelColor('black')
    .labelLabel(getTooltip)
}

export default DiscoGlobe