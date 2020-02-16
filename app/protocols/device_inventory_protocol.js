import DateUtil from "utils/date_util"

class DeviceInventoryProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.name || element.Name;
      this._purchaseDate = element.purchaseDate || element.PurchaseDate;
      this._total = element.total || element.Total;
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

    get purchaseDate() {
      return this._purchaseDate;
    }

    get total() {
      return this._total;
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
        purchaseDate: this.purchaseDate,
        total: this.total,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        purchaseDate: DateUtil.convertToDisplayedDate(new Date(this.purchaseDate)),
        total: this.total,
        organizerID: this.organizerId
      }
    }
}
  
export default DeviceInventoryProtocol;