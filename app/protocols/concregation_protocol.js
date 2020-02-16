class ConcregationProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.name || element.Name;
      this._age = element.age || element.Age;
      this._address = element.address || element.Address;
      this._organizerId = element.organizerID || element.OrganizerID;
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

    get age() {
      return this._age;
    }

    get address() {
      return this._address;
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
        age: this.age,
        address: this.address,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        age: this.age,
        address: this.address,
        organizerID: this.organizerId
      }
    }
}
  
export default ConcregationProtocol;