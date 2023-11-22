import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// npx parcel index.html

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//   zoom: 1,
//   center: { lat: 0, lng: 0 },
// });

// map;
