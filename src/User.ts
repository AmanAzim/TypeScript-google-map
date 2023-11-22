import { faker } from "@faker-js/faker";
const { name, address } = faker;

import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: address.latitude(),
      lng: address.longitude(),
    };
  }

  markerContent = (): string => {
    return "<h3>User name is " + this.name + "</h3>";
  };
}
