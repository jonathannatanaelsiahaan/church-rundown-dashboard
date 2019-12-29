class AccountProtocol {
    constructor(element = {}) {
      this._primaryKey = element.ID;
      this._id = element.ID;
      this._username = element.Username;
      this._password = element.Password;
      this._userId = element.UserId;
    }

    get primaryKey() {
      return this._primaryKey;
    }

    get id() {
      return this._id;
    }

    get username() {
      return this._username;
    }

    get password() {
      return this._password;
    }

    get userId() {
      return this._userId;
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
        username: this.username,
        password: this.password,
        userId: this.userId,
        organizerID: this.organizerId
      }
    }

    toJsonView() {
      return {
        ID: this.id,
        username: this.username,
        password: this.password,
        userId: this.userId,
        organizerID: this.organizerId
      }
    }
}
  
export default AccountProtocol;