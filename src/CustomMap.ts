export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker({ location: { lat, lng }, markerContent }: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng,
      },
    });
    console.log(">>>>>> ", markerContent());
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerContent(),
        ariaLabel: "Uluru",
      });

      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });
  }
}
