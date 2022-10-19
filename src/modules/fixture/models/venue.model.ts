interface Venue {
  readonly id: string;

  readonly name: string;

  readonly address: string;

  readonly city: string;

  readonly capacity: number;

  readonly surface: string;

  readonly image: string;

  // constructor({
  //   id,
  //   name,
  //   address,
  //   city,
  //   capacity,
  //   surface,
  //   image,
  // }: {
  //   id: string;
  //   name: string;
  //   address: string;
  //   city: string;
  //   capacity: number;
  //   surface: string;
  //   image: string;
  // }) {
  //   this.id = id;
  //   this.name = name;
  //   this.address = address;
  //   this.city = city;
  //   this.capacity = capacity;
  //   this.surface = surface;
  //   this.image = image;
  // }
}

export default Venue;
