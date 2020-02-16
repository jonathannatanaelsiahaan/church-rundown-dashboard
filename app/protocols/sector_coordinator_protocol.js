class SectorCoordinatorProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.name || element.Name;
      this._concregationId = element.concregationId || element.concregationID;
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

    get concregationId() {
      return this._concregationId;
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
        concregationID: this.concregationId,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        concregationID: this.concregationId,
        organizerID: this.organizerId
      }
    }
}
  
export default SectorCoordinatorProtocol;