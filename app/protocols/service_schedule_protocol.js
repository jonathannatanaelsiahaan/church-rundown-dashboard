import DateUtil from "utils/date_util"

class ServiceScheduleProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._name = element.name || element.Name;
      this._text = element.text || element.Text;
      this._date = element.date || element.Date;
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

    get text() {
      return this._text;
    }

    get date() {
      return this._date;
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
        text: this.text,
        date: this.date,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        name: this.name,
        text: this.text,
        date: DateUtil.convertToDisplayedDate(new Date(this.date)),
        organizerID: this.organizerId
      }
    }
}
  
export default ServiceScheduleProtocol;