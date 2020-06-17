export default class Disease {
  constructor(name, description, definition, causes, treatment, danger, riskGroup, prevention, createdAt, modifiedAt, symptoms, section) {
    this.name = name;
    this.description = description;
    this.definition = definition;
    this.causes = causes;
    this.treatment = treatment;
    this.danger = danger;
    this.riskGroup = riskGroup;
    this.prevention = prevention;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.symptoms = symptoms;
    this.section = section;
  }
}
