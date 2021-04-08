export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  /*
    Getter for token,
    Check if we have a valid token
  */
  get token(){
      if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
          return null
      }
      else return this._token;
  }
}
