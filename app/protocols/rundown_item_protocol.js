class RundownItemProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._title = element.title || element.Title;
      this._subtitle = element.subtitle || element.Subtitle;
      this._text = element.text || element.Text;
      this._rundownId = element.rundownID || element.rundownId;
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

    get text() {
      return this._text;
    }

    get rundownId() {
      return this._rundownId;
    }

    toJson() {
      return {
        ID: this.id,
        title: this.title,
        subtitle: this.subtitle,
        text: this.text,
        rundownId: this.rundownId
      }
    }
}
  
export default RundownItemProtocol;