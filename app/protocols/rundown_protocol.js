class RundownProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._title = element.title || element.Title;
      this._subtitle = element.subtitle || element.Subtitle;
      this._showTime = element.showTime || element.ShowTime;
      this._endTime = element.endTime || element.EndTime;
      this._organizerId = element.organizerID || element.OrganizerID;
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

    convertToDisplayedDate(time) {
      const date = new Date(time);
      var displayedDate = date.getDate()
      var displayedMonth = date.getMonth()
      var displayedHours = date.getHours()
      var displayedMinutes = date.getMinutes()

      if(displayedDate < 10) {
        displayedDate = "0" + displayedDate;
      }

      if(displayedMonth < 10) {
        displayedMonth = "0" + displayedMonth;
      }

      if(displayedHours < 10) {
        displayedHours = "0" + displayedHours;
      }

      if(displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
      }

      return date.getFullYear() + "-" + displayedMonth + "-" + displayedDate + " " + displayedHours + ":" + displayedMinutes
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

    toJsonView() {
      return {
        ID: this.id,
        title: this.title,
        subtitle: this.subtitle,
        showTime: this.convertToDisplayedDate(this.showTime),
        endTime: this.convertToDisplayedDate(this.endTime),
        organizerID: this.organizerId
      }
    }
}
  
export default RundownProtocol;