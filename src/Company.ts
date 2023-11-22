import { faker } from "@faker-js/faker";
const { name, address, company } = faker;

import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = company.name();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: address.latitude(),
      lng: address.longitude(),
    };
  }

  markerContent = (): string => {
    return "<h3>Company name is " + this.name + "</h3>";
  };
}
