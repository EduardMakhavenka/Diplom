export default class Disease {
  constructor(name, description, createdAt, modifiedAt, symptoms, section) {
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.symptoms = symptoms;
    this.section = section;
  }
}
