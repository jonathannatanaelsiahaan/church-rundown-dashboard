class OrganizerProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.Name;
      this._description = element.Description;
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

    toJson() {
      return {
        ID: this.id,
        name: this.name,
        description: this.description
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        description: this.description
      }
    }
  }
  
  export default OrganizerProtocol;