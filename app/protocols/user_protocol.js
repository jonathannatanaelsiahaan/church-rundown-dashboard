class UserProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.Name;
      this._organizerId = element.OrganizerId;
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

    get organizerId() {
      if(this._organizerId == undefined || typeof(this._organizerId) == "undefined") {
        return JSON.parse(localStorage.getItem('data')).organizer.ID;
      }
      
      return this._organizerId;
    }

    toJson() {
      return {
        ID: this.id,
        name: this.name,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        organizerID: this.organizerId
      }
    }
  }
  
  export default UserProtocol;