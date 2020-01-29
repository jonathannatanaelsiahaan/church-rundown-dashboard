class OrganizerProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.Name;
      this._description = element.Description;
      this._location = element.location;
    }

    get primaryKey() {
      return this._primaryKey;
    }

    get id() {
      return this._id;
    }
    
    get name() {
      return this._name;
    }

    get description() {
      return this._description;
    }

    get location() {
      return this._location;
    }

    toJson() {
      return {
        ID: this.id,
        name: this.name,
        description: this.description,
        location: this.location
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        description: this.description,
        location: this.location
      }
    }
  }
  
  export default OrganizerProtocol;