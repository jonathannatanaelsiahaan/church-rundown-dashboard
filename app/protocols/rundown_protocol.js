class RundownProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._title = element.title || element.Title;
      this._subtitle = element.subtitle || element.Subtitle;
      this._showTime = element.showTime;
      this._endTime = element.endTime;
      this._organizerId = element.organizerID;
    }

    get primaryKey() {
      return this._primaryKey;
    }

    get id() {
      return this._id;
    }

    get title() {
      return this._title;
    }

    get subtitle() {
      return this._subtitle;
    }

    get showTime() {
      return this._showTime;
    }

    get endTime() {
      return this._endTime;
    }

    get organizerId() {
      if(this._organizerId == undefined || typeof(this._organizerId) == "undefined") {
        return JSON.parse(sessionStorage.getItem('data')).organizer.ID;
      }
      
      return this._organizerId;
    }

    toJson() {
      return {
        ID: this.id,
        title: this.title,
        subtitle: this.subtitle,
        showTime: this.showTime,
        endTime: this.endTime,
        organizerID: this.organizerId
      }
    }
}
  
export default RundownProtocol;