class OrganizerProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.Name;
      this._displayName = element.DisplayName || element.displayName;
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

    get displayName() {
      return this._displayName;
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
        displayName: this.displayName,
        description: this.description,
        location: this.location
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        displayName: this.displayName,
        description: this.description,
        location: this.location
      }
    }
  }
  
  export default OrganizerProtocol;